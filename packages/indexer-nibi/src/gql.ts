import { fetch } from "cross-fetch"

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

export const cleanResponse = async (rawResp: Response) => {
  const respJson = await rawResp.json().catch((err) => {
    console.error(err)
    return undefined
  })
  // console.debug("DEBUG respJson: %o", respJson)

  if (respJson?.data) {
    return respJson.data
  }

  return respJson
}

export const gqlQuery = <T>(
  name: string,
  typedQueryArgs: { [key: string]: T },
  properties: string,
  excludeParentObject?: boolean
) => {
  const queryArgList = []

  if (typedQueryArgs.where !== undefined) {
    queryArgList.push(getWhereArgArr(typedQueryArgs.where))
  }

  delete typedQueryArgs.where

  Object.keys(typedQueryArgs).forEach((key) =>
    queryArgList.push(arg(key, typedQueryArgs[key], true))
  )

  const hasQueryList = (char: string) => (queryArgList.length > 0 ? char : "")

  return `${excludeParentObject ? "" : "{"}
    ${name} ${hasQueryList("(")}${queryArgList.join(", ")}${hasQueryList(")")} {
      ${properties}
    }
    ${excludeParentObject ? "" : "}"}`
}

export const doGqlQuery = async (gqlQuery: string, gqlEndpt: string) => {
  const rawResp = await fetch(gqlEndpt, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: gqlQuery }),
  })
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
