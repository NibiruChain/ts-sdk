import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import * as epochsquery from "@nibiruchain/protojs/dist/epochs/query"
import * as epochsstate from "@nibiruchain/protojs/dist/epochs/state"
import { fromSdkDec } from "../chain"

export interface EpochsExtension {
  readonly epochs: {
    readonly currentEpoch: (args: {
      identifier: string
    }) => Promise<epochsquery.QueryCurrentEpochResponse>
    readonly epochsInfo: () => Promise<epochsquery.QueryEpochsInfoResponse>
  }
}

export function setupEpochsExtension(base: QueryClient): EpochsExtension {
  const rpcClient = createProtobufRpcClient(base)
  const queryService = new epochsquery.QueryClientImpl(rpcClient)

  return {
    epochs: {
      currentEpoch: async (args: { identifier: string }) => {
        const req = epochsquery.QueryCurrentEpochRequest.fromPartial(args)
        const resp = await queryService.CurrentEpoch(req)
        return resp
      },
      epochsInfo: async () => {
        const req = epochsquery.QueryEpochsInfoRequest.fromPartial({})
        const resp = await queryService.EpochInfos(req)
        return resp
      },
    },
  }
}
