import { gqlQuery } from "../utils"
import { doGqlQuery } from "../gql"
import {
  QueryExt,
  AmmTotalLiquidityOrder,
  QueryExtAmmTotalLiquidityArgs,
} from "../gql/generated"

export interface GqlOutAmmTotalLiquidity {
  ammTotalLiquidity: QueryExt["ammTotalLiquidity"]
}

export const ammTotalLiquidity = async (
  args: QueryExtAmmTotalLiquidityArgs,
  endpt: string
): Promise<GqlOutAmmTotalLiquidity> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = AmmTotalLiquidityOrder.Block

  return doGqlQuery(
    gqlQuery(
      "ammTotalLiquidity",
      args,
      `block
       blockTs
       liquidity {
         amount
         denom
       }`
    ),
    endpt
  )
}
