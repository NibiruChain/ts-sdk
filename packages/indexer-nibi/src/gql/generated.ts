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
  DateTime: { input: string; output: string }
  Decimal: { input: string; output: string }
  Long: { input: number; output: number }
}

export type AmmPoolExits = {
  readonly __typename?: "AmmPoolExits"
  readonly address?: Maybe<Scalars["String"]["output"]>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly poolId?: Maybe<Scalars["Long"]["output"]>
  readonly poolSharesIn?: Maybe<Coin>
  readonly tokensOut?: Maybe<ReadonlyArray<Maybe<Coin>>>
}

export type AmmPoolExitsFilter = {
  readonly addressEq?: InputMaybe<Scalars["String"]["input"]>
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly poolIdEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly poolIdGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly poolIdGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly poolIdLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly poolIdLte?: InputMaybe<Scalars["Long"]["input"]>
}

export enum AmmPoolExitsOrder {
  Block = "block",
  BlockTs = "block_ts",
  PoolId = "pool_id",
}

export type AmmPoolJoins = {
  readonly __typename?: "AmmPoolJoins"
  readonly address?: Maybe<Scalars["String"]["output"]>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly poolId?: Maybe<Scalars["Long"]["output"]>
  readonly poolSharesOut?: Maybe<Coin>
  readonly remCoins?: Maybe<ReadonlyArray<Maybe<Coin>>>
  readonly tokensIn?: Maybe<ReadonlyArray<Maybe<Coin>>>
}

export type AmmPoolJoinsFilter = {
  readonly addressEq?: InputMaybe<Scalars["String"]["input"]>
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly poolIdEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly poolIdGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly poolIdGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly poolIdLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly poolIdLte?: InputMaybe<Scalars["Long"]["input"]>
}

export enum AmmPoolJoinsOrder {
  Block = "block",
  BlockTs = "block_ts",
  PoolId = "pool_id",
}

export type AmmPools = {
  readonly __typename?: "AmmPools"
  readonly address?: Maybe<Scalars["String"]["output"]>
  readonly amplification?: Maybe<Scalars["Float"]["output"]>
  readonly assets?: Maybe<ReadonlyArray<Maybe<Coin>>>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly exitFee?: Maybe<Scalars["Float"]["output"]>
  readonly poolId?: Maybe<Scalars["Long"]["output"]>
  readonly poolType?: Maybe<Scalars["String"]["output"]>
  readonly swapFee?: Maybe<Scalars["Float"]["output"]>
  readonly totalShares?: Maybe<Coin>
  readonly totalWeight?: Maybe<Scalars["Float"]["output"]>
}

export type AmmPoolsFilter = {
  readonly addressEq?: InputMaybe<Scalars["String"]["input"]>
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly exitFeeEq?: InputMaybe<Scalars["Float"]["input"]>
  readonly exitFeeGt?: InputMaybe<Scalars["Float"]["input"]>
  readonly exitFeeGte?: InputMaybe<Scalars["Float"]["input"]>
  readonly exitFeeLt?: InputMaybe<Scalars["Float"]["input"]>
  readonly exitFeeLte?: InputMaybe<Scalars["Float"]["input"]>
  readonly poolIdEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly poolIdGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly poolIdGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly poolIdLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly poolIdLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly swapFeeEq?: InputMaybe<Scalars["Float"]["input"]>
  readonly swapFeeGt?: InputMaybe<Scalars["Float"]["input"]>
  readonly swapFeeGte?: InputMaybe<Scalars["Float"]["input"]>
  readonly swapFeeLt?: InputMaybe<Scalars["Float"]["input"]>
  readonly swapFeeLte?: InputMaybe<Scalars["Float"]["input"]>
  readonly totalWeightEq?: InputMaybe<Scalars["Float"]["input"]>
  readonly totalWeightGt?: InputMaybe<Scalars["Float"]["input"]>
  readonly totalWeightGte?: InputMaybe<Scalars["Float"]["input"]>
  readonly totalWeightLt?: InputMaybe<Scalars["Float"]["input"]>
  readonly totalWeightLte?: InputMaybe<Scalars["Float"]["input"]>
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
  readonly __typename?: "AmmSwaps"
  readonly address?: Maybe<Scalars["String"]["output"]>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly poolId?: Maybe<Scalars["Long"]["output"]>
  readonly tokenIn?: Maybe<Coin>
  readonly tokenOut?: Maybe<Coin>
}

export type AmmSwapsFilter = {
  readonly addressEq?: InputMaybe<Scalars["String"]["input"]>
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly poolIdEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly poolIdGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly poolIdGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly poolIdLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly poolIdLte?: InputMaybe<Scalars["Long"]["input"]>
}

export enum AmmSwapsOrder {
  Block = "block",
  BlockTs = "block_ts",
  PoolId = "pool_id",
}

export type AmmTotalLiquidity = {
  readonly __typename?: "AmmTotalLiquidity"
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly liquidity?: Maybe<ReadonlyArray<Maybe<Coin>>>
}

export type AmmTotalLiquidityFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum AmmTotalLiquidityOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type Balances = {
  readonly __typename?: "Balances"
  readonly address?: Maybe<Scalars["String"]["output"]>
  readonly balance?: Maybe<ReadonlyArray<Maybe<Coin>>>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly moduleName?: Maybe<Scalars["String"]["output"]>
}

export type BalancesFilter = {
  readonly addressEq?: InputMaybe<Scalars["String"]["input"]>
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly moduleNameEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum BalancesOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type Blocks = {
  readonly __typename?: "Blocks"
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly duration?: Maybe<Scalars["Int"]["output"]>
  readonly numTxs?: Maybe<Scalars["Long"]["output"]>
}

export type BlocksFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly numTxsEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly numTxsGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly numTxsGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly numTxsLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly numTxsLte?: InputMaybe<Scalars["Long"]["input"]>
}

export enum BlocksOrder {
  Block = "block",
  BlockTs = "block_ts",
  NumTxs = "num_txs",
}

export type Coin = {
  readonly __typename?: "Coin"
  readonly amount?: Maybe<Scalars["Float"]["output"]>
  readonly denom?: Maybe<Scalars["String"]["output"]>
}

export type DelegateEvents = {
  readonly __typename?: "DelegateEvents"
  readonly amount?: Maybe<Scalars["Float"]["output"]>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly delegator?: Maybe<Scalars["String"]["output"]>
  readonly newShares?: Maybe<Scalars["Float"]["output"]>
  readonly validator?: Maybe<Scalars["String"]["output"]>
}

export type DelegateEventsFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly delegatorEq?: InputMaybe<Scalars["String"]["input"]>
  readonly validatorEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum DelegateEventsOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type Delegations = {
  readonly __typename?: "Delegations"
  readonly balance?: Maybe<Coin>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly delegatorAddress?: Maybe<Scalars["String"]["output"]>
  readonly shares?: Maybe<Scalars["Float"]["output"]>
  readonly validatorAddress?: Maybe<Scalars["String"]["output"]>
}

export type DelegationsFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly delegatorAddressEq?: InputMaybe<Scalars["String"]["input"]>
  readonly validatorAddressEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum DelegationsOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type EventGovProposalDeposit = {
  readonly __typename?: "EventGovProposalDeposit"
  readonly amount?: Maybe<ReadonlyArray<Maybe<Coin>>>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly proposalId?: Maybe<Scalars["Long"]["output"]>
}

export type EventGovProposalDepositFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly proposalIdEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly proposalIdGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly proposalIdGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly proposalIdLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly proposalIdLte?: InputMaybe<Scalars["Long"]["input"]>
}

export enum EventGovProposalDepositOrder {
  Block = "block",
  BlockTs = "block_ts",
  ProposalId = "proposal_id",
}

export type EventGovProposalVote = {
  readonly __typename?: "EventGovProposalVote"
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly option?: Maybe<Scalars["Int"]["output"]>
  readonly proposalId?: Maybe<Scalars["Long"]["output"]>
}

export type EventGovProposalVoteFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly proposalIdEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly proposalIdGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly proposalIdGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly proposalIdLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly proposalIdLte?: InputMaybe<Scalars["Long"]["input"]>
}

export enum EventGovProposalVoteOrder {
  Block = "block",
  BlockTs = "block_ts",
  ProposalId = "proposal_id",
}

export type EventGovSubmitProposal = {
  readonly __typename?: "EventGovSubmitProposal"
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly proposalId?: Maybe<Scalars["Long"]["output"]>
}

export type EventGovSubmitProposalFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly proposalIdEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly proposalIdGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly proposalIdGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly proposalIdLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly proposalIdLte?: InputMaybe<Scalars["Long"]["input"]>
}

export enum EventGovSubmitProposalOrder {
  Block = "block",
  BlockTs = "block_ts",
  ProposalId = "proposal_id",
}

export type EventOracleAggregatePrevote = {
  readonly __typename?: "EventOracleAggregatePrevote"
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly validator?: Maybe<Scalars["String"]["output"]>
}

export type EventOracleAggregatePrevoteFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly validatorEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum EventOracleAggregatePrevoteOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type EventOracleAggregateVote = {
  readonly __typename?: "EventOracleAggregateVote"
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly validator?: Maybe<Scalars["String"]["output"]>
}

export type EventOracleAggregateVoteFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly validatorEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum EventOracleAggregateVoteOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type EventPerpPositionChanged = {
  readonly __typename?: "EventPerpPositionChanged"
  readonly badDebt?: Maybe<Coin>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly exchangedNotional?: Maybe<Scalars["Float"]["output"]>
  readonly exchangedSize?: Maybe<Scalars["Float"]["output"]>
  readonly fundingPayment?: Maybe<Scalars["Float"]["output"]>
  readonly margin?: Maybe<Coin>
  readonly markPrice?: Maybe<Scalars["Float"]["output"]>
  readonly pair?: Maybe<Scalars["String"]["output"]>
  readonly positionNotional?: Maybe<Scalars["Float"]["output"]>
  readonly positionSize?: Maybe<Scalars["Float"]["output"]>
  readonly realizedPnl?: Maybe<Scalars["Float"]["output"]>
  readonly traderAddress?: Maybe<Scalars["String"]["output"]>
  readonly transactionFee?: Maybe<Coin>
  readonly unrealizedPnlAfter?: Maybe<Scalars["Float"]["output"]>
}

export type EventPerpPositionChangedFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly pairEq?: InputMaybe<Scalars["String"]["input"]>
  readonly traderAddressEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum EventPerpPositionChangedOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type EventPerpPositionLiquidated = {
  readonly __typename?: "EventPerpPositionLiquidated"
  readonly badDebt?: Maybe<Coin>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly exchangedPositionSize?: Maybe<Scalars["Float"]["output"]>
  readonly exchangedQuoteAmount?: Maybe<Scalars["Float"]["output"]>
  readonly feeToEcosystemFund?: Maybe<Coin>
  readonly feeToLiquidator?: Maybe<Coin>
  readonly liquidatorAddress?: Maybe<Scalars["String"]["output"]>
  readonly pair?: Maybe<Scalars["String"]["output"]>
  readonly traderAddress?: Maybe<Scalars["String"]["output"]>
}

export type EventPerpPositionLiquidatedFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly liquidatorAddressEq?: InputMaybe<Scalars["String"]["input"]>
  readonly pairEq?: InputMaybe<Scalars["String"]["input"]>
  readonly traderAddressEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum EventPerpPositionLiquidatedOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type EventStakingDelegate = {
  readonly __typename?: "EventStakingDelegate"
  readonly amount?: Maybe<Scalars["Float"]["output"]>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly delegator?: Maybe<Scalars["String"]["output"]>
  readonly newShares?: Maybe<Scalars["Float"]["output"]>
  readonly validator?: Maybe<Scalars["String"]["output"]>
}

export type EventStakingDelegateFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly delegatorEq?: InputMaybe<Scalars["String"]["input"]>
  readonly validatorEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum EventStakingDelegateOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type EventStakingRedelegate = {
  readonly __typename?: "EventStakingRedelegate"
  readonly amount?: Maybe<Scalars["Float"]["output"]>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly completionTime?: Maybe<Scalars["DateTime"]["output"]>
  readonly delegator?: Maybe<Scalars["String"]["output"]>
  readonly destinationValidator?: Maybe<Scalars["String"]["output"]>
  readonly sourceValidator?: Maybe<Scalars["String"]["output"]>
}

export type EventStakingRedelegateFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly delegatorEq?: InputMaybe<Scalars["String"]["input"]>
  readonly destinationValidatorEq?: InputMaybe<Scalars["String"]["input"]>
  readonly sourceValidatorEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum EventStakingRedelegateOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type EventStakingUnbond = {
  readonly __typename?: "EventStakingUnbond"
  readonly amount?: Maybe<Scalars["Float"]["output"]>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly completionTime?: Maybe<Scalars["DateTime"]["output"]>
  readonly delegator?: Maybe<Scalars["String"]["output"]>
  readonly validator?: Maybe<Scalars["String"]["output"]>
}

export type EventStakingUnbondFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly delegatorEq?: InputMaybe<Scalars["String"]["input"]>
  readonly validatorEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum EventStakingUnbondOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type EventWasmExecute = {
  readonly __typename?: "EventWasmExecute"
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly contractAddress?: Maybe<Scalars["String"]["output"]>
  readonly sender?: Maybe<Scalars["String"]["output"]>
}

export type EventWasmExecuteFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly contractAddressEq?: InputMaybe<Scalars["String"]["input"]>
  readonly senderEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum EventWasmExecuteOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type EventWasmInstantiate = {
  readonly __typename?: "EventWasmInstantiate"
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly codeId?: Maybe<Scalars["Long"]["output"]>
  readonly contractAddress?: Maybe<Scalars["String"]["output"]>
  readonly sender?: Maybe<Scalars["String"]["output"]>
}

export type EventWasmInstantiateFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly codeIdEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly codeIdGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly codeIdGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly codeIdLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly codeIdLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly contractAddressEq?: InputMaybe<Scalars["String"]["input"]>
  readonly senderEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum EventWasmInstantiateOrder {
  Block = "block",
  BlockTs = "block_ts",
  CodeId = "code_id",
}

export type EventWasmStoreCode = {
  readonly __typename?: "EventWasmStoreCode"
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly codeId?: Maybe<Scalars["Long"]["output"]>
  readonly sender?: Maybe<Scalars["String"]["output"]>
}

export type EventWasmStoreCodeFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly codeIdEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly codeIdGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly codeIdGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly codeIdLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly codeIdLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly senderEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum EventWasmStoreCodeOrder {
  Block = "block",
  BlockTs = "block_ts",
  CodeId = "code_id",
}

export type FundingRates = {
  readonly __typename?: "FundingRates"
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly cumulativePremiumFraction?: Maybe<Scalars["Float"]["output"]>
  readonly indexPrice?: Maybe<Scalars["Float"]["output"]>
  readonly latestFundingRate?: Maybe<Scalars["Float"]["output"]>
  readonly markPrice?: Maybe<Scalars["Float"]["output"]>
  readonly pair?: Maybe<Scalars["String"]["output"]>
}

export type FundingRatesFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly pairEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum FundingRatesOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type Liquidations = {
  readonly __typename?: "Liquidations"
  readonly badDebt?: Maybe<Coin>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly exchangedPositionSize?: Maybe<Scalars["Float"]["output"]>
  readonly exchangedQuoteAmount?: Maybe<Scalars["Float"]["output"]>
  readonly feeToEcosystemFund?: Maybe<Coin>
  readonly feeToLiquidator?: Maybe<Coin>
  readonly liquidatorAddress?: Maybe<Scalars["String"]["output"]>
  readonly pair?: Maybe<Scalars["String"]["output"]>
  readonly traderAddress?: Maybe<Scalars["String"]["output"]>
}

export type LiquidationsFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly liquidatorAddressEq?: InputMaybe<Scalars["String"]["input"]>
  readonly pairEq?: InputMaybe<Scalars["String"]["input"]>
  readonly traderAddressEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum LiquidationsOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type MarkPriceCandles = {
  readonly __typename?: "MarkPriceCandles"
  readonly close?: Maybe<Scalars["Float"]["output"]>
  readonly high?: Maybe<Scalars["Float"]["output"]>
  readonly low?: Maybe<Scalars["Float"]["output"]>
  readonly open?: Maybe<Scalars["Float"]["output"]>
  readonly pair?: Maybe<Scalars["String"]["output"]>
  readonly period?: Maybe<Scalars["Long"]["output"]>
  readonly periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
}

export type MarkPriceCandlesFilter = {
  readonly pairEq?: InputMaybe<Scalars["String"]["input"]>
  readonly periodEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum MarkPriceCandlesOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type MarkPrices = {
  readonly __typename?: "MarkPrices"
  readonly baseReserve?: Maybe<Scalars["Float"]["output"]>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly pair?: Maybe<Scalars["String"]["output"]>
  readonly price?: Maybe<Scalars["Float"]["output"]>
  readonly quoteReserve?: Maybe<Scalars["Float"]["output"]>
}

export type MarkPricesFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly pairEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum MarkPricesOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type OraclePrices = {
  readonly __typename?: "OraclePrices"
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly pair?: Maybe<Scalars["String"]["output"]>
  readonly price?: Maybe<Scalars["Float"]["output"]>
}

export type OraclePricesFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly pairEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum OraclePricesOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type PerpLeaderboard = {
  readonly __typename?: "PerpLeaderboard"
  readonly inputMargin?: Maybe<Scalars["Decimal"]["output"]>
  readonly lastUpdatedBlock?: Maybe<Scalars["Int"]["output"]>
  readonly lastUpdatedBlockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly percentagePnl?: Maybe<Scalars["Decimal"]["output"]>
  readonly rawPnl?: Maybe<Scalars["Decimal"]["output"]>
  readonly traderAddress?: Maybe<Scalars["String"]["output"]>
}

export type PositionChanges = {
  readonly __typename?: "PositionChanges"
  readonly badDebt?: Maybe<Coin>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly exchangedNotional?: Maybe<Scalars["Float"]["output"]>
  readonly exchangedSize?: Maybe<Scalars["Float"]["output"]>
  readonly fundingPayment?: Maybe<Scalars["Float"]["output"]>
  readonly margin?: Maybe<Coin>
  readonly markPrice?: Maybe<Scalars["Float"]["output"]>
  readonly pair?: Maybe<Scalars["String"]["output"]>
  readonly positionNotional?: Maybe<Scalars["Float"]["output"]>
  readonly positionSize?: Maybe<Scalars["Float"]["output"]>
  readonly realizedPnl?: Maybe<Scalars["Float"]["output"]>
  readonly traderAddress?: Maybe<Scalars["String"]["output"]>
  readonly transactionFee?: Maybe<Coin>
  readonly unrealizedPnlAfter?: Maybe<Scalars["Float"]["output"]>
}

export type PositionChangesFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly pairEq?: InputMaybe<Scalars["String"]["input"]>
  readonly traderAddressEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum PositionChangesOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type Positions = {
  readonly __typename?: "Positions"
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly id?: Maybe<Scalars["Int"]["output"]>
  readonly latestCumulativePremiumFraction?: Maybe<Scalars["Float"]["output"]>
  readonly margin?: Maybe<Scalars["Float"]["output"]>
  readonly marginRatioIndex?: Maybe<Scalars["Float"]["output"]>
  readonly marginRatioMark?: Maybe<Scalars["Float"]["output"]>
  readonly openBlock?: Maybe<Scalars["Long"]["output"]>
  readonly openNotional?: Maybe<Scalars["Float"]["output"]>
  readonly pair?: Maybe<Scalars["String"]["output"]>
  readonly positionNotional?: Maybe<Scalars["Float"]["output"]>
  readonly size?: Maybe<Scalars["Float"]["output"]>
  readonly trader?: Maybe<Scalars["String"]["output"]>
  readonly unrealizedPnl?: Maybe<Scalars["Float"]["output"]>
}

export type PositionsFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly idEq?: InputMaybe<Scalars["Int"]["input"]>
  readonly idGt?: InputMaybe<Scalars["Int"]["input"]>
  readonly idGte?: InputMaybe<Scalars["Int"]["input"]>
  readonly idLt?: InputMaybe<Scalars["Int"]["input"]>
  readonly idLte?: InputMaybe<Scalars["Int"]["input"]>
  readonly pairEq?: InputMaybe<Scalars["String"]["input"]>
  readonly traderEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum PositionsOrder {
  Block = "block",
  BlockTs = "block_ts",
  Id = "id",
}

/** Extensible query class to add custom resolvers and endpoints not defined in the schema */
export type QueryExt = {
  readonly __typename?: "QueryExt"
  readonly ammPoolExits?: Maybe<ReadonlyArray<Maybe<AmmPoolExits>>>
  readonly ammPoolJoins?: Maybe<ReadonlyArray<Maybe<AmmPoolJoins>>>
  readonly ammPools?: Maybe<ReadonlyArray<Maybe<AmmPools>>>
  readonly ammSwaps?: Maybe<ReadonlyArray<Maybe<AmmSwaps>>>
  readonly ammTotalLiquidity?: Maybe<ReadonlyArray<Maybe<AmmTotalLiquidity>>>
  readonly balances?: Maybe<ReadonlyArray<Maybe<Balances>>>
  readonly blocks?: Maybe<ReadonlyArray<Maybe<Blocks>>>
  readonly delegateEvents?: Maybe<ReadonlyArray<Maybe<DelegateEvents>>>
  readonly delegations?: Maybe<ReadonlyArray<Maybe<Delegations>>>
  readonly eventGovProposalDeposit?: Maybe<
    ReadonlyArray<Maybe<EventGovProposalDeposit>>
  >
  readonly eventGovProposalVote?: Maybe<
    ReadonlyArray<Maybe<EventGovProposalVote>>
  >
  readonly eventGovSubmitProposal?: Maybe<
    ReadonlyArray<Maybe<EventGovSubmitProposal>>
  >
  readonly eventOracleAggregatePrevote?: Maybe<
    ReadonlyArray<Maybe<EventOracleAggregatePrevote>>
  >
  readonly eventOracleAggregateVote?: Maybe<
    ReadonlyArray<Maybe<EventOracleAggregateVote>>
  >
  readonly eventPerpPositionChanged?: Maybe<
    ReadonlyArray<Maybe<EventPerpPositionChanged>>
  >
  readonly eventPerpPositionLiquidated?: Maybe<
    ReadonlyArray<Maybe<EventPerpPositionLiquidated>>
  >
  readonly eventStakingDelegate?: Maybe<
    ReadonlyArray<Maybe<EventStakingDelegate>>
  >
  readonly eventStakingRedelegate?: Maybe<
    ReadonlyArray<Maybe<EventStakingRedelegate>>
  >
  readonly eventStakingUnbond?: Maybe<ReadonlyArray<Maybe<EventStakingUnbond>>>
  readonly eventWasmExecute?: Maybe<ReadonlyArray<Maybe<EventWasmExecute>>>
  readonly eventWasmInstantiate?: Maybe<
    ReadonlyArray<Maybe<EventWasmInstantiate>>
  >
  readonly eventWasmStoreCode?: Maybe<ReadonlyArray<Maybe<EventWasmStoreCode>>>
  readonly fundingRates?: Maybe<ReadonlyArray<Maybe<FundingRates>>>
  readonly liquidations?: Maybe<ReadonlyArray<Maybe<Liquidations>>>
  readonly markPriceCandles?: Maybe<ReadonlyArray<Maybe<MarkPriceCandles>>>
  readonly markPrices?: Maybe<ReadonlyArray<Maybe<MarkPrices>>>
  readonly oraclePrices?: Maybe<ReadonlyArray<Maybe<OraclePrices>>>
  readonly perpLeaderboard?: Maybe<ReadonlyArray<Maybe<PerpLeaderboard>>>
  readonly positionChanges?: Maybe<ReadonlyArray<Maybe<PositionChanges>>>
  readonly positions?: Maybe<ReadonlyArray<Maybe<Positions>>>
  readonly redelegationEvents?: Maybe<ReadonlyArray<Maybe<RedelegationEvents>>>
  readonly stablecoinCirculatingSupply?: Maybe<
    ReadonlyArray<Maybe<StablecoinCirculatingSupply>>
  >
  readonly stakingPool?: Maybe<ReadonlyArray<Maybe<StakingPool>>>
  readonly statsFees?: Maybe<ReadonlyArray<Maybe<StatsFees>>>
  readonly statsNewUsers?: Maybe<ReadonlyArray<Maybe<StatsNewUsers>>>
  readonly statsOpenInterest?: Maybe<ReadonlyArray<Maybe<StatsOpenInterest>>>
  readonly statsPerpPnl?: Maybe<ReadonlyArray<Maybe<StatsPerpPnl>>>
  readonly statsTotals?: Maybe<ReadonlyArray<Maybe<StatsTotals>>>
  readonly statsTvl?: Maybe<ReadonlyArray<Maybe<StatsTvl>>>
  readonly statsTx?: Maybe<ReadonlyArray<Maybe<StatsTx>>>
  readonly statsUniqueUsers?: Maybe<ReadonlyArray<Maybe<StatsUniqueUsers>>>
  readonly statsUsers?: Maybe<ReadonlyArray<Maybe<StatsUsers>>>
  readonly statsVolume?: Maybe<ReadonlyArray<Maybe<StatsVolume>>>
  readonly transfers?: Maybe<ReadonlyArray<Maybe<Transfers>>>
  readonly unbondingEvents?: Maybe<ReadonlyArray<Maybe<UnbondingEvents>>>
  readonly unbondings?: Maybe<ReadonlyArray<Maybe<Unbondings>>>
  readonly userJoins?: Maybe<ReadonlyArray<Maybe<UserJoins>>>
  readonly validators?: Maybe<ReadonlyArray<Maybe<Validators>>>
  readonly vpoolConfigs?: Maybe<ReadonlyArray<Maybe<VpoolConfigs>>>
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
  readonly __typename?: "RedelegationEvents"
  readonly amount?: Maybe<Scalars["Float"]["output"]>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly delegator?: Maybe<Scalars["String"]["output"]>
  readonly destinationValidator?: Maybe<Scalars["String"]["output"]>
  readonly sourceValidator?: Maybe<Scalars["String"]["output"]>
}

export type RedelegationEventsFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly delegatorEq?: InputMaybe<Scalars["String"]["input"]>
  readonly destinationValidatorEq?: InputMaybe<Scalars["String"]["input"]>
  readonly sourceValidatorEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum RedelegationEventsOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type StablecoinCirculatingSupply = {
  readonly __typename?: "StablecoinCirculatingSupply"
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly supply?: Maybe<ReadonlyArray<Maybe<Coin>>>
}

export type StablecoinCirculatingSupplyFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StablecoinCirculatingSupplyOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type StakingPool = {
  readonly __typename?: "StakingPool"
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly bondedTokens?: Maybe<Scalars["Long"]["output"]>
  readonly notBondedTokens?: Maybe<Scalars["Long"]["output"]>
}

export type StakingPoolFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StakingPoolOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type StatsFees = {
  readonly __typename?: "StatsFees"
  readonly feesLiquidations?: Maybe<Scalars["Float"]["output"]>
  readonly feesLiquidationsCumulative?: Maybe<Scalars["Float"]["output"]>
  readonly feesPerp?: Maybe<Scalars["Float"]["output"]>
  readonly feesPerpCumulative?: Maybe<Scalars["Float"]["output"]>
  readonly feesSwap?: Maybe<Scalars["Float"]["output"]>
  readonly feesSwapCumulative?: Maybe<Scalars["Float"]["output"]>
  readonly feesTotal?: Maybe<Scalars["Float"]["output"]>
  readonly feesTotalCumulative?: Maybe<Scalars["Float"]["output"]>
  readonly period?: Maybe<Scalars["Long"]["output"]>
  readonly periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
}

export type StatsFeesFilter = {
  readonly periodEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StatsFeesOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type StatsNewUsers = {
  readonly __typename?: "StatsNewUsers"
  readonly newUsersDelegate?: Maybe<Scalars["Long"]["output"]>
  readonly newUsersLp?: Maybe<Scalars["Long"]["output"]>
  readonly newUsersLpExit?: Maybe<Scalars["Long"]["output"]>
  readonly newUsersPerp?: Maybe<Scalars["Long"]["output"]>
  readonly newUsersRedelegate?: Maybe<Scalars["Long"]["output"]>
  readonly newUsersSwap?: Maybe<Scalars["Long"]["output"]>
  readonly newUsersTotal?: Maybe<Scalars["Long"]["output"]>
  readonly newUsersTransfer?: Maybe<Scalars["Long"]["output"]>
  readonly newUsersUnbonding?: Maybe<Scalars["Long"]["output"]>
  readonly period?: Maybe<Scalars["Long"]["output"]>
  readonly periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
}

export type StatsNewUsersFilter = {
  readonly periodEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StatsNewUsersOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type StatsOpenInterest = {
  readonly __typename?: "StatsOpenInterest"
  readonly openInterestLong?: Maybe<Scalars["Float"]["output"]>
  readonly openInterestShort?: Maybe<Scalars["Float"]["output"]>
  readonly openInterestTotal?: Maybe<Scalars["Float"]["output"]>
  readonly period?: Maybe<Scalars["Long"]["output"]>
  readonly periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
}

export type StatsOpenInterestFilter = {
  readonly periodEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StatsOpenInterestOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type StatsPerpPnl = {
  readonly __typename?: "StatsPerpPnl"
  readonly loss?: Maybe<Scalars["Float"]["output"]>
  readonly lossCumulative?: Maybe<Scalars["Float"]["output"]>
  readonly netPnl?: Maybe<Scalars["Float"]["output"]>
  readonly netPnlCumulative?: Maybe<Scalars["Float"]["output"]>
  readonly period?: Maybe<Scalars["Long"]["output"]>
  readonly periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly profit?: Maybe<Scalars["Float"]["output"]>
  readonly profitCumulative?: Maybe<Scalars["Float"]["output"]>
}

export type StatsPerpPnlFilter = {
  readonly periodEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StatsPerpPnlOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type StatsTotals = {
  readonly __typename?: "StatsTotals"
  readonly period?: Maybe<Scalars["Long"]["output"]>
  readonly periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly totalFeesLiquidations?: Maybe<Scalars["Float"]["output"]>
  readonly totalFeesPerp?: Maybe<Scalars["Float"]["output"]>
  readonly totalOpenInterest?: Maybe<Scalars["Float"]["output"]>
  readonly totalPerp?: Maybe<Scalars["Float"]["output"]>
  readonly totalSwap?: Maybe<Scalars["Float"]["output"]>
  readonly totalTvl?: Maybe<Scalars["Float"]["output"]>
}

export type StatsTotalsFilter = {
  readonly periodEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StatsTotalsOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type StatsTvl = {
  readonly __typename?: "StatsTvl"
  readonly period?: Maybe<Scalars["Long"]["output"]>
  readonly periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly tvlPerp?: Maybe<Scalars["Float"]["output"]>
  readonly tvlStablecoin?: Maybe<Scalars["Float"]["output"]>
  readonly tvlStaking?: Maybe<Scalars["Float"]["output"]>
  readonly tvlSwap?: Maybe<Scalars["Float"]["output"]>
  readonly tvlTotal?: Maybe<Scalars["Float"]["output"]>
}

export type StatsTvlFilter = {
  readonly periodEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StatsTvlOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type StatsTx = {
  readonly __typename?: "StatsTx"
  readonly numAmmExit?: Maybe<Scalars["Float"]["output"]>
  readonly numAmmJoin?: Maybe<Scalars["Float"]["output"]>
  readonly numAmmSwap?: Maybe<Scalars["Float"]["output"]>
  readonly numDelegates?: Maybe<Scalars["Float"]["output"]>
  readonly numPositionChanged?: Maybe<Scalars["Float"]["output"]>
  readonly numRedelegates?: Maybe<Scalars["Float"]["output"]>
  readonly numTransfers?: Maybe<Scalars["Float"]["output"]>
  readonly numUnbonds?: Maybe<Scalars["Float"]["output"]>
  readonly period?: Maybe<Scalars["Long"]["output"]>
  readonly periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly total?: Maybe<Scalars["Float"]["output"]>
}

export type StatsTxFilter = {
  readonly periodEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StatsTxOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type StatsUniqueUsers = {
  readonly __typename?: "StatsUniqueUsers"
  readonly period?: Maybe<Scalars["Long"]["output"]>
  readonly periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly uniqueUsersDelegate?: Maybe<Scalars["Long"]["output"]>
  readonly uniqueUsersLp?: Maybe<Scalars["Long"]["output"]>
  readonly uniqueUsersLpExit?: Maybe<Scalars["Long"]["output"]>
  readonly uniqueUsersPerp?: Maybe<Scalars["Long"]["output"]>
  readonly uniqueUsersRedelegate?: Maybe<Scalars["Long"]["output"]>
  readonly uniqueUsersSwap?: Maybe<Scalars["Long"]["output"]>
  readonly uniqueUsersTotal?: Maybe<Scalars["Long"]["output"]>
  readonly uniqueUsersTransfer?: Maybe<Scalars["Long"]["output"]>
  readonly uniqueUsersUnbonding?: Maybe<Scalars["Long"]["output"]>
}

export type StatsUniqueUsersFilter = {
  readonly periodEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StatsUniqueUsersOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type StatsUsers = {
  readonly __typename?: "StatsUsers"
  readonly newUsersLp?: Maybe<Scalars["Long"]["output"]>
  readonly newUsersLpCumulative?: Maybe<Scalars["Long"]["output"]>
  readonly newUsersPerp?: Maybe<Scalars["Long"]["output"]>
  readonly newUsersPerpCumulative?: Maybe<Scalars["Long"]["output"]>
  readonly newUsersSwap?: Maybe<Scalars["Long"]["output"]>
  readonly newUsersSwapCumulative?: Maybe<Scalars["Long"]["output"]>
  readonly newUsersTotal?: Maybe<Scalars["Long"]["output"]>
  readonly newUsersTotalCumulative?: Maybe<Scalars["Long"]["output"]>
  readonly period?: Maybe<Scalars["Long"]["output"]>
  readonly periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly uniqueUsersLp?: Maybe<Scalars["Long"]["output"]>
  readonly uniqueUsersPerp?: Maybe<Scalars["Long"]["output"]>
  readonly uniqueUsersSwap?: Maybe<Scalars["Long"]["output"]>
  readonly uniqueUsersTotal?: Maybe<Scalars["Long"]["output"]>
  readonly userActionsLp?: Maybe<Scalars["Long"]["output"]>
  readonly userActionsPerp?: Maybe<Scalars["Long"]["output"]>
  readonly userActionsSwap?: Maybe<Scalars["Long"]["output"]>
  readonly userActionsTotal?: Maybe<Scalars["Long"]["output"]>
}

export type StatsUsersFilter = {
  readonly periodEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StatsUsersOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type StatsVolume = {
  readonly __typename?: "StatsVolume"
  readonly period?: Maybe<Scalars["Long"]["output"]>
  readonly periodStartTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly volumePerp?: Maybe<Scalars["Float"]["output"]>
  readonly volumePerpCumulative?: Maybe<Scalars["Float"]["output"]>
  readonly volumeSwap?: Maybe<Scalars["Float"]["output"]>
  readonly volumeSwapCumulative?: Maybe<Scalars["Float"]["output"]>
  readonly volumeTotal?: Maybe<Scalars["Float"]["output"]>
  readonly volumeTotalCumulative?: Maybe<Scalars["Float"]["output"]>
}

export type StatsVolumeFilter = {
  readonly periodEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly periodStartTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly periodStartTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum StatsVolumeOrder {
  Period = "period",
  PeriodStartTs = "period_start_ts",
}

export type Transfers = {
  readonly __typename?: "Transfers"
  readonly amount?: Maybe<ReadonlyArray<Maybe<Coin>>>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly recipient?: Maybe<Scalars["String"]["output"]>
  readonly sender?: Maybe<Scalars["String"]["output"]>
}

export type TransfersFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly recipientEq?: InputMaybe<Scalars["String"]["input"]>
  readonly senderEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum TransfersOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type UnbondingEvents = {
  readonly __typename?: "UnbondingEvents"
  readonly amount?: Maybe<Scalars["Float"]["output"]>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly delegator?: Maybe<Scalars["String"]["output"]>
  readonly validator?: Maybe<Scalars["String"]["output"]>
}

export type UnbondingEventsFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly delegatorEq?: InputMaybe<Scalars["String"]["input"]>
  readonly validatorEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum UnbondingEventsOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type Unbondings = {
  readonly __typename?: "Unbondings"
  readonly balance?: Maybe<Scalars["Long"]["output"]>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly completionTime?: Maybe<Scalars["DateTime"]["output"]>
  readonly creationHeight?: Maybe<Scalars["Long"]["output"]>
  readonly delegatorAddress?: Maybe<Scalars["String"]["output"]>
  readonly initialBalance?: Maybe<Scalars["Long"]["output"]>
  readonly validatorAddress?: Maybe<Scalars["String"]["output"]>
}

export type UnbondingsFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly delegatorAddressEq?: InputMaybe<Scalars["String"]["input"]>
  readonly validatorAddressEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum UnbondingsOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type UserJoins = {
  readonly __typename?: "UserJoins"
  readonly action?: Maybe<Scalars["String"]["output"]>
  readonly address?: Maybe<Scalars["String"]["output"]>
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
}

export type UserJoinsFilter = {
  readonly actionEq?: InputMaybe<Scalars["String"]["input"]>
  readonly addressEq?: InputMaybe<Scalars["String"]["input"]>
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
}

export enum UserJoinsOrder {
  Block = "block",
  BlockTs = "block_ts",
}

export type Validators = {
  readonly __typename?: "Validators"
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly commissionRates?: Maybe<Scalars["String"]["output"]>
  readonly commissionUpdateTime?: Maybe<Scalars["DateTime"]["output"]>
  readonly delegatorShares?: Maybe<Scalars["Float"]["output"]>
  readonly description?: Maybe<Scalars["String"]["output"]>
  readonly jailed?: Maybe<Scalars["Boolean"]["output"]>
  readonly operatorAddress?: Maybe<Scalars["String"]["output"]>
  readonly statusBonded?: Maybe<Scalars["Boolean"]["output"]>
  readonly tokens?: Maybe<Scalars["Long"]["output"]>
  readonly unbondingHeight?: Maybe<Scalars["Long"]["output"]>
  readonly unbondingTime?: Maybe<Scalars["DateTime"]["output"]>
}

export type ValidatorsFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly jailedEq?: InputMaybe<Scalars["Boolean"]["input"]>
  readonly operatorAddressEq?: InputMaybe<Scalars["String"]["input"]>
  readonly statusBondedEq?: InputMaybe<Scalars["Boolean"]["input"]>
  readonly tokensEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly tokensGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly tokensGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly tokensLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly tokensLte?: InputMaybe<Scalars["Long"]["input"]>
}

export enum ValidatorsOrder {
  Block = "block",
  BlockTs = "block_ts",
  Jailed = "jailed",
  StatusBonded = "status_bonded",
  Tokens = "tokens",
}

export type VpoolConfigs = {
  readonly __typename?: "VpoolConfigs"
  readonly block?: Maybe<Scalars["Long"]["output"]>
  readonly blockTs?: Maybe<Scalars["DateTime"]["output"]>
  readonly fluctuationLimitRatio?: Maybe<Scalars["Float"]["output"]>
  readonly maintenanceMarginRatio?: Maybe<Scalars["Float"]["output"]>
  readonly maxLeverage?: Maybe<Scalars["Float"]["output"]>
  readonly maxOracleSpreadRatio?: Maybe<Scalars["Float"]["output"]>
  readonly pair?: Maybe<Scalars["String"]["output"]>
  readonly tradeLimitRatio?: Maybe<Scalars["Float"]["output"]>
}

export type VpoolConfigsFilter = {
  readonly blockEq?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockGte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLt?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockLte?: InputMaybe<Scalars["Long"]["input"]>
  readonly blockTsEq?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsGte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLt?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly blockTsLte?: InputMaybe<Scalars["DateTime"]["input"]>
  readonly pairEq?: InputMaybe<Scalars["String"]["input"]>
}

export enum VpoolConfigsOrder {
  Block = "block",
  BlockTs = "block_ts",
}
