import { Client, ExecutionResult } from "graphql-ws"
import {
  GQLMarkPriceCandle,
  GQLSubscriptionGqlMarkPriceCandlesArgs,
  gqlQuery,
  convertObjectToPropertiesString,
  defaultMarkPriceCandles,
  GqlOutMarkPriceCandles,
  DeepPartial,
} from ".."

export const markPriceCandlesSubscriptionQueryString = (
  args: GQLSubscriptionGqlMarkPriceCandlesArgs,
  fields?: DeepPartial<GQLMarkPriceCandle>
) =>
  `subscription {
    ${gqlQuery(
      "markPriceCandles",
      args,
      fields
        ? convertObjectToPropertiesString(fields)
        : convertObjectToPropertiesString(defaultMarkPriceCandles),
      true
    )}
  }`

export const markPriceCandlesSubscription = async (
  args: GQLSubscriptionGqlMarkPriceCandlesArgs,
  client?: Client,
  fields?: DeepPartial<GQLMarkPriceCandle>
): Promise<
  AsyncIterableIterator<ExecutionResult<GqlOutMarkPriceCandles>> | undefined
> =>
  client?.iterate({
    query: markPriceCandlesSubscriptionQueryString(args, fields),
  })
