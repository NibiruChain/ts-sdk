import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import * as epochquery from "@nibiruchain/protojs/dist/epochs/query"
import * as epochstate from "@nibiruchain/protojs/dist/epochs/state"
import { fromSdkDec } from "../chain"

export interface EpochExtension {
  readonly epoch: {
    readonly currentEpoch: (args: {
      identifier: string
    }) => Promise<epochquery.QueryCurrentEpochResponse>
    readonly epochsInfo: (args: {}) => Promise<epochquery.QueryEpochsInfoResponse>
  }
}

export function setupEpochExtension(base: QueryClient): EpochExtension {
  const rpcClient = createProtobufRpcClient(base)
  const queryService = new epochquery.QueryClientImpl(rpcClient)

  return {
    epoch: {
      currentEpoch: async (args: { identifier: string }) => {
        const req = epochquery.QueryCurrentEpochRequest.fromPartial(args)
        const resp = await queryService.CurrentEpoch(req)
        return resp
      },
      epochsInfo: async (args: {}) => {
        const req = epochquery.QueryEpochsInfoRequest.fromPartial(args)
        const resp = await queryService.EpochInfos(req)
        return resp
      },
    },
  }
}
