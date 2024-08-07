import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
  MsgCancelFeeShare,
  MsgCancelFeeShareResponse,
  MsgClientImpl,
  MsgRegisterFeeShare,
  MsgRegisterFeeShareResponse,
  MsgUpdateFeeShare,
  MsgUpdateFeeShareResponse,
  MsgUpdateParams,
  MsgUpdateParamsResponse,
} from "../../protojs/nibiru/devgas/v1/tx"

export interface DevgasMsgExtension {
  registerFeeShare: (
    body: MsgRegisterFeeShare
  ) => Promise<MsgRegisterFeeShareResponse>
  updateFeeShare: (
    body: MsgUpdateFeeShare
  ) => Promise<MsgUpdateFeeShareResponse>
  cancelFeeShare: (
    body: MsgCancelFeeShare
  ) => Promise<MsgCancelFeeShareResponse>
  updateParams: (body: MsgUpdateParams) => Promise<MsgUpdateParamsResponse>
}

export const setupDevgasMsgExtension = (
  base: QueryClient
): DevgasMsgExtension => {
  const queryService = new MsgClientImpl(createProtobufRpcClient(base))

  return {
    registerFeeShare: async (body: MsgRegisterFeeShare) =>
      queryService.RegisterFeeShare(MsgRegisterFeeShare.fromPartial(body)),

    updateFeeShare: async (body: MsgUpdateFeeShare) =>
      queryService.UpdateFeeShare(MsgUpdateFeeShare.fromPartial(body)),

    cancelFeeShare: async (body: MsgCancelFeeShare) =>
      queryService.CancelFeeShare(MsgCancelFeeShare.fromPartial(body)),

    updateParams: async (body: MsgUpdateParams) =>
      queryService.UpdateParams(MsgUpdateParams.fromPartial(body)),
  }
}
