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
  Time: { input: string; output: string }
}

export type Block = {
  readonly __typename?: "Block"
  readonly block: Scalars["Int"]["output"]
  readonly block_duration: Scalars["Float"]["output"]
  readonly block_ts: Scalars["Int"]["output"]
  readonly num_txs: Scalars["Int"]["output"]
}

export type CommunityPoolFilter = {
  readonly denom?: InputMaybe<Scalars["String"]["input"]>
}

export enum CommunityPoolOrder {
  Denom = "denom",
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
  readonly validator_address?: InputMaybe<Scalars["String"]["input"]>
}

export enum DistributionCommissionOrder {
  ValidatorAddress = "validator_address",
}

export type FloatFilter = {
  readonly eq?: InputMaybe<Scalars["Float"]["input"]>
  readonly gt?: InputMaybe<Scalars["Float"]["input"]>
  readonly gte?: InputMaybe<Scalars["Float"]["input"]>
  readonly lt?: InputMaybe<Scalars["Float"]["input"]>
  readonly lte?: InputMaybe<Scalars["Float"]["input"]>
}

export type GovDeposit = {
  readonly __typename?: "GovDeposit"
  readonly amount: ReadonlyArray<Token>
  readonly block: Block
  readonly proposal: GovProposal
  readonly sender: User
}

export type GovDepositsFilter = {
  readonly block?: InputMaybe<IntFilter>
  readonly proposalId?: InputMaybe<IntFilter>
  readonly senderEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum GovDepositsOrder {
  Block = "block",
  ProposalId = "proposal_id",
  Sender = "sender",
}

export type GovProposal = {
  readonly __typename?: "GovProposal"
  readonly depositEndTime: Scalars["Time"]["output"]
  readonly finalTallyResultAbstain: Scalars["Int"]["output"]
  readonly finalTallyResultNo: Scalars["Int"]["output"]
  readonly finalTallyResultNoWithVeto: Scalars["Int"]["output"]
  readonly finalTallyResultYes: Scalars["Int"]["output"]
  readonly id: Scalars["Int"]["output"]
  readonly metadata: Scalars["String"]["output"]
  readonly proposer: User
  readonly status: Scalars["String"]["output"]
  readonly submitTime: Scalars["Time"]["output"]
  readonly summary: Scalars["String"]["output"]
  readonly title: Scalars["String"]["output"]
  readonly totalDeposit: ReadonlyArray<Token>
  readonly votingEndTime?: Maybe<Scalars["Time"]["output"]>
  readonly votingStartTime?: Maybe<Scalars["Time"]["output"]>
}

export type GovProposalsFilter = {
  readonly depositEndTime?: InputMaybe<TimeFilter>
  readonly finalTallyResultAbstain?: InputMaybe<IntFilter>
  readonly finalTallyResultNo?: InputMaybe<IntFilter>
  readonly finalTallyResultNoWithVeto?: InputMaybe<IntFilter>
  readonly finalTallyResultYes?: InputMaybe<IntFilter>
  readonly id?: InputMaybe<IntFilter>
  readonly proposerEq?: InputMaybe<Scalars["String"]["input"]>
  readonly submitTime?: InputMaybe<TimeFilter>
  readonly summary?: InputMaybe<StringFilter>
  readonly title?: InputMaybe<StringFilter>
  readonly votingEndTime?: InputMaybe<TimeFilter>
  readonly votingStartTime?: InputMaybe<TimeFilter>
}

export enum GovProposalsOrder {
  DepositEndTime = "deposit_end_time",
  FinalTallyResultAbstain = "final_tally_result_abstain",
  FinalTallyResultNo = "final_tally_result_no",
  FinalTallyResultNoWithVeto = "final_tally_result_no_with_veto",
  FinalTallyResultYes = "final_tally_result_yes",
  Id = "id",
  Proposer = "proposer",
  Status = "status",
  SubmitTime = "submit_time",
  Summary = "summary",
  Title = "title",
  VotingEndTime = "voting_end_time",
  VotingStartTime = "voting_start_time",
}

export type GovVote = {
  readonly __typename?: "GovVote"
  readonly block: Block
  readonly option: Scalars["String"]["output"]
  readonly proposal: GovProposal
  readonly sender: User
}

export type GovVotesFilter = {
  readonly block?: InputMaybe<IntFilter>
  readonly optionEq?: InputMaybe<Scalars["String"]["input"]>
  readonly proposalId?: InputMaybe<IntFilter>
  readonly senderEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum GovVotesOrder {
  Block = "block",
  Option = "option",
  ProposalId = "proposal_id",
  Sender = "sender",
}

export type Governance = {
  readonly __typename?: "Governance"
  readonly govDeposits: ReadonlyArray<GovDeposit>
  readonly govProposals: ReadonlyArray<GovProposal>
  readonly govVotes: ReadonlyArray<GovVote>
}

export type GovernanceGovDepositsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<GovDepositsOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<GovDepositsFilter>
}

export type GovernanceGovProposalsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<GovProposalsOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<GovProposalsFilter>
}

export type GovernanceGovVotesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<GovVotesOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<GovVotesFilter>
}

export type IntFilter = {
  readonly eq?: InputMaybe<Scalars["Int"]["input"]>
  readonly gt?: InputMaybe<Scalars["Int"]["input"]>
  readonly gte?: InputMaybe<Scalars["Int"]["input"]>
  readonly lt?: InputMaybe<Scalars["Int"]["input"]>
  readonly lte?: InputMaybe<Scalars["Int"]["input"]>
}

export type MarkPriceCandle = {
  readonly __typename?: "MarkPriceCandle"
  readonly close: Scalars["Float"]["output"]
  readonly high: Scalars["Float"]["output"]
  readonly low: Scalars["Float"]["output"]
  readonly open: Scalars["Float"]["output"]
  readonly volume: Scalars["Float"]["output"]
  readonly pair: Scalars["String"]["output"]
  readonly period: Scalars["Int"]["output"]
  readonly periodStartTs: Scalars["Time"]["output"]
  readonly volume: Scalars["Float"]["output"]
  readonly volumeNotional: Scalars["Float"]["output"]
}

export type MarkPriceCandlesFilter = {
  readonly pairEq?: InputMaybe<Scalars["String"]["input"]>
  readonly periodEq?: InputMaybe<Scalars["Int"]["input"]>
  readonly periodGt?: InputMaybe<Scalars["Int"]["input"]>
  readonly periodGte?: InputMaybe<Scalars["Int"]["input"]>
  readonly periodLt?: InputMaybe<Scalars["Int"]["input"]>
  readonly periodLte?: InputMaybe<Scalars["Int"]["input"]>
  readonly periodStartTsEq?: InputMaybe<Scalars["Time"]["input"]>
  readonly periodStartTsGt?: InputMaybe<Scalars["Time"]["input"]>
  readonly periodStartTsGte?: InputMaybe<Scalars["Time"]["input"]>
  readonly periodStartTsLt?: InputMaybe<Scalars["Time"]["input"]>
  readonly periodStartTsLte?: InputMaybe<Scalars["Time"]["input"]>
}

export enum MarkPriceCandlesOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type Oracle = {
  readonly __typename?: "Oracle"
  readonly oraclePrices: ReadonlyArray<OraclePrice>
  readonly oracles: ReadonlyArray<OracleEntry>
}

export type OracleOraclePricesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<OraclePricesOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<OraclePricesFilter>
}

export type OracleOraclesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<OraclesOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<OraclesFilter>
}

export type OracleEntry = {
  readonly __typename?: "OracleEntry"
  readonly numVotes: Scalars["Int"]["output"]
  readonly validator: Validator
}

export type OraclePrice = {
  readonly __typename?: "OraclePrice"
  readonly block: Block
  readonly eventSeqNo: Scalars["Int"]["output"]
  readonly pair: Scalars["String"]["output"]
  readonly price: Scalars["Float"]["output"]
  readonly txSeqNo: Scalars["Int"]["output"]
}

export type OraclePricesFilter = {
  readonly block?: InputMaybe<IntFilter>
  readonly blockTs?: InputMaybe<TimeFilter>
  readonly pair?: InputMaybe<StringFilter>
}

export enum OraclePricesOrder {
  Pair = "pair",
  Price = "price",
  Sequence = "sequence",
}

export type OraclesFilter = {
  readonly numVotes?: InputMaybe<IntFilter>
  readonly validatorAddressEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum OraclesOrder {
  NumVotes = "num_votes",
  ValidatorAddress = "validator_address",
}

export type PeriodFilter = {
  readonly periodEq?: InputMaybe<Scalars["Int"]["input"]>
  readonly periodGt?: InputMaybe<Scalars["Int"]["input"]>
  readonly periodGte?: InputMaybe<Scalars["Int"]["input"]>
  readonly periodLt?: InputMaybe<Scalars["Int"]["input"]>
  readonly periodLte?: InputMaybe<Scalars["Int"]["input"]>
  readonly periodStartTsEq?: InputMaybe<Scalars["Time"]["input"]>
  readonly periodStartTsGt?: InputMaybe<Scalars["Time"]["input"]>
  readonly periodStartTsGte?: InputMaybe<Scalars["Time"]["input"]>
  readonly periodStartTsLt?: InputMaybe<Scalars["Time"]["input"]>
  readonly periodStartTsLte?: InputMaybe<Scalars["Time"]["input"]>
}

export type Perp = {
  readonly __typename?: "Perp"
  readonly leaderboard: ReadonlyArray<PerpLeaderboard>
  readonly market?: Maybe<PerpMarket>
  readonly markets: ReadonlyArray<PerpMarket>
  readonly position?: Maybe<PerpPosition>
  readonly positionChanges: ReadonlyArray<PerpPositionChange>
  readonly positions: ReadonlyArray<PerpPosition>
}

export type PerpLeaderboardArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<PerpLeaderboardOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<PerpLeaderboardFilter>
}

export type PerpMarketArgs = {
  where: PerpMarketFilter
}

export type PerpMarketsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<PerpMarketOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<PerpMarketsFilter>
}

export type PerpPositionArgs = {
  where: PerpPositionFilter
}

export type PerpPositionChangesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<PerpPositionChangeOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where: PerpPositionChangeFilter
}

export type PerpPositionsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<PerpPositionOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<PerpPositionsFilter>
}

export type PerpLeaderboard = {
  readonly __typename?: "PerpLeaderboard"
  readonly avg_pct_pnl: Scalars["Float"]["output"]
  readonly avg_pct_pnl_rank: Scalars["Int"]["output"]
  readonly input_margin: Scalars["Float"]["output"]
  readonly raw_pnl: Scalars["Float"]["output"]
  readonly raw_pnl_with_unrealized: Scalars["Float"]["output"]
  readonly trader_address: Scalars["String"]["output"]
}

export type PerpLeaderboardFilter = {
  readonly trader_address?: InputMaybe<Scalars["String"]["input"]>
}

export enum PerpLeaderboardOrder {
  AvgPctPnl = "avg_pct_pnl",
  AvgPctPnlRank = "avg_pct_pnl_rank",
  RawPnl = "raw_pnl",
  RawPnlWithUnrealized = "raw_pnl_with_unrealized",
  TraderAddress = "trader_address",
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
  readonly max_funding_rate?: Maybe<Scalars["Float"]["output"]>
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
  readonly pair: Scalars["String"]["input"]
}

export enum PerpMarketOrder {
  Pair = "pair",
}

export type PerpMarketsFilter = {
  readonly is_deleted?: InputMaybe<Scalars["Boolean"]["input"]>
  readonly pair?: InputMaybe<Scalars["String"]["input"]>
}

export type PerpPosition = {
  readonly __typename?: "PerpPosition"
  readonly bad_debt: Scalars["Float"]["output"]
  readonly last_updated_block: Block
  readonly latest_cumulative_premium_fraction: Scalars["Float"]["output"]
  readonly liquidation_price: Scalars["Float"]["output"]
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

export type PerpPositionChange = {
  readonly __typename?: "PerpPositionChange"
  readonly badDebt?: Maybe<Token>
  readonly block: Block
  readonly changeReason: Scalars["String"]["output"]
  readonly eventSeqNo: Scalars["Int"]["output"]
  readonly exchangedNotional: Scalars["Float"]["output"]
  readonly exchangedSize: Scalars["Float"]["output"]
  readonly fundingPayment?: Maybe<Scalars["Float"]["output"]>
  readonly latestCumulativePremiumFraction?: Maybe<Scalars["Float"]["output"]>
  readonly margin: Scalars["Float"]["output"]
  readonly marginToUser?: Maybe<Scalars["Int"]["output"]>
  readonly openNotional: Scalars["Float"]["output"]
  readonly pair: Scalars["String"]["output"]
  readonly positionNotional: Scalars["Float"]["output"]
  readonly realizedPnl?: Maybe<Scalars["Float"]["output"]>
  readonly size: Scalars["Float"]["output"]
  readonly traderAddress: Scalars["String"]["output"]
  readonly transactionFee?: Maybe<Token>
  readonly txSeqNo: Scalars["Int"]["output"]
}

export type PerpPositionChangeFilter = {
  readonly block?: InputMaybe<IntFilter>
  readonly blockTs?: InputMaybe<TimeFilter>
  readonly pair?: InputMaybe<StringFilter>
  readonly traderAddressEq: Scalars["String"]["input"]
}

export enum PerpPositionChangeOrder {
  ExchangedNotional = "exchanged_notional",
  ExchangedSize = "exchanged_size",
  Margin = "margin",
  OpenNotional = "open_notional",
  Pair = "pair",
  PositionNotional = "position_notional",
  Sequence = "sequence",
  Size = "size",
}

export type PerpPositionFilter = {
  readonly pair: Scalars["String"]["input"]
  readonly trader_address: Scalars["String"]["input"]
}

export enum PerpPositionOrder {
  CreatedBlock = "created_block",
  Pair = "pair",
  TraderAddress = "trader_address",
}

export type PerpPositionsFilter = {
  readonly include_closed?: InputMaybe<Scalars["Boolean"]["input"]>
  readonly pair?: InputMaybe<Scalars["String"]["input"]>
  readonly trader_address?: InputMaybe<Scalars["String"]["input"]>
}

export type Query = {
  readonly __typename?: "Query"
  readonly communityPool: ReadonlyArray<Token>
  readonly delegations: ReadonlyArray<Delegation>
  readonly distributionCommissions: ReadonlyArray<DistributionCommission>
  readonly governance: Governance
  readonly markPriceCandles: ReadonlyArray<MarkPriceCandle>
  readonly oracle: Oracle
  readonly perp: Perp
  /** @deprecated Moved to perp sub schema */
  readonly perpLeaderboard: ReadonlyArray<PerpLeaderboard>
  /** @deprecated Moved to perp sub schema */
  readonly perpMarket?: Maybe<PerpMarket>
  /** @deprecated Moved to perp sub schema */
  readonly perpMarkets: ReadonlyArray<PerpMarket>
  /** @deprecated Moved to perp sub schema */
  readonly perpPosition?: Maybe<PerpPosition>
  /** @deprecated Moved to perp sub schema */
  readonly perpPositions: ReadonlyArray<PerpPosition>
  readonly redelegations: ReadonlyArray<Redelegation>
  readonly spotLpPositions: ReadonlyArray<SpotLpPosition>
  readonly spotPoolCreated: ReadonlyArray<SpotPoolCreated>
  readonly spotPoolExited: ReadonlyArray<SpotPoolExited>
  readonly spotPoolJoined: ReadonlyArray<SpotPoolJoined>
  readonly spotPoolSwap: ReadonlyArray<SpotPoolSwap>
  readonly spotPools: ReadonlyArray<SpotPool>
  readonly stats: Stats
  readonly unbondings: ReadonlyArray<Unbonding>
  readonly users: ReadonlyArray<User>
  readonly validators: ReadonlyArray<Validator>
}

export type QueryCommunityPoolArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<CommunityPoolOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<CommunityPoolFilter>
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

export type QueryMarkPriceCandlesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<MarkPriceCandlesOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<MarkPriceCandlesFilter>
}

export type QueryPerpLeaderboardArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<PerpLeaderboardOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<PerpLeaderboardFilter>
}

export type QueryPerpMarketArgs = {
  where: PerpMarketFilter
}

export type QueryPerpMarketsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<PerpMarketOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<PerpMarketsFilter>
}

export type QueryPerpPositionArgs = {
  where: PerpPositionFilter
}

export type QueryPerpPositionsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<PerpPositionOrder>
  order_desc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<PerpPositionsFilter>
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

export type SpotLpPosition = {
  readonly __typename?: "SpotLpPosition"
  readonly created_block: Block
  readonly pool: SpotPool
  readonly pool_shares: Token
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
  readonly total_shares: Token
  readonly total_weight: Scalars["Float"]["output"]
  readonly weights: ReadonlyArray<Token>
}

export type SpotPoolCreated = {
  readonly __typename?: "SpotPoolCreated"
  readonly block: Block
  readonly pool: SpotPool
  readonly pool_shares: Token
  readonly user: User
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
  readonly pool_shares: Token
  readonly user: User
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
  readonly pool_shares: Token
  readonly user: User
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
  readonly user: User
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

export type Stats = {
  readonly __typename?: "Stats"
  readonly fees: ReadonlyArray<StatsFees>
  readonly perpOpenInterest: ReadonlyArray<StatsPerpOpenInterest>
  readonly perpPnl: ReadonlyArray<StatsPerpPnl>
  readonly totals: ReadonlyArray<StatsTotals>
  readonly tvl: ReadonlyArray<StatsTvl>
  readonly users: ReadonlyArray<StatsUsers>
  readonly volume: ReadonlyArray<StatsVolume>
}

export type StatsFeesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<StatsFeesOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<PeriodFilter>
}

export type StatsPerpOpenInterestArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<StatsPerpOpenInterestOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<PeriodFilter>
}

export type StatsPerpPnlArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<StatsPerpPnlOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<PeriodFilter>
}

export type StatsTotalsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<StatsTotalsOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<PeriodFilter>
}

export type StatsTvlArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<StatsTvlOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<PeriodFilter>
}

export type StatsUsersArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<StatsUsersOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<PeriodFilter>
}

export type StatsVolumeArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<StatsVolumeOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<PeriodFilter>
}

export type StatsFees = {
  readonly __typename?: "StatsFees"
  readonly feesLiquidations: Scalars["Float"]["output"]
  readonly feesLiquidationsCumulative: Scalars["Float"]["output"]
  readonly feesPerp: Scalars["Float"]["output"]
  readonly feesPerpCumulative: Scalars["Float"]["output"]
  readonly feesSwap: Scalars["Float"]["output"]
  readonly feesSwapCumulative: Scalars["Float"]["output"]
  readonly feesTotal: Scalars["Float"]["output"]
  readonly feesTotalCumulative: Scalars["Float"]["output"]
  readonly period: Scalars["Int"]["output"]
  readonly periodStartTs: Scalars["Time"]["output"]
}

export enum StatsFeesOrder {
  FeesLiquidations = "fees_liquidations",
  FeesLiquidationsCumulative = "fees_liquidations_cumulative",
  FeesPerp = "fees_perp",
  FeesPerpCumulative = "fees_perp_cumulative",
  FeesSwap = "fees_swap",
  FeesSwapCumulative = "fees_swap_cumulative",
  FeesTotal = "fees_total",
  FeesTotalCumulative = "fees_total_cumulative",
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type StatsPerpOpenInterest = {
  readonly __typename?: "StatsPerpOpenInterest"
  readonly openInterestLong: Scalars["Float"]["output"]
  readonly openInterestShort: Scalars["Float"]["output"]
  readonly openInterestTotal: Scalars["Float"]["output"]
  readonly period: Scalars["Int"]["output"]
  readonly periodStartTs: Scalars["Time"]["output"]
}

export enum StatsPerpOpenInterestOrder {
  OpenInterestLong = "open_interest_long",
  OpenInterestShort = "open_interest_short",
  OpenInterestTotal = "open_interest_total",
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type StatsPerpPnl = {
  readonly __typename?: "StatsPerpPnl"
  readonly loss: Scalars["Float"]["output"]
  readonly lossCumulative: Scalars["Float"]["output"]
  readonly netPnl: Scalars["Float"]["output"]
  readonly netPnlCumulative: Scalars["Float"]["output"]
  readonly period: Scalars["Int"]["output"]
  readonly periodStartTs: Scalars["Time"]["output"]
  readonly profit: Scalars["Float"]["output"]
  readonly profitCumulative: Scalars["Float"]["output"]
}

export enum StatsPerpPnlOrder {
  Loss = "loss",
  LossCumulative = "loss_cumulative",
  NetPnl = "net_pnl",
  NetPnlCumulative = "net_pnl_cumulative",
  Period = "period",
  PeriodStartTs = "period_start_ts",
  Profit = "profit",
  ProfitCumulative = "profit_cumulative",
}

export type StatsTotals = {
  readonly __typename?: "StatsTotals"
  readonly period: Scalars["Int"]["output"]
  readonly periodStartTs: Scalars["Time"]["output"]
  readonly totalFeesLiquidations: Scalars["Float"]["output"]
  readonly totalFeesPerp: Scalars["Float"]["output"]
  readonly totalOpenInterest: Scalars["Float"]["output"]
  readonly totalPerp: Scalars["Float"]["output"]
  readonly totalSwap: Scalars["Float"]["output"]
  readonly totalTvl: Scalars["Float"]["output"]
}

export enum StatsTotalsOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
  TotalFeesLiquidations = "total_fees_liquidations",
  TotalFeesPerp = "total_fees_perp",
  TotalOpenInterest = "total_open_interest",
  TotalPerp = "total_perp",
  TotalSwap = "total_swap",
  TotalTvl = "total_tvl",
}

export type StatsTvl = {
  readonly __typename?: "StatsTvl"
  readonly period: Scalars["Int"]["output"]
  readonly periodStartTs: Scalars["Time"]["output"]
  readonly tvlPerp: Scalars["Float"]["output"]
  readonly tvlStablecoin: Scalars["Float"]["output"]
  readonly tvlStaking: Scalars["Float"]["output"]
  readonly tvlSwap: Scalars["Float"]["output"]
  readonly tvlTotal: Scalars["Float"]["output"]
}

export enum StatsTvlOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
  TvlPerp = "tvl_perp",
  TvlStablecoin = "tvl_stablecoin",
  TvlStaking = "tvl_staking",
  TvlSwap = "tvl_swap",
  TvlTotal = "tvl_total",
}

export type StatsUsers = {
  readonly __typename?: "StatsUsers"
  readonly newUsersLp: Scalars["Int"]["output"]
  readonly newUsersLpCumulative: Scalars["Int"]["output"]
  readonly newUsersPerp: Scalars["Int"]["output"]
  readonly newUsersPerpCumulative: Scalars["Int"]["output"]
  readonly newUsersSwap: Scalars["Int"]["output"]
  readonly newUsersSwapCumulative: Scalars["Int"]["output"]
  readonly newUsersTotal: Scalars["Int"]["output"]
  readonly newUsersTotalCumulative: Scalars["Int"]["output"]
  readonly period: Scalars["Int"]["output"]
  readonly periodStartTs: Scalars["Time"]["output"]
  readonly uniqueUsersLp: Scalars["Int"]["output"]
  readonly uniqueUsersPerp: Scalars["Int"]["output"]
  readonly uniqueUsersSwap: Scalars["Int"]["output"]
  readonly uniqueUsersTotal: Scalars["Int"]["output"]
  readonly userActionsLp: Scalars["Int"]["output"]
  readonly userActionsPerp: Scalars["Int"]["output"]
  readonly userActionsSwap: Scalars["Int"]["output"]
  readonly userActionsTotal: Scalars["Int"]["output"]
}

export enum StatsUsersOrder {
  NewUsersLp = "new_users_lp",
  NewUsersLpCumulative = "new_users_lp_cumulative",
  NewUsersPerp = "new_users_perp",
  NewUsersPerpCumulative = "new_users_perp_cumulative",
  NewUsersSwap = "new_users_swap",
  NewUsersSwapCumulative = "new_users_swap_cumulative",
  NewUsersTotal = "new_users_total",
  NewUsersTotalCumulative = "new_users_total_cumulative",
  Period = "period",
  PeriodStartTs = "period_start_ts",
  UniqueUsersLp = "unique_users_lp",
  UniqueUsersPerp = "unique_users_perp",
  UniqueUsersSwap = "unique_users_swap",
  UniqueUsersTotal = "unique_users_total",
  UserActionsLp = "user_actions_lp",
  UserActionsPerp = "user_actions_perp",
  UserActionsSwap = "user_actions_swap",
  UserActionsTotal = "user_actions_total",
}

export type StatsVolume = {
  readonly __typename?: "StatsVolume"
  readonly period: Scalars["Int"]["output"]
  readonly periodStartTs: Scalars["Time"]["output"]
  readonly volumePerp: Scalars["Float"]["output"]
  readonly volumePerpCumulative: Scalars["Float"]["output"]
  readonly volumeSwap: Scalars["Float"]["output"]
  readonly volumeSwapCumulative: Scalars["Float"]["output"]
  readonly volumeTotal: Scalars["Float"]["output"]
  readonly volumeTotalCumulative: Scalars["Float"]["output"]
}

export enum StatsVolumeOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
  VolumePerp = "volume_perp",
  VolumePerpCumulative = "volume_perp_cumulative",
  VolumeSwap = "volume_swap",
  VolumeSwapCumulative = "volume_swap_cumulative",
  VolumeTotal = "volume_total",
  VolumeTotalCumulative = "volume_total_cumulative",
}

export type StringFilter = {
  readonly eq?: InputMaybe<Scalars["String"]["input"]>
  readonly like?: InputMaybe<Scalars["String"]["input"]>
}

export type SubOraclePricesFilter = {
  readonly pair: Scalars["String"]["input"]
}

export type SubPerpMarketFilter = {
  readonly pair: Scalars["String"]["input"]
}

export type SubPerpPositionFilter = {
  readonly pair?: InputMaybe<Scalars["String"]["input"]>
  readonly trader_address: Scalars["String"]["input"]
}

export type Subscription = {
  readonly __typename?: "Subscription"
  readonly markPriceCandles: ReadonlyArray<MarkPriceCandle>
  readonly oraclePrices: ReadonlyArray<OraclePrice>
  readonly perpMarket: PerpMarket
  readonly perpPositions: ReadonlyArray<PerpPosition>
}

export type SubscriptionMarkPriceCandlesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  where?: InputMaybe<MarkPriceCandlesFilter>
}

export type SubscriptionOraclePricesArgs = {
  where?: InputMaybe<SubOraclePricesFilter>
}

export type SubscriptionPerpMarketArgs = {
  where: SubPerpMarketFilter
}

export type SubscriptionPerpPositionsArgs = {
  where: SubPerpPositionFilter
}

export type TimeFilter = {
  readonly eq?: InputMaybe<Scalars["Time"]["input"]>
  readonly gt?: InputMaybe<Scalars["Time"]["input"]>
  readonly gte?: InputMaybe<Scalars["Time"]["input"]>
  readonly lt?: InputMaybe<Scalars["Time"]["input"]>
  readonly lte?: InputMaybe<Scalars["Time"]["input"]>
}

export type Token = {
  readonly __typename?: "Token"
  readonly amount: Scalars["String"]["output"]
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
  Tokens = "tokens",
}

export enum ValidatorStatus {
  Bonded = "BONDED",
  Unbonded = "UNBONDED",
  Unbonding = "UNBONDING",
}
