import { QueryClient } from "@cosmjs/stargate"
import * as query from "../../protojs/nibiru/tokenfactory/v1/query"
import { setupTokenFactoryExtension } from "."

describe("setupTokenFactoryExtension", () => {
  const mockBaseQueryClient = {} as QueryClient

  jest.spyOn(query, "QueryClientImpl").mockReturnValue({
    DenomInfo: jest.fn().mockResolvedValue({ denomInfo: ["Test 1", "Test 2"] }),
    Denoms: jest.fn().mockResolvedValue({ denoms: ["Test 1", "Test 2"] }),
    Params: jest.fn().mockResolvedValue({ params: ["Test 1", "Test 2"] }),
  } as unknown as query.QueryClientImpl)

  test("should setup extension correctly", () => {
    const extension = setupTokenFactoryExtension(mockBaseQueryClient)

    expect(extension).toBeDefined()
    expect(extension.denomInfo).toBeInstanceOf(Function)
    expect(extension.denoms).toBeInstanceOf(Function)
    expect(extension.params).toBeInstanceOf(Function)
  })

  describe("tokenFactory.denomInfo", () => {
    test("should call QueryDenomInfoRequest and return the response", async () => {
      const queryDenomInfoRequest = jest
        .spyOn(query.QueryDenomInfoRequest, "fromPartial")
        .mockReturnValue({} as query.QueryDenomInfoRequest)

      const extension = setupTokenFactoryExtension(mockBaseQueryClient)
      const result = await extension.denomInfo({ denom: "PAIR" })

      expect(queryDenomInfoRequest).toHaveBeenCalledWith({ denom: "PAIR" })
      expect(result).toEqual({ denomInfo: ["Test 1", "Test 2"] })
    })
  })

  test("should call QueryDenomsRequest and return the response", async () => {
    const queryDenomsRequest = jest
      .spyOn(query.QueryDenomsRequest, "fromPartial")
      .mockReturnValue({} as query.QueryDenomsRequest)

    const extension = setupTokenFactoryExtension(mockBaseQueryClient)
    const result = await extension.denoms({ creator: "" })

    expect(queryDenomsRequest).toHaveBeenCalledWith({ creator: "" })
    expect(result).toEqual({ denoms: ["Test 1", "Test 2"] })
  })

  test("should call QueryParamsRequest and return the response", async () => {
    const queryParamsRequest = jest
      .spyOn(query.QueryParamsRequest, "fromPartial")
      .mockReturnValue({} as query.QueryParamsRequest)

    const extension = setupTokenFactoryExtension(mockBaseQueryClient)
    const result = await extension.params({})

    expect(queryParamsRequest).toHaveBeenCalledWith({})
    expect(result).toEqual({ params: ["Test 1", "Test 2"] })
  })
})
