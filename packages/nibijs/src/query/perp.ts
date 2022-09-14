import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import * as qpb from "@nibiruchain/api/dist/perp/v1/query"
import * as pbs from "@nibiruchain/api/dist/perp/v1/state"
import { fromSdkDec } from "../common"

function transformTraderPosition(
  resp: qpb.QueryTraderPositionResponse,
): qpb.QueryTraderPositionResponse {
  const {
    positionNotional: pn,
    unrealizedPnl: upnl,
    marginRatioMark: mr,
    marginRatioIndex: mri,
  } = resp
  resp.positionNotional = fromSdkDec(pn).toString()
  resp.unrealizedPnl = fromSdkDec(upnl).toString()
  resp.marginRatioMark = fromSdkDec(mr).toString()
  resp.marginRatioIndex = fromSdkDec(mri).toString()
  return resp
}

function transformParams(pbParams?: pbs.Params): pbs.Params | undefined {
  if (!pbParams) {
    return pbParams
  }
  return {
    ...pbParams,
    feePoolFeeRatio: fromSdkDec(pbParams.feePoolFeeRatio).toString(),
    ecosystemFundFeeRatio: fromSdkDec(pbParams.ecosystemFundFeeRatio).toString(),
    liquidationFeeRatio: fromSdkDec(pbParams.liquidationFeeRatio).toString(),
    partialLiquidationRatio: fromSdkDec(pbParams.partialLiquidationRatio).toString(),
  }
}

export interface PerpExtension {
  readonly perp: {
    readonly params: () => Promise<qpb.QueryParamsResponse>
    readonly traderPosition: (args: {
      tokenPair: string
      trader: string
    }) => Promise<qpb.QueryTraderPositionResponse>
  }
}

export function setupPerpExtension(base: QueryClient): PerpExtension {
  const rpcClient = createProtobufRpcClient(base)
  const queryService = new qpb.QueryClientImpl(rpcClient)

  return {
    perp: {
      params: async () => {
        const req = qpb.QueryParamsRequest.fromPartial({})
        const resp = await queryService.Params(req)
        resp.params = transformParams(resp.params)
        return resp
      },
      traderPosition: async (args: { tokenPair: string; trader: string }) => {
        const req = qpb.QueryTraderPositionRequest.fromPartial(args)
        const resp = await queryService.QueryTraderPosition(req)
        return transformTraderPosition(resp)
      },
    },
  }
}
