import { defaultPool } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  QuerySpotPoolsArgs,
  Query,
  SpotPool,
  SpotPoolOrder,
} from "../gql/generated"

export interface GqlOutSpotPools {
  spotPools?: Query["spotPools"]
}

export const spotPoolsQueryString = (
  args: QuerySpotPoolsArgs,
  excludeParentObject: boolean,
  fields?: Partial<SpotPool>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = SpotPoolOrder.PoolId

  return gqlQuery(
    "spotPools",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultPool),
    excludeParentObject
  )
}

export const spotPools = async (
  args: QuerySpotPoolsArgs,
  endpt: string,
  fields?: Partial<SpotPool>
): Promise<GqlOutSpotPools> =>
  doGqlQuery(spotPoolsQueryString(args, false, fields), endpt)
