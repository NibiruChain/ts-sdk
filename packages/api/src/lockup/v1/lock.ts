/* eslint-disable */
import { Duration } from "../../google/protobuf/duration"
import { Timestamp } from "../../google/protobuf/timestamp"
import Long from "long"
import { Coin } from "../../cosmos/base/v1beta1/coin"
import _m0 from "protobufjs/minimal"

export const protobufPackage = "nibiru.lockup.v1"

/**
 * Lock represents a users locked tokens for a period of time.
 * It stores owner, duration, unlock time and the amount of coins locked.
 */
export interface Lock {
  /** unique autoincrementing numeric lock id */
  lockId: Long
  /** the user's address who owns the tokens that are locked */
  owner: string
  /** the duration that the lock is locked for */
  duration?: Duration
  /** when the lock was unlocked */
  endTime?: Date
  /** the coins locked in this Lock */
  coins: Coin[]
}

function createBaseLock(): Lock {
  return {
    lockId: Long.UZERO,
    owner: "",
    duration: undefined,
    endTime: undefined,
    coins: [],
  }
}

export const Lock = {
  encode(message: Lock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId)
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner)
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim()
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(34).fork()).ldelim()
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Lock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseLock()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.uint64() as Long
          break
        case 2:
          message.owner = reader.string()
          break
        case 3:
          message.duration = Duration.decode(reader, reader.uint32())
          break
        case 4:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()))
          break
        case 5:
          message.coins.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Lock {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    }
  },

  toJSON(message: Lock): unknown {
    const obj: any = {}
    message.lockId !== undefined &&
      (obj.lockId = (message.lockId || Long.UZERO).toString())
    message.owner !== undefined && (obj.owner = message.owner)
    message.duration !== undefined &&
      (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined)
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString())
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.coins = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Lock>, I>>(object: I): Lock {
    const message = createBaseLock()
    message.lockId =
      object.lockId !== undefined && object.lockId !== null
        ? Long.fromValue(object.lockId)
        : Long.UZERO
    message.owner = object.owner ?? ""
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Duration.fromPartial(object.duration)
        : undefined
    message.endTime = object.endTime ?? undefined
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || []
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
  } else if (typeof o === "string") {
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
