import { Registry } from "@cosmjs/proto-signing"
import * as pb from "@nibiruchain/protojs/dist/perp/v1/tx"
import { Side } from "@nibiruchain/protojs/dist/perp/v1/state"
import { TxMessage, MsgTypeUrls } from "./types"
import { toSdkDec, toSdkInt } from "../chain"

export const PerpMsgTypeUrls: MsgTypeUrls = {
  MsgAddMargin: `/${pb.protobufPackage}.MsgAddMargin`,
  MsgRemoveMargin: `/${pb.protobufPackage}.MsgRemoveMargin`,
  MsgLiquidate: `/${pb.protobufPackage}.MsgLiquidate`,
  MsgOpenPosition: `/${pb.protobufPackage}.MsgOpenPosition`,
  MsgClosePosition: `/${pb.protobufPackage}.MsgClosePosition`,
}

export function registerTypes(registry: Registry) {
  registry.register(PerpMsgTypeUrls.MsgRemoveMargin, pb.MsgRemoveMargin)
  registry.register(PerpMsgTypeUrls.MsgAddMargin, pb.MsgAddMargin)
  registry.register(PerpMsgTypeUrls.MsgLiquidate, pb.MsgLiquidate)
  registry.register(PerpMsgTypeUrls.MsgOpenPosition, pb.MsgOpenPosition)
  registry.register(PerpMsgTypeUrls.MsgClosePosition, pb.MsgClosePosition)
  return registry
}

export class PerpMsgs {
  static removeMargin(msg: pb.MsgRemoveMargin): TxMessage {
    return {
      typeUrl: PerpMsgTypeUrls.MsgRemoveMargin,
      value: pb.MsgRemoveMargin.fromPartial(msg),
    }
  }

  /**
   * Returns a 'TxMessage' for adding margin to a position
   *
   * @static
   * @param {pb.MsgAddMargin} msg - Message to add margin
   * @returns {TxMessage} - formatted version of MsgAddMargin
   */
  static addMargin(msg: pb.MsgAddMargin): TxMessage {
    return {
      typeUrl: PerpMsgTypeUrls.MsgAddMargin,
      value: pb.MsgAddMargin.fromPartial(msg),
    }
  }

  static liquidate(msg: pb.MsgLiquidate): TxMessage {
    return {
      typeUrl: PerpMsgTypeUrls.MsgLiquidate,
      value: pb.MsgLiquidate.fromPartial(msg),
    }
  }

  static openPosition(msg: {
    sender: string
    tokenPair: string
    goLong: boolean
    quoteAssetAmount: number
    baseAssetAmountLimit?: number
    leverage: number
  }): TxMessage {
    const { quoteAssetAmount, baseAssetAmountLimit, leverage } = msg
    const pbMsg: pb.MsgOpenPosition = {
      sender: msg.sender,
      tokenPair: msg.tokenPair,
      quoteAssetAmount: toSdkInt(quoteAssetAmount),
      baseAssetAmountLimit: toSdkInt(baseAssetAmountLimit ?? 0),
      leverage: toSdkDec(leverage.toString()),
      side: msg.goLong ? Side.BUY : Side.SELL,
    }
    return {
      typeUrl: PerpMsgTypeUrls.MsgOpenPosition,
      value: pb.MsgOpenPosition.fromPartial(pbMsg),
    }
  }

  static closePosition(msg: pb.MsgClosePosition): TxMessage {
    return {
      typeUrl: PerpMsgTypeUrls.MsgClosePosition,
      value: pb.MsgClosePosition.fromPartial(msg),
    }
  }
}
