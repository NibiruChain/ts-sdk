import { doGqlQuery, arg } from "../gql"
import { Coin } from "../types"

// ------------------------------------------------
// PositionChange
// ------------------------------------------------

/**
 * PositionChange: A single position change data.
 */
export interface PositionChange {
  pair: string
  block: number
  blockTs: string
  traderAddress: string
  margin: Coin
  markPrice: number
  positionSize: number
  exchangedSize: number
  positionNotional: number
  exchangedNotional: number
  fundingPayment: number
  transactionFee: Coin
  unrealizedPnlAfter: number
  realizedPnl: number
  badDebt: string
}

/** GqlOutPositionChange: Output response for the PositionChange query  */
export interface GqlOutPositionChange {
  positionChanges: PositionChange[]
}

/** GqlInPositionChange: Input arguments for the PositionChange query  */
export interface GqlInPositionChange {
  pair: string
  limit: number
  startTs?: string
  endTs?: string
  trader?: string
  orderBy?: PositionChangeOrderBy | string
  orderDescending?: boolean // defaults to true
}

export enum PositionChangeOrderBy {
  block = "block",
  block_ts = "block_ts",
}

export const positionChanges = async (
  args: GqlInPositionChange,
  endpt: string,
): Promise<GqlOutPositionChange> => {
  if (args.orderDescending === undefined) args.orderDescending = true
  if (args.orderBy === undefined) args.orderBy = PositionChangeOrderBy.block

  const gqlQuery = ({
    pair,
    trader,
    startTs,
    endTs,
    limit,
    orderBy,
    orderDescending,
  }: GqlInPositionChange): string => {
    const argWhere = (): string => {
      const whereConditions: string[] = []
      whereConditions.push(`pairEq: "${pair}"`)
      if (trader) whereConditions.push(`traderEq: ${trader}`)
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
        positionChanges(${queryArgs}) {
          block
          blockTs
          pair
          traderAddress
          margin {
            amount
            denom
          }
          markPrice
          positionSize
          exchangedSize
          positionNotional
          exchangedNotional
          fundingPayment
          transactionFee {
            amount
            denom
          }
          unrealizedPnlAfter
          realizedPnl
          badDebt {
            amount
            denom
          }
        }
      }`
  }
  return doGqlQuery(gqlQuery(args), endpt)
}
