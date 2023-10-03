import { Client, ExecutionResult } from "graphql-ws"
import { defaultPerpPosition } from "../defaultObjects"
import {
  SubscriptionPerpPositionsArgs,
  PerpPosition,
  Subscription,
} from "../gql/generated"
import { gqlQuery, convertObjectToPropertiesString } from "../gql"

export interface GqlOutPerpPositions {
  perpPositions?: Subscription["perpPositions"]
}

export const perpPositionsSubscriptionQueryString = (
  args: SubscriptionPerpPositionsArgs,
  fields?: Partial<PerpPosition>
) =>
  gqlQuery(
    "perpPositions",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultPerpPosition),
    true
  )

export const perpPositionsSubscription = async (
  args: SubscriptionPerpPositionsArgs,
  client: Client | undefined,
  fields?: Partial<PerpPosition>
): Promise<
  AsyncIterableIterator<ExecutionResult<GqlOutPerpPositions>> | undefined
> =>
  client?.iterate({
    query: `subscription {
        ${perpPositionsSubscriptionQueryString(args, fields)}
      }`,
  })
