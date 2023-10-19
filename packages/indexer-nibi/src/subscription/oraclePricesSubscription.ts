import { Client, ExecutionResult } from "graphql-ws"
import {
  SubscriptionOraclePricesArgs,
  OraclePrice,
  Subscription,
} from "../gql/generated"
import { defaultOraclePrice } from "../defaultObjects"
import { gqlQuery, convertObjectToPropertiesString } from "../gql"

export interface GqlOutOraclePrices {
  oraclePrices?: Subscription["oraclePrices"]
}

export const oraclePricesSubscriptionQueryString = (
  args: SubscriptionOraclePricesArgs,
  fields?: Partial<OraclePrice>
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
  args: SubscriptionOraclePricesArgs,
  client?: Client,
  fields?: Partial<OraclePrice>
): Promise<
  AsyncIterableIterator<ExecutionResult<GqlOutOraclePrices>> | undefined
> =>
  client?.iterate({
    query: oraclePricesSubscriptionQueryString(args, fields),
  })
