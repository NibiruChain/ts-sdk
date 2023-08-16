import { defaultPool } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  QuerySpotPoolsArgs,
  Query,
  SpotPool,
  SpotPoolOrder,
} from "../gql/generated"

export const defaultSpotPoolObject: SpotPool = defaultPool

export interface GqlOutSpotPools {
  spotPools?: Query["spotPools"]
}

export const spotPools = async (
  args: QuerySpotPoolsArgs,
  endpt: string,
  fields?: Partial<SpotPool>
): Promise<GqlOutSpotPools> => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = SpotPoolOrder.PoolId

  return doGqlQuery(
    gqlQuery(
      "spotPools",
      args,
      fields
        ? convertObjectToPropertiesString(fields)
        : convertObjectToPropertiesString(defaultSpotPoolObject)
    ),
    endpt
  )
}
