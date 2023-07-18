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
} from "@nibiruchain/protojs/dist/oracle/v1beta1/query"
import {
  AggregateExchangeRatePrevote,
  AggregateExchangeRateVote,
} from "@nibiruchain/protojs/dist/oracle/v1beta1/oracle"
import { fromSdkDec } from "../chain"

export interface OracleExtension {
  oracle: Readonly<{
    /** actives: Query the list of active/whitelisted pairs for the oracle module. */
    actives: () => Promise<QueryActivesResponse>
    /** aggregatePrevote: TODO Query outstanding oracle aggregate prevotes. */
    aggregatePrevote: (
      oracle: string
    ) => Promise<AggregateExchangeRatePrevote | undefined>
    /** aggregatePrevotes: TODO Query all aggregate prevotes. */
    aggregatePrevotes: () => Promise<AggregateExchangeRatePrevote[]>

    /** aggregateVote: TODO Query outstanding oracle aggregate vote. */
    aggregateVote: (
      oracle: string
    ) => Promise<AggregateExchangeRateVote | undefined>

    /** aggregateVotes: TODO Query all aggregate votes. */
    aggregateVotes: () => Promise<AggregateExchangeRateVote[]>

    /** exchangeRate: Returns the  current exchange rate that validators voted
     * for on the given 'pair'. */
    exchangeRate: (pair: string) => Promise<number>

    /** TODO Query all exchange rates. */
    exchangeRates: () => Promise<ExchangeRatesMap>

    /** feeder: Query for the feeder account to which the validator has
     * delegated the authority to vote on exchange rotes prices. */
    feeder: (oracle: string) => Promise<string>

    /** TODO Query the miss count of a validator */
    missCount: (oracle: string) => Promise<number>

    /** params: Returns the module parameters for the x/oracle module. */
    params: () => Promise<QueryParamsResponse>

    /** voteTargets: Returns current vote targets, the list of pairs that
     * everyone should vote on in the during the vote period. */
    voteTargets: () => Promise<string[]>
  }>
}

interface ExchangeRatesMap {
  [pair: string]: number
}

const newExchangeRatesMap = (resp: QueryExchangeRatesResponse) => {
  const ratesMap: ExchangeRatesMap = {}
  resp.exchangeRates.forEach((exchangeRateTuple) => {
    const { exchangeRate, pair } = exchangeRateTuple
    ratesMap[pair] = fromSdkDec(exchangeRate)
  })
  return ratesMap
}

export const setupOracleExtension = (base: QueryClient): OracleExtension => {
  const rpcClient = createProtobufRpcClient(base)
  const queryService = new OracleQueryQueryClientImpl(rpcClient)

  return {
    oracle: {
      actives: async (): Promise<QueryActivesResponse> => {
        const req = QueryActivesRequest.fromPartial({})
        const resp = await queryService.Actives(req)
        return resp
      },
      aggregatePrevote: async (
        oracle: string
      ): Promise<AggregateExchangeRatePrevote | undefined> => {
        const req = QueryAggregatePrevoteRequest.fromPartial({
          validatorAddr: oracle,
        })
        const resp: QueryAggregatePrevoteResponse =
          await queryService.AggregatePrevote(req)
        return resp.aggregatePrevote
      },
      aggregatePrevotes: async (): Promise<AggregateExchangeRatePrevote[]> => {
        const req = QueryAggregatePrevotesRequest.fromPartial({})
        const resp: QueryAggregatePrevotesResponse =
          await queryService.AggregatePrevotes(req)
        return resp.aggregatePrevotes
      },
      aggregateVote: async (
        oracle: string
      ): Promise<AggregateExchangeRateVote | undefined> => {
        const req = QueryAggregateVoteRequest.fromPartial({
          validatorAddr: oracle,
        })
        const resp: QueryAggregateVoteResponse =
          await queryService.AggregateVote(req)
        return resp.aggregateVote
      },
      aggregateVotes: async (): Promise<AggregateExchangeRateVote[]> => {
        const req = QueryAggregateVotesRequest.fromPartial({})
        const resp: QueryAggregateVotesResponse =
          await queryService.AggregateVotes(req)
        return resp.aggregateVotes
      },
      exchangeRate: async (pair: string): Promise<number> => {
        const req = QueryExchangeRateRequest.fromPartial({ pair })
        const resp: QueryExchangeRateResponse = await queryService.ExchangeRate(
          req
        )
        return fromSdkDec(resp.exchangeRate)
      },
      exchangeRates: async (): Promise<ExchangeRatesMap> => {
        const req = QueryExchangeRatesRequest.fromPartial({})
        const resp: QueryExchangeRatesResponse =
          await queryService.ExchangeRates(req)
        const ratesMap: ExchangeRatesMap = newExchangeRatesMap(resp)
        return ratesMap
      },
      feeder: async (): Promise<string> => {
        const req = QueryFeederDelegationRequest.fromPartial({})
        const resp: QueryFeederDelegationResponse =
          await queryService.FeederDelegation(req)
        return resp.feederAddr
      },
      missCount: async (): Promise<number> => {
        const req = QueryMissCounterRequest.fromPartial({})
        const resp: QueryMissCounterResponse = await queryService.MissCounter(
          req
        )
        return resp.missCounter.toNumber()
      },
      params: async (): Promise<QueryParamsResponse> => {
        const req = QueryParamsRequest.fromPartial({})
        const resp = await queryService.Params(req)
        return resp
      },
      voteTargets: async (): Promise<string[]> => {
        const req = QueryVoteTargetsRequest.fromPartial({})
        const resp: QueryVoteTargetsResponse = await queryService.VoteTargets(
          req
        )
        return resp.voteTargets
      },
    },
  }
}
