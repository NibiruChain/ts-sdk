import { QueryClient } from "@cosmjs/stargate"
import * as query from "../../protojs/nibiru/oracle/v1/tx"
import { setupOracleMsgExtension } from "."

describe("setupEthMsgExtension", () => {
  const mockBaseQueryClient = {} as QueryClient

  jest.spyOn(query, "MsgClientImpl").mockReturnValue({
    AggregateExchangeRatePrevote: jest.fn().mockResolvedValue({ test: "Test" }),
    AggregateExchangeRateVote: jest.fn().mockResolvedValue({
      test: "Test",
    }),
    DelegateFeedConsent: jest.fn().mockResolvedValue({
      test: "Test",
    }),
    EditOracleParams: jest.fn().mockResolvedValue({
      test: "Test",
    }),
  } as unknown as query.MsgClientImpl)

  test("should setup extension correctly", () => {
    const extension = setupOracleMsgExtension(mockBaseQueryClient)

    expect(extension).toBeDefined()
    expect(extension.aggregateExchangeRatePrevote).toBeInstanceOf(Function)
    expect(extension.aggregateExchangeRateVote).toBeInstanceOf(Function)
    expect(extension.delegateFeedConsent).toBeInstanceOf(Function)
    expect(extension.editOracleParams).toBeInstanceOf(Function)
  })

  describe("aggregateExchangeRatePrevote", () => {
    test("should call MsgAggregateExchangeRatePrevote and return the response", async () => {
      const msgAggregateExchangeRatePrevote = jest
        .spyOn(query.MsgAggregateExchangeRatePrevote, "fromPartial")
        .mockReturnValue({} as query.MsgAggregateExchangeRatePrevote)

      const extension = setupOracleMsgExtension(mockBaseQueryClient)
      const result = await extension.aggregateExchangeRatePrevote({
        hash: "",
        feeder: "",
        validator: "",
      })
      expect(msgAggregateExchangeRatePrevote).toHaveBeenCalledWith({
        hash: "",
        feeder: "",
        validator: "",
      })
      expect(result).toEqual({ test: "Test" })
    })
  })

  describe("aggregateExchangeRateVote", () => {
    test("should call MsgAggregateExchangeRateVote and return the response", async () => {
      const msgAggregateExchangeRateVote = jest
        .spyOn(query.MsgAggregateExchangeRateVote, "fromPartial")
        .mockReturnValue({} as query.MsgAggregateExchangeRateVote)

      const extension = setupOracleMsgExtension(mockBaseQueryClient)
      const result = await extension.aggregateExchangeRateVote({
        salt: "",
        exchangeRates: "",
        feeder: "",
        validator: "",
      })
      expect(msgAggregateExchangeRateVote).toHaveBeenCalledWith({
        salt: "",
        exchangeRates: "",
        feeder: "",
        validator: "",
      })
      expect(result).toEqual({ test: "Test" })
    })
  })

  describe("delegateFeedConsent", () => {
    test("should call MsgDelegateFeedConsent and return the response", async () => {
      const msgDelegateFeedConsent = jest
        .spyOn(query.MsgDelegateFeedConsent, "fromPartial")
        .mockReturnValue({} as query.MsgDelegateFeedConsent)

      const extension = setupOracleMsgExtension(mockBaseQueryClient)
      const result = await extension.delegateFeedConsent({
        operator: "",
        delegate: "",
      })
      expect(msgDelegateFeedConsent).toHaveBeenCalledWith({
        operator: "",
        delegate: "",
      })
      expect(result).toEqual({ test: "Test" })
    })
  })

  describe("editOracleParams", () => {
    test("should call MsgEditOracleParams and return the response", async () => {
      const msgEditOracleParams = jest
        .spyOn(query.MsgEditOracleParams, "fromPartial")
        .mockReturnValue({} as query.MsgEditOracleParams)

      const extension = setupOracleMsgExtension(mockBaseQueryClient)
      const result = await extension.editOracleParams({
        sender: "",
        votePeriod: "",
        voteThreshold: "",
        rewardBand: "",
        whitelist: [""],
        slashFraction: "",
        slashWindow: "",
        minValidPerWindow: "",
        twapLookbackWindow: "",
        minVoters: "",
        validatorFeeRatio: "",
      })
      expect(msgEditOracleParams).toHaveBeenCalledWith({
        sender: "",
        votePeriod: "",
        voteThreshold: "",
        rewardBand: "",
        whitelist: [""],
        slashFraction: "",
        slashWindow: "",
        minValidPerWindow: "",
        twapLookbackWindow: "",
        minVoters: "",
        validatorFeeRatio: "",
      })
      expect(result).toEqual({ test: "Test" })
    })
  })
})
