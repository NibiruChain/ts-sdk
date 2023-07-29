import * as cf from "cross-fetch"

declare global {
  interface Window {
    fetch: typeof cf.fetch
  }
}

window.fetch = cf.fetch

const createGqlEndpt = (chain: string) =>
  `https://hm-graphql.${chain}.nibiru.fi/graphql`

export const arg = (name: string, value: any, ignoreQuotes?: boolean) => {
  const isString = typeof value === "string" && !ignoreQuotes ? `"` : ""

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
                  ${convertObjectToPropertiesString(value)}
                }\n`
    } else {
      result += `${key}\n`
    }
  }

  return result
}

export const gqlQuery = <T>(
  name: string,
  typedQueryArgs: { [key: string]: T },
  properties: string
) => {
  let queryArgList = []

  if (
    typedQueryArgs.where !== undefined ||
    typedQueryArgs.limit !== undefined ||
    typedQueryArgs.order_by !== undefined ||
    typedQueryArgs.order_desc !== undefined
  ) {
    if (typedQueryArgs.where !== undefined) {
      queryArgList.push(getWhereArgArr(typedQueryArgs.where))
    }

    if (typedQueryArgs.limit !== undefined) {
      queryArgList.push(arg("limit", typedQueryArgs.limit))
    }

    if (typedQueryArgs.order_by !== undefined) {
      queryArgList.push(arg("order_by", typedQueryArgs.order_by, true))
    }

    if (typedQueryArgs.order_desc !== undefined) {
      queryArgList.push(arg("order_desc", typedQueryArgs.order_desc))
    }
  } else {
    queryArgList = Object.keys(typedQueryArgs).map((key) =>
      arg(key, typedQueryArgs[key])
    )
  }

  const hasQueryList = (char: string) => (queryArgList.length > 0 ? char : "")

  return `{
    ${name} ${hasQueryList("(")}${queryArgList.join(", ")}${hasQueryList(")")} {
      ${properties}
    }
  }`
}

export const doGqlQuery = async (gqlQuery: string, gqlEndpt: string) => {
  const encodedGqlQuery = encodeURI(gqlQuery)
  const fetchString = `${gqlEndpt}?query=${encodedGqlQuery}`
  const rawResp = await window.fetch(fetchString)
  if (!rawResp.ok) {
    throw new Error(`${rawResp}`)
  }

  const respJson = await rawResp.json()
  if (respJson.data) {
    return respJson.data
  }

  return respJson
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
