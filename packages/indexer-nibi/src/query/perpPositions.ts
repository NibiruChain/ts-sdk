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

export const perpPositionsQueryString = (
  args: QueryPerpPositionsArgs,
  excludeParentObject: boolean,
  fields?: Partial<PerpPosition>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = PerpPositionOrder.CreatedBlock

  return gqlQuery(
    "perpPositions",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultPerpPositionsObject),
    excludeParentObject
  )
}

export const perpPositions = async (
  args: QueryPerpPositionsArgs,
  endpt: string,
  fields?: Partial<PerpPosition>
): Promise<GqlOutPerpPositions> =>
  doGqlQuery(perpPositionsQueryString(args, false, fields), endpt)
