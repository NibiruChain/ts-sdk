/* eslint-disable @typescript-eslint/naming-convention */
import * as pb from "@nibiruchain/protojs/dist/cosmos/distribution/v1beta1/query"
import Long from "long"

import {
  createPagination,
  createProtobufRpcClient,
  QueryClient,
} from "@cosmjs/stargate"

export interface DistributionExtension {
  /** distrbution: query extension for the distribution module. The distribution
   * module manages the distribution mechanism for passively distributing
   * staking rewards to validators and delegators.
   */
  readonly distribution: {
    communityPool: () => Promise<pb.QueryCommunityPoolResponse>
    delegationRewards: (
      delegatorAddress: string,
      validatorAddress: string,
    ) => Promise<pb.QueryDelegationRewardsResponse>

    /** Returns the rewards (Coin[]) accrued from all delegations for the given
     * delegator address. */
    delegationTotalRewards: (
      delegatorAddress: string,
    ) => Promise<pb.QueryDelegationTotalRewardsResponse>
    delegatorValidators: (
      delegatorAddress: string,
    ) => Promise<pb.QueryDelegatorValidatorsResponse>
    delegatorWithdrawAddress: (
      delegatorAddress: string,
    ) => Promise<pb.QueryDelegatorWithdrawAddressResponse>
    /** Returns the module parameters for the distribution module. */
    params: () => Promise<pb.QueryParamsResponse>
    validatorCommission: (
      validatorAddress: string,
    ) => Promise<pb.QueryValidatorCommissionResponse>
    validatorOutstandingRewards: (
      validatorAddress: string,
    ) => Promise<pb.QueryValidatorOutstandingRewardsResponse>
    validatorSlashes: (
      validatorAddress: string,
      startingHeight: number,
      endingHeight: number,
      paginationKey?: Uint8Array,
    ) => Promise<pb.QueryValidatorSlashesResponse>
  }
}

export function setupDistributionExtension(base: QueryClient): DistributionExtension {
  const rpc = createProtobufRpcClient(base)
  const queryService = new pb.QueryClientImpl(rpc)

  return {
    distribution: {
      communityPool: async () => {
        const response = await queryService.CommunityPool({})
        return response
      },
      delegationRewards: async (delegatorAddress: string, validatorAddress: string) => {
        const response = await queryService.DelegationRewards({
          delegatorAddress,
          validatorAddress,
        })
        return response
      },
      delegationTotalRewards: async (delegatorAddress: string) => {
        const response = await queryService.DelegationTotalRewards({
          delegatorAddress,
        })
        return response
      },
      delegatorValidators: async (delegatorAddress: string) => {
        const response = await queryService.DelegatorValidators({
          delegatorAddress,
        })
        return response
      },
      delegatorWithdrawAddress: async (delegatorAddress: string) => {
        const response = await queryService.DelegatorWithdrawAddress({
          delegatorAddress,
        })
        return response
      },
      params: async () => {
        const response = await queryService.Params({})
        return response
      },
      validatorCommission: async (validatorAddress: string) => {
        const response = await queryService.ValidatorCommission({
          validatorAddress,
        })
        return response
      },
      validatorOutstandingRewards: async (validatorAddress: string) => {
        const response = await queryService.ValidatorOutstandingRewards({
          validatorAddress,
        })
        return response
      },
      validatorSlashes: async (
        validatorAddress: string,
        startingHeight: number,
        endingHeight: number,
        paginationKey?: Uint8Array,
      ) => {
        const response = await queryService.ValidatorSlashes({
          validatorAddress,
          startingHeight: Long.fromNumber(startingHeight, true),
          endingHeight: Long.fromNumber(endingHeight, true),
          pagination: createPagination(paginationKey),
        })
        return response
      },
    },
  }
}
