import { doGqlQuery, arg } from "../gql"

// ------------------------------------------------
// FundingRate
// ------------------------------------------------

/**
 * FundingRate: A single funding rate data.
 */
export interface FundingRate {
  block: number
  blockTs: string
  pair: string
  markPrice: number
  indexPrice: number
  latestFundingRate: number
  cumulativePremiumFraction: number
}

/** GqlOutFundingRate: Output response for the FundingRate query  */
export interface GqlOutFundingRate {
  fundingRates: FundingRate[]
}

/** GqlInFundingRate: Input arguments for the FundingRate query  */
export interface GqlInFundingRate {
  pair: string
  limit: number
  block?: string
  startTs?: string
  endTs?: string
  orderBy?: FundingRateOrderBy | string
  orderDescending?: boolean // defaults to true
}

export enum FundingRateOrderBy {
  block = "block",
  block_ts = "block_ts",
}

export const fundingRates = async (
  args: GqlInFundingRate,
  endpt: string
): Promise<GqlOutFundingRate> => {
  if (args.orderDescending === undefined) args.orderDescending = true
  if (args.orderBy === undefined) args.orderBy = FundingRateOrderBy.block_ts

  const gqlQuery = ({
    pair,
    block,
    startTs,
    endTs,
    limit,
    orderBy,
    orderDescending,
  }: GqlInFundingRate): string => {
    const argWhere = (): string => {
      const whereConditions: string[] = []
      whereConditions.push(`pairEq: "${pair}"`)
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
        fundingRates(${queryArgs}) {
          block
          blockTs
          pair
          markPrice
          indexPrice
          latestFundingRate
          cumulativePremiumFraction
        }
      }`
  }
  return doGqlQuery(gqlQuery(args), endpt)
}
