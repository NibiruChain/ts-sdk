import { doGqlQuery, arg } from "../gql"
import { Coin } from "../types"

// ------------------------------------------------
// Balance
// ------------------------------------------------

/**
 * Balance: A single balance data.
 */
export interface Balance {
  block: number
  blockTs: string
  moduleName: string
  address: string
  balance: Coin
}

/** GqlOutBalance: Output response for the Balance query  */
export interface GqlOutBalance {
  balances: Balance[]
}

/** GqlInBalance: Input arguments for the Balance query  */
export interface GqlInBalance {
  limit: number
  block?: string
  startTs?: string
  endTs?: string
  moduleName?: string
  address?: string
  orderBy?: BalanceOrderBy | string
  orderDescending?: boolean // defaults to true
}

export enum BalanceOrderBy {
  block = "block",
  block_ts = "block_ts",
}

export const balances = async (
  args: GqlInBalance,
  endpt: string,
): Promise<GqlOutBalance> => {
  if (args.orderDescending === undefined) args.orderDescending = true
  if (args.orderBy === undefined) args.orderBy = BalanceOrderBy.block_ts

  const gqlQuery = ({
    block,
    startTs,
    endTs,
    limit,
    moduleName,
    address,
    orderBy,
    orderDescending,
  }: GqlInBalance): string => {
    const argWhere = (): string => {
      const whereConditions: string[] = []
      if (block) whereConditions.push(`blockEq: "${block}"`)
      if (startTs) whereConditions.push(`blockTsGte: "${startTs}"`)
      if (endTs) whereConditions.push(`blockTsLt: "${endTs}"`)
      if (moduleName) whereConditions.push(`moduleNameEq: "${moduleName}"`)
      if (address) whereConditions.push(`addressEq: "${address}"`)
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
        balances(${queryArgs}) {
          block
          blockTs
          moduleName
          address
          balance {
            amount
            denom
          }
        }
      }`
  }
  return doGqlQuery(gqlQuery(args), endpt)
}
