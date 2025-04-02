export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Time: { input: string; output: string; }
};

export type GQLBalance = {
  readonly __typename?: 'Balance';
  readonly amount: Scalars['String']['output'];
  readonly token_info: GQLTokenInfo;
};

export type GQLBlock = {
  readonly __typename?: 'Block';
  readonly block: Scalars['Int']['output'];
  readonly block_duration: Scalars['Float']['output'];
  readonly block_ts: Scalars['Int']['output'];
  readonly num_txs: Scalars['Int']['output'];
};

export type GQLBybitResponse = {
  readonly __typename?: 'BybitResponse';
  readonly ask1Price: Scalars['String']['output'];
  readonly ask1Size: Scalars['String']['output'];
  readonly bid1Price: Scalars['String']['output'];
  readonly bid1Size: Scalars['String']['output'];
  readonly highPrice24h: Scalars['String']['output'];
  readonly lastPrice: Scalars['String']['output'];
  readonly lowPrice24h: Scalars['String']['output'];
  readonly prevPrice24h: Scalars['String']['output'];
  readonly price24hPcnt: Scalars['String']['output'];
  readonly symbol: Scalars['String']['output'];
  readonly turnover24h: Scalars['String']['output'];
  readonly volume24h: Scalars['String']['output'];
};

export type GQLCommunityPoolFilter = {
  readonly denom?: InputMaybe<Scalars['String']['input']>;
};

export enum GQLCommunityPoolOrder {
  GQLDenom = 'denom'
}

export type GQLContractEventsFilter = {
  readonly block?: InputMaybe<GQLIntFilter>;
  readonly contractAddress?: InputMaybe<GQLStringFilter>;
  readonly type?: InputMaybe<GQLStringFilter>;
};

export enum GQLContractEventsOrder {
  GQLContractAddress = 'contract_address',
  GQLSequence = 'sequence',
  GQLType = 'type'
}

export type GQLDelegation = {
  readonly __typename?: 'Delegation';
  readonly amount: Scalars['Int']['output'];
  readonly delegator: GQLUser;
  readonly validator: GQLValidator;
};

export type GQLDelegationFilter = {
  readonly delegator_address?: InputMaybe<Scalars['String']['input']>;
  readonly validator_address?: InputMaybe<Scalars['String']['input']>;
};

export enum GQLDelegationOrder {
  GQLDelegatorAddress = 'delegator_address',
  GQLValidatorAddress = 'validator_address'
}

export type GQLDistributionCommission = {
  readonly __typename?: 'DistributionCommission';
  readonly commission?: Maybe<GQLToken>;
  readonly validator: GQLValidator;
};

export type GQLDistributionCommissionFilter = {
  readonly validator_address?: InputMaybe<Scalars['String']['input']>;
};

export enum GQLDistributionCommissionOrder {
  GQLValidatorAddress = 'validator_address'
}

export type GQLEmployee = {
  readonly __typename?: 'Employee';
  readonly email: Scalars['String']['output'];
  readonly instagram: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly telegram: Scalars['String']['output'];
  readonly twitter: Scalars['String']['output'];
};

export type GQLEmployeeFilter = {
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly instagram?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly telegram?: InputMaybe<Scalars['String']['input']>;
  readonly twitter?: InputMaybe<Scalars['String']['input']>;
};

export type GQLEvent = {
  readonly __typename?: 'Event';
  readonly attributes: ReadonlyArray<GQLEventAttribute>;
  readonly block: GQLBlock;
  readonly contractAddress?: Maybe<Scalars['String']['output']>;
  readonly eventSeqNo: Scalars['Int']['output'];
  readonly txSeqNo: Scalars['Int']['output'];
  readonly type: Scalars['String']['output'];
};

export type GQLEventAttribute = {
  readonly __typename?: 'EventAttribute';
  readonly key: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type GQLEvm = {
  readonly __typename?: 'Evm';
  readonly funTokens: ReadonlyArray<GQLFunToken>;
};

export type GQLFeatureFlags = {
  readonly __typename?: 'FeatureFlags';
  readonly gov: Scalars['Boolean']['output'];
  readonly oracle: Scalars['Boolean']['output'];
  readonly staking: Scalars['Boolean']['output'];
  readonly wasm: Scalars['Boolean']['output'];
};

export type GQLFloatFilter = {
  readonly eq?: InputMaybe<Scalars['Float']['input']>;
  readonly gt?: InputMaybe<Scalars['Float']['input']>;
  readonly gte?: InputMaybe<Scalars['Float']['input']>;
  readonly lt?: InputMaybe<Scalars['Float']['input']>;
  readonly lte?: InputMaybe<Scalars['Float']['input']>;
};

export type GQLFunToken = {
  readonly __typename?: 'FunToken';
  readonly bank_denom: Scalars['String']['output'];
  readonly creation_block: GQLBlock;
  readonly creator: GQLUser;
  readonly erc20_contract_address: Scalars['String']['output'];
  readonly is_made_from_coin: Scalars['Boolean']['output'];
};

export type GQLGovDeposit = {
  readonly __typename?: 'GovDeposit';
  readonly amount: ReadonlyArray<GQLToken>;
  readonly block: GQLBlock;
  readonly proposal: GQLGovProposal;
  readonly sender: GQLUser;
};

export type GQLGovDepositsFilter = {
  readonly block?: InputMaybe<GQLIntFilter>;
  readonly proposalId?: InputMaybe<GQLIntFilter>;
  readonly senderEq?: InputMaybe<Scalars['String']['input']>;
};

export enum GQLGovDepositsOrder {
  GQLBlock = 'block',
  GQLProposalId = 'proposal_id',
  GQLSender = 'sender'
}

export type GQLGovProposal = {
  readonly __typename?: 'GovProposal';
  readonly depositEndTime: Scalars['Time']['output'];
  readonly finalTallyResultAbstain: Scalars['Int']['output'];
  readonly finalTallyResultNo: Scalars['Int']['output'];
  readonly finalTallyResultNoWithVeto: Scalars['Int']['output'];
  readonly finalTallyResultYes: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly metadata: Scalars['String']['output'];
  readonly proposer: GQLUser;
  readonly status: Scalars['String']['output'];
  readonly submitTime: Scalars['Time']['output'];
  readonly summary: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly totalDeposit: ReadonlyArray<GQLToken>;
  readonly votingEndTime?: Maybe<Scalars['Time']['output']>;
  readonly votingStartTime?: Maybe<Scalars['Time']['output']>;
};

export type GQLGovProposalsFilter = {
  readonly depositEndTime?: InputMaybe<GQLTimeFilter>;
  readonly finalTallyResultAbstain?: InputMaybe<GQLIntFilter>;
  readonly finalTallyResultNo?: InputMaybe<GQLIntFilter>;
  readonly finalTallyResultNoWithVeto?: InputMaybe<GQLIntFilter>;
  readonly finalTallyResultYes?: InputMaybe<GQLIntFilter>;
  readonly id?: InputMaybe<GQLIntFilter>;
  readonly proposerEq?: InputMaybe<Scalars['String']['input']>;
  readonly submitTime?: InputMaybe<GQLTimeFilter>;
  readonly summary?: InputMaybe<GQLStringFilter>;
  readonly title?: InputMaybe<GQLStringFilter>;
  readonly votingEndTime?: InputMaybe<GQLTimeFilter>;
  readonly votingStartTime?: InputMaybe<GQLTimeFilter>;
};

export enum GQLGovProposalsOrder {
  GQLDepositEndTime = 'deposit_end_time',
  GQLFinalTallyResultAbstain = 'final_tally_result_abstain',
  GQLFinalTallyResultNo = 'final_tally_result_no',
  GQLFinalTallyResultNoWithVeto = 'final_tally_result_no_with_veto',
  GQLFinalTallyResultYes = 'final_tally_result_yes',
  GQLId = 'id',
  GQLProposer = 'proposer',
  GQLStatus = 'status',
  GQLSubmitTime = 'submit_time',
  GQLSummary = 'summary',
  GQLTitle = 'title',
  GQLVotingEndTime = 'voting_end_time',
  GQLVotingStartTime = 'voting_start_time'
}

export type GQLGovVote = {
  readonly __typename?: 'GovVote';
  readonly block: GQLBlock;
  readonly option: Scalars['String']['output'];
  readonly proposal: GQLGovProposal;
  readonly sender: GQLUser;
};

export type GQLGovVotesFilter = {
  readonly block?: InputMaybe<GQLIntFilter>;
  readonly optionEq?: InputMaybe<Scalars['String']['input']>;
  readonly proposalId?: InputMaybe<GQLIntFilter>;
  readonly senderEq?: InputMaybe<Scalars['String']['input']>;
};

export enum GQLGovVotesOrder {
  GQLBlock = 'block',
  GQLOption = 'option',
  GQLProposalId = 'proposal_id',
  GQLSender = 'sender'
}

export type GQLGovernance = {
  readonly __typename?: 'Governance';
  readonly govDeposits: ReadonlyArray<GQLGovDeposit>;
  readonly govProposals: ReadonlyArray<GQLGovProposal>;
  readonly govVotes: ReadonlyArray<GQLGovVote>;
};


export type GQLGovernanceGqlGovDepositsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<GQLGovDepositsOrder>;
  orderDesc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLGovDepositsFilter>;
};


export type GQLGovernanceGqlGovProposalsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<GQLGovProposalsOrder>;
  orderDesc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLGovProposalsFilter>;
};


export type GQLGovernanceGqlGovVotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<GQLGovVotesOrder>;
  orderDesc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLGovVotesFilter>;
};

export type GQLIbc = {
  readonly __typename?: 'IBC';
  readonly ibcChannels: GQLIbcChannelsResponse;
  readonly ibcTransfers: ReadonlyArray<GQLIbcTransfer>;
};


export type GQLIbcgqlIbcTransfersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<GQLIbcTranferOrder>;
  order_desc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLIbcTranferFilter>;
};

export type GQLIbcChannel = {
  readonly __typename?: 'IBCChannel';
  readonly chain_id: Scalars['String']['output'];
  readonly chain_logo: Scalars['String']['output'];
  readonly chain_name: Scalars['String']['output'];
  readonly channel_id: Scalars['String']['output'];
  readonly counterparty_channel_id: Scalars['String']['output'];
  readonly revision_height: Scalars['Int']['output'];
};

export type GQLIbcChannelsResponse = {
  readonly __typename?: 'IBCChannelsResponse';
  readonly channels: ReadonlyArray<GQLIbcChannel>;
  readonly revision_height: Scalars['Int']['output'];
};

export type GQLIbcTranferFilter = {
  readonly receiver?: InputMaybe<Scalars['String']['input']>;
  readonly sender?: InputMaybe<Scalars['String']['input']>;
};

export enum GQLIbcTranferOrder {
  GQLBlock = 'block',
  GQLReceiver = 'receiver',
  GQLSender = 'sender'
}

export type GQLIbcTransfer = {
  readonly __typename?: 'IBCTransfer';
  readonly amount: Scalars['Float']['output'];
  readonly block: GQLBlock;
  readonly denom: Scalars['String']['output'];
  readonly memo: Scalars['String']['output'];
  readonly receiver: Scalars['String']['output'];
  readonly sender: Scalars['String']['output'];
};

export type GQLInflation = {
  readonly __typename?: 'Inflation';
  readonly distributions: ReadonlyArray<GQLInflationDistribution>;
  readonly inflations: ReadonlyArray<GQLInflationInfo>;
  readonly rewards?: Maybe<GQLInflationRewards>;
};


export type GQLInflationGqlDistributionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<GQLInflationDistributionOrder>;
  order_desc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLInflationDistributionFilter>;
};


export type GQLInflationGqlInflationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<GQLInflationInfoOrder>;
  order_desc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLInflationInfoFilter>;
};

export type GQLInflationDistribution = {
  readonly __typename?: 'InflationDistribution';
  readonly block: GQLBlock;
  readonly communityPool: Scalars['Float']['output'];
  readonly eventSeqNo: Scalars['Int']['output'];
  readonly stakingRewards: Scalars['Float']['output'];
  readonly strategicReserve: Scalars['Float']['output'];
  readonly txSeqNo: Scalars['Int']['output'];
};

export type GQLInflationDistributionFilter = {
  readonly block?: InputMaybe<GQLIntFilter>;
  readonly blockTs?: InputMaybe<GQLTimeFilter>;
};

export enum GQLInflationDistributionOrder {
  GQLSequence = 'sequence'
}

export type GQLInflationInfo = {
  readonly __typename?: 'InflationInfo';
  readonly amount: Scalars['Float']['output'];
  readonly block: GQLBlock;
  readonly epochNumber: Scalars['Int']['output'];
  readonly epochProvisions: Scalars['Float']['output'];
};

export type GQLInflationInfoFilter = {
  readonly block?: InputMaybe<GQLIntFilter>;
  readonly blockTs?: InputMaybe<GQLTimeFilter>;
  readonly epochNumber?: InputMaybe<GQLIntFilter>;
};

export enum GQLInflationInfoOrder {
  GQLBlock = 'block',
  GQLEpochNumber = 'epoch_number'
}

export type GQLInflationRewards = {
  readonly __typename?: 'InflationRewards';
  readonly annualReward: Scalars['Int']['output'];
  readonly totalStaked: Scalars['Int']['output'];
};

export type GQLIntFilter = {
  readonly eq?: InputMaybe<Scalars['Int']['input']>;
  readonly gt?: InputMaybe<Scalars['Int']['input']>;
  readonly gte?: InputMaybe<Scalars['Int']['input']>;
  readonly lt?: InputMaybe<Scalars['Int']['input']>;
  readonly lte?: InputMaybe<Scalars['Int']['input']>;
};

export type GQLInternal = {
  readonly __typename?: 'Internal';
  readonly employee?: Maybe<GQLEmployee>;
};


export type GQLInternalGqlEmployeeArgs = {
  where: GQLEmployeeFilter;
};

export type GQLMessage = {
  readonly __typename?: 'Message';
  readonly action?: Maybe<Scalars['String']['output']>;
  readonly block: GQLBlock;
  readonly contractAddr?: Maybe<Scalars['String']['output']>;
  readonly funds?: Maybe<ReadonlyArray<GQLToken>>;
  readonly msgSeqNo: Scalars['Int']['output'];
  readonly senderAddr?: Maybe<Scalars['String']['output']>;
  readonly txCode: Scalars['Int']['output'];
  readonly txHash: Scalars['String']['output'];
  readonly txSeqNo: Scalars['Int']['output'];
  readonly type: Scalars['String']['output'];
};

export type GQLMessagesFilter = {
  readonly block?: InputMaybe<GQLIntFilter>;
  readonly senderAddr?: InputMaybe<Scalars['String']['input']>;
  readonly txHash?: InputMaybe<Scalars['String']['input']>;
  readonly type?: InputMaybe<Scalars['String']['input']>;
};

export enum GQLMessagesOrder {
  GQLSequence = 'sequence',
  GQLType = 'type'
}

export type GQLOracle = {
  readonly __typename?: 'Oracle';
  readonly oraclePrices: ReadonlyArray<GQLOraclePrice>;
  readonly oracles: ReadonlyArray<GQLOracleEntry>;
};


export type GQLOracleGqlOraclePricesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<GQLOraclePricesOrder>;
  order_desc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLOraclePricesFilter>;
};


export type GQLOracleGqlOraclesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<GQLOraclesOrder>;
  order_desc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLOraclesFilter>;
};

export type GQLOracleEntry = {
  readonly __typename?: 'OracleEntry';
  readonly numVotes: Scalars['Int']['output'];
  readonly validator: GQLValidator;
};

export type GQLOraclePrice = {
  readonly __typename?: 'OraclePrice';
  readonly block: GQLBlock;
  /** @deprecated Not applicable for oracle prices */
  readonly eventSeqNo: Scalars['Int']['output'];
  readonly pair: Scalars['String']['output'];
  readonly price: Scalars['Float']['output'];
  /** @deprecated Not applicable for oracle prices */
  readonly txSeqNo: Scalars['Int']['output'];
};

export type GQLOraclePricesFilter = {
  readonly block?: InputMaybe<GQLIntFilter>;
  readonly pair?: InputMaybe<GQLStringFilter>;
};

export enum GQLOraclePricesOrder {
  GQLPair = 'pair',
  GQLPrice = 'price',
  GQLSequence = 'sequence'
}

export type GQLOraclesFilter = {
  readonly numVotes?: InputMaybe<GQLIntFilter>;
  readonly validatorAddressEq?: InputMaybe<Scalars['String']['input']>;
};

export enum GQLOraclesOrder {
  GQLNumVotes = 'num_votes',
  GQLValidatorAddress = 'validator_address'
}

export type GQLProxies = {
  readonly __typename?: 'Proxies';
  readonly bybit?: Maybe<GQLBybitResponse>;
  readonly unstoppableDomains?: Maybe<GQLUnstoppableDomainsResponse>;
};


export type GQLProxiesGqlUnstoppableDomainsArgs = {
  domainName: Scalars['String']['input'];
};

export type GQLQuery = {
  readonly __typename?: 'Query';
  readonly communityPool: ReadonlyArray<GQLToken>;
  /** @deprecated Moved to staking sub schema */
  readonly delegations: ReadonlyArray<GQLDelegation>;
  readonly distributionCommissions: ReadonlyArray<GQLDistributionCommission>;
  readonly evm: GQLEvm;
  readonly featureFlags: GQLFeatureFlags;
  readonly governance: GQLGovernance;
  readonly ibc: GQLIbc;
  readonly inflation: GQLInflation;
  readonly internal: GQLInternal;
  readonly messages: ReadonlyArray<GQLMessage>;
  readonly oracle: GQLOracle;
  readonly proxies: GQLProxies;
  /** @deprecated Moved to staking sub schema */
  readonly redelegations: ReadonlyArray<GQLRedelegation>;
  readonly staking: GQLStaking;
  /** @deprecated Will be removed next release */
  readonly stats: GQLStats;
  /** @deprecated Moved to staking sub schema */
  readonly unbondings: ReadonlyArray<GQLUnbonding>;
  readonly user?: Maybe<GQLUser>;
  readonly users: ReadonlyArray<GQLUser>;
  /** @deprecated Moved to staking sub schema */
  readonly validators: ReadonlyArray<GQLValidator>;
  readonly wasm: GQLWasm;
};


export type GQLQueryGqlCommunityPoolArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<GQLCommunityPoolOrder>;
  order_desc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLCommunityPoolFilter>;
};


export type GQLQueryGqlDelegationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<GQLDelegationOrder>;
  order_desc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLDelegationFilter>;
};


export type GQLQueryGqlDistributionCommissionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<GQLDistributionCommissionOrder>;
  order_desc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLDistributionCommissionFilter>;
};


export type GQLQueryGqlMessagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<GQLMessagesOrder>;
  order_desc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLMessagesFilter>;
};


export type GQLQueryGqlRedelegationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<GQLRedelegationOrder>;
  order_desc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLRedelegationFilter>;
};


export type GQLQueryGqlUnbondingsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<GQLUnbondingOrder>;
  order_desc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLUnbondingFilter>;
};


export type GQLQueryGqlUserArgs = {
  where: GQLUserFilter;
};


export type GQLQueryGqlUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<GQLUserOrder>;
  order_desc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLUsersFilter>;
};


export type GQLQueryGqlValidatorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<GQLValidatorOrder>;
  order_desc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLValidatorFilter>;
};

export type GQLRecords = {
  readonly __typename?: 'Records';
  readonly cryptoEthAddress?: Maybe<Scalars['String']['output']>;
  readonly cryptoNibiAddress?: Maybe<Scalars['String']['output']>;
  readonly ipfsHtmlValue?: Maybe<Scalars['String']['output']>;
  readonly tokenEvmEthEthAddress?: Maybe<Scalars['String']['output']>;
  readonly tokenEvmMaticMaticAddress?: Maybe<Scalars['String']['output']>;
  readonly tokenEvmMaticPolAddress?: Maybe<Scalars['String']['output']>;
  readonly tokenNibiNibiNibiAddress?: Maybe<Scalars['String']['output']>;
};

export type GQLRedelegation = {
  readonly __typename?: 'Redelegation';
  readonly amount: Scalars['Int']['output'];
  readonly completion_time: Scalars['String']['output'];
  readonly creation_block: GQLBlock;
  readonly delegator: GQLUser;
  readonly destination_validator: GQLValidator;
  readonly source_validator: GQLValidator;
};

export type GQLRedelegationFilter = {
  readonly delegator_address?: InputMaybe<Scalars['String']['input']>;
  readonly destination_validator_address?: InputMaybe<Scalars['String']['input']>;
  readonly source_validator_address?: InputMaybe<Scalars['String']['input']>;
};

export enum GQLRedelegationOrder {
  GQLCompletionTime = 'completion_time',
  GQLCreationHeight = 'creation_height',
  GQLDelegatorAddress = 'delegator_address',
  GQLDestinationValidatorAddress = 'destination_validator_address',
  GQLSourceValidatorAddress = 'source_validator_address'
}

export type GQLStaking = {
  readonly __typename?: 'Staking';
  readonly delegations: ReadonlyArray<GQLDelegation>;
  readonly history: ReadonlyArray<GQLStakingHistoryItem>;
  readonly redelegations: ReadonlyArray<GQLRedelegation>;
  readonly unbondings: ReadonlyArray<GQLUnbonding>;
  readonly validators: ReadonlyArray<GQLValidator>;
};


export type GQLStakingGqlDelegationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<GQLDelegationOrder>;
  order_desc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLDelegationFilter>;
};


export type GQLStakingGqlHistoryArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<GQLStakingHistoryOrder>;
  order_desc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLStakingHistoryFilter>;
};


export type GQLStakingGqlRedelegationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<GQLRedelegationOrder>;
  order_desc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLRedelegationFilter>;
};


export type GQLStakingGqlUnbondingsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<GQLUnbondingOrder>;
  order_desc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLUnbondingFilter>;
};


export type GQLStakingGqlValidatorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<GQLValidatorOrder>;
  order_desc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLValidatorFilter>;
};

export enum GQLStakingActionType {
  GQLCancel = 'cancel',
  GQLDelegate = 'delegate',
  GQLRedelegate = 'redelegate',
  GQLRedelegateCompleted = 'redelegate_completed',
  GQLUnbond = 'unbond',
  GQLUnbondCompleted = 'unbond_completed',
  GQLWithdraw = 'withdraw'
}

export type GQLStakingHistoryFilter = {
  readonly actions?: InputMaybe<ReadonlyArray<GQLStakingActionType>>;
  readonly amount?: InputMaybe<GQLIntFilter>;
  readonly block?: InputMaybe<GQLIntFilter>;
  readonly completionTime?: InputMaybe<GQLTimeFilter>;
  readonly delegator?: InputMaybe<GQLStringFilter>;
  readonly validator?: InputMaybe<GQLStringFilter>;
};

export type GQLStakingHistoryItem = {
  readonly __typename?: 'StakingHistoryItem';
  readonly action: GQLStakingActionType;
  readonly amount: Scalars['Int']['output'];
  readonly block: GQLBlock;
  readonly completion_time?: Maybe<Scalars['Time']['output']>;
  readonly delegator: GQLUser;
  readonly destination_validator?: Maybe<GQLValidator>;
  readonly validator: GQLValidator;
};

export enum GQLStakingHistoryOrder {
  GQLAction = 'action',
  GQLAmount = 'amount',
  GQLDelegator = 'delegator',
  GQLSequence = 'sequence',
  GQLValidator = 'validator'
}

export type GQLStats = {
  readonly __typename?: 'Stats';
  readonly volume: ReadonlyArray<GQLStatsVolume>;
};


export type GQLStatsGqlVolumeArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<GQLStatsVolumeOrder>;
  orderDesc?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GQLStatsVolume = {
  readonly __typename?: 'StatsVolume';
  readonly periodStartTs: Scalars['Time']['output'];
  readonly volumePerpCumulative: Scalars['Float']['output'];
};

export enum GQLStatsVolumeOrder {
  GQLPeriodStartTs = 'period_start_ts'
}

export type GQLStringFilter = {
  readonly eq?: InputMaybe<Scalars['String']['input']>;
  readonly like?: InputMaybe<Scalars['String']['input']>;
};

export type GQLSubOraclePricesFilter = {
  readonly pair: Scalars['String']['input'];
};

export type GQLSubscription = {
  readonly __typename?: 'Subscription';
  readonly oraclePrices: ReadonlyArray<GQLOraclePrice>;
};


export type GQLSubscriptionGqlOraclePricesArgs = {
  where?: InputMaybe<GQLSubOraclePricesFilter>;
};

export type GQLTimeFilter = {
  readonly eq?: InputMaybe<Scalars['Time']['input']>;
  readonly gt?: InputMaybe<Scalars['Time']['input']>;
  readonly gte?: InputMaybe<Scalars['Time']['input']>;
  readonly lt?: InputMaybe<Scalars['Time']['input']>;
  readonly lte?: InputMaybe<Scalars['Time']['input']>;
};

export type GQLToken = {
  readonly __typename?: 'Token';
  readonly amount: Scalars['String']['output'];
  readonly denom: Scalars['String']['output'];
};

export type GQLTokenInfo = {
  readonly __typename?: 'TokenInfo';
  readonly bank_denom: Scalars['String']['output'];
  readonly decimals: Scalars['Int']['output'];
  readonly erc20_contract_address: Scalars['String']['output'];
  readonly logo: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly price: Scalars['Float']['output'];
  readonly symbol: Scalars['String']['output'];
  readonly type: GQLTokenType;
  readonly verified: Scalars['Boolean']['output'];
};

export enum GQLTokenType {
  GQLBank = 'bank',
  GQLErc20 = 'erc20'
}

export type GQLUnbonding = {
  readonly __typename?: 'Unbonding';
  readonly amount: Scalars['Int']['output'];
  readonly completion_time: Scalars['String']['output'];
  readonly creation_block: GQLBlock;
  readonly delegator: GQLUser;
  readonly validator: GQLValidator;
};

export type GQLUnbondingFilter = {
  readonly delegator_address?: InputMaybe<Scalars['String']['input']>;
  readonly validator_address?: InputMaybe<Scalars['String']['input']>;
};

export enum GQLUnbondingOrder {
  GQLCompletionTime = 'completion_time',
  GQLCreationHeight = 'creation_height',
  GQLDelegatorAddress = 'delegator_address',
  GQLValidatorAddress = 'validator_address'
}

export type GQLUnstoppableDomainsMeta = {
  readonly __typename?: 'UnstoppableDomainsMeta';
  readonly blockchain: Scalars['String']['output'];
  readonly domain: Scalars['String']['output'];
  readonly namehash: Scalars['String']['output'];
  readonly networkId: Scalars['Int']['output'];
  readonly owner: Scalars['String']['output'];
  readonly registry: Scalars['String']['output'];
  readonly resolver: Scalars['String']['output'];
  readonly reverse: Scalars['Boolean']['output'];
  readonly tokenId: Scalars['String']['output'];
  readonly type: Scalars['String']['output'];
};

export type GQLUnstoppableDomainsResponse = {
  readonly __typename?: 'UnstoppableDomainsResponse';
  readonly meta: GQLUnstoppableDomainsMeta;
  readonly records: GQLRecords;
};

export type GQLUser = {
  readonly __typename?: 'User';
  readonly address: Scalars['String']['output'];
  readonly all_balances: ReadonlyArray<GQLBalance>;
  readonly balances: ReadonlyArray<GQLToken>;
  readonly created_block: GQLBlock;
  readonly is_blocked?: Maybe<Scalars['Boolean']['output']>;
};

export type GQLUserContract = {
  readonly __typename?: 'UserContract';
  readonly contractAddress: Scalars['String']['output'];
  readonly contractType: Scalars['String']['output'];
  readonly events?: Maybe<ReadonlyArray<GQLEvent>>;
  readonly user: GQLUser;
};

export type GQLUserContractsFilter = {
  readonly contractAddress?: InputMaybe<GQLStringFilter>;
  readonly contractType?: InputMaybe<GQLStringFilter>;
  readonly userAddress?: InputMaybe<GQLStringFilter>;
};

export enum GQLUserContractsOrder {
  GQLContractAddress = 'contract_address',
  GQLContractType = 'contract_type',
  GQLUserAddress = 'user_address'
}

export type GQLUserFilter = {
  readonly address: Scalars['String']['input'];
};

export enum GQLUserOrder {
  GQLAddress = 'address',
  GQLCreatedBlock = 'created_block'
}

export type GQLUsersFilter = {
  readonly address?: InputMaybe<Scalars['String']['input']>;
  readonly created_block_eq?: InputMaybe<Scalars['Int']['input']>;
  readonly created_block_gte?: InputMaybe<Scalars['Int']['input']>;
  readonly created_block_lte?: InputMaybe<Scalars['Int']['input']>;
};

export type GQLValidator = {
  readonly __typename?: 'Validator';
  readonly commission_rates?: Maybe<GQLValidatorCommission>;
  readonly commission_update_time: Scalars['String']['output'];
  readonly creation_block: GQLBlock;
  readonly delegator_shares: Scalars['Float']['output'];
  readonly description: GQLValidatorDescription;
  readonly jailed: Scalars['Boolean']['output'];
  readonly min_self_delegation: Scalars['Int']['output'];
  readonly operator_address: Scalars['String']['output'];
  readonly self_delegation: Scalars['Int']['output'];
  readonly status: GQLValidatorStatus;
  readonly tokens: Scalars['Int']['output'];
  readonly unbonding_block: GQLBlock;
  readonly unbonding_time: Scalars['String']['output'];
  readonly uptime?: Maybe<Scalars['Float']['output']>;
};

export type GQLValidatorCommission = {
  readonly __typename?: 'ValidatorCommission';
  readonly max_change_rate: Scalars['Float']['output'];
  readonly max_rate: Scalars['Float']['output'];
  readonly rate: Scalars['Float']['output'];
};

export type GQLValidatorDescription = {
  readonly __typename?: 'ValidatorDescription';
  readonly details: Scalars['String']['output'];
  readonly identity: Scalars['String']['output'];
  readonly moniker: Scalars['String']['output'];
  readonly security_contact: Scalars['String']['output'];
  readonly website: Scalars['String']['output'];
};

export type GQLValidatorFilter = {
  readonly jailed?: InputMaybe<Scalars['Boolean']['input']>;
  readonly moniker?: InputMaybe<Scalars['String']['input']>;
  readonly operator_address?: InputMaybe<Scalars['String']['input']>;
  readonly status?: InputMaybe<GQLValidatorStatus>;
};

export enum GQLValidatorOrder {
  GQLJailed = 'jailed',
  GQLMoniker = 'moniker',
  GQLOperatorAddress = 'operator_address',
  GQLStatus = 'status',
  GQLTokens = 'tokens'
}

export enum GQLValidatorStatus {
  GQLBonded = 'BONDED',
  GQLUnbonded = 'UNBONDED',
  GQLUnbonding = 'UNBONDING'
}

export type GQLWasm = {
  readonly __typename?: 'Wasm';
  readonly contractEvents: ReadonlyArray<GQLEvent>;
  readonly userContracts: ReadonlyArray<GQLUserContract>;
};


export type GQLWasmGqlContractEventsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<GQLContractEventsOrder>;
  orderDesc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLContractEventsFilter>;
};


export type GQLWasmGqlUserContractsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<GQLUserContractsOrder>;
  orderDesc?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GQLUserContractsFilter>;
};
