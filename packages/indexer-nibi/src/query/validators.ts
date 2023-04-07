import { doGqlQuery, arg } from "../gql"

// ------------------------------------------------
// Validator
// ------------------------------------------------

/**
 * Validator: A single validator data.
 */
export interface Validator {
  block: number
  blockTs: string
  operatorAddress: string
  jailed: boolean
  statusBonded: boolean
  tokens: number
  delegatorShares: number
  description: string
  unbondingHeight: number
  unbondingTime: string
  commissionRates: string
  commissionUpdateTime: string
}

/** GqlOutValidator: Output response for the Validator query  */
export interface GqlOutValidator {
  validators: Validator[]
}

/** GqlInValidator: Input arguments for the Validator query  */
export interface GqlInValidator {
  limit: number
  operatorAddress?: string
  jailed?: boolean
  statusBonded?: boolean
  block?: string
  startTs?: string
  endTs?: string
  orderBy?: ValidatorOrderBy | string
  orderDescending?: boolean // defaults to true
}

export enum ValidatorOrderBy {
  block = "block",
  block_ts = "block_ts",
  jailed = "jailed",
  status_bonded = "status_bonded",
  tokens = "tokens",
}

export const validators = async (
  args: GqlInValidator,
  endpt: string,
): Promise<GqlOutValidator> => {
  if (args.orderDescending === undefined) args.orderDescending = true
  if (args.orderBy === undefined) args.orderBy = ValidatorOrderBy.block

  const gqlQuery = ({
    block,
    startTs,
    endTs,
    limit,
    operatorAddress,
    jailed,
    statusBonded,
    orderBy,
    orderDescending,
  }: GqlInValidator): string => {
    const argWhere = (): string => {
      const whereConditions: string[] = []
      if (block) whereConditions.push(`blockEq: "${block}"`)
      if (startTs) whereConditions.push(`blockTsGte: "${startTs}"`)
      if (endTs) whereConditions.push(`blockTsLt: "${endTs}"`)
      if (jailed) whereConditions.push(`jailedEq: "${jailed}"`)
      if (statusBonded) whereConditions.push(`statusBondedEq: "${statusBonded}"`)
      if (operatorAddress)
        whereConditions.push(`operatorAddressEq: "${operatorAddress}"`)
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
        validators(${queryArgs}) {
          block
          blockTs
          operatorAddress
          jailed
          statusBonded
          tokens
          delegatorShares
          description
          unbondingHeight
          unbondingTime
          commissionRates
          commissionUpdateTime
        }
      }`
  }
  return doGqlQuery(gqlQuery(args), endpt)
}
