import {
  createPagination,
  createProtobufRpcClient,
  GovParamsType,
  QueryClient,
} from "@cosmjs/stargate"
import * as cosmosGovQuery from "@nibiruchain/protojs/dist/cosmos/gov/v1beta1/query"
import { ProposalStatus } from "@nibiruchain/protojs/src/cosmos/gov/v1beta1/gov"
import Long from "long"

export interface GovExtension {
  gov: Readonly<{
    params: (paramsType: GovParamsType) => Promise<cosmosGovQuery.QueryParamsResponse>
    proposal: (proposalId: number) => Promise<cosmosGovQuery.QueryProposalResponse>
    proposals: (
      status: ProposalStatus,
      voter: string,
      depositor: string,
      pagination?: Uint8Array,
    ) => Promise<cosmosGovQuery.QueryProposalsResponse>
    vote: (
      proposalId: number,
      voter: string,
    ) => Promise<cosmosGovQuery.QueryVoteResponse>
    votes: (
      proposalId: number,
      pagination?: Uint8Array,
    ) => Promise<cosmosGovQuery.QueryVotesResponse>
    deposit: (
      proposalId: number,
      depositor: string,
    ) => Promise<cosmosGovQuery.QueryDepositResponse>
    deposits: (
      proposalId: number,
      pagination?: Uint8Array,
    ) => Promise<cosmosGovQuery.QueryDepositsResponse>
    tallyResult: (
      proposalId: number,
    ) => Promise<cosmosGovQuery.QueryTallyResultResponse>
  }>
}

export function setupGovExtension(base: QueryClient): GovExtension {
  const rpcClient = createProtobufRpcClient(base)
  const queryService = new cosmosGovQuery.QueryClientImpl(rpcClient)

  return {
    gov: {
      proposal: async (
        proposalId: number,
      ): Promise<cosmosGovQuery.QueryProposalResponse> => {
        const response = await queryService.Proposal({
          proposalId: Long.fromValue(proposalId),
        })
        return response
      },
      proposals: async (
        status: ProposalStatus,
        voter: string,
        depositor: string,
        pagination?: Uint8Array,
      ): Promise<cosmosGovQuery.QueryProposalsResponse> => {
        const response = await queryService.Proposals({
          proposalStatus: status,
          voter,
          depositor,
          pagination: createPagination(pagination),
        })
        return response
      },
      vote: async (
        proposalId: number,
        voter: string,
      ): Promise<cosmosGovQuery.QueryVoteResponse> => {
        const response = await queryService.Vote({
          proposalId: Long.fromValue(proposalId),
          voter,
        })
        return response
      },
      votes: async (
        proposalId: number,
        pagination?: Uint8Array,
      ): Promise<cosmosGovQuery.QueryVotesResponse> => {
        const response = await queryService.Votes({
          proposalId: Long.fromValue(proposalId),
          pagination: createPagination(pagination),
        })
        return response
      },
      params: async (
        paramsType: GovParamsType,
      ): Promise<cosmosGovQuery.QueryParamsResponse> => {
        const response = await queryService.Params({
          paramsType,
        })
        return response
      },
      deposit: async (
        proposalId: number,
        depositor: string,
      ): Promise<cosmosGovQuery.QueryDepositResponse> => {
        const response = await queryService.Deposit({
          proposalId: Long.fromValue(proposalId),
          depositor,
        })
        return response
      },
      deposits: async (
        proposalId: number,
        pagination?: Uint8Array,
      ): Promise<cosmosGovQuery.QueryDepositsResponse> => {
        const response = await queryService.Deposits({
          proposalId: Long.fromValue(proposalId),
          pagination: createPagination(pagination),
        })
        return response
      },
      tallyResult: async (
        proposalId: number,
      ): Promise<cosmosGovQuery.QueryTallyResultResponse> => {
        const response = await queryService.TallyResult({
          proposalId: Long.fromValue(proposalId),
        })
        return response
      },
    },
  }
}
