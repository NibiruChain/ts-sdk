import { Registry } from "@cosmjs/proto-signing"
import * as pb from "@nibiruchain/protojs/dist/perp/v1/tx"
import { Side } from "@nibiruchain/protojs/dist/perp/v1/state"
import { TxMessage, MsgTypeUrls } from "./types"
import { toSdkDec, toSdkInt } from "../chain"

export const PerpMsgTypeUrls: MsgTypeUrls = {
  MsgAddMargin: `/${pb.protobufPackage}.MsgAddMargin`,
  MsgRemoveMargin: `/${pb.protobufPackage}.MsgRemoveMargin`,
  MsgMultiLiquidate: `/${pb.protobufPackage}.MsgMultiLiquidate`,
  MsgOpenPosition: `/${pb.protobufPackage}.MsgOpenPosition`,
  MsgClosePosition: `/${pb.protobufPackage}.MsgClosePosition`,
  MsgDonateToEcosystemFund: `/${pb.protobufPackage}.MsgDonateToEcosystemFund`,
}

export function registerTypes(registry: Registry) {
  registry.register(PerpMsgTypeUrls.MsgRemoveMargin, pb.MsgRemoveMargin)
  registry.register(PerpMsgTypeUrls.MsgAddMargin, pb.MsgAddMargin)
  registry.register(PerpMsgTypeUrls.MsgMultiLiquidate, pb.MsgMultiLiquidate)
  registry.register(PerpMsgTypeUrls.MsgOpenPosition, pb.MsgOpenPosition)
  registry.register(PerpMsgTypeUrls.MsgClosePosition, pb.MsgClosePosition)
  registry.register(
    PerpMsgTypeUrls.MsgDonateToEcosystemFund,
    pb.MsgDonateToEcosystemFund,
  )
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

  static liquidate(msg: pb.MsgMultiLiquidate): TxMessage {
    return {
      typeUrl: PerpMsgTypeUrls.MsgLiquidate,
      value: pb.MsgMultiLiquidate.fromPartial(msg),
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
    const pbMsg: pb.MsgOpenPosition = {
      sender: msg.sender,
      pair: msg.pair,
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

  static donateToPerpEF(msg: pb.MsgDonateToEcosystemFund): TxMessage {
    return {
      typeUrl: PerpMsgTypeUrls.MsgDonateToEcosystemFund,
      value: pb.MsgDonateToEcosystemFund.fromPartial(msg),
    }
  }
}
