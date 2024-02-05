import { WebSocket } from "ws"
import { Client, ExecutionResult, createClient } from "graphql-ws"
import {
  GQLDelegation,
  GQLDistributionCommission,
  GQLMarkPriceCandle,
  GQLOraclePrice,
  GQLPerpMarket,
  GQLPerpPosition,
  GQLQueryGqlCommunityPoolArgs,
  GQLQueryGqlDelegationsArgs,
  GQLQueryGqlDistributionCommissionsArgs,
  GQLQueryGqlMarkPriceCandlesArgs,
  GQLQueryGqlRedelegationsArgs,
  GQLQueryGqlSpotLpPositionsArgs,
  GQLQueryGqlSpotPoolCreatedArgs,
  GQLQueryGqlSpotPoolExitedArgs,
  GQLQueryGqlSpotPoolJoinedArgs,
  GQLQueryGqlSpotPoolSwapArgs,
  GQLQueryGqlSpotPoolsArgs,
  GQLQueryGqlUnbondingsArgs,
  GQLQueryGqlUsersArgs,
  GQLQueryGqlValidatorsArgs,
  GQLRedelegation,
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
  GQLUnbonding,
  GQLUser,
  GQLValidator,
  queryBatchHandler,
  GqlOutCommunityPool,
  GqlOutDelegations,
  GqlOutDistributionCommissions,
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
  GqlOutMarketingQuery,
  MarketingFields,
  QueryMarketingArgs,
  marketingQuery,
  GQLMarketingMutation,
  MutationMarketingArgs,
  marketingMutation,
  GqlOutMarketingMutation,
  GQLTwitterUser,
} from ".."

/** IHeartMonitor is an interface for a Heart Monitor GraphQL API.
 * Each of its methods corresponds to a GQLQueryGql function. */
export interface IHeartMonitor {
  closeWebSocket: () => Promise<void | undefined>

  readonly communityPool: (
    args: Partial<GQLQueryGqlCommunityPoolArgs>,
    fields?: Partial<GQLToken>
  ) => Promise<GqlOutCommunityPool>

  readonly delegations: (
    args: Partial<GQLQueryGqlDelegationsArgs>,
    fields?: Partial<GQLDelegation>
  ) => Promise<GqlOutDelegations>

  readonly distributionCommissions: (
    args: Partial<GQLQueryGqlDistributionCommissionsArgs>,
    fields?: Partial<GQLDistributionCommission>
  ) => Promise<GqlOutDistributionCommissions>

  readonly featureFlags: (
    fields?: Partial<GQLFeatureFlags>
  ) => Promise<GqlOutFeatureFlags>

  readonly governance: (
    args: Partial<QueryGovernanceArgs>,
    fields?: Partial<GovernanceFields>
  ) => Promise<GqlOutGovernance>

  readonly ibc: (
    args: Partial<QueryIbcArgs>,
    fields?: Partial<IbcFields>
  ) => Promise<GqlOutIbc>

  readonly inflation: (
    args: Partial<QueryInflationArgs>,
    fields?: Partial<InflationFields>
  ) => Promise<GqlOutInflation>

  readonly marketingMutation: (
    args: Partial<MutationMarketingArgs>,
    fields?: Partial<GQLTwitterUser>
  ) => Promise<GqlOutMarketingMutation>

  readonly marketingQuery: (
    args: Partial<QueryMarketingArgs>,
    fields?: Partial<MarketingFields>
  ) => Promise<GqlOutMarketingQuery>

  readonly markPriceCandles: (
    args: Partial<GQLQueryGqlMarkPriceCandlesArgs>,
    fields?: Partial<GQLMarkPriceCandle>
  ) => Promise<GqlOutMarkPriceCandles>

  readonly markPriceCandlesSubscription: (
    args: Partial<GQLSubscriptionGqlMarkPriceCandlesArgs>,
    fields?: Partial<GQLMarkPriceCandle>
  ) => Promise<
    AsyncIterableIterator<ExecutionResult<GqlOutMarkPriceCandles>> | undefined
  >

  readonly oracle: (
    args: Partial<QueryOracleArgs>,
    fields?: Partial<OracleFields>
  ) => Promise<GqlOutOracle>

  readonly oraclePricesSubscription: (
    args: Partial<GQLSubscriptionGqlOraclePricesArgs>,
    fields?: Partial<GQLOraclePrice>
  ) => Promise<
    AsyncIterableIterator<ExecutionResult<GqlOutOraclePrices>> | undefined
  >

  readonly perp: (
    args: Partial<QueryPerpArgs>,
    fields?: Partial<GQLPerpFields>
  ) => Promise<GqlOutPerp>

  readonly perpMarketSubscription: (
    args: Partial<GQLSubscriptionGqlPerpMarketArgs>,
    fields?: Partial<GQLPerpMarket>
  ) => Promise<
    AsyncIterableIterator<ExecutionResult<GqlOutPerpMarket>> | undefined
  >

  readonly perpPositionsSubscription: (
    args: Partial<GQLSubscriptionGqlPerpPositionsArgs>,
    fields?: Partial<GQLPerpPosition>
  ) => Promise<
    AsyncIterableIterator<ExecutionResult<GqlOutPerpPositions>> | undefined
  >

  readonly GQLQueryGqlBatchHandler: <T>(
    queryQueryStrings: string[]
  ) => Promise<T>

  readonly redelegations: (
    args: Partial<GQLQueryGqlRedelegationsArgs>,
    fields?: Partial<GQLRedelegation>
  ) => Promise<GqlOutRedelegations>

  readonly spotLpPositions: (
    args: Partial<GQLQueryGqlSpotLpPositionsArgs>,
    fields?: Partial<GQLSpotLpPosition>
  ) => Promise<GqlOutSpotLpPositions>

  readonly spotPoolCreated: (
    args: Partial<GQLQueryGqlSpotPoolCreatedArgs>,
    fields?: Partial<GQLSpotPoolCreated>
  ) => Promise<GqlOutSpotPoolCreated>

  readonly spotPoolExited: (
    args: Partial<GQLQueryGqlSpotPoolExitedArgs>,
    fields?: Partial<GQLSpotPoolExited>
  ) => Promise<GqlOutSpotPoolExited>

  readonly spotPoolJoined: (
    args: Partial<GQLQueryGqlSpotPoolJoinedArgs>,
    fields?: Partial<GQLSpotPoolJoined>
  ) => Promise<GqlOutSpotPoolJoined>

  readonly spotPools: (
    args: Partial<GQLQueryGqlSpotPoolsArgs>,
    fields?: Partial<GQLSpotPool>
  ) => Promise<GqlOutSpotPools>

  readonly spotPoolSwap: (
    args: Partial<GQLQueryGqlSpotPoolSwapArgs>,
    fields?: Partial<GQLSpotPoolSwap>
  ) => Promise<GqlOutSpotPoolSwap>

  readonly stats: (
    args: Partial<QueryStatsArgs>,
    fields?: Partial<GQLStatsFields>
  ) => Promise<GqlOutStats>

  readonly unbondings: (
    args: Partial<GQLQueryGqlUnbondingsArgs>,
    fields?: Partial<GQLUnbonding>
  ) => Promise<GqlOutUnbondings>

  readonly users: (
    args: Partial<GQLQueryGqlUsersArgs>,
    fields?: Partial<GQLUser>
  ) => Promise<GqlOutUsers>

  readonly validators: (
    args: Partial<GQLQueryGqlValidatorsArgs>,
    fields?: Partial<GQLValidator>
  ) => Promise<GqlOutValidators>

  readonly wasm: (
    args: Partial<QueryWasmArgs>,
    fields?: Partial<GqlWasmFields>
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
    args: Partial<GQLQueryGqlCommunityPoolArgs>,
    fields?: Partial<GQLToken>
  ) => communityPool(args, this.gqlEndpt, fields)

  delegations = async (
    args: Partial<GQLQueryGqlDelegationsArgs>,
    fields?: Partial<GQLDelegation>
  ) => delegations(args, this.gqlEndpt, fields)

  distributionCommissions = async (
    args: Partial<GQLQueryGqlDistributionCommissionsArgs>,
    fields?: Partial<GQLDistributionCommission>
  ) => distributionCommissions(args, this.gqlEndpt, fields)

  featureFlags = async (fields?: Partial<GQLFeatureFlags>) =>
    featureFlags(this.gqlEndpt, fields)

  governance = async (
    args: Partial<QueryGovernanceArgs>,
    fields?: Partial<GovernanceFields>
  ) => governance(args, this.gqlEndpt, fields)

  ibc = async (args: Partial<QueryIbcArgs>, fields?: Partial<IbcFields>) =>
    ibc(args, this.gqlEndpt, fields)

  inflation = async (
    args: Partial<QueryInflationArgs>,
    fields?: Partial<InflationFields>
  ) => inflation(args, this.gqlEndpt, fields)

  marketingQuery = async (
    args: Partial<QueryMarketingArgs>,
    fields?: Partial<MarketingFields>
  ) => marketingQuery(args, this.gqlEndpt, fields)

  marketingMutation = async (
    args: Partial<MutationMarketingArgs>,
    fields?: Partial<GQLTwitterUser>
  ) => marketingMutation(args, this.gqlEndpt, fields)

  markPriceCandles = async (
    args: Partial<GQLQueryGqlMarkPriceCandlesArgs>,
    fields?: Partial<GQLMarkPriceCandle>
  ) => markPriceCandles(args, this.gqlEndpt, fields)

  markPriceCandlesSubscription = async (
    args: Partial<GQLSubscriptionGqlMarkPriceCandlesArgs>,
    fields?: Partial<GQLMarkPriceCandle>
  ) => markPriceCandlesSubscription(args, this.subscriptionClient, fields)

  oracle = async (
    args: Partial<QueryOracleArgs>,
    fields?: Partial<OracleFields>
  ) => oracle(args, this.gqlEndpt, fields)

  oraclePricesSubscription = async (
    args: Partial<GQLSubscriptionGqlOraclePricesArgs>,
    fields?: Partial<GQLOraclePrice>
  ) => oraclePricesSubscription(args, this.subscriptionClient, fields)

  perp = async (
    args: Partial<QueryPerpArgs>,
    fields?: Partial<GQLPerpFields>
  ) => perp(args, this.gqlEndpt, fields)

  perpMarketSubscription = async (
    args: Partial<GQLSubscriptionGqlPerpMarketArgs>,
    fields?: Partial<GQLPerpMarket>
  ) => perpMarketSubscription(args, this.subscriptionClient, fields)

  perpPositionsSubscription = async (
    args: Partial<GQLSubscriptionGqlPerpPositionsArgs>,
    fields?: Partial<GQLPerpPosition>
  ) => perpPositionsSubscription(args, this.subscriptionClient, fields)

  GQLQueryGqlBatchHandler = async <T>(queryQueryStrings: string[]) =>
    <T>queryBatchHandler(queryQueryStrings, this.gqlEndpt)

  redelegations = async (
    args: Partial<GQLQueryGqlRedelegationsArgs>,
    fields?: Partial<GQLRedelegation>
  ) => redelegations(args, this.gqlEndpt, fields)

  spotLpPositions = async (
    args: Partial<GQLQueryGqlSpotLpPositionsArgs>,
    fields?: Partial<GQLSpotLpPosition>
  ) => spotLpPositions(args, this.gqlEndpt, fields)

  spotPoolCreated = async (
    args: Partial<GQLQueryGqlSpotPoolCreatedArgs>,
    fields?: Partial<GQLSpotPoolCreated>
  ) => spotPoolCreated(args, this.gqlEndpt, fields)

  spotPoolExited = async (
    args: Partial<GQLQueryGqlSpotPoolExitedArgs>,
    fields?: Partial<GQLSpotPoolExited>
  ) => spotPoolExited(args, this.gqlEndpt, fields)

  spotPoolJoined = async (
    args: Partial<GQLQueryGqlSpotPoolJoinedArgs>,
    fields?: Partial<GQLSpotPoolJoined>
  ) => spotPoolJoined(args, this.gqlEndpt, fields)

  spotPools = async (
    args: Partial<GQLQueryGqlSpotPoolsArgs>,
    fields?: Partial<GQLSpotPool>
  ) => spotPools(args, this.gqlEndpt, fields)

  spotPoolSwap = async (
    args: Partial<GQLQueryGqlSpotPoolSwapArgs>,
    fields?: Partial<GQLSpotPoolSwap>
  ) => spotPoolSwap(args, this.gqlEndpt, fields)

  stats = async (
    args: Partial<QueryStatsArgs>,
    fields?: Partial<GQLStatsFields>
  ) => stats(args, this.gqlEndpt, fields)

  unbondings = async (
    args: Partial<GQLQueryGqlUnbondingsArgs>,
    fields?: Partial<GQLUnbonding>
  ) => unbondings(args, this.gqlEndpt, fields)

  users = async (
    args: Partial<GQLQueryGqlUsersArgs>,
    fields?: Partial<GQLUser>
  ) => users(args, this.gqlEndpt, fields)

  validators = async (
    args: Partial<GQLQueryGqlValidatorsArgs>,
    fields?: Partial<GQLValidator>
  ) => validators(args, this.gqlEndpt, fields)

  wasm = async (
    args: Partial<QueryWasmArgs>,
    fields?: Partial<GqlWasmFields>
  ) => wasm(args, this.gqlEndpt, fields)
}
