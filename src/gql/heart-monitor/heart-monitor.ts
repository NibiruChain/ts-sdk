import { WebSocket } from "ws"
import { Client, ExecutionResult, createClient } from "graphql-ws"
import {
  GQLDistributionCommission,
  GQLOraclePrice,
  GQLQueryGqlCommunityPoolArgs,
  GQLQueryGqlDistributionCommissionsArgs,
  GQLQueryGqlUsersArgs,
  GQLSubscriptionGqlOraclePricesArgs,
  GQLToken,
  GQLUser,
  queryBatchHandler,
  GqlOutCommunityPool,
  GqlOutDistributionCommissions,
  GqlOutUsers,
  communityPool,
  distributionCommissions,
  users,
  GqlOutGovernance,
  QueryGovernanceArgs,
  governance,
  QueryOracleArgs,
  OracleFields,
  GqlOutOracle,
  oracle,
  GovernanceFields,
  QueryIbcArgs,
  IbcFields,
  GqlOutIbc,
  ibc,
  oraclePricesSubscription,
  GqlOutOraclePrices,
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
  QueryMarketingArgs,
  MarketingFields,
  GqlOutMarketing,
  marketing,
  GQLStakingFields,
  GqlOutStaking,
  QueryStakingArgs,
  staking,
  GQLQueryGqlUserArgs,
  user,
  GqlOutUser,
  GQLEvm,
  GqlOutEvm,
  evm,
} from ".."

/** IHeartMonitor is an interface for a Heart Monitor GraphQL API.
 * Each of its methods corresponds to a GQLQueryGql function. */
export interface IHeartMonitor {
  gqlEndpt: string
  defaultGqlEndpt: string
  subscriptionClient?: Client
  closeWebSocket: () => Promise<void | undefined>

  readonly GQLQueryGqlBatchHandler: <T>(
    queryQueryStrings: string[]
  ) => Promise<T>

  readonly communityPool: (
    args: GQLQueryGqlCommunityPoolArgs,
    fields: DeepPartial<GQLToken>
  ) => Promise<GqlOutCommunityPool>

  readonly distributionCommissions: (
    args: GQLQueryGqlDistributionCommissionsArgs,
    fields: DeepPartial<GQLDistributionCommission>
  ) => Promise<GqlOutDistributionCommissions>

  readonly evm: (fields: DeepPartial<GQLEvm>) => Promise<GqlOutEvm>

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

  readonly marketing: (
    args: QueryMarketingArgs,
    fields: DeepPartial<MarketingFields>
  ) => Promise<GqlOutMarketing>

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

  readonly proxies: (
    fields: DeepPartial<GQLProxies>,
    domainName?: string
  ) => Promise<GqlOutProxies>

  readonly staking: (
    args: QueryStakingArgs,
    fields: DeepPartial<GQLStakingFields>
  ) => Promise<GqlOutStaking>

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

  GQLQueryGqlBatchHandler = async <T>(queryQueryStrings: string[]) =>
    <T>queryBatchHandler(queryQueryStrings, this.gqlEndpt)

  closeWebSocket = async () => this.subscriptionClient?.dispose()

  communityPool = async (
    args: GQLQueryGqlCommunityPoolArgs,
    fields: DeepPartial<GQLToken>
  ) => communityPool(args, this.gqlEndpt, fields)

  distributionCommissions = async (
    args: GQLQueryGqlDistributionCommissionsArgs,
    fields: DeepPartial<GQLDistributionCommission>
  ) => distributionCommissions(args, this.gqlEndpt, fields)

  evm = async (fields: DeepPartial<GQLEvm>) => evm(this.gqlEndpt, fields)

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

  marketing = async (
    args: QueryMarketingArgs,
    fields: DeepPartial<MarketingFields>
  ) => marketing(args, this.gqlEndpt, fields)

  oracle = async (args: QueryOracleArgs, fields: DeepPartial<OracleFields>) =>
    oracle(args, this.gqlEndpt, fields)

  oraclePricesSubscription = async (
    args: GQLSubscriptionGqlOraclePricesArgs,
    fields: DeepPartial<GQLOraclePrice>
  ) => oraclePricesSubscription(args, fields, this.subscriptionClient)

  proxies = async (fields: DeepPartial<GQLProxies>, domainName?: string) =>
    proxies(this.gqlEndpt, fields, domainName)

  staking = async (
    args: QueryStakingArgs,
    fields: DeepPartial<GQLStakingFields>
  ) => staking(args, this.gqlEndpt, fields)

  user = async (args: GQLQueryGqlUserArgs, fields: DeepPartial<GQLUser>) =>
    user(args, this.gqlEndpt, fields)

  users = async (args: GQLQueryGqlUsersArgs, fields: DeepPartial<GQLUser>) =>
    users(args, this.gqlEndpt, fields)

  wasm = async (args: QueryWasmArgs, fields: DeepPartial<GqlWasmFields>) =>
    wasm(args, this.gqlEndpt, fields)
}
