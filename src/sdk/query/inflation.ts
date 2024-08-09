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
} from "../../protojs/nibiru/inflation/v1/query"

export interface InflationExtension {
  period: () => Promise<QueryPeriodResponse>
  epochMintProvision: () => Promise<QueryEpochMintProvisionResponse>
  skippedEpochs: () => Promise<QuerySkippedEpochsResponse>
  circulatingSupply: () => Promise<QueryCirculatingSupplyResponse>
  inflationRate: () => Promise<QueryInflationRateResponse>
  params: () => Promise<QueryParamsResponse>
}

export const setupInflationExtension = (
  base: QueryClient
): InflationExtension => {
  const queryService = new QueryClientImpl(createProtobufRpcClient(base))

  return {
    circulatingSupply: async () =>
      queryService.CirculatingSupply(
        QueryCirculatingSupplyRequest.fromPartial({})
      ),

    epochMintProvision: async () =>
      queryService.EpochMintProvision(
        QueryEpochMintProvisionRequest.fromPartial({})
      ),

    inflationRate: async () =>
      queryService.InflationRate(QueryInflationRateRequest.fromPartial({})),

    params: async () => queryService.Params(QueryParamsRequest.fromPartial({})),

    period: async () => queryService.Period(QueryPeriodRequest.fromPartial({})),

    skippedEpochs: async () =>
      queryService.SkippedEpochs(QuerySkippedEpochsRequest.fromPartial({})),
  }
}
