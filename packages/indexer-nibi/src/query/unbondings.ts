import { doGqlQuery, arg } from "../gql"

// ------------------------------------------------
// Unbondings
// ------------------------------------------------

/**
 * Unbondings: A single unbondings data.
 */
export interface Unbondings {
  block: number
  blockTs: string
  validatorAddress: string
  delegatorAddress: string
  creationHeight: number
  completionTime: string
  initialBalance: number
  balance: number
}

/** GqlOutUnbondings: Output response for the Unbondings query  */
export interface GqlOutUnbondings {
  unbondings: Unbondings[]
}

/** GqlInUnbondings: Input arguments for the Unbondings query  */
export interface GqlInUnbondings {
  limit: number
  block?: string
  startTs?: string
  endTs?: string
  validatorAddress?: string
  delegatorAddress?: string
  orderBy?: UnbondingsOrderBy | string
  orderDescending?: boolean // defaults to true
}

export enum UnbondingsOrderBy {
  block = "block",
  block_ts = "block_ts",
}

export const unbondings = async (
  args: GqlInUnbondings,
  endpt: string,
): Promise<GqlOutUnbondings> => {
  if (args.orderDescending === undefined) args.orderDescending = true
  if (args.orderBy === undefined) args.orderBy = UnbondingsOrderBy.block

  const gqlQuery = ({
    block,
    startTs,
    endTs,
    limit,
    validatorAddress,
    delegatorAddress,
    orderBy,
    orderDescending,
  }: GqlInUnbondings): string => {
    const argWhere = (): string => {
      const whereConditions: string[] = []
      if (startTs) whereConditions.push(`blockTsGte: "${startTs}"`)
      if (endTs) whereConditions.push(`blockTsLt: "${endTs}"`)
      if (block) whereConditions.push(`blockEq: "${block}"`)
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
        unbondings(${queryArgs}) {
          block
          blockTs
          validatorAddress
          delegatorAddress
          creationHeight
          completionTime
          initialBalance
          balance
        }
      }`
  }
  return doGqlQuery(gqlQuery(args), endpt)
}
