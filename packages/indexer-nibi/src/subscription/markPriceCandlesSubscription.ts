import { Client } from "graphql-ws"
import {
  MarkPriceCandle,
  SubscriptionMarkPriceCandlesArgs,
} from "../gql/generated"
import { gqlQuery, convertObjectToPropertiesString } from "../gql"

export const defaultMarkPriceCandlesObject: MarkPriceCandle = {
  close: 0,
  high: 0,
  low: 0,
  open: 0,
  pair: "",
  period: 0,
  periodStartTs: "",
}

export const markPriceCandlesSubscriptionQueryString = async (
  args: SubscriptionMarkPriceCandlesArgs,
  fields?: Partial<MarkPriceCandle>
) =>
  gqlQuery(
    "markPriceCandles",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultMarkPriceCandlesObject)
  )

export const markPriceCandlesSubscription = async (
  args: SubscriptionMarkPriceCandlesArgs,
  client: Client,
  fields?: Partial<MarkPriceCandle>
) =>
  client.iterate({
    query: `subscription {
      ${markPriceCandlesSubscriptionQueryString(args, fields)}
    }`,
  })
