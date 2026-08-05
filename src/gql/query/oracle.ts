import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLOracleGqlOraclePricesArgs,
  GQLOraclePrice,
  GQLQuery,
  DeepPartial,
} from ".."

export type QueryOracleArgs = {
  oraclePrices?: GQLOracleGqlOraclePricesArgs
}

export interface GqlOutOracle {
  oracle?: GQLQuery["oracle"]
}

export type OracleFields = DeepPartial<{
  oraclePrices?: DeepPartial<GQLOraclePrice>
}>

export const oracleQueryString = (
  args: QueryOracleArgs,
  fields: OracleFields
) => {
  const oracleQuery: string[] = []

  if (fields.oraclePrices) {
    oracleQuery.push(
      gqlQuery(
        "oraclePrices",
        args.oraclePrices ?? {},
        convertObjectToPropertiesString(fields.oraclePrices),
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
  fields: OracleFields
): Promise<GqlOutOracle> =>
  doGqlQuery(
    `{
      ${oracleQueryString(args, fields)}
    }`,
    endpt
  )
