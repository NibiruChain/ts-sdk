import WebSocket from "ws"
import { Client, ExecutionResult, createClient } from "graphql-ws"
import { gqlEndptFromTmRpc } from "./gql"
import {
  Delegation,
  DistributionCommission,
  Governance,
  MarkPriceCandle,
  PerpLeaderboard,
  PerpMarket,
  PerpPosition,
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
  Redelegation,
  SpotLpPosition,
  SpotPool,
  SpotPoolCreated,
  SpotPoolExited,
  SpotPoolJoined,
  SpotPoolSwap,
  SubscriptionMarkPriceCandlesArgs,
  SubscriptionPerpMarketArgs,
  SubscriptionPerpPositionsArgs,
  Token,
  Unbonding,
  User,
  Validator,
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
  GqlOutGovernance,
  QueryGovernanceArgs,
  governance,
} from "./query/governance"
import {
  GqlOutMarkPriceCandles,
  markPriceCandles,
} from "./query/markPriceCandles"
import { GqlOutPerpLeaderboard, perpLeaderboard } from "./query/perpLeaderboard"
import { GqlOutStats, QueryStatsArgs, StatsFields, stats } from "./query/stats"
import { markPriceCandlesSubscription } from "./subscription/markPriceCandlesSubscription"
import { perpMarketSubscription } from "./subscription/perpMarketSubscription"
import { perpPositionsSubscription } from "./subscription/perpPositionsSubscription"
import { subscriptionBatchHandler } from "./batchHandlers/subscriptionBatchHandler"
import { queryBatchHandler } from "./batchHandlers/queryBatchHandler"

/** IHeartMonitor is an interface for a Heart Monitor GraphQL API.
 * Each of its methods corresponds to a query function. */
export interface IHeartMonitor {
  readonly communityPool: (
    args: QueryCommunityPoolArgs,
    fields?: Partial<Token>
  ) => Promise<GqlOutCommunityPool>

  readonly delegations: (
    args: QueryDelegationsArgs,
    fields?: Partial<Delegation>
  ) => Promise<GqlOutDelegations>

  readonly distributionCommissions: (
    args: QueryDistributionCommissionsArgs,
    fields?: Partial<DistributionCommission>
  ) => Promise<GqlOutDistributionCommissions>

  readonly governance: (
    args: QueryGovernanceArgs,
    fields?: Partial<Governance>
  ) => Promise<GqlOutGovernance>

  readonly markPriceCandles: (
    args: QueryMarkPriceCandlesArgs,
    fields?: Partial<MarkPriceCandle>
  ) => Promise<GqlOutMarkPriceCandles>

  readonly markPriceCandlesSubscription: (
    args: SubscriptionMarkPriceCandlesArgs,
    fields?: Partial<MarkPriceCandle>
  ) => Promise<AsyncIterableIterator<ExecutionResult<GqlOutMarkPriceCandles>>>

  readonly perpLeaderboard: (
    args: QueryPerpLeaderboardArgs,
    fields?: Partial<PerpLeaderboard>
  ) => Promise<GqlOutPerpLeaderboard>

  readonly perpMarket: (
    args: QueryPerpMarketArgs,
    fields?: Partial<PerpMarket>
  ) => Promise<GqlOutPerpMarket>

  readonly perpMarketSubscription: (
    args: SubscriptionPerpMarketArgs,
    fields?: Partial<PerpMarket>
  ) => Promise<AsyncIterableIterator<ExecutionResult<GqlOutPerpMarket>>>

  readonly perpMarkets: (
    args: QueryPerpMarketsArgs,
    fields?: Partial<PerpMarket>
  ) => Promise<GqlOutPerpMarkets>

  readonly perpPosition: (
    args: QueryPerpPositionArgs,
    fields?: Partial<PerpPosition>
  ) => Promise<GqlOutPerpPosition>

  readonly perpPositions: (
    args: QueryPerpPositionsArgs,
    fields?: Partial<PerpPosition>
  ) => Promise<GqlOutPerpPositions>

  readonly perpPositionsSubscription: (
    args: SubscriptionPerpPositionsArgs,
    fields?: Partial<PerpPosition>
  ) => Promise<AsyncIterableIterator<ExecutionResult<GqlOutPerpPositions>>>

  readonly queryBatchHandler: (
    queryQueryString: string[],
    endpt: string
  ) => Promise<any>

  readonly redelegations: (
    args: QueryRedelegationsArgs,
    fields?: Partial<Redelegation>
  ) => Promise<GqlOutRedelegations>

  readonly spotLpPositions: (
    args: QuerySpotLpPositionsArgs,
    fields?: Partial<SpotLpPosition>
  ) => Promise<GqlOutSpotLpPositions>

  readonly spotPoolCreated: (
    args: QuerySpotPoolCreatedArgs,
    fields?: Partial<SpotPoolCreated>
  ) => Promise<GqlOutSpotPoolCreated>

  readonly spotPoolExited: (
    args: QuerySpotPoolExitedArgs,
    fields?: Partial<SpotPoolExited>
  ) => Promise<GqlOutSpotPoolExited>

  readonly spotPoolJoined: (
    args: QuerySpotPoolJoinedArgs,
    fields?: Partial<SpotPoolJoined>
  ) => Promise<GqlOutSpotPoolJoined>

  readonly spotPools: (
    args: QuerySpotPoolsArgs,
    fields?: Partial<SpotPool>
  ) => Promise<GqlOutSpotPools>

  readonly spotPoolSwap: (
    args: QuerySpotPoolSwapArgs,
    fields?: Partial<SpotPoolSwap>
  ) => Promise<GqlOutSpotPoolSwap>

  readonly stats: (
    args: QueryStatsArgs,
    fields?: StatsFields
  ) => Promise<GqlOutStats>

  readonly subscriptionBatchHandler: (
    client: Client,
    subscriptions: string[]
  ) => Promise<
    AsyncIterableIterator<ExecutionResult<Record<string, unknown>, unknown>>
  >

  readonly unbondings: (
    args: QueryUnbondingsArgs,
    fields?: Partial<Unbonding>
  ) => Promise<GqlOutUnbondings>

  readonly users: (
    args: QueryUsersArgs,
    fields?: Partial<User>
  ) => Promise<GqlOutUsers>

  readonly validators: (
    args: QueryValidatorsArgs,
    fields?: Partial<Validator>
  ) => Promise<GqlOutValidators>
}

/** HeartMonitor is an API for "Heart Monitor" that indexes the Nibiru blockchain
 * and stores the data in strucutred tables. Each of the `HeartMonitor`'s methods
 * corresponds to a query function. */
export class HeartMonitor implements IHeartMonitor {
  gqlEndpt: string
  defaultGqlEndpt = "https://hm-graphql.itn-2.nibiru.fi/query"
  subscriptionClient: Client

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

    this.subscriptionClient = createClient({
      url: this.defaultGqlEndpt,
      webSocketImpl: WebSocket,
    })
  }

  communityPool = async (
    args: QueryCommunityPoolArgs,
    fields?: Partial<Token>
  ) => communityPool(args, this.gqlEndpt, fields)

  delegations = async (
    args: QueryDelegationsArgs,
    fields?: Partial<Delegation>
  ) => delegations(args, this.gqlEndpt, fields)

  distributionCommissions = async (
    args: QueryDistributionCommissionsArgs,
    fields?: Partial<DistributionCommission>
  ) => distributionCommissions(args, this.gqlEndpt, fields)

  governance = async (
    args: QueryGovernanceArgs,
    fields?: Partial<Governance>
  ) => governance(args, this.gqlEndpt, fields)

  markPriceCandles = async (
    args: QueryMarkPriceCandlesArgs,
    fields?: Partial<MarkPriceCandle>
  ) => markPriceCandles(args, this.gqlEndpt, fields)

  markPriceCandlesSubscription = async (
    args: SubscriptionMarkPriceCandlesArgs,
    fields?: Partial<MarkPriceCandle>
  ) => markPriceCandlesSubscription(args, this.subscriptionClient, fields)

  perpLeaderboard = async (
    args: QueryPerpLeaderboardArgs,
    fields?: Partial<PerpLeaderboard>
  ) => perpLeaderboard(args, this.gqlEndpt, fields)

  perpMarket = async (
    args: QueryPerpMarketArgs,
    fields?: Partial<PerpMarket>
  ) => perpMarket(args, this.gqlEndpt, fields)

  perpMarketSubscription = async (
    args: SubscriptionPerpMarketArgs,
    fields?: Partial<PerpMarket>
  ) => perpMarketSubscription(args, this.subscriptionClient, fields)

  perpMarkets = async (
    args: QueryPerpMarketsArgs,
    fields?: Partial<PerpMarket>
  ) => perpMarkets(args, this.gqlEndpt, fields)

  perpPosition = async (
    args: QueryPerpPositionArgs,
    fields?: Partial<PerpPosition>
  ) => perpPosition(args, this.gqlEndpt, fields)

  perpPositions = async (
    args: QueryPerpPositionsArgs,
    fields?: Partial<PerpPosition>
  ) => perpPositions(args, this.gqlEndpt, fields)

  perpPositionsSubscription = async (
    args: SubscriptionPerpPositionsArgs,
    fields?: Partial<PerpPosition>
  ) => perpPositionsSubscription(args, this.subscriptionClient, fields)

  queryBatchHandler = async (queryQueryString: string[], endpt: string) =>
    queryBatchHandler(queryQueryString, endpt)

  redelegations = async (
    args: QueryRedelegationsArgs,
    fields?: Partial<Redelegation>
  ) => redelegations(args, this.gqlEndpt, fields)

  spotLpPositions = async (
    args: QuerySpotLpPositionsArgs,
    fields?: Partial<SpotLpPosition>
  ) => spotLpPositions(args, this.gqlEndpt, fields)

  spotPoolCreated = async (
    args: QuerySpotPoolCreatedArgs,
    fields?: Partial<SpotPoolCreated>
  ) => spotPoolCreated(args, this.gqlEndpt, fields)

  spotPoolExited = async (
    args: QuerySpotPoolExitedArgs,
    fields?: Partial<SpotPoolExited>
  ) => spotPoolExited(args, this.gqlEndpt, fields)

  spotPoolJoined = async (
    args: QuerySpotPoolJoinedArgs,
    fields?: Partial<SpotPoolJoined>
  ) => spotPoolJoined(args, this.gqlEndpt, fields)

  spotPools = async (args: QuerySpotPoolsArgs, fields?: Partial<SpotPool>) =>
    spotPools(args, this.gqlEndpt, fields)

  spotPoolSwap = async (
    args: QuerySpotPoolSwapArgs,
    fields?: Partial<SpotPoolSwap>
  ) => spotPoolSwap(args, this.gqlEndpt, fields)

  stats = async (args: QueryStatsArgs, fields?: StatsFields) =>
    stats(args, this.gqlEndpt, fields)

  subscriptionBatchHandler = async (client: Client, subscriptions: string[]) =>
    subscriptionBatchHandler(client, subscriptions)

  unbondings = async (args: QueryUnbondingsArgs, fields?: Partial<Unbonding>) =>
    unbondings(args, this.gqlEndpt, fields)

  users = async (args: QueryUsersArgs, fields?: Partial<User>) =>
    users(args, this.gqlEndpt, fields)

  validators = async (args: QueryValidatorsArgs, fields?: Partial<Validator>) =>
    validators(args, this.gqlEndpt, fields)
}
