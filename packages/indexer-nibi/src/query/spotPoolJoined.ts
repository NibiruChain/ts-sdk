import { defaultSpotPool } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  QuerySpotPoolJoinedArgs,
  SpotPoolJoined,
  SpotPoolJoinedOrder,
} from "../gql/generated"

export interface GqlOutSpotPoolJoined {
  spotPoolJoined?: Query["spotPoolJoined"]
}

export const spotPoolJoinedQueryString = (
  args: QuerySpotPoolJoinedArgs,
  excludeParentObject: boolean,
  fields?: Partial<SpotPoolJoined>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = SpotPoolJoinedOrder.PoolId

  return gqlQuery(
    "spotPoolJoined",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultSpotPool),
    excludeParentObject
  )
}

export const spotPoolJoined = async (
  args: QuerySpotPoolJoinedArgs,
  endpt: string,
  fields?: Partial<SpotPoolJoined>
): Promise<GqlOutSpotPoolJoined> =>
  doGqlQuery(spotPoolJoinedQueryString(args, false, fields), endpt)
