import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
  QueryClientImpl,
  QueryMarketsRequest,
  QueryMarketsResponse,
  QueryModuleAccountsRequest,
  QueryModuleAccountsResponse,
  QueryPositionRequest,
  QueryPositionResponse,
  QueryPositionsRequest,
  QueryPositionsResponse,
} from "@nibiruchain/protojs/dist/nibiru/perp/v2/query"
import { fromSdkDec } from "../chain"

function transformPosition(resp: QueryPositionResponse): QueryPositionResponse {
  const { positionNotional: pn, unrealizedPnl: upnl, marginRatio: mr } = resp
  resp.positionNotional = fromSdkDec(pn).toString()
  resp.unrealizedPnl = fromSdkDec(upnl).toString()
  resp.marginRatio = fromSdkDec(mr).toString()
  return resp
}

export interface PerpExtension {
  perp: Readonly<{
    moduleAccounts: () => Promise<QueryModuleAccountsResponse>
    position: (args: {
      pair: string
      trader: string
    }) => Promise<QueryPositionResponse>
    positions: (args: { trader: string }) => Promise<QueryPositionsResponse>
    markets: () => Promise<QueryMarketsResponse>
  }>
}

export function setupPerpExtension(base: QueryClient): PerpExtension {
  const rpcClient = createProtobufRpcClient(base)
  const queryService = new QueryClientImpl(rpcClient)

  return {
    perp: {
      moduleAccounts: async (): Promise<QueryModuleAccountsResponse> => {
        const req = QueryModuleAccountsRequest.fromPartial({})
        const resp = await queryService.ModuleAccounts(req)
        return resp
      },
      position: async (args: { pair: string; trader: string }) => {
        const req = QueryPositionRequest.fromPartial(args)
        const resp = await queryService.QueryPosition(req)
        return transformPosition(resp)
      },
      positions: async (args: { trader: string }) => {
        const req = QueryPositionsRequest.fromPartial(args)
        const resp = await queryService.QueryPositions(req)

        function transformPositions(
          resp: QueryPositionsResponse
        ): QueryPositionsResponse {
          const { positions } = resp
          resp.positions = positions.map((position: QueryPositionResponse) =>
            transformPosition(position)
          )
          return resp
        }

        return transformPositions(resp)
      },
      markets: async () => {
        const req = QueryMarketsRequest.fromPartial({})
        const resp = queryService.QueryMarkets(req)
        return resp
      },
    },
  }
}
