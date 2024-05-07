import { Client, ExecutionResult } from "graphql-ws"
import {
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
  fields: DeepPartial<GQLPerpPosition>
) =>
  gqlQuery("perpPositions", args, convertObjectToPropertiesString(fields), true)

export const perpPositionsSubscription = async (
  args: GQLSubscriptionGqlPerpPositionsArgs,
  fields: DeepPartial<GQLPerpPosition>,
  client?: Client
): Promise<
  AsyncIterableIterator<ExecutionResult<GqlOutPerpPositions>> | undefined
> =>
  client?.iterate({
    query: `subscription {
        ${perpPositionsSubscriptionQueryString(args, fields)}
      }`,
  })
