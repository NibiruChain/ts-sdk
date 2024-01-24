import { fetch } from "cross-fetch"

export type IterableDictionary<T> = { [key: string]: T }

export const checkFields = <T>(objects: T[], fields: string[]) => {
  objects.forEach((obj: T) => {
    fields.forEach((field: string) => {
      expect(obj).toHaveProperty(field)
    })
  })
}

export const queryBatchHandler = async <T>(
  queryQueryStrings: string[],
  endpt: string
) => <T>doGqlQuery(`{ ${queryQueryStrings.join("\n")} }`, endpt)

const createGqlEndpt = (chain: string) =>
  `https://hm-graphql.${chain}.nibiru.fi/graphql`

export const arg = (name: string, value: unknown, ignoreQuotes?: boolean) => {
  const isString = typeof value === "string" && !ignoreQuotes ? `"` : ""

  return `${name}: ${isString}${value}${isString}`
}

export const objToGql = <T>(obj: IterableDictionary<T>): string | number => {
  // Make sure we don't alter integers.
  if (typeof obj === "number") {
    return obj
  }

  // Stringify everything other than objects and arrays.
  if (typeof obj !== "object" || Array.isArray(obj)) {
    return JSON.stringify(obj)
  }

  // Iterate through object keys to convert into a string
  // to be interpolated into the query.
  const res = `{
    ${Object.keys(obj)
      .map((key) => `${key}:${objToGql(obj[key] as IterableDictionary<T>)}`)
      .join(", ")}
  }`

  return res
}

export const getWhereArgArr = <T>(whereArgs: IterableDictionary<T>) =>
  `where: ${objToGql(whereArgs)}`

export const convertObjectToPropertiesString = <T>(
  obj: IterableDictionary<T>
) => {
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
                  ${convertObjectToPropertiesString(
                    value as IterableDictionary<T>
                  )}
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
  typedQueryArgs: IterableDictionary<T>,
  properties: string,
  excludeParentObject?: boolean
) => {
  const queryArgList = []

  if (typedQueryArgs.where !== undefined) {
    queryArgList.push(
      getWhereArgArr(typedQueryArgs.where as IterableDictionary<T>)
    )
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

export const doGqlQuery = async <T>(gqlQuery: string, gqlEndpt: string) => {
  const rawResp = await fetch(gqlEndpt, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: gqlQuery }),
  })
  return cleanResponse(rawResp) as T
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
