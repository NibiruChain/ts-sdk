/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"

export const protobufPackage = "nibiru.pricefeed.v1"

/** a snapshot of the pricefeed oracle's median price at a given point in time */
export interface PriceSnapshot {
  /** the token pair */
  pairId: string
  /** the median prices of all oracles */
  price: string
  /** milliseconds since unix epoch */
  timestampMs: Long
}

function createBasePriceSnapshot(): PriceSnapshot {
  return { pairId: "", price: "", timestampMs: Long.ZERO }
}

export const PriceSnapshot = {
  encode(message: PriceSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId)
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price)
    }
    if (!message.timestampMs.isZero()) {
      writer.uint32(24).int64(message.timestampMs)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePriceSnapshot()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string()
          break
        case 2:
          message.price = reader.string()
          break
        case 3:
          message.timestampMs = reader.int64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PriceSnapshot {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      price: isSet(object.price) ? String(object.price) : "",
      timestampMs: isSet(object.timestampMs)
        ? Long.fromValue(object.timestampMs)
        : Long.ZERO,
    }
  },

  toJSON(message: PriceSnapshot): unknown {
    const obj: any = {}
    message.pairId !== undefined && (obj.pairId = message.pairId)
    message.price !== undefined && (obj.price = message.price)
    message.timestampMs !== undefined &&
      (obj.timestampMs = (message.timestampMs || Long.ZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PriceSnapshot>, I>>(
    object: I,
  ): PriceSnapshot {
    const message = createBasePriceSnapshot()
    message.pairId = object.pairId ?? ""
    message.price = object.price ?? ""
    message.timestampMs =
      object.timestampMs !== undefined && object.timestampMs !== null
        ? Long.fromValue(object.timestampMs)
        : Long.ZERO
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
