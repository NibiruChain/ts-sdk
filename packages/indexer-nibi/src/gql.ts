import * as cf from "cross-fetch"

declare global {
  interface Window {
    fetch: typeof cf.fetch
  }
}

window.fetch = cf.fetch

const createGqlEndpt = (chain: string) =>
  `https://hm-graphql.${chain}.nibiru.fi/graphql`

export const arg = (name: string, value: any) => {
  const isString = typeof value === "string" ? `"` : ""
  return `${name}: ${isString}${value}${isString}`
}

export const getWhereArgArr = (whereArgs: any) =>
  `where: {
    ${Object.keys(whereArgs)
      .map((key) => arg(key, whereArgs[key]))
      .join(", ")}
  }`

export const convertObjectToPropertiesString = (obj: any) => {
  let result = ""

  for (const key in obj) {
    const value = obj[key]
    if (Array.isArray(value)) {
      const innerString = value
        .map(
          (item) =>
            `${key} {
              ${Object.keys(item)
                .map((k) => `${k}`)
                .join("\n")}
            }`
        )
        .join("\n")
      result += `${innerString}\n`
    } else if (typeof value === "object" && value !== null) {
      result += `${key} {
                  ${Object.keys(value)
                    .map((k) => `${k}`)
                    .join("\n")}
                }\n`
    } else {
      result += `${key}\n`
    }
  }

  return result
}

export const cleanResponse = async (rawResp: Response) => {
  const respJson = await rawResp.json().catch((err) => {
    console.error(err)
  })
  // console.debug("DEBUG respJson: %o", respJson)

  if (!rawResp.ok || !respJson) {
    throw new Error(`${respJson}`)
  } else if (respJson.data) {
    return respJson.data
  } else {
    return respJson
  }
}

export const gqlQuery = <T>(
  name: string,
  typedQueryArgs: { [key: string]: T },
  properties: string
) => {
  let queryArgList = []

  if (
    typedQueryArgs.where &&
    typedQueryArgs.limit &&
    typedQueryArgs.order &&
    typedQueryArgs.orderDesc
  ) {
    queryArgList = [
      getWhereArgArr(typedQueryArgs.where),
      arg("limit", typedQueryArgs.limit),
      arg("order", typedQueryArgs.order),
      arg("orderDesc", typedQueryArgs.orderDesc),
    ]
  } else {
    queryArgList = Object.keys(typedQueryArgs).map((key) =>
      arg(key, typedQueryArgs[key])
    )
  }

  return `{
    ${name}(${queryArgList.join(", ")}) {
      ${properties}
    }
  }`
}

export const doGqlQuery = async (gqlQuery: string, gqlEndpt: string) => {
  const encodedGqlQuery = encodeURI(gqlQuery)
  const fetchString = `${gqlEndpt}?query=${encodedGqlQuery}`
  const rawResp = await window.fetch(fetchString)
  return cleanResponse(rawResp)
}

export const gqlEndptFromTmRpc = (endptTm: string) => {
  const endptTmParts = endptTm.split(".")
  //  rpcIdx: the index of the substring that includes rpc
  let rpcIdx = -1
  endptTmParts.forEach((part, idx) => {
    if (part.includes("rpc")) {
      rpcIdx = idx
    }
  })

  // nicknameIdx: the index of the substring that includes the chain nickname
  const nicknameIdx = rpcIdx + 1
  const invalidRpcIdx = rpcIdx === -1
  const invalidNicknameIdx = nicknameIdx === endptTmParts.length
  if (invalidRpcIdx || invalidNicknameIdx) {
    return null
  }

  const chainNickname = endptTmParts[nicknameIdx]
  const gqlEndpt = createGqlEndpt(chainNickname)
  return gqlEndpt
}
