import { defaultSpotPool } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  QuerySpotPoolJoinedArgs,
  SpotPoolJoined,
  SpotPoolJoinedOrder,
} from "../gql/generated"

export const defaultSpotPoolJoinedObject: SpotPoolJoined = defaultSpotPool

export interface GqlOutSpotPoolJoined {
  spotPoolJoined?: Query["spotPoolJoined"]
}

export const spotPoolJoined = async (
  args: QuerySpotPoolJoinedArgs,
  endpt: string
): Promise<GqlOutSpotPoolJoined> => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = SpotPoolJoinedOrder.PoolId

  return doGqlQuery(
    gqlQuery(
      "spotPoolJoined",
      args,
      convertObjectToPropertiesString(defaultSpotPoolJoinedObject)
    ),
    endpt
  )
}
