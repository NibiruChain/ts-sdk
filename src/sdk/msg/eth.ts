import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
  MsgServiceName,
  MsgClientImpl,
  MsgConvertCoinToEvm,
  MsgConvertCoinToEvmResponse,
  MsgCreateFunToken,
  MsgCreateFunTokenResponse,
  MsgEthereumTx,
  MsgEthereumTxResponse,
  MsgUpdateParams,
  MsgUpdateParamsResponse,
  MsgConvertEvmToCoin,
  MsgConvertEvmToCoinResponse,
} from "../../protojs/eth/evm/v1/tx"
import { GeneratedType } from "@cosmjs/proto-signing"

export const ETH_MSG_TYPE_URLS = {
  MsgEthereumTx: `/${MsgServiceName}EthereumTx`,
  MsgUpdateParams: `/${MsgServiceName}UpdateParams`,
  MsgCreateFunToken: `/${MsgServiceName}CreateFunToken`,
  MsgConvertCoinToEvm: `/${MsgServiceName}ConvertCoinToEvm`,
  MsgConvertEvmToCoin: `/${MsgServiceName}ConvertEvmToCoin`,
}

export const ethTypes: ReadonlyArray<[string, GeneratedType]> = [
  [ETH_MSG_TYPE_URLS.MsgEthereumTx, MsgEthereumTx],
  [ETH_MSG_TYPE_URLS.MsgUpdateParams, MsgUpdateParams],
  [ETH_MSG_TYPE_URLS.MsgCreateFunToken, MsgCreateFunToken],
  [ETH_MSG_TYPE_URLS.MsgConvertCoinToEvm, MsgConvertCoinToEvm],
  [ETH_MSG_TYPE_URLS.MsgConvertEvmToCoin, MsgConvertEvmToCoin],
]

export interface EthMsgExtension {
  ethereumTx: (body: MsgEthereumTx) => Promise<MsgEthereumTxResponse>
  updateParams: (body: MsgUpdateParams) => Promise<MsgUpdateParamsResponse>
  createFunToken: (
    body: MsgCreateFunToken
  ) => Promise<MsgCreateFunTokenResponse>
  convertCoinToEVM: (
    body: MsgConvertCoinToEvm
  ) => Promise<MsgConvertCoinToEvmResponse>
  convertEvmToCoin: (
    body: MsgConvertEvmToCoin
  ) => Promise<MsgConvertEvmToCoinResponse>
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
    convertEvmToCoin: async (body: MsgConvertEvmToCoin) =>
      queryService.ConvertEvmToCoin(MsgConvertEvmToCoin.fromPartial(body)),
  }
}
