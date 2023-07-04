import { doGqlQuery, arg } from "../gql"

// ------------------------------------------------
// StakingPool
// ------------------------------------------------

/**
 * StakingPool: A single staking pool data.
 */
export interface StakingPool {
  block: number
  blockTs: string
  bondedTokens: number
  notBondedTokens: number
}

/** GqlOutStakingPool: Output response for the StakingPool query  */
export interface GqlOutStakingPool {
  stakingPool: StakingPool[]
}

/** GqlInStakingPool: Input arguments for the StakingPool query  */
export interface GqlInStakingPool {
  limit?: number
  block?: string
  startTs?: string
  endTs?: string
  orderBy?: StakingPoolOrderBy | string
  orderDescending?: boolean // defaults to true
}

export enum StakingPoolOrderBy {
  block = "block",
  block_ts = "block_ts",
}

export const stakingPool = async (
  args: GqlInStakingPool,
  endpt: string
): Promise<GqlOutStakingPool> => {
  if (args.limit === undefined) args.limit = 1
  if (args.orderDescending === undefined) args.orderDescending = true
  if (args.orderBy === undefined) args.orderBy = StakingPoolOrderBy.block_ts

  const gqlQuery = ({
    block,
    startTs,
    endTs,
    limit,
    orderBy,
    orderDescending,
  }: GqlInStakingPool): string => {
    const argWhere = (): string => {
      const whereConditions: string[] = []
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
        stakingPool(${queryArgs}) {
          block
          blockTs
          bondedTokens
          notBondedTokens
        }
      }`
  }
  return doGqlQuery(gqlQuery(args), endpt)
}
