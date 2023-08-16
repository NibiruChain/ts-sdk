import { defaultPerpMarket } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  QueryPerpMarketsArgs,
  Query,
  PerpMarket,
  PerpMarketOrder,
} from "../gql/generated"

export const defaultPerpMarketsObject: PerpMarket = defaultPerpMarket

export interface GqlOutPerpMarkets {
  perpMarkets?: Query["perpMarkets"]
}

export const perpMarkets = async (
  args: QueryPerpMarketsArgs,
  endpt: string,
  fields?: Partial<PerpMarket>
): Promise<GqlOutPerpMarkets> => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = PerpMarketOrder.Pair

  return doGqlQuery(
    gqlQuery(
      "perpMarkets",
      args,
      fields
        ? convertObjectToPropertiesString(fields)
        : convertObjectToPropertiesString(defaultPerpMarketsObject)
    ),
    endpt
  )
}
