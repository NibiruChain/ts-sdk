import { Registry } from '@cosmjs/proto-signing'
import * as pb from '@nibiruchain/api/src/dex/v1/tx'
import { toSdkDec } from '@nibiruchain/common'
import { TxMessage } from './common'

const path = pb.protobufPackage

export function registerTypes(registry: Registry) {
  registry.register(`/${path}.MsgCreatePool`, pb.MsgCreatePool)
  registry.register(`/${path}.MsgJoinPool`, pb.MsgJoinPool)
  registry.register(`/${path}.MsgExitPool`, pb.MsgExitPool)
  registry.register(`/${path}.MsgSwapAssets`, pb.MsgSwapAssets)
  return registry
}

export class DexComposer {
  static createPool(msg: pb.MsgCreatePool): TxMessage {
    if (msg.poolParams) {
      const { swapFee, exitFee } = msg.poolParams!
      msg.poolParams!.swapFee = toSdkDec(swapFee)
      msg.poolParams!.exitFee = toSdkDec(exitFee)
    }

    return {
      typeUrl: `/${path}.MsgCreatePool`,
      value: pb.MsgCreatePool.fromPartial(msg),
    }
  }

  static joinPool(msg: pb.MsgJoinPool): TxMessage {
    return {
      typeUrl: `/${path}.MsgJoinPool`,
      value: pb.MsgJoinPool.fromPartial(msg),
    }
  }

  static exitPool(msg: pb.MsgExitPool): TxMessage {
    return {
      typeUrl: `/${path}.MsgExitPool`,
      value: pb.MsgExitPool.fromPartial(msg),
    }
  }

  static swapAssets(msg: pb.MsgSwapAssets): TxMessage {
    return {
      typeUrl: `/${path}.MsgSwapAssets`,
      value: pb.MsgSwapAssets.fromPartial(msg),
    }
  }
}
