import { fetch } from "cross-fetch"

type OptionalArrayOr<T, Otherwise> = T extends T[] ? T[] | undefined : Otherwise
type OptionalUndefinedOr<T, Otherwise> = T extends undefined
  ? undefined
  : Otherwise
type OptionalNullOr<T, Otherwise> = T extends null
  ? null | undefined
  : Otherwise
type OptionalStringOr<T, Otherwise> = T extends string
  ? T | undefined
  : Otherwise
type OptionalNumberOr<T, Otherwise> = T extends number
  ? T | undefined
  : Otherwise
type OptionalBooleanOr<T, Otherwise> = T extends boolean
  ? boolean | undefined
  : Otherwise

export type DeepPartial<T> = OptionalStringOr<
  T,
  OptionalNumberOr<
    T,
    OptionalBooleanOr<
      T,
      OptionalNullOr<
        T,
        OptionalUndefinedOr<
          T,
          OptionalArrayOr<
            T,
            T extends object
              ? { [Key in keyof T]?: DeepPartial<T[Key]> }
              : undefined
          >
        >
      >
    >
  >
>

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

export const arg = <T>(
  name: string,
  value: unknown,
  ignoreQuotes?: boolean
) => {
  const isString = typeof value === "string" && !ignoreQuotes ? `"` : ""

  return typeof value === "object"
    ? `${name}: ${objToGql(value as IterableDictionary<T>)}`
    : `${name}: ${isString}${value}${isString}`
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
    queryArgList.push(arg<T>(key, typedQueryArgs[key], true))
  )

  const hasQueryList = (char: string) => (queryArgList.length > 0 ? char : "")

  return `${excludeParentObject ? "" : "{"}
    ${name} ${hasQueryList("(")}${queryArgList.join(", ")}${hasQueryList(")")} {
      ${properties}
    }
    ${excludeParentObject ? "" : "}"}`
}

export const doGqlQuery = async <T>(
  gqlQuery: string,
  gqlEndpt: string,
  headers?: HeadersInit
) => {
  const rawResp = await fetch(gqlEndpt, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify({ query: gqlQuery }),
  })
  return cleanResponse(rawResp) as T
}
