import { Client, ExecutionResult } from "graphql-ws"
import {
  MarkPriceCandle,
  SubscriptionMarkPriceCandlesArgs,
} from "../gql/generated"
import { gqlQuery, convertObjectToPropertiesString } from "../gql"
import { GqlOutMarkPriceCandles } from "../query/markPriceCandles"

export const defaultMarkPriceCandlesObject: MarkPriceCandle = {
  close: 0,
  high: 0,
  low: 0,
  open: 0,
  pair: "",
  period: 0,
  periodStartTs: "",
}

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
        : convertObjectToPropertiesString(defaultMarkPriceCandlesObject),
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
