import { gqlQuery } from "../utils"
import { doGqlQuery } from "../gql"
import {
  LiquidationsOrder,
  QueryExt,
  QueryExtLiquidationsArgs,
} from "../gql/generated"

export interface GqlOutLiquidations {
  liquidations: QueryExt["liquidations"]
}

export const liquidations = async (
  args: QueryExtLiquidationsArgs,
  endpt: string
): Promise<GqlOutLiquidations> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = LiquidationsOrder.BlockTs

  return doGqlQuery(
    gqlQuery(
      "liquidations",
      args,
      `block
       blockTs
       traderAddress
       pair
       liquidatorAddress
       exchangedQuoteAmount
       exchangedPositionSize
       feeToLiquidator {
         amount
         denom
       }
       feeToEcosystemFund {
         amount
         denom
       }
       badDebt {
         amount
         denom
       }`
    ),
    endpt
  )
}
