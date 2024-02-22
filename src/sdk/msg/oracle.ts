import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing"
import {
  MsgAggregateExchangeRatePrevote,
  MsgAggregateExchangeRateVote,
  MsgDelegateFeedConsent,
  MsgEditOracleParams,
} from "../../protojs/nibiru/oracle/v1/tx"
import { TxMessage } from ".."

const protobufPackage = "nibiru.oracle.v1"

export const ORACLE_MSG_TYPE_URLS = {
  MsgAggregateExchangeRatePrevote: `/${protobufPackage}.MsgAggregateExchangeRatePrevote`,
  MsgAggregateExchangeRateVote: `/${protobufPackage}.MsgAggregateExchangeRateVote`,
  MsgDelegateFeedConsent: `/${protobufPackage}.MsgDelegateFeedConsent`,
  MsgEditOracleParams: `/${protobufPackage}.MsgEditOracleParams`,
}

export const oracleTypes: ReadonlyArray<[string, GeneratedType]> = [
  [
    ORACLE_MSG_TYPE_URLS.MsgAggregateExchangeRatePrevote,
    MsgAggregateExchangeRatePrevote,
  ],
  [
    ORACLE_MSG_TYPE_URLS.MsgAggregateExchangeRateVote,
    MsgAggregateExchangeRateVote,
  ],
  [ORACLE_MSG_TYPE_URLS.MsgDelegateFeedConsent, MsgDelegateFeedConsent],
  [ORACLE_MSG_TYPE_URLS.MsgEditOracleParams, MsgEditOracleParams],
]

export interface MsgAggregateExchangeRatePrevoteEncodeObject
  extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgAggregateExchangeRatePrevote>
}

export const isMsgAggregateExchangeRatePrevoteEncodeObject = (
  encodeObject: EncodeObject
) =>
  encodeObject.typeUrl === ORACLE_MSG_TYPE_URLS.MsgAggregateExchangeRatePrevote

export interface MsgAggregateExchangeRateVoteEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgAggregateExchangeRateVote>
}

export const isMsgAggregateExchangeRateVoteEncodeObject = (
  encodeObject: EncodeObject
) => encodeObject.typeUrl === ORACLE_MSG_TYPE_URLS.MsgAggregateExchangeRateVote

export interface MsgDelegateFeedConsentEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgDelegateFeedConsent>
}

export const isMsgDelegateFeedConsentEncodeObject = (
  encodeObject: EncodeObject
) => encodeObject.typeUrl === ORACLE_MSG_TYPE_URLS.MsgDelegateFeedConsent

export interface MsgEditOracleParamsEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgEditOracleParams>
}

export const isMsgEditOracleParamsEncodeObject = (encodeObject: EncodeObject) =>
  encodeObject.typeUrl === ORACLE_MSG_TYPE_URLS.MsgEditOracleParams

// ----------------------------------------------------------------------------

export class OracleMsgFactory {
  static aggregateExchangeRatePrevote(
    msg: MsgAggregateExchangeRatePrevote
  ): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgAggregateExchangeRatePrevote`,
      value: MsgAggregateExchangeRatePrevote.fromPartial(msg),
    }
  }

  static aggregateExchangeRateVote(
    msg: MsgAggregateExchangeRateVote
  ): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgAggregateExchangeRateVote`,
      value: MsgAggregateExchangeRateVote.fromPartial(msg),
    }
  }

  static delegateFeedConsent(msg: MsgDelegateFeedConsent): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgDelegateFeedConsent`,
      value: MsgDelegateFeedConsent.fromPartial(msg),
    }
  }

  static editOracleParams(msg: MsgEditOracleParams): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgEditOracleParams`,
      value: MsgEditOracleParams.fromPartial(msg),
    }
  }
}
