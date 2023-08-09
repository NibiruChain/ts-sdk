import { gqlEndptFromTmRpc } from "./gql"
import {
  QueryCommunityPoolArgs,
  QueryDelegationsArgs,
  QueryDistributionCommissionsArgs,
  QueryMarkPriceCandlesArgs,
  QueryPerpLeaderboardArgs,
  QueryPerpMarketArgs,
  QueryPerpMarketsArgs,
  QueryPerpPositionArgs,
  QueryPerpPositionsArgs,
  QueryRedelegationsArgs,
  QuerySpotLpPositionsArgs,
  QuerySpotPoolCreatedArgs,
  QuerySpotPoolExitedArgs,
  QuerySpotPoolJoinedArgs,
  QuerySpotPoolSwapArgs,
  QuerySpotPoolsArgs,
  QueryUnbondingsArgs,
  QueryUsersArgs,
  QueryValidatorsArgs,
} from "./gql/generated"
import {
  GqlOutCommunityPool,
  GqlOutDelegations,
  GqlOutDistributionCommissions,
  GqlOutPerpMarket,
  GqlOutPerpMarkets,
  GqlOutPerpPosition,
  GqlOutPerpPositions,
  GqlOutRedelegations,
  GqlOutSpotLpPositions,
  GqlOutSpotPoolCreated,
  GqlOutSpotPoolExited,
  GqlOutSpotPoolJoined,
  GqlOutSpotPoolSwap,
  GqlOutSpotPools,
  GqlOutUnbondings,
  GqlOutUsers,
  GqlOutValidators,
  communityPool,
  delegations,
  distributionCommissions,
  perpMarket,
  perpMarkets,
  perpPosition,
  perpPositions,
  redelegations,
  spotLpPositions,
  spotPoolCreated,
  spotPoolExited,
  spotPoolJoined,
  spotPoolSwap,
  spotPools,
  unbondings,
  users,
  validators,
} from "./query"
import {
  GqlOutMarkPriceCandles,
  markPriceCandles,
} from "./query/markPriceCandles"
import { GqlOutPerpLeaderboard, perpLeaderboard } from "./query/perpLeaderboard"
import { GqlOutStats, QueryStatsArgs, stats } from "./query/stats"

/** IHeartMonitor is an interface for a Heart Monitor GraphQL API.
 * Each of its methods corresponds to a query function. */
export interface IHeartMonitor {
  readonly communityPool: (
    args: QueryCommunityPoolArgs
  ) => Promise<GqlOutCommunityPool>

  readonly delegations: (
    args: QueryDelegationsArgs
  ) => Promise<GqlOutDelegations>

  readonly distributionCommissions: (
    args: QueryDistributionCommissionsArgs
  ) => Promise<GqlOutDistributionCommissions>

  readonly markPriceCandles: (
    args: QueryMarkPriceCandlesArgs
  ) => Promise<GqlOutMarkPriceCandles>

  readonly perpLeaderboard: (
    args: QueryPerpLeaderboardArgs
  ) => Promise<GqlOutPerpLeaderboard>

  readonly perpMarket: (args: QueryPerpMarketArgs) => Promise<GqlOutPerpMarket>

  readonly perpMarkets: (
    args: QueryPerpMarketsArgs
  ) => Promise<GqlOutPerpMarkets>

  readonly perpPosition: (
    args: QueryPerpPositionArgs
  ) => Promise<GqlOutPerpPosition>

  readonly perpPositions: (
    args: QueryPerpPositionsArgs
  ) => Promise<GqlOutPerpPositions>

  readonly redelegations: (
    args: QueryRedelegationsArgs
  ) => Promise<GqlOutRedelegations>

  readonly spotLpPositions: (
    args: QuerySpotLpPositionsArgs
  ) => Promise<GqlOutSpotLpPositions>

  readonly spotPoolCreated: (
    args: QuerySpotPoolCreatedArgs
  ) => Promise<GqlOutSpotPoolCreated>

  readonly spotPoolExited: (
    args: QuerySpotPoolExitedArgs
  ) => Promise<GqlOutSpotPoolExited>

  readonly spotPoolJoined: (
    args: QuerySpotPoolJoinedArgs
  ) => Promise<GqlOutSpotPoolJoined>

  readonly spotPools: (args: QuerySpotPoolsArgs) => Promise<GqlOutSpotPools>

  readonly spotPoolSwap: (
    args: QuerySpotPoolSwapArgs
  ) => Promise<GqlOutSpotPoolSwap>

  readonly stats: (args: QueryStatsArgs) => Promise<GqlOutStats>

  readonly unbondings: (args: QueryUnbondingsArgs) => Promise<GqlOutUnbondings>

  readonly users: (args: QueryUsersArgs) => Promise<GqlOutUsers>

  readonly validators: (args: QueryValidatorsArgs) => Promise<GqlOutValidators>
}

/** HeartMonitor is an API for "Heart Monitor" that indexes the Nibiru blockchain
 * and stores the data in strucutred tables. Each of the `HeartMonitor`'s methods
 * corresponds to a query function. */
export class HeartMonitor implements IHeartMonitor {
  gqlEndpt: string
  defaultGqlEndpt = "https://hm-graphql.devnet-2.nibiru.fi/query"

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

  communityPool = async (args: QueryCommunityPoolArgs) =>
    communityPool(args, this.gqlEndpt)

  delegations = async (args: QueryDelegationsArgs) =>
    delegations(args, this.gqlEndpt)

  distributionCommissions = async (args: QueryDistributionCommissionsArgs) =>
    distributionCommissions(args, this.gqlEndpt)

  markPriceCandles = async (args: QueryMarkPriceCandlesArgs) =>
    markPriceCandles(args, this.gqlEndpt)

  perpLeaderboard = async (args: QueryPerpLeaderboardArgs) =>
    perpLeaderboard(args, this.gqlEndpt)

  perpMarket = async (args: QueryPerpMarketArgs) =>
    perpMarket(args, this.gqlEndpt)

  perpMarkets = async (args: QueryPerpMarketsArgs) =>
    perpMarkets(args, this.gqlEndpt)

  perpPosition = async (args: QueryPerpPositionArgs) =>
    perpPosition(args, this.gqlEndpt)

  perpPositions = async (args: QueryPerpPositionsArgs) =>
    perpPositions(args, this.gqlEndpt)

  redelegations = async (args: QueryRedelegationsArgs) =>
    redelegations(args, this.gqlEndpt)

  spotLpPositions = async (args: QuerySpotLpPositionsArgs) =>
    spotLpPositions(args, this.gqlEndpt)

  spotPoolCreated = async (args: QuerySpotPoolCreatedArgs) =>
    spotPoolCreated(args, this.gqlEndpt)

  spotPoolExited = async (args: QuerySpotPoolExitedArgs) =>
    spotPoolExited(args, this.gqlEndpt)

  spotPoolJoined = async (args: QuerySpotPoolJoinedArgs) =>
    spotPoolJoined(args, this.gqlEndpt)

  spotPools = async (args: QuerySpotPoolsArgs) => spotPools(args, this.gqlEndpt)

  spotPoolSwap = async (args: QuerySpotPoolSwapArgs) =>
    spotPoolSwap(args, this.gqlEndpt)

  stats = async (args: QueryStatsArgs) => stats(args, this.gqlEndpt)

  unbondings = async (args: QueryUnbondingsArgs) =>
    unbondings(args, this.gqlEndpt)

  users = async (args: QueryUsersArgs) => users(args, this.gqlEndpt)

  validators = async (args: QueryValidatorsArgs) =>
    validators(args, this.gqlEndpt)
}
