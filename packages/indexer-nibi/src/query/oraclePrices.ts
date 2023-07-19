import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  OraclePrices,
  OraclePricesOrder,
  QueryExt,
  QueryExtOraclePricesArgs,
} from "../gql/generated"

export const defaultOraclePricesObject: Partial<OraclePrices> = {
  block: 0,
  blockTs: "",
  pair: "",
  price: 0,
}

export interface GqlOutOraclePrices {
  oraclePrices?: QueryExt["oraclePrices"]
}

export const oraclePrices = async (
  args: QueryExtOraclePricesArgs,
  endpt: string
): Promise<GqlOutOraclePrices> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = OraclePricesOrder.BlockTs

  return doGqlQuery(
    gqlQuery(
      "oraclePrices",
      args,
      convertObjectToPropertiesString(defaultOraclePricesObject)
    ),
    endpt
  )
}
