import { Registry } from "@cosmjs/proto-signing"
import * as pb from "@nibiruchain/api/dist/dex/v1/tx"
import { toSdkDec } from "../chain"
import { TxMessage } from "./types"

export function registerTypes(registry: Registry) {
  registry.register(`/${pb.protobufPackage}.MsgCreatePool`, pb.MsgCreatePool)
  registry.register(`/${pb.protobufPackage}.MsgJoinPool`, pb.MsgJoinPool)
  registry.register(`/${pb.protobufPackage}.MsgExitPool`, pb.MsgExitPool)
  registry.register(`/${pb.protobufPackage}.MsgSwapAssets`, pb.MsgSwapAssets)
  return registry
}

export class DexMsgs {
  static createPool(msg: pb.MsgCreatePool): TxMessage {
    if (msg.poolParams) {
      const { swapFee, exitFee } = msg.poolParams!
      msg.poolParams!.swapFee = toSdkDec(swapFee)
      msg.poolParams!.exitFee = toSdkDec(exitFee)
    }

    return {
      typeUrl: `/${pb.protobufPackage}.MsgCreatePool`,
      value: pb.MsgCreatePool.fromPartial(msg),
    }
  }

  static joinPool(msg: pb.MsgJoinPool): TxMessage {
    return {
      typeUrl: `/${pb.protobufPackage}.MsgJoinPool`,
      value: pb.MsgJoinPool.fromPartial(msg),
    }
  }

  static exitPool(msg: pb.MsgExitPool): TxMessage {
    return {
      typeUrl: `/${pb.protobufPackage}.MsgExitPool`,
      value: pb.MsgExitPool.fromPartial(msg),
    }
  }

  static swapAssets(msg: pb.MsgSwapAssets): TxMessage {
    return {
      typeUrl: `/${pb.protobufPackage}.MsgSwapAssets`,
      value: pb.MsgSwapAssets.fromPartial(msg),
    }
  }
}
