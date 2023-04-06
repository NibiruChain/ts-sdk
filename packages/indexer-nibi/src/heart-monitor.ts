import { gqlEndptFromTmRpc } from "./gql"
import { fundingRates, GqlInFundingRate, GqlOutFundingRate } from "./query/fundingRates"
import {
  GqlInLiquidation,
  GqlOutLiquidations,
  liquidations,
} from "./query/liquidations"
import {
  GqlInMarkPriceCandle,
  GqlOutMarkPriceCandle,
  markPriceCandles,
} from "./query/markPriceCandles"
import { GqlInMarkPrice, GqlOutMarkPrice, markPrices } from "./query/markPrices"
import { GqlInTransfer, GqlOutTransfer, transfers } from "./query/transfer"
import { GqlInOraclePrice, GqlOutOraclePrice, oraclePrices } from "./query/oraclePrices"
import { GqlInPosition, GqlOutPosition, positions } from "./query/positions"
import { GqlInUnbondings, GqlOutUnbondings, unbondings } from "./query/unbondings"
import { GqlInStatsVolume, GqlOutStatsVolume, statsVolume } from "./query/statsVolume"
import { GqlInValidator, GqlOutValidator, validators } from "./query/validators"
import { balances, GqlInBalance, GqlOutBalance } from "./query/balances"
import { GqlInVPoolConfig, GqlOutVPoolConfig, vpoolConfigs } from "./query/vpoolConfigs"

/** IHeartMonitor is an interface for a Heart Monitor GraphQL API.
 * Each of its methods corresponds to a query function. */
export interface IHeartMonitor {
  readonly markPriceCandles: (
    args: GqlInMarkPriceCandle,
  ) => Promise<GqlOutMarkPriceCandle>

  readonly markPrices: (args: GqlInMarkPrice) => Promise<GqlOutMarkPrice>

  readonly liquidations: (args: GqlInLiquidation) => Promise<GqlOutLiquidations>

  readonly fundingRates: (args: GqlInFundingRate) => Promise<GqlOutFundingRate>

  readonly transfers: (args: GqlInTransfer) => Promise<GqlOutTransfer>

  readonly oraclePrices: (args: GqlInOraclePrice) => Promise<GqlOutOraclePrice>

  readonly positions: (args: GqlInPosition) => Promise<GqlOutPosition>

  readonly unbondings: (args: GqlInUnbondings) => Promise<GqlOutUnbondings>

  readonly statsVolume: (args: GqlInStatsVolume) => Promise<GqlOutStatsVolume>

  readonly validators: (args: GqlInValidator) => Promise<GqlOutValidator>

  readonly balances: (args: GqlInBalance) => Promise<GqlOutBalance>

  readonly vpoolConfigs: (args: GqlInVPoolConfig) => Promise<GqlOutVPoolConfig>

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

/** HeartMonitor is an API for "Heart Monitor" that indexes the Nibiru blockchain
 * and stores the data in strucutred tables. Each of the `HeartMonitor`'s methods
 * corresponds to a query function. */
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

  // ------------------------------------------------------------
  // hooks
  // ------------------------------------------------------------

  markPriceCandles = async (
    args: GqlInMarkPriceCandle,
  ): Promise<GqlOutMarkPriceCandle> => markPriceCandles(args, this.gqlEndpt)

  markPrices = async (args: GqlInMarkPrice): Promise<GqlOutMarkPrice> =>
    markPrices(args, this.gqlEndpt)

  liquidations = async (args: GqlInLiquidation): Promise<GqlOutLiquidations> =>
    liquidations(args, this.gqlEndpt)

  fundingRates = async (args: GqlInFundingRate): Promise<GqlOutFundingRate> =>
    fundingRates(args, this.gqlEndpt)

  transfers = async (args: GqlInTransfer): Promise<GqlOutTransfer> =>
    transfers(args, this.gqlEndpt)

  oraclePrices = async (args: GqlInOraclePrice): Promise<GqlOutOraclePrice> =>
    oraclePrices(args, this.gqlEndpt)

  positions = async (args: GqlInPosition): Promise<GqlOutPosition> =>
    positions(args, this.gqlEndpt)

  unbondings = async (args: GqlInUnbondings): Promise<GqlOutUnbondings> =>
    unbondings(args, this.gqlEndpt)

  statsVolume = async (args: GqlInStatsVolume): Promise<GqlOutStatsVolume> =>
    statsVolume(args, this.gqlEndpt)

  validators = async (args: GqlInValidator): Promise<GqlOutValidator> =>
    validators(args, this.gqlEndpt)

  balances = async (args: GqlInBalance): Promise<GqlOutBalance> =>
    balances(args, this.gqlEndpt)

  vpoolConfigs = async (args: GqlInVPoolConfig): Promise<GqlOutVPoolConfig> =>
    vpoolConfigs(args, this.gqlEndpt)

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
