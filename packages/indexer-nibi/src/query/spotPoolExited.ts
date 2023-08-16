import { defaultSpotPool } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  QuerySpotPoolExitedArgs,
  SpotPoolExited,
  SpotPoolExitedOrder,
} from "../gql/generated"

export const defaultSpotPoolExitedObject: SpotPoolExited = defaultSpotPool

export interface GqlOutSpotPoolExited {
  spotPoolExited?: Query["spotPoolExited"]
}

export const spotPoolExited = async (
  args: QuerySpotPoolExitedArgs,
  endpt: string,
  fields?: Partial<SpotPoolExited>
): Promise<GqlOutSpotPoolExited> => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = SpotPoolExitedOrder.PoolId

  return doGqlQuery(
    gqlQuery(
      "spotPoolExited",
      args,
      fields
        ? convertObjectToPropertiesString(fields)
        : convertObjectToPropertiesString(defaultSpotPoolExitedObject)
    ),
    endpt
  )
}
