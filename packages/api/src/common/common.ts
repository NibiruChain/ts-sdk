/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"

export const protobufPackage = "nibiru.common"

export interface AssetPair {
  token0: string
  token1: string
}

function createBaseAssetPair(): AssetPair {
  return { token0: "", token1: "" }
}

export const AssetPair = {
  encode(message: AssetPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token0 !== "") {
      writer.uint32(10).string(message.token0)
    }
    if (message.token1 !== "") {
      writer.uint32(18).string(message.token1)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAssetPair()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.token0 = reader.string()
          break
        case 2:
          message.token1 = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): AssetPair {
    return {
      token0: isSet(object.token0) ? String(object.token0) : "",
      token1: isSet(object.token1) ? String(object.token1) : "",
    }
  },

  toJSON(message: AssetPair): unknown {
    const obj: any = {}
    message.token0 !== undefined && (obj.token0 = message.token0)
    message.token1 !== undefined && (obj.token1 = message.token1)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<AssetPair>, I>>(object: I): AssetPair {
    const message = createBaseAssetPair()
    message.token0 = object.token0 ?? ""
    message.token1 = object.token1 ?? ""
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
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
