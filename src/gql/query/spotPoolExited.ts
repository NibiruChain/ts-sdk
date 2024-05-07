import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQuery,
  GQLQueryGqlSpotPoolExitedArgs,
  GQLSpotPoolExited,
  GQLSpotPoolExitedOrder,
  DeepPartial,
} from ".."

export interface GqlOutSpotPoolExited {
  spotPoolExited?: GQLQuery["spotPoolExited"]
}

export const spotPoolExitedQueryString = (
  args: GQLQueryGqlSpotPoolExitedArgs,
  excludeParentObject: boolean,
  fields: DeepPartial<GQLSpotPoolExited>
) => {
  if (!args.limit) args.limit = 100
  if (!args.order_desc) args.order_desc = true
  if (!args.order_by) args.order_by = GQLSpotPoolExitedOrder.GQLPoolId

  return gqlQuery(
    "spotPoolExited",
    args,
    convertObjectToPropertiesString(fields),
    excludeParentObject
  )
}

export const spotPoolExited = async (
  args: GQLQueryGqlSpotPoolExitedArgs,
  endpt: string,
  fields: DeepPartial<GQLSpotPoolExited>
): Promise<GqlOutSpotPoolExited> =>
  doGqlQuery(spotPoolExitedQueryString(args, false, fields), endpt)
