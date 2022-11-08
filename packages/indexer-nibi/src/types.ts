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
export interface IGqlMarkPrices {
  markPrices: TypeMarkPrice[]
  blockTimestamps: TypeBlockTimestamp[]
}

export interface GqlMarkPricesInputs {
  pair: string
  fromBlock: number
  toBlock: number
}

export interface TypeBlockMarkPrice {
  pair: string
  price: string
  block: string
  blockTimestamp: string
}
export interface IGqlPosChange {
  positions: {
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
  }[]
}
