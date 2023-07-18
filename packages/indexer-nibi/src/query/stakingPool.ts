import { gqlQuery } from "../utils"
import { doGqlQuery } from "../gql"
import {
  QueryExt,
  QueryExtStakingPoolArgs,
  StakingPoolOrder,
} from "../gql/generated"

export interface GqlOutStakingPool {
  stakingPool: QueryExt["stakingPool"]
}

export const stakingPool = async (
  args: QueryExtStakingPoolArgs,
  endpt: string
): Promise<GqlOutStakingPool> => {
  if (!args.limit) args.limit = 1
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = StakingPoolOrder.BlockTs

  return doGqlQuery(
    gqlQuery(
      "stakingPool",
      args,
      `block
       blockTs
       bondedTokens
       notBondedTokens`
    ),
    endpt
  )
}
