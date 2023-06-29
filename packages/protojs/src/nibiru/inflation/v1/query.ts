/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"
import { DecCoin } from "../../../cosmos/base/v1beta1/coin"
import { messageTypeRegistry } from "../../../typeRegistry"
import { Params } from "./genesis"

export const protobufPackage = "nibiru.inflation.v1"

/** QueryPeriodRequest is the request type for the Query/Period RPC method. */
export interface QueryPeriodRequest {
  $type: "nibiru.inflation.v1.QueryPeriodRequest"
}

/** QueryPeriodResponse is the response type for the Query/Period RPC method. */
export interface QueryPeriodResponse {
  $type: "nibiru.inflation.v1.QueryPeriodResponse"
  /** period is the current minting per epoch provision value. */
  period: Long
}

/**
 * QueryEpochMintProvisionRequest is the request type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionRequest {
  $type: "nibiru.inflation.v1.QueryEpochMintProvisionRequest"
}

/**
 * QueryEpochMintProvisionResponse is the response type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionResponse {
  $type: "nibiru.inflation.v1.QueryEpochMintProvisionResponse"
  /** epoch_mint_provision is the current minting per epoch provision value. */
  epochMintProvision?: DecCoin
}

/**
 * QuerySkippedEpochsRequest is the request type for the Query/SkippedEpochs RPC
 * method.
 */
export interface QuerySkippedEpochsRequest {
  $type: "nibiru.inflation.v1.QuerySkippedEpochsRequest"
}

/**
 * QuerySkippedEpochsResponse is the response type for the Query/SkippedEpochs
 * RPC method.
 */
export interface QuerySkippedEpochsResponse {
  $type: "nibiru.inflation.v1.QuerySkippedEpochsResponse"
  /**
   * skipped_epochs is the number of epochs that the inflation module has been
   * disabled.
   */
  skippedEpochs: Long
}

/**
 * QueryCirculatingSupplyRequest is the request type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyRequest {
  $type: "nibiru.inflation.v1.QueryCirculatingSupplyRequest"
}

/**
 * QueryCirculatingSupplyResponse is the response type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyResponse {
  $type: "nibiru.inflation.v1.QueryCirculatingSupplyResponse"
  /** circulating_supply is the total amount of coins in circulation */
  circulatingSupply?: DecCoin
}

/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequest {
  $type: "nibiru.inflation.v1.QueryInflationRateRequest"
}

/**
 * QueryInflationRateResponse is the response type for the Query/InflationRate
 * RPC method.
 */
export interface QueryInflationRateResponse {
  $type: "nibiru.inflation.v1.QueryInflationRateResponse"
  /** inflation_rate by which the total supply increases within one period */
  inflationRate: string
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
  $type: "nibiru.inflation.v1.QueryParamsRequest"
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  $type: "nibiru.inflation.v1.QueryParamsResponse"
  /** params defines the parameters of the module. */
  params?: Params
}

function createBaseQueryPeriodRequest(): QueryPeriodRequest {
  return { $type: "nibiru.inflation.v1.QueryPeriodRequest" }
}

export const QueryPeriodRequest = {
  $type: "nibiru.inflation.v1.QueryPeriodRequest" as const,

  encode(_: QueryPeriodRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPeriodRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryPeriodRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(_: any): QueryPeriodRequest {
    return { $type: QueryPeriodRequest.$type }
  },

  toJSON(_: QueryPeriodRequest): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<QueryPeriodRequest>, I>>(
    base?: I,
  ): QueryPeriodRequest {
    return QueryPeriodRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryPeriodRequest>, I>>(
    _: I,
  ): QueryPeriodRequest {
    const message = createBaseQueryPeriodRequest()
    return message
  },
}

messageTypeRegistry.set(QueryPeriodRequest.$type, QueryPeriodRequest)

function createBaseQueryPeriodResponse(): QueryPeriodResponse {
  return { $type: "nibiru.inflation.v1.QueryPeriodResponse", period: Long.UZERO }
}

export const QueryPeriodResponse = {
  $type: "nibiru.inflation.v1.QueryPeriodResponse" as const,

  encode(
    message: QueryPeriodResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.period.isZero()) {
      writer.uint32(8).uint64(message.period)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPeriodResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryPeriodResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.period = reader.uint64() as Long
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryPeriodResponse {
    return {
      $type: QueryPeriodResponse.$type,
      period: isSet(object.period) ? Long.fromValue(object.period) : Long.UZERO,
    }
  },

  toJSON(message: QueryPeriodResponse): unknown {
    const obj: any = {}
    message.period !== undefined &&
      (obj.period = (message.period || Long.UZERO).toString())
    return obj
  },

  create<I extends Exact<DeepPartial<QueryPeriodResponse>, I>>(
    base?: I,
  ): QueryPeriodResponse {
    return QueryPeriodResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryPeriodResponse>, I>>(
    object: I,
  ): QueryPeriodResponse {
    const message = createBaseQueryPeriodResponse()
    message.period =
      object.period !== undefined && object.period !== null
        ? Long.fromValue(object.period)
        : Long.UZERO
    return message
  },
}

messageTypeRegistry.set(QueryPeriodResponse.$type, QueryPeriodResponse)

function createBaseQueryEpochMintProvisionRequest(): QueryEpochMintProvisionRequest {
  return { $type: "nibiru.inflation.v1.QueryEpochMintProvisionRequest" }
}

export const QueryEpochMintProvisionRequest = {
  $type: "nibiru.inflation.v1.QueryEpochMintProvisionRequest" as const,

  encode(
    _: QueryEpochMintProvisionRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryEpochMintProvisionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryEpochMintProvisionRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(_: any): QueryEpochMintProvisionRequest {
    return { $type: QueryEpochMintProvisionRequest.$type }
  },

  toJSON(_: QueryEpochMintProvisionRequest): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<QueryEpochMintProvisionRequest>, I>>(
    base?: I,
  ): QueryEpochMintProvisionRequest {
    return QueryEpochMintProvisionRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryEpochMintProvisionRequest>, I>>(
    _: I,
  ): QueryEpochMintProvisionRequest {
    const message = createBaseQueryEpochMintProvisionRequest()
    return message
  },
}

messageTypeRegistry.set(
  QueryEpochMintProvisionRequest.$type,
  QueryEpochMintProvisionRequest,
)

function createBaseQueryEpochMintProvisionResponse(): QueryEpochMintProvisionResponse {
  return {
    $type: "nibiru.inflation.v1.QueryEpochMintProvisionResponse",
    epochMintProvision: undefined,
  }
}

export const QueryEpochMintProvisionResponse = {
  $type: "nibiru.inflation.v1.QueryEpochMintProvisionResponse" as const,

  encode(
    message: QueryEpochMintProvisionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.epochMintProvision !== undefined) {
      DecCoin.encode(message.epochMintProvision, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryEpochMintProvisionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryEpochMintProvisionResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.epochMintProvision = DecCoin.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryEpochMintProvisionResponse {
    return {
      $type: QueryEpochMintProvisionResponse.$type,
      epochMintProvision: isSet(object.epochMintProvision)
        ? DecCoin.fromJSON(object.epochMintProvision)
        : undefined,
    }
  },

  toJSON(message: QueryEpochMintProvisionResponse): unknown {
    const obj: any = {}
    message.epochMintProvision !== undefined &&
      (obj.epochMintProvision = message.epochMintProvision
        ? DecCoin.toJSON(message.epochMintProvision)
        : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<QueryEpochMintProvisionResponse>, I>>(
    base?: I,
  ): QueryEpochMintProvisionResponse {
    return QueryEpochMintProvisionResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryEpochMintProvisionResponse>, I>>(
    object: I,
  ): QueryEpochMintProvisionResponse {
    const message = createBaseQueryEpochMintProvisionResponse()
    message.epochMintProvision =
      object.epochMintProvision !== undefined && object.epochMintProvision !== null
        ? DecCoin.fromPartial(object.epochMintProvision)
        : undefined
    return message
  },
}

messageTypeRegistry.set(
  QueryEpochMintProvisionResponse.$type,
  QueryEpochMintProvisionResponse,
)

function createBaseQuerySkippedEpochsRequest(): QuerySkippedEpochsRequest {
  return { $type: "nibiru.inflation.v1.QuerySkippedEpochsRequest" }
}

export const QuerySkippedEpochsRequest = {
  $type: "nibiru.inflation.v1.QuerySkippedEpochsRequest" as const,

  encode(
    _: QuerySkippedEpochsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySkippedEpochsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQuerySkippedEpochsRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(_: any): QuerySkippedEpochsRequest {
    return { $type: QuerySkippedEpochsRequest.$type }
  },

  toJSON(_: QuerySkippedEpochsRequest): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<QuerySkippedEpochsRequest>, I>>(
    base?: I,
  ): QuerySkippedEpochsRequest {
    return QuerySkippedEpochsRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QuerySkippedEpochsRequest>, I>>(
    _: I,
  ): QuerySkippedEpochsRequest {
    const message = createBaseQuerySkippedEpochsRequest()
    return message
  },
}

messageTypeRegistry.set(QuerySkippedEpochsRequest.$type, QuerySkippedEpochsRequest)

function createBaseQuerySkippedEpochsResponse(): QuerySkippedEpochsResponse {
  return {
    $type: "nibiru.inflation.v1.QuerySkippedEpochsResponse",
    skippedEpochs: Long.UZERO,
  }
}

export const QuerySkippedEpochsResponse = {
  $type: "nibiru.inflation.v1.QuerySkippedEpochsResponse" as const,

  encode(
    message: QuerySkippedEpochsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.skippedEpochs.isZero()) {
      writer.uint32(8).uint64(message.skippedEpochs)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySkippedEpochsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQuerySkippedEpochsResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.skippedEpochs = reader.uint64() as Long
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QuerySkippedEpochsResponse {
    return {
      $type: QuerySkippedEpochsResponse.$type,
      skippedEpochs: isSet(object.skippedEpochs)
        ? Long.fromValue(object.skippedEpochs)
        : Long.UZERO,
    }
  },

  toJSON(message: QuerySkippedEpochsResponse): unknown {
    const obj: any = {}
    message.skippedEpochs !== undefined &&
      (obj.skippedEpochs = (message.skippedEpochs || Long.UZERO).toString())
    return obj
  },

  create<I extends Exact<DeepPartial<QuerySkippedEpochsResponse>, I>>(
    base?: I,
  ): QuerySkippedEpochsResponse {
    return QuerySkippedEpochsResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QuerySkippedEpochsResponse>, I>>(
    object: I,
  ): QuerySkippedEpochsResponse {
    const message = createBaseQuerySkippedEpochsResponse()
    message.skippedEpochs =
      object.skippedEpochs !== undefined && object.skippedEpochs !== null
        ? Long.fromValue(object.skippedEpochs)
        : Long.UZERO
    return message
  },
}

messageTypeRegistry.set(QuerySkippedEpochsResponse.$type, QuerySkippedEpochsResponse)

function createBaseQueryCirculatingSupplyRequest(): QueryCirculatingSupplyRequest {
  return { $type: "nibiru.inflation.v1.QueryCirculatingSupplyRequest" }
}

export const QueryCirculatingSupplyRequest = {
  $type: "nibiru.inflation.v1.QueryCirculatingSupplyRequest" as const,

  encode(
    _: QueryCirculatingSupplyRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryCirculatingSupplyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryCirculatingSupplyRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(_: any): QueryCirculatingSupplyRequest {
    return { $type: QueryCirculatingSupplyRequest.$type }
  },

  toJSON(_: QueryCirculatingSupplyRequest): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<QueryCirculatingSupplyRequest>, I>>(
    base?: I,
  ): QueryCirculatingSupplyRequest {
    return QueryCirculatingSupplyRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryCirculatingSupplyRequest>, I>>(
    _: I,
  ): QueryCirculatingSupplyRequest {
    const message = createBaseQueryCirculatingSupplyRequest()
    return message
  },
}

messageTypeRegistry.set(
  QueryCirculatingSupplyRequest.$type,
  QueryCirculatingSupplyRequest,
)

function createBaseQueryCirculatingSupplyResponse(): QueryCirculatingSupplyResponse {
  return {
    $type: "nibiru.inflation.v1.QueryCirculatingSupplyResponse",
    circulatingSupply: undefined,
  }
}

export const QueryCirculatingSupplyResponse = {
  $type: "nibiru.inflation.v1.QueryCirculatingSupplyResponse" as const,

  encode(
    message: QueryCirculatingSupplyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.circulatingSupply !== undefined) {
      DecCoin.encode(message.circulatingSupply, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryCirculatingSupplyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryCirculatingSupplyResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.circulatingSupply = DecCoin.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryCirculatingSupplyResponse {
    return {
      $type: QueryCirculatingSupplyResponse.$type,
      circulatingSupply: isSet(object.circulatingSupply)
        ? DecCoin.fromJSON(object.circulatingSupply)
        : undefined,
    }
  },

  toJSON(message: QueryCirculatingSupplyResponse): unknown {
    const obj: any = {}
    message.circulatingSupply !== undefined &&
      (obj.circulatingSupply = message.circulatingSupply
        ? DecCoin.toJSON(message.circulatingSupply)
        : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<QueryCirculatingSupplyResponse>, I>>(
    base?: I,
  ): QueryCirculatingSupplyResponse {
    return QueryCirculatingSupplyResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryCirculatingSupplyResponse>, I>>(
    object: I,
  ): QueryCirculatingSupplyResponse {
    const message = createBaseQueryCirculatingSupplyResponse()
    message.circulatingSupply =
      object.circulatingSupply !== undefined && object.circulatingSupply !== null
        ? DecCoin.fromPartial(object.circulatingSupply)
        : undefined
    return message
  },
}

messageTypeRegistry.set(
  QueryCirculatingSupplyResponse.$type,
  QueryCirculatingSupplyResponse,
)

function createBaseQueryInflationRateRequest(): QueryInflationRateRequest {
  return { $type: "nibiru.inflation.v1.QueryInflationRateRequest" }
}

export const QueryInflationRateRequest = {
  $type: "nibiru.inflation.v1.QueryInflationRateRequest" as const,

  encode(
    _: QueryInflationRateRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInflationRateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryInflationRateRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(_: any): QueryInflationRateRequest {
    return { $type: QueryInflationRateRequest.$type }
  },

  toJSON(_: QueryInflationRateRequest): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<QueryInflationRateRequest>, I>>(
    base?: I,
  ): QueryInflationRateRequest {
    return QueryInflationRateRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryInflationRateRequest>, I>>(
    _: I,
  ): QueryInflationRateRequest {
    const message = createBaseQueryInflationRateRequest()
    return message
  },
}

messageTypeRegistry.set(QueryInflationRateRequest.$type, QueryInflationRateRequest)

function createBaseQueryInflationRateResponse(): QueryInflationRateResponse {
  return { $type: "nibiru.inflation.v1.QueryInflationRateResponse", inflationRate: "" }
}

export const QueryInflationRateResponse = {
  $type: "nibiru.inflation.v1.QueryInflationRateResponse" as const,

  encode(
    message: QueryInflationRateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.inflationRate !== "") {
      writer.uint32(10).string(message.inflationRate)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInflationRateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryInflationRateResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.inflationRate = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryInflationRateResponse {
    return {
      $type: QueryInflationRateResponse.$type,
      inflationRate: isSet(object.inflationRate) ? String(object.inflationRate) : "",
    }
  },

  toJSON(message: QueryInflationRateResponse): unknown {
    const obj: any = {}
    message.inflationRate !== undefined && (obj.inflationRate = message.inflationRate)
    return obj
  },

  create<I extends Exact<DeepPartial<QueryInflationRateResponse>, I>>(
    base?: I,
  ): QueryInflationRateResponse {
    return QueryInflationRateResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryInflationRateResponse>, I>>(
    object: I,
  ): QueryInflationRateResponse {
    const message = createBaseQueryInflationRateResponse()
    message.inflationRate = object.inflationRate ?? ""
    return message
  },
}

messageTypeRegistry.set(QueryInflationRateResponse.$type, QueryInflationRateResponse)

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return { $type: "nibiru.inflation.v1.QueryParamsRequest" }
}

export const QueryParamsRequest = {
  $type: "nibiru.inflation.v1.QueryParamsRequest" as const,

  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryParamsRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(_: any): QueryParamsRequest {
    return { $type: QueryParamsRequest.$type }
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    base?: I,
  ): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I,
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest()
    return message
  },
}

messageTypeRegistry.set(QueryParamsRequest.$type, QueryParamsRequest)

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { $type: "nibiru.inflation.v1.QueryParamsResponse", params: undefined }
}

export const QueryParamsResponse = {
  $type: "nibiru.inflation.v1.QueryParamsResponse" as const,

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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryParamsResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.params = Params.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      $type: QueryParamsResponse.$type,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    }
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {}
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    base?: I,
  ): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {})
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

messageTypeRegistry.set(QueryParamsResponse.$type, QueryParamsResponse)

/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Period retrieves current period. */
  Period(request: QueryPeriodRequest): Promise<QueryPeriodResponse>
  /** EpochMintProvision retrieves current minting epoch provision value. */
  EpochMintProvision(
    request: QueryEpochMintProvisionRequest,
  ): Promise<QueryEpochMintProvisionResponse>
  /** SkippedEpochs retrieves the total number of skipped epochs. */
  SkippedEpochs(request: QuerySkippedEpochsRequest): Promise<QuerySkippedEpochsResponse>
  /**
   * CirculatingSupply retrieves the total number of tokens that are in
   * circulation (i.e. excluding unvested tokens).
   */
  CirculatingSupply(
    request: QueryCirculatingSupplyRequest,
  ): Promise<QueryCirculatingSupplyResponse>
  /** InflationRate retrieves the inflation rate of the current period. */
  InflationRate(request: QueryInflationRateRequest): Promise<QueryInflationRateResponse>
  /** Params retrieves the total set of minting parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>
}

export const QueryServiceName = "nibiru.inflation.v1.Query"
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  private readonly service: string
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName
    this.rpc = rpc
    this.Period = this.Period.bind(this)
    this.EpochMintProvision = this.EpochMintProvision.bind(this)
    this.SkippedEpochs = this.SkippedEpochs.bind(this)
    this.CirculatingSupply = this.CirculatingSupply.bind(this)
    this.InflationRate = this.InflationRate.bind(this)
    this.Params = this.Params.bind(this)
  }
  Period(request: QueryPeriodRequest): Promise<QueryPeriodResponse> {
    const data = QueryPeriodRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "Period", data)
    return promise.then((data) => QueryPeriodResponse.decode(_m0.Reader.create(data)))
  }

  EpochMintProvision(
    request: QueryEpochMintProvisionRequest,
  ): Promise<QueryEpochMintProvisionResponse> {
    const data = QueryEpochMintProvisionRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "EpochMintProvision", data)
    return promise.then((data) =>
      QueryEpochMintProvisionResponse.decode(_m0.Reader.create(data)),
    )
  }

  SkippedEpochs(
    request: QuerySkippedEpochsRequest,
  ): Promise<QuerySkippedEpochsResponse> {
    const data = QuerySkippedEpochsRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "SkippedEpochs", data)
    return promise.then((data) =>
      QuerySkippedEpochsResponse.decode(_m0.Reader.create(data)),
    )
  }

  CirculatingSupply(
    request: QueryCirculatingSupplyRequest,
  ): Promise<QueryCirculatingSupplyResponse> {
    const data = QueryCirculatingSupplyRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "CirculatingSupply", data)
    return promise.then((data) =>
      QueryCirculatingSupplyResponse.decode(_m0.Reader.create(data)),
    )
  }

  InflationRate(
    request: QueryInflationRateRequest,
  ): Promise<QueryInflationRateResponse> {
    const data = QueryInflationRateRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "InflationRate", data)
    return promise.then((data) =>
      QueryInflationRateResponse.decode(_m0.Reader.create(data)),
    )
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "Params", data)
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)))
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
