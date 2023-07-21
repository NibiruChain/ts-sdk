import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  AmmPools,
  AmmPoolsOrder,
  QueryExt,
  QueryExtAmmPoolsArgs,
} from "../gql/generated"

export const defaultAmmPoolsObject: Partial<AmmPools> = {
  block: 0,
  blockTs: "",
  poolId: 0,
  address: "",
  swapFee: 0,
  exitFee: 0,
  amplification: 0,
  poolType: "",
  assets: [
    {
      amount: 0,
      denom: "",
    },
  ],
  totalWeight: 0,
  totalShares: {
    amount: 0,
    denom: "",
  },
}

export interface GqlOutAmmPools {
  ammPools?: QueryExt["ammPools"]
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
      convertObjectToPropertiesString(defaultAmmPoolsObject)
    ),
    endpt
  )
}
