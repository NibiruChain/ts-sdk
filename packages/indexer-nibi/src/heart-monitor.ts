import fetch from "cross-fetch"
import {
  GqlInMarkPriceCandle,
  GqlMarkPricesInputs,
  GqlOutMarkPriceCandle,
  GqlRecentTradesInputs,
  MarkPriceCandleOrderBy,
  TypeBlockMarkPrice,
  TypeMarkPrice,
  TypePosChange,
} from "./types"

async function cleanResponse(rawResp: Response): Promise<any> {
  const respJson: any = await rawResp.json().catch((err) => {
    console.error(err)
  })
  console.debug("DEBUG respJson: %o", respJson)

  if (!rawResp.ok || respJson === undefined) {
    throw new Error(`${respJson}`)
  } else if (respJson.data !== undefined) {
    return respJson.data
  } else if (respJson !== undefined) {
    return respJson
  } else {
    return respJson
  }
}

export interface IHeartMonitor {
  doGqlQuery: (gqlQuery: string) => Promise<any>

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

  readonly useQueryMarkPriceCandles: (
    args: GqlInMarkPriceCandle,
  ) => Promise<GqlOutMarkPriceCandle>
}

const arg = (name: string, value: any): string => `${name}: ${value}`

export class HeartMonitor implements IHeartMonitor {
  gqlEndpt: string

  constructor(gqlEndpt?: string) {
    this.gqlEndpt = gqlEndpt ?? "https://hm-graphql.devnet-2.nibiru.fi/graphql"
    // this.gqlEndpt = gqlEndpt ?? "https://hm-graphql.testnet-2.nibiru.fi/graphql"
  }

  /**
   * The workhorse function that fetches data from the GraphQL endpoint.
   *
   * @param {string} gqlQuery
   * @returns {Promise<any>}
   */
  doGqlQuery = async (gqlQuery: string): Promise<any> => {
    const encodedGqlQuery = encodeURI(gqlQuery)
    const fetchString = `${this.gqlEndpt}?query=${encodedGqlQuery}`
    const rawResp = await fetch(fetchString)
    return cleanResponse(rawResp)
  }

  // ------------------------------------------------------------
  // hooks
  // ------------------------------------------------------------

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

  useQueryMarkPriceCandles = async (
    args: GqlInMarkPriceCandle,
  ): Promise<GqlOutMarkPriceCandle> => {
    if (args.orderDescending === undefined) args.orderDescending = true
    if (args.orderBy === undefined)
      args.orderBy = MarkPriceCandleOrderBy.period_start_ts

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
    return this.doGqlQuery(gqlQuery(args))
  }
}
