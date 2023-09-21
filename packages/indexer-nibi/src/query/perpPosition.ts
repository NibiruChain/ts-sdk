import { defaultPerpPosition } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import { Query, PerpPosition, QueryPerpPositionArgs } from "../gql/generated"

export const defaultPerpPositionObject: PerpPosition = defaultPerpPosition

export interface GqlOutPerpPosition {
  perpPosition?: Query["perpPosition"]
}

export const perpPositionQueryString = (
  args: QueryPerpPositionArgs,
  excludeParentObject: boolean,
  fields?: Partial<PerpPosition>
) =>
  gqlQuery(
    "perpPosition",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultPerpPositionObject),
    excludeParentObject
  )

export const perpPosition = async (
  args: QueryPerpPositionArgs,
  endpt: string,
  fields?: Partial<PerpPosition>
): Promise<GqlOutPerpPosition> =>
  doGqlQuery(perpPositionQueryString(args, false, fields), endpt)
