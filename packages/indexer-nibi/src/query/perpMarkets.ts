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

export const perpMarketsQueryString = (
  args: QueryPerpMarketsArgs,
  excludeParentObject: boolean,
  fields?: Partial<PerpMarket>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = PerpMarketOrder.Pair

  return gqlQuery(
    "perpMarkets",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultPerpMarketsObject),
    excludeParentObject
  )
}

export const perpMarkets = async (
  args: QueryPerpMarketsArgs,
  endpt: string,
  fields?: Partial<PerpMarket>
): Promise<GqlOutPerpMarkets> =>
  doGqlQuery(perpMarketsQueryString(args, false, fields), endpt)
