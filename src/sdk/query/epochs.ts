import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
  QueryClientImpl,
  QueryCurrentEpochRequest,
  QueryCurrentEpochResponse,
  QueryEpochInfosRequest,
  QueryEpochInfosResponse,
} from "../../protojs/nibiru/epochs/v1/query"

export interface EpochsExtension {
  currentEpoch: (
    body: QueryCurrentEpochRequest
  ) => Promise<QueryCurrentEpochResponse>
  epochsInfos: () => Promise<QueryEpochInfosResponse>
}

export const setupEpochsExtension = (base: QueryClient): EpochsExtension => {
  const queryService = new QueryClientImpl(createProtobufRpcClient(base))

  return {
    currentEpoch: async (body: QueryCurrentEpochRequest) =>
      queryService.CurrentEpoch(QueryCurrentEpochRequest.fromPartial(body)),

    epochsInfos: async () =>
      queryService.EpochInfos(QueryEpochInfosRequest.fromPartial({})),
  }
}
