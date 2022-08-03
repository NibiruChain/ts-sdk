/* eslint-disable */
import { Lock } from './lock'
import { PageRequest, PageResponse } from '../../cosmos/base/query/v1beta1/pagination'
import Long from 'long'
import { Coin } from '../../cosmos/base/v1beta1/coin'
import _m0 from 'protobufjs/minimal'

export const protobufPackage = 'nibiru.lockup.v1'

export interface QueryLockedCoinsRequest {
  address: string
}

export interface QueryLockedCoinsResponse {
  lockedCoins: Coin[]
}

export interface QueryLockRequest {
  id: Long
}

export interface QueryLockResponse {
  lock?: Lock
}

export interface QueryLocksByAddress {
  address: string
  pagination?: PageRequest
}

export interface QueryLocksByAddressResponse {
  locks: Lock[]
  pagination?: PageResponse
}

function createBaseQueryLockedCoinsRequest(): QueryLockedCoinsRequest {
  return { address: '' }
}

export const QueryLockedCoinsRequest = {
  encode(message: QueryLockedCoinsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockedCoinsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryLockedCoinsRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryLockedCoinsRequest {
    return {
      address: isSet(object.address) ? String(object.address) : '',
    }
  },

  toJSON(message: QueryLockedCoinsRequest): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockedCoinsRequest>, I>>(object: I): QueryLockedCoinsRequest {
    const message = createBaseQueryLockedCoinsRequest()
    message.address = object.address ?? ''
    return message
  },
}

function createBaseQueryLockedCoinsResponse(): QueryLockedCoinsResponse {
  return { lockedCoins: [] }
}

export const QueryLockedCoinsResponse = {
  encode(message: QueryLockedCoinsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lockedCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockedCoinsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryLockedCoinsResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 3:
          message.lockedCoins.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryLockedCoinsResponse {
    return {
      lockedCoins: Array.isArray(object?.lockedCoins) ? object.lockedCoins.map((e: any) => Coin.fromJSON(e)) : [],
    }
  },

  toJSON(message: QueryLockedCoinsResponse): unknown {
    const obj: any = {}
    if (message.lockedCoins) {
      obj.lockedCoins = message.lockedCoins.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.lockedCoins = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockedCoinsResponse>, I>>(object: I): QueryLockedCoinsResponse {
    const message = createBaseQueryLockedCoinsResponse()
    message.lockedCoins = object.lockedCoins?.map((e) => Coin.fromPartial(e)) || []
    return message
  },
}

function createBaseQueryLockRequest(): QueryLockRequest {
  return { id: Long.UZERO }
}

export const QueryLockRequest = {
  encode(message: QueryLockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryLockRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryLockRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    }
  },

  toJSON(message: QueryLockRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockRequest>, I>>(object: I): QueryLockRequest {
    const message = createBaseQueryLockRequest()
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO
    return message
  },
}

function createBaseQueryLockResponse(): QueryLockResponse {
  return { lock: undefined }
}

export const QueryLockResponse = {
  encode(message: QueryLockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lock !== undefined) {
      Lock.encode(message.lock, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryLockResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.lock = Lock.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryLockResponse {
    return {
      lock: isSet(object.lock) ? Lock.fromJSON(object.lock) : undefined,
    }
  },

  toJSON(message: QueryLockResponse): unknown {
    const obj: any = {}
    message.lock !== undefined && (obj.lock = message.lock ? Lock.toJSON(message.lock) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockResponse>, I>>(object: I): QueryLockResponse {
    const message = createBaseQueryLockResponse()
    message.lock = object.lock !== undefined && object.lock !== null ? Lock.fromPartial(object.lock) : undefined
    return message
  },
}

function createBaseQueryLocksByAddress(): QueryLocksByAddress {
  return { address: '', pagination: undefined }
}

export const QueryLocksByAddress = {
  encode(message: QueryLocksByAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address)
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLocksByAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryLocksByAddress()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string()
          break
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryLocksByAddress {
    return {
      address: isSet(object.address) ? String(object.address) : '',
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    }
  },

  toJSON(message: QueryLocksByAddress): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryLocksByAddress>, I>>(object: I): QueryLocksByAddress {
    const message = createBaseQueryLocksByAddress()
    message.address = object.address ?? ''
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined
    return message
  },
}

function createBaseQueryLocksByAddressResponse(): QueryLocksByAddressResponse {
  return { locks: [], pagination: undefined }
}

export const QueryLocksByAddressResponse = {
  encode(message: QueryLocksByAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      Lock.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLocksByAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryLocksByAddressResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.locks.push(Lock.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryLocksByAddressResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => Lock.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    }
  },

  toJSON(message: QueryLocksByAddressResponse): unknown {
    const obj: any = {}
    if (message.locks) {
      obj.locks = message.locks.map((e) => (e ? Lock.toJSON(e) : undefined))
    } else {
      obj.locks = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryLocksByAddressResponse>, I>>(object: I): QueryLocksByAddressResponse {
    const message = createBaseQueryLocksByAddressResponse()
    message.locks = object.locks?.map((e) => Lock.fromPartial(e)) || []
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined
    return message
  },
}

export interface Query {
  LockedCoins(request: QueryLockedCoinsRequest): Promise<QueryLockedCoinsResponse>
  Lock(request: QueryLockRequest): Promise<QueryLockResponse>
  LocksByAddress(request: QueryLocksByAddress): Promise<QueryLocksByAddressResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.LockedCoins = this.LockedCoins.bind(this)
    this.Lock = this.Lock.bind(this)
    this.LocksByAddress = this.LocksByAddress.bind(this)
  }
  LockedCoins(request: QueryLockedCoinsRequest): Promise<QueryLockedCoinsResponse> {
    const data = QueryLockedCoinsRequest.encode(request).finish()
    const promise = this.rpc.request('nibiru.lockup.v1.Query', 'LockedCoins', data)
    return promise.then((data) => QueryLockedCoinsResponse.decode(new _m0.Reader(data)))
  }

  Lock(request: QueryLockRequest): Promise<QueryLockResponse> {
    const data = QueryLockRequest.encode(request).finish()
    const promise = this.rpc.request('nibiru.lockup.v1.Query', 'Lock', data)
    return promise.then((data) => QueryLockResponse.decode(new _m0.Reader(data)))
  }

  LocksByAddress(request: QueryLocksByAddress): Promise<QueryLocksByAddressResponse> {
    const data = QueryLocksByAddress.encode(request).finish()
    const promise = this.rpc.request('nibiru.lockup.v1.Query', 'LocksByAddress', data)
    return promise.then((data) => QueryLocksByAddressResponse.decode(new _m0.Reader(data)))
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
