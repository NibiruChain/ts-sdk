/**
 * @fileoverview query extension for the "oracle" module
 */
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
  QueryActivesRequest,
  QueryActivesResponse,
  QueryAggregatePrevoteRequest,
  QueryAggregatePrevoteResponse,
  QueryAggregatePrevotesRequest,
  QueryAggregatePrevotesResponse,
  QueryAggregateVoteRequest,
  QueryAggregateVoteResponse,
  QueryAggregateVotesRequest,
  QueryAggregateVotesResponse,
  QueryClientImpl as OracleQueryQueryClientImpl,
  QueryExchangeRateRequest,
  QueryExchangeRateResponse,
  QueryExchangeRatesRequest,
  QueryExchangeRatesResponse,
  QueryFeederDelegationRequest,
  QueryFeederDelegationResponse,
  QueryMissCounterRequest,
  QueryMissCounterResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryVoteTargetsRequest,
  QueryVoteTargetsResponse,
} from "../../protojs/nibiru/oracle/v1/query"
import { fromSdkDec } from ".."

export interface OracleExtension {
  /** actives: Query the list of active/whitelisted pairs for the oracle module. */
  actives: () => Promise<QueryActivesResponse>
  /** aggregatePrevote: TODO Query outstanding oracle aggregate prevotes. */
  aggregatePrevote: (
    body: QueryAggregatePrevoteRequest
  ) => Promise<QueryAggregatePrevoteResponse>
  /** aggregatePrevotes: TODO Query all aggregate prevotes. */
  aggregatePrevotes: () => Promise<QueryAggregatePrevotesResponse>

  /** aggregateVote: TODO Query outstanding oracle aggregate vote. */
  aggregateVote: (
    body: QueryAggregateVoteRequest
  ) => Promise<QueryAggregateVoteResponse>

  /** aggregateVotes: TODO Query all aggregate votes. */
  aggregateVotes: () => Promise<QueryAggregateVotesResponse>

  /** exchangeRate: Returns the  current exchange rate that validators voted
   * for on the given 'pair'. */
  exchangeRate: (
    body: QueryExchangeRateRequest
  ) => Promise<QueryExchangeRateResponse>

  /** exchangeRate: Returns the  current exchange rate that validators voted
   * for on the given 'pair'. */
  exchangeRateTwap: (
    body: QueryExchangeRateRequest
  ) => Promise<QueryExchangeRateResponse>

  /** TODO Query all exchange rates. */
  exchangeRates: () => Promise<QueryExchangeRatesResponse>

  /** feederDelegation: Query for the feeder account to which the validator has
   * delegated the authority to vote on exchange rotes prices. */
  feederDelegation: (
    body: QueryFeederDelegationRequest
  ) => Promise<QueryFeederDelegationResponse>

  /** TODO Query the miss count of a validator */
  missCounter: (
    body: QueryMissCounterRequest
  ) => Promise<QueryMissCounterResponse>

  /** params: Returns the module parameters for the x/oracle module. */
  params: () => Promise<QueryParamsResponse>

  /** voteTargets: Returns current vote targets, the list of pairs that
   * everyone should vote on in the during the vote period. */
  voteTargets: () => Promise<QueryVoteTargetsResponse>
}

export interface ExchangeRatesMap {
  [pair: string]: number
}

export const newExchangeRatesMap = (resp: QueryExchangeRatesResponse) => {
  const ratesMap: ExchangeRatesMap = {}
  resp.exchangeRates.forEach((exchangeRateTuple) => {
    const { exchangeRate, pair } = exchangeRateTuple
    ratesMap[pair] = fromSdkDec(exchangeRate)
  })
  return ratesMap
}

export const setupOracleExtension = (base: QueryClient): OracleExtension => {
  const queryService = new OracleQueryQueryClientImpl(
    createProtobufRpcClient(base)
  )

  return {
    actives: async () =>
      queryService.Actives(QueryActivesRequest.fromPartial({})),

    aggregatePrevote: async (body: QueryAggregatePrevoteRequest) =>
      queryService.AggregatePrevote(
        QueryAggregatePrevoteRequest.fromPartial(body)
      ),

    aggregatePrevotes: async () =>
      queryService.AggregatePrevotes(
        QueryAggregatePrevotesRequest.fromPartial({})
      ),

    aggregateVote: async (body: QueryAggregateVoteRequest) =>
      queryService.AggregateVote(QueryAggregateVoteRequest.fromPartial(body)),

    aggregateVotes: async () =>
      queryService.AggregateVotes(QueryAggregateVotesRequest.fromPartial({})),

    exchangeRate: async (body: QueryExchangeRateRequest) =>
      queryService.ExchangeRate(QueryExchangeRateRequest.fromPartial(body)),

    exchangeRateTwap: async (body: QueryExchangeRateRequest) =>
      queryService.ExchangeRateTwap(QueryExchangeRateRequest.fromPartial(body)),

    exchangeRates: async () =>
      queryService.ExchangeRates(QueryExchangeRatesRequest.fromPartial({})),

    feederDelegation: async (body: QueryFeederDelegationRequest) =>
      queryService.FeederDelegation(
        QueryFeederDelegationRequest.fromPartial(body)
      ),

    missCounter: async (body: QueryMissCounterRequest) =>
      queryService.MissCounter(QueryMissCounterRequest.fromPartial(body)),

    params: async () => queryService.Params(QueryParamsRequest.fromPartial({})),

    voteTargets: async () =>
      queryService.VoteTargets(QueryVoteTargetsRequest.fromPartial({})),
  }
}
