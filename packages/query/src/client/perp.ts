import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import * as qpb from "@nibiruchain/api/src/perp/v1/query"
import * as pbs from "@nibiruchain/api/src/perp/v1/state"
import { fromSdkDec } from "@nibiruchain/common/src/utils"

function transformTraderPosition(
  r: qpb.QueryTraderPositionResponse,
): qpb.QueryTraderPositionResponse {
  const { positionNotional: pn, unrealizedPnl: upnl, marginRatio: mr } = r
  r.positionNotional = fromSdkDec(pn).toString()
  r.unrealizedPnl = fromSdkDec(upnl).toString()
  r.marginRatio = fromSdkDec(mr).toString()
  return r
}

function transformParams(p?: pbs.Params): pbs.Params | undefined {
  if (!p) {
    return p
  }
  return {
    ...p,
    maintenanceMarginRatio: fromSdkDec(p.maintenanceMarginRatio).toString(),
    feePoolFeeRatio: fromSdkDec(p.maintenanceMarginRatio).toString(),
    ecosystemFundFeeRatio: fromSdkDec(p.ecosystemFundFeeRatio).toString(),
    liquidationFeeRatio: fromSdkDec(p.liquidationFeeRatio).toString(),
    partialLiquidationRatio: fromSdkDec(p.partialLiquidationRatio).toString(),
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
        const resp = await queryService.TraderPosition(req)
        return transformTraderPosition(resp)
      },
    },
  }
}
