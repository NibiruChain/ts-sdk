import { Client, ExecutionResult } from "graphql-ws"
import {
  SubscriptionPerpMarketArgs,
  PerpMarket,
  Subscription,
} from "../gql/generated"
import { defaultPerpMarket } from "../defaultObjects"
import { gqlQuery, convertObjectToPropertiesString } from "../gql"

export interface GqlOutPerpMarket {
  perpMarket?: Subscription["perpMarket"]
}

export const perpMarketSubscriptionQueryString = (
  args: SubscriptionPerpMarketArgs,
  fields?: Partial<PerpMarket>
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
  args: SubscriptionPerpMarketArgs,
  client?: Client,
  fields?: Partial<PerpMarket>
): Promise<
  AsyncIterableIterator<ExecutionResult<GqlOutPerpMarket>> | undefined
> =>
  client?.iterate({
    query: perpMarketSubscriptionQueryString(args, fields),
  })
