import { CandlePeriod } from "./constant"

export interface TypeMarkPrice {
  pair: string
  price: string
  block: string
  txHash: string
}

export interface TypeBlockTimestamp {
  height: string
  timestamp: string
}

export interface TypeBlockMarkPrice {
  pair: string
  price: string
  block: string
  blockTimestamp: string
}

export interface TypePosChange {
  block: string
  blockTimestamp: string
  fundingPayment: string
  margin: string
  pair: string
  positionNotional: string
  positionNotionalChange: string
  size: string
  sizeChange: string
  trader: string
  transactionFee: string
}

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
  pair = "pair",
  open = "open",
  close = "close",
  low = "low",
  high = "high",
  period = "period",
  period_start_ts = "period_start_ts",
}

// ------------------------------------------------
// MarkPrice
// ------------------------------------------------

export interface IGqlMarkPrices {
  markPrices: TypeMarkPrice[]
  blockTimestamps: TypeBlockTimestamp[]
}

export interface GqlMarkPricesInputs {
  pair: string
  fromBlock: number
  toBlock: number
}
export interface GqlRecentTradesInputs {
  pair: string
  lastN: number
}
