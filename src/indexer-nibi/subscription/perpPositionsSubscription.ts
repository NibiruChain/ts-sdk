import { Client, ExecutionResult } from "graphql-ws"
import { defaultPerpPosition } from "../defaultObjects"
import {
  GQLSubscriptionGqlPerpPositionsArgs,
  GQLPerpPosition,
  GQLSubscription,
} from "../gql/generated"
import { gqlQuery, convertObjectToPropertiesString } from "../gql"

export interface GqlOutPerpPositions {
  perpPositions?: GQLSubscription["perpPositions"]
}

export const perpPositionsSubscriptionQueryString = (
  args: GQLSubscriptionGqlPerpPositionsArgs,
  fields?: Partial<GQLPerpPosition>
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
  args: GQLSubscriptionGqlPerpPositionsArgs,
  client?: Client,
  fields?: Partial<GQLPerpPosition>
): Promise<
  AsyncIterableIterator<ExecutionResult<GqlOutPerpPositions>> | undefined
> =>
  client?.iterate({
    query: `subscription {
        ${perpPositionsSubscriptionQueryString(args, fields)}
      }`,
  })
