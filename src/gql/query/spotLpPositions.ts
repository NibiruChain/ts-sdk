import { defaultSpotLpPosition } from "../utils/defaultObjects"
import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
} from "../utils/consts"
import {
  GQLQuery,
  GQLQueryGqlSpotLpPositionsArgs,
  GQLSpotLpPosition,
  GQLSpotLpPositionOrder,
} from "../utils/generated"

export interface GqlOutSpotLpPositions {
  spotLpPositions?: GQLQuery["spotLpPositions"]
}

export const spotLpPositionsQueryString = (
  args: GQLQueryGqlSpotLpPositionsArgs,
  excludeParentObject: boolean,
  fields?: Partial<GQLSpotLpPosition>
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
  fields?: Partial<GQLSpotLpPosition>
): Promise<GqlOutSpotLpPositions> =>
  doGqlQuery(spotLpPositionsQueryString(args, false, fields), endpt)
