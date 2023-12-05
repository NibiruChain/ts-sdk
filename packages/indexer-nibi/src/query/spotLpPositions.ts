import { defaultSpotLpPosition } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  QuerySpotLpPositionsArgs,
  SpotLpPosition,
  SpotLpPositionOrder,
} from "../gql/generated"

export interface GqlOutSpotLpPositions {
  spotLpPositions?: Query["spotLpPositions"]
}

export const spotLpPositionsQueryString = (
  args: QuerySpotLpPositionsArgs,
  excludeParentObject: boolean,
  fields?: Partial<SpotLpPosition>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = SpotLpPositionOrder.PoolId

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
  args: QuerySpotLpPositionsArgs,
  endpt: string,
  fields?: Partial<SpotLpPosition>
): Promise<GqlOutSpotLpPositions> =>
  doGqlQuery(spotLpPositionsQueryString(args, false, fields), endpt)
