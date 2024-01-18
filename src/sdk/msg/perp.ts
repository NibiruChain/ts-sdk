import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing"
import {
  MsgAddMargin,
  MsgClosePosition,
  MsgDonateToEcosystemFund,
  MsgMultiLiquidate,
  MsgMarketOrder,
  MsgRemoveMargin,
  MsgPartialClose,
} from "@/protojs/nibiru/perp/v2/tx"
import { Direction } from "@/protojs/nibiru/perp/v2/state"
import { toSdkDec, toSdkInt } from "../chain"
import { TxMessage } from "./encode-types"

const protobufPackage = "nibiru.perp.v2"

export const PERP_MSG_TYPE_URLS = {
  MsgAddMargin: `/${protobufPackage}.MsgAddMargin`,
  MsgRemoveMargin: `/${protobufPackage}.MsgRemoveMargin`,
  MsgMultiLiquidate: `/${protobufPackage}.MsgMultiLiquidate`,
  MsgMarketOrder: `/${protobufPackage}.MsgMarketOrder`,
  MsgClosePosition: `/${protobufPackage}.MsgClosePosition`,
  MsgDonateToEcosystemFund: `/${protobufPackage}.MsgDonateToEcosystemFund`,
  MsgPartialClose: `/${protobufPackage}.MsgPartialClose`,
}

export const perpTypes: ReadonlyArray<[string, GeneratedType]> = [
  [PERP_MSG_TYPE_URLS.MsgAddMargin, MsgAddMargin],
  [PERP_MSG_TYPE_URLS.MsgRemoveMargin, MsgRemoveMargin],
  [PERP_MSG_TYPE_URLS.MsgMultiLiquidate, MsgMultiLiquidate],
  [PERP_MSG_TYPE_URLS.MsgMarketOrder, MsgMarketOrder],
  [PERP_MSG_TYPE_URLS.MsgClosePosition, MsgClosePosition],
  [PERP_MSG_TYPE_URLS.MsgDonateToEcosystemFund, MsgDonateToEcosystemFund],
  [PERP_MSG_TYPE_URLS.MsgPartialClose, MsgPartialClose],
]

export interface MsgAddMarginEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgAddMargin>
}

export const isMsgAddMarginEncodeObject = (encodeObject: EncodeObject) =>
  (encodeObject as MsgAddMarginEncodeObject).typeUrl ===
  PERP_MSG_TYPE_URLS.MsgAddMargin

export interface MsgRemoveMarginEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgRemoveMargin>
}

export const isMsgRemoveMarginEncodeObject = (encodeObject: EncodeObject) =>
  (encodeObject as MsgRemoveMarginEncodeObject).typeUrl ===
  PERP_MSG_TYPE_URLS.MsgRemoveMargin

export interface MsgMultiLiquidateEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgMultiLiquidate>
}

export const isMsgMultiLiquidateEncodeObject = (encodeObject: EncodeObject) =>
  (encodeObject as MsgMultiLiquidateEncodeObject).typeUrl ===
  PERP_MSG_TYPE_URLS.MsgMultiLiquidate

export interface MsgOpenPositionEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgMarketOrder>
}

export const isMsgOpenPositionEncodeObject = (encodeObject: EncodeObject) =>
  (encodeObject as MsgOpenPositionEncodeObject).typeUrl ===
  PERP_MSG_TYPE_URLS.MsgMarketOrder

export interface MsgClosePositionEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgClosePosition>
}

export const isMsgClosePositionEncodeObject = (encodeObject: EncodeObject) =>
  (encodeObject as MsgClosePositionEncodeObject).typeUrl ===
  PERP_MSG_TYPE_URLS.MsgClosePosition

export interface MsgDonateToEcosystemFundEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgDonateToEcosystemFund>
}

export const isMsgDonateToEcosystemFundEncodeObject = (
  encodeObject: EncodeObject
) =>
  (encodeObject as MsgDonateToEcosystemFundEncodeObject).typeUrl ===
  PERP_MSG_TYPE_URLS.MsgDonateToEcosystemFund

export interface MsgPartialCloseEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgPartialClose>
}

export const isMsgPartialCloseEncodeObject = (encodeObject: EncodeObject) =>
  (encodeObject as MsgPartialCloseEncodeObject).typeUrl ===
  PERP_MSG_TYPE_URLS.MsgPartialClose

// ----------------------------------------------------------------------------

/**
 * PerpMsgFactory: Convenience methods for broadcasting transaction messages
 * (TxMessage) from Nibiru's x/perp module.
 *
 * @see https://nibiru.fi/docs/ecosystem/nibi-perps/
 * */
export class PerpMsgFactory {
  static removeMargin(msg: MsgRemoveMargin): TxMessage {
    return {
      typeUrl: PERP_MSG_TYPE_URLS.MsgRemoveMargin,
      value: MsgRemoveMargin.fromPartial(msg),
    }
  }

  /**
   * Returns a 'TxMessage' for adding margin to a position
   *
   * @static
   * @param {MsgAddMargin} msg - Message to add margin
   * @returns {TxMessage} - formatted version of MsgAddMargin
   */
  static addMargin(msg: MsgAddMargin): TxMessage {
    return {
      typeUrl: PERP_MSG_TYPE_URLS.MsgAddMargin,
      value: MsgAddMargin.fromPartial(msg),
    }
  }

  static liquidate(msg: MsgMultiLiquidate): TxMessage {
    return {
      typeUrl: PERP_MSG_TYPE_URLS.MsgMultiLiquidate,
      value: MsgMultiLiquidate.fromPartial(msg),
    }
  }

  static openPosition(msg: {
    sender: string
    pair: string
    goLong: boolean
    quoteAssetAmount: number
    baseAssetAmountLimit?: number
    leverage: number
  }): TxMessage {
    const { quoteAssetAmount, baseAssetAmountLimit, leverage } = msg
    const pbMsg: MsgMarketOrder = {
      sender: msg.sender,
      pair: msg.pair,
      quoteAssetAmount: toSdkInt(quoteAssetAmount),
      baseAssetAmountLimit: toSdkInt(baseAssetAmountLimit ?? 0),
      leverage: toSdkDec(leverage.toString()),
      side: msg.goLong ? Direction.LONG : Direction.SHORT,
    }
    return {
      typeUrl: PERP_MSG_TYPE_URLS.MsgMarketOrder,
      value: MsgMarketOrder.fromPartial(pbMsg),
    }
  }

  static closePosition(msg: MsgClosePosition): TxMessage {
    return {
      typeUrl: PERP_MSG_TYPE_URLS.MsgClosePosition,
      value: MsgClosePosition.fromPartial(msg),
    }
  }

  static partialClosePosition(msg: MsgPartialClose): TxMessage {
    return {
      typeUrl: PERP_MSG_TYPE_URLS.MsgPartialClose,
      value: MsgPartialClose.fromPartial(msg),
    }
  }

  static donateToPerpEF(msg: MsgDonateToEcosystemFund): TxMessage {
    return {
      typeUrl: PERP_MSG_TYPE_URLS.MsgDonateToEcosystemFund,
      value: MsgDonateToEcosystemFund.fromPartial(msg),
    }
  }
}
