import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import * as qpb from "@nibiruchain/api/src/dex/v1/query"
import { PageRequest, Coin, fromSdkDec } from "@nibiruchain/common"
import * as pbPool from "@nibiruchain/api/src/dex/v1/pool"

function transformPoolParams(pp?: pbPool.PoolParams): pbPool.PoolParams | undefined {
  if (pp) {
    pp.swapFee = fromSdkDec(pp?.swapFee).toString()
    pp.exitFee = fromSdkDec(pp?.exitFee).toString()
  }
  return pp
}

function transformPool(p?: pbPool.Pool): pbPool.Pool | undefined {
  if (!p) {
    return p
  }
  p.poolParams = transformPoolParams(p.poolParams)
  return p
}

export interface DexExtension {
  readonly dex: {
    readonly params: () => Promise<qpb.QueryParamsResponse>
    readonly poolNumber: () => Promise<qpb.QueryPoolNumberResponse>
    readonly pool: (poolId: number) => Promise<qpb.QueryPoolResponse>
    readonly pools: (pagination?: PageRequest) => Promise<qpb.QueryPoolsResponse>
    readonly poolParams: (poolId: number) => Promise<qpb.QueryPoolParamsResponse>
    readonly numPools: () => Promise<qpb.QueryNumPoolsResponse>
    readonly totalLiquidity: () => Promise<qpb.QueryTotalLiquidityResponse>
    readonly totalPoolLiquidity: (
      poolId: number,
    ) => Promise<qpb.QueryTotalPoolLiquidityResponse>
    readonly totalShares: (poolId: number) => Promise<qpb.QueryTotalSharesResponse>
    readonly spotPrice: (
      poolId: number,
      tokenInDenom: string,
      tokenOutDenom: string,
    ) => Promise<qpb.QuerySpotPriceResponse>
    readonly estimateSwapExactAmountIn: (
      poolId: number,
      tokeOutDenom: string,
      tokenIn?: Coin,
    ) => Promise<qpb.QuerySwapExactAmountInResponse>
    readonly estimateSwapExactAmountOut: (
      poolId: number,
      tokenInDenom: string,
      tokenOut?: Coin,
    ) => Promise<qpb.QuerySwapExactAmountOutResponse>
    readonly estimateJoinExactAmountIn: (
      poolId: number,
      tokensIn: Coin[],
    ) => Promise<qpb.QueryJoinExactAmountInResponse>
    readonly estimateJoinExactAmountOut: (
      poolId: number,
    ) => Promise<qpb.QueryJoinExactAmountOutResponse>
    readonly estimateExitExactAmountIn: (
      poolId: number,
      poolSharesIn: number,
    ) => Promise<qpb.QueryExitExactAmountInResponse>
    readonly estimateExitExactAmountOut: (
      poolId: number,
    ) => Promise<qpb.QueryExitExactAmountOutResponse>
  }
}

export function setupDexExtension(base: QueryClient): DexExtension {
  const rpcClient = createProtobufRpcClient(base)
  const queryService = new qpb.QueryClientImpl(rpcClient)

  return {
    dex: {
      params: () => {
        const req = qpb.QueryParamsRequest.fromPartial({})
        return queryService.Params(req)
      },
      poolNumber: () => {
        const req = qpb.QueryPoolNumberRequest.fromPartial({})
        return queryService.PoolNumber(req)
      },
      pool: async (poolId: number) => {
        const req = qpb.QueryPoolRequest.fromPartial({ poolId })
        const resp = await queryService.Pool(req)
        resp.pool = transformPool(resp.pool)
        return resp
      },
      pools: async (pagination?: PageRequest) => {
        const req = qpb.QueryPoolsRequest.fromPartial({ pagination })
        const resp = await queryService.Pools(req)
        resp.pools = resp.pools.map((p) => transformPool(p)!)
        return resp
      },
      poolParams: async (poolId: number) => {
        const req = qpb.QueryPoolParamsRequest.fromPartial({ poolId })
        const resp = await queryService.PoolParams(req)
        resp.poolParams = transformPoolParams(resp.poolParams)
        return resp
      },
      numPools: () => {
        const req = qpb.QueryNumPoolsRequest.fromPartial({})
        return queryService.NumPools(req)
      },
      totalLiquidity: () => {
        const req = qpb.QueryTotalLiquidityRequest.fromPartial({})
        return queryService.TotalLiquidity(req)
      },
      totalPoolLiquidity: (poolId: number) => {
        const req = qpb.QueryTotalPoolLiquidityRequest.fromPartial({
          poolId,
        })
        return queryService.TotalPoolLiquidity(req)
      },
      totalShares: (poolId: number) => {
        const req = qpb.QueryTotalSharesRequest.fromPartial({ poolId })
        return queryService.TotalShares(req)
      },
      spotPrice: (poolId: number, tokenInDenom: string, tokenOutDenom: string) => {
        const req = qpb.QuerySpotPriceRequest.fromPartial({
          poolId,
          tokenInDenom,
          tokenOutDenom,
        })
        return queryService.SpotPrice(req)
      },
      estimateSwapExactAmountIn: (
        poolId: number,
        tokenOutDenom: string,
        tokenIn?: Coin,
      ) => {
        const req = qpb.QuerySwapExactAmountInRequest.fromPartial({
          poolId,
          tokenOutDenom,
          tokenIn,
        })
        return queryService.EstimateSwapExactAmountIn(req)
      },
      estimateSwapExactAmountOut: (
        poolId: number,
        tokenInDenom: string,
        tokenOut?: Coin,
      ) => {
        const req = qpb.QuerySwapExactAmountOutRequest.fromPartial({
          poolId,
          tokenInDenom,
          tokenOut,
        })
        return queryService.EstimateSwapExactAmountOut(req)
      },
      estimateJoinExactAmountIn: (poolId: number, tokensIn: Coin[]) => {
        const req = qpb.QueryJoinExactAmountInRequest.fromPartial({
          poolId,
          tokensIn,
        })
        return queryService.EstimateJoinExactAmountIn(req)
      },
      estimateJoinExactAmountOut: (poolId: number) => {
        const req = qpb.QueryJoinExactAmountOutRequest.fromPartial({
          poolId,
        })
        return queryService.EstimateJoinExactAmountOut(req)
      },
      estimateExitExactAmountIn: (poolId: number, poolSharesIn: number) => {
        const req = qpb.QueryExitExactAmountInRequest.fromPartial({
          poolId,
          poolSharesIn: poolSharesIn.toString(),
        })
        return queryService.EstimateExitExactAmountIn(req)
      },
      estimateExitExactAmountOut: (poolId: number) => {
        const req = qpb.QueryExitExactAmountOutRequest.fromPartial({
          poolId,
        })
        return queryService.EstimateExitExactAmountOut(req)
      },
    },
  }
}
