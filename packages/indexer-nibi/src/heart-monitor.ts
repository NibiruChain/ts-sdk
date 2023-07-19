import { gqlEndptFromTmRpc } from "./gql"
import {
  QueryExtFundingRatesArgs,
  QueryExtLiquidationsArgs,
  QueryExtMarkPriceCandlesArgs,
  QueryExtMarkPricesArgs,
  QueryExtTransfersArgs,
  QueryExtOraclePricesArgs,
  QueryExtPositionsArgs,
  QueryExtUnbondingsArgs,
  QueryExtStatsVolumeArgs,
  QueryExtValidatorsArgs,
  QueryExtBalancesArgs,
  QueryExtVpoolConfigsArgs,
  QueryExtPositionChangesArgs,
  QueryExtAmmPoolsArgs,
  QueryExtAmmTotalLiquidityArgs,
  QueryExtDelegationsArgs,
  QueryExtStakingPoolArgs,
  QueryExtPerpLeaderboardArgs,
} from "./gql/generated"
import { fundingRates, GqlOutFundingRate } from "./query/fundingRates"
import { GqlOutLiquidations, liquidations } from "./query/liquidations"
import {
  GqlOutMarkPriceCandles,
  markPriceCandles,
} from "./query/markPriceCandles"
import { GqlOutMarkPrices, markPrices } from "./query/markPrices"
import { GqlOutTransfers, transfers } from "./query/transfers"
import { GqlOutOraclePrices, oraclePrices } from "./query/oraclePrices"
import { GqlOutPositions, positions } from "./query/positions"
import { GqlOutUnbondings, unbondings } from "./query/unbondings"
import { GqlOutStatsVolume, statsVolume } from "./query/statsVolume"
import { GqlOutValidators, validators } from "./query/validators"
import { balances, GqlOutBalances } from "./query/balances"
import { GqlOutVPoolConfigs, vpoolConfigs } from "./query/vpoolConfigs"
import { GqlOutPositionChanges, positionChanges } from "./query/positionChanges"
import { ammPools, GqlOutAmmPools } from "./query/ammPools"
import {
  ammTotalLiquidity,
  GqlOutAmmTotalLiquidity,
} from "./query/ammTotalLiquidity"
import { delegations, GqlOutDelegations } from "./query/delegations"
import { GqlOutStakingPool, stakingPool } from "./query/stakingPool"
import { GqlOutPerpLeaderboard, perpLeaderboard } from "./query/perpLeaderboard"

/** IHeartMonitor is an interface for a Heart Monitor GraphQL API.
 * Each of its methods corresponds to a query function. */
export interface IHeartMonitor {
  readonly markPriceCandles: (
    args: QueryExtMarkPriceCandlesArgs
  ) => Promise<GqlOutMarkPriceCandles>

  readonly markPrices: (
    args: QueryExtMarkPricesArgs
  ) => Promise<GqlOutMarkPrices>

  readonly liquidations: (
    args: QueryExtLiquidationsArgs
  ) => Promise<GqlOutLiquidations>

  readonly fundingRates: (
    args: QueryExtFundingRatesArgs
  ) => Promise<GqlOutFundingRate>

  readonly transfers: (args: QueryExtTransfersArgs) => Promise<GqlOutTransfers>

  readonly oraclePrices: (
    args: QueryExtOraclePricesArgs
  ) => Promise<GqlOutOraclePrices>

  readonly positions: (args: QueryExtPositionsArgs) => Promise<GqlOutPositions>

  readonly positionChanges: (
    args: QueryExtPositionChangesArgs
  ) => Promise<GqlOutPositionChanges>

  readonly unbondings: (
    args: QueryExtUnbondingsArgs
  ) => Promise<GqlOutUnbondings>

  readonly statsVolume: (
    args: QueryExtStatsVolumeArgs
  ) => Promise<GqlOutStatsVolume>

  readonly validators: (
    args: QueryExtValidatorsArgs
  ) => Promise<GqlOutValidators>

  readonly delegations: (
    args: QueryExtDelegationsArgs
  ) => Promise<GqlOutDelegations>

  readonly stakingPool: (
    args: QueryExtStakingPoolArgs
  ) => Promise<GqlOutStakingPool>

  readonly balances: (args: QueryExtBalancesArgs) => Promise<GqlOutBalances>

  readonly vpoolConfigs: (
    args: QueryExtVpoolConfigsArgs
  ) => Promise<GqlOutVPoolConfigs>

  readonly ammPools: (args: QueryExtAmmPoolsArgs) => Promise<GqlOutAmmPools>

  readonly ammTotalLiquidity: (
    args: QueryExtAmmTotalLiquidityArgs
  ) => Promise<GqlOutAmmTotalLiquidity>

  readonly perpLeaderboard: (
    args?: QueryExtPerpLeaderboardArgs
  ) => Promise<GqlOutPerpLeaderboard>
}

/** HeartMonitor is an API for "Heart Monitor" that indexes the Nibiru blockchain
 * and stores the data in strucutred tables. Each of the `HeartMonitor`'s methods
 * corresponds to a query function. */
export class HeartMonitor implements IHeartMonitor {
  gqlEndpt: string
  defaultGqlEndpt = "https://hm-graphql.devnet-2.nibiru.fi/graphql"

  constructor(gqlEndpt?: string | { endptTm: string }) {
    const chain = gqlEndpt as { endptTm: string }
    if (!gqlEndpt) {
      this.gqlEndpt = this.defaultGqlEndpt
    } else if (typeof gqlEndpt === "string") {
      this.gqlEndpt = gqlEndpt
    } else if (chain?.endptTm) {
      const endptFromRpc = gqlEndptFromTmRpc(chain?.endptTm)
      this.gqlEndpt = endptFromRpc ?? this.defaultGqlEndpt
    } else {
      this.gqlEndpt = this.defaultGqlEndpt
    }
  }

  markPriceCandles = async (args: QueryExtMarkPriceCandlesArgs) =>
    markPriceCandles(args, this.gqlEndpt)

  markPrices = async (args: QueryExtMarkPricesArgs) =>
    markPrices(args, this.gqlEndpt)

  liquidations = async (args: QueryExtLiquidationsArgs) =>
    liquidations(args, this.gqlEndpt)

  fundingRates = async (args: QueryExtFundingRatesArgs) =>
    fundingRates(args, this.gqlEndpt)

  transfers = async (args: QueryExtTransfersArgs) =>
    transfers(args, this.gqlEndpt)

  oraclePrices = async (args: QueryExtOraclePricesArgs) =>
    oraclePrices(args, this.gqlEndpt)

  positions = async (args: QueryExtPositionsArgs) =>
    positions(args, this.gqlEndpt)

  positionChanges = (args: QueryExtPositionChangesArgs) =>
    positionChanges(args, this.gqlEndpt)

  unbondings = async (args: QueryExtUnbondingsArgs) =>
    unbondings(args, this.gqlEndpt)

  statsVolume = async (args: QueryExtStatsVolumeArgs) =>
    statsVolume(args, this.gqlEndpt)

  validators = async (args: QueryExtValidatorsArgs) =>
    validators(args, this.gqlEndpt)

  delegations = (args: QueryExtDelegationsArgs) =>
    delegations(args, this.gqlEndpt)

  stakingPool = (args: QueryExtStakingPoolArgs) =>
    stakingPool(args, this.gqlEndpt)

  balances = async (args: QueryExtBalancesArgs) => balances(args, this.gqlEndpt)

  vpoolConfigs = async (args: QueryExtVpoolConfigsArgs) =>
    vpoolConfigs(args, this.gqlEndpt)

  ammPools = async (args: QueryExtAmmPoolsArgs) => ammPools(args, this.gqlEndpt)

  ammTotalLiquidity = async (args: QueryExtAmmTotalLiquidityArgs) =>
    ammTotalLiquidity(args, this.gqlEndpt)

  perpLeaderboard = async (args?: QueryExtPerpLeaderboardArgs) =>
    perpLeaderboard(this.gqlEndpt, args)
}
