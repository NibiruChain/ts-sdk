import { QueryClient } from "@cosmjs/stargate"
import * as query from "../../protojs/nibiru/epochs/v1/query"
import { setupEpochsExtension } from "."

describe("setupEpochsExtension", () => {
  const mockBaseQueryClient = {} as QueryClient

  jest.spyOn(query, "QueryClientImpl").mockReturnValue({
    CurrentEpoch: jest
      .fn()
      .mockResolvedValue({ currentEpoch: "Test Current Epoch" }),
    EpochInfos: jest.fn().mockResolvedValue({
      epochsInfo: ["Test Epoch Info 1", "Test Epoch Info 2"],
    }),
  } as unknown as query.QueryClientImpl)

  test("should setup extension correctly", () => {
    const extension = setupEpochsExtension(mockBaseQueryClient)

    expect(extension).toBeDefined()
    expect(extension.currentEpoch).toBeInstanceOf(Function)
    expect(extension.epochsInfos).toBeInstanceOf(Function)
  })

  describe("epochs.currentEpoch", () => {
    test("should call QueryCurrentEpochRequest and return the response", async () => {
      const queryCurrentEpochRequest = jest
        .spyOn(query.QueryCurrentEpochRequest, "fromPartial")
        .mockReturnValue({} as query.QueryCurrentEpochRequest)

      const extension = setupEpochsExtension(mockBaseQueryClient)
      const result = await extension.currentEpoch({
        identifier: "Test Identifier",
      })
      expect(queryCurrentEpochRequest).toHaveBeenCalledWith({
        identifier: "Test Identifier",
      })
      expect(result).toEqual({ currentEpoch: "Test Current Epoch" })
    })
  })

  describe("epochs.epochsInfo", () => {
    test("should call QueryEpochInfosRequest and return the response", async () => {
      const queryEpochInfosRequest = jest
        .spyOn(query.QueryEpochInfosRequest, "fromPartial")
        .mockReturnValue({} as query.QueryEpochInfosRequest)

      const extension = setupEpochsExtension(mockBaseQueryClient)
      const result = await extension.epochsInfos()

      expect(queryEpochInfosRequest).toHaveBeenCalledWith({})
      expect(result).toEqual({
        epochsInfo: ["Test Epoch Info 1", "Test Epoch Info 2"],
      })
    })
  })
})
