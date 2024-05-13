import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQueryGqlSpotPoolsArgs,
  GQLQuery,
  GQLSpotPool,
  GQLSpotPoolOrder,
  DeepPartial,
} from ".."

export interface GqlOutSpotPools {
  spotPools?: GQLQuery["spotPools"]
}

export const spotPoolsQueryString = (
  args: GQLQueryGqlSpotPoolsArgs,
  excludeParentObject: boolean,
  fields: DeepPartial<GQLSpotPool>
) => {
  if (!args.limit) args.limit = 100
  if (!args.order_desc) args.order_desc = true
  if (!args.order_by) args.order_by = GQLSpotPoolOrder.GQLPoolId

  return gqlQuery(
    "spotPools",
    args,
    convertObjectToPropertiesString(fields),
    excludeParentObject
  )
}

export const spotPools = async (
  args: GQLQueryGqlSpotPoolsArgs,
  endpt: string,
  fields: DeepPartial<GQLSpotPool>
): Promise<GqlOutSpotPools> =>
  doGqlQuery(spotPoolsQueryString(args, false, fields), endpt)
