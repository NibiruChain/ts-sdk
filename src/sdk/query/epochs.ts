import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
  QueryClientImpl,
  QueryCurrentEpochRequest,
  QueryCurrentEpochResponse,
  QueryEpochInfosRequest,
  QueryEpochInfosResponse,
} from "../../protojs/nibiru/epochs/v1/query"

export interface EpochsExtension {
  readonly epochs: Readonly<{
    currentEpoch: (args: {
      identifier: string
    }) => Promise<QueryCurrentEpochResponse>
    epochsInfo: () => Promise<QueryEpochInfosResponse>
  }>
}

export const setupEpochsExtension = (base: QueryClient): EpochsExtension => {
  const rpcClient = createProtobufRpcClient(base)
  const queryService = new QueryClientImpl(rpcClient)

  return {
    epochs: {
      currentEpoch: async (args: { identifier: string }) => {
        const req = QueryCurrentEpochRequest.fromPartial(args)
        const resp = await queryService.CurrentEpoch(req)
        return resp
      },
      epochsInfo: async () => {
        const req = QueryEpochInfosRequest.fromPartial({})
        const resp = await queryService.EpochInfos(req)
        return resp
      },
    },
  }
}
