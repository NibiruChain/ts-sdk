/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"
import { Coin } from "../../../cosmos/base/v1beta1/coin"
import { messageTypeRegistry } from "../../../typeRegistry"
import { Pool } from "./pool"

export const protobufPackage = "nibiru.spot.v1"

export interface EventPoolCreated {
  $type: "nibiru.spot.v1.EventPoolCreated"
  /** the address of the user who created the pool */
  creator: string
  /** the create pool fee */
  fees: Coin[]
  /** the final state of the pool */
  finalPool?: Pool
  /** the amount of pool shares that the user received */
  finalUserPoolShares?: Coin
}

export interface EventPoolJoined {
  $type: "nibiru.spot.v1.EventPoolJoined"
  /** the address of the user who joined the pool */
  address: string
  /** the amount of tokens that the user deposited */
  tokensIn: Coin[]
  /** the amount of pool shares that the user received */
  poolSharesOut?: Coin
  /** the amount of tokens remaining for the user */
  remCoins: Coin[]
  /** the final state of the pool */
  finalPool?: Pool
  /** the final amount of user pool shares */
  finalUserPoolShares?: Coin
}

export interface EventPoolExited {
  $type: "nibiru.spot.v1.EventPoolExited"
  /** the address of the user who exited the pool */
  address: string
  /** the amount of pool shares that the user exited with */
  poolSharesIn?: Coin
  /** the amount of tokens returned to the user */
  tokensOut: Coin[]
  /** the amount of fees collected by the pool */
  fees: Coin[]
  /** the final state of the pool */
  finalPool?: Pool
  /** the final amount of user pool shares */
  finalUserPoolShares?: Coin
}

export interface EventAssetsSwapped {
  $type: "nibiru.spot.v1.EventAssetsSwapped"
  /** the address of the user who swapped tokens */
  address: string
  /** the amount of tokens that the user deposited */
  tokenIn?: Coin
  /** the amount of tokens that the user received */
  tokenOut?: Coin
  /** the amount of fees collected by the pool */
  fee?: Coin
  /** the final state of the pool */
  finalPool?: Pool
}

function createBaseEventPoolCreated(): EventPoolCreated {
  return {
    $type: "nibiru.spot.v1.EventPoolCreated",
    creator: "",
    fees: [],
    finalPool: undefined,
    finalUserPoolShares: undefined,
  }
}

export const EventPoolCreated = {
  $type: "nibiru.spot.v1.EventPoolCreated" as const,

  encode(
    message: EventPoolCreated,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator)
    }
    for (const v of message.fees) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    if (message.finalPool !== undefined) {
      Pool.encode(message.finalPool, writer.uint32(34).fork()).ldelim()
    }
    if (message.finalUserPoolShares !== undefined) {
      Coin.encode(message.finalUserPoolShares, writer.uint32(42).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolCreated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventPoolCreated()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.creator = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.fees.push(Coin.decode(reader, reader.uint32()))
          continue
        case 4:
          if (tag !== 34) {
            break
          }

          message.finalPool = Pool.decode(reader, reader.uint32())
          continue
        case 5:
          if (tag !== 42) {
            break
          }

          message.finalUserPoolShares = Coin.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): EventPoolCreated {
    return {
      $type: EventPoolCreated.$type,
      creator: isSet(object.creator) ? String(object.creator) : "",
      fees: Array.isArray(object?.fees)
        ? object.fees.map((e: any) => Coin.fromJSON(e))
        : [],
      finalPool: isSet(object.finalPool) ? Pool.fromJSON(object.finalPool) : undefined,
      finalUserPoolShares: isSet(object.finalUserPoolShares)
        ? Coin.fromJSON(object.finalUserPoolShares)
        : undefined,
    }
  },

  toJSON(message: EventPoolCreated): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    if (message.fees) {
      obj.fees = message.fees.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.fees = []
    }
    message.finalPool !== undefined &&
      (obj.finalPool = message.finalPool ? Pool.toJSON(message.finalPool) : undefined)
    message.finalUserPoolShares !== undefined &&
      (obj.finalUserPoolShares = message.finalUserPoolShares
        ? Coin.toJSON(message.finalUserPoolShares)
        : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<EventPoolCreated>, I>>(
    base?: I,
  ): EventPoolCreated {
    return EventPoolCreated.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<EventPoolCreated>, I>>(
    object: I,
  ): EventPoolCreated {
    const message = createBaseEventPoolCreated()
    message.creator = object.creator ?? ""
    message.fees = object.fees?.map((e) => Coin.fromPartial(e)) || []
    message.finalPool =
      object.finalPool !== undefined && object.finalPool !== null
        ? Pool.fromPartial(object.finalPool)
        : undefined
    message.finalUserPoolShares =
      object.finalUserPoolShares !== undefined && object.finalUserPoolShares !== null
        ? Coin.fromPartial(object.finalUserPoolShares)
        : undefined
    return message
  },
}

messageTypeRegistry.set(EventPoolCreated.$type, EventPoolCreated)

function createBaseEventPoolJoined(): EventPoolJoined {
  return {
    $type: "nibiru.spot.v1.EventPoolJoined",
    address: "",
    tokensIn: [],
    poolSharesOut: undefined,
    remCoins: [],
    finalPool: undefined,
    finalUserPoolShares: undefined,
  }
}

export const EventPoolJoined = {
  $type: "nibiru.spot.v1.EventPoolJoined" as const,

  encode(
    message: EventPoolJoined,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address)
    }
    for (const v of message.tokensIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    if (message.poolSharesOut !== undefined) {
      Coin.encode(message.poolSharesOut, writer.uint32(26).fork()).ldelim()
    }
    for (const v of message.remCoins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim()
    }
    if (message.finalPool !== undefined) {
      Pool.encode(message.finalPool, writer.uint32(42).fork()).ldelim()
    }
    if (message.finalUserPoolShares !== undefined) {
      Coin.encode(message.finalUserPoolShares, writer.uint32(50).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolJoined {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventPoolJoined()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.address = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.tokensIn.push(Coin.decode(reader, reader.uint32()))
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.poolSharesOut = Coin.decode(reader, reader.uint32())
          continue
        case 4:
          if (tag !== 34) {
            break
          }

          message.remCoins.push(Coin.decode(reader, reader.uint32()))
          continue
        case 5:
          if (tag !== 42) {
            break
          }

          message.finalPool = Pool.decode(reader, reader.uint32())
          continue
        case 6:
          if (tag !== 50) {
            break
          }

          message.finalUserPoolShares = Coin.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): EventPoolJoined {
    return {
      $type: EventPoolJoined.$type,
      address: isSet(object.address) ? String(object.address) : "",
      tokensIn: Array.isArray(object?.tokensIn)
        ? object.tokensIn.map((e: any) => Coin.fromJSON(e))
        : [],
      poolSharesOut: isSet(object.poolSharesOut)
        ? Coin.fromJSON(object.poolSharesOut)
        : undefined,
      remCoins: Array.isArray(object?.remCoins)
        ? object.remCoins.map((e: any) => Coin.fromJSON(e))
        : [],
      finalPool: isSet(object.finalPool) ? Pool.fromJSON(object.finalPool) : undefined,
      finalUserPoolShares: isSet(object.finalUserPoolShares)
        ? Coin.fromJSON(object.finalUserPoolShares)
        : undefined,
    }
  },

  toJSON(message: EventPoolJoined): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    if (message.tokensIn) {
      obj.tokensIn = message.tokensIn.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.tokensIn = []
    }
    message.poolSharesOut !== undefined &&
      (obj.poolSharesOut = message.poolSharesOut
        ? Coin.toJSON(message.poolSharesOut)
        : undefined)
    if (message.remCoins) {
      obj.remCoins = message.remCoins.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.remCoins = []
    }
    message.finalPool !== undefined &&
      (obj.finalPool = message.finalPool ? Pool.toJSON(message.finalPool) : undefined)
    message.finalUserPoolShares !== undefined &&
      (obj.finalUserPoolShares = message.finalUserPoolShares
        ? Coin.toJSON(message.finalUserPoolShares)
        : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<EventPoolJoined>, I>>(base?: I): EventPoolJoined {
    return EventPoolJoined.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<EventPoolJoined>, I>>(
    object: I,
  ): EventPoolJoined {
    const message = createBaseEventPoolJoined()
    message.address = object.address ?? ""
    message.tokensIn = object.tokensIn?.map((e) => Coin.fromPartial(e)) || []
    message.poolSharesOut =
      object.poolSharesOut !== undefined && object.poolSharesOut !== null
        ? Coin.fromPartial(object.poolSharesOut)
        : undefined
    message.remCoins = object.remCoins?.map((e) => Coin.fromPartial(e)) || []
    message.finalPool =
      object.finalPool !== undefined && object.finalPool !== null
        ? Pool.fromPartial(object.finalPool)
        : undefined
    message.finalUserPoolShares =
      object.finalUserPoolShares !== undefined && object.finalUserPoolShares !== null
        ? Coin.fromPartial(object.finalUserPoolShares)
        : undefined
    return message
  },
}

messageTypeRegistry.set(EventPoolJoined.$type, EventPoolJoined)

function createBaseEventPoolExited(): EventPoolExited {
  return {
    $type: "nibiru.spot.v1.EventPoolExited",
    address: "",
    poolSharesIn: undefined,
    tokensOut: [],
    fees: [],
    finalPool: undefined,
    finalUserPoolShares: undefined,
  }
}

export const EventPoolExited = {
  $type: "nibiru.spot.v1.EventPoolExited" as const,

  encode(
    message: EventPoolExited,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address)
    }
    if (message.poolSharesIn !== undefined) {
      Coin.encode(message.poolSharesIn, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.tokensOut) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    for (const v of message.fees) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim()
    }
    if (message.finalPool !== undefined) {
      Pool.encode(message.finalPool, writer.uint32(42).fork()).ldelim()
    }
    if (message.finalUserPoolShares !== undefined) {
      Coin.encode(message.finalUserPoolShares, writer.uint32(50).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolExited {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventPoolExited()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.address = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.poolSharesIn = Coin.decode(reader, reader.uint32())
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.tokensOut.push(Coin.decode(reader, reader.uint32()))
          continue
        case 4:
          if (tag !== 34) {
            break
          }

          message.fees.push(Coin.decode(reader, reader.uint32()))
          continue
        case 5:
          if (tag !== 42) {
            break
          }

          message.finalPool = Pool.decode(reader, reader.uint32())
          continue
        case 6:
          if (tag !== 50) {
            break
          }

          message.finalUserPoolShares = Coin.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): EventPoolExited {
    return {
      $type: EventPoolExited.$type,
      address: isSet(object.address) ? String(object.address) : "",
      poolSharesIn: isSet(object.poolSharesIn)
        ? Coin.fromJSON(object.poolSharesIn)
        : undefined,
      tokensOut: Array.isArray(object?.tokensOut)
        ? object.tokensOut.map((e: any) => Coin.fromJSON(e))
        : [],
      fees: Array.isArray(object?.fees)
        ? object.fees.map((e: any) => Coin.fromJSON(e))
        : [],
      finalPool: isSet(object.finalPool) ? Pool.fromJSON(object.finalPool) : undefined,
      finalUserPoolShares: isSet(object.finalUserPoolShares)
        ? Coin.fromJSON(object.finalUserPoolShares)
        : undefined,
    }
  },

  toJSON(message: EventPoolExited): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    message.poolSharesIn !== undefined &&
      (obj.poolSharesIn = message.poolSharesIn
        ? Coin.toJSON(message.poolSharesIn)
        : undefined)
    if (message.tokensOut) {
      obj.tokensOut = message.tokensOut.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.tokensOut = []
    }
    if (message.fees) {
      obj.fees = message.fees.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.fees = []
    }
    message.finalPool !== undefined &&
      (obj.finalPool = message.finalPool ? Pool.toJSON(message.finalPool) : undefined)
    message.finalUserPoolShares !== undefined &&
      (obj.finalUserPoolShares = message.finalUserPoolShares
        ? Coin.toJSON(message.finalUserPoolShares)
        : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<EventPoolExited>, I>>(base?: I): EventPoolExited {
    return EventPoolExited.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<EventPoolExited>, I>>(
    object: I,
  ): EventPoolExited {
    const message = createBaseEventPoolExited()
    message.address = object.address ?? ""
    message.poolSharesIn =
      object.poolSharesIn !== undefined && object.poolSharesIn !== null
        ? Coin.fromPartial(object.poolSharesIn)
        : undefined
    message.tokensOut = object.tokensOut?.map((e) => Coin.fromPartial(e)) || []
    message.fees = object.fees?.map((e) => Coin.fromPartial(e)) || []
    message.finalPool =
      object.finalPool !== undefined && object.finalPool !== null
        ? Pool.fromPartial(object.finalPool)
        : undefined
    message.finalUserPoolShares =
      object.finalUserPoolShares !== undefined && object.finalUserPoolShares !== null
        ? Coin.fromPartial(object.finalUserPoolShares)
        : undefined
    return message
  },
}

messageTypeRegistry.set(EventPoolExited.$type, EventPoolExited)

function createBaseEventAssetsSwapped(): EventAssetsSwapped {
  return {
    $type: "nibiru.spot.v1.EventAssetsSwapped",
    address: "",
    tokenIn: undefined,
    tokenOut: undefined,
    fee: undefined,
    finalPool: undefined,
  }
}

export const EventAssetsSwapped = {
  $type: "nibiru.spot.v1.EventAssetsSwapped" as const,

  encode(
    message: EventAssetsSwapped,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address)
    }
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(18).fork()).ldelim()
    }
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(26).fork()).ldelim()
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(34).fork()).ldelim()
    }
    if (message.finalPool !== undefined) {
      Pool.encode(message.finalPool, writer.uint32(42).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAssetsSwapped {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventAssetsSwapped()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.address = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.tokenIn = Coin.decode(reader, reader.uint32())
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.tokenOut = Coin.decode(reader, reader.uint32())
          continue
        case 4:
          if (tag !== 34) {
            break
          }

          message.fee = Coin.decode(reader, reader.uint32())
          continue
        case 5:
          if (tag !== 42) {
            break
          }

          message.finalPool = Pool.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): EventAssetsSwapped {
    return {
      $type: EventAssetsSwapped.$type,
      address: isSet(object.address) ? String(object.address) : "",
      tokenIn: isSet(object.tokenIn) ? Coin.fromJSON(object.tokenIn) : undefined,
      tokenOut: isSet(object.tokenOut) ? Coin.fromJSON(object.tokenOut) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
      finalPool: isSet(object.finalPool) ? Pool.fromJSON(object.finalPool) : undefined,
    }
  },

  toJSON(message: EventAssetsSwapped): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    message.tokenIn !== undefined &&
      (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined)
    message.tokenOut !== undefined &&
      (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined)
    message.fee !== undefined &&
      (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined)
    message.finalPool !== undefined &&
      (obj.finalPool = message.finalPool ? Pool.toJSON(message.finalPool) : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<EventAssetsSwapped>, I>>(
    base?: I,
  ): EventAssetsSwapped {
    return EventAssetsSwapped.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<EventAssetsSwapped>, I>>(
    object: I,
  ): EventAssetsSwapped {
    const message = createBaseEventAssetsSwapped()
    message.address = object.address ?? ""
    message.tokenIn =
      object.tokenIn !== undefined && object.tokenIn !== null
        ? Coin.fromPartial(object.tokenIn)
        : undefined
    message.tokenOut =
      object.tokenOut !== undefined && object.tokenOut !== null
        ? Coin.fromPartial(object.tokenOut)
        : undefined
    message.fee =
      object.fee !== undefined && object.fee !== null
        ? Coin.fromPartial(object.fee)
        : undefined
    message.finalPool =
      object.finalPool !== undefined && object.finalPool !== null
        ? Pool.fromPartial(object.finalPool)
        : undefined
    return message
  },
}

messageTypeRegistry.set(EventAssetsSwapped.$type, EventAssetsSwapped)

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
