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

export interface TypeMarkPriceCandleStick {
  pair: string
  open: number
  close: number
  high: number
  low: number
  period: number
  periodStart: string
}

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

export interface IGqlMarkPriceCandleSticks {
  markPriceCandlesticks: TypeMarkPriceCandleStick[]
}

export interface GqlMarkPriceCandleSticksInputs {
  pair: string
  period: number
  startDate: string
  endDate: string
}
