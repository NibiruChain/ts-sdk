import { defaultPerpMarket } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import { QueryPerpMarketArgs, Query, PerpMarket } from "../gql/generated"

export const defaultPerpMarketObject: PerpMarket = defaultPerpMarket

export interface GqlOutPerpMarket {
  perpMarket?: Query["perpMarket"]
}

export const perpMarket = async (
  args: QueryPerpMarketArgs,
  endpt: string
): Promise<GqlOutPerpMarket> =>
  doGqlQuery(
    gqlQuery(
      "perpMarket",
      args,
      convertObjectToPropertiesString(defaultPerpMarketObject)
    ),
    endpt
  )
