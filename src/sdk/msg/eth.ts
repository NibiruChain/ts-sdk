import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
  MsgClientImpl,
  MsgEthereumTx,
  MsgEthereumTxResponse,
  MsgUpdateParams,
  MsgUpdateParamsResponse,
} from "../../protojs/eth/evm/v1/tx"

export interface EthMsgExtension {
  readonly ethMsg: Readonly<{
    ethereumTx: (body: MsgEthereumTx) => Promise<MsgEthereumTxResponse>
    updateParams: (body: MsgUpdateParams) => Promise<MsgUpdateParamsResponse>
  }>
}

export const setupEthMsgExtension = (base: QueryClient): EthMsgExtension => {
  const queryService = new MsgClientImpl(createProtobufRpcClient(base))

  return {
    ethMsg: {
      ethereumTx: async (body: MsgEthereumTx) =>
        queryService.EthereumTx(MsgEthereumTx.fromPartial(body)),
      updateParams: async (body: MsgUpdateParams) =>
        queryService.UpdateParams(MsgUpdateParams.fromPartial(body)),
    },
  }
}
