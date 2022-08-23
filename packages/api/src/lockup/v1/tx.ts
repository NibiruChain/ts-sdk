/* eslint-disable */
import { Duration } from "../../google/protobuf/duration"
import { Timestamp } from "../../google/protobuf/timestamp"
import Long from "long"
import { Coin } from "../../cosmos/base/v1beta1/coin"
import _m0 from "protobufjs/minimal"

export const protobufPackage = "nibiru.lockup.v1"

export interface MsgLockTokens {
  owner: string
  duration?: Duration
  coins: Coin[]
}

export interface MsgLockTokensResponse {
  lockId: Long
}

export interface MsgInitiateUnlock {
  owner: string
  lockId: Long
}

/** TODO(mercilex): maybe report unlock time */
export interface MsgInitiateUnlockResponse {}

export interface MsgUnlock {
  owner: string
  lockId: Long
}

export interface MsgUnlockResponse {}

export interface EventLock {
  lockId: Long
  owner: string
  duration?: Duration
  coins: Coin[]
}

export interface EventUnlockInitiated {
  lockId: Long
  owner: string
  coins: Coin[]
  unlockingAt?: Date
}

export interface EventUnlock {
  lockId: Long
  owner: string
  coins: Coin[]
}

function createBaseMsgLockTokens(): MsgLockTokens {
  return { owner: "", duration: undefined, coins: [] }
}

export const MsgLockTokens = {
  encode(message: MsgLockTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner)
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgLockTokens()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string()
          break
        case 2:
          message.duration = Duration.decode(reader, reader.uint32())
          break
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgLockTokens {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    }
  },

  toJSON(message: MsgLockTokens): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.duration !== undefined &&
      (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined)
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.coins = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgLockTokens>, I>>(
    object: I,
  ): MsgLockTokens {
    const message = createBaseMsgLockTokens()
    message.owner = object.owner ?? ""
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Duration.fromPartial(object.duration)
        : undefined
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || []
    return message
  },
}

function createBaseMsgLockTokensResponse(): MsgLockTokensResponse {
  return { lockId: Long.UZERO }
}

export const MsgLockTokensResponse = {
  encode(
    message: MsgLockTokensResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgLockTokensResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.lockId = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgLockTokensResponse {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO,
    }
  },

  toJSON(message: MsgLockTokensResponse): unknown {
    const obj: any = {}
    message.lockId !== undefined &&
      (obj.lockId = (message.lockId || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgLockTokensResponse>, I>>(
    object: I,
  ): MsgLockTokensResponse {
    const message = createBaseMsgLockTokensResponse()
    message.lockId =
      object.lockId !== undefined && object.lockId !== null
        ? Long.fromValue(object.lockId)
        : Long.UZERO
    return message
  },
}

function createBaseMsgInitiateUnlock(): MsgInitiateUnlock {
  return { owner: "", lockId: Long.UZERO }
}

export const MsgInitiateUnlock = {
  encode(
    message: MsgInitiateUnlock,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner)
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitiateUnlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgInitiateUnlock()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string()
          break
        case 2:
          message.lockId = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgInitiateUnlock {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO,
    }
  },

  toJSON(message: MsgInitiateUnlock): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.lockId !== undefined &&
      (obj.lockId = (message.lockId || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgInitiateUnlock>, I>>(
    object: I,
  ): MsgInitiateUnlock {
    const message = createBaseMsgInitiateUnlock()
    message.owner = object.owner ?? ""
    message.lockId =
      object.lockId !== undefined && object.lockId !== null
        ? Long.fromValue(object.lockId)
        : Long.UZERO
    return message
  },
}

function createBaseMsgInitiateUnlockResponse(): MsgInitiateUnlockResponse {
  return {}
}

export const MsgInitiateUnlockResponse = {
  encode(
    _: MsgInitiateUnlockResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitiateUnlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgInitiateUnlockResponse()
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

  fromJSON(_: any): MsgInitiateUnlockResponse {
    return {}
  },

  toJSON(_: MsgInitiateUnlockResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgInitiateUnlockResponse>, I>>(
    _: I,
  ): MsgInitiateUnlockResponse {
    const message = createBaseMsgInitiateUnlockResponse()
    return message
  },
}

function createBaseMsgUnlock(): MsgUnlock {
  return { owner: "", lockId: Long.UZERO }
}

export const MsgUnlock = {
  encode(message: MsgUnlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner)
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgUnlock()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string()
          break
        case 2:
          message.lockId = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUnlock {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO,
    }
  },

  toJSON(message: MsgUnlock): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.lockId !== undefined &&
      (obj.lockId = (message.lockId || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnlock>, I>>(object: I): MsgUnlock {
    const message = createBaseMsgUnlock()
    message.owner = object.owner ?? ""
    message.lockId =
      object.lockId !== undefined && object.lockId !== null
        ? Long.fromValue(object.lockId)
        : Long.UZERO
    return message
  },
}

function createBaseMsgUnlockResponse(): MsgUnlockResponse {
  return {}
}

export const MsgUnlockResponse = {
  encode(_: MsgUnlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgUnlockResponse()
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

  fromJSON(_: any): MsgUnlockResponse {
    return {}
  },

  toJSON(_: MsgUnlockResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnlockResponse>, I>>(
    _: I,
  ): MsgUnlockResponse {
    const message = createBaseMsgUnlockResponse()
    return message
  },
}

function createBaseEventLock(): EventLock {
  return { lockId: Long.UZERO, owner: "", duration: undefined, coins: [] }
}

export const EventLock = {
  encode(message: EventLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId)
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner)
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim()
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventLock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventLock()
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
          message.coins.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventLock {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    }
  },

  toJSON(message: EventLock): unknown {
    const obj: any = {}
    message.lockId !== undefined &&
      (obj.lockId = (message.lockId || Long.UZERO).toString())
    message.owner !== undefined && (obj.owner = message.owner)
    message.duration !== undefined &&
      (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined)
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.coins = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EventLock>, I>>(object: I): EventLock {
    const message = createBaseEventLock()
    message.lockId =
      object.lockId !== undefined && object.lockId !== null
        ? Long.fromValue(object.lockId)
        : Long.UZERO
    message.owner = object.owner ?? ""
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Duration.fromPartial(object.duration)
        : undefined
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || []
    return message
  },
}

function createBaseEventUnlockInitiated(): EventUnlockInitiated {
  return { lockId: Long.UZERO, owner: "", coins: [], unlockingAt: undefined }
}

export const EventUnlockInitiated = {
  encode(
    message: EventUnlockInitiated,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId)
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner)
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    if (message.unlockingAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.unlockingAt),
        writer.uint32(34).fork(),
      ).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUnlockInitiated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventUnlockInitiated()
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
          message.coins.push(Coin.decode(reader, reader.uint32()))
          break
        case 4:
          message.unlockingAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventUnlockInitiated {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
      unlockingAt: isSet(object.unlockingAt)
        ? fromJsonTimestamp(object.unlockingAt)
        : undefined,
    }
  },

  toJSON(message: EventUnlockInitiated): unknown {
    const obj: any = {}
    message.lockId !== undefined &&
      (obj.lockId = (message.lockId || Long.UZERO).toString())
    message.owner !== undefined && (obj.owner = message.owner)
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.coins = []
    }
    message.unlockingAt !== undefined &&
      (obj.unlockingAt = message.unlockingAt.toISOString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EventUnlockInitiated>, I>>(
    object: I,
  ): EventUnlockInitiated {
    const message = createBaseEventUnlockInitiated()
    message.lockId =
      object.lockId !== undefined && object.lockId !== null
        ? Long.fromValue(object.lockId)
        : Long.UZERO
    message.owner = object.owner ?? ""
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || []
    message.unlockingAt = object.unlockingAt ?? undefined
    return message
  },
}

function createBaseEventUnlock(): EventUnlock {
  return { lockId: Long.UZERO, owner: "", coins: [] }
}

export const EventUnlock = {
  encode(message: EventUnlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId)
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner)
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUnlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventUnlock()
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
          message.coins.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventUnlock {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    }
  },

  toJSON(message: EventUnlock): unknown {
    const obj: any = {}
    message.lockId !== undefined &&
      (obj.lockId = (message.lockId || Long.UZERO).toString())
    message.owner !== undefined && (obj.owner = message.owner)
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.coins = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EventUnlock>, I>>(object: I): EventUnlock {
    const message = createBaseEventUnlock()
    message.lockId =
      object.lockId !== undefined && object.lockId !== null
        ? Long.fromValue(object.lockId)
        : Long.UZERO
    message.owner = object.owner ?? ""
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || []
    return message
  },
}

/** Msg defines the Msg service. */
export interface Msg {
  /** LockTokens lock tokens */
  LockTokens(request: MsgLockTokens): Promise<MsgLockTokensResponse>
  InitiateUnlock(request: MsgInitiateUnlock): Promise<MsgInitiateUnlockResponse>
  Unlock(request: MsgUnlock): Promise<MsgUnlockResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.LockTokens = this.LockTokens.bind(this)
    this.InitiateUnlock = this.InitiateUnlock.bind(this)
    this.Unlock = this.Unlock.bind(this)
  }
  LockTokens(request: MsgLockTokens): Promise<MsgLockTokensResponse> {
    const data = MsgLockTokens.encode(request).finish()
    const promise = this.rpc.request("nibiru.lockup.v1.Msg", "LockTokens", data)
    return promise.then((data) => MsgLockTokensResponse.decode(new _m0.Reader(data)))
  }

  InitiateUnlock(request: MsgInitiateUnlock): Promise<MsgInitiateUnlockResponse> {
    const data = MsgInitiateUnlock.encode(request).finish()
    const promise = this.rpc.request("nibiru.lockup.v1.Msg", "InitiateUnlock", data)
    return promise.then((data) =>
      MsgInitiateUnlockResponse.decode(new _m0.Reader(data)),
    )
  }

  Unlock(request: MsgUnlock): Promise<MsgUnlockResponse> {
    const data = MsgUnlock.encode(request).finish()
    const promise = this.rpc.request("nibiru.lockup.v1.Msg", "Unlock", data)
    return promise.then((data) => MsgUnlockResponse.decode(new _m0.Reader(data)))
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
