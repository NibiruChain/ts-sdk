import { QueryClient } from "@cosmjs/stargate"
import * as query from "../../protojs/nibiru/devgas/v1/query"
import { setupDevgasExtension } from "."

describe("setupDevgasExtension", () => {
  const mockBaseQueryClient = {} as QueryClient

  jest.spyOn(query, "QueryClientImpl").mockReturnValue({
    FeeShare: jest.fn().mockResolvedValue({ feeShare: "Test" }),
    FeeSharesByWithdrawer: jest
      .fn()
      .mockResolvedValue({ feeSharesByWithdrawer: "Test" }),
    FeeShares: jest.fn().mockResolvedValue({ feeShares: "Test" }),
    Params: jest.fn().mockResolvedValue({ params: "Test" }),
  } as unknown as query.QueryClientImpl)

  test("should setup extension correctly", () => {
    const extension = setupDevgasExtension(mockBaseQueryClient)

    expect(extension).toBeDefined()
    expect(extension.feeShare).toBeInstanceOf(Function)
    expect(extension.feeSharesByWithdrawer).toBeInstanceOf(Function)
    expect(extension.feeShares).toBeInstanceOf(Function)
    expect(extension.params).toBeInstanceOf(Function)
  })

  describe("devgas.feeShare", () => {
    test("should call QueryFeeShareRequest and return the response", async () => {
      const queryFeeShareRequest = jest
        .spyOn(query.QueryFeeShareRequest, "fromPartial")
        .mockReturnValue({} as query.QueryFeeShareRequest)

      const extension = setupDevgasExtension(mockBaseQueryClient)
      const result = await extension.feeShare({ contractAddress: "" })
      expect(queryFeeShareRequest).toHaveBeenCalledWith({
        contractAddress: "",
      })
      expect(result).toEqual({ feeShare: "Test" })
    })
  })

  describe("devgas.feeSharesByWithdrawer", () => {
    test("should call QueryFeeSharesByWithdrawerRequest and return the response", async () => {
      const queryFeeSharesByWithdrawerRequest = jest
        .spyOn(query.QueryFeeSharesByWithdrawerRequest, "fromPartial")
        .mockReturnValue({} as query.QueryFeeSharesByWithdrawerRequest)

      const extension = setupDevgasExtension(mockBaseQueryClient)
      const result = await extension.feeSharesByWithdrawer({
        withdrawerAddress: "",
      })
      expect(queryFeeSharesByWithdrawerRequest).toHaveBeenCalledWith({
        withdrawerAddress: "",
      })
      expect(result).toEqual({ feeSharesByWithdrawer: "Test" })
    })
  })

  describe("devgas.feeShares", () => {
    test("should call QueryFeeSharesRequest and return the response", async () => {
      const queryFeeSharesRequest = jest
        .spyOn(query.QueryFeeSharesRequest, "fromPartial")
        .mockReturnValue({} as query.QueryFeeSharesRequest)

      const extension = setupDevgasExtension(mockBaseQueryClient)
      const result = await extension.feeShares({
        deployer: "",
      })
      expect(queryFeeSharesRequest).toHaveBeenCalledWith({
        deployer: "",
      })
      expect(result).toEqual({ feeShares: "Test" })
    })
  })

  describe("devgas.params", () => {
    test("should call QueryParamsRequest and return the response", async () => {
      const queryParamsRequest = jest
        .spyOn(query.QueryParamsRequest, "fromPartial")
        .mockReturnValue({} as query.QueryParamsRequest)

      const extension = setupDevgasExtension(mockBaseQueryClient)
      const result = await extension.params({})
      expect(queryParamsRequest).toHaveBeenCalledWith({})
      expect(result).toEqual({ params: "Test" })
    })
  })
})
