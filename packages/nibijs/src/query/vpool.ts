import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import * as vpoolquery from "@nibiruchain/protojs/dist/vpool/v1/query"
import * as vpoolstate from "@nibiruchain/protojs/dist/vpool/v1/state"
import { fromSdkDec, fromSdkDecSafe } from "../chain"

export interface VpoolExtension {
  vpool: Readonly<{
    allPools: () => Promise<vpoolquery.QueryAllPoolsResponse>
    basePrice: (args: {
      pair: string
      goLong: boolean
      baseAssetAmount: number
    }) => Promise<vpoolquery.QueryBaseAssetPriceResponse>
  }>
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
  const pools = resp.pools.map((vpool: vpoolstate.Vpool): vpoolstate.Vpool => {
    const { config } = vpool
    return {
      // ...vpool,
      pair: vpool.pair,
      baseAssetReserve: fromSdkDec(vpool.baseAssetReserve).toString(),
      quoteAssetReserve: fromSdkDec(vpool.quoteAssetReserve).toString(),
      config: config
        ? {
            tradeLimitRatio: fromSdkDec(config.tradeLimitRatio).toString(),
            fluctuationLimitRatio: fromSdkDec(config.fluctuationLimitRatio).toString(),
            maxOracleSpreadRatio: fromSdkDec(config.maxOracleSpreadRatio).toString(),
            maintenanceMarginRatio: fromSdkDec(
              config.maintenanceMarginRatio,
            ).toString(),
            maxLeverage: fromSdkDec(config.maxLeverage).toString(),
          }
        : undefined,
    }
  })

  const prices = resp.prices.map((pp: vpoolstate.PoolPrices) => ({
    ...pp,
    indexPrice: fromSdkDecSafe(pp.indexPrice).toString(),
    twapMark: fromSdkDecSafe(pp.twapMark).toString(),
    markPrice: fromSdkDec(pp.markPrice).toString(),
  }))
  return { pools, prices }
}
