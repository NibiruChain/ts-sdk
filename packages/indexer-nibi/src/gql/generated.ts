export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type Block = {
  readonly __typename?: "Block"
  readonly block: Scalars["Int"]["output"]
  readonly block_duration: Scalars["Float"]["output"]
  readonly block_ts: Scalars["Int"]["output"]
  readonly num_txs: Scalars["Int"]["output"]
}

export type CommunityPoolToken = {
  readonly __typename?: "CommunityPoolToken"
  readonly amount: Scalars["Float"]["output"]
  readonly denom: Scalars["String"]["output"]
}

export type Delegation = {
  readonly __typename?: "Delegation"
  readonly amount: Scalars["Int"]["output"]
  readonly delegator: User
  readonly validator: Validator
}

export type DelegationFilter = {
  readonly delegator_address?: InputMaybe<Scalars["String"]["input"]>
  readonly validator_address?: InputMaybe<Scalars["String"]["input"]>
}

export enum DelegationOrder {
  DelegatorAddress = "delegator_address",
  ValidatorAddress = "validator_address",
}

export type DistributionCommission = {
  readonly __typename?: "DistributionCommission"
  readonly commission?: Maybe<ReadonlyArray<Token>>
  readonly validator: Validator
}

export type DistributionCommissionFilter = {
  readonly validator_address: Scalars["String"]["input"]
}

export enum DistributionCommissionOrder {
  ValidatorAddress = "validator_address",
}

export type PerpMarket = {
  readonly __typename?: "PerpMarket"
  readonly base_reserve: Scalars["Float"]["output"]
  readonly ecosystem_fund_fee_ratio: Scalars["Float"]["output"]
  readonly enabled: Scalars["Boolean"]["output"]
  readonly exchange_fee_ratio: Scalars["Float"]["output"]
  readonly funding_rate_epoch_id: Scalars["String"]["output"]
  readonly index_price_twap: Scalars["Float"]["output"]
  readonly is_deleted: Scalars["Boolean"]["output"]
  readonly latest_cumulative_premium_fraction: Scalars["Float"]["output"]
  readonly liquidation_fee_ratio: Scalars["Float"]["output"]
  readonly maintenance_margin_ratio: Scalars["Float"]["output"]
  readonly mark_price: Scalars["Float"]["output"]
  readonly mark_price_twap: Scalars["Float"]["output"]
  readonly max_leverage: Scalars["Float"]["output"]
  readonly pair: Scalars["String"]["output"]
  readonly partial_liquidation_ratio: Scalars["Float"]["output"]
  readonly prepaid_bad_debt: Token
  readonly price_multiplier: Scalars["Float"]["output"]
  readonly quote_reserve: Scalars["Float"]["output"]
  readonly sqrt_depth: Scalars["Float"]["output"]
  readonly total_long: Scalars["Float"]["output"]
  readonly total_short: Scalars["Float"]["output"]
  readonly twap_lookback_window: Scalars["String"]["output"]
}

export type PerpMarketFilter = {
  readonly is_deleted?: InputMaybe<Scalars["Boolean"]["input"]>
  readonly pair?: InputMaybe<Scalars["String"]["input"]>
}

export enum PerpMarketOrder {
  Pair = "pair",
}

export type PerpPosition = {
  readonly __typename?: "PerpPosition"
  readonly bad_debt: Scalars["Float"]["output"]
  readonly last_updated_block: Block
  readonly latest_cumulative_premium_fraction: Scalars["Float"]["output"]
  readonly margin: Scalars["Float"]["output"]
  readonly margin_ratio: Scalars["Float"]["output"]
  readonly open_notional: Scalars["Float"]["output"]
  readonly pair: Scalars["String"]["output"]
  readonly position_notional: Scalars["Float"]["output"]
  readonly size: Scalars["Float"]["output"]
  readonly trader_address: Scalars["String"]["output"]
  readonly unrealized_funding_payment: Scalars["Float"]["output"]
  readonly unrealized_pnl: Scalars["Float"]["output"]
}

export type PerpPositionFilter = {
  readonly include_closed?: InputMaybe<Scalars["Boolean"]["input"]>
  readonly pair?: InputMaybe<Scalars["String"]["input"]>
  readonly trader_address?: InputMaybe<Scalars["String"]["input"]>
}

export enum PerpPositionOrder {
  CreatedBlock = "created_block",
  Pair = "pair",
  TraderAddress = "trader_address",
}

export type Query = {
  readonly __typename?: "Query"
  readonly communityPool: ReadonlyArray<CommunityPoolToken>
  readonly delegations: ReadonlyArray<Delegation>
  readonly distributionCommissions: ReadonlyArray<DistributionCommission>
  readonly perpMarket?: Maybe<PerpMarket>
  readonly perpMarkets: ReadonlyArray<PerpMarket>
  readonly perpPosition?: Maybe<PerpPosition>
  readonly perpPositions: ReadonlyArray<PerpPosition>
  readonly redelegations: ReadonlyArray<Redelegation>
  readonly spotLpPositions: ReadonlyArray<SpotLpPosition>
  readonly spotPoolCreated: ReadonlyArray<SpotPoolCreated>
  readonly spotPoolExited: ReadonlyArray<SpotPoolExited>
  readonly spotPoolJoined: ReadonlyArray<SpotPoolJoined>
  readonly spotPoolSwap: ReadonlyArray<SpotPoolSwap>
  readonly spotPools: ReadonlyArray<SpotPool>
  readonly unbondings: ReadonlyArray<Unbonding>
  readonly users: ReadonlyArray<User>
  readonly validators: ReadonlyArray<Validator>
}

export type QueryCommunityPoolArgs = {
  denom?: InputMaybe<Scalars["String"]["input"]>
}

export type QueryDelegationsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<DelegationOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<DelegationFilter>
}

export type QueryDistributionCommissionsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<DistributionCommissionOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<DistributionCommissionFilter>
}

export type QueryPerpMarketArgs = {
  pair: Scalars["String"]["input"]
}

export type QueryPerpMarketsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<PerpMarketOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<PerpMarketFilter>
}

export type QueryPerpPositionArgs = {
  pair: Scalars["String"]["input"]
  trader_address: Scalars["String"]["input"]
}

export type QueryPerpPositionsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<PerpPositionOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<PerpPositionFilter>
}

export type QueryRedelegationsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<RedelegationOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<RedelegationFilter>
}

export type QuerySpotLpPositionsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<SpotLpPositionOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<SpotLpPositionFilter>
}

export type QuerySpotPoolCreatedArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<SpotPoolCreatedOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<SpotPoolCreatedFilter>
}

export type QuerySpotPoolExitedArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<SpotPoolExitedOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<SpotPoolExitedFilter>
}

export type QuerySpotPoolJoinedArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<SpotPoolJoinedOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<SpotPoolJoinedFilter>
}

export type QuerySpotPoolSwapArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<SpotPoolSwapOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<SpotPoolSwapFilter>
}

export type QuerySpotPoolsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<SpotPoolOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<SpotPoolFilter>
}

export type QueryUnbondingsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<UnbondingOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<UnbondingFilter>
}

export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<UserOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<UserFilter>
}

export type QueryValidatorsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<ValidatorOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<ValidatorFilter>
}

export type Redelegation = {
  readonly __typename?: "Redelegation"
  readonly amount: Scalars["Int"]["output"]
  readonly completion_time: Scalars["String"]["output"]
  readonly creation_block: Block
  readonly delegator: User
  readonly destination_validator: Validator
  readonly source_validator: Validator
}

export type RedelegationFilter = {
  readonly delegator_address?: InputMaybe<Scalars["String"]["input"]>
  readonly destination_validator_address?: InputMaybe<
    Scalars["String"]["input"]
  >
  readonly source_validator_address?: InputMaybe<Scalars["String"]["input"]>
}

export enum RedelegationOrder {
  CompletionTime = "completion_time",
  CreationHeight = "creation_height",
  DelegatorAddress = "delegator_address",
  DestinaitonValidatorAddress = "destinaiton_validator_address",
  SourceValidatorAddress = "source_validator_address",
}

export type SharesToken = {
  readonly __typename?: "SharesToken"
  readonly amount: Scalars["String"]["output"]
  readonly denom: Scalars["String"]["output"]
}

export type SpotLpPosition = {
  readonly __typename?: "SpotLpPosition"
  readonly created_block: Block
  readonly pool: SpotPool
  readonly pool_shares: SharesToken
  readonly user: User
}

export type SpotLpPositionFilter = {
  readonly pool_id?: InputMaybe<Scalars["Int"]["input"]>
  readonly user_address?: InputMaybe<Scalars["String"]["input"]>
}

export enum SpotLpPositionOrder {
  PoolId = "pool_id",
  UserAddress = "user_address",
}

export type SpotPool = {
  readonly __typename?: "SpotPool"
  readonly amplification: Scalars["Float"]["output"]
  readonly created_block: Block
  readonly exit_fee: Scalars["Float"]["output"]
  readonly pool_id: Scalars["Int"]["output"]
  readonly pool_type: Scalars["String"]["output"]
  readonly swap_fee: Scalars["Float"]["output"]
  readonly tokens: ReadonlyArray<Token>
  readonly total_shares: SharesToken
  readonly total_weight: Scalars["Float"]["output"]
  readonly weights: ReadonlyArray<Token>
}

export type SpotPoolCreated = {
  readonly __typename?: "SpotPoolCreated"
  readonly block: Block
  readonly pool: SpotPool
  readonly pool_shares: SharesToken
  readonly user_address: Scalars["String"]["output"]
}

export type SpotPoolCreatedFilter = {
  readonly pool_id?: InputMaybe<Scalars["Int"]["input"]>
  readonly user_address?: InputMaybe<Scalars["String"]["input"]>
}

export enum SpotPoolCreatedOrder {
  PoolId = "pool_id",
  UserAddress = "user_address",
}

export type SpotPoolExited = {
  readonly __typename?: "SpotPoolExited"
  readonly block: Block
  readonly pool: SpotPool
  readonly pool_shares: SharesToken
  readonly user_address: Scalars["String"]["output"]
}

export type SpotPoolExitedFilter = {
  readonly pool_id?: InputMaybe<Scalars["Int"]["input"]>
  readonly user_address?: InputMaybe<Scalars["String"]["input"]>
}

export enum SpotPoolExitedOrder {
  PoolId = "pool_id",
  UserAddress = "user_address",
}

export type SpotPoolFilter = {
  readonly pool_id?: InputMaybe<Scalars["Int"]["input"]>
}

export type SpotPoolJoined = {
  readonly __typename?: "SpotPoolJoined"
  readonly block: Block
  readonly pool: SpotPool
  readonly pool_shares: SharesToken
  readonly user_address: Scalars["String"]["output"]
}

export type SpotPoolJoinedFilter = {
  readonly pool_id?: InputMaybe<Scalars["Int"]["input"]>
  readonly user_address?: InputMaybe<Scalars["String"]["input"]>
}

export enum SpotPoolJoinedOrder {
  PoolId = "pool_id",
  UserAddress = "user_address",
}

export enum SpotPoolOrder {
  PoolId = "pool_id",
}

export type SpotPoolSwap = {
  readonly __typename?: "SpotPoolSwap"
  readonly block: Block
  readonly pool: SpotPool
  readonly token_in: Token
  readonly token_out: Token
  readonly user_address: Scalars["String"]["output"]
}

export type SpotPoolSwapFilter = {
  readonly block_eq?: InputMaybe<Scalars["Int"]["input"]>
  readonly block_gte?: InputMaybe<Scalars["Int"]["input"]>
  readonly block_lte?: InputMaybe<Scalars["Int"]["input"]>
  readonly pool_id?: InputMaybe<Scalars["Int"]["input"]>
  readonly user_address?: InputMaybe<Scalars["String"]["input"]>
}

export enum SpotPoolSwapOrder {
  Block = "block",
  PoolId = "pool_id",
  UserAddress = "user_address",
}

export type Token = {
  readonly __typename?: "Token"
  readonly amount: Scalars["Int"]["output"]
  readonly denom: Scalars["String"]["output"]
}

export type Unbonding = {
  readonly __typename?: "Unbonding"
  readonly amount: Scalars["Int"]["output"]
  readonly completion_time: Scalars["String"]["output"]
  readonly creation_block: Block
  readonly delegator: User
  readonly validator: Validator
}

export type UnbondingFilter = {
  readonly delegator_address?: InputMaybe<Scalars["String"]["input"]>
  readonly validator_address?: InputMaybe<Scalars["String"]["input"]>
}

export enum UnbondingOrder {
  CompletionTime = "completion_time",
  CreationHeight = "creation_height",
  DelegatorAddress = "delegator_address",
  ValidatorAddress = "validator_address",
}

export type User = {
  readonly __typename?: "User"
  readonly address: Scalars["String"]["output"]
  readonly balances: ReadonlyArray<Maybe<Token>>
  readonly created_block: Block
}

export type UserFilter = {
  readonly address?: InputMaybe<Scalars["String"]["input"]>
  readonly created_block_eq?: InputMaybe<Scalars["Int"]["input"]>
  readonly created_block_gte?: InputMaybe<Scalars["Int"]["input"]>
  readonly created_block_lte?: InputMaybe<Scalars["Int"]["input"]>
}

export enum UserOrder {
  Address = "address",
  CreatedBlock = "created_block",
}

export type Validator = {
  readonly __typename?: "Validator"
  readonly commission_rates?: Maybe<ValidatorCommission>
  readonly commission_update_time: Scalars["String"]["output"]
  readonly delegator_shares: Scalars["Float"]["output"]
  readonly description: ValidatorDescription
  readonly jailed: Scalars["Boolean"]["output"]
  readonly min_self_delegation: Scalars["Int"]["output"]
  readonly operator_address: Scalars["String"]["output"]
  readonly status: ValidatorStatus
  readonly tokens: Scalars["Int"]["output"]
  readonly unbonding_block: Block
  readonly unbonding_time: Scalars["String"]["output"]
}

export type ValidatorCommission = {
  readonly __typename?: "ValidatorCommission"
  readonly max_change_rate: Scalars["Float"]["output"]
  readonly max_rate: Scalars["Float"]["output"]
  readonly rate: Scalars["Float"]["output"]
}

export type ValidatorDescription = {
  readonly __typename?: "ValidatorDescription"
  readonly details: Scalars["String"]["output"]
  readonly identity: Scalars["String"]["output"]
  readonly moniker: Scalars["String"]["output"]
  readonly security_contact: Scalars["String"]["output"]
  readonly website: Scalars["String"]["output"]
}

export type ValidatorFilter = {
  readonly jailed?: InputMaybe<Scalars["Boolean"]["input"]>
  readonly moniker?: InputMaybe<Scalars["String"]["input"]>
  readonly operator_address?: InputMaybe<Scalars["String"]["input"]>
  readonly status?: InputMaybe<ValidatorStatus>
}

export enum ValidatorOrder {
  Jailed = "jailed",
  Moniker = "moniker",
  OperatorAddress = "operator_address",
  Status = "status",
}

export enum ValidatorStatus {
  Bonded = "BONDED",
  Unbonded = "UNBONDED",
  Unbonding = "UNBONDING",
}
