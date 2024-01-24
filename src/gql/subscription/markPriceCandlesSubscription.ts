import { Client, ExecutionResult } from "graphql-ws"
import {
  GQLMarkPriceCandle,
  GQLSubscriptionGqlMarkPriceCandlesArgs,
} from "../utils/generated"
import { gqlQuery, convertObjectToPropertiesString } from "../utils/consts"
import { GqlOutMarkPriceCandles } from "../query"
import { defaultMarkPriceCandles } from "../utils/defaultObjects"

export const markPriceCandlesSubscriptionQueryString = (
  args: GQLSubscriptionGqlMarkPriceCandlesArgs,
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
  args: GQLSubscriptionGqlMarkPriceCandlesArgs,
  client?: Client,
  fields?: Partial<GQLMarkPriceCandle>
): Promise<
  AsyncIterableIterator<ExecutionResult<GqlOutMarkPriceCandles>> | undefined
> =>
  client?.iterate({
    query: markPriceCandlesSubscriptionQueryString(args, fields),
  })
