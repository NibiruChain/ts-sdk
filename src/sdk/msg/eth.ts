import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
  MsgClientImpl,
  MsgConvertCoinToEvm,
  MsgConvertCoinToEvmResponse,
  MsgCreateFunToken,
  MsgCreateFunTokenResponse,
  MsgEthereumTx,
  MsgEthereumTxResponse,
  MsgUpdateParams,
  MsgUpdateParamsResponse,
} from "../../protojs/eth/evm/v1/tx"

export interface EthMsgExtension {
  ethereumTx: (body: MsgEthereumTx) => Promise<MsgEthereumTxResponse>
  updateParams: (body: MsgUpdateParams) => Promise<MsgUpdateParamsResponse>
  createFunToken: (
    body: MsgCreateFunToken
  ) => Promise<MsgCreateFunTokenResponse>
  convertCoinToEVM: (
    body: MsgConvertCoinToEvm
  ) => Promise<MsgConvertCoinToEvmResponse>
}

export const setupEthMsgExtension = (base: QueryClient): EthMsgExtension => {
  const queryService = new MsgClientImpl(createProtobufRpcClient(base))

  return {
    ethereumTx: async (body: MsgEthereumTx) =>
      queryService.EthereumTx(MsgEthereumTx.fromPartial(body)),
    updateParams: async (body: MsgUpdateParams) =>
      queryService.UpdateParams(MsgUpdateParams.fromPartial(body)),
    createFunToken: async (body: MsgCreateFunToken) =>
      queryService.CreateFunToken(MsgCreateFunToken.fromPartial(body)),
    convertCoinToEVM: async (body: MsgConvertCoinToEvm) =>
      queryService.ConvertCoinToEvm(MsgConvertCoinToEvm.fromPartial(body)),
  }
}
