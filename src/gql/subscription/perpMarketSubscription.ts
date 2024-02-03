import { Client, ExecutionResult } from "graphql-ws"
import {
  GQLSubscriptionGqlPerpMarketArgs,
  GQLPerpMarket,
  GQLSubscription,
  defaultPerpMarket,
  gqlQuery,
  convertObjectToPropertiesString,
} from ".."

export interface GqlOutPerpMarket {
  perpMarket?: GQLSubscription["perpMarket"]
}

export const perpMarketSubscriptionQueryString = (
  args: Partial<GQLSubscriptionGqlPerpMarketArgs>,
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
  args: Partial<GQLSubscriptionGqlPerpMarketArgs>,
  client?: Client,
  fields?: Partial<GQLPerpMarket>
): Promise<
  AsyncIterableIterator<ExecutionResult<GqlOutPerpMarket>> | undefined
> =>
  client?.iterate({
    query: perpMarketSubscriptionQueryString(args, fields),
  })
