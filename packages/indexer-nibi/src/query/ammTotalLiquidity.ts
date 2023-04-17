import { Coin } from "../types"
import { doGqlQuery, arg } from "../gql"

// ------------------------------------------------
// AmmTotalLiquidity
// ------------------------------------------------

/**
 * AmmTotalLiquidity: A single amm pool data.
 */
export interface AmmTotalLiquidity {
  block: number
  blockTs: string
  liquidity: Coin[]
}

/** GqlOutAmmTotalLiquidity: Output response for the AmmTotalLiquidity query  */
export interface GqlOutAmmTotalLiquidity {
  ammTotalLiquidity: AmmTotalLiquidity[]
}

/** GqlInAmmTotalLiquidity: Input arguments for the AmmTotalLiquidity query  */
export interface GqlInAmmTotalLiquidity {
  limit: number
  block?: string
  startTs?: string
  endTs?: string
  orderBy?: AmmTotalLiquidityOrderBy | string
  orderDescending?: boolean // defaults to true
}

export enum AmmTotalLiquidityOrderBy {
  block = "block",
  block_ts = "block_ts",
}

export const ammTotalLiquidity = async (
  args: GqlInAmmTotalLiquidity,
  endpt: string,
): Promise<GqlOutAmmTotalLiquidity> => {
  if (args.orderDescending === undefined) args.orderDescending = true
  if (args.orderBy === undefined) args.orderBy = AmmTotalLiquidityOrderBy.block

  const gqlQuery = ({
    block,
    startTs,
    endTs,
    limit,
    orderBy,
    orderDescending,
  }: GqlInAmmTotalLiquidity): string => {
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
        ammTotalLiquidity(${queryArgs}) {
          block
          blockTs
          liquidity {
            amount
            denom
          }
        }
      }`
  }
  return doGqlQuery(gqlQuery(args), endpt)
}
