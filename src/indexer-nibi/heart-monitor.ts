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
  GQLWasm,
} from "./gql/generated"
import {
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
} from "./query"
import {
  markPriceCandlesSubscription,
  GqlOutPerpMarket,
  perpMarketSubscription,
  perpPositionsSubscription,
  oraclePricesSubscription,
  GqlOutOraclePrices,
  GqlOutPerpPositions,
} from "./subscription"
import { queryBatchHandler } from "./batchHandlers/queryBatchHandler"
import { GqlOutWasm, GqlWasmFields, QueryWasmArgs, wasm } from "./query/wasm"

/** IHeartMonitor is an interface for a Heart Monitor GraphQL API.
 * Each of its methods corresponds to a GQLQueryGql function. */
export interface IHeartMonitor {
  closeWebSocket: () => Promise<void | undefined>

  readonly communityPool: (
    args: GQLQueryGqlCommunityPoolArgs,
    fields?: Partial<GQLToken>
  ) => Promise<GqlOutCommunityPool>

  readonly delegations: (
    args: GQLQueryGqlDelegationsArgs,
    fields?: Partial<GQLDelegation>
  ) => Promise<GqlOutDelegations>

  readonly distributionCommissions: (
    args: GQLQueryGqlDistributionCommissionsArgs,
    fields?: Partial<GQLDistributionCommission>
  ) => Promise<GqlOutDistributionCommissions>

  readonly governance: (
    args: QueryGovernanceArgs,
    fields?: GovernanceFields
  ) => Promise<GqlOutGovernance>

  readonly ibc: (args: QueryIbcArgs, fields?: IbcFields) => Promise<GqlOutIbc>

  readonly markPriceCandles: (
    args: GQLQueryGqlMarkPriceCandlesArgs,
    fields?: Partial<GQLMarkPriceCandle>
  ) => Promise<GqlOutMarkPriceCandles>

  readonly markPriceCandlesSubscription: (
    args: GQLSubscriptionGqlMarkPriceCandlesArgs,
    fields?: Partial<GQLMarkPriceCandle>
  ) => Promise<
    AsyncIterableIterator<ExecutionResult<GqlOutMarkPriceCandles>> | undefined
  >

  readonly oracle: (
    args: QueryOracleArgs,
    fields?: OracleFields
  ) => Promise<GqlOutOracle>

  readonly oraclePricesSubscription: (
    args: GQLSubscriptionGqlOraclePricesArgs,
    fields?: Partial<GQLOraclePrice>
  ) => Promise<
    AsyncIterableIterator<ExecutionResult<GqlOutOraclePrices>> | undefined
  >

  readonly perp: (
    args: QueryPerpArgs,
    fields?: GQLPerpFields
  ) => Promise<GqlOutPerp>

  readonly perpMarketSubscription: (
    args: GQLSubscriptionGqlPerpMarketArgs,
    fields?: Partial<GQLPerpMarket>
  ) => Promise<
    AsyncIterableIterator<ExecutionResult<GqlOutPerpMarket>> | undefined
  >

  readonly perpPositionsSubscription: (
    args: GQLSubscriptionGqlPerpPositionsArgs,
    fields?: Partial<GQLPerpPosition>
  ) => Promise<
    AsyncIterableIterator<ExecutionResult<GqlOutPerpPositions>> | undefined
  >

  readonly GQLQueryGqlBatchHandler: (
    queryQueryStrings: string[]
  ) => Promise<any>

  readonly redelegations: (
    args: GQLQueryGqlRedelegationsArgs,
    fields?: Partial<GQLRedelegation>
  ) => Promise<GqlOutRedelegations>

  readonly spotLpPositions: (
    args: GQLQueryGqlSpotLpPositionsArgs,
    fields?: Partial<GQLSpotLpPosition>
  ) => Promise<GqlOutSpotLpPositions>

  readonly spotPoolCreated: (
    args: GQLQueryGqlSpotPoolCreatedArgs,
    fields?: Partial<GQLSpotPoolCreated>
  ) => Promise<GqlOutSpotPoolCreated>

  readonly spotPoolExited: (
    args: GQLQueryGqlSpotPoolExitedArgs,
    fields?: Partial<GQLSpotPoolExited>
  ) => Promise<GqlOutSpotPoolExited>

  readonly spotPoolJoined: (
    args: GQLQueryGqlSpotPoolJoinedArgs,
    fields?: Partial<GQLSpotPoolJoined>
  ) => Promise<GqlOutSpotPoolJoined>

  readonly spotPools: (
    args: GQLQueryGqlSpotPoolsArgs,
    fields?: Partial<GQLSpotPool>
  ) => Promise<GqlOutSpotPools>

  readonly spotPoolSwap: (
    args: GQLQueryGqlSpotPoolSwapArgs,
    fields?: Partial<GQLSpotPoolSwap>
  ) => Promise<GqlOutSpotPoolSwap>

  readonly stats: (
    args: QueryStatsArgs,
    fields?: GQLStatsFields
  ) => Promise<GqlOutStats>

  readonly unbondings: (
    args: GQLQueryGqlUnbondingsArgs,
    fields?: Partial<GQLUnbonding>
  ) => Promise<GqlOutUnbondings>

  readonly users: (
    args: GQLQueryGqlUsersArgs,
    fields?: Partial<GQLUser>
  ) => Promise<GqlOutUsers>

  readonly validators: (
    args: GQLQueryGqlValidatorsArgs,
    fields?: Partial<GQLValidator>
  ) => Promise<GqlOutValidators>

  readonly wasm: (
    args: QueryWasmArgs,
    fields?: GqlWasmFields
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
    fields?: Partial<GQLToken>
  ) => communityPool(args, this.gqlEndpt, fields)

  delegations = async (
    args: GQLQueryGqlDelegationsArgs,
    fields?: Partial<GQLDelegation>
  ) => delegations(args, this.gqlEndpt, fields)

  distributionCommissions = async (
    args: GQLQueryGqlDistributionCommissionsArgs,
    fields?: Partial<GQLDistributionCommission>
  ) => distributionCommissions(args, this.gqlEndpt, fields)

  governance = async (args: QueryGovernanceArgs, fields?: GovernanceFields) =>
    governance(args, this.gqlEndpt, fields)

  ibc = async (args: QueryIbcArgs, fields?: IbcFields) =>
    ibc(args, this.gqlEndpt, fields)

  markPriceCandles = async (
    args: GQLQueryGqlMarkPriceCandlesArgs,
    fields?: Partial<GQLMarkPriceCandle>
  ) => markPriceCandles(args, this.gqlEndpt, fields)

  markPriceCandlesSubscription = async (
    args: GQLSubscriptionGqlMarkPriceCandlesArgs,
    fields?: Partial<GQLMarkPriceCandle>
  ) => markPriceCandlesSubscription(args, this.subscriptionClient, fields)

  oracle = async (args: QueryOracleArgs, fields?: OracleFields) =>
    oracle(args, this.gqlEndpt, fields)

  oraclePricesSubscription = async (
    args: GQLSubscriptionGqlOraclePricesArgs,
    fields?: Partial<GQLOraclePrice>
  ) => oraclePricesSubscription(args, this.subscriptionClient, fields)

  perp = async (args: QueryPerpArgs, fields?: GQLPerpFields) =>
    perp(args, this.gqlEndpt, fields)

  perpMarketSubscription = async (
    args: GQLSubscriptionGqlPerpMarketArgs,
    fields?: Partial<GQLPerpMarket>
  ) => perpMarketSubscription(args, this.subscriptionClient, fields)

  perpPositionsSubscription = async (
    args: GQLSubscriptionGqlPerpPositionsArgs,
    fields?: Partial<GQLPerpPosition>
  ) => perpPositionsSubscription(args, this.subscriptionClient, fields)

  GQLQueryGqlBatchHandler = async (queryQueryStrings: string[]) =>
    queryBatchHandler(queryQueryStrings, this.gqlEndpt)

  redelegations = async (
    args: GQLQueryGqlRedelegationsArgs,
    fields?: Partial<GQLRedelegation>
  ) => redelegations(args, this.gqlEndpt, fields)

  spotLpPositions = async (
    args: GQLQueryGqlSpotLpPositionsArgs,
    fields?: Partial<GQLSpotLpPosition>
  ) => spotLpPositions(args, this.gqlEndpt, fields)

  spotPoolCreated = async (
    args: GQLQueryGqlSpotPoolCreatedArgs,
    fields?: Partial<GQLSpotPoolCreated>
  ) => spotPoolCreated(args, this.gqlEndpt, fields)

  spotPoolExited = async (
    args: GQLQueryGqlSpotPoolExitedArgs,
    fields?: Partial<GQLSpotPoolExited>
  ) => spotPoolExited(args, this.gqlEndpt, fields)

  spotPoolJoined = async (
    args: GQLQueryGqlSpotPoolJoinedArgs,
    fields?: Partial<GQLSpotPoolJoined>
  ) => spotPoolJoined(args, this.gqlEndpt, fields)

  spotPools = async (
    args: GQLQueryGqlSpotPoolsArgs,
    fields?: Partial<GQLSpotPool>
  ) => spotPools(args, this.gqlEndpt, fields)

  spotPoolSwap = async (
    args: GQLQueryGqlSpotPoolSwapArgs,
    fields?: Partial<GQLSpotPoolSwap>
  ) => spotPoolSwap(args, this.gqlEndpt, fields)

  stats = async (args: QueryStatsArgs, fields?: GQLStatsFields) =>
    stats(args, this.gqlEndpt, fields)

  unbondings = async (
    args: GQLQueryGqlUnbondingsArgs,
    fields?: Partial<GQLUnbonding>
  ) => unbondings(args, this.gqlEndpt, fields)

  users = async (args: GQLQueryGqlUsersArgs, fields?: Partial<GQLUser>) =>
    users(args, this.gqlEndpt, fields)

  validators = async (
    args: GQLQueryGqlValidatorsArgs,
    fields?: Partial<GQLValidator>
  ) => validators(args, this.gqlEndpt, fields)

  wasm = async (args: QueryWasmArgs, fields?: GqlWasmFields) =>
    wasm(args, this.gqlEndpt, fields)
}
