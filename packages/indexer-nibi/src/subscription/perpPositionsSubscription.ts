import { Client } from "graphql-ws"
import { defaultPerpPosition } from "../defaultObjects"
import { SubscriptionPerpPositionsArgs, PerpPosition } from "../gql/generated"
import { gqlQuery, convertObjectToPropertiesString } from "../gql"

export const defaultPerpPositionsObject: PerpPosition = defaultPerpPosition

export const perpPositionsSubscriptionQueryString = async (
  args: SubscriptionPerpPositionsArgs,
  fields?: Partial<PerpPosition>
) =>
  gqlQuery(
    "perpPositions",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultPerpPositionsObject)
  )

export const perpPositionsSubscription = async (
  args: SubscriptionPerpPositionsArgs,
  client: Client,
  fields?: Partial<PerpPosition>
) =>
  client.iterate({
    query: `subscription {
        ${perpPositionsSubscriptionQueryString(args, fields)}
      }`,
  })
