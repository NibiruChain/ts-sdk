import { defaultSpotPool } from "../utils/defaultObjects"
import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
} from "../utils/consts"
import {
  GQLQuery,
  GQLQueryGqlSpotPoolJoinedArgs,
  GQLSpotPoolJoined,
  GQLSpotPoolJoinedOrder,
} from "../utils/generated"

export interface GqlOutSpotPoolJoined {
  spotPoolJoined?: GQLQuery["spotPoolJoined"]
}

export const spotPoolJoinedQueryString = (
  args: GQLQueryGqlSpotPoolJoinedArgs,
  excludeParentObject: boolean,
  fields?: Partial<GQLSpotPoolJoined>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = GQLSpotPoolJoinedOrder.GQLPoolId

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
  args: GQLQueryGqlSpotPoolJoinedArgs,
  endpt: string,
  fields?: Partial<GQLSpotPoolJoined>
): Promise<GqlOutSpotPoolJoined> =>
  doGqlQuery(spotPoolJoinedQueryString(args, false, fields), endpt)
