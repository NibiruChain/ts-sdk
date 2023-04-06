import { doGqlQuery, arg } from "../gql"

// ------------------------------------------------
// Liquidation
// ------------------------------------------------

/**
 * Liquidation: A single liquidation data.
 * - pair: identifier for a market pair, e.g. "ueth:unusd".
 */
export interface Liquidation {
  block: number
  blockTs: string
  pair: string
  traderAddress: string
  liquidatorAddress: string
  exchangedQuoteAmount: number
  exchangedPositionSize: number
  feeToLiquidator: string
  feeToEcosystemFund: string
  badDebt: string
}

/** GqlOutLiquidations: Output response for the Liquidation query  */
export interface GqlOutLiquidations {
  liquidations: Liquidation[]
}

/** GqlInLiquidation: Input arguments for the Liquidation query  */
export interface GqlInLiquidation {
  pair: string
  liquidator?: string
  trader?: string
  block?: string
  limit: number
  startTs?: string
  endTs?: string
  orderBy?: LiquidationsOrderBy | string
  orderDescending?: boolean // defaults to true
}

export enum LiquidationsOrderBy {
  block = "block",
  block_ts = "block_ts",
}

export const liquidations = async (
  args: GqlInLiquidation,
  endpt: string,
): Promise<GqlOutLiquidations> => {
  if (args.orderDescending === undefined) args.orderDescending = true
  if (args.orderBy === undefined) args.orderBy = LiquidationsOrderBy.block_ts

  const gqlQuery = ({
    pair,
    block,
    liquidator,
    trader,
    startTs,
    endTs,
    limit,
    orderBy,
    orderDescending,
  }: GqlInLiquidation): string => {
    const argWhere = (): string => {
      const whereConditions: string[] = []
      whereConditions.push(`pairEq: "${pair}"`)
      if (block) whereConditions.push(`blockEq: "${block}"`)
      if (liquidator) whereConditions.push(`liquidatorAddressEq: "${liquidator}"`)
      if (trader) whereConditions.push(`traderAddressEq: "${trader}"`)
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
        liquidations(${queryArgs}) {
          block
          blockTs
          traderAddress
          pair
          liquidatorAddress
          exchangedQuoteAmount
          exchangedPositionSize
          feeToLiquidator
          feeToEcosystemFund
          badDebt
        }
      }`
  }
  return doGqlQuery(gqlQuery(args), endpt)
}
