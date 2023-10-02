import { Client, ExecutionResult } from "graphql-ws"
import {
  MarkPriceCandle,
  SubscriptionMarkPriceCandlesArgs,
} from "../gql/generated"
import { gqlQuery, convertObjectToPropertiesString } from "../gql"
import { GqlOutMarkPriceCandles } from "../query"
import { defaultMarkPriceCandles } from "../defaultObjects"

export const markPriceCandlesSubscriptionQueryString = (
  args: SubscriptionMarkPriceCandlesArgs,
  fields?: Partial<MarkPriceCandle>
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
  args: SubscriptionMarkPriceCandlesArgs,
  client: Client,
  fields?: Partial<MarkPriceCandle>
): Promise<AsyncIterableIterator<ExecutionResult<GqlOutMarkPriceCandles>>> =>
  client.iterate({
    query: markPriceCandlesSubscriptionQueryString(args, fields),
  })
