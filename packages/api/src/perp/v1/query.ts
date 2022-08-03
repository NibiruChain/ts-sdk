/* eslint-disable */
import { Params, Position } from './state'
import Long from 'long'
import _m0 from 'protobufjs/minimal'

export const protobufPackage = 'nibiru.perp.v1'

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params
}

/**
 * QueryTraderPositionRequest is the request type for the position of the
 * x/perp module account.
 */
export interface QueryTraderPositionRequest {
  tokenPair: string
  trader: string
}

export interface QueryTraderPositionResponse {
  /** The position as it exists in the blockchain state */
  position?: Position
  /** The position's current notional value, if it were to be entirely closed (in margin units). */
  positionNotional: string
  /** The position's unrealized PnL. */
  unrealizedPnl: string
  /** The position's margin ratio, calculated from margin, unrealized PnL, and position notional. */
  marginRatio: string
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {}
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryParamsRequest()
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

  fromJSON(_: any): QueryParamsRequest {
    return {}
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest()
    return message
  },
}

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined }
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryParamsResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    }
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {}
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse()
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined
    return message
  },
}

function createBaseQueryTraderPositionRequest(): QueryTraderPositionRequest {
  return { tokenPair: '', trader: '' }
}

export const QueryTraderPositionRequest = {
  encode(message: QueryTraderPositionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenPair !== '') {
      writer.uint32(10).string(message.tokenPair)
    }
    if (message.trader !== '') {
      writer.uint32(18).string(message.trader)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderPositionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryTraderPositionRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.tokenPair = reader.string()
          break
        case 2:
          message.trader = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryTraderPositionRequest {
    return {
      tokenPair: isSet(object.tokenPair) ? String(object.tokenPair) : '',
      trader: isSet(object.trader) ? String(object.trader) : '',
    }
  },

  toJSON(message: QueryTraderPositionRequest): unknown {
    const obj: any = {}
    message.tokenPair !== undefined && (obj.tokenPair = message.tokenPair)
    message.trader !== undefined && (obj.trader = message.trader)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryTraderPositionRequest>, I>>(object: I): QueryTraderPositionRequest {
    const message = createBaseQueryTraderPositionRequest()
    message.tokenPair = object.tokenPair ?? ''
    message.trader = object.trader ?? ''
    return message
  },
}

function createBaseQueryTraderPositionResponse(): QueryTraderPositionResponse {
  return { position: undefined, positionNotional: '', unrealizedPnl: '', marginRatio: '' }
}

export const QueryTraderPositionResponse = {
  encode(message: QueryTraderPositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim()
    }
    if (message.positionNotional !== '') {
      writer.uint32(18).string(message.positionNotional)
    }
    if (message.unrealizedPnl !== '') {
      writer.uint32(26).string(message.unrealizedPnl)
    }
    if (message.marginRatio !== '') {
      writer.uint32(34).string(message.marginRatio)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraderPositionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryTraderPositionResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32())
          break
        case 2:
          message.positionNotional = reader.string()
          break
        case 3:
          message.unrealizedPnl = reader.string()
          break
        case 4:
          message.marginRatio = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryTraderPositionResponse {
    return {
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
      positionNotional: isSet(object.positionNotional) ? String(object.positionNotional) : '',
      unrealizedPnl: isSet(object.unrealizedPnl) ? String(object.unrealizedPnl) : '',
      marginRatio: isSet(object.marginRatio) ? String(object.marginRatio) : '',
    }
  },

  toJSON(message: QueryTraderPositionResponse): unknown {
    const obj: any = {}
    message.position !== undefined && (obj.position = message.position ? Position.toJSON(message.position) : undefined)
    message.positionNotional !== undefined && (obj.positionNotional = message.positionNotional)
    message.unrealizedPnl !== undefined && (obj.unrealizedPnl = message.unrealizedPnl)
    message.marginRatio !== undefined && (obj.marginRatio = message.marginRatio)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryTraderPositionResponse>, I>>(object: I): QueryTraderPositionResponse {
    const message = createBaseQueryTraderPositionResponse()
    message.position =
      object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined
    message.positionNotional = object.positionNotional ?? ''
    message.unrealizedPnl = object.unrealizedPnl ?? ''
    message.marginRatio = object.marginRatio ?? ''
    return message
  },
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the x/perp module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>
  TraderPosition(request: QueryTraderPositionRequest): Promise<QueryTraderPositionResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.Params = this.Params.bind(this)
    this.TraderPosition = this.TraderPosition.bind(this)
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish()
    const promise = this.rpc.request('nibiru.perp.v1.Query', 'Params', data)
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)))
  }

  TraderPosition(request: QueryTraderPositionRequest): Promise<QueryTraderPositionResponse> {
    const data = QueryTraderPositionRequest.encode(request).finish()
    const promise = this.rpc.request('nibiru.perp.v1.Query', 'TraderPosition', data)
    return promise.then((data) => QueryTraderPositionResponse.decode(new _m0.Reader(data)))
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
