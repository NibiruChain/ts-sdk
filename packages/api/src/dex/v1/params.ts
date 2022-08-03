/* eslint-disable */
import Long from 'long'
import { Coin } from '../../cosmos/base/v1beta1/coin'
import _m0 from 'protobufjs/minimal'

export const protobufPackage = 'nibiru.dex.v1'

/** Params defines the parameters for the module. */
export interface Params {
  /** The start pool number, i.e. the first pool number that isn't taken yet. */
  startingPoolNumber: Long
  /** The cost of creating a pool, taken from the pool creator's account. */
  poolCreationFee: Coin[]
  /** The assets that can be used to create liquidity pools */
  whitelistedAsset: string[]
}

function createBaseParams(): Params {
  return { startingPoolNumber: Long.UZERO, poolCreationFee: [], whitelistedAsset: [] }
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.startingPoolNumber.isZero()) {
      writer.uint32(8).uint64(message.startingPoolNumber)
    }
    for (const v of message.poolCreationFee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.whitelistedAsset) {
      writer.uint32(26).string(v!)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseParams()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.startingPoolNumber = reader.uint64() as Long
          break
        case 2:
          message.poolCreationFee.push(Coin.decode(reader, reader.uint32()))
          break
        case 3:
          message.whitelistedAsset.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Params {
    return {
      startingPoolNumber: isSet(object.startingPoolNumber) ? Long.fromValue(object.startingPoolNumber) : Long.UZERO,
      poolCreationFee: Array.isArray(object?.poolCreationFee)
        ? object.poolCreationFee.map((e: any) => Coin.fromJSON(e))
        : [],
      whitelistedAsset: Array.isArray(object?.whitelistedAsset)
        ? object.whitelistedAsset.map((e: any) => String(e))
        : [],
    }
  },

  toJSON(message: Params): unknown {
    const obj: any = {}
    message.startingPoolNumber !== undefined &&
      (obj.startingPoolNumber = (message.startingPoolNumber || Long.UZERO).toString())
    if (message.poolCreationFee) {
      obj.poolCreationFee = message.poolCreationFee.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.poolCreationFee = []
    }
    if (message.whitelistedAsset) {
      obj.whitelistedAsset = message.whitelistedAsset.map((e) => e)
    } else {
      obj.whitelistedAsset = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams()
    message.startingPoolNumber =
      object.startingPoolNumber !== undefined && object.startingPoolNumber !== null
        ? Long.fromValue(object.startingPoolNumber)
        : Long.UZERO
    message.poolCreationFee = object.poolCreationFee?.map((e) => Coin.fromPartial(e)) || []
    message.whitelistedAsset = object.whitelistedAsset?.map((e) => e) || []
    return message
  },
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
