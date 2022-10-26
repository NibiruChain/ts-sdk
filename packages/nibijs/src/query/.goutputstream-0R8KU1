/**
 * @fileoverview query extension for the "pricefeed" module
 */
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import * as pricefeedquery from "@nibiruchain/protojs/dist/pricefeed/query"
import { fromSdkDec } from "../chain"

export interface PricefeedExtension {
  pricefeed: {
    /** markets - Return the pair identifier, oracle set, and active status for
     * each trading pair. */
    markets: () => Promise<pricefeedquery.QueryMarketsResponse>

    /** oracles - Return the list of oracle addresses for a given trading pair. */
    oracles: (args: { pairId: string }) => Promise<pricefeedquery.QueryOraclesResponse>

    /** params - Show the parameters of the 'pricefeed' module */
    params: () => Promise<pricefeedquery.QueryParamsResponse>

    /** price - Return the current price for the given pair */
    price: (args: { pairId: string }) => Promise<pricefeedquery.QueryPriceResponse>

    /** prices - Return the current price for all pairs */
    prices: () => Promise<pricefeedquery.QueryPricesResponse>

    /** pricesRaw - Return the raw prices posted by each oracle for a pair.
     * These prices are have yet to be aggregated into a single representative
     * value for the pair. */
    pricesRaw: (args: {
      pairId: string
    }) => Promise<pricefeedquery.QueryRawPricesResponse>
    // TODO docs: update the description on the binary
  }
}

export function setupPricefeedExtension(base: QueryClient): PricefeedExtension {
  const rpcClient = createProtobufRpcClient(base)
  const queryService = new pricefeedquery.QueryClientImpl(rpcClient)

  return {
    pricefeed: {
      markets: async (): Promise<pricefeedquery.QueryMarketsResponse> => {
        const req = pricefeedquery.QueryMarketsRequest.fromPartial({})
        const resp = await queryService.QueryMarkets(req)
        return resp
      },
      oracles: async (args: {
        pairId: string
      }): Promise<pricefeedquery.QueryOraclesResponse> => {
        const req = pricefeedquery.QueryOraclesRequest.fromPartial({
          pairId: args.pairId,
        })
        const resp = await queryService.QueryOracles(req)
        return resp
      },
      params: async (): Promise<pricefeedquery.QueryParamsResponse> => {
        const req = pricefeedquery.QueryParamsRequest.fromPartial({})
        const resp = await queryService.QueryParams(req)
        return resp
      },
      price: async (args: {
        pairId: string
      }): Promise<pricefeedquery.QueryPriceResponse> => {
        const req = pricefeedquery.QueryPriceRequest.fromPartial({
          pairId: args.pairId,
        })
        const resp = await queryService.QueryPrice(req)
        return transformPriceResponse(resp)
      },
      prices: async (): Promise<pricefeedquery.QueryPricesResponse> => {
        const req = pricefeedquery.QueryPricesRequest.fromPartial({})
        const resp = await queryService.QueryPrices(req)
        return transformPricesResponse(resp)
      },
      pricesRaw: async (args: {
        pairId: string
      }): Promise<pricefeedquery.QueryRawPricesResponse> => {
        const req = pricefeedquery.QueryRawPricesRequest.fromPartial({
          pairId: args.pairId,
        })
        const resp: pricefeedquery.QueryRawPricesResponse =
          await queryService.QueryRawPrices(req)
        return transformRawPricesResponse(resp)
      },
    },
  }
}

type TransformFn<T> = (resp: T) => T

const transformPricesResponse: TransformFn<pricefeedquery.QueryPricesResponse> = (
  resp,
) => ({
  prices: resp.prices.map((currPrice: pricefeedquery.CurrentPriceResponse) => ({
    ...currPrice,
    price: fromSdkDec(currPrice.price).toString(),
    twap: fromSdkDec(currPrice.twap).toString(),
  })),
})

const transformRawPricesResponse: TransformFn<pricefeedquery.QueryRawPricesResponse> = (
  resp,
) => ({
  rawPrices: resp.rawPrices.map((rawPrice: pricefeedquery.PostedPriceResponse) => ({
    ...rawPrice,
    price: fromSdkDec(rawPrice.price).toString(),
  })),
})

const transformPriceResponse: TransformFn<pricefeedquery.QueryPriceResponse> = (
  resp,
) => ({
  price: {
    pairId: resp.price!.pairId,
    price: fromSdkDec(resp.price!.price).toString() ?? resp.price?.price,
    twap: fromSdkDec(resp.price!.twap).toString() ?? resp.price?.twap,
  },
})
