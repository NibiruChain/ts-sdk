import { gqlQuery } from "../utils"
import { doGqlQuery } from "../gql"
import { AmmPoolsOrder, QueryExt, QueryExtAmmPoolsArgs } from "../gql/generated"

export interface GqlOutAmmPools {
  ammPools: QueryExt["ammPools"]
}

export const ammPools = async (
  args: QueryExtAmmPoolsArgs,
  endpt: string
): Promise<GqlOutAmmPools> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = AmmPoolsOrder.PoolId

  return doGqlQuery(
    gqlQuery(
      "ammPools",
      args,
      `block
       blockTs
       poolId
       address
       swapFee
       exitFee
       amplification
       poolType
       assets {
         amount
         denom
       }
       totalWeight
       totalShares {
         amount
         denom
       }`
    ),
    endpt
  )
}
