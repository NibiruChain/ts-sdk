import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  PositionChanges,
  PositionChangesOrder,
  QueryExt,
  QueryExtPositionChangesArgs,
} from "../gql/generated"

export const defaultPositionChangesObject: Partial<PositionChanges> = {
  block: 0,
  blockTs: "",
  pair: "",
  traderAddress: "",
  margin: {
    amount: 0,
    denom: "",
  },
  markPrice: 0,
  positionSize: 0,
  exchangedSize: 0,
  positionNotional: 0,
  exchangedNotional: 0,
  fundingPayment: 0,
  transactionFee: {
    amount: 0,
    denom: "",
  },
  unrealizedPnlAfter: 0,
  realizedPnl: 0,
  badDebt: {
    amount: 0,
    denom: "",
  },
}

export interface GqlOutPositionChanges {
  positionChanges?: QueryExt["positionChanges"]
}

export const positionChanges = async (
  args: QueryExtPositionChangesArgs,
  endpt: string
): Promise<GqlOutPositionChanges> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = PositionChangesOrder.BlockTs

  return doGqlQuery(
    gqlQuery(
      "positionChanges",
      args,
      convertObjectToPropertiesString(defaultPositionChangesObject)
    ),
    endpt
  )
}
