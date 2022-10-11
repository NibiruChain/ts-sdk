import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import * as vpoolquery from "@nibiruchain/api/dist/vpool/v1/query"
import * as vpoolstate from "@nibiruchain/api/dist/vpool/v1/state"
import { fromSdkDec } from "../chain"

export interface VpoolExtension {
  readonly vpool: {
    readonly allPools: () => Promise<vpoolquery.QueryAllPoolsResponse>
    readonly basePrice: (args: {
      pair: string
      goLong: boolean
      baseAssetAmount: number
    }) => Promise<vpoolquery.QueryBaseAssetPriceResponse>
  }
}

export function setupVpoolExtension(base: QueryClient): VpoolExtension {
  const rpcClient = createProtobufRpcClient(base)
  const queryService = new vpoolquery.QueryClientImpl(rpcClient)

  return {
    vpool: {
      allPools: async (): Promise<vpoolquery.QueryAllPoolsResponse> => {
        const req = vpoolquery.QueryAllPoolsRequest.fromPartial({})
        const resp: vpoolquery.QueryAllPoolsResponse = await queryService.AllPools(req)
        return transformAllPoolsResponse(resp)
      },
      basePrice: async (args: {
        pair: string
        goLong: boolean
        baseAssetAmount: number
      }) => {
        const direction: vpoolstate.Direction = args.goLong
          ? vpoolstate.Direction.ADD_TO_POOL
          : vpoolstate.Direction.REMOVE_FROM_POOL
        const req = vpoolquery.QueryBaseAssetPriceRequest.fromPartial({
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

const transformAllPoolsResponse: TransformFn<vpoolquery.QueryAllPoolsResponse> = (
  resp: vpoolquery.QueryAllPoolsResponse,
) => {
  const pools = resp.pools.map((vpool: vpoolstate.VPool) => ({
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
  const prices = resp.prices.map((pp: vpoolstate.PoolPrices) => ({
    ...pp,
    indexPrice: !(parseFloat(pp.indexPrice) == 0)
      ? fromSdkDec(pp.indexPrice).toString()
      : "",
    twapMark: fromSdkDec(pp.twapMark).toString(),
    markPrice: fromSdkDec(pp.markPrice).toString(),
  }))
  return { pools, prices }
}
