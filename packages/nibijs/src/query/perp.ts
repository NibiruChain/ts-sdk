import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import * as perpquery from "@nibiruchain/protojs/dist/perp/v1/query"
import * as perpstate from "@nibiruchain/protojs/dist/perp/v1/state"
import * as perpevent from "@nibiruchain/protojs/dist/perp/v1/event"
import { fromSdkDec } from "../chain"

function transformPosition(
  resp: perpquery.QueryPositionResponse,
): perpquery.QueryPositionResponse {
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

function transformPositions(
  resp: perpquery.QueryPositionsResponse,
): perpquery.QueryPositionsResponse {
  const { positions } = resp
  resp.positions = positions.map((position: perpquery.QueryPositionResponse) =>
    transformPosition(position),
  )
  return resp
}

function transformParams(pbParams?: perpstate.Params): perpstate.Params | undefined {
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
    readonly params: () => Promise<perpquery.QueryParamsResponse>
    readonly position: (args: {
      tokenPair: string
      trader: string
    }) => Promise<perpquery.QueryPositionResponse>
    readonly positions: (args: {
      trader: string
    }) => Promise<perpquery.QueryPositionsResponse>
  }
}

export function setupPerpExtension(base: QueryClient): PerpExtension {
  const rpcClient = createProtobufRpcClient(base)
  const queryService = new perpquery.QueryClientImpl(rpcClient)

  return {
    perp: {
      params: async () => {
        const req = perpquery.QueryParamsRequest.fromPartial({})
        const resp = await queryService.Params(req)
        resp.params = transformParams(resp.params)
        return resp
      },
      position: async (args: { tokenPair: string; trader: string }) => {
        const req = perpquery.QueryPositionRequest.fromPartial(args)
        const resp = await queryService.QueryPosition(req)
        return transformPosition(resp)
      },
      positions: async (args: { trader: string }) => {
        const req = perpquery.QueryPositionsRequest.fromPartial(args)
        const resp = await queryService.QueryPositions(req)
        return transformPositions(resp)
      },
    },
  }
}
