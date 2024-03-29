import {
  defaultOracleEntry,
  defaultOraclePrice,
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLOracleEntry,
  GQLOracleGqlOraclePricesArgs,
  GQLOracleGqlOraclesArgs,
  GQLOraclePrice,
  GQLQuery,
  DeepPartial,
} from ".."

export type QueryOracleArgs = {
  oraclePrices?: GQLOracleGqlOraclePricesArgs
  oracles?: GQLOracleGqlOraclesArgs
}

export interface GqlOutOracle {
  oracle?: GQLQuery["oracle"]
}

export type OracleFields = DeepPartial<{
  oraclePrices?: DeepPartial<GQLOraclePrice>
  oracles?: DeepPartial<GQLOracleEntry>
}>

export const oracleQueryString = (
  args: QueryOracleArgs,
  fields?: OracleFields
) => {
  const oracleQuery: string[] = []

  if (fields?.oraclePrices) {
    oracleQuery.push(
      gqlQuery(
        "oraclePrices",
        args.oraclePrices ?? {},
        convertObjectToPropertiesString(fields.oraclePrices),
        true
      )
    )
  }

  if (fields?.oracles) {
    oracleQuery.push(
      gqlQuery(
        "oracles",
        args.oracles ?? {},
        convertObjectToPropertiesString(fields.oracles),
        true
      )
    )
  }

  // Default Objects

  if (args.oraclePrices && !fields?.oraclePrices) {
    oracleQuery.push(
      gqlQuery(
        "oraclePrices",
        args.oraclePrices,
        convertObjectToPropertiesString(defaultOraclePrice),
        true
      )
    )
  }

  if (args.oracles && !fields?.oracles) {
    oracleQuery.push(
      gqlQuery(
        "oracles",
        args.oracles,
        convertObjectToPropertiesString(defaultOracleEntry),
        true
      )
    )
  }

  return `
        oracle {
          ${oracleQuery.join("\n")}
        }
      `
}

export const oracle = async (
  args: QueryOracleArgs,
  endpt: string,
  fields?: OracleFields
): Promise<GqlOutOracle> =>
  doGqlQuery(
    `{
        ${oracleQueryString(args, fields)}
      }`,
    endpt
  )
