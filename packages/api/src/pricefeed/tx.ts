/* eslint-disable */
import { Timestamp } from '../google/protobuf/timestamp'
import Long from 'long'
import _m0 from 'protobufjs/minimal'

export const protobufPackage = 'nibiru.pricefeed.v1'

/** MsgPostPrice represents a method for creating a new post price */
export interface MsgPostPrice {
  /** From: address of oracle */
  oracle: string
  /** Token0: denominator unit of the price, a.k.a. quote asset */
  token0: string
  /** Token1: numerator unit of price, a.k.a. base asset */
  token1: string
  /** Price: Price of the trading pair in units of token1 / token0. */
  price: string
  expiry?: Date
}

/** MsgPostPriceResponse defines the Msg/PostPrice response type. */
export interface MsgPostPriceResponse {}

export interface EventOracleUpdatePrice {
  pairId: string
  oracle: string
  pairPrice: string
  expiry?: Date
}

export interface EventPairPriceUpdated {
  pairId: string
  pairPrice: string
}

function createBaseMsgPostPrice(): MsgPostPrice {
  return { oracle: '', token0: '', token1: '', price: '', expiry: undefined }
}

export const MsgPostPrice = {
  encode(message: MsgPostPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracle !== '') {
      writer.uint32(10).string(message.oracle)
    }
    if (message.token0 !== '') {
      writer.uint32(18).string(message.token0)
    }
    if (message.token1 !== '') {
      writer.uint32(26).string(message.token1)
    }
    if (message.price !== '') {
      writer.uint32(34).string(message.price)
    }
    if (message.expiry !== undefined) {
      Timestamp.encode(toTimestamp(message.expiry), writer.uint32(42).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgPostPrice()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.oracle = reader.string()
          break
        case 2:
          message.token0 = reader.string()
          break
        case 3:
          message.token1 = reader.string()
          break
        case 4:
          message.price = reader.string()
          break
        case 5:
          message.expiry = fromTimestamp(Timestamp.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgPostPrice {
    return {
      oracle: isSet(object.oracle) ? String(object.oracle) : '',
      token0: isSet(object.token0) ? String(object.token0) : '',
      token1: isSet(object.token1) ? String(object.token1) : '',
      price: isSet(object.price) ? String(object.price) : '',
      expiry: isSet(object.expiry) ? fromJsonTimestamp(object.expiry) : undefined,
    }
  },

  toJSON(message: MsgPostPrice): unknown {
    const obj: any = {}
    message.oracle !== undefined && (obj.oracle = message.oracle)
    message.token0 !== undefined && (obj.token0 = message.token0)
    message.token1 !== undefined && (obj.token1 = message.token1)
    message.price !== undefined && (obj.price = message.price)
    message.expiry !== undefined && (obj.expiry = message.expiry.toISOString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgPostPrice>, I>>(object: I): MsgPostPrice {
    const message = createBaseMsgPostPrice()
    message.oracle = object.oracle ?? ''
    message.token0 = object.token0 ?? ''
    message.token1 = object.token1 ?? ''
    message.price = object.price ?? ''
    message.expiry = object.expiry ?? undefined
    return message
  },
}

function createBaseMsgPostPriceResponse(): MsgPostPriceResponse {
  return {}
}

export const MsgPostPriceResponse = {
  encode(_: MsgPostPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgPostPriceResponse()
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

  fromJSON(_: any): MsgPostPriceResponse {
    return {}
  },

  toJSON(_: MsgPostPriceResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgPostPriceResponse>, I>>(_: I): MsgPostPriceResponse {
    const message = createBaseMsgPostPriceResponse()
    return message
  },
}

function createBaseEventOracleUpdatePrice(): EventOracleUpdatePrice {
  return { pairId: '', oracle: '', pairPrice: '', expiry: undefined }
}

export const EventOracleUpdatePrice = {
  encode(message: EventOracleUpdatePrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== '') {
      writer.uint32(10).string(message.pairId)
    }
    if (message.oracle !== '') {
      writer.uint32(18).string(message.oracle)
    }
    if (message.pairPrice !== '') {
      writer.uint32(26).string(message.pairPrice)
    }
    if (message.expiry !== undefined) {
      Timestamp.encode(toTimestamp(message.expiry), writer.uint32(34).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventOracleUpdatePrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventOracleUpdatePrice()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string()
          break
        case 2:
          message.oracle = reader.string()
          break
        case 3:
          message.pairPrice = reader.string()
          break
        case 4:
          message.expiry = fromTimestamp(Timestamp.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventOracleUpdatePrice {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : '',
      oracle: isSet(object.oracle) ? String(object.oracle) : '',
      pairPrice: isSet(object.pairPrice) ? String(object.pairPrice) : '',
      expiry: isSet(object.expiry) ? fromJsonTimestamp(object.expiry) : undefined,
    }
  },

  toJSON(message: EventOracleUpdatePrice): unknown {
    const obj: any = {}
    message.pairId !== undefined && (obj.pairId = message.pairId)
    message.oracle !== undefined && (obj.oracle = message.oracle)
    message.pairPrice !== undefined && (obj.pairPrice = message.pairPrice)
    message.expiry !== undefined && (obj.expiry = message.expiry.toISOString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EventOracleUpdatePrice>, I>>(object: I): EventOracleUpdatePrice {
    const message = createBaseEventOracleUpdatePrice()
    message.pairId = object.pairId ?? ''
    message.oracle = object.oracle ?? ''
    message.pairPrice = object.pairPrice ?? ''
    message.expiry = object.expiry ?? undefined
    return message
  },
}

function createBaseEventPairPriceUpdated(): EventPairPriceUpdated {
  return { pairId: '', pairPrice: '' }
}

export const EventPairPriceUpdated = {
  encode(message: EventPairPriceUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== '') {
      writer.uint32(10).string(message.pairId)
    }
    if (message.pairPrice !== '') {
      writer.uint32(18).string(message.pairPrice)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPairPriceUpdated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventPairPriceUpdated()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string()
          break
        case 2:
          message.pairPrice = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventPairPriceUpdated {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : '',
      pairPrice: isSet(object.pairPrice) ? String(object.pairPrice) : '',
    }
  },

  toJSON(message: EventPairPriceUpdated): unknown {
    const obj: any = {}
    message.pairId !== undefined && (obj.pairId = message.pairId)
    message.pairPrice !== undefined && (obj.pairPrice = message.pairPrice)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EventPairPriceUpdated>, I>>(object: I): EventPairPriceUpdated {
    const message = createBaseEventPairPriceUpdated()
    message.pairId = object.pairId ?? ''
    message.pairPrice = object.pairPrice ?? ''
    return message
  },
}

/** Msg defines the pricefeed Msg service. */
export interface Msg {
  /** PostPrice defines a method for creating a new post price */
  PostPrice(request: MsgPostPrice): Promise<MsgPostPriceResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.PostPrice = this.PostPrice.bind(this)
  }
  PostPrice(request: MsgPostPrice): Promise<MsgPostPriceResponse> {
    const data = MsgPostPrice.encode(request).finish()
    const promise = this.rpc.request('nibiru.pricefeed.v1.Msg', 'PostPrice', data)
    return promise.then((data) => MsgPostPriceResponse.decode(new _m0.Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000)
  const nanos = (date.getTime() % 1_000) * 1_000_000
  return { seconds, nanos }
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000
  millis += t.nanos / 1_000_000
  return new Date(millis)
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o
  } else if (typeof o === 'string') {
    return new Date(o)
  } else {
    return fromTimestamp(Timestamp.fromJSON(o))
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number)
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
