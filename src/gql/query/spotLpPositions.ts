import {
  defaultSpotLpPosition,
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQuery,
  GQLQueryGqlSpotLpPositionsArgs,
  GQLSpotLpPosition,
  GQLSpotLpPositionOrder,
  DeepPartial,
} from ".."

export interface GqlOutSpotLpPositions {
  spotLpPositions?: GQLQuery["spotLpPositions"]
}

export const spotLpPositionsQueryString = (
  args: GQLQueryGqlSpotLpPositionsArgs,
  excludeParentObject: boolean,
  fields?: DeepPartial<GQLSpotLpPosition>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = GQLSpotLpPositionOrder.GQLPoolId

  return gqlQuery(
    "spotLpPositions",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultSpotLpPosition),
    excludeParentObject
  )
}

export const spotLpPositions = async (
  args: GQLQueryGqlSpotLpPositionsArgs,
  endpt: string,
  fields?: DeepPartial<GQLSpotLpPosition>
): Promise<GqlOutSpotLpPositions> =>
  doGqlQuery(spotLpPositionsQueryString(args, false, fields), endpt)
