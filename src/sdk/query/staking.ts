import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
  MsgCancelUnbondingDelegation,
  MsgCancelUnbondingDelegationResponse,
  MsgClientImpl,
} from "../../protojs/cosmos/staking/v1beta1/tx"

export interface StakeExtension {
  readonly staking: Readonly<{
    cancelUnbondingDelegation: (
      args: MsgCancelUnbondingDelegation
    ) => Promise<MsgCancelUnbondingDelegationResponse>
  }>
}

export const setupStakeExtension = (base: QueryClient): StakeExtension => {
  const rpcClient = createProtobufRpcClient(base)
  const queryService = new MsgClientImpl(rpcClient)

  return {
    staking: {
      cancelUnbondingDelegation: async (args: MsgCancelUnbondingDelegation) => {
        const req = MsgCancelUnbondingDelegation.fromPartial(args)
        const resp = await queryService.CancelUnbondingDelegation(req)
        return resp
      },
    },
  }
}
