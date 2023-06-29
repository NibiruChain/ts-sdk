/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"
import { Timestamp } from "../../../google/protobuf/timestamp"

export const protobufPackage = "nibiru.epochs.v1"

export interface EventEpochStart {
  /** Epoch number, starting from 1. */
  epochNumber: Long
  /** The start timestamp of the epoch. */
  epochStartTime?: Date
}

export interface EventEpochEnd {
  /** Epoch number, starting from 1. */
  epochNumber: Long
}

function createBaseEventEpochStart(): EventEpochStart {
  return { epochNumber: Long.UZERO, epochStartTime: undefined }
}

export const EventEpochStart = {
  encode(
    message: EventEpochStart,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.epochNumber.isZero()) {
      writer.uint32(8).uint64(message.epochNumber)
    }
    if (message.epochStartTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.epochStartTime),
        writer.uint32(18).fork(),
      ).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEpochStart {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventEpochStart()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.epochNumber = reader.uint64() as Long
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.epochStartTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          )
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): EventEpochStart {
    return {
      epochNumber: isSet(object.epochNumber)
        ? Long.fromValue(object.epochNumber)
        : Long.UZERO,
      epochStartTime: isSet(object.epochStartTime)
        ? fromJsonTimestamp(object.epochStartTime)
        : undefined,
    }
  },

  toJSON(message: EventEpochStart): unknown {
    const obj: any = {}
    message.epochNumber !== undefined &&
      (obj.epochNumber = (message.epochNumber || Long.UZERO).toString())
    message.epochStartTime !== undefined &&
      (obj.epochStartTime = message.epochStartTime.toISOString())
    return obj
  },

  create<I extends Exact<DeepPartial<EventEpochStart>, I>>(base?: I): EventEpochStart {
    return EventEpochStart.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<EventEpochStart>, I>>(
    object: I,
  ): EventEpochStart {
    const message = createBaseEventEpochStart()
    message.epochNumber =
      object.epochNumber !== undefined && object.epochNumber !== null
        ? Long.fromValue(object.epochNumber)
        : Long.UZERO
    message.epochStartTime = object.epochStartTime ?? undefined
    return message
  },
}

function createBaseEventEpochEnd(): EventEpochEnd {
  return { epochNumber: Long.UZERO }
}

export const EventEpochEnd = {
  encode(message: EventEpochEnd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epochNumber.isZero()) {
      writer.uint32(8).uint64(message.epochNumber)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEpochEnd {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventEpochEnd()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.epochNumber = reader.uint64() as Long
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): EventEpochEnd {
    return {
      epochNumber: isSet(object.epochNumber)
        ? Long.fromValue(object.epochNumber)
        : Long.UZERO,
    }
  },

  toJSON(message: EventEpochEnd): unknown {
    const obj: any = {}
    message.epochNumber !== undefined &&
      (obj.epochNumber = (message.epochNumber || Long.UZERO).toString())
    return obj
  },

  create<I extends Exact<DeepPartial<EventEpochEnd>, I>>(base?: I): EventEpochEnd {
    return EventEpochEnd.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<EventEpochEnd>, I>>(
    object: I,
  ): EventEpochEnd {
    const message = createBaseEventEpochEnd()
    message.epochNumber =
      object.epochNumber !== undefined && object.epochNumber !== null
        ? Long.fromValue(object.epochNumber)
        : Long.UZERO
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
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never
    }

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000)
  const nanos = (date.getTime() % 1_000) * 1_000_000
  return { seconds, nanos }
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000
  millis += (t.nanos || 0) / 1_000_000
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
