import { Client, ExecutionResult } from "graphql-ws"
import {
  GQLSubscriptionGqlOraclePricesArgs,
  GQLOraclePrice,
  GQLSubscription,
  gqlQuery,
  convertObjectToPropertiesString,
  DeepPartial,
} from ".."

export interface GqlOutOraclePrices {
  oraclePrices?: GQLSubscription["oraclePrices"]
}

export const oraclePricesSubscriptionQueryString = (
  args: GQLSubscriptionGqlOraclePricesArgs,
  fields: DeepPartial<GQLOraclePrice>
) =>
  gqlQuery("oraclePrices", args, convertObjectToPropertiesString(fields), true)

export const oraclePricesSubscription = async (
  args: GQLSubscriptionGqlOraclePricesArgs,
  fields: DeepPartial<GQLOraclePrice>,
  client?: Client
): Promise<
  AsyncIterableIterator<ExecutionResult<GqlOutOraclePrices>> | undefined
> =>
  client?.iterate({
    query: `subscription {${oraclePricesSubscriptionQueryString(
      args,
      fields
    )}}`,
  })
