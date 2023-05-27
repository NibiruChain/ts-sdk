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
import { Side } from "@nibiruchain/protojs/src/perp/v1/state"
import { toSdkDec, toSdkInt } from "../chain"
import { TxMessage } from "./encode-types"

export const PERP_MSG_TYPE_URLS = {
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

// ----------------------------------------------------------------------------

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
    const pbMsg: MsgOpenPosition = {
      sender: msg.sender,
      pair: msg.pair,
      quoteAssetAmount: toSdkInt(quoteAssetAmount),
      baseAssetAmountLimit: toSdkInt(baseAssetAmountLimit ?? 0),
      leverage: toSdkDec(leverage.toString()),
      side: msg.goLong ? Side.BUY : Side.SELL,
    }
    return {
      typeUrl: PERP_MSG_TYPE_URLS.MsgOpenPosition,
      value: MsgOpenPosition.fromPartial(pbMsg),
    }
  }

  static closePosition(msg: MsgClosePosition): TxMessage {
    return {
      typeUrl: PERP_MSG_TYPE_URLS.MsgClosePosition,
      value: MsgClosePosition.fromPartial(msg),
    }
  }

  static donateToPerpEF(msg: MsgDonateToEcosystemFund): TxMessage {
    return {
      typeUrl: PERP_MSG_TYPE_URLS.MsgDonateToEcosystemFund,
      value: MsgDonateToEcosystemFund.fromPartial(msg),
    }
  }
}
