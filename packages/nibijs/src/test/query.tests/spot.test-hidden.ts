// import { QueryClient } from "@cosmjs/stargate"
// import * as query from "@nibiruchain/protojs/dist/nibiru/spot/v1/query"
// import { setupSpotExtension, transformPool } from "../../query"

// describe("setupSpotExtension", () => {
//   const mockBaseQueryClient = {} as QueryClient

//   jest.spyOn(query, "QueryClientImpl").mockReturnValue({
//     EstimateExitExactAmountIn: jest.fn().mockResolvedValue({
//       tokensOut: [],
//       fees: [],
//     }),
//     EstimateExitExactAmountOut: jest.fn().mockResolvedValue({
//       estimateExitExactAmountOut: {},
//     }),
//     EstimateJoinExactAmountIn: jest.fn().mockResolvedValue({
//       poolSharesOut: "",
//       remCoins: [],
//     }),
//     EstimateJoinExactAmountOut: jest.fn().mockResolvedValue({
//       estimateJoinExactAmountOut: {},
//     }),
//     EstimateSwapExactAmountIn: jest.fn().mockResolvedValue({
//       tokenOut: {},
//       fee: {},
//     }),
//     EstimateSwapExactAmountOut: jest.fn().mockResolvedValue({
//       tokenIn: {},
//     }),
//     NumPools: jest.fn().mockResolvedValue({
//       numPools: 0,
//     }),
//     Params: jest.fn().mockResolvedValue({
//       params: {
//         startingPoolNumber: 0,
//         poolCreationFee: [],
//         whitelistedAsset: [],
//       },
//     }),
//     Pool: jest.fn().mockResolvedValue({
//       pool: {
//         id: 0,
//         address: "",
//         poolParams: {},
//         poolAssets: [],
//         totalWeight: "",
//         totalShares: {},
//       },
//     }),
//     PoolNumber: jest.fn().mockResolvedValue({
//       poolId: 0,
//     }),
//     PoolParams: jest.fn().mockResolvedValue({
//       poolParams: {
//         swapFee: "",
//         exitFee: "",
//         A: "",
//         poolType: {},
//       },
//     }),
//     Pools: jest.fn().mockResolvedValue({
//       pools: [
//         {
//           id: 0,
//           address: "",
//           poolParams: {},
//           poolAssets: [],
//           totalWeight: "",
//           totalShares: {},
//         },
//       ],
//       pagination: {},
//     }),
//     SpotPrice: jest.fn().mockResolvedValue({
//       spotPrice: "",
//     }),
//     TotalLiquidity: jest.fn().mockResolvedValue({
//       liquidity: [],
//     }),
//     TotalPoolLiquidity: jest.fn().mockResolvedValue({
//       liquidity: [],
//     }),
//     TotalShares: jest.fn().mockResolvedValue({
//       totalShares: {},
//     }),
//   } as unknown as query.QueryClientImpl)

//   test("transformPool undefined", () => {
//     const result = transformPool()
//     expect(result).toBeUndefined()
//   })

//   test("should setup spot extension correctly", () => {
//     const extension = setupSpotExtension(mockBaseQueryClient)

//     expect(extension.spot).toBeDefined()
//     expect(extension.spot.estimateExitExactAmountIn).toBeInstanceOf(Function)
//     expect(extension.spot.estimateExitExactAmountOut).toBeInstanceOf(Function)
//     expect(extension.spot.estimateJoinExactAmountIn).toBeInstanceOf(Function)
//     expect(extension.spot.estimateJoinExactAmountOut).toBeInstanceOf(Function)
//     expect(extension.spot.estimateSwapExactAmountIn).toBeInstanceOf(Function)
//     expect(extension.spot.estimateSwapExactAmountOut).toBeInstanceOf(Function)
//     expect(extension.spot.numPools).toBeInstanceOf(Function)
//     expect(extension.spot.params).toBeInstanceOf(Function)
//     expect(extension.spot.pool).toBeInstanceOf(Function)
//     expect(extension.spot.poolNumber).toBeInstanceOf(Function)
//     expect(extension.spot.poolParams).toBeInstanceOf(Function)
//     expect(extension.spot.pools).toBeInstanceOf(Function)
//     expect(extension.spot.spotPrice).toBeInstanceOf(Function)
//     expect(extension.spot.totalLiquidity).toBeInstanceOf(Function)
//     expect(extension.spot.totalPoolLiquidity).toBeInstanceOf(Function)
//     expect(extension.spot.totalShares).toBeInstanceOf(Function)
//   })

//   test("estimateExitExactAmountIn should call and return the response", async () => {
//     const queryRequest = jest
//       .spyOn(query.QueryExitExactAmountInRequest, "fromPartial")
//       .mockReturnValue({} as query.QueryExitExactAmountInRequest)

//     const extension = setupSpotExtension(mockBaseQueryClient)
//     const result = await extension.spot.estimateExitExactAmountIn(0, 1)

//     expect(queryRequest).toHaveBeenCalledWith({
//       poolId: 0,
//       poolSharesIn: "1",
//     })
//     expect(result).toEqual({
//       tokensOut: [],
//       fees: [],
//     })
//   })

//   test("estimateExitExactAmountOut should call and return the response", async () => {
//     const queryRequest = jest
//       .spyOn(query.QueryExitExactAmountOutRequest, "fromPartial")
//       .mockReturnValue({} as query.QueryExitExactAmountOutRequest)

//     const extension = setupSpotExtension(mockBaseQueryClient)
//     const result = await extension.spot.estimateExitExactAmountOut(0)

//     expect(queryRequest).toHaveBeenCalledWith({
//       poolId: 0,
//     })
//     expect(result).toEqual({
//       estimateExitExactAmountOut: {},
//     })
//   })

//   test("estimateJoinExactAmountIn should call and return the response", async () => {
//     const queryRequest = jest
//       .spyOn(query.QueryJoinExactAmountInRequest, "fromPartial")
//       .mockReturnValue({} as query.QueryJoinExactAmountInRequest)

//     const extension = setupSpotExtension(mockBaseQueryClient)
//     const result = await extension.spot.estimateJoinExactAmountIn(0, [])

//     expect(queryRequest).toHaveBeenCalledWith({
//       poolId: 0,
//       tokensIn: [],
//     })
//     expect(result).toEqual({
//       poolSharesOut: "",
//       remCoins: [],
//     })
//   })

//   test("estimateJoinExactAmountOut should call and return the response", async () => {
//     const queryRequest = jest
//       .spyOn(query.QueryJoinExactAmountOutRequest, "fromPartial")
//       .mockReturnValue({} as query.QueryJoinExactAmountOutRequest)

//     const extension = setupSpotExtension(mockBaseQueryClient)
//     const result = await extension.spot.estimateJoinExactAmountOut(0)

//     expect(queryRequest).toHaveBeenCalledWith({
//       poolId: 0,
//     })
//     expect(result).toEqual({
//       estimateJoinExactAmountOut: {},
//     })
//   })

//   test("estimateSwapExactAmountIn should call and return the response", async () => {
//     const queryRequest = jest
//       .spyOn(query.QuerySwapExactAmountInRequest, "fromPartial")
//       .mockReturnValue({} as query.QuerySwapExactAmountInRequest)

//     const extension = setupSpotExtension(mockBaseQueryClient)
//     const result = await extension.spot.estimateSwapExactAmountIn(0, "")

//     expect(queryRequest).toHaveBeenCalledWith({
//       poolId: 0,
//       tokenIn: undefined,
//       tokenOutDenom: "",
//     })
//     expect(result).toEqual({
//       tokenOut: {},
//       fee: {},
//     })
//   })

//   test("estimateSwapExactAmountOut should call and return the response", async () => {
//     const queryRequest = jest
//       .spyOn(query.QuerySwapExactAmountOutRequest, "fromPartial")
//       .mockReturnValue({} as query.QuerySwapExactAmountOutRequest)

//     const extension = setupSpotExtension(mockBaseQueryClient)
//     const result = await extension.spot.estimateSwapExactAmountOut(0, "")

//     expect(queryRequest).toHaveBeenCalledWith({
//       poolId: 0,
//       tokenInDenom: "",
//     })
//     expect(result).toEqual({
//       tokenIn: {},
//     })
//   })

//   test("numPools should call and return the response", async () => {
//     const queryParamsRequest = jest
//       .spyOn(query.QueryNumPoolsRequest, "fromPartial")
//       .mockReturnValue({} as query.QueryNumPoolsRequest)

//     const extension = setupSpotExtension(mockBaseQueryClient)
//     const result = await extension.spot.numPools()

//     expect(queryParamsRequest).toHaveBeenCalledWith({})
//     expect(result).toEqual({
//       numPools: 0,
//     })
//   })

//   test("params should call and return the response", async () => {
//     const queryParamsRequest = jest
//       .spyOn(query.QueryParamsRequest, "fromPartial")
//       .mockReturnValue({} as query.QueryParamsRequest)

//     const extension = setupSpotExtension(mockBaseQueryClient)
//     const result = await extension.spot.params()

//     expect(queryParamsRequest).toHaveBeenCalledWith({})
//     expect(result).toEqual({
//       params: {
//         startingPoolNumber: 0,
//         poolCreationFee: [],
//         whitelistedAsset: [],
//       },
//     })
//   })

//   test("pool should call and return the response", async () => {
//     const queryParamsRequest = jest
//       .spyOn(query.QueryPoolRequest, "fromPartial")
//       .mockReturnValue({} as query.QueryPoolRequest)

//     const extension = setupSpotExtension(mockBaseQueryClient)
//     const result = await extension.spot.pool(0)

//     expect(queryParamsRequest).toHaveBeenCalledWith({ poolId: 0 })
//     expect(result).toEqual({
//       pool: {
//         id: 0,
//         address: "",
//         poolParams: {
//           exitFee: "0",
//           swapFee: "0",
//         },
//         poolAssets: [],
//         totalWeight: "",
//         totalShares: {},
//       },
//     })
//   })

//   test("poolNumber should call and return the response", async () => {
//     const queryParamsRequest = jest
//       .spyOn(query.QueryPoolNumberRequest, "fromPartial")
//       .mockReturnValue({} as query.QueryPoolNumberRequest)

//     const extension = setupSpotExtension(mockBaseQueryClient)
//     const result = await extension.spot.poolNumber()

//     expect(queryParamsRequest).toHaveBeenCalledWith({})
//     expect(result).toEqual({
//       poolId: 0,
//     })
//   })

//   test("poolParams should call and return the response", async () => {
//     const queryParamsRequest = jest
//       .spyOn(query.QueryPoolParamsRequest, "fromPartial")
//       .mockReturnValue({} as query.QueryPoolParamsRequest)

//     const extension = setupSpotExtension(mockBaseQueryClient)
//     const result = await extension.spot.poolParams(0)

//     expect(queryParamsRequest).toHaveBeenCalledWith({ poolId: 0 })
//     expect(result).toEqual({
//       poolParams: {
//         swapFee: "0",
//         exitFee: "0",
//         A: "",
//         poolType: {},
//       },
//     })
//   })

//   test("pools should call and return the response", async () => {
//     const queryParamsRequest = jest
//       .spyOn(query.QueryPoolsRequest, "fromPartial")
//       .mockReturnValue({} as query.QueryPoolsRequest)

//     const extension = setupSpotExtension(mockBaseQueryClient)
//     const result = await extension.spot.pools()

//     expect(queryParamsRequest).toHaveBeenCalledWith({ pagination: undefined })
//     expect(result).toEqual({
//       pools: [
//         {
//           id: 0,
//           address: "",
//           poolParams: {
//             exitFee: "0",
//             swapFee: "0",
//           },
//           poolAssets: [],
//           totalWeight: "",
//           totalShares: {},
//         },
//       ],
//       pagination: {},
//     })
//   })

//   test("spotPrice should call and return the response", async () => {
//     const queryParamsRequest = jest
//       .spyOn(query.QuerySpotPriceRequest, "fromPartial")
//       .mockReturnValue({} as query.QuerySpotPriceRequest)

//     const extension = setupSpotExtension(mockBaseQueryClient)
//     const result = await extension.spot.spotPrice(0, "", "")

//     expect(queryParamsRequest).toHaveBeenCalledWith({
//       poolId: 0,
//       tokenInDenom: "",
//       tokenOutDenom: "",
//     })
//     expect(result).toEqual({
//       spotPrice: "",
//     })
//   })

//   test("totalLiquidity should call and return the response", async () => {
//     const queryParamsRequest = jest
//       .spyOn(query.QuerySpotPriceRequest, "fromPartial")
//       .mockReturnValue({} as query.QuerySpotPriceRequest)

//     const extension = setupSpotExtension(mockBaseQueryClient)
//     const result = await extension.spot.totalLiquidity()

//     expect(queryParamsRequest).toHaveBeenCalledWith({
//       poolId: 0,
//       tokenInDenom: "",
//       tokenOutDenom: "",
//     })
//     expect(result).toEqual({
//       liquidity: [],
//     })
//   })

//   test("totalPoolLiquidity should call and return the response", async () => {
//     const queryParamsRequest = jest
//       .spyOn(query.QueryTotalPoolLiquidityRequest, "fromPartial")
//       .mockReturnValue({} as query.QueryTotalPoolLiquidityRequest)

//     const extension = setupSpotExtension(mockBaseQueryClient)
//     const result = await extension.spot.totalPoolLiquidity(0)

//     expect(queryParamsRequest).toHaveBeenCalledWith({
//       poolId: 0,
//     })
//     expect(result).toEqual({
//       liquidity: [],
//     })
//   })

//   test("totalShares should call and return the response", async () => {
//     const queryParamsRequest = jest
//       .spyOn(query.QueryTotalSharesRequest, "fromPartial")
//       .mockReturnValue({} as query.QueryTotalSharesRequest)

//     const extension = setupSpotExtension(mockBaseQueryClient)
//     const result = await extension.spot.totalShares(0)

//     expect(queryParamsRequest).toHaveBeenCalledWith({
//       poolId: 0,
//     })
//     expect(result).toEqual({
//       totalShares: {},
//     })
//   })
// })
