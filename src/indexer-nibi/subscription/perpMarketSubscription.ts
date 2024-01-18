import { Client, ExecutionResult } from "graphql-ws"
import {
  GQLSubscriptionGqlPerpMarketArgs,
  GQLPerpMarket,
  GQLSubscription,
} from "../gql/generated"
import { defaultPerpMarket } from "../defaultObjects"
import { gqlQuery, convertObjectToPropertiesString } from "../gql"

export interface GqlOutPerpMarket {
  perpMarket?: GQLSubscription["perpMarket"]
}

export const perpMarketSubscriptionQueryString = (
  args: GQLSubscriptionGqlPerpMarketArgs,
  fields?: Partial<GQLPerpMarket>
) =>
  `subscription {
    ${gqlQuery(
      "perpMarket",
      args,
      fields
        ? convertObjectToPropertiesString(fields)
        : convertObjectToPropertiesString(defaultPerpMarket),
      true
    )}
  }`

export const perpMarketSubscription = async (
  args: GQLSubscriptionGqlPerpMarketArgs,
  client?: Client,
  fields?: Partial<GQLPerpMarket>
): Promise<
  AsyncIterableIterator<ExecutionResult<GqlOutPerpMarket>> | undefined
> =>
  client?.iterate({
    query: perpMarketSubscriptionQueryString(args, fields),
  })
