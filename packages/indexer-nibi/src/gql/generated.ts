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
  DateTime: { input: any; output: any }
  Decimal: { input: any; output: any }
  Long: { input: any; output: any }
}

export type AmmPoolExits = {
  __typename?: "AmmPoolExits"
  address?: Maybe<Scalars["String"]["output"]>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  poolId?: Maybe<Scalars["Long"]["output"]>
  poolSharesIn?: Maybe<Coin>
  tokensOut?: Maybe<Array<Maybe<Coin>>>
}

export type AmmPoolExitsFilter = {
  addressEq?: InputMaybe<Scalars["String"]["input"]>
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  poolIdEq?: InputMaybe<Scalars["Long"]["input"]>
  poolIdGt?: InputMaybe<Scalars["Long"]["input"]>
  poolIdGte?: InputMaybe<Scalars["Long"]["input"]>
  poolIdLt?: InputMaybe<Scalars["Long"]["input"]>
  poolIdLte?: InputMaybe<Scalars["Long"]["input"]>
}

export enum AmmPoolExitsOrder {
  Block = "block",
  BlockTs = "block_ts",
  PoolId = "pool_id",
}

export type AmmPoolJoins = {
  __typename?: "AmmPoolJoins"
  address?: Maybe<Scalars["String"]["output"]>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  poolId?: Maybe<Scalars["Long"]["output"]>
  poolSharesOut?: Maybe<Coin>
  remCoins?: Maybe<Array<Maybe<Coin>>>
  tokensIn?: Maybe<Array<Maybe<Coin>>>
}

export type AmmPoolJoinsFilter = {
  addressEq?: InputMaybe<Scalars["String"]["input"]>
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  poolIdEq?: InputMaybe<Scalars["Long"]["input"]>
  poolIdGt?: InputMaybe<Scalars["Long"]["input"]>
  poolIdGte?: InputMaybe<Scalars["Long"]["input"]>
  poolIdLt?: InputMaybe<Scalars["Long"]["input"]>
  poolIdLte?: InputMaybe<Scalars["Long"]["input"]>
}

export enum AmmPoolJoinsOrder {
  Block = "block",
  BlockTs = "block_ts",
  PoolId = "pool_id",
}

export type AmmPools = {
  __typename?: "AmmPools"
  address?: Maybe<Scalars["String"]["output"]>
  amplification?: Maybe<Scalars["Float"]["output"]>
  assets?: Maybe<Array<Maybe<Coin>>>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  exitFee?: Maybe<Scalars["Float"]["output"]>
  poolId?: Maybe<Scalars["Long"]["output"]>
  poolType?: Maybe<Scalars["String"]["output"]>
  swapFee?: Maybe<Scalars["Float"]["output"]>
  totalShares?: Maybe<Coin>
  totalWeight?: Maybe<Scalars["Float"]["output"]>
}

export type AmmPoolsFilter = {
  addressEq?: InputMaybe<Scalars["String"]["input"]>
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  exitFeeEq?: InputMaybe<Scalars["Float"]["input"]>
  exitFeeGt?: InputMaybe<Scalars["Float"]["input"]>
  exitFeeGte?: InputMaybe<Scalars["Float"]["input"]>
  exitFeeLt?: InputMaybe<Scalars["Float"]["input"]>
  exitFeeLte?: InputMaybe<Scalars["Float"]["input"]>
  poolIdEq?: InputMaybe<Scalars["Long"]["input"]>
  poolIdGt?: InputMaybe<Scalars["Long"]["input"]>
  poolIdGte?: InputMaybe<Scalars["Long"]["input"]>
  poolIdLt?: InputMaybe<Scalars["Long"]["input"]>
  poolIdLte?: InputMaybe<Scalars["Long"]["input"]>
  swapFeeEq?: InputMaybe<Scalars["Float"]["input"]>
  swapFeeGt?: InputMaybe<Scalars["Float"]["input"]>
  swapFeeGte?: InputMaybe<Scalars["Float"]["input"]>
  swapFeeLt?: InputMaybe<Scalars["Float"]["input"]>
  swapFeeLte?: InputMaybe<Scalars["Float"]["input"]>
  totalWeightEq?: InputMaybe<Scalars["Float"]["input"]>
  totalWeightGt?: InputMaybe<Scalars["Float"]["input"]>
  totalWeightGte?: InputMaybe<Scalars["Float"]["input"]>
  totalWeightLt?: InputMaybe<Scalars["Float"]["input"]>
  totalWeightLte?: InputMaybe<Scalars["Float"]["input"]>
}

export enum AmmPoolsOrder {
  Block = "block",
  BlockTs = "block_ts",
  ExitFee = "exit_fee",
  PoolId = "pool_id",
  SwapFee = "swap_fee",
  TotalWeight = "total_weight",
}

export type AmmSwaps = {
  __typename?: "AmmSwaps"
  address?: Maybe<Scalars["String"]["output"]>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  poolId?: Maybe<Scalars["Long"]["output"]>
  tokenIn?: Maybe<Coin>
  tokenOut?: Maybe<Coin>
}

export type AmmSwapsFilter = {
  addressEq?: InputMaybe<Scalars["String"]["input"]>
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  poolIdEq?: InputMaybe<Scalars["Long"]["input"]>
  poolIdGt?: InputMaybe<Scalars["Long"]["input"]>
  poolIdGte?: InputMaybe<Scalars["Long"]["input"]>
  poolIdLt?: InputMaybe<Scalars["Long"]["input"]>
  poolIdLte?: InputMaybe<Scalars["Long"]["input"]>
}

export enum AmmSwapsOrder {
  Block = "block",
  BlockTs = "block_ts",
  PoolId = "pool_id",
}

export type AmmTotalLiquidity = {
  __typename?: "AmmTotalLiquidity"
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  liquidity?: Maybe<Array<Maybe<Coin>>>
}

export type AmmTotalLiquidityFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum AmmTotalLiquidityOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type Balances = {
  __typename?: "Balances"
  address?: Maybe<Scalars["String"]["output"]>
  balance?: Maybe<Array<Maybe<Coin>>>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  moduleName?: Maybe<Scalars["String"]["output"]>
}

export type BalancesFilter = {
  addressEq?: InputMaybe<Scalars["String"]["input"]>
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  moduleNameEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum BalancesOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type Blocks = {
  __typename?: "Blocks"
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  duration?: Maybe<Scalars["Int"]["output"]>
  numTxs?: Maybe<Scalars["Long"]["output"]>
}

export type BlocksFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  numTxsEq?: InputMaybe<Scalars["Long"]["input"]>
  numTxsGt?: InputMaybe<Scalars["Long"]["input"]>
  numTxsGte?: InputMaybe<Scalars["Long"]["input"]>
  numTxsLt?: InputMaybe<Scalars["Long"]["input"]>
  numTxsLte?: InputMaybe<Scalars["Long"]["input"]>
}

export enum BlocksOrder {
  Block = "block",
  BlockTs = "block_ts",
  NumTxs = "num_txs",
}

export type Coin = {
  __typename?: "Coin"
  amount?: Maybe<Scalars["Float"]["output"]>
  denom?: Maybe<Scalars["String"]["output"]>
}

export type DelegateEvents = {
  __typename?: "DelegateEvents"
  amount?: Maybe<Scalars["Float"]["output"]>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  delegator?: Maybe<Scalars["String"]["output"]>
  newShares?: Maybe<Scalars["Float"]["output"]>
  validator?: Maybe<Scalars["String"]["output"]>
}

export type DelegateEventsFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  delegatorEq?: InputMaybe<Scalars["String"]["input"]>
  validatorEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum DelegateEventsOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type Delegations = {
  __typename?: "Delegations"
  balance?: Maybe<Coin>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  delegatorAddress?: Maybe<Scalars["String"]["output"]>
  shares?: Maybe<Scalars["Float"]["output"]>
  validatorAddress?: Maybe<Scalars["String"]["output"]>
}

export type DelegationsFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  delegatorAddressEq?: InputMaybe<Scalars["String"]["input"]>
  validatorAddressEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum DelegationsOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type EventGovProposalDeposit = {
  __typename?: "EventGovProposalDeposit"
  amount?: Maybe<Array<Maybe<Coin>>>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  proposalId?: Maybe<Scalars["Long"]["output"]>
}

export type EventGovProposalDepositFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  proposalIdEq?: InputMaybe<Scalars["Long"]["input"]>
  proposalIdGt?: InputMaybe<Scalars["Long"]["input"]>
  proposalIdGte?: InputMaybe<Scalars["Long"]["input"]>
  proposalIdLt?: InputMaybe<Scalars["Long"]["input"]>
  proposalIdLte?: InputMaybe<Scalars["Long"]["input"]>
}

export enum EventGovProposalDepositOrder {
  Block = "block",
  BlockTs = "block_ts",
  ProposalId = "proposal_id",
}

export type EventGovProposalVote = {
  __typename?: "EventGovProposalVote"
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  option?: Maybe<Scalars["Int"]["output"]>
  proposalId?: Maybe<Scalars["Long"]["output"]>
}

export type EventGovProposalVoteFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  proposalIdEq?: InputMaybe<Scalars["Long"]["input"]>
  proposalIdGt?: InputMaybe<Scalars["Long"]["input"]>
  proposalIdGte?: InputMaybe<Scalars["Long"]["input"]>
  proposalIdLt?: InputMaybe<Scalars["Long"]["input"]>
  proposalIdLte?: InputMaybe<Scalars["Long"]["input"]>
}

export enum EventGovProposalVoteOrder {
  Block = "block",
  BlockTs = "block_ts",
  ProposalId = "proposal_id",
}

export type EventGovSubmitProposal = {
  __typename?: "EventGovSubmitProposal"
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  proposalId?: Maybe<Scalars["Long"]["output"]>
}

export type EventGovSubmitProposalFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  proposalIdEq?: InputMaybe<Scalars["Long"]["input"]>
  proposalIdGt?: InputMaybe<Scalars["Long"]["input"]>
  proposalIdGte?: InputMaybe<Scalars["Long"]["input"]>
  proposalIdLt?: InputMaybe<Scalars["Long"]["input"]>
  proposalIdLte?: InputMaybe<Scalars["Long"]["input"]>
}

export enum EventGovSubmitProposalOrder {
  Block = "block",
  BlockTs = "block_ts",
  ProposalId = "proposal_id",
}

export type EventOracleAggregatePrevote = {
  __typename?: "EventOracleAggregatePrevote"
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  validator?: Maybe<Scalars["String"]["output"]>
}

export type EventOracleAggregatePrevoteFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  validatorEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum EventOracleAggregatePrevoteOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type EventOracleAggregateVote = {
  __typename?: "EventOracleAggregateVote"
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  validator?: Maybe<Scalars["String"]["output"]>
}

export type EventOracleAggregateVoteFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  validatorEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum EventOracleAggregateVoteOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type EventPerpPositionChanged = {
  __typename?: "EventPerpPositionChanged"
  badDebt?: Maybe<Coin>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  exchangedNotional?: Maybe<Scalars["Float"]["output"]>
  exchangedSize?: Maybe<Scalars["Float"]["output"]>
  fundingPayment?: Maybe<Scalars["Float"]["output"]>
  margin?: Maybe<Coin>
  markPrice?: Maybe<Scalars["Float"]["output"]>
  pair?: Maybe<Scalars["String"]["output"]>
  positionNotional?: Maybe<Scalars["Float"]["output"]>
  positionSize?: Maybe<Scalars["Float"]["output"]>
  realizedPnl?: Maybe<Scalars["Float"]["output"]>
  traderAddress?: Maybe<Scalars["String"]["output"]>
  transactionFee?: Maybe<Coin>
  unrealizedPnlAfter?: Maybe<Scalars["Float"]["output"]>
}

export type EventPerpPositionChangedFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  pairEq?: InputMaybe<Scalars["String"]["input"]>
  traderAddressEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum EventPerpPositionChangedOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type EventPerpPositionLiquidated = {
  __typename?: "EventPerpPositionLiquidated"
  badDebt?: Maybe<Coin>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  exchangedPositionSize?: Maybe<Scalars["Float"]["output"]>
  exchangedQuoteAmount?: Maybe<Scalars["Float"]["output"]>
  feeToEcosystemFund?: Maybe<Coin>
  feeToLiquidator?: Maybe<Coin>
  liquidatorAddress?: Maybe<Scalars["String"]["output"]>
  pair?: Maybe<Scalars["String"]["output"]>
  traderAddress?: Maybe<Scalars["String"]["output"]>
}

export type EventPerpPositionLiquidatedFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  liquidatorAddressEq?: InputMaybe<Scalars["String"]["input"]>
  pairEq?: InputMaybe<Scalars["String"]["input"]>
  traderAddressEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum EventPerpPositionLiquidatedOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type EventStakingDelegate = {
  __typename?: "EventStakingDelegate"
  amount?: Maybe<Scalars["Float"]["output"]>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  delegator?: Maybe<Scalars["String"]["output"]>
  newShares?: Maybe<Scalars["Float"]["output"]>
  validator?: Maybe<Scalars["String"]["output"]>
}

export type EventStakingDelegateFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  delegatorEq?: InputMaybe<Scalars["String"]["input"]>
  validatorEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum EventStakingDelegateOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type EventStakingRedelegate = {
  __typename?: "EventStakingRedelegate"
  amount?: Maybe<Scalars["Float"]["output"]>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  completionTime?: Maybe<Scalars["DateTime"]["output"]>
  delegator?: Maybe<Scalars["String"]["output"]>
  destinationValidator?: Maybe<Scalars["String"]["output"]>
  sourceValidator?: Maybe<Scalars["String"]["output"]>
}

export type EventStakingRedelegateFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  delegatorEq?: InputMaybe<Scalars["String"]["input"]>
  destinationValidatorEq?: InputMaybe<Scalars["String"]["input"]>
  sourceValidatorEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum EventStakingRedelegateOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type EventStakingUnbond = {
  __typename?: "EventStakingUnbond"
  amount?: Maybe<Scalars["Float"]["output"]>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  completionTime?: Maybe<Scalars["DateTime"]["output"]>
  delegator?: Maybe<Scalars["String"]["output"]>
  validator?: Maybe<Scalars["String"]["output"]>
}

export type EventStakingUnbondFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  delegatorEq?: InputMaybe<Scalars["String"]["input"]>
  validatorEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum EventStakingUnbondOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type EventWasmExecute = {
  __typename?: "EventWasmExecute"
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  contractAddress?: Maybe<Scalars["String"]["output"]>
  sender?: Maybe<Scalars["String"]["output"]>
}

export type EventWasmExecuteFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  contractAddressEq?: InputMaybe<Scalars["String"]["input"]>
  senderEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum EventWasmExecuteOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type EventWasmInstantiate = {
  __typename?: "EventWasmInstantiate"
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  codeId?: Maybe<Scalars["Long"]["output"]>
  contractAddress?: Maybe<Scalars["String"]["output"]>
  sender?: Maybe<Scalars["String"]["output"]>
}

export type EventWasmInstantiateFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  codeIdEq?: InputMaybe<Scalars["Long"]["input"]>
  codeIdGt?: InputMaybe<Scalars["Long"]["input"]>
  codeIdGte?: InputMaybe<Scalars["Long"]["input"]>
  codeIdLt?: InputMaybe<Scalars["Long"]["input"]>
  codeIdLte?: InputMaybe<Scalars["Long"]["input"]>
  contractAddressEq?: InputMaybe<Scalars["String"]["input"]>
  senderEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum EventWasmInstantiateOrder {
  Block = "block",
  BlockTs = "block_ts",
  CodeId = "code_id",
}

export type EventWasmStoreCode = {
  __typename?: "EventWasmStoreCode"
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  codeId?: Maybe<Scalars["Long"]["output"]>
  sender?: Maybe<Scalars["String"]["output"]>
}

export type EventWasmStoreCodeFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  codeIdEq?: InputMaybe<Scalars["Long"]["input"]>
  codeIdGt?: InputMaybe<Scalars["Long"]["input"]>
  codeIdGte?: InputMaybe<Scalars["Long"]["input"]>
  codeIdLt?: InputMaybe<Scalars["Long"]["input"]>
  codeIdLte?: InputMaybe<Scalars["Long"]["input"]>
  senderEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum EventWasmStoreCodeOrder {
  Block = "block",
  BlockTs = "block_ts",
  CodeId = "code_id",
}

export type FundingRates = {
  __typename?: "FundingRates"
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  cumulativePremiumFraction?: Maybe<Scalars["Float"]["output"]>
  indexPrice?: Maybe<Scalars["Float"]["output"]>
  latestFundingRate?: Maybe<Scalars["Float"]["output"]>
  markPrice?: Maybe<Scalars["Float"]["output"]>
  pair?: Maybe<Scalars["String"]["output"]>
}

export type FundingRatesFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  pairEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum FundingRatesOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type Liquidations = {
  __typename?: "Liquidations"
  badDebt?: Maybe<Coin>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  exchangedPositionSize?: Maybe<Scalars["Float"]["output"]>
  exchangedQuoteAmount?: Maybe<Scalars["Float"]["output"]>
  feeToEcosystemFund?: Maybe<Coin>
  feeToLiquidator?: Maybe<Coin>
  liquidatorAddress?: Maybe<Scalars["String"]["output"]>
  pair?: Maybe<Scalars["String"]["output"]>
  traderAddress?: Maybe<Scalars["String"]["output"]>
}

export type LiquidationsFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  liquidatorAddressEq?: InputMaybe<Scalars["String"]["input"]>
  pairEq?: InputMaybe<Scalars["String"]["input"]>
  traderAddressEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum LiquidationsOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type MarkPriceCandles = {
  __typename?: "MarkPriceCandles"
  close?: Maybe<Scalars["Float"]["output"]>
  high?: Maybe<Scalars["Float"]["output"]>
  low?: Maybe<Scalars["Float"]["output"]>
  open?: Maybe<Scalars["Float"]["output"]>
  pair?: Maybe<Scalars["String"]["output"]>
  period?: Maybe<Scalars["Long"]["output"]>
  periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
}

export type MarkPriceCandlesFilter = {
  pairEq?: InputMaybe<Scalars["String"]["input"]>
  periodEq?: InputMaybe<Scalars["Long"]["input"]>
  periodGt?: InputMaybe<Scalars["Long"]["input"]>
  periodGte?: InputMaybe<Scalars["Long"]["input"]>
  periodLt?: InputMaybe<Scalars["Long"]["input"]>
  periodLte?: InputMaybe<Scalars["Long"]["input"]>
  periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum MarkPriceCandlesOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type MarkPrices = {
  __typename?: "MarkPrices"
  baseReserve?: Maybe<Scalars["Float"]["output"]>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  pair?: Maybe<Scalars["String"]["output"]>
  price?: Maybe<Scalars["Float"]["output"]>
  quoteReserve?: Maybe<Scalars["Float"]["output"]>
}

export type MarkPricesFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  pairEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum MarkPricesOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type OraclePrices = {
  __typename?: "OraclePrices"
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  pair?: Maybe<Scalars["String"]["output"]>
  price?: Maybe<Scalars["Float"]["output"]>
}

export type OraclePricesFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  pairEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum OraclePricesOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type PerpLeaderboard = {
  __typename?: "PerpLeaderboard"
  inputMargin?: Maybe<Scalars["Decimal"]["output"]>
  lastUpdatedBlock?: Maybe<Scalars["Int"]["output"]>
  lastUpdatedBlockTs?: Maybe<Scalars["DateTime"]["output"]>
  percentagePnl?: Maybe<Scalars["Decimal"]["output"]>
  rawPnl?: Maybe<Scalars["Decimal"]["output"]>
  traderAddress?: Maybe<Scalars["String"]["output"]>
}

export type PositionChanges = {
  __typename?: "PositionChanges"
  badDebt?: Maybe<Coin>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  exchangedNotional?: Maybe<Scalars["Float"]["output"]>
  exchangedSize?: Maybe<Scalars["Float"]["output"]>
  fundingPayment?: Maybe<Scalars["Float"]["output"]>
  margin?: Maybe<Coin>
  markPrice?: Maybe<Scalars["Float"]["output"]>
  pair?: Maybe<Scalars["String"]["output"]>
  positionNotional?: Maybe<Scalars["Float"]["output"]>
  positionSize?: Maybe<Scalars["Float"]["output"]>
  realizedPnl?: Maybe<Scalars["Float"]["output"]>
  traderAddress?: Maybe<Scalars["String"]["output"]>
  transactionFee?: Maybe<Coin>
  unrealizedPnlAfter?: Maybe<Scalars["Float"]["output"]>
}

export type PositionChangesFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  pairEq?: InputMaybe<Scalars["String"]["input"]>
  traderAddressEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum PositionChangesOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type Positions = {
  __typename?: "Positions"
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  id?: Maybe<Scalars["Int"]["output"]>
  latestCumulativePremiumFraction?: Maybe<Scalars["Float"]["output"]>
  margin?: Maybe<Scalars["Float"]["output"]>
  marginRatioIndex?: Maybe<Scalars["Float"]["output"]>
  marginRatioMark?: Maybe<Scalars["Float"]["output"]>
  openBlock?: Maybe<Scalars["Long"]["output"]>
  openNotional?: Maybe<Scalars["Float"]["output"]>
  pair?: Maybe<Scalars["String"]["output"]>
  positionNotional?: Maybe<Scalars["Float"]["output"]>
  size?: Maybe<Scalars["Float"]["output"]>
  trader?: Maybe<Scalars["String"]["output"]>
  unrealizedPnl?: Maybe<Scalars["Float"]["output"]>
}

export type PositionsFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  idEq?: InputMaybe<Scalars["Int"]["input"]>
  idGt?: InputMaybe<Scalars["Int"]["input"]>
  idGte?: InputMaybe<Scalars["Int"]["input"]>
  idLt?: InputMaybe<Scalars["Int"]["input"]>
  idLte?: InputMaybe<Scalars["Int"]["input"]>
  pairEq?: InputMaybe<Scalars["String"]["input"]>
  traderEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum PositionsOrder {
  Block = "block",
  BlockTs = "block_ts",
  Id = "id",
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExt = {
  __typename?: "QueryExt"
  ammPoolExits?: Maybe<Array<Maybe<AmmPoolExits>>>
  ammPoolJoins?: Maybe<Array<Maybe<AmmPoolJoins>>>
  ammPools?: Maybe<Array<Maybe<AmmPools>>>
  ammSwaps?: Maybe<Array<Maybe<AmmSwaps>>>
  ammTotalLiquidity?: Maybe<Array<Maybe<AmmTotalLiquidity>>>
  balances?: Maybe<Array<Maybe<Balances>>>
  blocks?: Maybe<Array<Maybe<Blocks>>>
  delegateEvents?: Maybe<Array<Maybe<DelegateEvents>>>
  delegations?: Maybe<Array<Maybe<Delegations>>>
  eventGovProposalDeposit?: Maybe<Array<Maybe<EventGovProposalDeposit>>>
  eventGovProposalVote?: Maybe<Array<Maybe<EventGovProposalVote>>>
  eventGovSubmitProposal?: Maybe<Array<Maybe<EventGovSubmitProposal>>>
  eventOracleAggregatePrevote?: Maybe<Array<Maybe<EventOracleAggregatePrevote>>>
  eventOracleAggregateVote?: Maybe<Array<Maybe<EventOracleAggregateVote>>>
  eventPerpPositionChanged?: Maybe<Array<Maybe<EventPerpPositionChanged>>>
  eventPerpPositionLiquidated?: Maybe<Array<Maybe<EventPerpPositionLiquidated>>>
  eventStakingDelegate?: Maybe<Array<Maybe<EventStakingDelegate>>>
  eventStakingRedelegate?: Maybe<Array<Maybe<EventStakingRedelegate>>>
  eventStakingUnbond?: Maybe<Array<Maybe<EventStakingUnbond>>>
  eventWasmExecute?: Maybe<Array<Maybe<EventWasmExecute>>>
  eventWasmInstantiate?: Maybe<Array<Maybe<EventWasmInstantiate>>>
  eventWasmStoreCode?: Maybe<Array<Maybe<EventWasmStoreCode>>>
  fundingRates?: Maybe<Array<Maybe<FundingRates>>>
  liquidations?: Maybe<Array<Maybe<Liquidations>>>
  markPriceCandles?: Maybe<Array<Maybe<MarkPriceCandles>>>
  markPrices?: Maybe<Array<Maybe<MarkPrices>>>
  oraclePrices?: Maybe<Array<Maybe<OraclePrices>>>
  perpLeaderboard?: Maybe<Array<Maybe<PerpLeaderboard>>>
  positionChanges?: Maybe<Array<Maybe<PositionChanges>>>
  positions?: Maybe<Array<Maybe<Positions>>>
  redelegationEvents?: Maybe<Array<Maybe<RedelegationEvents>>>
  stablecoinCirculatingSupply?: Maybe<Array<Maybe<StablecoinCirculatingSupply>>>
  stakingPool?: Maybe<Array<Maybe<StakingPool>>>
  statsFees?: Maybe<Array<Maybe<StatsFees>>>
  statsNewUsers?: Maybe<Array<Maybe<StatsNewUsers>>>
  statsOpenInterest?: Maybe<Array<Maybe<StatsOpenInterest>>>
  statsPerpPnl?: Maybe<Array<Maybe<StatsPerpPnl>>>
  statsTotals?: Maybe<Array<Maybe<StatsTotals>>>
  statsTvl?: Maybe<Array<Maybe<StatsTvl>>>
  statsTx?: Maybe<Array<Maybe<StatsTx>>>
  statsUniqueUsers?: Maybe<Array<Maybe<StatsUniqueUsers>>>
  statsUsers?: Maybe<Array<Maybe<StatsUsers>>>
  statsVolume?: Maybe<Array<Maybe<StatsVolume>>>
  transfers?: Maybe<Array<Maybe<Transfers>>>
  unbondingEvents?: Maybe<Array<Maybe<UnbondingEvents>>>
  unbondings?: Maybe<Array<Maybe<Unbondings>>>
  userJoins?: Maybe<Array<Maybe<UserJoins>>>
  validators?: Maybe<Array<Maybe<Validators>>>
  vpoolConfigs?: Maybe<Array<Maybe<VpoolConfigs>>>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtAmmPoolExitsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<AmmPoolExitsOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<AmmPoolExitsFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtAmmPoolJoinsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<AmmPoolJoinsOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<AmmPoolJoinsFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtAmmPoolsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<AmmPoolsOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<AmmPoolsFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtAmmSwapsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<AmmSwapsOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<AmmSwapsFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtAmmTotalLiquidityArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<AmmTotalLiquidityOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<AmmTotalLiquidityFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtBalancesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<BalancesOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<BalancesFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtBlocksArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<BlocksOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<BlocksFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtDelegateEventsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<DelegateEventsOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<DelegateEventsFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtDelegationsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<DelegationsOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<DelegationsFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtEventGovProposalDepositArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<EventGovProposalDepositOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<EventGovProposalDepositFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtEventGovProposalVoteArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<EventGovProposalVoteOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<EventGovProposalVoteFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtEventGovSubmitProposalArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<EventGovSubmitProposalOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<EventGovSubmitProposalFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtEventOracleAggregatePrevoteArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<EventOracleAggregatePrevoteOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<EventOracleAggregatePrevoteFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtEventOracleAggregateVoteArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<EventOracleAggregateVoteOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<EventOracleAggregateVoteFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtEventPerpPositionChangedArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<EventPerpPositionChangedOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<EventPerpPositionChangedFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtEventPerpPositionLiquidatedArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<EventPerpPositionLiquidatedOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<EventPerpPositionLiquidatedFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtEventStakingDelegateArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<EventStakingDelegateOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<EventStakingDelegateFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtEventStakingRedelegateArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<EventStakingRedelegateOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<EventStakingRedelegateFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtEventStakingUnbondArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<EventStakingUnbondOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<EventStakingUnbondFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtEventWasmExecuteArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<EventWasmExecuteOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<EventWasmExecuteFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtEventWasmInstantiateArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<EventWasmInstantiateOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<EventWasmInstantiateFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtEventWasmStoreCodeArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<EventWasmStoreCodeOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<EventWasmStoreCodeFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtFundingRatesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<FundingRatesOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<FundingRatesFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtLiquidationsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<LiquidationsOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<LiquidationsFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtMarkPriceCandlesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<MarkPriceCandlesOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<MarkPriceCandlesFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtMarkPricesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<MarkPricesOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<MarkPricesFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtOraclePricesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<OraclePricesOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<OraclePricesFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtPerpLeaderboardArgs = {
  traderAddress?: InputMaybe<Scalars["String"]["input"]>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtPositionChangesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<PositionChangesOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<PositionChangesFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtPositionsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<PositionsOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<PositionsFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtRedelegationEventsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<RedelegationEventsOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<RedelegationEventsFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtStablecoinCirculatingSupplyArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<StablecoinCirculatingSupplyOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<StablecoinCirculatingSupplyFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtStakingPoolArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<StakingPoolOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<StakingPoolFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtStatsFeesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<StatsFeesOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<StatsFeesFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtStatsNewUsersArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<StatsNewUsersOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<StatsNewUsersFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtStatsOpenInterestArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<StatsOpenInterestOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<StatsOpenInterestFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtStatsPerpPnlArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<StatsPerpPnlOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<StatsPerpPnlFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtStatsTotalsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<StatsTotalsOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<StatsTotalsFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtStatsTvlArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<StatsTvlOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<StatsTvlFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtStatsTxArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<StatsTxOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<StatsTxFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtStatsUniqueUsersArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<StatsUniqueUsersOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<StatsUniqueUsersFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtStatsUsersArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<StatsUsersOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<StatsUsersFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtStatsVolumeArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<StatsVolumeOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<StatsVolumeFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtTransfersArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<TransfersOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<TransfersFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtUnbondingEventsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<UnbondingEventsOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<UnbondingEventsFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtUnbondingsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<UnbondingsOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<UnbondingsFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtUserJoinsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<UserJoinsOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<UserJoinsFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtValidatorsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<ValidatorsOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<ValidatorsFilter>
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExtVpoolConfigsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  order?: InputMaybe<VpoolConfigsOrder>
  orderDesc?: InputMaybe<Scalars["Boolean"]["input"]>
  where?: InputMaybe<VpoolConfigsFilter>
}

export type RedelegationEvents = {
  __typename?: "RedelegationEvents"
  amount?: Maybe<Scalars["Float"]["output"]>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  delegator?: Maybe<Scalars["String"]["output"]>
  destinationValidator?: Maybe<Scalars["String"]["output"]>
  sourceValidator?: Maybe<Scalars["String"]["output"]>
}

export type RedelegationEventsFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  delegatorEq?: InputMaybe<Scalars["String"]["input"]>
  destinationValidatorEq?: InputMaybe<Scalars["String"]["input"]>
  sourceValidatorEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum RedelegationEventsOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type StablecoinCirculatingSupply = {
  __typename?: "StablecoinCirculatingSupply"
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  supply?: Maybe<Array<Maybe<Coin>>>
}

export type StablecoinCirculatingSupplyFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StablecoinCirculatingSupplyOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type StakingPool = {
  __typename?: "StakingPool"
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  bondedTokens?: Maybe<Scalars["Long"]["output"]>
  notBondedTokens?: Maybe<Scalars["Long"]["output"]>
}

export type StakingPoolFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StakingPoolOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type StatsFees = {
  __typename?: "StatsFees"
  feesLiquidations?: Maybe<Scalars["Float"]["output"]>
  feesLiquidationsCumulative?: Maybe<Scalars["Float"]["output"]>
  feesPerp?: Maybe<Scalars["Float"]["output"]>
  feesPerpCumulative?: Maybe<Scalars["Float"]["output"]>
  feesSwap?: Maybe<Scalars["Float"]["output"]>
  feesSwapCumulative?: Maybe<Scalars["Float"]["output"]>
  feesTotal?: Maybe<Scalars["Float"]["output"]>
  feesTotalCumulative?: Maybe<Scalars["Float"]["output"]>
  period?: Maybe<Scalars["Long"]["output"]>
  periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
}

export type StatsFeesFilter = {
  periodEq?: InputMaybe<Scalars["Long"]["input"]>
  periodGt?: InputMaybe<Scalars["Long"]["input"]>
  periodGte?: InputMaybe<Scalars["Long"]["input"]>
  periodLt?: InputMaybe<Scalars["Long"]["input"]>
  periodLte?: InputMaybe<Scalars["Long"]["input"]>
  periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StatsFeesOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type StatsNewUsers = {
  __typename?: "StatsNewUsers"
  newUsersDelegate?: Maybe<Scalars["Long"]["output"]>
  newUsersLp?: Maybe<Scalars["Long"]["output"]>
  newUsersLpExit?: Maybe<Scalars["Long"]["output"]>
  newUsersPerp?: Maybe<Scalars["Long"]["output"]>
  newUsersRedelegate?: Maybe<Scalars["Long"]["output"]>
  newUsersSwap?: Maybe<Scalars["Long"]["output"]>
  newUsersTotal?: Maybe<Scalars["Long"]["output"]>
  newUsersTransfer?: Maybe<Scalars["Long"]["output"]>
  newUsersUnbonding?: Maybe<Scalars["Long"]["output"]>
  period?: Maybe<Scalars["Long"]["output"]>
  periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
}

export type StatsNewUsersFilter = {
  periodEq?: InputMaybe<Scalars["Long"]["input"]>
  periodGt?: InputMaybe<Scalars["Long"]["input"]>
  periodGte?: InputMaybe<Scalars["Long"]["input"]>
  periodLt?: InputMaybe<Scalars["Long"]["input"]>
  periodLte?: InputMaybe<Scalars["Long"]["input"]>
  periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StatsNewUsersOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type StatsOpenInterest = {
  __typename?: "StatsOpenInterest"
  openInterestLong?: Maybe<Scalars["Float"]["output"]>
  openInterestShort?: Maybe<Scalars["Float"]["output"]>
  openInterestTotal?: Maybe<Scalars["Float"]["output"]>
  period?: Maybe<Scalars["Long"]["output"]>
  periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
}

export type StatsOpenInterestFilter = {
  periodEq?: InputMaybe<Scalars["Long"]["input"]>
  periodGt?: InputMaybe<Scalars["Long"]["input"]>
  periodGte?: InputMaybe<Scalars["Long"]["input"]>
  periodLt?: InputMaybe<Scalars["Long"]["input"]>
  periodLte?: InputMaybe<Scalars["Long"]["input"]>
  periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StatsOpenInterestOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type StatsPerpPnl = {
  __typename?: "StatsPerpPnl"
  loss?: Maybe<Scalars["Float"]["output"]>
  lossCumulative?: Maybe<Scalars["Float"]["output"]>
  netPnl?: Maybe<Scalars["Float"]["output"]>
  netPnlCumulative?: Maybe<Scalars["Float"]["output"]>
  period?: Maybe<Scalars["Long"]["output"]>
  periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
  profit?: Maybe<Scalars["Float"]["output"]>
  profitCumulative?: Maybe<Scalars["Float"]["output"]>
}

export type StatsPerpPnlFilter = {
  periodEq?: InputMaybe<Scalars["Long"]["input"]>
  periodGt?: InputMaybe<Scalars["Long"]["input"]>
  periodGte?: InputMaybe<Scalars["Long"]["input"]>
  periodLt?: InputMaybe<Scalars["Long"]["input"]>
  periodLte?: InputMaybe<Scalars["Long"]["input"]>
  periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StatsPerpPnlOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type StatsTotals = {
  __typename?: "StatsTotals"
  period?: Maybe<Scalars["Long"]["output"]>
  periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
  totalFeesLiquidations?: Maybe<Scalars["Float"]["output"]>
  totalFeesPerp?: Maybe<Scalars["Float"]["output"]>
  totalOpenInterest?: Maybe<Scalars["Float"]["output"]>
  totalPerp?: Maybe<Scalars["Float"]["output"]>
  totalSwap?: Maybe<Scalars["Float"]["output"]>
  totalTvl?: Maybe<Scalars["Float"]["output"]>
}

export type StatsTotalsFilter = {
  periodEq?: InputMaybe<Scalars["Long"]["input"]>
  periodGt?: InputMaybe<Scalars["Long"]["input"]>
  periodGte?: InputMaybe<Scalars["Long"]["input"]>
  periodLt?: InputMaybe<Scalars["Long"]["input"]>
  periodLte?: InputMaybe<Scalars["Long"]["input"]>
  periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StatsTotalsOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type StatsTvl = {
  __typename?: "StatsTvl"
  period?: Maybe<Scalars["Long"]["output"]>
  periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
  tvlPerp?: Maybe<Scalars["Float"]["output"]>
  tvlStablecoin?: Maybe<Scalars["Float"]["output"]>
  tvlStaking?: Maybe<Scalars["Float"]["output"]>
  tvlSwap?: Maybe<Scalars["Float"]["output"]>
  tvlTotal?: Maybe<Scalars["Float"]["output"]>
}

export type StatsTvlFilter = {
  periodEq?: InputMaybe<Scalars["Long"]["input"]>
  periodGt?: InputMaybe<Scalars["Long"]["input"]>
  periodGte?: InputMaybe<Scalars["Long"]["input"]>
  periodLt?: InputMaybe<Scalars["Long"]["input"]>
  periodLte?: InputMaybe<Scalars["Long"]["input"]>
  periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StatsTvlOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type StatsTx = {
  __typename?: "StatsTx"
  numAmmExit?: Maybe<Scalars["Float"]["output"]>
  numAmmJoin?: Maybe<Scalars["Float"]["output"]>
  numAmmSwap?: Maybe<Scalars["Float"]["output"]>
  numDelegates?: Maybe<Scalars["Float"]["output"]>
  numPositionChanged?: Maybe<Scalars["Float"]["output"]>
  numRedelegates?: Maybe<Scalars["Float"]["output"]>
  numTransfers?: Maybe<Scalars["Float"]["output"]>
  numUnbonds?: Maybe<Scalars["Float"]["output"]>
  period?: Maybe<Scalars["Long"]["output"]>
  periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
  total?: Maybe<Scalars["Float"]["output"]>
}

export type StatsTxFilter = {
  periodEq?: InputMaybe<Scalars["Long"]["input"]>
  periodGt?: InputMaybe<Scalars["Long"]["input"]>
  periodGte?: InputMaybe<Scalars["Long"]["input"]>
  periodLt?: InputMaybe<Scalars["Long"]["input"]>
  periodLte?: InputMaybe<Scalars["Long"]["input"]>
  periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StatsTxOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type StatsUniqueUsers = {
  __typename?: "StatsUniqueUsers"
  period?: Maybe<Scalars["Long"]["output"]>
  periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
  uniqueUsersDelegate?: Maybe<Scalars["Long"]["output"]>
  uniqueUsersLp?: Maybe<Scalars["Long"]["output"]>
  uniqueUsersLpExit?: Maybe<Scalars["Long"]["output"]>
  uniqueUsersPerp?: Maybe<Scalars["Long"]["output"]>
  uniqueUsersRedelegate?: Maybe<Scalars["Long"]["output"]>
  uniqueUsersSwap?: Maybe<Scalars["Long"]["output"]>
  uniqueUsersTotal?: Maybe<Scalars["Long"]["output"]>
  uniqueUsersTransfer?: Maybe<Scalars["Long"]["output"]>
  uniqueUsersUnbonding?: Maybe<Scalars["Long"]["output"]>
}

export type StatsUniqueUsersFilter = {
  periodEq?: InputMaybe<Scalars["Long"]["input"]>
  periodGt?: InputMaybe<Scalars["Long"]["input"]>
  periodGte?: InputMaybe<Scalars["Long"]["input"]>
  periodLt?: InputMaybe<Scalars["Long"]["input"]>
  periodLte?: InputMaybe<Scalars["Long"]["input"]>
  periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StatsUniqueUsersOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type StatsUsers = {
  __typename?: "StatsUsers"
  newUsersLp?: Maybe<Scalars["Long"]["output"]>
  newUsersLpCumulative?: Maybe<Scalars["Long"]["output"]>
  newUsersPerp?: Maybe<Scalars["Long"]["output"]>
  newUsersPerpCumulative?: Maybe<Scalars["Long"]["output"]>
  newUsersSwap?: Maybe<Scalars["Long"]["output"]>
  newUsersSwapCumulative?: Maybe<Scalars["Long"]["output"]>
  newUsersTotal?: Maybe<Scalars["Long"]["output"]>
  newUsersTotalCumulative?: Maybe<Scalars["Long"]["output"]>
  period?: Maybe<Scalars["Long"]["output"]>
  periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
  uniqueUsersLp?: Maybe<Scalars["Long"]["output"]>
  uniqueUsersPerp?: Maybe<Scalars["Long"]["output"]>
  uniqueUsersSwap?: Maybe<Scalars["Long"]["output"]>
  uniqueUsersTotal?: Maybe<Scalars["Long"]["output"]>
  userActionsLp?: Maybe<Scalars["Long"]["output"]>
  userActionsPerp?: Maybe<Scalars["Long"]["output"]>
  userActionsSwap?: Maybe<Scalars["Long"]["output"]>
  userActionsTotal?: Maybe<Scalars["Long"]["output"]>
}

export type StatsUsersFilter = {
  periodEq?: InputMaybe<Scalars["Long"]["input"]>
  periodGt?: InputMaybe<Scalars["Long"]["input"]>
  periodGte?: InputMaybe<Scalars["Long"]["input"]>
  periodLt?: InputMaybe<Scalars["Long"]["input"]>
  periodLte?: InputMaybe<Scalars["Long"]["input"]>
  periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StatsUsersOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type StatsVolume = {
  __typename?: "StatsVolume"
  period?: Maybe<Scalars["Long"]["output"]>
  periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
  volumePerp?: Maybe<Scalars["Float"]["output"]>
  volumePerpCumulative?: Maybe<Scalars["Float"]["output"]>
  volumeSwap?: Maybe<Scalars["Float"]["output"]>
  volumeSwapCumulative?: Maybe<Scalars["Float"]["output"]>
  volumeTotal?: Maybe<Scalars["Float"]["output"]>
  volumeTotalCumulative?: Maybe<Scalars["Float"]["output"]>
}

export type StatsVolumeFilter = {
  periodEq?: InputMaybe<Scalars["Long"]["input"]>
  periodGt?: InputMaybe<Scalars["Long"]["input"]>
  periodGte?: InputMaybe<Scalars["Long"]["input"]>
  periodLt?: InputMaybe<Scalars["Long"]["input"]>
  periodLte?: InputMaybe<Scalars["Long"]["input"]>
  periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StatsVolumeOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type Transfers = {
  __typename?: "Transfers"
  amount?: Maybe<Array<Maybe<Coin>>>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  recipient?: Maybe<Scalars["String"]["output"]>
  sender?: Maybe<Scalars["String"]["output"]>
}

export type TransfersFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  recipientEq?: InputMaybe<Scalars["String"]["input"]>
  senderEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum TransfersOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type UnbondingEvents = {
  __typename?: "UnbondingEvents"
  amount?: Maybe<Scalars["Float"]["output"]>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  delegator?: Maybe<Scalars["String"]["output"]>
  validator?: Maybe<Scalars["String"]["output"]>
}

export type UnbondingEventsFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  delegatorEq?: InputMaybe<Scalars["String"]["input"]>
  validatorEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum UnbondingEventsOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type Unbondings = {
  __typename?: "Unbondings"
  balance?: Maybe<Scalars["Long"]["output"]>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  completionTime?: Maybe<Scalars["DateTime"]["output"]>
  creationHeight?: Maybe<Scalars["Long"]["output"]>
  delegatorAddress?: Maybe<Scalars["String"]["output"]>
  initialBalance?: Maybe<Scalars["Long"]["output"]>
  validatorAddress?: Maybe<Scalars["String"]["output"]>
}

export type UnbondingsFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  delegatorAddressEq?: InputMaybe<Scalars["String"]["input"]>
  validatorAddressEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum UnbondingsOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type UserJoins = {
  __typename?: "UserJoins"
  action?: Maybe<Scalars["String"]["output"]>
  address?: Maybe<Scalars["String"]["output"]>
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
}

export type UserJoinsFilter = {
  actionEq?: InputMaybe<Scalars["String"]["input"]>
  addressEq?: InputMaybe<Scalars["String"]["input"]>
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum UserJoinsOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type Validators = {
  __typename?: "Validators"
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  commissionRates?: Maybe<Scalars["String"]["output"]>
  commissionUpdateTime?: Maybe<Scalars["DateTime"]["output"]>
  delegatorShares?: Maybe<Scalars["Float"]["output"]>
  description?: Maybe<Scalars["String"]["output"]>
  jailed?: Maybe<Scalars["Boolean"]["output"]>
  operatorAddress?: Maybe<Scalars["String"]["output"]>
  statusBonded?: Maybe<Scalars["Boolean"]["output"]>
  tokens?: Maybe<Scalars["Long"]["output"]>
  unbondingHeight?: Maybe<Scalars["Long"]["output"]>
  unbondingTime?: Maybe<Scalars["DateTime"]["output"]>
}

export type ValidatorsFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  jailedEq?: InputMaybe<Scalars["Boolean"]["input"]>
  operatorAddressEq?: InputMaybe<Scalars["String"]["input"]>
  statusBondedEq?: InputMaybe<Scalars["Boolean"]["input"]>
  tokensEq?: InputMaybe<Scalars["Long"]["input"]>
  tokensGt?: InputMaybe<Scalars["Long"]["input"]>
  tokensGte?: InputMaybe<Scalars["Long"]["input"]>
  tokensLt?: InputMaybe<Scalars["Long"]["input"]>
  tokensLte?: InputMaybe<Scalars["Long"]["input"]>
}

export enum ValidatorsOrder {
  Block = "block",
  BlockTs = "block_ts",
  Jailed = "jailed",
  StatusBonded = "status_bonded",
  Tokens = "tokens",
}

export type VpoolConfigs = {
  __typename?: "VpoolConfigs"
  block?: Maybe<Scalars["Long"]["output"]>
  blockTs?: Maybe<Scalars["DateTime"]["output"]>
  fluctuationLimitRatio?: Maybe<Scalars["Float"]["output"]>
  maintenanceMarginRatio?: Maybe<Scalars["Float"]["output"]>
  maxLeverage?: Maybe<Scalars["Float"]["output"]>
  maxOracleSpreadRatio?: Maybe<Scalars["Float"]["output"]>
  pair?: Maybe<Scalars["String"]["output"]>
  tradeLimitRatio?: Maybe<Scalars["Float"]["output"]>
}

export type VpoolConfigsFilter = {
  blockEq?: InputMaybe<Scalars["Long"]["input"]>
  blockGt?: InputMaybe<Scalars["Long"]["input"]>
  blockGte?: InputMaybe<Scalars["Long"]["input"]>
  blockLt?: InputMaybe<Scalars["Long"]["input"]>
  blockLte?: InputMaybe<Scalars["Long"]["input"]>
  blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  pairEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum VpoolConfigsOrder {
  Block = "block",
  BlockTs = "block_ts",
}
