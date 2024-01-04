import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing"
import {
  MsgCreatePool,
  MsgExitPool,
  MsgJoinPool,
  MsgSwapAssets,
  protobufPackage,
} from "@nibiruchain/protojs/src/nibiru/spot/v1/tx"
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

export const isMsgCreatePoolEncodeObject = (encodeObject: EncodeObject) =>
  encodeObject.typeUrl === SPOT_MSG_TYPE_URLS.MsgCreatePool

export interface MsgJoinPoolEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgJoinPool>
}

export const isMsgJoinPoolEncodeObject = (encodeObject: EncodeObject) =>
  encodeObject.typeUrl === SPOT_MSG_TYPE_URLS.MsgJoinPool

export interface MsgExitPoolEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgExitPool>
}

export const isMsgExitPoolEncodeObject = (encodeObject: EncodeObject) =>
  encodeObject.typeUrl === SPOT_MSG_TYPE_URLS.MsgExitPool

export interface MsgSwapAssetsEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgSwapAssets>
}

export const isMsgSwapAssetsEncodeObject = (encodeObject: EncodeObject) =>
  encodeObject.typeUrl === SPOT_MSG_TYPE_URLS.MsgSwapAssets

// ----------------------------------------------------------------------------

export class SpotMsgFactory {
  static createPool(msg: MsgCreatePool): TxMessage {
    if (msg.poolParams) {
      const { swapFee, exitFee } = msg.poolParams
      msg.poolParams.swapFee = toSdkDec(swapFee)
      msg.poolParams.exitFee = toSdkDec(exitFee)
    }

    return {
      typeUrl: `/${protobufPackage}.MsgCreatePool`,
      value: MsgCreatePool.fromPartial(msg),
    }
  }

  static joinPool({
    poolId,
    sender,
    tokensIn,
    useAllCoins,
  }: MsgJoinPool): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgJoinPool`,
      value: MsgJoinPool.fromPartial({
        poolId: Number(poolId),
        sender,
        tokensIn,
        useAllCoins,
      }),
    }
  }

  static exitPool({ poolId, sender, poolShares }: MsgExitPool): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgExitPool`,
      value: MsgExitPool.fromPartial({
        poolId: Number(poolId),
        sender,
        poolShares,
      }),
    }
  }

  static swapAssets({
    poolId,
    sender,
    tokenOutDenom,
    tokenIn,
  }: MsgSwapAssets): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgSwapAssets`,
      value: MsgSwapAssets.fromPartial({
        poolId: Number(poolId),
        sender,
        tokenIn,
        tokenOutDenom,
      }),
    }
  }
}
