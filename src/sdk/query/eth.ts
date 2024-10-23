import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
  EstimateGasResponse,
  EthCallRequest,
  QueryBalanceRequest,
  QueryBalanceResponse,
  QueryBaseFeeRequest,
  QueryBaseFeeResponse,
  QueryClientImpl,
  QueryCodeRequest,
  QueryCodeResponse,
  QueryEthAccountRequest,
  QueryEthAccountResponse,
  QueryFunTokenMappingRequest,
  QueryFunTokenMappingResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryStorageRequest,
  QueryStorageResponse,
  QueryTraceBlockRequest,
  QueryTraceBlockResponse,
  QueryTraceTxRequest,
  QueryTraceTxResponse,
  QueryValidatorAccountRequest,
  QueryValidatorAccountResponse,
} from "../../protojs/eth/evm/v1/query"
import { MsgEthereumTxResponse } from "../../protojs/eth/evm/v1/tx"

export interface EthExtension {
  ethAccount: (args: QueryEthAccountRequest) => Promise<QueryEthAccountResponse>
  validatorAccount: (
    args: QueryValidatorAccountRequest
  ) => Promise<QueryValidatorAccountResponse>
  balance: (args: QueryBalanceRequest) => Promise<QueryBalanceResponse>
  storage: (args: QueryStorageRequest) => Promise<QueryStorageResponse>
  code: (args: QueryCodeRequest) => Promise<QueryCodeResponse>
  params: (args: QueryParamsRequest) => Promise<QueryParamsResponse>
  ethCall: (args: EthCallRequest) => Promise<MsgEthereumTxResponse>
  estimateGas: (args: EthCallRequest) => Promise<EstimateGasResponse>
  traceTx: (args: QueryTraceTxRequest) => Promise<QueryTraceTxResponse>
  traceBlock: (args: QueryTraceBlockRequest) => Promise<QueryTraceBlockResponse>
  traceCall: (args: QueryTraceTxRequest) => Promise<QueryTraceTxResponse>
  baseFee: (args: QueryBaseFeeRequest) => Promise<QueryBaseFeeResponse>
  funTokenMapping: (
    request: QueryFunTokenMappingRequest
  ) => Promise<QueryFunTokenMappingResponse>
}

export const setupEthExtension = (base: QueryClient): EthExtension => {
  const queryService = new QueryClientImpl(createProtobufRpcClient(base))

  return {
    ethAccount: async (args: QueryEthAccountRequest) =>
      queryService.EthAccount(QueryEthAccountRequest.fromPartial(args)),

    validatorAccount: async (args: QueryValidatorAccountRequest) =>
      queryService.ValidatorAccount(
        QueryValidatorAccountRequest.fromPartial(args)
      ),

    balance: async (args: QueryBalanceRequest) =>
      queryService.Balance(QueryBalanceRequest.fromPartial(args)),

    storage: async (args: QueryStorageRequest) =>
      queryService.Storage(QueryStorageRequest.fromPartial(args)),

    code: async (args: QueryCodeRequest) =>
      queryService.Code(QueryCodeRequest.fromPartial(args)),

    params: async (args: QueryParamsRequest) =>
      queryService.Params(QueryParamsRequest.fromPartial(args)),

    ethCall: async (args: EthCallRequest) =>
      queryService.EthCall(EthCallRequest.fromPartial(args)),

    estimateGas: async (args: EthCallRequest) =>
      queryService.EstimateGas(EthCallRequest.fromPartial(args)),

    traceTx: async (args: QueryTraceTxRequest) =>
      queryService.TraceTx(QueryTraceTxRequest.fromPartial(args)),

    traceBlock: async (args: QueryTraceBlockRequest) =>
      queryService.TraceBlock(QueryTraceBlockRequest.fromPartial(args)),

    traceCall: async (args: QueryTraceTxRequest) =>
      queryService.TraceCall(QueryTraceTxRequest.fromPartial(args)),

    baseFee: async (args: QueryBaseFeeRequest) =>
      queryService.BaseFee(QueryBaseFeeRequest.fromPartial(args)),

    funTokenMapping: async (args: QueryFunTokenMappingRequest) =>
      queryService.FunTokenMapping(
        QueryFunTokenMappingRequest.fromPartial(args)
      ),
  }
}
