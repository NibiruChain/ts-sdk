import {
  Block,
  Delegation,
  DistributionCommission,
  GovDeposit,
  GovProposal,
  GovVote,
  Governance,
  MarkPriceCandle,
  OracleEntry,
  OraclePrice,
  PerpLeaderboard,
  PerpMarket,
  PerpPosition,
  PerpPositionChange,
  Redelegation,
  SpotLpPosition,
  SpotPool,
  SpotPoolSwap,
  StatsFees,
  StatsPerpOpenInterest,
  StatsPerpPnl,
  StatsTotals,
  StatsTvl,
  StatsUsers,
  StatsVolume,
  Token,
  Unbonding,
  User,
  Validator,
  ValidatorStatus,
} from "./gql/generated"

export const defaultToken: Token = {
  denom: "",
  amount: "",
}

export const defaultBlock: Block = {
  block: 0,
  block_duration: 0,
  block_ts: 0,
  num_txs: 0,
}

export const defaultValidator: Validator = {
  commission_update_time: "",
  commission_rates: {
    max_change_rate: 0,
    max_rate: 0,
    rate: 0,
  },
  delegator_shares: 0,
  description: {
    details: "",
    identity: "",
    moniker: "",
    security_contact: "",
    website: "",
  },
  jailed: false,
  operator_address: "",
  min_self_delegation: 0,
  status: ValidatorStatus.Bonded,
  tokens: 0,
  unbonding_block: defaultBlock,
  unbonding_time: "",
}

export const defaultActor: User = {
  address: "",
  balances: [defaultToken],
  created_block: defaultBlock,
}

export const defaultUser = defaultActor

export const defaultPerpMarket: PerpMarket = {
  base_reserve: 0,
  ecosystem_fund_fee_ratio: 0,
  max_funding_rate: 0,
  enabled: true,
  exchange_fee_ratio: 0,
  funding_rate_epoch_id: "",
  index_price_twap: 0,
  is_deleted: false,
  latest_cumulative_premium_fraction: 0,
  liquidation_fee_ratio: 0,
  maintenance_margin_ratio: 0,
  mark_price: 0,
  mark_price_twap: 0,
  max_leverage: 0,
  pair: "",
  partial_liquidation_ratio: 0,
  prepaid_bad_debt: defaultToken,
  price_multiplier: 0,
  quote_reserve: 0,
  sqrt_depth: 0,
  total_long: 0,
  total_short: 0,
  twap_lookback_window: "",
}

export const defaultPerpPosition: PerpPosition = {
  bad_debt: 0,
  last_updated_block: defaultBlock,
  latest_cumulative_premium_fraction: 0,
  margin: 0,
  margin_ratio: 0,
  open_notional: 0,
  pair: "",
  liquidation_price: 0,
  position_notional: 0,
  size: 0,
  trader_address: "",
  unrealized_funding_payment: 0,
  unrealized_pnl: 0,
}

export const defaultPool: SpotPool = {
  amplification: 0,
  created_block: defaultBlock,
  exit_fee: 0,
  swap_fee: 0,
  pool_id: 0,
  tokens: [defaultToken],
  pool_type: "",
  total_shares: defaultToken,
  total_weight: 0,
  weights: [defaultToken],
}

export const defaultSpotPool = {
  block: defaultBlock,
  pool: defaultPool,
  pool_shares: defaultToken,
  user: defaultUser,
}

export const defaultGovProposal: GovProposal = {
  depositEndTime: "",
  finalTallyResultAbstain: 0,
  finalTallyResultNo: 0,
  finalTallyResultNoWithVeto: 0,
  finalTallyResultYes: 0,
  id: 0,
  metadata: "",
  proposer: defaultUser,
  status: "",
  submitTime: "",
  summary: "",
  title: "",
  totalDeposit: [defaultToken],
  votingEndTime: "",
  votingStartTime: "",
}

export const defaultGovDeposit: GovDeposit = {
  amount: [defaultToken],
  block: defaultBlock,
  proposal: defaultGovProposal,
  sender: defaultUser,
}

export const defaultGovVote: GovVote = {
  block: defaultBlock,
  option: "",
  proposal: defaultGovProposal,
  sender: defaultUser,
}

export const defaultMarkPriceCandles: MarkPriceCandle = {
  close: 0,
  high: 0,
  low: 0,
  open: 0,
  volume: 0,
  pair: "",
  period: 0,
  periodStartTs: "",
}

export const defaultPerpPositionChanges: PerpPositionChange = {
  badDebt: defaultToken,
  block: defaultBlock,
  changeReason: "",
  eventSeqNo: 0,
  exchangedNotional: 0,
  exchangedSize: 0,
  fundingPayment: 0,
  latestCumulativePremiumFraction: 0,
  margin: 0,
  marginToUser: 0,
  openNotional: 0,
  pair: "",
  positionNotional: 0,
  realizedPnl: 0,
  size: 0,
  traderAddress: "",
  transactionFee: defaultToken,
  txSeqNo: 0,
}

export const defaultPerpLeaderboard: PerpLeaderboard = {
  avg_pct_pnl_rank: 0,
  avg_pct_pnl: 0,
  input_margin: 0,
  raw_pnl: 0,
  raw_pnl_with_unrealized: 0,
  trader_address: "",
}

export const defaultGovernance: Governance = {
  govDeposits: [defaultGovDeposit],
  govProposals: [defaultGovProposal],
  govVotes: [defaultGovVote],
}

export const defaultDistributionCommission: DistributionCommission = {
  commission: [defaultToken],
  validator: defaultValidator,
}

export const defaultDelegations: Delegation = {
  amount: 0,
  delegator: defaultUser,
  validator: defaultValidator,
}

export const defaultRedelegations: Redelegation = {
  amount: 0,
  delegator: defaultUser,
  source_validator: defaultValidator,
  destination_validator: defaultValidator,
  completion_time: "",
  creation_block: defaultBlock,
}

export const defaultSpotLpPosition: SpotLpPosition = {
  created_block: defaultBlock,
  pool: defaultPool,
  pool_shares: defaultToken,
  user: defaultUser,
}

export const defaultSpotPoolSwap: SpotPoolSwap = {
  block: defaultBlock,
  pool: defaultPool,
  token_in: defaultToken,
  token_out: defaultToken,
  user: defaultUser,
}

export const defaultStatsFees: StatsFees = {
  feesLiquidations: 0,
  feesLiquidationsCumulative: 0,
  feesPerp: 0,
  feesPerpCumulative: 0,
  feesSwap: 0,
  feesSwapCumulative: 0,
  feesTotal: 0,
  feesTotalCumulative: 0,
  period: 0,
  periodStartTs: "",
}

export const defaultPerpOpenInterest: StatsPerpOpenInterest = {
  openInterestLong: 0,
  openInterestShort: 0,
  openInterestTotal: 0,
  period: 0,
  periodStartTs: "",
}

export const defaultPerpPnl: StatsPerpPnl = {
  loss: 0,
  lossCumulative: 0,
  netPnl: 0,
  netPnlCumulative: 0,
  period: 0,
  periodStartTs: "",
  profit: 0,
  profitCumulative: 0,
}

export const defaultTotals: StatsTotals = {
  period: 0,
  periodStartTs: "",
  totalPerp: 0,
  totalFeesPerp: 0,
  totalFeesLiquidations: 0,
  totalOpenInterest: 0,
  totalSwap: 0,
  totalTvl: 0,
}

export const defaultTvl: StatsTvl = {
  period: 0,
  periodStartTs: "",
  tvlPerp: 0,
  tvlStablecoin: 0,
  tvlStaking: 0,
  tvlSwap: 0,
  tvlTotal: 0,
}

export const defaultUsers: StatsUsers = {
  newUsersLp: 0,
  newUsersLpCumulative: 0,
  newUsersPerp: 0,
  newUsersPerpCumulative: 0,
  newUsersSwap: 0,
  newUsersSwapCumulative: 0,
  newUsersTotal: 0,
  newUsersTotalCumulative: 0,
  period: 0,
  periodStartTs: "",
  userActionsPerp: 0,
  uniqueUsersLp: 0,
  uniqueUsersPerp: 0,
  uniqueUsersSwap: 0,
  uniqueUsersTotal: 0,
  userActionsLp: 0,
  userActionsSwap: 0,
  userActionsTotal: 0,
}

export const defaultVolume: StatsVolume = {
  volumePerp: 0,
  volumePerpCumulative: 0,
  volumeSwap: 0,
  volumeSwapCumulative: 0,
  volumeTotal: 0,
  volumeTotalCumulative: 0,
  period: 0,
  periodStartTs: "",
}

export const defaultUnbondings: Unbonding = {
  amount: 0,
  completion_time: "",
  creation_block: defaultBlock,
  delegator: defaultUser,
  validator: defaultValidator,
}

export const defaultOraclePrice: OraclePrice = {
  block: defaultBlock,
  eventSeqNo: 0,
  pair: "",
  price: 0,
  txSeqNo: 0,
}

export const defaultOracleEntry: OracleEntry = {
  numVotes: 0,
  validator: defaultValidator,
}
