import Long from "long"
import { QueryClient } from "@cosmjs/stargate"
import * as query from "../../protojs/nibiru/oracle/v1/query"
import { fromSdkDec, setupOracleExtension } from ".."

describe("setupOracleExtension", () => {
  const mockBaseQueryClient = {} as QueryClient
  const mockActivesResponse: query.QueryActivesResponse = { actives: [] }
  const mockAggregatePrevoteResponse: query.QueryAggregatePrevoteResponse = {
    aggregatePrevote: {
      hash: "HASH",
      voter: "VOTER",
      submitBlock: Long.fromNumber(100000),
    },
  }
  const mockAggregateVoteResponse: query.QueryAggregateVoteResponse = {
    aggregateVote: {
      exchangeRateTuples: [{ pair: "USD", exchangeRate: "132" }],
      voter: "VOTER",
    },
  }
  const mockAggregateVotesResponse: query.QueryAggregateVotesResponse = {
    aggregateVotes: [
      {
        exchangeRateTuples: [{ pair: "USD", exchangeRate: "132" }],
        voter: "VOTER",
      },
    ],
  }
  const mockAggregatePrevotesResponse: query.QueryAggregatePrevotesResponse = {
    aggregatePrevotes: [
      {
        hash: "HASH",
        voter: "VOTER",
        submitBlock: Long.fromNumber(100000),
      },
    ],
  }
  const mockExchangeRateResponse: query.QueryExchangeRateResponse = {
    exchangeRate: "123",
  }
  const mockExchangeRate = fromSdkDec(mockExchangeRateResponse.exchangeRate)
  const mockExchangeRatesResponse: query.QueryExchangeRatesResponse = {
    exchangeRates: [{ pair: "USD", exchangeRate: "132" }],
  }
  const mockFeederDelegationResponse: query.QueryFeederDelegationResponse = {
    feederAddr: "feeder-address",
  }
  const mockMissCounterResponse: query.QueryMissCounterResponse = {
    missCounter: Long.fromNumber(12143),
  }
  const mockParamsResponse: query.QueryParamsResponse = { params: undefined }
  const mockVoteTargetsResponse: query.QueryVoteTargetsResponse = {
    voteTargets: ["USD"],
  }

  test("should setup oracle extension correctly", () => {
    const extension = setupOracleExtension(mockBaseQueryClient)

    expect(extension.oracle).toBeDefined()
    expect(extension.oracle.actives).toBeInstanceOf(Function)
    expect(extension.oracle.aggregatePrevote).toBeInstanceOf(Function)
    expect(extension.oracle.aggregatePrevotes).toBeInstanceOf(Function)
    expect(extension.oracle.aggregateVote).toBeInstanceOf(Function)
    expect(extension.oracle.aggregateVotes).toBeInstanceOf(Function)
    expect(extension.oracle.exchangeRate).toBeInstanceOf(Function)
    expect(extension.oracle.exchangeRates).toBeInstanceOf(Function)
    expect(extension.oracle.feeder).toBeInstanceOf(Function)
    expect(extension.oracle.missCount).toBeInstanceOf(Function)
    expect(extension.oracle.params).toBeInstanceOf(Function)
    expect(extension.oracle.voteTargets).toBeInstanceOf(Function)
  })

  jest.spyOn(query, "QueryClientImpl").mockReturnValue({
    Actives: jest.fn().mockResolvedValue(mockActivesResponse),
    AggregatePrevote: jest.fn().mockResolvedValue(mockAggregatePrevoteResponse),
    AggregatePrevotes: jest
      .fn()
      .mockResolvedValue(mockAggregatePrevotesResponse),
    AggregateVote: jest.fn().mockResolvedValue(mockAggregateVoteResponse),
    AggregateVotes: jest.fn().mockResolvedValue(mockAggregateVotesResponse),
    ExchangeRate: jest.fn().mockResolvedValue(mockExchangeRateResponse),
    ExchangeRates: jest.fn().mockResolvedValue(mockExchangeRatesResponse),
    FeederDelegation: jest.fn().mockResolvedValue(mockFeederDelegationResponse),
    MissCounter: jest.fn().mockResolvedValue(mockMissCounterResponse),
    Params: jest.fn().mockResolvedValue(mockParamsResponse),
    VoteTargets: jest.fn().mockResolvedValue(mockVoteTargetsResponse),
  } as unknown as query.QueryClientImpl)

  describe("oracle.actives", () => {
    test("should call QueryActivesRequest and return the response", async () => {
      const queryActiveRequest = jest
        .spyOn(query.QueryActivesRequest, "fromPartial")
        .mockReturnValue({} as query.QueryActivesRequest)

      const extension = setupOracleExtension(mockBaseQueryClient)
      const result = await extension.oracle.actives()

      expect(queryActiveRequest).toHaveBeenCalledWith({})
      expect(result).toEqual(mockActivesResponse)
    })
  })

  describe("oracle.aggregatePrevote", () => {
    test("should call QueryAggregatePrevoteRequest and return the response", async () => {
      const queryAggregatePrevoteRequest = jest
        .spyOn(query.QueryAggregatePrevoteRequest, "fromPartial")
        .mockReturnValue({} as query.QueryAggregatePrevoteRequest)

      const extension = setupOracleExtension(mockBaseQueryClient)
      const result = await extension.oracle.aggregatePrevote("1234567")

      expect(queryAggregatePrevoteRequest).toHaveBeenCalledWith({
        validatorAddr: "1234567",
      })
      expect(result).toEqual(mockAggregatePrevoteResponse.aggregatePrevote)
    })
  })

  describe("oracle.aggregatePrevotes", () => {
    test("should call QueryAggregatePrevotesRequest and return the response", async () => {
      const queryAggregatePrevotesRequest = jest
        .spyOn(query.QueryAggregatePrevotesRequest, "fromPartial")
        .mockReturnValue({} as query.QueryAggregatePrevotesRequest)

      const extension = setupOracleExtension(mockBaseQueryClient)
      const result = await extension.oracle.aggregatePrevotes()

      expect(queryAggregatePrevotesRequest).toHaveBeenCalledWith({})
      expect(result).toEqual(mockAggregatePrevotesResponse.aggregatePrevotes)
    })
  })

  describe("oracle.aggregateVote", () => {
    test("should call QueryAggregatePrevoteRequest and return the response", async () => {
      const queryAggregateVoteRequest = jest
        .spyOn(query.QueryAggregateVoteRequest, "fromPartial")
        .mockReturnValue({} as query.QueryAggregateVoteRequest)

      const extension = setupOracleExtension(mockBaseQueryClient)
      const result = await extension.oracle.aggregateVote("1234567")

      expect(queryAggregateVoteRequest).toHaveBeenCalledWith({
        validatorAddr: "1234567",
      })
      expect(result).toEqual(mockAggregateVoteResponse.aggregateVote)
    })
  })

  describe("oracle.aggregateVotes", () => {
    test("should call QueryAggregatePrevoteRequest and return the response", async () => {
      const queryAggregateVotesRequest = jest
        .spyOn(query.QueryAggregateVotesRequest, "fromPartial")
        .mockReturnValue({} as query.QueryAggregateVotesRequest)

      const extension = setupOracleExtension(mockBaseQueryClient)
      const result = await extension.oracle.aggregateVotes()

      expect(queryAggregateVotesRequest).toHaveBeenCalledWith({})
      expect(result).toEqual(mockAggregateVotesResponse.aggregateVotes)
    })
  })

  describe("oracle.exchangeRate", () => {
    test("should call QueryExchangeRateRequest and return the response", async () => {
      const queryExchangeRateRequest = jest
        .spyOn(query.QueryExchangeRateRequest, "fromPartial")
        .mockReturnValue({} as query.QueryExchangeRateRequest)

      const extension = setupOracleExtension(mockBaseQueryClient)
      const result = await extension.oracle.exchangeRate("PAIR")

      expect(queryExchangeRateRequest).toHaveBeenCalledWith({ pair: "PAIR" })
      expect(result).toEqual(mockExchangeRate)
    })
  })

  describe("oracle.exchangeRates", () => {
    test("should call QueryExchangeRatesRequest and return the response", async () => {
      const queryExchangeRatesRequest = jest
        .spyOn(query.QueryExchangeRatesRequest, "fromPartial")
        .mockReturnValue({} as query.QueryExchangeRatesRequest)

      const extension = setupOracleExtension(mockBaseQueryClient)
      const result = await extension.oracle.exchangeRates()

      expect(queryExchangeRatesRequest).toHaveBeenCalledWith({})
      expect(result).toEqual({ USD: 1.32e-16 })
    })
  })

  describe("oracle.feeder", () => {
    test("should call QueryFeederDelegationRequest and return the response", async () => {
      const queryFeederDelegationRequest = jest
        .spyOn(query.QueryFeederDelegationRequest, "fromPartial")
        .mockReturnValue({} as query.QueryFeederDelegationRequest)

      const extension = setupOracleExtension(mockBaseQueryClient)
      const result = await extension.oracle.feeder("oracle")

      expect(queryFeederDelegationRequest).toHaveBeenCalledWith({})
      expect(result).toEqual(mockFeederDelegationResponse.feederAddr)
    })
  })

  describe("oracle.missCount", () => {
    test("should call QueryMissCounterRequest and return the response", async () => {
      const queryMissCounterRequest = jest
        .spyOn(query.QueryMissCounterRequest, "fromPartial")
        .mockReturnValue({} as query.QueryMissCounterRequest)

      const extension = setupOracleExtension(mockBaseQueryClient)
      const result = await extension.oracle.missCount("oracle")

      expect(queryMissCounterRequest).toHaveBeenCalledWith({})
      expect(result).toEqual(mockMissCounterResponse.missCounter.toNumber())
    })
  })

  describe("oracle.params", () => {
    test("should call QueryParamsRequest and return the response", async () => {
      const queryParamsRequest = jest
        .spyOn(query.QueryParamsRequest, "fromPartial")
        .mockReturnValue({} as query.QueryParamsRequest)

      const extension = setupOracleExtension(mockBaseQueryClient)
      const result = await extension.oracle.params()

      expect(queryParamsRequest).toHaveBeenCalledWith({})
      expect(result).toEqual(mockParamsResponse)
    })
  })

  describe("oracle.voteTargets", () => {
    test("should call QueryVoteTargetsRequest and return the response", async () => {
      const queryVoteTargetsRequest = jest
        .spyOn(query.QueryVoteTargetsRequest, "fromPartial")
        .mockReturnValue({} as query.QueryVoteTargetsRequest)

      const extension = setupOracleExtension(mockBaseQueryClient)
      const result = await extension.oracle.voteTargets()

      expect(queryVoteTargetsRequest).toHaveBeenCalledWith({})
      expect(result).toEqual(mockVoteTargetsResponse.voteTargets)
    })
  })
})
