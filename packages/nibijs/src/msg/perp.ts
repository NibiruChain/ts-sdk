import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing"
import {
  MsgAddMargin,
  MsgClosePosition,
  MsgDonateToEcosystemFund,
  MsgMultiLiquidate,
  MsgOpenPosition,
  MsgRemoveMargin,
  protobufPackage,
} from "@nibiruchain/protojs/dist/perp/v1/tx"

export const PERP_MSG_TYPE_URLS: Record<string, string> = {
  MsgAddMargin: `/${protobufPackage}.MsgAddMargin`,
  MsgRemoveMargin: `/${protobufPackage}.MsgRemoveMargin`,
  MsgMultiLiquidate: `/${protobufPackage}.MsgMultiLiquidate`,
  MsgOpenPosition: `/${protobufPackage}.MsgOpenPosition`,
  MsgClosePosition: `/${protobufPackage}.MsgClosePosition`,
  MsgDonateToEcosystemFund: `/${protobufPackage}.MsgDonateToEcosystemFund`,
}

export const perpTypes: ReadonlyArray<[string, GeneratedType]> = [
  [PERP_MSG_TYPE_URLS.MsgAddMargin, MsgAddMargin],
  [PERP_MSG_TYPE_URLS.MsgRemoveMargin, MsgRemoveMargin],
  [PERP_MSG_TYPE_URLS.MsgMultiLiquidate, MsgMultiLiquidate],
  [PERP_MSG_TYPE_URLS.MsgOpenPosition, MsgOpenPosition],
  [PERP_MSG_TYPE_URLS.MsgClosePosition, MsgClosePosition],
  [PERP_MSG_TYPE_URLS.MsgDonateToEcosystemFund, MsgDonateToEcosystemFund],
]

export interface MsgAddMarginEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgAddMargin>
}

export function isMsgAddMarginEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgAddMarginEncodeObject {
  return (
    (encodeObject as MsgAddMarginEncodeObject).typeUrl ===
    PERP_MSG_TYPE_URLS.MsgAddMargin
  )
}

export interface MsgRemoveMarginEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgRemoveMargin>
}

export function isMsgRemoveMarginEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgRemoveMarginEncodeObject {
  return (
    (encodeObject as MsgRemoveMarginEncodeObject).typeUrl ===
    PERP_MSG_TYPE_URLS.MsgRemoveMargin
  )
}

export interface MsgMultiLiquidateEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgMultiLiquidate>
}

export function isMsgMultiLiquidateEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgMultiLiquidateEncodeObject {
  return (
    (encodeObject as MsgMultiLiquidateEncodeObject).typeUrl ===
    PERP_MSG_TYPE_URLS.MsgMultiLiquidate
  )
}

export interface MsgOpenPositionEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgOpenPosition>
}

export function isMsgOpenPositionEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgOpenPositionEncodeObject {
  return (
    (encodeObject as MsgOpenPositionEncodeObject).typeUrl ===
    PERP_MSG_TYPE_URLS.MsgOpenPosition
  )
}

export interface MsgClosePositionEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgClosePosition>
}

export function isMsgClosePositionEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgClosePositionEncodeObject {
  return (
    (encodeObject as MsgClosePositionEncodeObject).typeUrl ===
    PERP_MSG_TYPE_URLS.MsgClosePosition
  )
}

export interface MsgDonateToEcosystemFundEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgDonateToEcosystemFund>
}

export function isMsgDonateToEcosystemFundEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgDonateToEcosystemFundEncodeObject {
  return (
    (encodeObject as MsgDonateToEcosystemFundEncodeObject).typeUrl ===
    PERP_MSG_TYPE_URLS.MsgDonateToEcosystemFund
  )
}
