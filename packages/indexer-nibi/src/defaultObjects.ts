import { ValidatorStatus } from "./gql/generated"

export const defaultToken = {
  denom: "",
  amount: "",
}

export const defaultBlock = {
  block: 0,
  block_duration: 0,
  block_ts: 0,
  num_txs: 0,
}

export const defaultValidator = {
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

export const defaultActor = {
  address: "",
  balances: [defaultToken],
  created_block: defaultBlock,
}

export const defaultDelegator = defaultActor

export const defaultUser = defaultActor

export const defaultPerpMarket = {
  base_reserve: 0,
  ecosystem_fund_fee_ratio: 0,
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

export const defaultPerpPosition = {
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

export const defaultPool = {
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

export const defaultGovProposal = {
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

export const defaultGovDeposit = {
  amount: [defaultToken],
  block: defaultBlock,
  proposal: defaultGovProposal,
  sender: defaultUser,
}

export const defaultGovVote = {
  block: defaultBlock,
  option: "",
  proposal: defaultGovProposal,
  sender: defaultUser,
}
