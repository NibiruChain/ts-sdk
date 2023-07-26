import { defaultPerpPosition } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  PerpPosition,
  QueryPerpPositionsArgs,
  PerpPositionOrder,
} from "../gql/generated"

export const defaultPerpPositionsObject: PerpPosition = defaultPerpPosition

export interface GqlOutPerpPositions {
  perpPositions?: Query["perpPositions"]
}

export const perpPositions = async (
  args: QueryPerpPositionsArgs,
  endpt: string
): Promise<GqlOutPerpPositions> => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = PerpPositionOrder.CreatedBlock

  return doGqlQuery(
    gqlQuery(
      "perpPositions",
      args,
      convertObjectToPropertiesString(defaultPerpPositionsObject)
    ),
    endpt
  )
}
