import { QueryClient } from "@cosmjs/stargate"
import * as query from "@nibiruchain/protojs/src/nibiru/perp/v2/query"
import { setupPerpExtension } from "../../query"

describe("setupPerpExtension", () => {
  const mockBaseQueryClient = {} as QueryClient

  test("should setup perp extension correctly", () => {
    const extension = setupPerpExtension(mockBaseQueryClient)

    expect(extension.perp).toBeDefined()
    expect(extension.perp.moduleAccounts).toBeInstanceOf(Function)
    expect(extension.perp.position).toBeInstanceOf(Function)
    expect(extension.perp.positions).toBeInstanceOf(Function)
    expect(extension.perp.markets).toBeInstanceOf(Function)
  })

  jest.spyOn(query, "QueryClientImpl").mockReturnValue({
    QueryPosition: jest.fn().mockResolvedValue({
      positionNotional: "100",
      unrealizedPnl: "50",
      marginRatio: "5",
    }),
    QueryPositions: jest.fn().mockResolvedValue({
      positions: [
        {
          positionNotional: "100",
          unrealizedPnl: "50",
          marginRatio: "5",
        },
        {
          positionNotional: "200",
          unrealizedPnl: "100",
          marginRatio: "75",
        },
      ],
    }),
    ModuleAccounts: jest.fn().mockResolvedValue({
      moduleAccounts: ["Test Account 1", "Test Account 2"],
    }),
    QueryMarkets: jest.fn().mockResolvedValue({}),
  } as unknown as query.QueryClientImpl)

  describe("perp.moduleAccounts", () => {
    test("should call QueryModuleAccountsRequest and return the response", async () => {
      const queryModuleAccountsRequest = jest
        .spyOn(query.QueryModuleAccountsRequest, "fromPartial")
        .mockReturnValue({} as query.QueryModuleAccountsRequest)

      const extension = setupPerpExtension(mockBaseQueryClient)
      const result = await extension.perp.moduleAccounts()

      expect(queryModuleAccountsRequest).toHaveBeenCalledWith({})
      expect(result).toEqual({
        moduleAccounts: ["Test Account 1", "Test Account 2"],
      })
    })
  })

  describe("perp.position", () => {
    test("should call QueryPositionRequest, transform the response, and return it", async () => {
      const queryPositionRequest = jest
        .spyOn(query.QueryPositionRequest, "fromPartial")
        .mockReturnValue({} as query.QueryPositionRequest)

      const extension = setupPerpExtension(mockBaseQueryClient)
      const result = await extension.perp.position({
        pair: "Test Pair",
        trader: "Test Trader",
      })

      expect(queryPositionRequest).toHaveBeenCalledWith({
        pair: "Test Pair",
        trader: "Test Trader",
      })
      expect(result).toEqual({
        marginRatio: "5e-18",
        positionNotional: "1e-16",
        unrealizedPnl: "5e-17",
      })
    })
  })

  describe("perp.positions", () => {
    test("should call QueryPositionsRequest, transform the response, and return it", async () => {
      const queryPositionsRequest = jest
        .spyOn(query.QueryPositionsRequest, "fromPartial")
        .mockReturnValue({} as query.QueryPositionsRequest)

      const extension = setupPerpExtension(mockBaseQueryClient)
      const result = await extension.perp.positions({ trader: "Test Trader" })

      expect(queryPositionsRequest).toHaveBeenCalledWith({
        trader: "Test Trader",
      })

      expect(result).toEqual({
        positions: [
          {
            positionNotional: "1e-16",
            unrealizedPnl: "5e-17",
            marginRatio: "5e-18",
          },
          {
            positionNotional: "2e-16",
            unrealizedPnl: "1e-16",
            marginRatio: "7.5e-17",
          },
        ],
      })
    })
  })

  describe("perp.markets", () => {
    test("should call QueryMarketsRequest and return the response", async () => {
      const queryMarketsRequest = jest
        .spyOn(query.QueryMarketsRequest, "fromPartial")
        .mockReturnValue({} as query.QueryMarketsRequest)

      const extension = setupPerpExtension(mockBaseQueryClient)
      const result = await extension.perp.markets()

      expect(queryMarketsRequest).toHaveBeenCalledWith({})
      expect(result).toEqual({})
    })
  })
})
