import { defaultSpotPool } from "../utils/defaultObjects"
import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
} from "../utils/consts"
import {
  GQLQuery,
  GQLQueryGqlSpotPoolExitedArgs,
  GQLSpotPoolExited,
  GQLSpotPoolExitedOrder,
} from "../utils/generated"

export interface GqlOutSpotPoolExited {
  spotPoolExited?: GQLQuery["spotPoolExited"]
}

export const spotPoolExitedQueryString = (
  args: GQLQueryGqlSpotPoolExitedArgs,
  excludeParentObject: boolean,
  fields?: Partial<GQLSpotPoolExited>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = GQLSpotPoolExitedOrder.GQLPoolId

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
  args: GQLQueryGqlSpotPoolExitedArgs,
  endpt: string,
  fields?: Partial<GQLSpotPoolExited>
): Promise<GqlOutSpotPoolExited> =>
  doGqlQuery(spotPoolExitedQueryString(args, false, fields), endpt)
