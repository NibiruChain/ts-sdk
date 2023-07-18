import { gqlQuery } from "../utils"
import { doGqlQuery } from "../gql"
import {
  PositionsOrder,
  QueryExt,
  QueryExtPositionsArgs,
} from "../gql/generated"

export interface GqlOutPosition {
  positions: QueryExt["positions"]
}

export const positions = async (
  args: QueryExtPositionsArgs,
  endpt: string
): Promise<GqlOutPosition> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = PositionsOrder.Block

  return doGqlQuery(
    gqlQuery(
      "positions",
      args,
      `block
       blockTs
       pair
       trader
       size
       margin
       openNotional
       positionNotional
       unrealizedPnl
       marginRatioMark
       marginRatioIndex
       openBlock`
    ),
    endpt
  )
}
