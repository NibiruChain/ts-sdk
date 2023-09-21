import { defaultPerpMarket } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import { QueryPerpMarketArgs, Query, PerpMarket } from "../gql/generated"

export const defaultPerpMarketObject: PerpMarket = defaultPerpMarket

export interface GqlOutPerpMarket {
  perpMarket?: Query["perpMarket"]
}

export const perpMarketQueryString = (
  args: QueryPerpMarketArgs,
  excludeParentObject: boolean,
  fields?: Partial<PerpMarket>
) =>
  gqlQuery(
    "perpMarket",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultPerpMarketObject),
    excludeParentObject
  )

export const perpMarket = async (
  args: QueryPerpMarketArgs,
  endpt: string,
  fields?: Partial<PerpMarket>
): Promise<GqlOutPerpMarket> =>
  doGqlQuery(perpMarketQueryString(args, false, fields), endpt)
