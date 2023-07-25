import {
  defaultBlock,
  defaultPool,
  defaultTokenAsString,
  defaultUser,
} from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  QuerySpotLpPositionsArgs,
  SpotLpPosition,
  SpotLpPositionOrder,
} from "../gql/generated"

export const defaultSpotLpPositionObject: SpotLpPosition = {
  created_block: defaultBlock,
  pool: defaultPool,
  pool_shares: defaultTokenAsString,
  user: defaultUser,
}

export interface GqlOutSpotLpPositions {
  spotLpPositions?: Query["spotLpPositions"]
}

export const spotLpPositions = async (
  args: QuerySpotLpPositionsArgs,
  endpt: string
): Promise<GqlOutSpotLpPositions> => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = SpotLpPositionOrder.PoolId

  return doGqlQuery(
    gqlQuery(
      "spotLpPositions",
      args,
      convertObjectToPropertiesString(defaultSpotLpPositionObject)
    ),
    endpt
  )
}
