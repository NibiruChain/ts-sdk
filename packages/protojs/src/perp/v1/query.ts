/* eslint-disable */
import { Params, Position, Metrics } from "./state"
import Long from "long"
import * as _m0 from "protobufjs/minimal"

export const protobufPackage = "nibiru.perp.v1"

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params
}

/** ---------------------------------------- Positions */
export interface QueryPositionsRequest {
  trader: string
}

export interface QueryPositionsResponse {
  positions: QueryPositionResponse[]
}

/**
 * QueryPositionRequest is the request type for the position of the x/perp
 * module account.
 */
export interface QueryPositionRequest {
  pair: string
  trader: string
}

export interface QueryPositionResponse {
  /** The position as it exists in the blockchain state */
  position?: Position
  /**
   * The position's current notional value, if it were to be entirely closed (in
   * margin units).
   */
  positionNotional: string
  /** The position's unrealized PnL. */
  unrealizedPnl: string
  /**
   * margin ratio of the position based on the mark price, mark TWAP. The higher
   * value of the possible margin ratios (TWAP and instantaneous) is taken to be
   * 'marginRatioMark'. Calculated from margin, unrealized PnL, and position
   * notional.
   */
  marginRatioMark: string
  /**
   * margin ratio of the position based on the index price. Calculated from
   * margin, unrealized PnL, and position notional.
   */
  marginRatioIndex: string
  /** BlockNumber is current block number at the time of query. */
  blockNumber: Long
}

export interface QueryCumulativePremiumFractionRequest {
  /** the pair to query for */
  pair: string
}

export interface QueryCumulativePremiumFractionResponse {
  /** The latest cumulative premium fraction. */
  cumulativePremiumFraction: string
  estimatedNextCumulativePremiumFraction: string
}

export interface QueryMetricsRequest {
  /** the pair to query for */
  pair: string
}

export interface QueryMetricsResponse {
  /** list of perp metrics */
  metrics?: Metrics
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

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I,
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest()
    return message
  },
}

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined }
}

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I,
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse()
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined
    return message
  },
}

function createBaseQueryPositionsRequest(): QueryPositionsRequest {
  return { trader: "" }
}

export const QueryPositionsRequest = {
  encode(
    message: QueryPositionsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.trader !== "") {
      writer.uint32(10).string(message.trader)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryPositionsRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.trader = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryPositionsRequest {
    return {
      trader: isSet(object.trader) ? String(object.trader) : "",
    }
  },

  toJSON(message: QueryPositionsRequest): unknown {
    const obj: any = {}
    message.trader !== undefined && (obj.trader = message.trader)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryPositionsRequest>, I>>(
    object: I,
  ): QueryPositionsRequest {
    const message = createBaseQueryPositionsRequest()
    message.trader = object.trader ?? ""
    return message
  },
}

function createBaseQueryPositionsResponse(): QueryPositionsResponse {
  return { positions: [] }
}

export const QueryPositionsResponse = {
  encode(
    message: QueryPositionsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.positions) {
      QueryPositionResponse.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryPositionsResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.positions.push(QueryPositionResponse.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryPositionsResponse {
    return {
      positions: Array.isArray(object?.positions)
        ? object.positions.map((e: any) => QueryPositionResponse.fromJSON(e))
        : [],
    }
  },

  toJSON(message: QueryPositionsResponse): unknown {
    const obj: any = {}
    if (message.positions) {
      obj.positions = message.positions.map((e) =>
        e ? QueryPositionResponse.toJSON(e) : undefined,
      )
    } else {
      obj.positions = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryPositionsResponse>, I>>(
    object: I,
  ): QueryPositionsResponse {
    const message = createBaseQueryPositionsResponse()
    message.positions =
      object.positions?.map((e) => QueryPositionResponse.fromPartial(e)) || []
    return message
  },
}

function createBaseQueryPositionRequest(): QueryPositionRequest {
  return { pair: "", trader: "" }
}

export const QueryPositionRequest = {
  encode(
    message: QueryPositionRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair)
    }
    if (message.trader !== "") {
      writer.uint32(18).string(message.trader)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryPositionRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pair = reader.string()
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

  fromJSON(object: any): QueryPositionRequest {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      trader: isSet(object.trader) ? String(object.trader) : "",
    }
  },

  toJSON(message: QueryPositionRequest): unknown {
    const obj: any = {}
    message.pair !== undefined && (obj.pair = message.pair)
    message.trader !== undefined && (obj.trader = message.trader)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryPositionRequest>, I>>(
    object: I,
  ): QueryPositionRequest {
    const message = createBaseQueryPositionRequest()
    message.pair = object.pair ?? ""
    message.trader = object.trader ?? ""
    return message
  },
}

function createBaseQueryPositionResponse(): QueryPositionResponse {
  return {
    position: undefined,
    positionNotional: "",
    unrealizedPnl: "",
    marginRatioMark: "",
    marginRatioIndex: "",
    blockNumber: Long.ZERO,
  }
}

export const QueryPositionResponse = {
  encode(
    message: QueryPositionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim()
    }
    if (message.positionNotional !== "") {
      writer.uint32(18).string(message.positionNotional)
    }
    if (message.unrealizedPnl !== "") {
      writer.uint32(26).string(message.unrealizedPnl)
    }
    if (message.marginRatioMark !== "") {
      writer.uint32(34).string(message.marginRatioMark)
    }
    if (message.marginRatioIndex !== "") {
      writer.uint32(42).string(message.marginRatioIndex)
    }
    if (!message.blockNumber.isZero()) {
      writer.uint32(56).int64(message.blockNumber)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryPositionResponse()
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
          message.marginRatioMark = reader.string()
          break
        case 5:
          message.marginRatioIndex = reader.string()
          break
        case 7:
          message.blockNumber = reader.int64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryPositionResponse {
    return {
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
      positionNotional: isSet(object.positionNotional)
        ? String(object.positionNotional)
        : "",
      unrealizedPnl: isSet(object.unrealizedPnl) ? String(object.unrealizedPnl) : "",
      marginRatioMark: isSet(object.marginRatioMark)
        ? String(object.marginRatioMark)
        : "",
      marginRatioIndex: isSet(object.marginRatioIndex)
        ? String(object.marginRatioIndex)
        : "",
      blockNumber: isSet(object.blockNumber)
        ? Long.fromValue(object.blockNumber)
        : Long.ZERO,
    }
  },

  toJSON(message: QueryPositionResponse): unknown {
    const obj: any = {}
    message.position !== undefined &&
      (obj.position = message.position ? Position.toJSON(message.position) : undefined)
    message.positionNotional !== undefined &&
      (obj.positionNotional = message.positionNotional)
    message.unrealizedPnl !== undefined && (obj.unrealizedPnl = message.unrealizedPnl)
    message.marginRatioMark !== undefined &&
      (obj.marginRatioMark = message.marginRatioMark)
    message.marginRatioIndex !== undefined &&
      (obj.marginRatioIndex = message.marginRatioIndex)
    message.blockNumber !== undefined &&
      (obj.blockNumber = (message.blockNumber || Long.ZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryPositionResponse>, I>>(
    object: I,
  ): QueryPositionResponse {
    const message = createBaseQueryPositionResponse()
    message.position =
      object.position !== undefined && object.position !== null
        ? Position.fromPartial(object.position)
        : undefined
    message.positionNotional = object.positionNotional ?? ""
    message.unrealizedPnl = object.unrealizedPnl ?? ""
    message.marginRatioMark = object.marginRatioMark ?? ""
    message.marginRatioIndex = object.marginRatioIndex ?? ""
    message.blockNumber =
      object.blockNumber !== undefined && object.blockNumber !== null
        ? Long.fromValue(object.blockNumber)
        : Long.ZERO
    return message
  },
}

function createBaseQueryCumulativePremiumFractionRequest(): QueryCumulativePremiumFractionRequest {
  return { pair: "" }
}

export const QueryCumulativePremiumFractionRequest = {
  encode(
    message: QueryCumulativePremiumFractionRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryCumulativePremiumFractionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryCumulativePremiumFractionRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pair = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryCumulativePremiumFractionRequest {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
    }
  },

  toJSON(message: QueryCumulativePremiumFractionRequest): unknown {
    const obj: any = {}
    message.pair !== undefined && (obj.pair = message.pair)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryCumulativePremiumFractionRequest>, I>>(
    object: I,
  ): QueryCumulativePremiumFractionRequest {
    const message = createBaseQueryCumulativePremiumFractionRequest()
    message.pair = object.pair ?? ""
    return message
  },
}

function createBaseQueryCumulativePremiumFractionResponse(): QueryCumulativePremiumFractionResponse {
  return { cumulativePremiumFraction: "", estimatedNextCumulativePremiumFraction: "" }
}

export const QueryCumulativePremiumFractionResponse = {
  encode(
    message: QueryCumulativePremiumFractionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cumulativePremiumFraction !== "") {
      writer.uint32(10).string(message.cumulativePremiumFraction)
    }
    if (message.estimatedNextCumulativePremiumFraction !== "") {
      writer.uint32(18).string(message.estimatedNextCumulativePremiumFraction)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryCumulativePremiumFractionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryCumulativePremiumFractionResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.cumulativePremiumFraction = reader.string()
          break
        case 2:
          message.estimatedNextCumulativePremiumFraction = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryCumulativePremiumFractionResponse {
    return {
      cumulativePremiumFraction: isSet(object.cumulativePremiumFraction)
        ? String(object.cumulativePremiumFraction)
        : "",
      estimatedNextCumulativePremiumFraction: isSet(
        object.estimatedNextCumulativePremiumFraction,
      )
        ? String(object.estimatedNextCumulativePremiumFraction)
        : "",
    }
  },

  toJSON(message: QueryCumulativePremiumFractionResponse): unknown {
    const obj: any = {}
    message.cumulativePremiumFraction !== undefined &&
      (obj.cumulativePremiumFraction = message.cumulativePremiumFraction)
    message.estimatedNextCumulativePremiumFraction !== undefined &&
      (obj.estimatedNextCumulativePremiumFraction =
        message.estimatedNextCumulativePremiumFraction)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryCumulativePremiumFractionResponse>, I>>(
    object: I,
  ): QueryCumulativePremiumFractionResponse {
    const message = createBaseQueryCumulativePremiumFractionResponse()
    message.cumulativePremiumFraction = object.cumulativePremiumFraction ?? ""
    message.estimatedNextCumulativePremiumFraction =
      object.estimatedNextCumulativePremiumFraction ?? ""
    return message
  },
}

function createBaseQueryMetricsRequest(): QueryMetricsRequest {
  return { pair: "" }
}

export const QueryMetricsRequest = {
  encode(
    message: QueryMetricsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMetricsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryMetricsRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pair = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryMetricsRequest {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
    }
  },

  toJSON(message: QueryMetricsRequest): unknown {
    const obj: any = {}
    message.pair !== undefined && (obj.pair = message.pair)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryMetricsRequest>, I>>(
    object: I,
  ): QueryMetricsRequest {
    const message = createBaseQueryMetricsRequest()
    message.pair = object.pair ?? ""
    return message
  },
}

function createBaseQueryMetricsResponse(): QueryMetricsResponse {
  return { metrics: undefined }
}

export const QueryMetricsResponse = {
  encode(
    message: QueryMetricsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.metrics !== undefined) {
      Metrics.encode(message.metrics, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMetricsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryMetricsResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.metrics = Metrics.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryMetricsResponse {
    return {
      metrics: isSet(object.metrics) ? Metrics.fromJSON(object.metrics) : undefined,
    }
  },

  toJSON(message: QueryMetricsResponse): unknown {
    const obj: any = {}
    message.metrics !== undefined &&
      (obj.metrics = message.metrics ? Metrics.toJSON(message.metrics) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryMetricsResponse>, I>>(
    object: I,
  ): QueryMetricsResponse {
    const message = createBaseQueryMetricsResponse()
    message.metrics =
      object.metrics !== undefined && object.metrics !== null
        ? Metrics.fromPartial(object.metrics)
        : undefined
    return message
  },
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the x/perp module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>
  QueryPosition(request: QueryPositionRequest): Promise<QueryPositionResponse>
  QueryPositions(request: QueryPositionsRequest): Promise<QueryPositionsResponse>
  /** Queries the latest cumulative premium fraction and the estimated next cumulative premium fraction. */
  CumulativePremiumFraction(
    request: QueryCumulativePremiumFractionRequest,
  ): Promise<QueryCumulativePremiumFractionResponse>
  Metrics(request: QueryMetricsRequest): Promise<QueryMetricsResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.Params = this.Params.bind(this)
    this.QueryPosition = this.QueryPosition.bind(this)
    this.QueryPositions = this.QueryPositions.bind(this)
    this.CumulativePremiumFraction = this.CumulativePremiumFraction.bind(this)
    this.Metrics = this.Metrics.bind(this)
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish()
    const promise = this.rpc.request("nibiru.perp.v1.Query", "Params", data)
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)))
  }

  QueryPosition(request: QueryPositionRequest): Promise<QueryPositionResponse> {
    const data = QueryPositionRequest.encode(request).finish()
    const promise = this.rpc.request("nibiru.perp.v1.Query", "QueryPosition", data)
    return promise.then((data) => QueryPositionResponse.decode(new _m0.Reader(data)))
  }

  QueryPositions(request: QueryPositionsRequest): Promise<QueryPositionsResponse> {
    const data = QueryPositionsRequest.encode(request).finish()
    const promise = this.rpc.request("nibiru.perp.v1.Query", "QueryPositions", data)
    return promise.then((data) => QueryPositionsResponse.decode(new _m0.Reader(data)))
  }

  CumulativePremiumFraction(
    request: QueryCumulativePremiumFractionRequest,
  ): Promise<QueryCumulativePremiumFractionResponse> {
    const data = QueryCumulativePremiumFractionRequest.encode(request).finish()
    const promise = this.rpc.request(
      "nibiru.perp.v1.Query",
      "CumulativePremiumFraction",
      data,
    )
    return promise.then((data) =>
      QueryCumulativePremiumFractionResponse.decode(new _m0.Reader(data)),
    )
  }

  Metrics(request: QueryMetricsRequest): Promise<QueryMetricsResponse> {
    const data = QueryMetricsRequest.encode(request).finish()
    const promise = this.rpc.request("nibiru.perp.v1.Query", "Metrics", data)
    return promise.then((data) => QueryMetricsResponse.decode(new _m0.Reader(data)))
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
