/* eslint-disable */
import Long from 'long'
import _m0 from 'protobufjs/minimal'

export const protobufPackage = 'nibiru.vpool.v1'

/** Params defines the parameters for the module. */
export interface Params {}

/** CurrentTWAP states defines the numerator and denominator for the TWAP calculation */
export interface CurrentTWAP {
  pairId: string
  numerator: string
  denominator: string
  price: string
}

function createBaseParams(): Params {
  return {}
}

export const Params = {
  encode(_: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseParams()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): Params {
    return {}
  },

  toJSON(_: Params): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(_: I): Params {
    const message = createBaseParams()
    return message
  },
}

function createBaseCurrentTWAP(): CurrentTWAP {
  return { pairId: '', numerator: '', denominator: '', price: '' }
}

export const CurrentTWAP = {
  encode(message: CurrentTWAP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== '') {
      writer.uint32(10).string(message.pairId)
    }
    if (message.numerator !== '') {
      writer.uint32(18).string(message.numerator)
    }
    if (message.denominator !== '') {
      writer.uint32(26).string(message.denominator)
    }
    if (message.price !== '') {
      writer.uint32(34).string(message.price)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentTWAP {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCurrentTWAP()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string()
          break
        case 2:
          message.numerator = reader.string()
          break
        case 3:
          message.denominator = reader.string()
          break
        case 4:
          message.price = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CurrentTWAP {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : '',
      numerator: isSet(object.numerator) ? String(object.numerator) : '',
      denominator: isSet(object.denominator) ? String(object.denominator) : '',
      price: isSet(object.price) ? String(object.price) : '',
    }
  },

  toJSON(message: CurrentTWAP): unknown {
    const obj: any = {}
    message.pairId !== undefined && (obj.pairId = message.pairId)
    message.numerator !== undefined && (obj.numerator = message.numerator)
    message.denominator !== undefined && (obj.denominator = message.denominator)
    message.price !== undefined && (obj.price = message.price)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CurrentTWAP>, I>>(object: I): CurrentTWAP {
    const message = createBaseCurrentTWAP()
    message.pairId = object.pairId ?? ''
    message.numerator = object.numerator ?? ''
    message.denominator = object.denominator ?? ''
    message.price = object.price ?? ''
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
