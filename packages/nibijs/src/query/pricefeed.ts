/**
 * @fileoverview query extension for the "pricefeed" module
 */
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import * as qpb from "@nibiruchain/api/dist/pricefeed/query"
import { fromSdkDec } from "../chain"

export interface PricefeedExtension {
  pricefeed: {
    /** markets - Return the pair identifier, oracle set, and active status for
     * each trading pair. */
    markets: () => Promise<qpb.QueryMarketsResponse>

    /** oracles - Return the list of oracle addresses for a given trading pair. */
    oracles: (args: { pairId: string }) => Promise<qpb.QueryOraclesResponse>

    /** params - Show the parameters of the 'pricefeed' module */
    params: () => Promise<qpb.QueryParamsResponse>

    /** price - Return the current price for the given pair */
    price: (args: { pairId: string }) => Promise<qpb.QueryPriceResponse>

    /** prices - Return the current price for all pairs */
    prices: () => Promise<qpb.QueryPricesResponse>

    /** pricesRaw - Return the raw prices posted by each oracle for a pair.
     * These prices are have yet to be aggregated into a single representative
     * value for the pair. */
    pricesRaw: (args: { pairId: string }) => Promise<qpb.QueryRawPricesResponse>
    // TODO docs: update the description on the binary
  }
}

export function setupPricefeedExtension(base: QueryClient): PricefeedExtension {
  const rpcClient = createProtobufRpcClient(base)
  const queryService = new qpb.QueryClientImpl(rpcClient)

  return {
    pricefeed: {
      markets: async (): Promise<qpb.QueryMarketsResponse> => {
        const req = qpb.QueryMarketsRequest.fromPartial({})
        const resp = await queryService.QueryMarkets(req)
        return resp
      },
      oracles: async (args: { pairId: string }): Promise<qpb.QueryOraclesResponse> => {
        const req = qpb.QueryOraclesRequest.fromPartial({ pairId: args.pairId })
        const resp = await queryService.QueryOracles(req)
        return resp
      },
      params: async (): Promise<qpb.QueryParamsResponse> => {
        const req = qpb.QueryParamsRequest.fromPartial({})
        const resp = await queryService.QueryParams(req)
        return resp
      },
      price: async (args: { pairId: string }): Promise<qpb.QueryPriceResponse> => {
        const req = qpb.QueryPriceRequest.fromPartial({ pairId: args.pairId })
        const resp = await queryService.QueryPrice(req)
        return transformPriceResponse(resp)
      },
      prices: async (): Promise<qpb.QueryPricesResponse> => {
        const req = qpb.QueryPricesRequest.fromPartial({})
        const resp = await queryService.QueryPrices(req)
        return transformPricesResponse(resp)
      },
      pricesRaw: async (args: {
        pairId: string
      }): Promise<qpb.QueryRawPricesResponse> => {
        const req = qpb.QueryRawPricesRequest.fromPartial({ pairId: args.pairId })
        const resp: qpb.QueryRawPricesResponse = await queryService.QueryRawPrices(req)
        return transformRawPricesResponse(resp)
      },
    },
  }
}

type TransformFn<T> = (resp: T) => T

const transformPricesResponse: TransformFn<qpb.QueryPricesResponse> = (resp) => ({
  prices: resp.prices.map((currPrice: qpb.CurrentPriceResponse) => ({
    ...currPrice,
    price: fromSdkDec(currPrice.price).toString(),
    twap: fromSdkDec(currPrice.twap).toString(),
  })),
})

const transformRawPricesResponse: TransformFn<qpb.QueryRawPricesResponse> = (resp) => ({
  rawPrices: resp.rawPrices.map((rawPrice: qpb.PostedPriceResponse) => ({
    ...rawPrice,
    price: fromSdkDec(rawPrice.price).toString(),
  })),
})

const transformPriceResponse: TransformFn<qpb.QueryPriceResponse> = (resp) => ({
  price: {
    pairId: resp.price!.pairId,
    price: fromSdkDec(resp.price!.price).toString() ?? resp.price?.price,
    twap: fromSdkDec(resp.price!.twap).toString() ?? resp.price?.twap,
  },
})
