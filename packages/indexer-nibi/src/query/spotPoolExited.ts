import { defaultSpotPool } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  QuerySpotPoolExitedArgs,
  SpotPoolExited,
  SpotPoolExitedOrder,
} from "../gql/generated"

export interface GqlOutSpotPoolExited {
  spotPoolExited?: Query["spotPoolExited"]
}

export const spotPoolExitedQueryString = (
  args: QuerySpotPoolExitedArgs,
  excludeParentObject: boolean,
  fields?: Partial<SpotPoolExited>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = SpotPoolExitedOrder.PoolId

  return gqlQuery(
    "spotPoolExited",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultSpotPool),
    excludeParentObject
  )
}

export const spotPoolExited = async (
  args: QuerySpotPoolExitedArgs,
  endpt: string,
  fields?: Partial<SpotPoolExited>
): Promise<GqlOutSpotPoolExited> =>
  doGqlQuery(spotPoolExitedQueryString(args, false, fields), endpt)
