import { Client, ExecutionResult } from "graphql-ws"
import {
  GQLMarkPriceCandle,
  GQLSubscriptionGqlMarkPriceCandlesArgs,
  gqlQuery,
  convertObjectToPropertiesString,
  defaultMarkPriceCandles,
  GqlOutMarkPriceCandles,
} from ".."

export const markPriceCandlesSubscriptionQueryString = (
  args: Partial<GQLSubscriptionGqlMarkPriceCandlesArgs>,
  fields?: Partial<GQLMarkPriceCandle>
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
  args: Partial<GQLSubscriptionGqlMarkPriceCandlesArgs>,
  client?: Client,
  fields?: Partial<GQLMarkPriceCandle>
): Promise<
  AsyncIterableIterator<ExecutionResult<GqlOutMarkPriceCandles>> | undefined
> =>
  client?.iterate({
    query: markPriceCandlesSubscriptionQueryString(args, fields),
  })
