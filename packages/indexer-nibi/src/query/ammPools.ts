import { Coin } from "../types"
import { doGqlQuery, arg } from "../gql"

export enum AMM_POOL_TYPE {
  NONE,
  STABLESWAP,
}

// ------------------------------------------------
// AmmPool
// ------------------------------------------------

/**
 * AmmPool: A single amm pool data.
 */
export interface AmmPool {
  block: number
  blockTs: string
  poolId: number
  address: string
  swapFee: number
  exitFee: number
  amplification: number
  poolType: AMM_POOL_TYPE
  assets: Coin[]
  totalWeight: number
  totalShares: Coin
}

/** GqlOutAMMPools: Output response for the AMMPool query  */
export interface GqlOutAmmPool {
  ammPools: AmmPool[]
}

/** GqlInAMMPool: Input arguments for the AMMPool query  */
export interface GqlInAmmPool {
  limit: number
  poolId?: number
  address?: string
  swapFee?: number
  exitFee?: number
  totalWeight?: number
  block?: string
  startTs?: string
  endTs?: string
  orderBy?: AmmPoolOrderBy | string
  orderDescending?: boolean // defaults to true
}

export enum AmmPoolOrderBy {
  block = "block",
  block_ts = "block_ts",
  pool_id = "pool_id",
  swap_fee = "swap_fee",
  exit_fee = "exit_fee",
  total_weight = "total_weight",
}

export const ammPools = async (
  args: GqlInAmmPool,
  endpt: string
): Promise<GqlOutAmmPool> => {
  if (args.orderDescending === undefined) args.orderDescending = true
  if (args.orderBy === undefined) args.orderBy = AmmPoolOrderBy.pool_id

  const gqlQuery = ({
    poolId,
    address,
    swapFee,
    exitFee,
    totalWeight,
    block,
    startTs,
    endTs,
    limit,
    orderBy,
    orderDescending,
  }: GqlInAmmPool): string => {
    const argWhere = (): string => {
      const whereConditions: string[] = []
      if (poolId) whereConditions.push(`poolIdEq: "${poolId}"`)
      if (address) whereConditions.push(`addressEq: "${address}"`)
      if (swapFee) whereConditions.push(`swapFeeEq: "${swapFee}"`)
      if (exitFee) whereConditions.push(`exitFeeEq: "${exitFee}"`)
      if (totalWeight) whereConditions.push(`totalWeightEq: "${totalWeight}"`)
      if (block) whereConditions.push(`blockEq: "${block}"`)
      if (startTs) whereConditions.push(`blockTsGte: "${startTs}"`)
      if (endTs) whereConditions.push(`blockTsLt: "${endTs}"`)
      const argWhereBody: string = whereConditions.join(", ")
      return `where: { ${argWhereBody} }`
    }

    const queryArgList: string[] = [
      argWhere(),
      arg("limit", limit),
      arg("order", orderBy),
      arg("orderDesc", orderDescending),
    ]
    const queryArgs: string = queryArgList.join(", ")
    return `{
        ammPools(${queryArgs}) {
          block
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
          }
        }
      }`
  }
  return doGqlQuery(gqlQuery(args), endpt)
}
