import { gqlQuery } from "../utils"
import { doGqlQuery } from "../gql"
import {
  OraclePricesOrder,
  QueryExt,
  QueryExtOraclePricesArgs,
} from "../gql/generated"

export interface GqlOutOraclePrice {
  oraclePrices: QueryExt["oraclePrices"]
}

export const oraclePrices = async (
  args: QueryExtOraclePricesArgs,
  endpt: string
): Promise<GqlOutOraclePrice> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = OraclePricesOrder.BlockTs

  return doGqlQuery(
    gqlQuery(
      "oraclePrices",
      args,
      `block
       blockTs
       pair
       price`
    ),
    endpt
  )
}
