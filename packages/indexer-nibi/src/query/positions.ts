import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Positions,
  PositionsOrder,
  QueryExt,
  QueryExtPositionsArgs,
} from "../gql/generated"

export const defaultPositionsObject: Partial<Positions> = {
  block: 0,
  blockTs: "",
  pair: "",
  trader: "",
  size: 0,
  margin: 0,
  openNotional: 0,
  positionNotional: 0,
  unrealizedPnl: 0,
  marginRatioMark: 0,
  marginRatioIndex: 0,
  openBlock: 0,
}

export interface GqlOutPositions {
  positions?: QueryExt["positions"]
}

export const positions = async (
  args: QueryExtPositionsArgs,
  endpt: string
): Promise<GqlOutPositions> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = PositionsOrder.Block

  return doGqlQuery(
    gqlQuery(
      "positions",
      args,
      convertObjectToPropertiesString(defaultPositionsObject)
    ),
    endpt
  )
}
