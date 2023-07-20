import { arg, gqlEndptFromTmRpc } from "./gql"
import {
  fundingRates,
  GqlInFundingRate,
  GqlOutFundingRate,
} from "./query/fundingRates"
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
import {
  GqlInOraclePrice,
  GqlOutOraclePrice,
  oraclePrices,
} from "./query/oraclePrices"
import { GqlInPosition, GqlOutPosition, positions } from "./query/positions"
import {
  GqlInUnbondings,
  GqlOutUnbondings,
  unbondings,
} from "./query/unbondings"
import {
  GqlInStatsVolume,
  GqlOutStatsVolume,
  statsVolume,
} from "./query/statsVolume"
import { GqlInValidator, GqlOutValidator, validators } from "./query/validators"
import { balances, GqlInBalance, GqlOutBalance } from "./query/balances"
import {
  GqlInVPoolConfig,
  GqlOutVPoolConfig,
  vpoolConfigs,
} from "./query/vpoolConfigs"
import {
  GqlInPositionChange,
  GqlOutPositionChange,
  positionChanges,
} from "./query/positionChanges"
import { ammPools, GqlInAmmPool, GqlOutAmmPool } from "./query/ammPools"
import {
  ammTotalLiquidity,
  GqlInAmmTotalLiquidity,
  GqlOutAmmTotalLiquidity,
} from "./query/ammTotalLiquidity"
import {
  delegations,
  GqlInDelegations,
  GqlOutDelegations,
} from "./query/delegations"
import {
  GqlInStakingPool,
  GqlOutStakingPool,
  stakingPool,
} from "./query/stakingPool"
import {
  GqlInPerpLeaderboard,
  GqlOutPerpLeaderboard,
  perpLeaderboard,
} from "./query/perpLeaderboard"

/** IHeartMonitor is an interface for a Heart Monitor GraphQL API.
 * Each of its methods corresponds to a query function. */
export interface IHeartMonitor {
  readonly markPriceCandles: (
    args: GqlInMarkPriceCandle
  ) => Promise<GqlOutMarkPriceCandle>

  readonly markPrices: (args: GqlInMarkPrice) => Promise<GqlOutMarkPrice>

  readonly liquidations: (args: GqlInLiquidation) => Promise<GqlOutLiquidations>

  readonly fundingRates: (args: GqlInFundingRate) => Promise<GqlOutFundingRate>

  readonly transfers: (args: GqlInTransfer) => Promise<GqlOutTransfer>

  readonly oraclePrices: (args: GqlInOraclePrice) => Promise<GqlOutOraclePrice>

  readonly positions: (args: GqlInPosition) => Promise<GqlOutPosition>

  readonly positionChanges: (
    args: GqlInPositionChange
  ) => Promise<GqlOutPositionChange>

  readonly unbondings: (args: GqlInUnbondings) => Promise<GqlOutUnbondings>

  readonly statsVolume: (args: GqlInStatsVolume) => Promise<GqlOutStatsVolume>

  readonly validators: (args: GqlInValidator) => Promise<GqlOutValidator>

  readonly delegations: (args: GqlInDelegations) => Promise<GqlOutDelegations>

  readonly stakingPool: (args: GqlInStakingPool) => Promise<GqlOutStakingPool>

  readonly balances: (args: GqlInBalance) => Promise<GqlOutBalance>

  readonly vpoolConfigs: (args: GqlInVPoolConfig) => Promise<GqlOutVPoolConfig>

  readonly ammPools: (args: GqlInAmmPool) => Promise<GqlOutAmmPool>

  readonly ammTotalLiquidity: (
    args: GqlInAmmTotalLiquidity
  ) => Promise<GqlOutAmmTotalLiquidity>

  readonly perpLeaderboard: (
    args?: GqlInPerpLeaderboard
  ) => Promise<GqlOutPerpLeaderboard>
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
    } else if (chain && chain.endptTm !== undefined) {
      const endptFromRpc = gqlEndptFromTmRpc(chain?.endptTm)
      this.gqlEndpt =
        endptFromRpc !== null ? endptFromRpc : this.defaultGqlEndpt
    } else {
      this.gqlEndpt = this.defaultGqlEndpt
    }
  }

  // ------------------------------------------------------------
  // hooks
  // ------------------------------------------------------------

  markPriceCandles = async (
    args: GqlInMarkPriceCandle
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

  positionChanges = (
    args: GqlInPositionChange
  ): Promise<GqlOutPositionChange> => positionChanges(args, this.gqlEndpt)

  unbondings = async (args: GqlInUnbondings): Promise<GqlOutUnbondings> =>
    unbondings(args, this.gqlEndpt)

  statsVolume = async (args: GqlInStatsVolume): Promise<GqlOutStatsVolume> =>
    statsVolume(args, this.gqlEndpt)

  validators = async (args: GqlInValidator): Promise<GqlOutValidator> =>
    validators(args, this.gqlEndpt)

  delegations = (args: GqlInDelegations): Promise<GqlOutDelegations> =>
    delegations(args, this.gqlEndpt)

  stakingPool = (args: GqlInStakingPool): Promise<GqlOutStakingPool> =>
    stakingPool(args, this.gqlEndpt)

  balances = async (args: GqlInBalance): Promise<GqlOutBalance> =>
    balances(args, this.gqlEndpt)

  vpoolConfigs = async (args: GqlInVPoolConfig): Promise<GqlOutVPoolConfig> =>
    vpoolConfigs(args, this.gqlEndpt)

  ammPools = async (args: GqlInAmmPool): Promise<GqlOutAmmPool> =>
    ammPools(args, this.gqlEndpt)

  ammTotalLiquidity = async (
    args: GqlInAmmTotalLiquidity
  ): Promise<GqlOutAmmTotalLiquidity> => ammTotalLiquidity(args, this.gqlEndpt)

  perpLeaderboard = async (args?: GqlInPerpLeaderboard) =>
    perpLeaderboard(this.gqlEndpt, args)
}
