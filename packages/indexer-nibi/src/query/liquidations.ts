import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Liquidations,
  LiquidationsOrder,
  QueryExt,
  QueryExtLiquidationsArgs,
} from "../gql/generated"

export const defaultLiquidationsObject: Partial<Liquidations> = {
  block: "",
  blockTs: "",
  traderAddress: "",
  pair: "",
  liquidatorAddress: "",
  exchangedQuoteAmount: 0,
  exchangedPositionSize: 0,
  feeToLiquidator: {
    amount: 0,
    denom: "",
  },
  feeToEcosystemFund: {
    amount: 0,
    denom: "",
  },
  badDebt: {
    amount: 0,
    denom: "",
  },
}

export interface GqlOutLiquidations {
  liquidations?: QueryExt["liquidations"]
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
      convertObjectToPropertiesString(defaultLiquidationsObject)
    ),
    endpt
  )
}
