import { WebSocket } from "ws"
import { Client, ExecutionResult, createClient } from "graphql-ws"
import {
  GQLDistributionCommission,
  GQLMarkPriceCandle,
  GQLOraclePrice,
  GQLPerpMarket,
  GQLPerpPosition,
  GQLQueryGqlCommunityPoolArgs,
  GQLQueryGqlDistributionCommissionsArgs,
  GQLQueryGqlMarkPriceCandlesArgs,
  GQLQueryGqlSpotLpPositionsArgs,
  GQLQueryGqlSpotPoolCreatedArgs,
  GQLQueryGqlSpotPoolExitedArgs,
  GQLQueryGqlSpotPoolJoinedArgs,
  GQLQueryGqlSpotPoolSwapArgs,
  GQLQueryGqlSpotPoolsArgs,
  GQLQueryGqlUsersArgs,
  GQLSpotLpPosition,
  GQLSpotPool,
  GQLSpotPoolCreated,
  GQLSpotPoolExited,
  GQLSpotPoolJoined,
  GQLSpotPoolSwap,
  GQLSubscriptionGqlMarkPriceCandlesArgs,
  GQLSubscriptionGqlOraclePricesArgs,
  GQLSubscriptionGqlPerpMarketArgs,
  GQLSubscriptionGqlPerpPositionsArgs,
  GQLToken,
  GQLUser,
  queryBatchHandler,
  GqlOutCommunityPool,
  GqlOutDistributionCommissions,
  GqlOutSpotLpPositions,
  GqlOutSpotPoolCreated,
  GqlOutSpotPoolExited,
  GqlOutSpotPoolJoined,
  GqlOutSpotPoolSwap,
  GqlOutSpotPools,
  GqlOutUsers,
  communityPool,
  distributionCommissions,
  spotLpPositions,
  spotPoolCreated,
  spotPoolExited,
  spotPoolJoined,
  spotPoolSwap,
  spotPools,
  users,
  GqlOutPerp,
  GQLPerpFields,
  perp,
  GqlOutStats,
  QueryStatsArgs,
  GQLStatsFields,
  stats,
  GqlOutGovernance,
  QueryGovernanceArgs,
  governance,
  GqlOutMarkPriceCandles,
  markPriceCandles,
  QueryOracleArgs,
  OracleFields,
  GqlOutOracle,
  oracle,
  GovernanceFields,
  QueryIbcArgs,
  IbcFields,
  GqlOutIbc,
  ibc,
  QueryPerpArgs,
  markPriceCandlesSubscription,
  GqlOutPerpMarket,
  perpMarketSubscription,
  perpPositionsSubscription,
  oraclePricesSubscription,
  GqlOutOraclePrices,
  GqlOutPerpPositions,
  GqlOutWasm,
  GqlWasmFields,
  QueryWasmArgs,
  wasm,
  QueryInflationArgs,
  InflationFields,
  GqlOutInflation,
  featureFlags,
  GQLFeatureFlags,
  GqlOutFeatureFlags,
  inflation,
  DeepPartial,
  GQLProxies,
  GqlOutProxies,
  proxies,
  GQLStakingFields,
  GqlOutStaking,
  QueryStakingArgs,
  staking,
  GQLQueryGqlUserArgs,
  user,
  GqlOutUser,
} from ".."

/** IHeartMonitor is an interface for a Heart Monitor GraphQL API.
 * Each of its methods corresponds to a GQLQueryGql function. */
export interface IHeartMonitor {
  closeWebSocket: () => Promise<void | undefined>

  readonly communityPool: (
    args: GQLQueryGqlCommunityPoolArgs,
    fields: DeepPartial<GQLToken>
  ) => Promise<GqlOutCommunityPool>

  readonly distributionCommissions: (
    args: GQLQueryGqlDistributionCommissionsArgs,
    fields: DeepPartial<GQLDistributionCommission>
  ) => Promise<GqlOutDistributionCommissions>

  readonly featureFlags: (
    fields: DeepPartial<GQLFeatureFlags>
  ) => Promise<GqlOutFeatureFlags>

  readonly governance: (
    args: QueryGovernanceArgs,
    fields: DeepPartial<GovernanceFields>
  ) => Promise<GqlOutGovernance>

  readonly ibc: (
    args: QueryIbcArgs,
    fields: DeepPartial<IbcFields>
  ) => Promise<GqlOutIbc>

  readonly inflation: (
    args: QueryInflationArgs,
    fields: DeepPartial<InflationFields>
  ) => Promise<GqlOutInflation>

  readonly markPriceCandles: (
    args: GQLQueryGqlMarkPriceCandlesArgs,
    fields: DeepPartial<GQLMarkPriceCandle>
  ) => Promise<GqlOutMarkPriceCandles>

  readonly markPriceCandlesSubscription: (
    args: GQLSubscriptionGqlMarkPriceCandlesArgs,
    fields: DeepPartial<GQLMarkPriceCandle>
  ) => Promise<
    AsyncIterableIterator<ExecutionResult<GqlOutMarkPriceCandles>> | undefined
  >

  readonly oracle: (
    args: QueryOracleArgs,
    fields: DeepPartial<OracleFields>
  ) => Promise<GqlOutOracle>

  readonly oraclePricesSubscription: (
    args: GQLSubscriptionGqlOraclePricesArgs,
    fields: DeepPartial<GQLOraclePrice>
  ) => Promise<
    AsyncIterableIterator<ExecutionResult<GqlOutOraclePrices>> | undefined
  >

  readonly perp: (
    args: QueryPerpArgs,
    fields: DeepPartial<GQLPerpFields>
  ) => Promise<GqlOutPerp>

  readonly perpMarketSubscription: (
    args: GQLSubscriptionGqlPerpMarketArgs,
    fields: DeepPartial<GQLPerpMarket>
  ) => Promise<
    AsyncIterableIterator<ExecutionResult<GqlOutPerpMarket>> | undefined
  >

  readonly perpPositionsSubscription: (
    args: GQLSubscriptionGqlPerpPositionsArgs,
    fields: DeepPartial<GQLPerpPosition>
  ) => Promise<
    AsyncIterableIterator<ExecutionResult<GqlOutPerpPositions>> | undefined
  >

  readonly proxies: (fields: DeepPartial<GQLProxies>) => Promise<GqlOutProxies>

  readonly GQLQueryGqlBatchHandler: <T>(
    queryQueryStrings: string[]
  ) => Promise<T>

  readonly spotLpPositions: (
    args: GQLQueryGqlSpotLpPositionsArgs,
    fields: DeepPartial<GQLSpotLpPosition>
  ) => Promise<GqlOutSpotLpPositions>

  readonly spotPoolCreated: (
    args: GQLQueryGqlSpotPoolCreatedArgs,
    fields: DeepPartial<GQLSpotPoolCreated>
  ) => Promise<GqlOutSpotPoolCreated>

  readonly spotPoolExited: (
    args: GQLQueryGqlSpotPoolExitedArgs,
    fields: DeepPartial<GQLSpotPoolExited>
  ) => Promise<GqlOutSpotPoolExited>

  readonly spotPoolJoined: (
    args: GQLQueryGqlSpotPoolJoinedArgs,
    fields: DeepPartial<GQLSpotPoolJoined>
  ) => Promise<GqlOutSpotPoolJoined>

  readonly spotPools: (
    args: GQLQueryGqlSpotPoolsArgs,
    fields: DeepPartial<GQLSpotPool>
  ) => Promise<GqlOutSpotPools>

  readonly spotPoolSwap: (
    args: GQLQueryGqlSpotPoolSwapArgs,
    fields: DeepPartial<GQLSpotPoolSwap>
  ) => Promise<GqlOutSpotPoolSwap>

  readonly staking: (
    args: QueryStakingArgs,
    fields?: DeepPartial<GQLStakingFields>
  ) => Promise<GqlOutStaking>

  readonly stats: (
    args: QueryStatsArgs,
    fields: DeepPartial<GQLStatsFields>
  ) => Promise<GqlOutStats>

  readonly user: (
    args: GQLQueryGqlUserArgs,
    fields: DeepPartial<GQLUser>
  ) => Promise<GqlOutUser>

  readonly users: (
    args: GQLQueryGqlUsersArgs,
    fields: DeepPartial<GQLUser>
  ) => Promise<GqlOutUsers>

  readonly wasm: (
    args: QueryWasmArgs,
    fields: DeepPartial<GqlWasmFields>
  ) => Promise<GqlOutWasm>
}

/** HeartMonitor is an API for "Heart Monitor" that indexes the Nibiru blockchain
 * and stores the data in strucutred tables. Each of the `HeartMonitor`'s methods
 * corresponds to a GQLQueryGql function. */
export class HeartMonitor implements IHeartMonitor {
  gqlEndpt: string
  defaultGqlEndpt = "https://hm-graphql.devnet-2.nibiru.fi/query"
  subscriptionClient: Client | undefined

  constructor(
    gqlEndpt?: string,
    webSocketUrl?: string,
    webSocketImpl?: typeof WebSocket
  ) {
    if (typeof gqlEndpt === "string") {
      this.gqlEndpt = gqlEndpt
    } else {
      this.gqlEndpt = this.defaultGqlEndpt
    }

    if (webSocketUrl) {
      this.subscriptionClient = createClient({
        url: webSocketUrl,
        webSocketImpl: webSocketImpl ?? WebSocket,
      })
    }
  }

  closeWebSocket = async () => this.subscriptionClient?.dispose()

  communityPool = async (
    args: GQLQueryGqlCommunityPoolArgs,
    fields: DeepPartial<GQLToken>
  ) => communityPool(args, this.gqlEndpt, fields)

  distributionCommissions = async (
    args: GQLQueryGqlDistributionCommissionsArgs,
    fields: DeepPartial<GQLDistributionCommission>
  ) => distributionCommissions(args, this.gqlEndpt, fields)

  featureFlags = async (fields: DeepPartial<GQLFeatureFlags>) =>
    featureFlags(this.gqlEndpt, fields)

  governance = async (
    args: QueryGovernanceArgs,
    fields: DeepPartial<GovernanceFields>
  ) => governance(args, this.gqlEndpt, fields)

  ibc = async (args: QueryIbcArgs, fields: DeepPartial<IbcFields>) =>
    ibc(args, this.gqlEndpt, fields)

  inflation = async (
    args: QueryInflationArgs,
    fields: DeepPartial<InflationFields>
  ) => inflation(args, this.gqlEndpt, fields)

  markPriceCandles = async (
    args: GQLQueryGqlMarkPriceCandlesArgs,
    fields: DeepPartial<GQLMarkPriceCandle>
  ) => markPriceCandles(args, this.gqlEndpt, fields)

  markPriceCandlesSubscription = async (
    args: GQLSubscriptionGqlMarkPriceCandlesArgs,
    fields: DeepPartial<GQLMarkPriceCandle>
  ) => markPriceCandlesSubscription(args, fields, this.subscriptionClient)

  oracle = async (args: QueryOracleArgs, fields: DeepPartial<OracleFields>) =>
    oracle(args, this.gqlEndpt, fields)

  oraclePricesSubscription = async (
    args: GQLSubscriptionGqlOraclePricesArgs,
    fields: DeepPartial<GQLOraclePrice>
  ) => oraclePricesSubscription(args, fields, this.subscriptionClient)

  perp = async (args: QueryPerpArgs, fields: DeepPartial<GQLPerpFields>) =>
    perp(args, this.gqlEndpt, fields)

  perpMarketSubscription = async (
    args: GQLSubscriptionGqlPerpMarketArgs,
    fields: DeepPartial<GQLPerpMarket>
  ) => perpMarketSubscription(args, fields, this.subscriptionClient)

  perpPositionsSubscription = async (
    args: GQLSubscriptionGqlPerpPositionsArgs,
    fields: DeepPartial<GQLPerpPosition>
  ) => perpPositionsSubscription(args, fields, this.subscriptionClient)

  proxies = async (fields: DeepPartial<GQLProxies>) =>
    proxies(this.gqlEndpt, fields)

  GQLQueryGqlBatchHandler = async <T>(queryQueryStrings: string[]) =>
    <T>queryBatchHandler(queryQueryStrings, this.gqlEndpt)

  spotLpPositions = async (
    args: GQLQueryGqlSpotLpPositionsArgs,
    fields: DeepPartial<GQLSpotLpPosition>
  ) => spotLpPositions(args, this.gqlEndpt, fields)

  spotPoolCreated = async (
    args: GQLQueryGqlSpotPoolCreatedArgs,
    fields: DeepPartial<GQLSpotPoolCreated>
  ) => spotPoolCreated(args, this.gqlEndpt, fields)

  spotPoolExited = async (
    args: GQLQueryGqlSpotPoolExitedArgs,
    fields: DeepPartial<GQLSpotPoolExited>
  ) => spotPoolExited(args, this.gqlEndpt, fields)

  spotPoolJoined = async (
    args: GQLQueryGqlSpotPoolJoinedArgs,
    fields: DeepPartial<GQLSpotPoolJoined>
  ) => spotPoolJoined(args, this.gqlEndpt, fields)

  spotPools = async (
    args: GQLQueryGqlSpotPoolsArgs,
    fields: DeepPartial<GQLSpotPool>
  ) => spotPools(args, this.gqlEndpt, fields)

  spotPoolSwap = async (
    args: GQLQueryGqlSpotPoolSwapArgs,
    fields: DeepPartial<GQLSpotPoolSwap>
  ) => spotPoolSwap(args, this.gqlEndpt, fields)

  staking = async (
    args: QueryStakingArgs,
    fields?: DeepPartial<GQLStakingFields>
  ) => staking(args, this.gqlEndpt, fields)

  stats = async (args: QueryStatsArgs, fields: DeepPartial<GQLStatsFields>) =>
    stats(args, this.gqlEndpt, fields)

  user = async (args: GQLQueryGqlUserArgs, fields: DeepPartial<GQLUser>) =>
    user(args, this.gqlEndpt, fields)

  users = async (args: GQLQueryGqlUsersArgs, fields: DeepPartial<GQLUser>) =>
    users(args, this.gqlEndpt, fields)

  wasm = async (args: QueryWasmArgs, fields: DeepPartial<GqlWasmFields>) =>
    wasm(args, this.gqlEndpt, fields)
}
