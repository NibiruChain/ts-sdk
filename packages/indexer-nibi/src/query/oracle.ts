import { defaultOracleEntry, defaultOraclePrice } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  OracleEntry,
  OracleOraclePricesArgs,
  OracleOraclesArgs,
  OraclePrice,
  Query,
} from "../gql/generated"

export type QueryOracleArgs = {
  oraclePrices?: OracleOraclePricesArgs
  oracles?: OracleOraclesArgs
}

export interface GqlOutOracle {
  oracle?: Query["oracle"]
}

export type OracleFields = Partial<{
  oraclePrices?: Partial<OraclePrice>
  oracles?: Partial<OracleEntry>
}>

export const oracleQueryString = (
  args: QueryOracleArgs,
  fields?: OracleFields
) => {
  const oracleQuery: string[] = []

  if (fields) {
    if (fields?.oraclePrices) {
      oracleQuery.push(
        gqlQuery(
          "oraclePrices",
          args?.oraclePrices ?? {},
          convertObjectToPropertiesString(fields.oraclePrices),
          true
        )
      )
    }

    if (fields?.oracles) {
      oracleQuery.push(
        gqlQuery(
          "oracles",
          args?.oracles ?? {},
          convertObjectToPropertiesString(fields.oracles),
          true
        )
      )
    }
  } else {
    oracleQuery.push(
      gqlQuery(
        "oraclePrices",
        args?.oraclePrices ?? {},
        convertObjectToPropertiesString(defaultOraclePrice),
        true
      )
    )

    oracleQuery.push(
      gqlQuery(
        "oracles",
        args?.oracles ?? {},
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
