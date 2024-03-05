import { Client, ExecutionResult } from "graphql-ws"
import {
  GQLSubscriptionGqlOraclePricesArgs,
  GQLOraclePrice,
  GQLSubscription,
  defaultOraclePrice,
  gqlQuery,
  convertObjectToPropertiesString,
  DeepPartial,
} from ".."

export interface GqlOutOraclePrices {
  oraclePrices?: GQLSubscription["oraclePrices"]
}

export const oraclePricesSubscriptionQueryString = (
  args: GQLSubscriptionGqlOraclePricesArgs,
  fields?: DeepPartial<GQLOraclePrice>
) =>
  `subscription {
    ${gqlQuery(
      "oraclePrices",
      args,
      fields
        ? convertObjectToPropertiesString(fields)
        : convertObjectToPropertiesString(defaultOraclePrice),
      true
    )}
  }`

export const oraclePricesSubscription = async (
  args: GQLSubscriptionGqlOraclePricesArgs,
  client?: Client,
  fields?: DeepPartial<GQLOraclePrice>
): Promise<
  AsyncIterableIterator<ExecutionResult<GqlOutOraclePrices>> | undefined
> =>
  client?.iterate({
    query: oraclePricesSubscriptionQueryString(args, fields),
  })
