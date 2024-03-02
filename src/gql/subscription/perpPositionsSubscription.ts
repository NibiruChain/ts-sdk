import { Client, ExecutionResult } from "graphql-ws"
import {
  defaultPerpPosition,
  GQLSubscriptionGqlPerpPositionsArgs,
  GQLPerpPosition,
  GQLSubscription,
  gqlQuery,
  convertObjectToPropertiesString,
  DeepPartial,
} from ".."

export interface GqlOutPerpPositions {
  perpPositions?: GQLSubscription["perpPositions"]
}

export const perpPositionsSubscriptionQueryString = (
  args: GQLSubscriptionGqlPerpPositionsArgs,
  fields?: DeepPartial<GQLPerpPosition>
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
  fields?: DeepPartial<GQLPerpPosition>
): Promise<
  AsyncIterableIterator<ExecutionResult<GqlOutPerpPositions>> | undefined
> =>
  client?.iterate({
    query: `subscription {
        ${perpPositionsSubscriptionQueryString(args, fields)}
      }`,
  })
