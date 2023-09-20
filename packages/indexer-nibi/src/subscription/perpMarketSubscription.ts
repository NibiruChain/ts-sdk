import { Client, ExecutionResult } from "graphql-ws"
import { SubscriptionPerpMarketArgs, PerpMarket } from "../gql/generated"
import { defaultPerpMarket } from "../defaultObjects"
import { gqlQuery, convertObjectToPropertiesString } from "../gql"
import { GqlOutPerpMarket } from "../query"

export const defaultPerpMarketObject: PerpMarket = defaultPerpMarket

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
        : convertObjectToPropertiesString(defaultPerpMarketObject),
      true
    )}
  }`

export const perpMarketSubscription = async (
  args: SubscriptionPerpMarketArgs,
  client: Client,
  fields?: Partial<PerpMarket>
): Promise<AsyncIterableIterator<ExecutionResult<GqlOutPerpMarket>>> =>
  client.iterate({
    query: perpMarketSubscriptionQueryString(args, fields),
  })
