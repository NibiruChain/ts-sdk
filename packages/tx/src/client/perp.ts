import { Registry } from "@cosmjs/proto-signing"
import * as pb from "@nibiruchain/api/src/perp/v1/tx"
import { TxMessage } from "./common"
import { toSdkDec, toSdkInt } from "@nibiruchain/common"

const path = pb.protobufPackage

export function registerTypes(registry: Registry) {
  registry.register(`/${path}.MsgRemoveMargin`, pb.MsgRemoveMargin)
  registry.register(`/${path}.MsgAddMargin`, pb.MsgAddMargin)
  registry.register(`/${path}.MsgLiquidate`, pb.MsgLiquidate)
  registry.register(`/${path}.MsgOpenPosition`, pb.MsgOpenPosition)
  registry.register(`/${path}.MsgClosePosition`, pb.MsgClosePosition)
  return registry
}

export class PerpComposer {
  static removeMargin(msg: pb.MsgRemoveMargin): TxMessage {
    return {
      typeUrl: `${path}.MsgRemoveMargin`,
      value: pb.MsgRemoveMargin.fromPartial(msg),
    }
  }

  static addMargin(msg: pb.MsgAddMargin): TxMessage {
    return {
      typeUrl: `${path}.MsgAddMargin`,
      value: pb.MsgAddMargin.fromPartial(msg),
    }
  }

  static liquidate(msg: pb.MsgLiquidate): TxMessage {
    return {
      typeUrl: `${path}.MsgLiquidate`,
      value: pb.MsgLiquidate.fromPartial(msg),
    }
  }

  static openPosition(msg: pb.MsgOpenPosition): TxMessage {
    const { quoteAssetAmount, baseAssetAmountLimit, leverage } = msg
    msg.quoteAssetAmount = toSdkInt(quoteAssetAmount)
    msg.baseAssetAmountLimit = toSdkInt(baseAssetAmountLimit)
    msg.leverage = toSdkDec(leverage)
    console.log(`msg: ${JSON.stringify(msg)}`)
    return {
      typeUrl: `/${path}.MsgOpenPosition`,
      value: pb.MsgOpenPosition.fromPartial(msg),
    }
  }

  static closePosition(msg: pb.MsgClosePosition): TxMessage {
    return {
      typeUrl: `/${path}.MsgClosePosition`,
      value: pb.MsgClosePosition.fromPartial(msg),
    }
  }
}
