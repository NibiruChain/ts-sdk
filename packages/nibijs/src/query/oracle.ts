/**
 * @fileoverview query extension for the "oracle" module
 */
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import * as oraclequery from "@nibiruchain/protojs/dist/oracle/v1beta1/query"
import * as pbOracle from "@nibiruchain/protojs/dist/oracle/v1beta1/oracle"
import { fromSdkDec } from "../chain"

export interface OracleExtension {
  oracle: Readonly<{
    /** actives: Query the list of active/whitelisted pairs for the oracle module. */
    actives: () => Promise<oraclequery.QueryActivesResponse>
    /** aggregatePrevote: TODO Query outstanding oracle aggregate prevotes. */
    aggregatePrevote: (
      oracle: string,
    ) => Promise<pbOracle.AggregateExchangeRatePrevote | undefined>
    /** aggregatePrevotes: TODO Query all aggregate prevotes. */
    aggregatePrevotes: () => Promise<pbOracle.AggregateExchangeRatePrevote[]>

    /** aggregateVote: TODO Query outstanding oracle aggregate vote. */
    aggregateVote: (
      oracle: string,
    ) => Promise<pbOracle.AggregateExchangeRateVote | undefined>

    /** aggregateVotes: TODO Query all aggregate votes. */
    aggregateVotes: () => Promise<pbOracle.AggregateExchangeRateVote[]>

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
    params: () => Promise<oraclequery.QueryParamsResponse>

    /** voteTargets: Returns current vote targets, the list of pairs that
     * everyone should vote on in the during the vote period. */
    voteTargets: () => Promise<string[]>
  }>
}

interface ExchangeRatesMap {
  [pair: string]: number
}

function newExchangeRatesMap(
  resp: oraclequery.QueryExchangeRatesResponse,
): ExchangeRatesMap {
  const ratesMap: ExchangeRatesMap = {}
  resp.exchangeRates.forEach((exchangeRateTuple) => {
    const { exchangeRate, pair } = exchangeRateTuple
    ratesMap[pair] = fromSdkDec(exchangeRate)
  })
  return ratesMap
}

export function setupOracleExtension(base: QueryClient): OracleExtension {
  const rpcClient = createProtobufRpcClient(base)
  const queryService = new oraclequery.QueryClientImpl(rpcClient)

  return {
    oracle: {
      actives: async (): Promise<oraclequery.QueryActivesResponse> => {
        const req = oraclequery.QueryActivesRequest.fromPartial({})
        const resp = await queryService.Actives(req)
        return resp
      },
      aggregatePrevote: async (
        oracle: string,
      ): Promise<pbOracle.AggregateExchangeRatePrevote | undefined> => {
        const req = oraclequery.QueryAggregatePrevoteRequest.fromPartial({
          validatorAddr: oracle,
        })
        const resp: oraclequery.QueryAggregatePrevoteResponse =
          await queryService.AggregatePrevote(req)
        return resp.aggregatePrevote
      },
      aggregatePrevotes: async (): Promise<pbOracle.AggregateExchangeRatePrevote[]> => {
        const req = oraclequery.QueryAggregatePrevotesRequest.fromPartial({})
        const resp: oraclequery.QueryAggregatePrevotesResponse =
          await queryService.AggregatePrevotes(req)
        return resp.aggregatePrevotes
      },
      aggregateVote: async (
        oracle: string,
      ): Promise<pbOracle.AggregateExchangeRateVote | undefined> => {
        const req = oraclequery.QueryAggregateVoteRequest.fromPartial({
          validatorAddr: oracle,
        })
        const resp: oraclequery.QueryAggregateVoteResponse =
          await queryService.AggregateVote(req)
        return resp.aggregateVote
      },
      aggregateVotes: async (): Promise<pbOracle.AggregateExchangeRateVote[]> => {
        const req = oraclequery.QueryAggregateVotesRequest.fromPartial({})
        const resp: oraclequery.QueryAggregateVotesResponse =
          await queryService.AggregateVotes(req)
        return resp.aggregateVotes
      },
      exchangeRate: async (pair: string): Promise<number> => {
        const req = oraclequery.QueryExchangeRateRequest.fromPartial({ pair })
        const resp: oraclequery.QueryExchangeRateResponse =
          await queryService.ExchangeRate(req)
        return fromSdkDec(resp.exchangeRate)
      },
      exchangeRates: async (): Promise<ExchangeRatesMap> => {
        const req = oraclequery.QueryExchangeRatesRequest.fromPartial({})
        const resp: oraclequery.QueryExchangeRatesResponse =
          await queryService.ExchangeRates(req)
        const ratesMap: ExchangeRatesMap = newExchangeRatesMap(resp)
        return ratesMap
      },
      feeder: async (): Promise<string> => {
        const req = oraclequery.QueryFeederDelegationRequest.fromPartial({})
        const resp: oraclequery.QueryFeederDelegationResponse =
          await queryService.FeederDelegation(req)
        return resp.feederAddr
      },
      missCount: async (): Promise<number> => {
        const req = oraclequery.QueryMissCounterRequest.fromPartial({})
        const resp: oraclequery.QueryMissCounterResponse =
          await queryService.MissCounter(req)
        return resp.missCounter.toNumber()
      },
      params: async (): Promise<oraclequery.QueryParamsResponse> => {
        const req = oraclequery.QueryParamsRequest.fromPartial({})
        const resp = await queryService.Params(req)
        return resp
      },
      voteTargets: async (): Promise<string[]> => {
        const req = oraclequery.QueryVoteTargetsRequest.fromPartial({})
        const resp: oraclequery.QueryVoteTargetsResponse =
          await queryService.VoteTargets(req)
        return resp.voteTargets
      },
    },
  }
}

// type TransformFn<T> = (resp: T) => T
