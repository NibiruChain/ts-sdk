/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"
import { Coin } from "../../../cosmos/base/v1beta1/coin"
import { messageTypeRegistry } from "../../../typeRegistry"

export const protobufPackage = "nibiru.stablecoin.v1"

export interface EventTransfer {
  $type: "nibiru.stablecoin.v1.EventTransfer"
  coin?: Coin
  from: string
  to: string
}

export interface EventMintStable {
  $type: "nibiru.stablecoin.v1.EventMintStable"
  amount: string
}

export interface EventBurnStable {
  $type: "nibiru.stablecoin.v1.EventBurnStable"
  amount: string
}

export interface EventMintNIBI {
  $type: "nibiru.stablecoin.v1.EventMintNIBI"
  amount: string
}

export interface EventBurnNIBI {
  $type: "nibiru.stablecoin.v1.EventBurnNIBI"
  amount: string
}

export interface EventRecollateralize {
  $type: "nibiru.stablecoin.v1.EventRecollateralize"
  caller: string
  inCoin?: Coin
  outCoin?: Coin
  collRatio: string
}

export interface EventBuyback {
  $type: "nibiru.stablecoin.v1.EventBuyback"
  caller: string
  inCoin?: Coin
  outCoin?: Coin
  collRatio: string
}

function createBaseEventTransfer(): EventTransfer {
  return {
    $type: "nibiru.stablecoin.v1.EventTransfer",
    coin: undefined,
    from: "",
    to: "",
  }
}

export const EventTransfer = {
  $type: "nibiru.stablecoin.v1.EventTransfer" as const,

  encode(message: EventTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim()
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from)
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTransfer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventTransfer()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.coin = Coin.decode(reader, reader.uint32())
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.from = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.to = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): EventTransfer {
    return {
      $type: EventTransfer.$type,
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
    }
  },

  toJSON(message: EventTransfer): unknown {
    const obj: any = {}
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined)
    message.from !== undefined && (obj.from = message.from)
    message.to !== undefined && (obj.to = message.to)
    return obj
  },

  create<I extends Exact<DeepPartial<EventTransfer>, I>>(base?: I): EventTransfer {
    return EventTransfer.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<EventTransfer>, I>>(
    object: I,
  ): EventTransfer {
    const message = createBaseEventTransfer()
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined
    message.from = object.from ?? ""
    message.to = object.to ?? ""
    return message
  },
}

messageTypeRegistry.set(EventTransfer.$type, EventTransfer)

function createBaseEventMintStable(): EventMintStable {
  return { $type: "nibiru.stablecoin.v1.EventMintStable", amount: "" }
}

export const EventMintStable = {
  $type: "nibiru.stablecoin.v1.EventMintStable" as const,

  encode(
    message: EventMintStable,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMintStable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventMintStable()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.amount = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): EventMintStable {
    return {
      $type: EventMintStable.$type,
      amount: isSet(object.amount) ? String(object.amount) : "",
    }
  },

  toJSON(message: EventMintStable): unknown {
    const obj: any = {}
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  create<I extends Exact<DeepPartial<EventMintStable>, I>>(base?: I): EventMintStable {
    return EventMintStable.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<EventMintStable>, I>>(
    object: I,
  ): EventMintStable {
    const message = createBaseEventMintStable()
    message.amount = object.amount ?? ""
    return message
  },
}

messageTypeRegistry.set(EventMintStable.$type, EventMintStable)

function createBaseEventBurnStable(): EventBurnStable {
  return { $type: "nibiru.stablecoin.v1.EventBurnStable", amount: "" }
}

export const EventBurnStable = {
  $type: "nibiru.stablecoin.v1.EventBurnStable" as const,

  encode(
    message: EventBurnStable,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnStable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventBurnStable()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.amount = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): EventBurnStable {
    return {
      $type: EventBurnStable.$type,
      amount: isSet(object.amount) ? String(object.amount) : "",
    }
  },

  toJSON(message: EventBurnStable): unknown {
    const obj: any = {}
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  create<I extends Exact<DeepPartial<EventBurnStable>, I>>(base?: I): EventBurnStable {
    return EventBurnStable.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<EventBurnStable>, I>>(
    object: I,
  ): EventBurnStable {
    const message = createBaseEventBurnStable()
    message.amount = object.amount ?? ""
    return message
  },
}

messageTypeRegistry.set(EventBurnStable.$type, EventBurnStable)

function createBaseEventMintNIBI(): EventMintNIBI {
  return { $type: "nibiru.stablecoin.v1.EventMintNIBI", amount: "" }
}

export const EventMintNIBI = {
  $type: "nibiru.stablecoin.v1.EventMintNIBI" as const,

  encode(message: EventMintNIBI, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMintNIBI {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventMintNIBI()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.amount = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): EventMintNIBI {
    return {
      $type: EventMintNIBI.$type,
      amount: isSet(object.amount) ? String(object.amount) : "",
    }
  },

  toJSON(message: EventMintNIBI): unknown {
    const obj: any = {}
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  create<I extends Exact<DeepPartial<EventMintNIBI>, I>>(base?: I): EventMintNIBI {
    return EventMintNIBI.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<EventMintNIBI>, I>>(
    object: I,
  ): EventMintNIBI {
    const message = createBaseEventMintNIBI()
    message.amount = object.amount ?? ""
    return message
  },
}

messageTypeRegistry.set(EventMintNIBI.$type, EventMintNIBI)

function createBaseEventBurnNIBI(): EventBurnNIBI {
  return { $type: "nibiru.stablecoin.v1.EventBurnNIBI", amount: "" }
}

export const EventBurnNIBI = {
  $type: "nibiru.stablecoin.v1.EventBurnNIBI" as const,

  encode(message: EventBurnNIBI, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnNIBI {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventBurnNIBI()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.amount = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): EventBurnNIBI {
    return {
      $type: EventBurnNIBI.$type,
      amount: isSet(object.amount) ? String(object.amount) : "",
    }
  },

  toJSON(message: EventBurnNIBI): unknown {
    const obj: any = {}
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  create<I extends Exact<DeepPartial<EventBurnNIBI>, I>>(base?: I): EventBurnNIBI {
    return EventBurnNIBI.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<EventBurnNIBI>, I>>(
    object: I,
  ): EventBurnNIBI {
    const message = createBaseEventBurnNIBI()
    message.amount = object.amount ?? ""
    return message
  },
}

messageTypeRegistry.set(EventBurnNIBI.$type, EventBurnNIBI)

function createBaseEventRecollateralize(): EventRecollateralize {
  return {
    $type: "nibiru.stablecoin.v1.EventRecollateralize",
    caller: "",
    inCoin: undefined,
    outCoin: undefined,
    collRatio: "",
  }
}

export const EventRecollateralize = {
  $type: "nibiru.stablecoin.v1.EventRecollateralize" as const,

  encode(
    message: EventRecollateralize,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.caller !== "") {
      writer.uint32(10).string(message.caller)
    }
    if (message.inCoin !== undefined) {
      Coin.encode(message.inCoin, writer.uint32(18).fork()).ldelim()
    }
    if (message.outCoin !== undefined) {
      Coin.encode(message.outCoin, writer.uint32(26).fork()).ldelim()
    }
    if (message.collRatio !== "") {
      writer.uint32(34).string(message.collRatio)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRecollateralize {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventRecollateralize()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.caller = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.inCoin = Coin.decode(reader, reader.uint32())
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.outCoin = Coin.decode(reader, reader.uint32())
          continue
        case 4:
          if (tag !== 34) {
            break
          }

          message.collRatio = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): EventRecollateralize {
    return {
      $type: EventRecollateralize.$type,
      caller: isSet(object.caller) ? String(object.caller) : "",
      inCoin: isSet(object.inCoin) ? Coin.fromJSON(object.inCoin) : undefined,
      outCoin: isSet(object.outCoin) ? Coin.fromJSON(object.outCoin) : undefined,
      collRatio: isSet(object.collRatio) ? String(object.collRatio) : "",
    }
  },

  toJSON(message: EventRecollateralize): unknown {
    const obj: any = {}
    message.caller !== undefined && (obj.caller = message.caller)
    message.inCoin !== undefined &&
      (obj.inCoin = message.inCoin ? Coin.toJSON(message.inCoin) : undefined)
    message.outCoin !== undefined &&
      (obj.outCoin = message.outCoin ? Coin.toJSON(message.outCoin) : undefined)
    message.collRatio !== undefined && (obj.collRatio = message.collRatio)
    return obj
  },

  create<I extends Exact<DeepPartial<EventRecollateralize>, I>>(
    base?: I,
  ): EventRecollateralize {
    return EventRecollateralize.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<EventRecollateralize>, I>>(
    object: I,
  ): EventRecollateralize {
    const message = createBaseEventRecollateralize()
    message.caller = object.caller ?? ""
    message.inCoin =
      object.inCoin !== undefined && object.inCoin !== null
        ? Coin.fromPartial(object.inCoin)
        : undefined
    message.outCoin =
      object.outCoin !== undefined && object.outCoin !== null
        ? Coin.fromPartial(object.outCoin)
        : undefined
    message.collRatio = object.collRatio ?? ""
    return message
  },
}

messageTypeRegistry.set(EventRecollateralize.$type, EventRecollateralize)

function createBaseEventBuyback(): EventBuyback {
  return {
    $type: "nibiru.stablecoin.v1.EventBuyback",
    caller: "",
    inCoin: undefined,
    outCoin: undefined,
    collRatio: "",
  }
}

export const EventBuyback = {
  $type: "nibiru.stablecoin.v1.EventBuyback" as const,

  encode(message: EventBuyback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.caller !== "") {
      writer.uint32(10).string(message.caller)
    }
    if (message.inCoin !== undefined) {
      Coin.encode(message.inCoin, writer.uint32(18).fork()).ldelim()
    }
    if (message.outCoin !== undefined) {
      Coin.encode(message.outCoin, writer.uint32(26).fork()).ldelim()
    }
    if (message.collRatio !== "") {
      writer.uint32(34).string(message.collRatio)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBuyback {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventBuyback()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.caller = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.inCoin = Coin.decode(reader, reader.uint32())
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.outCoin = Coin.decode(reader, reader.uint32())
          continue
        case 4:
          if (tag !== 34) {
            break
          }

          message.collRatio = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): EventBuyback {
    return {
      $type: EventBuyback.$type,
      caller: isSet(object.caller) ? String(object.caller) : "",
      inCoin: isSet(object.inCoin) ? Coin.fromJSON(object.inCoin) : undefined,
      outCoin: isSet(object.outCoin) ? Coin.fromJSON(object.outCoin) : undefined,
      collRatio: isSet(object.collRatio) ? String(object.collRatio) : "",
    }
  },

  toJSON(message: EventBuyback): unknown {
    const obj: any = {}
    message.caller !== undefined && (obj.caller = message.caller)
    message.inCoin !== undefined &&
      (obj.inCoin = message.inCoin ? Coin.toJSON(message.inCoin) : undefined)
    message.outCoin !== undefined &&
      (obj.outCoin = message.outCoin ? Coin.toJSON(message.outCoin) : undefined)
    message.collRatio !== undefined && (obj.collRatio = message.collRatio)
    return obj
  },

  create<I extends Exact<DeepPartial<EventBuyback>, I>>(base?: I): EventBuyback {
    return EventBuyback.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<EventBuyback>, I>>(object: I): EventBuyback {
    const message = createBaseEventBuyback()
    message.caller = object.caller ?? ""
    message.inCoin =
      object.inCoin !== undefined && object.inCoin !== null
        ? Coin.fromPartial(object.inCoin)
        : undefined
    message.outCoin =
      object.outCoin !== undefined && object.outCoin !== null
        ? Coin.fromPartial(object.outCoin)
        : undefined
    message.collRatio = object.collRatio ?? ""
    return message
  },
}

messageTypeRegistry.set(EventBuyback.$type, EventBuyback)

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
  ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never
    }

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
