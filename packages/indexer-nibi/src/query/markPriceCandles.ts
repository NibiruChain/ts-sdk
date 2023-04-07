import { CandlePeriod } from "../enum"
import { doGqlQuery, arg } from "../gql"

// ------------------------------------------------
// MarkPriceCandle
// ------------------------------------------------

/**
 * MarkPriceCandle: A single candlestick aggregation of mark price data.
 * - pair: identifier for a market pair, e.g. "ueth:unusd".
 * - open: Price at the beginning of the period
 * - close: Price at the end of the period
 * - high: Highest price in the period
 * - low: Lowest price in the period
 * - period:
 */
export interface MarkPriceCandle {
  pair: string
  open: number
  close: number
  high: number
  low: number
  period: number
  periodStartTs: string
}

/** GqlOutMarkPriceCandle: Output response for the MarkPriceCandle query  */
export interface GqlOutMarkPriceCandle {
  markPriceCandles: MarkPriceCandle[]
}

/** GqlInMarkPriceCandle: Input arguments for the MarkPriceCandle query  */
export interface GqlInMarkPriceCandle {
  pair: string
  period: CandlePeriod
  limit: number
  startTs?: string
  endTs?: string
  orderBy?: MarkPriceCandleOrderBy | string
  orderDescending?: boolean // defaults to true
}

export enum MarkPriceCandleOrderBy {
  period = "period",
  period_start_ts = "period_start_ts",
}

export const markPriceCandles = async (
  args: GqlInMarkPriceCandle,
  endpt: string,
): Promise<GqlOutMarkPriceCandle> => {
  if (args.orderDescending === undefined) args.orderDescending = true
  if (args.orderBy === undefined) args.orderBy = MarkPriceCandleOrderBy.period_start_ts

  const gqlQuery = ({
    pair,
    period,
    startTs,
    endTs,
    limit,
    orderBy,
    orderDescending,
  }: GqlInMarkPriceCandle): string => {
    const argWhere = (): string => {
      const whereConditions: string[] = []
      whereConditions.push(`pairEq: "${pair}"`)
      whereConditions.push(`periodEq: ${period}`)
      if (startTs) whereConditions.push(`periodStartTsGte: "${startTs}"`)
      if (endTs) whereConditions.push(`periodStartTsLt: "${endTs}"`)
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
        markPriceCandles(${queryArgs}) {
          pair
          open
          close
          low
          high
          period
          periodStartTs
        }
      }`
  }
  return doGqlQuery(gqlQuery(args), endpt)
}
