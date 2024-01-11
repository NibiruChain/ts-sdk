import { Client, ExecutionResult } from "graphql-ws"
import {
  GQLSubscriptionGqlOraclePricesArgs,
  GQLOraclePrice,
  GQLSubscription,
} from "../gql/generated"
import { defaultOraclePrice } from "../defaultObjects"
import { gqlQuery, convertObjectToPropertiesString } from "../gql"

export interface GqlOutOraclePrices {
  oraclePrices?: GQLSubscription["oraclePrices"]
}

export const oraclePricesSubscriptionQueryString = (
  args: GQLSubscriptionGqlOraclePricesArgs,
  fields?: Partial<GQLOraclePrice>
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
  fields?: Partial<GQLOraclePrice>
): Promise<
  AsyncIterableIterator<ExecutionResult<GqlOutOraclePrices>> | undefined
> =>
  client?.iterate({
    query: oraclePricesSubscriptionQueryString(args, fields),
  })
