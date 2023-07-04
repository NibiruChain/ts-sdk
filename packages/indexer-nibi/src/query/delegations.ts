import { doGqlQuery, arg } from "../gql"
import { Coin } from "../types"

// ------------------------------------------------
// Delegations
// ------------------------------------------------

/**
 * Delegations: A single delegation data.
 */
export interface Delegations {
  block: number
  blockTs: string
  validatorAddress: string
  delegatorAddress: string
  balance: Coin
  shares: number
}

/** GqlOutDelegations: Output response for the Delegations query  */
export interface GqlOutDelegations {
  delegations: Delegations[]
}

/** GqlInDelegations: Input arguments for the Delegations query  */
export interface GqlInDelegations {
  limit?: number
  block?: string
  startTs?: string
  endTs?: string
  validatorAddress?: string
  delegatorAddress?: string
  orderBy?: BalanceOrderBy | string
  orderDescending?: boolean // defaults to true
}

export enum BalanceOrderBy {
  block = "block",
  block_ts = "block_ts",
}

export const delegations = async (
  args: GqlInDelegations,
  endpt: string
): Promise<GqlOutDelegations> => {
  if (args.limit === undefined) args.limit = 100
  if (args.orderDescending === undefined) args.orderDescending = true
  if (args.orderBy === undefined) args.orderBy = BalanceOrderBy.block_ts

  const gqlQuery = ({
    block,
    startTs,
    endTs,
    limit,
    validatorAddress,
    delegatorAddress,
    orderBy,
    orderDescending,
  }: GqlInDelegations): string => {
    const argWhere = (): string => {
      const whereConditions: string[] = []
      if (block) whereConditions.push(`blockEq: "${block}"`)
      if (startTs) whereConditions.push(`blockTsGte: "${startTs}"`)
      if (endTs) whereConditions.push(`blockTsLt: "${endTs}"`)
      if (validatorAddress)
        whereConditions.push(`validatorAddressEq: "${validatorAddress}"`)
      if (delegatorAddress)
        whereConditions.push(`delegatorAddressEq: "${delegatorAddress}"`)
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
      delegations(${queryArgs}) {
          block
          blockTs
          delegatorAddress
          validatorAddress
          shares
          balance {
            amount
            denom
          }
        }
      }`
  }
  return doGqlQuery(gqlQuery(args), endpt)
}
