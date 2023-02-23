import { doGqlQuery } from "./gql"
import {
  GqlInMarkPriceCandle,
  GqlOutMarkPriceCandle,
  markPriceCandles,
} from "./markPriceCandles"
import {
  GqlMarkPricesInputs,
  GqlRecentTradesInputs,
  TypeBlockMarkPrice,
  TypeMarkPrice,
  TypePosChange,
} from "./types"

export interface IHeartMonitor {
  doGqlQuery: (gqlQuery: string) => Promise<any>

  readonly markPriceCandles: (
    args: GqlInMarkPriceCandle,
  ) => Promise<GqlOutMarkPriceCandle>

  /*
  readonly useQueryBlockMarkPrices: (args: {
    pair: string
    fromBlock: number
    toBlock: number
  }) => Promise<{ blockMarkPrices: TypeBlockMarkPrice[] }>

  readonly useQueryPosChange: (args: {
    pair: string
    fromBlock: number
    toBlock: number
  }) => Promise<{ positions: TypePosChange[] }>

  readonly useQueryMarkPrices: (args: {
    pair: string
    fromBlock: number
    toBlock: number
  }) => Promise<{ markPrices: TypeMarkPrice[] }>

  readonly useQueryRecentTrades: (args: {
    pair: string
    lastN: number
  }) => Promise<{ recentTrades: TypePosChange[] }>
  */
}

const createGqlEndpt = (chainNickname: string): string =>
  `https://hm-graphql.${chainNickname}.nibiru.fi/graphql`

export function gqlEndptFromTmRpc(endptTm: string): string | null {
  const endptTmParts: string[] = endptTm.split(".")
  //  rpcIdx: the index of the substring that includes rpc
  let rpcIdx: number = -1
  endptTmParts.forEach((part, idx) => {
    if (part.includes("rpc")) {
      rpcIdx = idx
    }
  })

  // nicknameIdx: the index of the substring that includes the chain nickname
  const nicknameIdx = rpcIdx + 1
  const invalidRpcIdx: boolean = rpcIdx === -1
  const invalidNicknameIdx: boolean = nicknameIdx === endptTmParts.length
  if (invalidRpcIdx || invalidNicknameIdx) {
    return null
  }

  const chainNickname = endptTmParts[nicknameIdx]
  const gqlEndpt = createGqlEndpt(chainNickname)
  return gqlEndpt
}

export class HeartMonitor implements IHeartMonitor {
  gqlEndpt: string

  defaultGqlEndpt: string = "https://hm-graphql.devnet-2.nibiru.fi/graphql"

  constructor(gqlEndpt?: string | { endptTm: string }) {
    const chain = gqlEndpt as { endptTm: string }
    if (gqlEndpt === undefined) {
      this.gqlEndpt = this.defaultGqlEndpt
    } else if (typeof gqlEndpt === "string") {
      this.gqlEndpt = gqlEndpt
    } else if (chain?.endptTm !== undefined) {
      const endptFromRpc: string | null = gqlEndptFromTmRpc(chain?.endptTm)
      this.gqlEndpt = endptFromRpc !== null ? endptFromRpc : this.defaultGqlEndpt
    } else {
      this.gqlEndpt = this.defaultGqlEndpt
    }
  }

  /**
   * The workhorse function that fetches data from the GraphQL endpoint.
   * @param {string} gqlQuery
   * @returns {Promise<any>}
   */
  doGqlQuery = async (gqlQuery: string): Promise<any> =>
    doGqlQuery(gqlQuery, this.gqlEndpt)

  // ------------------------------------------------------------
  // hooks
  // ------------------------------------------------------------

  markPriceCandles = async (
    args: GqlInMarkPriceCandle,
  ): Promise<GqlOutMarkPriceCandle> => markPriceCandles(args, this.gqlEndpt)

  /*
  // ------------------------------------------------------------
  // inactive

  useQueryMarkPrices = async (args: {
    pair: string
    fromBlock: number
    toBlock: number
  }): Promise<{ markPrices: TypeMarkPrice[] }> => {
    const gqlQuery = ({ pair, fromBlock, toBlock }: GqlMarkPricesInputs): string =>
      `{
      markPrices(pair:"${pair}", fromBlock:${fromBlock}, toBlock:${toBlock}) {
        pair
        price
        block
      },
      blockTimestamps(fromBlock:${fromBlock}, toBlock:${toBlock}) {
        height
        timestamp
      }
    }`
    return this.doGqlQuery(gqlQuery(args))
  }

  useQueryBlockMarkPrices = async (args: {
    pair: string
    fromBlock: number
    toBlock: number
  }): Promise<{ blockMarkPrices: TypeBlockMarkPrice[] }> => {
    const gqlQuery = ({ pair, fromBlock, toBlock }: GqlMarkPricesInputs): string =>
      `{
    blockMarkPrices(pair:"${pair}", fromBlock:${fromBlock}, toBlock:${toBlock}) {
      pair
      price
      block
      blockTimestamp
    }
  }`
    return this.doGqlQuery(gqlQuery(args))
  }

  useQueryPosChange = async (args: {
    pair: string
    fromBlock: number
    toBlock: number
  }): Promise<{ positions: TypePosChange[] }> => {
    const gqlQuery = ({ pair, fromBlock, toBlock }: GqlMarkPricesInputs): string =>
      `{
    positions(pair:"${pair}", fromBlock:${fromBlock}, toBlock:${toBlock}) {
      block
      blockTimestamp
      fundingPayment
      margin
      pair
      positionNotional
      positionNotionalChange
      size
      sizeChange
      trader
      transactionFee
    }
  }`
    return this.doGqlQuery(gqlQuery(args))
  }

  useQueryRecentTrades = async (args: {
    pair: string
    lastN: number
  }): Promise<{ recentTrades: TypePosChange[] }> => {
    const gqlQuery = ({ pair, lastN }: GqlRecentTradesInputs): string =>
      `{
    recentTrades(pair:"${pair}", lastN:${lastN}) {
      pair
      trader
      block
      blockTimestamp
      fundingPayment
      margin
      positionNotional
      positionNotionalChange
      size
      sizeChange
      transactionFee
    }
  }`
    return this.doGqlQuery(gqlQuery(args))
  }
  */
}
