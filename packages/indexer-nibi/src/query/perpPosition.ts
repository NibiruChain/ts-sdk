import { defaultPerpPosition } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import { Query, PerpPosition, QueryPerpPositionArgs } from "../gql/generated"

export const defaultPerpPositionObject: PerpPosition = defaultPerpPosition

export interface GqlOutPerpPosition {
  perpPosition?: Query["perpPosition"]
}

export const perpPosition = async (
  args: QueryPerpPositionArgs,
  endpt: string
): Promise<GqlOutPerpPosition> =>
  doGqlQuery(
    gqlQuery(
      "perpPosition",
      args,
      convertObjectToPropertiesString(defaultPerpPositionObject)
    ),
    endpt
  )
