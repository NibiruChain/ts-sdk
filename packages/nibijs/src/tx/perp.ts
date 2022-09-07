import { GeneratedType, Registry } from "@cosmjs/proto-signing"
import * as pb from "@nibiruchain/api/src/perp/v1/tx"
import { TxMessage } from "./common"
import { toSdkDec, toSdkInt } from "../common"

interface MsgTypeUrl {
  [msg: string]: string
}

export const MsgTypeUrls: MsgTypeUrl = {
  MsgAddMargin: `/${pb.protobufPackage}.MsgAddMargin`,
  MsgRemoveMargin: `/${pb.protobufPackage}.MsgRemoveMargin`,
  MsgLiquidate: `/${pb.protobufPackage}.MsgLiquidate`,
  MsgOpenPosition: `/${pb.protobufPackage}.MsgOpenPosition`,
  MsgClosePosition: `/${pb.protobufPackage}.MsgClosePosition`,
}

export function registerTypes(registry: Registry) {
  registry.register(MsgTypeUrls.MsgRemoveMargin, pb.MsgRemoveMargin)
  registry.register(MsgTypeUrls.MsgAddMargin, pb.MsgAddMargin)
  registry.register(MsgTypeUrls.MsgLiquidate, pb.MsgLiquidate)
  registry.register(MsgTypeUrls.MsgOpenPosition, pb.MsgOpenPosition)
  registry.register(MsgTypeUrls.MsgClosePosition, pb.MsgClosePosition)
  return registry
}

export class PerpComposer {
  static removeMargin(msg: pb.MsgRemoveMargin): TxMessage {
    return {
      typeUrl: MsgTypeUrls.MsgRemoveMargin,
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
      typeUrl: MsgTypeUrls.MsgAddMargin,
      value: pb.MsgAddMargin.fromPartial(msg),
    }
  }

  static liquidate(msg: pb.MsgLiquidate): TxMessage {
    return {
      typeUrl: MsgTypeUrls.MsgLiquidate,
      value: pb.MsgLiquidate.fromPartial(msg),
    }
  }

  static openPosition(msg: pb.MsgOpenPosition): TxMessage {
    const { quoteAssetAmount, baseAssetAmountLimit, leverage } = msg
    msg.quoteAssetAmount = toSdkInt(quoteAssetAmount)
    msg.baseAssetAmountLimit = toSdkInt(baseAssetAmountLimit)
    msg.leverage = toSdkDec(leverage)
    return {
      typeUrl: MsgTypeUrls.MsgOpenPosition,
      value: pb.MsgOpenPosition.fromPartial(msg),
    }
  }

  static closePosition(msg: pb.MsgClosePosition): TxMessage {
    return {
      typeUrl: MsgTypeUrls.MsgClosePosition,
      value: pb.MsgClosePosition.fromPartial(msg),
    }
  }
}
