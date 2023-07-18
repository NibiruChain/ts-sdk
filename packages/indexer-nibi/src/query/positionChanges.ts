import { gqlQuery } from "../utils"
import { doGqlQuery } from "../gql"
import {
  PositionChangesOrder,
  QueryExt,
  QueryExtPositionChangesArgs,
} from "../gql/generated"

export interface GqlOutPositionChange {
  positionChanges: QueryExt["positionChanges"]
}

export const positionChanges = async (
  args: QueryExtPositionChangesArgs,
  endpt: string
): Promise<GqlOutPositionChange> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = PositionChangesOrder.BlockTs

  return doGqlQuery(
    gqlQuery(
      "positionChanges",
      args,
      `block
       blockTs
       pair
       traderAddress
       margin {
         amount
         denom
       }
       markPrice
       positionSize
       exchangedSize
       positionNotional
       exchangedNotional
       fundingPayment
       transactionFee {
         amount
         denom
       }
       unrealizedPnlAfter
       realizedPnl
       badDebt {
         amount
         denom
       }`
    ),
    endpt
  )
}
