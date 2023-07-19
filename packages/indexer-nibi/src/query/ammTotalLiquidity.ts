import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  QueryExt,
  AmmTotalLiquidityOrder,
  QueryExtAmmTotalLiquidityArgs,
  AmmTotalLiquidity,
} from "../gql/generated"

export const defaultAmmTotalLiquidityObject: Partial<AmmTotalLiquidity> = {
  block: "",
  blockTs: "",
  liquidity: [
    {
      amount: 0,
      denom: "",
    },
  ],
}

export interface GqlOutAmmTotalLiquidity {
  ammTotalLiquidity?: QueryExt["ammTotalLiquidity"]
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
      convertObjectToPropertiesString(defaultAmmTotalLiquidityObject)
    ),
    endpt
  )
}
