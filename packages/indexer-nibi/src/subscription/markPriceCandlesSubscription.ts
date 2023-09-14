import { Client } from "graphql-ws"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  QueryMarkPriceCandlesArgs,
  Query,
  MarkPriceCandle,
} from "../gql/generated"

export const defaultMarkPriceCandlesObject: MarkPriceCandle = {
  close: 0,
  high: 0,
  low: 0,
  open: 0,
  pair: "",
  period: 0,
  periodStartTs: "",
}

export interface GqlOutMarkPriceCandles {
  markPriceCandles?: Query["markPriceCandles"]
}

export const markPriceCandlesSubscription = async (
  _args: QueryMarkPriceCandlesArgs,
  client: Client,
  _fields?: Partial<MarkPriceCandle>
) => {
  const subscription = client.iterate({
    query: `subscription {
      markPriceCandles(where: {periodGt: 0}, limit: 10) {
        period
        pair
        open
        close
      }
    }`,
  })

  return subscription
}
