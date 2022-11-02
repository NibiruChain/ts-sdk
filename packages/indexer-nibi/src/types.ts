export interface TypeMarkPrice {
  pair: string
  price: string
  block: string
  txHash: string
}

export interface IGqlMarkPrices {
  markPrices: TypeMarkPrice[]
  blockTimestamps: { height: string; timestamp: string }[]
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

export interface IGqlBlockMarkPrices {
  markPrices: TypeBlockMarkPrice[]
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
