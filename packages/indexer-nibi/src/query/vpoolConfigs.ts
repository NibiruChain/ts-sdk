import { doGqlQuery, arg } from "../gql"

// ------------------------------------------------
// VPoolConfig
// ------------------------------------------------

/**
 * VPoolConfig: A single vpool config data.
 */
export interface VPoolConfig {
  block: number
  blockTs: string
  pair: string
  tradeLimitRatio: number
  fluctuationLimitRatio: number
  maxOracleSpreadRatio: number
  maintenanceMarginRatio: number
  maxLeverage: number
}

/** GqlOutVPoolConfig: Output response for the VPoolConfig query  */
export interface GqlOutVPoolConfig {
  vpoolConfigs: VPoolConfig[]
}

/** GqlInVPoolConfig: Input arguments for the VPoolConfig query  */
export interface GqlInVPoolConfig {
  limit: number
  pair?: string
  block?: string
  startTs?: string
  endTs?: string
  orderBy?: VPoolConfigOrderBy | string
  orderDescending?: boolean // defaults to true
}

export enum VPoolConfigOrderBy {
  block = "block",
  block_ts = "block_ts",
}

export const vpoolConfigs = async (
  args: GqlInVPoolConfig,
  endpt: string
): Promise<GqlOutVPoolConfig> => {
  if (args.orderDescending === undefined) args.orderDescending = true
  if (args.orderBy === undefined) args.orderBy = VPoolConfigOrderBy.block_ts

  const gqlQuery = ({
    pair,
    block,
    startTs,
    endTs,
    limit,
    orderBy,
    orderDescending,
  }: GqlInVPoolConfig): string => {
    const argWhere = (): string => {
      const whereConditions: string[] = []
      if (pair) whereConditions.push(`pairEq: "${pair}"`)
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
        vpoolConfigs(${queryArgs}) {
          block
          blockTs
          pair
          tradeLimitRatio
          fluctuationLimitRatio
          maxOracleSpreadRatio
          maintenanceMarginRatio
          maxLeverage
        }
      }`
  }
  return doGqlQuery(gqlQuery(args), endpt)
}
