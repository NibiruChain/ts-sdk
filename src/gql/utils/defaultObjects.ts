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
  GQLOracleEntry,
  GQLOraclePrice,
  GQLProxies,
  GQLRedelegation,
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

export const defaultGovernance: GQLGovernance = {
  govDeposits: [defaultGovDeposit],
  govProposals: [defaultGovProposal],
  govVotes: [defaultGovVote],
}

export const defaultDistributionCommission: GQLDistributionCommission = {
  commission: defaultToken,
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
