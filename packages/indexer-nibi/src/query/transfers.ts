import { gqlQuery } from "../utils"
import { doGqlQuery } from "../gql"
import {
  QueryExt,
  QueryExtTransfersArgs,
  TransfersOrder,
} from "../gql/generated"

export interface GqlOutTransfer {
  transfers: QueryExt["transfers"]
}

export const transfers = async (
  args: QueryExtTransfersArgs,
  endpt: string
): Promise<GqlOutTransfer> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = TransfersOrder.BlockTs

  return doGqlQuery(
    gqlQuery(
      "transfers",
      args,
      `block
       blockTs
       recipient
       sender
       amount {
         amount
         denom
       }`
    ),
    endpt
  )
}
