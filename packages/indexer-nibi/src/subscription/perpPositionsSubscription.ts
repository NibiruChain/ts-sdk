import { Client, ExecutionResult } from "graphql-ws"
import { defaultPerpPosition } from "../defaultObjects"
import { SubscriptionPerpPositionsArgs, PerpPosition } from "../gql/generated"
import { gqlQuery, convertObjectToPropertiesString } from "../gql"
import { GqlOutPerpPositions } from "../query"

export const defaultPerpPositionsObject: PerpPosition = defaultPerpPosition

export const perpPositionsSubscriptionQueryString = (
  args: SubscriptionPerpPositionsArgs,
  fields?: Partial<PerpPosition>
) =>
  gqlQuery(
    "perpPositions",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultPerpPositionsObject),
    true
  )

export const perpPositionsSubscription = async (
  args: SubscriptionPerpPositionsArgs,
  client: Client,
  fields?: Partial<PerpPosition>
): Promise<AsyncIterableIterator<ExecutionResult<GqlOutPerpPositions>>> =>
  client.iterate({
    query: `subscription {
        ${perpPositionsSubscriptionQueryString(args, fields)}
      }`,
  })
