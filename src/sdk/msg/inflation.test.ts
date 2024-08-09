import { QueryClient } from "@cosmjs/stargate"
import * as query from "../../protojs/nibiru/inflation/v1/tx"
import { setupInflationMsgExtension } from "."

describe("setupEthMsgExtension", () => {
  const mockBaseQueryClient = {} as QueryClient

  jest.spyOn(query, "MsgClientImpl").mockReturnValue({
    ToggleInflation: jest.fn().mockResolvedValue({ test: "Test" }),
    EditInflationParams: jest.fn().mockResolvedValue({
      test: "Test",
    }),
  } as unknown as query.MsgClientImpl)

  test("should setup extension correctly", () => {
    const extension = setupInflationMsgExtension(mockBaseQueryClient)

    expect(extension).toBeDefined()
    expect(extension.toggleInflation).toBeInstanceOf(Function)
    expect(extension.editInflationParams).toBeInstanceOf(Function)
  })

  describe("toggleInflation", () => {
    test("should call MsgToggleInflation and return the response", async () => {
      const msgToggleInflation = jest
        .spyOn(query.MsgToggleInflation, "fromPartial")
        .mockReturnValue({} as query.MsgToggleInflation)

      const extension = setupInflationMsgExtension(mockBaseQueryClient)
      const result = await extension.toggleInflation({
        sender: "",
        enable: true,
      })
      expect(msgToggleInflation).toHaveBeenCalledWith({
        sender: "",
        enable: true,
      })
      expect(result).toEqual({ test: "Test" })
    })
  })

  describe("editInflationParams", () => {
    test("should call MsgEditInflationParams and return the response", async () => {
      const msgEditInflationParams = jest
        .spyOn(query.MsgEditInflationParams, "fromPartial")
        .mockReturnValue({} as query.MsgEditInflationParams)

      const extension = setupInflationMsgExtension(mockBaseQueryClient)
      const result = await extension.editInflationParams({
        sender: "",
        inflationEnabled: true,
        polynomialFactors: [""],
        inflationDistribution: {
          stakingRewards: "",
          communityPool: "",
          strategicReserves: "",
        },
        epochsPerPeriod: "",
        periodsPerYear: "",
        maxPeriod: "",
      })
      expect(msgEditInflationParams).toHaveBeenCalledWith({
        sender: "",
        inflationEnabled: true,
        polynomialFactors: [""],
        inflationDistribution: {
          stakingRewards: "",
          communityPool: "",
          strategicReserves: "",
        },
        epochsPerPeriod: "",
        periodsPerYear: "",
        maxPeriod: "",
      })
      expect(result).toEqual({ test: "Test" })
    })
  })
})
