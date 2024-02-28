import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
  QueryClientImpl,
  QueryFeeShareRequest,
  QueryFeeShareResponse,
  QueryFeeSharesByWithdrawerRequest,
  QueryFeeSharesByWithdrawerResponse,
  QueryFeeSharesRequest,
  QueryFeeSharesResponse,
  QueryParamsRequest,
  QueryParamsResponse,
} from "../../protojs/nibiru/devgas/v1/query"

export interface DevgasExtension {
  readonly devgas: Readonly<{
    feeShare: (args: QueryFeeShareRequest) => Promise<QueryFeeShareResponse>
    feeSharesByWithdrawer: (
      args: QueryFeeSharesByWithdrawerRequest
    ) => Promise<QueryFeeSharesByWithdrawerResponse>
    feeShares: (args: QueryFeeSharesRequest) => Promise<QueryFeeSharesResponse>
    params: (args: QueryParamsRequest) => Promise<QueryParamsResponse>
  }>
}

export const setupDevgasExtension = (base: QueryClient): DevgasExtension => {
  const rpcClient = createProtobufRpcClient(base)
  const queryService = new QueryClientImpl(rpcClient)

  return {
    devgas: {
      feeShare: async (args: QueryFeeShareRequest) => {
        const req = QueryFeeShareRequest.fromPartial(args)
        const resp = await queryService.FeeShare(req)
        return resp
      },
      feeSharesByWithdrawer: async (
        args: QueryFeeSharesByWithdrawerRequest
      ) => {
        const req = QueryFeeSharesByWithdrawerRequest.fromPartial(args)
        const resp = await queryService.FeeSharesByWithdrawer(req)
        return resp
      },
      feeShares: async (args: QueryFeeSharesRequest) => {
        const req = QueryFeeSharesRequest.fromPartial(args)
        const resp = await queryService.FeeShares(req)
        return resp
      },
      params: async (args: QueryParamsRequest) => {
        const req = QueryParamsRequest.fromPartial(args)
        const resp = await queryService.Params(req)
        return resp
      },
    },
  }
}
