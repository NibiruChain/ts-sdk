import { Client, ExecutionResult } from "graphql-ws"
import {
  GQLSubscriptionGqlPerpMarketArgs,
  GQLPerpMarket,
  GQLSubscription,
  defaultPerpMarket,
  gqlQuery,
  convertObjectToPropertiesString,
  DeepPartial,
} from ".."

export interface GqlOutPerpMarket {
  perpMarket?: GQLSubscription["perpMarket"]
}

export const perpMarketSubscriptionQueryString = (
  args: GQLSubscriptionGqlPerpMarketArgs,
  fields?: DeepPartial<GQLPerpMarket>
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
  fields?: DeepPartial<GQLPerpMarket>
): Promise<
  AsyncIterableIterator<ExecutionResult<GqlOutPerpMarket>> | undefined
> =>
  client?.iterate({
    query: perpMarketSubscriptionQueryString(args, fields),
  })
