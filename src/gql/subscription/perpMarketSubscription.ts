import { Client, ExecutionResult } from "graphql-ws"
import {
  GQLSubscriptionGqlPerpMarketArgs,
  GQLPerpMarket,
  GQLSubscription,
  gqlQuery,
  convertObjectToPropertiesString,
  DeepPartial,
} from ".."

export interface GqlOutPerpMarket {
  perpMarket?: GQLSubscription["perpMarket"]
}

export const perpMarketSubscriptionQueryString = (
  args: GQLSubscriptionGqlPerpMarketArgs,
  fields: DeepPartial<GQLPerpMarket>
) =>
  `subscription {
    ${gqlQuery(
      "perpMarket",
      args,
      convertObjectToPropertiesString(fields),
      true
    )}
  }`

export const perpMarketSubscription = async (
  args: GQLSubscriptionGqlPerpMarketArgs,
  fields: DeepPartial<GQLPerpMarket>,
  client?: Client
): Promise<
  AsyncIterableIterator<ExecutionResult<GqlOutPerpMarket>> | undefined
> =>
  client?.iterate({
    query: perpMarketSubscriptionQueryString(args, fields),
  })
