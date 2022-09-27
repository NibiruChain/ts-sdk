import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import * as qpb from "@nibiruchain/api/dist/vpool/v1/query"
import * as pbvpool from "@nibiruchain/api/dist/vpool/v1/vpool"
import { fromSdkDec } from "../chain"

export interface VpoolExtension {
  readonly vpool: {
    readonly allPools: () => Promise<qpb.QueryAllPoolsResponse>
    readonly basePrice: (args: {
      pair: string
      goLong: boolean
      baseAssetAmount: number
    }) => Promise<qpb.QueryBaseAssetPriceResponse>
  }
}

export function setupVpoolExtension(base: QueryClient): VpoolExtension {
  const rpcClient = createProtobufRpcClient(base)
  const queryService = new qpb.QueryClientImpl(rpcClient)

  return {
    vpool: {
      allPools: async (): Promise<qpb.QueryAllPoolsResponse> => {
        const req = qpb.QueryAllPoolsRequest.fromPartial({})
        const resp: qpb.QueryAllPoolsResponse = await queryService.AllPools(req)
        return transformAllPoolsResponse(resp)
      },
      basePrice: async (args: {
        pair: string
        goLong: boolean
        baseAssetAmount: number
      }) => {
        const direction: pbvpool.Direction = args.goLong
          ? pbvpool.Direction.ADD_TO_POOL
          : pbvpool.Direction.REMOVE_FROM_POOL
        const req = qpb.QueryBaseAssetPriceRequest.fromPartial({
          pair: args.pair,
          direction,
          baseAssetAmount: args.baseAssetAmount.toString(),
        })
        const resp = await queryService.BaseAssetPrice(req)
        return resp
      },
    },
  }
}

type TransformFn<T> = (resp: T) => T

const transformAllPoolsResponse: TransformFn<qpb.QueryAllPoolsResponse> = (resp) => {
  const pools = resp.pools.map((vpool: pbvpool.Pool) => ({
    ...vpool,
    pair: vpool.pair,
    baseAssetReserve: fromSdkDec(vpool.baseAssetReserve).toString(),
    quoteAssetReserve: fromSdkDec(vpool.quoteAssetReserve).toString(),
    tradeLimitRatio: fromSdkDec(vpool.tradeLimitRatio).toString(),
    fluctuationLimitRatio: fromSdkDec(vpool.fluctuationLimitRatio).toString(),
    maxOracleSpreadRatio: fromSdkDec(vpool.maxOracleSpreadRatio).toString(),
    maintenanceMarginRatio: fromSdkDec(vpool.maintenanceMarginRatio).toString(),
    maxLeverage: fromSdkDec(vpool.maxLeverage).toString(),
  }))
  const prices = resp.prices.map((pp: pbvpool.PoolPrices) => ({
    ...pp,
    indexPrice: !(parseFloat(pp.indexPrice) == 0)
      ? fromSdkDec(pp.indexPrice).toString()
      : "",
    twapMark: fromSdkDec(pp.twapMark).toString(),
    markPrice: fromSdkDec(pp.markPrice).toString(),
  }))
  return { pools, prices }
}
