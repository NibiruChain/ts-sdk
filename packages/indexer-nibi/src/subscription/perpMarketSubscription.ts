import { Client } from "graphql-ws"
import { SubscriptionPerpMarketArgs, PerpMarket } from "../gql/generated"
import { defaultPerpMarket } from "../defaultObjects"
import { gqlQuery, convertObjectToPropertiesString } from "../gql"

export const defaultPerpMarketObject: PerpMarket = defaultPerpMarket

export const perpMarketSubscriptionQueryString = async (
  args: SubscriptionPerpMarketArgs,
  fields?: Partial<PerpMarket>
) =>
  gqlQuery(
    "perpMarket",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultPerpMarketObject)
  )

export const perpMarketSubscription = async (
  args: SubscriptionPerpMarketArgs,
  client: Client,
  fields?: Partial<PerpMarket>
) =>
  client.iterate({
    query: `subscription {
      ${perpMarketSubscriptionQueryString(args, fields)}
    }`,
  })
