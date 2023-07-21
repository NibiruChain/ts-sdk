import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  QueryExt,
  QueryExtTransfersArgs,
  Transfers,
  TransfersOrder,
} from "../gql/generated"

export const defaultTransfersObject: Partial<Transfers> = {
  block: 0,
  blockTs: "",
  recipient: "",
  sender: "",
  amount: [
    {
      amount: 0,
      denom: "",
    },
  ],
}

export interface GqlOutTransfers {
  transfers?: QueryExt["transfers"]
}

export const transfers = async (
  args: QueryExtTransfersArgs,
  endpt: string
): Promise<GqlOutTransfers> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = TransfersOrder.BlockTs

  return doGqlQuery(
    gqlQuery(
      "transfers",
      args,
      convertObjectToPropertiesString(defaultTransfersObject)
    ),
    endpt
  )
}
