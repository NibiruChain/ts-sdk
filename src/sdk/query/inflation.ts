import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
  QueryCirculatingSupplyRequest,
  QueryCirculatingSupplyResponse,
  QueryClientImpl,
  QueryEpochMintProvisionRequest,
  QueryEpochMintProvisionResponse,
  QueryInflationRateRequest,
  QueryInflationRateResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryPeriodRequest,
  QueryPeriodResponse,
  QuerySkippedEpochsRequest,
  QuerySkippedEpochsResponse,
} from "@/protojs/nibiru/inflation/v1/query"

export interface InflationExtension {
  readonly inflation: Readonly<{
    period: () => Promise<QueryPeriodResponse>
    epochMintProvision: () => Promise<QueryEpochMintProvisionResponse>
    skippedEpochs: () => Promise<QuerySkippedEpochsResponse>
    circulatingSupply: () => Promise<QueryCirculatingSupplyResponse>
    inflationRate: () => Promise<QueryInflationRateResponse>
    params: () => Promise<QueryParamsResponse>
  }>
}

export const setupInflationExtension = (
  base: QueryClient
): InflationExtension => {
  const rpcClient = createProtobufRpcClient(base)
  const queryService = new QueryClientImpl(rpcClient)

  return {
    inflation: {
      period: async () => {
        const req = QueryPeriodRequest.fromPartial({})
        const resp = await queryService.Period(req)
        return resp
      },
      epochMintProvision: async () => {
        const req = QueryEpochMintProvisionRequest.fromPartial({})
        const resp = await queryService.EpochMintProvision(req)
        return resp
      },
      skippedEpochs: async () => {
        const req = QuerySkippedEpochsRequest.fromPartial({})
        const resp = await queryService.SkippedEpochs(req)
        return resp
      },
      circulatingSupply: async () => {
        const req = QueryCirculatingSupplyRequest.fromPartial({})
        const resp = await queryService.CirculatingSupply(req)
        return resp
      },
      inflationRate: async () => {
        const req = QueryInflationRateRequest.fromPartial({})
        const resp = await queryService.InflationRate(req)
        return resp
      },
      params: async () => {
        const req = QueryParamsRequest.fromPartial({})
        const resp = await queryService.Params(req)
        return resp
      },
    },
  }
}
