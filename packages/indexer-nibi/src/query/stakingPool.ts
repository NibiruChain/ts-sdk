import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  QueryExt,
  QueryExtStakingPoolArgs,
  StakingPool,
  StakingPoolOrder,
} from "../gql/generated"

export const defaultStakingPoolObject: Partial<StakingPool> = {
  block: "",
  blockTs: "",
  bondedTokens: "",
  notBondedTokens: "",
}

export interface GqlOutStakingPool {
  stakingPool?: QueryExt["stakingPool"]
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
      convertObjectToPropertiesString(defaultStakingPoolObject)
    ),
    endpt
  )
}
