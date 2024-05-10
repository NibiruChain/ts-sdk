import { Client, ExecutionResult } from "graphql-ws"
import {
  GQLMarkPriceCandle,
  GQLSubscriptionGqlMarkPriceCandlesArgs,
  gqlQuery,
  convertObjectToPropertiesString,
  GqlOutMarkPriceCandles,
  DeepPartial,
} from ".."

export const markPriceCandlesSubscriptionQueryString = (
  args: GQLSubscriptionGqlMarkPriceCandlesArgs,
  fields: DeepPartial<GQLMarkPriceCandle>
) =>
  `subscription {
    ${gqlQuery(
      "markPriceCandles",
      args,
      convertObjectToPropertiesString(fields),
      true
    )}
  }`

export const markPriceCandlesSubscription = async (
  args: GQLSubscriptionGqlMarkPriceCandlesArgs,
  fields: DeepPartial<GQLMarkPriceCandle>,
  client?: Client
): Promise<
  AsyncIterableIterator<ExecutionResult<GqlOutMarkPriceCandles>> | undefined
> =>
  client?.iterate({
    query: markPriceCandlesSubscriptionQueryString(args, fields),
  })
