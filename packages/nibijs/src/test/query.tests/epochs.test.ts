import { QueryClient } from "@cosmjs/stargate"
import * as query from "@nibiruchain/protojs/src/nibiru/epochs/v1/query"
import { setupEpochsExtension } from "../../query"

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

  test("should setup epochs extension correctly", () => {
    const extension = setupEpochsExtension(mockBaseQueryClient)

    expect(extension.epochs).toBeDefined()
    expect(extension.epochs.currentEpoch).toBeInstanceOf(Function)
    expect(extension.epochs.epochsInfo).toBeInstanceOf(Function)
  })

  describe("epochs.currentEpoch", () => {
    test("should call QueryCurrentEpochRequest and return the response", async () => {
      const queryCurrentEpochRequest = jest
        .spyOn(query.QueryCurrentEpochRequest, "fromPartial")
        .mockReturnValue({} as query.QueryCurrentEpochRequest)

      const extension = setupEpochsExtension(mockBaseQueryClient)
      const result = await extension.epochs.currentEpoch({
        identifier: "Test Identifier",
      })
      expect(queryCurrentEpochRequest).toHaveBeenCalledWith({
        identifier: "Test Identifier",
      })
      expect(result).toEqual({ currentEpoch: "Test Current Epoch" })
    })
  })

  describe("epochs.epochsInfo", () => {
    test("should call QueryEpochsInfoRequest and return the response", async () => {
      const queryEpochsInfoRequest = jest
        .spyOn(query.QueryEpochsInfoRequest, "fromPartial")
        .mockReturnValue({} as query.QueryEpochsInfoRequest)

      const extension = setupEpochsExtension(mockBaseQueryClient)
      const result = await extension.epochs.epochsInfo()

      expect(queryEpochsInfoRequest).toHaveBeenCalledWith({})
      expect(result).toEqual({
        epochsInfo: ["Test Epoch Info 1", "Test Epoch Info 2"],
      })
    })
  })
})
