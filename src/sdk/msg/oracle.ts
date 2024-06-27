import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
  MsgAggregateExchangeRatePrevote,
  MsgAggregateExchangeRatePrevoteResponse,
  MsgAggregateExchangeRateVote,
  MsgAggregateExchangeRateVoteResponse,
  MsgClientImpl,
  MsgDelegateFeedConsent,
  MsgDelegateFeedConsentResponse,
  MsgEditOracleParams,
  MsgEditOracleParamsResponse,
} from "../../protojs/nibiru/oracle/v1/tx"

export interface OracleMsgExtension {
  readonly oracleMsg: Readonly<{
    aggregateExchangeRatePrevote: (
      body: MsgAggregateExchangeRatePrevote
    ) => Promise<MsgAggregateExchangeRatePrevoteResponse>
    aggregateExchangeRateVote: (
      body: MsgAggregateExchangeRateVote
    ) => Promise<MsgAggregateExchangeRateVoteResponse>
    delegateFeedConsent: (
      body: MsgDelegateFeedConsent
    ) => Promise<MsgDelegateFeedConsentResponse>
    editOracleParams: (
      body: MsgEditOracleParams
    ) => Promise<MsgEditOracleParamsResponse>
  }>
}

export const setupOracleMsgExtension = (
  base: QueryClient
): OracleMsgExtension => {
  const queryService = new MsgClientImpl(createProtobufRpcClient(base))

  return {
    oracleMsg: {
      aggregateExchangeRatePrevote: async (
        body: MsgAggregateExchangeRatePrevote
      ) =>
        queryService.AggregateExchangeRatePrevote(
          MsgAggregateExchangeRatePrevote.fromPartial(body)
        ),

      aggregateExchangeRateVote: async (body: MsgAggregateExchangeRateVote) =>
        queryService.AggregateExchangeRateVote(
          MsgAggregateExchangeRateVote.fromPartial(body)
        ),

      delegateFeedConsent: async (body: MsgDelegateFeedConsent) =>
        queryService.DelegateFeedConsent(
          MsgDelegateFeedConsent.fromPartial(body)
        ),

      editOracleParams: async (body: MsgEditOracleParams) =>
        queryService.EditOracleParams(MsgEditOracleParams.fromPartial(body)),
    },
  }
}
