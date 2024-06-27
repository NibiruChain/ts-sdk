import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
  MsgClientImpl,
  MsgEditInflationParams,
  MsgEditInflationParamsResponse,
  MsgToggleInflation,
  MsgToggleInflationResponse,
} from "src/protojs/index.nibiru.inflation.v1"

export interface InflationMsgExtension {
  readonly inflationMsg: Readonly<{
    toggleInflation: (
      body: MsgToggleInflation
    ) => Promise<MsgToggleInflationResponse>
    editInflationParams: (
      body: MsgEditInflationParams
    ) => Promise<MsgEditInflationParamsResponse>
  }>
}

export const setupInflationMsgExtension = (
  base: QueryClient
): InflationMsgExtension => {
  const queryService = new MsgClientImpl(createProtobufRpcClient(base))

  return {
    inflationMsg: {
      toggleInflation: async (body: MsgToggleInflation) =>
        queryService.ToggleInflation(MsgToggleInflation.fromPartial(body)),

      editInflationParams: async (body: MsgEditInflationParams) =>
        queryService.EditInflationParams(
          MsgEditInflationParams.fromPartial(body)
        ),
    },
  }
}
