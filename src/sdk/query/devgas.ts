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
  const queryService = new QueryClientImpl(createProtobufRpcClient(base))

  return {
    devgas: {
      feeShare: async (args: QueryFeeShareRequest) =>
        queryService.FeeShare(QueryFeeShareRequest.fromPartial(args)),

      feeSharesByWithdrawer: async (args: QueryFeeSharesByWithdrawerRequest) =>
        queryService.FeeSharesByWithdrawer(
          QueryFeeSharesByWithdrawerRequest.fromPartial(args)
        ),

      feeShares: async (args: QueryFeeSharesRequest) =>
        queryService.FeeShares(QueryFeeSharesRequest.fromPartial(args)),

      params: async (args: QueryParamsRequest) =>
        queryService.Params(QueryParamsRequest.fromPartial(args)),
    },
  }
}
