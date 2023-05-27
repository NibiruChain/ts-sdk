import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing"
import {
  MsgCreatePool,
  MsgExitPool,
  MsgJoinPool,
  MsgSwapAssets,
  protobufPackage,
} from "@nibiruchain/protojs/dist/spot/v1/tx"
import { TxMessage } from "./encode-types"
import { toSdkDec } from "../chain"

export const SPOT_MSG_TYPE_URLS = {
  MsgCreatePool: `/${protobufPackage}.MsgCreatePool`,
  MsgJoinPool: `/${protobufPackage}.MsgJoinPool`,
  MsgExitPool: `/${protobufPackage}.MsgExitPool`,
  MsgSwapAssets: `/${protobufPackage}.MsgSwapAssets`,
}

export const spotTypes: ReadonlyArray<[string, GeneratedType]> = [
  [SPOT_MSG_TYPE_URLS.MsgCreatePool, MsgCreatePool],
  [SPOT_MSG_TYPE_URLS.MsgJoinPool, MsgJoinPool],
  [SPOT_MSG_TYPE_URLS.MsgExitPool, MsgExitPool],
  [SPOT_MSG_TYPE_URLS.MsgSwapAssets, MsgSwapAssets],
]

export interface MsgCreatePoolEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgCreatePool>
}

export function isMsgCreatePoolEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgCreatePoolEncodeObject {
  return encodeObject.typeUrl === SPOT_MSG_TYPE_URLS.MsgCreatePool
}

export interface MsgJoinPoolEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgJoinPool>
}

export function isMsgJoinPoolEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgJoinPoolEncodeObject {
  return encodeObject.typeUrl === SPOT_MSG_TYPE_URLS.MsgJoinPool
}

export interface MsgExitPoolEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgExitPool>
}

export function isMsgExitPoolEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgExitPoolEncodeObject {
  return encodeObject.typeUrl === SPOT_MSG_TYPE_URLS.MsgExitPool
}

export interface MsgSwapAssetsEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgSwapAssets>
}

export function isMsgSwapAssetsEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgSwapAssetsEncodeObject {
  return encodeObject.typeUrl === SPOT_MSG_TYPE_URLS.MsgSwapAssets
}

// ----------------------------------------------------------------------------

export class SpotMsgFactory {
  static createPool(msg: MsgCreatePool): TxMessage {
    if (msg.poolParams) {
      const { swapFee, exitFee } = msg.poolParams!
      msg.poolParams!.swapFee = toSdkDec(swapFee)
      msg.poolParams!.exitFee = toSdkDec(exitFee)
    }

    return {
      typeUrl: `/${protobufPackage}.MsgCreatePool`,
      value: MsgCreatePool.fromPartial(msg),
    }
  }

  static joinPool(msg: MsgJoinPool): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgJoinPool`,
      value: MsgJoinPool.fromPartial(msg),
    }
  }

  static exitPool(msg: MsgExitPool): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgExitPool`,
      value: MsgExitPool.fromPartial(msg),
    }
  }

  static swapAssets(msg: MsgSwapAssets): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgSwapAssets`,
      value: MsgSwapAssets.fromPartial(msg),
    }
  }
}
