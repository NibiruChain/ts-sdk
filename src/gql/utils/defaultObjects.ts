import {
  GQLBlock,
  GQLDelegation,
  GQLDistributionCommission,
  GQLFeatureFlags,
  GQLGovDeposit,
  GQLGovProposal,
  GQLGovVote,
  GQLGovernance,
  GQLIbc,
  GQLIbcChannel,
  GQLIbcChannelsResponse,
  GQLIbcTransfer,
  GQLInflationDistribution,
  GQLInflationInfo,
  GQLInflationRewards,
  GQLMarkPriceCandle,
  GQLOracleEntry,
  GQLOraclePrice,
  GQLPerpLeaderboard,
  GQLPerpMarket,
  GQLPerpPosition,
  GQLPerpPositionChange,
  GQLProxies,
  GQLRedelegation,
  GQLSpotLpPosition,
  GQLSpotPool,
  GQLSpotPoolSwap,
  GQLStakingActionType,
  GQLStakingHistoryItem,
  GQLToken,
  GQLUnbonding,
  GQLUser,
  GQLUserContract,
  GQLValidator,
  GQLValidatorStatus,
} from "."

export const defaultToken: GQLToken = {
  denom: "",
  amount: "",
}

export const defaultBlock: GQLBlock = {
  block: 0,
  block_duration: 0,
  block_ts: 0,
  num_txs: 0,
}

export const defaultValidator: GQLValidator = {
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
  creation_block: defaultBlock,
  self_delegation: 0,
  jailed: false,
  operator_address: "",
  min_self_delegation: 0,
  status: "BONDED" as GQLValidatorStatus.GQLUnbonded,
  tokens: 0,
  unbonding_block: defaultBlock,
  unbonding_time: "",
}

export const defaultActor: GQLUser = {
  address: "",
  balances: [defaultToken],
  created_block: defaultBlock,
}

export const defaultUser = defaultActor

export const defaultPerpMarket: GQLPerpMarket = {
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

export const defaultPerpPosition: GQLPerpPosition = {
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

export const defaultPool: GQLSpotPool = {
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

export const defaultGovProposal: GQLGovProposal = {
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

export const defaultGovDeposit: GQLGovDeposit = {
  amount: [defaultToken],
  block: defaultBlock,
  proposal: defaultGovProposal,
  sender: defaultUser,
}

export const defaultGovVote: GQLGovVote = {
  block: defaultBlock,
  option: "",
  proposal: defaultGovProposal,
  sender: defaultUser,
}

export const defaultMarkPriceCandles: GQLMarkPriceCandle = {
  close: 0,
  high: 0,
  low: 0,
  open: 0,
  volume: 0,
  volumeNotional: 0,
  pair: "",
  period: 0,
  periodInterval: "",
  periodStartTs: "",
  indexPriceTwapClose: 0,
}

export const defaultPerpPositionChanges: GQLPerpPositionChange = {
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

export const defaultPerpLeaderboard: GQLPerpLeaderboard = {
  avg_pct_pnl_rank: 0,
  avg_pct_pnl: 0,
  input_margin: 0,
  raw_pnl: 0,
  raw_pnl_with_unrealized: 0,
  trader_address: "",
}

export const defaultGovernance: GQLGovernance = {
  govDeposits: [defaultGovDeposit],
  govProposals: [defaultGovProposal],
  govVotes: [defaultGovVote],
}

export const defaultDistributionCommission: GQLDistributionCommission = {
  commission: [defaultToken],
  validator: defaultValidator,
}

export const defaultDelegations: GQLDelegation = {
  amount: 0,
  delegator: defaultUser,
  validator: defaultValidator,
}

export const defaultRedelegations: GQLRedelegation = {
  amount: 0,
  delegator: defaultUser,
  source_validator: defaultValidator,
  destination_validator: defaultValidator,
  completion_time: "",
  creation_block: defaultBlock,
}

export const defaultSpotLpPosition: GQLSpotLpPosition = {
  created_block: defaultBlock,
  pool: defaultPool,
  pool_shares: defaultToken,
  user: defaultUser,
}

export const defaultSpotPoolSwap: GQLSpotPoolSwap = {
  block: defaultBlock,
  pool: defaultPool,
  token_in: defaultToken,
  token_out: defaultToken,
  user: defaultUser,
}

export const defaultUnbondings: GQLUnbonding = {
  amount: 0,
  completion_time: "",
  creation_block: defaultBlock,
  delegator: defaultUser,
  validator: defaultValidator,
}

export const defaultOraclePrice: GQLOraclePrice = {
  block: defaultBlock,
  pair: "",
  eventSeqNo: 0,
  txSeqNo: 0,
  price: 0,
}

export const defaultOracleEntry: GQLOracleEntry = {
  numVotes: 0,
  validator: defaultValidator,
}

export const defaultIbcChannel: GQLIbcChannel = {
  chain_id: "",
  chain_logo: "",
  chain_name: "",
  channel_id: "",
  counterparty_channel_id: "",
  revision_height: 0,
}

export const defaultIbcTransfer: GQLIbcTransfer = {
  amount: 0,
  memo: "",
  block: defaultBlock,
  denom: "",
  sender: "",
  receiver: "",
}

export const defaultIbc: GQLIbc = {
  ibcChannels: {
    channels: [defaultIbcChannel],
    revision_height: 0,
  },
  ibcTransfers: [defaultIbcTransfer],
}

export const defaultIbcChannelsResponse: GQLIbcChannelsResponse = {
  channels: [defaultIbcChannel],
  revision_height: 0,
}

export const defaultUserContract: GQLUserContract = {
  user: defaultUser,
  contractAddress: "",
  contractType: "",
}

export const defaultInflationDistribution: GQLInflationDistribution = {
  block: defaultBlock,
  communityPool: 0,
  eventSeqNo: 0,
  stakingRewards: 0,
  strategicReserve: 0,
  txSeqNo: 0,
}
export const defaultInflationReward: GQLInflationRewards = {
  annualReward: 0,
  totalStaked: 0,
}

export const defaultInflationInfo: GQLInflationInfo = {
  amount: 0,
  block: defaultBlock,
  epochNumber: 0,
  epochProvisions: 0,
}

export const defaultFeatureFlags: GQLFeatureFlags = {
  gov: true,
  oracle: true,
  perp: false,
  spot: false,
  staking: true,
  wasm: true,
}

export const defaultProxy: GQLProxies = {
  bybit: {
    ask1Price: "",
    ask1Size: "",
    bid1Price: "",
    bid1Size: "",
    highPrice24h: "",
    lastPrice: "",
    lowPrice24h: "",
    prevPrice24h: "",
    price24hPcnt: "",
    symbol: "",
    turnover24h: "",
    volume24h: "",
  },
}

export const defaultStakingHistoryItem: GQLStakingHistoryItem = {
  action: "cancel" as GQLStakingActionType.GQLCancel,
  amount: 0,
  block: defaultBlock,
  completion_time: "",
  delegator: defaultUser,
  destination_validator: defaultValidator,
  validator: defaultValidator,
}
