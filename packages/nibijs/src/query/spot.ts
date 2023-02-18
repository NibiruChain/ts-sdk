import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import * as pb from "@nibiruchain/protojs/dist/spot/v1/pool"
import * as qpb from "@nibiruchain/protojs/dist/spot/v1/query"
import { Coin, fromSdkDec } from "../chain"

function transformPoolParams(pp?: pb.PoolParams): pb.PoolParams | undefined {
  if (pp) {
    pp.swapFee = fromSdkDec(pp?.swapFee).toString()
    pp.exitFee = fromSdkDec(pp?.exitFee).toString()
  }
  return pp
}

function transformPool(p?: pb.Pool): pb.Pool | undefined {
  if (!p) {
    return p
  }
  p.poolParams = transformPoolParams(p.poolParams)
  return p
}

export interface SpotExtension {
  spot: Readonly<{
    params: () => Promise<qpb.QueryParamsResponse>
    poolNumber: () => Promise<qpb.QueryPoolNumberResponse>
    pool: (poolId: number) => Promise<qpb.QueryPoolResponse>
    pools: (pagination?: PageRequest) => Promise<qpb.QueryPoolsResponse>
    poolParams: (poolId: number) => Promise<qpb.QueryPoolParamsResponse>
    numPools: () => Promise<qpb.QueryNumPoolsResponse>
    totalLiquidity: () => Promise<qpb.QueryTotalLiquidityResponse>
    totalPoolLiquidity: (poolId: number) => Promise<qpb.QueryTotalPoolLiquidityResponse>
    totalShares: (poolId: number) => Promise<qpb.QueryTotalSharesResponse>
    spotPrice: (
      poolId: number,
      tokenInDenom: string,
      tokenOutDenom: string,
    ) => Promise<qpb.QuerySpotPriceResponse>
    estimateSwapExactAmountIn: (
      poolId: number,
      tokeOutDenom: string,
      tokenIn?: Coin,
    ) => Promise<qpb.QuerySwapExactAmountInResponse>
    estimateSwapExactAmountOut: (
      poolId: number,
      tokenInDenom: string,
      tokenOut?: Coin,
    ) => Promise<qpb.QuerySwapExactAmountOutResponse>
    estimateJoinExactAmountIn: (
      poolId: number,
      tokensIn: Coin[],
    ) => Promise<qpb.QueryJoinExactAmountInResponse>
    estimateJoinExactAmountOut: (
      poolId: number,
    ) => Promise<qpb.QueryJoinExactAmountOutResponse>
    estimateExitExactAmountIn: (
      poolId: number,
      poolSharesIn: number,
    ) => Promise<qpb.QueryExitExactAmountInResponse>
    estimateExitExactAmountOut: (
      poolId: number,
    ) => Promise<qpb.QueryExitExactAmountOutResponse>
  }>
}

export function setupSpotExtension(base: QueryClient): SpotExtension {
  const rpcClient = createProtobufRpcClient(base)
  const queryService = new qpb.QueryClientImpl(rpcClient)

  return {
    spot: {
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

/**
 * An offset pagination request.
 *
 * Pagination is the process of dividing a document into discrete pages.
 * Pagination in the context of API requests resembles this process.
 *
 * @export
 * @interface PageRequest
 * @typedef {PageRequest}
 */
export interface PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   */
  key: Uint8Array
  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   */
  offset: number
  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   */
  limit: number
  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  countTotal: boolean
  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse: boolean
}
