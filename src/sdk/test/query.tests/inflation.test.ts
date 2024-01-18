import { QueryClient } from "@cosmjs/stargate"
import * as query from "@/protojs/nibiru/inflation/v1/query"
import { setupInflationExtension } from "../../query"

describe("setupInflationExtension", () => {
  const mockBaseQueryClient = {} as QueryClient

  jest.spyOn(query, "QueryClientImpl").mockReturnValue({
    Period: jest.fn().mockResolvedValue({ period: "Test Period" }),
    EpochMintProvision: jest.fn().mockResolvedValue({
      epochMintProvision: "Test Epoch Mint Provision",
    }),
    SkippedEpochs: jest.fn().mockResolvedValue({
      skippedEpochs: "Test Skipped Epochs",
    }),
    CirculatingSupply: jest.fn().mockResolvedValue({
      circulatingSupply: "Test Circulating Supply",
    }),
    InflationRate: jest.fn().mockResolvedValue({
      inflationRate: "Test Inflation Rate",
    }),
    Params: jest.fn().mockResolvedValue({
      params: "Test Params",
    }),
  } as unknown as query.QueryClientImpl)

  test("should setup inflation extension correctly", () => {
    const extension = setupInflationExtension(mockBaseQueryClient)

    expect(extension.inflation).toBeDefined()
    expect(extension.inflation.period).toBeInstanceOf(Function)
    expect(extension.inflation.epochMintProvision).toBeInstanceOf(Function)
    expect(extension.inflation.skippedEpochs).toBeInstanceOf(Function)
    expect(extension.inflation.circulatingSupply).toBeInstanceOf(Function)
    expect(extension.inflation.inflationRate).toBeInstanceOf(Function)
    expect(extension.inflation.params).toBeInstanceOf(Function)
  })

  describe("inflation.period", () => {
    test("should call QueryPeriodRequest and return the response", async () => {
      const queryPeriodRequest = jest
        .spyOn(query.QueryPeriodRequest, "fromPartial")
        .mockReturnValue({} as query.QueryPeriodRequest)

      const extension = setupInflationExtension(mockBaseQueryClient)
      const result = await extension.inflation.period()

      expect(queryPeriodRequest).toHaveBeenCalledWith({})
      expect(result).toEqual({ period: "Test Period" })
    })
  })

  describe("inflation.epochMintProvision", () => {
    test("should call QueryEpochMintProvisionRequest and return the response", async () => {
      const queryEpochMintProvisionRequest = jest
        .spyOn(query.QueryEpochMintProvisionRequest, "fromPartial")
        .mockReturnValue({} as query.QueryEpochMintProvisionRequest)

      const extension = setupInflationExtension(mockBaseQueryClient)
      const result = await extension.inflation.epochMintProvision()

      expect(queryEpochMintProvisionRequest).toHaveBeenCalledWith({})
      expect(result).toEqual({
        epochMintProvision: "Test Epoch Mint Provision",
      })
    })
  })

  describe("inflation.skippedEpochs", () => {
    test("should call QuerySkippedEpochsRequest and return the response", async () => {
      const querySkippedEpochsRequest = jest
        .spyOn(query.QuerySkippedEpochsRequest, "fromPartial")
        .mockReturnValue({} as query.QuerySkippedEpochsRequest)

      const extension = setupInflationExtension(mockBaseQueryClient)
      const result = await extension.inflation.skippedEpochs()

      expect(querySkippedEpochsRequest).toHaveBeenCalledWith({})
      expect(result).toEqual({ skippedEpochs: "Test Skipped Epochs" })
    })
  })

  describe("inflation.circulatingSupply", () => {
    test("should call QueryCirculatingSupplyRequest and return the response", async () => {
      const queryCirculatingSupplyRequest = jest
        .spyOn(query.QueryCirculatingSupplyRequest, "fromPartial")
        .mockReturnValue({} as query.QueryCirculatingSupplyRequest)

      const extension = setupInflationExtension(mockBaseQueryClient)
      const result = await extension.inflation.circulatingSupply()

      expect(queryCirculatingSupplyRequest).toHaveBeenCalledWith({})
      expect(result).toEqual({ circulatingSupply: "Test Circulating Supply" })
    })
  })

  describe("inflation.inflationRate", () => {
    test("should call QueryInflationRateRequest and return the response", async () => {
      const queryInflationRateRequest = jest
        .spyOn(query.QueryInflationRateRequest, "fromPartial")
        .mockReturnValue({} as query.QueryInflationRateRequest)

      const extension = setupInflationExtension(mockBaseQueryClient)
      const result = await extension.inflation.inflationRate()

      expect(queryInflationRateRequest).toHaveBeenCalledWith({})
      expect(result).toEqual({ inflationRate: "Test Inflation Rate" })
    })
  })

  describe("inflation.params", () => {
    test("should call QueryParamsRequest and return the response", async () => {
      const queryParamsRequest = jest
        .spyOn(query.QueryParamsRequest, "fromPartial")
        .mockReturnValue({} as query.QueryParamsRequest)

      const extension = setupInflationExtension(mockBaseQueryClient)
      const result = await extension.inflation.params()

      expect(queryParamsRequest).toHaveBeenCalledWith({})
      expect(result).toEqual({ params: "Test Params" })
    })
  })
})
