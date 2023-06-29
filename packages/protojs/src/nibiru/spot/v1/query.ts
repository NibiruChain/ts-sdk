/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination"
import { Coin } from "../../../cosmos/base/v1beta1/coin"
import { messageTypeRegistry } from "../../../typeRegistry"
import { Params } from "./params"
import { Pool, PoolParams } from "./pool"

export const protobufPackage = "nibiru.spot.v1"

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
  $type: "nibiru.spot.v1.QueryParamsRequest"
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  $type: "nibiru.spot.v1.QueryParamsResponse"
  /** params holds all the parameters of this module. */
  params?: Params
}

export interface QueryPoolNumberRequest {
  $type: "nibiru.spot.v1.QueryPoolNumberRequest"
}

export interface QueryPoolNumberResponse {
  $type: "nibiru.spot.v1.QueryPoolNumberResponse"
  poolId: Long
}

export interface QueryPoolRequest {
  $type: "nibiru.spot.v1.QueryPoolRequest"
  poolId: Long
}

export interface QueryPoolResponse {
  $type: "nibiru.spot.v1.QueryPoolResponse"
  pool?: Pool
}

export interface QueryPoolsRequest {
  $type: "nibiru.spot.v1.QueryPoolsRequest"
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest
}

export interface QueryPoolsResponse {
  $type: "nibiru.spot.v1.QueryPoolsResponse"
  pools: Pool[]
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse
}

export interface QueryPoolParamsRequest {
  $type: "nibiru.spot.v1.QueryPoolParamsRequest"
  poolId: Long
}

export interface QueryPoolParamsResponse {
  $type: "nibiru.spot.v1.QueryPoolParamsResponse"
  poolParams?: PoolParams
}

export interface QueryNumPoolsRequest {
  $type: "nibiru.spot.v1.QueryNumPoolsRequest"
}

export interface QueryNumPoolsResponse {
  $type: "nibiru.spot.v1.QueryNumPoolsResponse"
  numPools: Long
}

/**
 * --------------------------------------------
 * Query total liquidity the protocol
 */
export interface QueryTotalLiquidityRequest {
  $type: "nibiru.spot.v1.QueryTotalLiquidityRequest"
}

export interface QueryTotalLiquidityResponse {
  $type: "nibiru.spot.v1.QueryTotalLiquidityResponse"
  liquidity: Coin[]
}

/**
 * --------------------------------------------
 * Query total liquidity for a pool
 */
export interface QueryTotalPoolLiquidityRequest {
  $type: "nibiru.spot.v1.QueryTotalPoolLiquidityRequest"
  poolId: Long
}

export interface QueryTotalPoolLiquidityResponse {
  $type: "nibiru.spot.v1.QueryTotalPoolLiquidityResponse"
  liquidity: Coin[]
}

export interface QueryTotalSharesRequest {
  $type: "nibiru.spot.v1.QueryTotalSharesRequest"
  poolId: Long
}

export interface QueryTotalSharesResponse {
  $type: "nibiru.spot.v1.QueryTotalSharesResponse"
  /** sum of all LP tokens sent out */
  totalShares?: Coin
}

/**
 * Returns the amount of tokenInDenom to produce 1 tokenOutDenom
 * For example, if the price of NIBI = 9.123 NUSD, then setting
 * tokenInDenom=NUSD and tokenOutDenom=NIBI would give "9.123".
 */
export interface QuerySpotPriceRequest {
  $type: "nibiru.spot.v1.QuerySpotPriceRequest"
  poolId: Long
  /** the denomination of the token you are giving into the pool */
  tokenInDenom: string
  /** the denomination of the token you are taking out of the pool */
  tokenOutDenom: string
}

export interface QuerySpotPriceResponse {
  $type: "nibiru.spot.v1.QuerySpotPriceResponse"
  spotPrice: string
}

/**
 * Given an exact amount of tokens in and a target tokenOutDenom, calculates
 * the expected amount of tokens out received from a swap.
 */
export interface QuerySwapExactAmountInRequest {
  $type: "nibiru.spot.v1.QuerySwapExactAmountInRequest"
  poolId: Long
  tokenIn?: Coin
  tokenOutDenom: string
}

export interface QuerySwapExactAmountInResponse {
  $type: "nibiru.spot.v1.QuerySwapExactAmountInResponse"
  tokenOut?: Coin
  fee?: Coin
}

/**
 * Given an exact amount of tokens out and a target tokenInDenom, calculates
 * the expected amount of tokens in required to do the swap.
 */
export interface QuerySwapExactAmountOutRequest {
  $type: "nibiru.spot.v1.QuerySwapExactAmountOutRequest"
  poolId: Long
  tokenOut?: Coin
  tokenInDenom: string
}

export interface QuerySwapExactAmountOutResponse {
  $type: "nibiru.spot.v1.QuerySwapExactAmountOutResponse"
  tokenIn?: Coin
}

export interface QueryJoinExactAmountInRequest {
  $type: "nibiru.spot.v1.QueryJoinExactAmountInRequest"
  poolId: Long
  tokensIn: Coin[]
}

export interface QueryJoinExactAmountInResponse {
  $type: "nibiru.spot.v1.QueryJoinExactAmountInResponse"
  /** amount of pool shares returned to user after join */
  poolSharesOut: string
  /** coins remaining after pool join */
  remCoins: Coin[]
}

export interface QueryJoinExactAmountOutRequest {
  $type: "nibiru.spot.v1.QueryJoinExactAmountOutRequest"
  poolId: Long
}

export interface QueryJoinExactAmountOutResponse {
  $type: "nibiru.spot.v1.QueryJoinExactAmountOutResponse"
}

export interface QueryExitExactAmountInRequest {
  $type: "nibiru.spot.v1.QueryExitExactAmountInRequest"
  poolId: Long
  /** amount of pool shares to return to pool */
  poolSharesIn: string
}

export interface QueryExitExactAmountInResponse {
  $type: "nibiru.spot.v1.QueryExitExactAmountInResponse"
  /** coins obtained after exiting */
  tokensOut: Coin[]
  fees: Coin[]
}

export interface QueryExitExactAmountOutRequest {
  $type: "nibiru.spot.v1.QueryExitExactAmountOutRequest"
  poolId: Long
}

export interface QueryExitExactAmountOutResponse {
  $type: "nibiru.spot.v1.QueryExitExactAmountOutResponse"
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return { $type: "nibiru.spot.v1.QueryParamsRequest" }
}

export const QueryParamsRequest = {
  $type: "nibiru.spot.v1.QueryParamsRequest" as const,

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
  return { $type: "nibiru.spot.v1.QueryParamsResponse", params: undefined }
}

export const QueryParamsResponse = {
  $type: "nibiru.spot.v1.QueryParamsResponse" as const,

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

function createBaseQueryPoolNumberRequest(): QueryPoolNumberRequest {
  return { $type: "nibiru.spot.v1.QueryPoolNumberRequest" }
}

export const QueryPoolNumberRequest = {
  $type: "nibiru.spot.v1.QueryPoolNumberRequest" as const,

  encode(
    _: QueryPoolNumberRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolNumberRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryPoolNumberRequest()
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

  fromJSON(_: any): QueryPoolNumberRequest {
    return { $type: QueryPoolNumberRequest.$type }
  },

  toJSON(_: QueryPoolNumberRequest): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<QueryPoolNumberRequest>, I>>(
    base?: I,
  ): QueryPoolNumberRequest {
    return QueryPoolNumberRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolNumberRequest>, I>>(
    _: I,
  ): QueryPoolNumberRequest {
    const message = createBaseQueryPoolNumberRequest()
    return message
  },
}

messageTypeRegistry.set(QueryPoolNumberRequest.$type, QueryPoolNumberRequest)

function createBaseQueryPoolNumberResponse(): QueryPoolNumberResponse {
  return { $type: "nibiru.spot.v1.QueryPoolNumberResponse", poolId: Long.UZERO }
}

export const QueryPoolNumberResponse = {
  $type: "nibiru.spot.v1.QueryPoolNumberResponse" as const,

  encode(
    message: QueryPoolNumberResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolNumberResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryPoolNumberResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.poolId = reader.uint64() as Long
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryPoolNumberResponse {
    return {
      $type: QueryPoolNumberResponse.$type,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
    }
  },

  toJSON(message: QueryPoolNumberResponse): unknown {
    const obj: any = {}
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString())
    return obj
  },

  create<I extends Exact<DeepPartial<QueryPoolNumberResponse>, I>>(
    base?: I,
  ): QueryPoolNumberResponse {
    return QueryPoolNumberResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolNumberResponse>, I>>(
    object: I,
  ): QueryPoolNumberResponse {
    const message = createBaseQueryPoolNumberResponse()
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO
    return message
  },
}

messageTypeRegistry.set(QueryPoolNumberResponse.$type, QueryPoolNumberResponse)

function createBaseQueryPoolRequest(): QueryPoolRequest {
  return { $type: "nibiru.spot.v1.QueryPoolRequest", poolId: Long.UZERO }
}

export const QueryPoolRequest = {
  $type: "nibiru.spot.v1.QueryPoolRequest" as const,

  encode(
    message: QueryPoolRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryPoolRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.poolId = reader.uint64() as Long
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryPoolRequest {
    return {
      $type: QueryPoolRequest.$type,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
    }
  },

  toJSON(message: QueryPoolRequest): unknown {
    const obj: any = {}
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString())
    return obj
  },

  create<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(
    base?: I,
  ): QueryPoolRequest {
    return QueryPoolRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(
    object: I,
  ): QueryPoolRequest {
    const message = createBaseQueryPoolRequest()
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO
    return message
  },
}

messageTypeRegistry.set(QueryPoolRequest.$type, QueryPoolRequest)

function createBaseQueryPoolResponse(): QueryPoolResponse {
  return { $type: "nibiru.spot.v1.QueryPoolResponse", pool: undefined }
}

export const QueryPoolResponse = {
  $type: "nibiru.spot.v1.QueryPoolResponse" as const,

  encode(
    message: QueryPoolResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryPoolResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.pool = Pool.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryPoolResponse {
    return {
      $type: QueryPoolResponse.$type,
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
    }
  },

  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {}
    message.pool !== undefined &&
      (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(
    base?: I,
  ): QueryPoolResponse {
    return QueryPoolResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(
    object: I,
  ): QueryPoolResponse {
    const message = createBaseQueryPoolResponse()
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromPartial(object.pool)
        : undefined
    return message
  },
}

messageTypeRegistry.set(QueryPoolResponse.$type, QueryPoolResponse)

function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return { $type: "nibiru.spot.v1.QueryPoolsRequest", pagination: undefined }
}

export const QueryPoolsRequest = {
  $type: "nibiru.spot.v1.QueryPoolsRequest" as const,

  encode(
    message: QueryPoolsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryPoolsRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.pagination = PageRequest.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryPoolsRequest {
    return {
      $type: QueryPoolsRequest.$type,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    }
  },

  toJSON(message: QueryPoolsRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<QueryPoolsRequest>, I>>(
    base?: I,
  ): QueryPoolsRequest {
    return QueryPoolsRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolsRequest>, I>>(
    object: I,
  ): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest()
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined
    return message
  },
}

messageTypeRegistry.set(QueryPoolsRequest.$type, QueryPoolsRequest)

function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return {
    $type: "nibiru.spot.v1.QueryPoolsResponse",
    pools: [],
    pagination: undefined,
  }
}

export const QueryPoolsResponse = {
  $type: "nibiru.spot.v1.QueryPoolsResponse" as const,

  encode(
    message: QueryPoolsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryPoolsResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.pools.push(Pool.decode(reader, reader.uint32()))
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.pagination = PageResponse.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryPoolsResponse {
    return {
      $type: QueryPoolsResponse.$type,
      pools: Array.isArray(object?.pools)
        ? object.pools.map((e: any) => Pool.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    }
  },

  toJSON(message: QueryPoolsResponse): unknown {
    const obj: any = {}
    if (message.pools) {
      obj.pools = message.pools.map((e) => (e ? Pool.toJSON(e) : undefined))
    } else {
      obj.pools = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<QueryPoolsResponse>, I>>(
    base?: I,
  ): QueryPoolsResponse {
    return QueryPoolsResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolsResponse>, I>>(
    object: I,
  ): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse()
    message.pools = object.pools?.map((e) => Pool.fromPartial(e)) || []
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined
    return message
  },
}

messageTypeRegistry.set(QueryPoolsResponse.$type, QueryPoolsResponse)

function createBaseQueryPoolParamsRequest(): QueryPoolParamsRequest {
  return { $type: "nibiru.spot.v1.QueryPoolParamsRequest", poolId: Long.UZERO }
}

export const QueryPoolParamsRequest = {
  $type: "nibiru.spot.v1.QueryPoolParamsRequest" as const,

  encode(
    message: QueryPoolParamsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryPoolParamsRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.poolId = reader.uint64() as Long
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryPoolParamsRequest {
    return {
      $type: QueryPoolParamsRequest.$type,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
    }
  },

  toJSON(message: QueryPoolParamsRequest): unknown {
    const obj: any = {}
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString())
    return obj
  },

  create<I extends Exact<DeepPartial<QueryPoolParamsRequest>, I>>(
    base?: I,
  ): QueryPoolParamsRequest {
    return QueryPoolParamsRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolParamsRequest>, I>>(
    object: I,
  ): QueryPoolParamsRequest {
    const message = createBaseQueryPoolParamsRequest()
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO
    return message
  },
}

messageTypeRegistry.set(QueryPoolParamsRequest.$type, QueryPoolParamsRequest)

function createBaseQueryPoolParamsResponse(): QueryPoolParamsResponse {
  return { $type: "nibiru.spot.v1.QueryPoolParamsResponse", poolParams: undefined }
}

export const QueryPoolParamsResponse = {
  $type: "nibiru.spot.v1.QueryPoolParamsResponse" as const,

  encode(
    message: QueryPoolParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryPoolParamsResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.poolParams = PoolParams.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryPoolParamsResponse {
    return {
      $type: QueryPoolParamsResponse.$type,
      poolParams: isSet(object.poolParams)
        ? PoolParams.fromJSON(object.poolParams)
        : undefined,
    }
  },

  toJSON(message: QueryPoolParamsResponse): unknown {
    const obj: any = {}
    message.poolParams !== undefined &&
      (obj.poolParams = message.poolParams
        ? PoolParams.toJSON(message.poolParams)
        : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<QueryPoolParamsResponse>, I>>(
    base?: I,
  ): QueryPoolParamsResponse {
    return QueryPoolParamsResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolParamsResponse>, I>>(
    object: I,
  ): QueryPoolParamsResponse {
    const message = createBaseQueryPoolParamsResponse()
    message.poolParams =
      object.poolParams !== undefined && object.poolParams !== null
        ? PoolParams.fromPartial(object.poolParams)
        : undefined
    return message
  },
}

messageTypeRegistry.set(QueryPoolParamsResponse.$type, QueryPoolParamsResponse)

function createBaseQueryNumPoolsRequest(): QueryNumPoolsRequest {
  return { $type: "nibiru.spot.v1.QueryNumPoolsRequest" }
}

export const QueryNumPoolsRequest = {
  $type: "nibiru.spot.v1.QueryNumPoolsRequest" as const,

  encode(
    _: QueryNumPoolsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNumPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryNumPoolsRequest()
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

  fromJSON(_: any): QueryNumPoolsRequest {
    return { $type: QueryNumPoolsRequest.$type }
  },

  toJSON(_: QueryNumPoolsRequest): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<QueryNumPoolsRequest>, I>>(
    base?: I,
  ): QueryNumPoolsRequest {
    return QueryNumPoolsRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryNumPoolsRequest>, I>>(
    _: I,
  ): QueryNumPoolsRequest {
    const message = createBaseQueryNumPoolsRequest()
    return message
  },
}

messageTypeRegistry.set(QueryNumPoolsRequest.$type, QueryNumPoolsRequest)

function createBaseQueryNumPoolsResponse(): QueryNumPoolsResponse {
  return { $type: "nibiru.spot.v1.QueryNumPoolsResponse", numPools: Long.UZERO }
}

export const QueryNumPoolsResponse = {
  $type: "nibiru.spot.v1.QueryNumPoolsResponse" as const,

  encode(
    message: QueryNumPoolsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.numPools.isZero()) {
      writer.uint32(8).uint64(message.numPools)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNumPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryNumPoolsResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.numPools = reader.uint64() as Long
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryNumPoolsResponse {
    return {
      $type: QueryNumPoolsResponse.$type,
      numPools: isSet(object.numPools) ? Long.fromValue(object.numPools) : Long.UZERO,
    }
  },

  toJSON(message: QueryNumPoolsResponse): unknown {
    const obj: any = {}
    message.numPools !== undefined &&
      (obj.numPools = (message.numPools || Long.UZERO).toString())
    return obj
  },

  create<I extends Exact<DeepPartial<QueryNumPoolsResponse>, I>>(
    base?: I,
  ): QueryNumPoolsResponse {
    return QueryNumPoolsResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryNumPoolsResponse>, I>>(
    object: I,
  ): QueryNumPoolsResponse {
    const message = createBaseQueryNumPoolsResponse()
    message.numPools =
      object.numPools !== undefined && object.numPools !== null
        ? Long.fromValue(object.numPools)
        : Long.UZERO
    return message
  },
}

messageTypeRegistry.set(QueryNumPoolsResponse.$type, QueryNumPoolsResponse)

function createBaseQueryTotalLiquidityRequest(): QueryTotalLiquidityRequest {
  return { $type: "nibiru.spot.v1.QueryTotalLiquidityRequest" }
}

export const QueryTotalLiquidityRequest = {
  $type: "nibiru.spot.v1.QueryTotalLiquidityRequest" as const,

  encode(
    _: QueryTotalLiquidityRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryTotalLiquidityRequest()
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

  fromJSON(_: any): QueryTotalLiquidityRequest {
    return { $type: QueryTotalLiquidityRequest.$type }
  },

  toJSON(_: QueryTotalLiquidityRequest): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<QueryTotalLiquidityRequest>, I>>(
    base?: I,
  ): QueryTotalLiquidityRequest {
    return QueryTotalLiquidityRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalLiquidityRequest>, I>>(
    _: I,
  ): QueryTotalLiquidityRequest {
    const message = createBaseQueryTotalLiquidityRequest()
    return message
  },
}

messageTypeRegistry.set(QueryTotalLiquidityRequest.$type, QueryTotalLiquidityRequest)

function createBaseQueryTotalLiquidityResponse(): QueryTotalLiquidityResponse {
  return { $type: "nibiru.spot.v1.QueryTotalLiquidityResponse", liquidity: [] }
}

export const QueryTotalLiquidityResponse = {
  $type: "nibiru.spot.v1.QueryTotalLiquidityResponse" as const,

  encode(
    message: QueryTotalLiquidityResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryTotalLiquidityResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.liquidity.push(Coin.decode(reader, reader.uint32()))
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryTotalLiquidityResponse {
    return {
      $type: QueryTotalLiquidityResponse.$type,
      liquidity: Array.isArray(object?.liquidity)
        ? object.liquidity.map((e: any) => Coin.fromJSON(e))
        : [],
    }
  },

  toJSON(message: QueryTotalLiquidityResponse): unknown {
    const obj: any = {}
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.liquidity = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<QueryTotalLiquidityResponse>, I>>(
    base?: I,
  ): QueryTotalLiquidityResponse {
    return QueryTotalLiquidityResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalLiquidityResponse>, I>>(
    object: I,
  ): QueryTotalLiquidityResponse {
    const message = createBaseQueryTotalLiquidityResponse()
    message.liquidity = object.liquidity?.map((e) => Coin.fromPartial(e)) || []
    return message
  },
}

messageTypeRegistry.set(QueryTotalLiquidityResponse.$type, QueryTotalLiquidityResponse)

function createBaseQueryTotalPoolLiquidityRequest(): QueryTotalPoolLiquidityRequest {
  return { $type: "nibiru.spot.v1.QueryTotalPoolLiquidityRequest", poolId: Long.UZERO }
}

export const QueryTotalPoolLiquidityRequest = {
  $type: "nibiru.spot.v1.QueryTotalPoolLiquidityRequest" as const,

  encode(
    message: QueryTotalPoolLiquidityRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryTotalPoolLiquidityRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryTotalPoolLiquidityRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.poolId = reader.uint64() as Long
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryTotalPoolLiquidityRequest {
    return {
      $type: QueryTotalPoolLiquidityRequest.$type,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
    }
  },

  toJSON(message: QueryTotalPoolLiquidityRequest): unknown {
    const obj: any = {}
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString())
    return obj
  },

  create<I extends Exact<DeepPartial<QueryTotalPoolLiquidityRequest>, I>>(
    base?: I,
  ): QueryTotalPoolLiquidityRequest {
    return QueryTotalPoolLiquidityRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalPoolLiquidityRequest>, I>>(
    object: I,
  ): QueryTotalPoolLiquidityRequest {
    const message = createBaseQueryTotalPoolLiquidityRequest()
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO
    return message
  },
}

messageTypeRegistry.set(
  QueryTotalPoolLiquidityRequest.$type,
  QueryTotalPoolLiquidityRequest,
)

function createBaseQueryTotalPoolLiquidityResponse(): QueryTotalPoolLiquidityResponse {
  return { $type: "nibiru.spot.v1.QueryTotalPoolLiquidityResponse", liquidity: [] }
}

export const QueryTotalPoolLiquidityResponse = {
  $type: "nibiru.spot.v1.QueryTotalPoolLiquidityResponse" as const,

  encode(
    message: QueryTotalPoolLiquidityResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryTotalPoolLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryTotalPoolLiquidityResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.liquidity.push(Coin.decode(reader, reader.uint32()))
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryTotalPoolLiquidityResponse {
    return {
      $type: QueryTotalPoolLiquidityResponse.$type,
      liquidity: Array.isArray(object?.liquidity)
        ? object.liquidity.map((e: any) => Coin.fromJSON(e))
        : [],
    }
  },

  toJSON(message: QueryTotalPoolLiquidityResponse): unknown {
    const obj: any = {}
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.liquidity = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<QueryTotalPoolLiquidityResponse>, I>>(
    base?: I,
  ): QueryTotalPoolLiquidityResponse {
    return QueryTotalPoolLiquidityResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalPoolLiquidityResponse>, I>>(
    object: I,
  ): QueryTotalPoolLiquidityResponse {
    const message = createBaseQueryTotalPoolLiquidityResponse()
    message.liquidity = object.liquidity?.map((e) => Coin.fromPartial(e)) || []
    return message
  },
}

messageTypeRegistry.set(
  QueryTotalPoolLiquidityResponse.$type,
  QueryTotalPoolLiquidityResponse,
)

function createBaseQueryTotalSharesRequest(): QueryTotalSharesRequest {
  return { $type: "nibiru.spot.v1.QueryTotalSharesRequest", poolId: Long.UZERO }
}

export const QueryTotalSharesRequest = {
  $type: "nibiru.spot.v1.QueryTotalSharesRequest" as const,

  encode(
    message: QueryTotalSharesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSharesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryTotalSharesRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.poolId = reader.uint64() as Long
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryTotalSharesRequest {
    return {
      $type: QueryTotalSharesRequest.$type,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
    }
  },

  toJSON(message: QueryTotalSharesRequest): unknown {
    const obj: any = {}
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString())
    return obj
  },

  create<I extends Exact<DeepPartial<QueryTotalSharesRequest>, I>>(
    base?: I,
  ): QueryTotalSharesRequest {
    return QueryTotalSharesRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalSharesRequest>, I>>(
    object: I,
  ): QueryTotalSharesRequest {
    const message = createBaseQueryTotalSharesRequest()
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO
    return message
  },
}

messageTypeRegistry.set(QueryTotalSharesRequest.$type, QueryTotalSharesRequest)

function createBaseQueryTotalSharesResponse(): QueryTotalSharesResponse {
  return { $type: "nibiru.spot.v1.QueryTotalSharesResponse", totalShares: undefined }
}

export const QueryTotalSharesResponse = {
  $type: "nibiru.spot.v1.QueryTotalSharesResponse" as const,

  encode(
    message: QueryTotalSharesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSharesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryTotalSharesResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.totalShares = Coin.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryTotalSharesResponse {
    return {
      $type: QueryTotalSharesResponse.$type,
      totalShares: isSet(object.totalShares)
        ? Coin.fromJSON(object.totalShares)
        : undefined,
    }
  },

  toJSON(message: QueryTotalSharesResponse): unknown {
    const obj: any = {}
    message.totalShares !== undefined &&
      (obj.totalShares = message.totalShares
        ? Coin.toJSON(message.totalShares)
        : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<QueryTotalSharesResponse>, I>>(
    base?: I,
  ): QueryTotalSharesResponse {
    return QueryTotalSharesResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalSharesResponse>, I>>(
    object: I,
  ): QueryTotalSharesResponse {
    const message = createBaseQueryTotalSharesResponse()
    message.totalShares =
      object.totalShares !== undefined && object.totalShares !== null
        ? Coin.fromPartial(object.totalShares)
        : undefined
    return message
  },
}

messageTypeRegistry.set(QueryTotalSharesResponse.$type, QueryTotalSharesResponse)

function createBaseQuerySpotPriceRequest(): QuerySpotPriceRequest {
  return {
    $type: "nibiru.spot.v1.QuerySpotPriceRequest",
    poolId: Long.UZERO,
    tokenInDenom: "",
    tokenOutDenom: "",
  }
}

export const QuerySpotPriceRequest = {
  $type: "nibiru.spot.v1.QuerySpotPriceRequest" as const,

  encode(
    message: QuerySpotPriceRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId)
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom)
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(26).string(message.tokenOutDenom)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQuerySpotPriceRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.poolId = reader.uint64() as Long
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.tokenInDenom = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.tokenOutDenom = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QuerySpotPriceRequest {
    return {
      $type: QuerySpotPriceRequest.$type,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokenInDenom: isSet(object.tokenInDenom) ? String(object.tokenInDenom) : "",
      tokenOutDenom: isSet(object.tokenOutDenom) ? String(object.tokenOutDenom) : "",
    }
  },

  toJSON(message: QuerySpotPriceRequest): unknown {
    const obj: any = {}
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString())
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom)
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom)
    return obj
  },

  create<I extends Exact<DeepPartial<QuerySpotPriceRequest>, I>>(
    base?: I,
  ): QuerySpotPriceRequest {
    return QuerySpotPriceRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QuerySpotPriceRequest>, I>>(
    object: I,
  ): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest()
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO
    message.tokenInDenom = object.tokenInDenom ?? ""
    message.tokenOutDenom = object.tokenOutDenom ?? ""
    return message
  },
}

messageTypeRegistry.set(QuerySpotPriceRequest.$type, QuerySpotPriceRequest)

function createBaseQuerySpotPriceResponse(): QuerySpotPriceResponse {
  return { $type: "nibiru.spot.v1.QuerySpotPriceResponse", spotPrice: "" }
}

export const QuerySpotPriceResponse = {
  $type: "nibiru.spot.v1.QuerySpotPriceResponse" as const,

  encode(
    message: QuerySpotPriceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQuerySpotPriceResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.spotPrice = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QuerySpotPriceResponse {
    return {
      $type: QuerySpotPriceResponse.$type,
      spotPrice: isSet(object.spotPrice) ? String(object.spotPrice) : "",
    }
  },

  toJSON(message: QuerySpotPriceResponse): unknown {
    const obj: any = {}
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice)
    return obj
  },

  create<I extends Exact<DeepPartial<QuerySpotPriceResponse>, I>>(
    base?: I,
  ): QuerySpotPriceResponse {
    return QuerySpotPriceResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QuerySpotPriceResponse>, I>>(
    object: I,
  ): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse()
    message.spotPrice = object.spotPrice ?? ""
    return message
  },
}

messageTypeRegistry.set(QuerySpotPriceResponse.$type, QuerySpotPriceResponse)

function createBaseQuerySwapExactAmountInRequest(): QuerySwapExactAmountInRequest {
  return {
    $type: "nibiru.spot.v1.QuerySwapExactAmountInRequest",
    poolId: Long.UZERO,
    tokenIn: undefined,
    tokenOutDenom: "",
  }
}

export const QuerySwapExactAmountInRequest = {
  $type: "nibiru.spot.v1.QuerySwapExactAmountInRequest" as const,

  encode(
    message: QuerySwapExactAmountInRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId)
    }
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(18).fork()).ldelim()
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(26).string(message.tokenOutDenom)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySwapExactAmountInRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQuerySwapExactAmountInRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.poolId = reader.uint64() as Long
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

          message.tokenOutDenom = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QuerySwapExactAmountInRequest {
    return {
      $type: QuerySwapExactAmountInRequest.$type,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokenIn: isSet(object.tokenIn) ? Coin.fromJSON(object.tokenIn) : undefined,
      tokenOutDenom: isSet(object.tokenOutDenom) ? String(object.tokenOutDenom) : "",
    }
  },

  toJSON(message: QuerySwapExactAmountInRequest): unknown {
    const obj: any = {}
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString())
    message.tokenIn !== undefined &&
      (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined)
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom)
    return obj
  },

  create<I extends Exact<DeepPartial<QuerySwapExactAmountInRequest>, I>>(
    base?: I,
  ): QuerySwapExactAmountInRequest {
    return QuerySwapExactAmountInRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapExactAmountInRequest>, I>>(
    object: I,
  ): QuerySwapExactAmountInRequest {
    const message = createBaseQuerySwapExactAmountInRequest()
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO
    message.tokenIn =
      object.tokenIn !== undefined && object.tokenIn !== null
        ? Coin.fromPartial(object.tokenIn)
        : undefined
    message.tokenOutDenom = object.tokenOutDenom ?? ""
    return message
  },
}

messageTypeRegistry.set(
  QuerySwapExactAmountInRequest.$type,
  QuerySwapExactAmountInRequest,
)

function createBaseQuerySwapExactAmountInResponse(): QuerySwapExactAmountInResponse {
  return {
    $type: "nibiru.spot.v1.QuerySwapExactAmountInResponse",
    tokenOut: undefined,
    fee: undefined,
  }
}

export const QuerySwapExactAmountInResponse = {
  $type: "nibiru.spot.v1.QuerySwapExactAmountInResponse" as const,

  encode(
    message: QuerySwapExactAmountInResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(18).fork()).ldelim()
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySwapExactAmountInResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQuerySwapExactAmountInResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break
          }

          message.tokenOut = Coin.decode(reader, reader.uint32())
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.fee = Coin.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QuerySwapExactAmountInResponse {
    return {
      $type: QuerySwapExactAmountInResponse.$type,
      tokenOut: isSet(object.tokenOut) ? Coin.fromJSON(object.tokenOut) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
    }
  },

  toJSON(message: QuerySwapExactAmountInResponse): unknown {
    const obj: any = {}
    message.tokenOut !== undefined &&
      (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined)
    message.fee !== undefined &&
      (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<QuerySwapExactAmountInResponse>, I>>(
    base?: I,
  ): QuerySwapExactAmountInResponse {
    return QuerySwapExactAmountInResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapExactAmountInResponse>, I>>(
    object: I,
  ): QuerySwapExactAmountInResponse {
    const message = createBaseQuerySwapExactAmountInResponse()
    message.tokenOut =
      object.tokenOut !== undefined && object.tokenOut !== null
        ? Coin.fromPartial(object.tokenOut)
        : undefined
    message.fee =
      object.fee !== undefined && object.fee !== null
        ? Coin.fromPartial(object.fee)
        : undefined
    return message
  },
}

messageTypeRegistry.set(
  QuerySwapExactAmountInResponse.$type,
  QuerySwapExactAmountInResponse,
)

function createBaseQuerySwapExactAmountOutRequest(): QuerySwapExactAmountOutRequest {
  return {
    $type: "nibiru.spot.v1.QuerySwapExactAmountOutRequest",
    poolId: Long.UZERO,
    tokenOut: undefined,
    tokenInDenom: "",
  }
}

export const QuerySwapExactAmountOutRequest = {
  $type: "nibiru.spot.v1.QuerySwapExactAmountOutRequest" as const,

  encode(
    message: QuerySwapExactAmountOutRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId)
    }
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(18).fork()).ldelim()
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(26).string(message.tokenInDenom)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySwapExactAmountOutRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQuerySwapExactAmountOutRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.poolId = reader.uint64() as Long
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.tokenOut = Coin.decode(reader, reader.uint32())
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.tokenInDenom = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QuerySwapExactAmountOutRequest {
    return {
      $type: QuerySwapExactAmountOutRequest.$type,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokenOut: isSet(object.tokenOut) ? Coin.fromJSON(object.tokenOut) : undefined,
      tokenInDenom: isSet(object.tokenInDenom) ? String(object.tokenInDenom) : "",
    }
  },

  toJSON(message: QuerySwapExactAmountOutRequest): unknown {
    const obj: any = {}
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString())
    message.tokenOut !== undefined &&
      (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined)
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom)
    return obj
  },

  create<I extends Exact<DeepPartial<QuerySwapExactAmountOutRequest>, I>>(
    base?: I,
  ): QuerySwapExactAmountOutRequest {
    return QuerySwapExactAmountOutRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapExactAmountOutRequest>, I>>(
    object: I,
  ): QuerySwapExactAmountOutRequest {
    const message = createBaseQuerySwapExactAmountOutRequest()
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO
    message.tokenOut =
      object.tokenOut !== undefined && object.tokenOut !== null
        ? Coin.fromPartial(object.tokenOut)
        : undefined
    message.tokenInDenom = object.tokenInDenom ?? ""
    return message
  },
}

messageTypeRegistry.set(
  QuerySwapExactAmountOutRequest.$type,
  QuerySwapExactAmountOutRequest,
)

function createBaseQuerySwapExactAmountOutResponse(): QuerySwapExactAmountOutResponse {
  return { $type: "nibiru.spot.v1.QuerySwapExactAmountOutResponse", tokenIn: undefined }
}

export const QuerySwapExactAmountOutResponse = {
  $type: "nibiru.spot.v1.QuerySwapExactAmountOutResponse" as const,

  encode(
    message: QuerySwapExactAmountOutResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySwapExactAmountOutResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQuerySwapExactAmountOutResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break
          }

          message.tokenIn = Coin.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QuerySwapExactAmountOutResponse {
    return {
      $type: QuerySwapExactAmountOutResponse.$type,
      tokenIn: isSet(object.tokenIn) ? Coin.fromJSON(object.tokenIn) : undefined,
    }
  },

  toJSON(message: QuerySwapExactAmountOutResponse): unknown {
    const obj: any = {}
    message.tokenIn !== undefined &&
      (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<QuerySwapExactAmountOutResponse>, I>>(
    base?: I,
  ): QuerySwapExactAmountOutResponse {
    return QuerySwapExactAmountOutResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapExactAmountOutResponse>, I>>(
    object: I,
  ): QuerySwapExactAmountOutResponse {
    const message = createBaseQuerySwapExactAmountOutResponse()
    message.tokenIn =
      object.tokenIn !== undefined && object.tokenIn !== null
        ? Coin.fromPartial(object.tokenIn)
        : undefined
    return message
  },
}

messageTypeRegistry.set(
  QuerySwapExactAmountOutResponse.$type,
  QuerySwapExactAmountOutResponse,
)

function createBaseQueryJoinExactAmountInRequest(): QueryJoinExactAmountInRequest {
  return {
    $type: "nibiru.spot.v1.QueryJoinExactAmountInRequest",
    poolId: Long.UZERO,
    tokensIn: [],
  }
}

export const QueryJoinExactAmountInRequest = {
  $type: "nibiru.spot.v1.QueryJoinExactAmountInRequest" as const,

  encode(
    message: QueryJoinExactAmountInRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId)
    }
    for (const v of message.tokensIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryJoinExactAmountInRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryJoinExactAmountInRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.poolId = reader.uint64() as Long
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.tokensIn.push(Coin.decode(reader, reader.uint32()))
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryJoinExactAmountInRequest {
    return {
      $type: QueryJoinExactAmountInRequest.$type,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokensIn: Array.isArray(object?.tokensIn)
        ? object.tokensIn.map((e: any) => Coin.fromJSON(e))
        : [],
    }
  },

  toJSON(message: QueryJoinExactAmountInRequest): unknown {
    const obj: any = {}
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString())
    if (message.tokensIn) {
      obj.tokensIn = message.tokensIn.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.tokensIn = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<QueryJoinExactAmountInRequest>, I>>(
    base?: I,
  ): QueryJoinExactAmountInRequest {
    return QueryJoinExactAmountInRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryJoinExactAmountInRequest>, I>>(
    object: I,
  ): QueryJoinExactAmountInRequest {
    const message = createBaseQueryJoinExactAmountInRequest()
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO
    message.tokensIn = object.tokensIn?.map((e) => Coin.fromPartial(e)) || []
    return message
  },
}

messageTypeRegistry.set(
  QueryJoinExactAmountInRequest.$type,
  QueryJoinExactAmountInRequest,
)

function createBaseQueryJoinExactAmountInResponse(): QueryJoinExactAmountInResponse {
  return {
    $type: "nibiru.spot.v1.QueryJoinExactAmountInResponse",
    poolSharesOut: "",
    remCoins: [],
  }
}

export const QueryJoinExactAmountInResponse = {
  $type: "nibiru.spot.v1.QueryJoinExactAmountInResponse" as const,

  encode(
    message: QueryJoinExactAmountInResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.poolSharesOut !== "") {
      writer.uint32(10).string(message.poolSharesOut)
    }
    for (const v of message.remCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryJoinExactAmountInResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryJoinExactAmountInResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.poolSharesOut = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.remCoins.push(Coin.decode(reader, reader.uint32()))
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryJoinExactAmountInResponse {
    return {
      $type: QueryJoinExactAmountInResponse.$type,
      poolSharesOut: isSet(object.poolSharesOut) ? String(object.poolSharesOut) : "",
      remCoins: Array.isArray(object?.remCoins)
        ? object.remCoins.map((e: any) => Coin.fromJSON(e))
        : [],
    }
  },

  toJSON(message: QueryJoinExactAmountInResponse): unknown {
    const obj: any = {}
    message.poolSharesOut !== undefined && (obj.poolSharesOut = message.poolSharesOut)
    if (message.remCoins) {
      obj.remCoins = message.remCoins.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.remCoins = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<QueryJoinExactAmountInResponse>, I>>(
    base?: I,
  ): QueryJoinExactAmountInResponse {
    return QueryJoinExactAmountInResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryJoinExactAmountInResponse>, I>>(
    object: I,
  ): QueryJoinExactAmountInResponse {
    const message = createBaseQueryJoinExactAmountInResponse()
    message.poolSharesOut = object.poolSharesOut ?? ""
    message.remCoins = object.remCoins?.map((e) => Coin.fromPartial(e)) || []
    return message
  },
}

messageTypeRegistry.set(
  QueryJoinExactAmountInResponse.$type,
  QueryJoinExactAmountInResponse,
)

function createBaseQueryJoinExactAmountOutRequest(): QueryJoinExactAmountOutRequest {
  return { $type: "nibiru.spot.v1.QueryJoinExactAmountOutRequest", poolId: Long.UZERO }
}

export const QueryJoinExactAmountOutRequest = {
  $type: "nibiru.spot.v1.QueryJoinExactAmountOutRequest" as const,

  encode(
    message: QueryJoinExactAmountOutRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryJoinExactAmountOutRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryJoinExactAmountOutRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.poolId = reader.uint64() as Long
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryJoinExactAmountOutRequest {
    return {
      $type: QueryJoinExactAmountOutRequest.$type,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
    }
  },

  toJSON(message: QueryJoinExactAmountOutRequest): unknown {
    const obj: any = {}
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString())
    return obj
  },

  create<I extends Exact<DeepPartial<QueryJoinExactAmountOutRequest>, I>>(
    base?: I,
  ): QueryJoinExactAmountOutRequest {
    return QueryJoinExactAmountOutRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryJoinExactAmountOutRequest>, I>>(
    object: I,
  ): QueryJoinExactAmountOutRequest {
    const message = createBaseQueryJoinExactAmountOutRequest()
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO
    return message
  },
}

messageTypeRegistry.set(
  QueryJoinExactAmountOutRequest.$type,
  QueryJoinExactAmountOutRequest,
)

function createBaseQueryJoinExactAmountOutResponse(): QueryJoinExactAmountOutResponse {
  return { $type: "nibiru.spot.v1.QueryJoinExactAmountOutResponse" }
}

export const QueryJoinExactAmountOutResponse = {
  $type: "nibiru.spot.v1.QueryJoinExactAmountOutResponse" as const,

  encode(
    _: QueryJoinExactAmountOutResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryJoinExactAmountOutResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryJoinExactAmountOutResponse()
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

  fromJSON(_: any): QueryJoinExactAmountOutResponse {
    return { $type: QueryJoinExactAmountOutResponse.$type }
  },

  toJSON(_: QueryJoinExactAmountOutResponse): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<QueryJoinExactAmountOutResponse>, I>>(
    base?: I,
  ): QueryJoinExactAmountOutResponse {
    return QueryJoinExactAmountOutResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryJoinExactAmountOutResponse>, I>>(
    _: I,
  ): QueryJoinExactAmountOutResponse {
    const message = createBaseQueryJoinExactAmountOutResponse()
    return message
  },
}

messageTypeRegistry.set(
  QueryJoinExactAmountOutResponse.$type,
  QueryJoinExactAmountOutResponse,
)

function createBaseQueryExitExactAmountInRequest(): QueryExitExactAmountInRequest {
  return {
    $type: "nibiru.spot.v1.QueryExitExactAmountInRequest",
    poolId: Long.UZERO,
    poolSharesIn: "",
  }
}

export const QueryExitExactAmountInRequest = {
  $type: "nibiru.spot.v1.QueryExitExactAmountInRequest" as const,

  encode(
    message: QueryExitExactAmountInRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId)
    }
    if (message.poolSharesIn !== "") {
      writer.uint32(18).string(message.poolSharesIn)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryExitExactAmountInRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryExitExactAmountInRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.poolId = reader.uint64() as Long
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.poolSharesIn = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryExitExactAmountInRequest {
    return {
      $type: QueryExitExactAmountInRequest.$type,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      poolSharesIn: isSet(object.poolSharesIn) ? String(object.poolSharesIn) : "",
    }
  },

  toJSON(message: QueryExitExactAmountInRequest): unknown {
    const obj: any = {}
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString())
    message.poolSharesIn !== undefined && (obj.poolSharesIn = message.poolSharesIn)
    return obj
  },

  create<I extends Exact<DeepPartial<QueryExitExactAmountInRequest>, I>>(
    base?: I,
  ): QueryExitExactAmountInRequest {
    return QueryExitExactAmountInRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryExitExactAmountInRequest>, I>>(
    object: I,
  ): QueryExitExactAmountInRequest {
    const message = createBaseQueryExitExactAmountInRequest()
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO
    message.poolSharesIn = object.poolSharesIn ?? ""
    return message
  },
}

messageTypeRegistry.set(
  QueryExitExactAmountInRequest.$type,
  QueryExitExactAmountInRequest,
)

function createBaseQueryExitExactAmountInResponse(): QueryExitExactAmountInResponse {
  return {
    $type: "nibiru.spot.v1.QueryExitExactAmountInResponse",
    tokensOut: [],
    fees: [],
  }
}

export const QueryExitExactAmountInResponse = {
  $type: "nibiru.spot.v1.QueryExitExactAmountInResponse" as const,

  encode(
    message: QueryExitExactAmountInResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.tokensOut) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    for (const v of message.fees) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryExitExactAmountInResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryExitExactAmountInResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.tokensOut.push(Coin.decode(reader, reader.uint32()))
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.fees.push(Coin.decode(reader, reader.uint32()))
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryExitExactAmountInResponse {
    return {
      $type: QueryExitExactAmountInResponse.$type,
      tokensOut: Array.isArray(object?.tokensOut)
        ? object.tokensOut.map((e: any) => Coin.fromJSON(e))
        : [],
      fees: Array.isArray(object?.fees)
        ? object.fees.map((e: any) => Coin.fromJSON(e))
        : [],
    }
  },

  toJSON(message: QueryExitExactAmountInResponse): unknown {
    const obj: any = {}
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
    return obj
  },

  create<I extends Exact<DeepPartial<QueryExitExactAmountInResponse>, I>>(
    base?: I,
  ): QueryExitExactAmountInResponse {
    return QueryExitExactAmountInResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryExitExactAmountInResponse>, I>>(
    object: I,
  ): QueryExitExactAmountInResponse {
    const message = createBaseQueryExitExactAmountInResponse()
    message.tokensOut = object.tokensOut?.map((e) => Coin.fromPartial(e)) || []
    message.fees = object.fees?.map((e) => Coin.fromPartial(e)) || []
    return message
  },
}

messageTypeRegistry.set(
  QueryExitExactAmountInResponse.$type,
  QueryExitExactAmountInResponse,
)

function createBaseQueryExitExactAmountOutRequest(): QueryExitExactAmountOutRequest {
  return { $type: "nibiru.spot.v1.QueryExitExactAmountOutRequest", poolId: Long.UZERO }
}

export const QueryExitExactAmountOutRequest = {
  $type: "nibiru.spot.v1.QueryExitExactAmountOutRequest" as const,

  encode(
    message: QueryExitExactAmountOutRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryExitExactAmountOutRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryExitExactAmountOutRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.poolId = reader.uint64() as Long
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QueryExitExactAmountOutRequest {
    return {
      $type: QueryExitExactAmountOutRequest.$type,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
    }
  },

  toJSON(message: QueryExitExactAmountOutRequest): unknown {
    const obj: any = {}
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString())
    return obj
  },

  create<I extends Exact<DeepPartial<QueryExitExactAmountOutRequest>, I>>(
    base?: I,
  ): QueryExitExactAmountOutRequest {
    return QueryExitExactAmountOutRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryExitExactAmountOutRequest>, I>>(
    object: I,
  ): QueryExitExactAmountOutRequest {
    const message = createBaseQueryExitExactAmountOutRequest()
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO
    return message
  },
}

messageTypeRegistry.set(
  QueryExitExactAmountOutRequest.$type,
  QueryExitExactAmountOutRequest,
)

function createBaseQueryExitExactAmountOutResponse(): QueryExitExactAmountOutResponse {
  return { $type: "nibiru.spot.v1.QueryExitExactAmountOutResponse" }
}

export const QueryExitExactAmountOutResponse = {
  $type: "nibiru.spot.v1.QueryExitExactAmountOutResponse" as const,

  encode(
    _: QueryExitExactAmountOutResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryExitExactAmountOutResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryExitExactAmountOutResponse()
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

  fromJSON(_: any): QueryExitExactAmountOutResponse {
    return { $type: QueryExitExactAmountOutResponse.$type }
  },

  toJSON(_: QueryExitExactAmountOutResponse): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<QueryExitExactAmountOutResponse>, I>>(
    base?: I,
  ): QueryExitExactAmountOutResponse {
    return QueryExitExactAmountOutResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QueryExitExactAmountOutResponse>, I>>(
    _: I,
  ): QueryExitExactAmountOutResponse {
    const message = createBaseQueryExitExactAmountOutResponse()
    return message
  },
}

messageTypeRegistry.set(
  QueryExitExactAmountOutResponse.$type,
  QueryExitExactAmountOutResponse,
)

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters of the spot module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>
  /** Next available pool id number. */
  PoolNumber(request: QueryPoolNumberRequest): Promise<QueryPoolNumberResponse>
  /** Fetch a pool by id. */
  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>
  /** Returns all pools. */
  Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>
  /** Parameters of a single pool. */
  PoolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse>
  /** Number of pools. */
  NumPools(request: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse>
  /** Total liquidity across all pools. */
  TotalLiquidity(
    request: QueryTotalLiquidityRequest,
  ): Promise<QueryTotalLiquidityResponse>
  /** Total liquidity in a single pool. */
  TotalPoolLiquidity(
    request: QueryTotalPoolLiquidityRequest,
  ): Promise<QueryTotalPoolLiquidityResponse>
  /** Total shares in a single pool. */
  TotalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse>
  /** Instantaneous price of an asset in a pool. */
  SpotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>
  /**
   * Estimates the amount of assets returned given an exact amount of tokens to
   * swap.
   */
  EstimateSwapExactAmountIn(
    request: QuerySwapExactAmountInRequest,
  ): Promise<QuerySwapExactAmountInResponse>
  /**
   * Estimates the amount of tokens required to return the exact amount of
   * assets requested.
   */
  EstimateSwapExactAmountOut(
    request: QuerySwapExactAmountOutRequest,
  ): Promise<QuerySwapExactAmountOutResponse>
  /**
   * Estimates the amount of pool shares returned given an amount of tokens to
   * join.
   */
  EstimateJoinExactAmountIn(
    request: QueryJoinExactAmountInRequest,
  ): Promise<QueryJoinExactAmountInResponse>
  /**
   * Estimates the amount of tokens required to obtain an exact amount of pool
   * shares.
   */
  EstimateJoinExactAmountOut(
    request: QueryJoinExactAmountOutRequest,
  ): Promise<QueryJoinExactAmountOutResponse>
  /**
   * Estimates the amount of tokens returned to the user given an exact amount
   * of pool shares.
   */
  EstimateExitExactAmountIn(
    request: QueryExitExactAmountInRequest,
  ): Promise<QueryExitExactAmountInResponse>
  /**
   * Estimates the amount of pool shares required to extract an exact amount of
   * tokens from the pool.
   */
  EstimateExitExactAmountOut(
    request: QueryExitExactAmountOutRequest,
  ): Promise<QueryExitExactAmountOutResponse>
}

export const QueryServiceName = "nibiru.spot.v1.Query"
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  private readonly service: string
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName
    this.rpc = rpc
    this.Params = this.Params.bind(this)
    this.PoolNumber = this.PoolNumber.bind(this)
    this.Pool = this.Pool.bind(this)
    this.Pools = this.Pools.bind(this)
    this.PoolParams = this.PoolParams.bind(this)
    this.NumPools = this.NumPools.bind(this)
    this.TotalLiquidity = this.TotalLiquidity.bind(this)
    this.TotalPoolLiquidity = this.TotalPoolLiquidity.bind(this)
    this.TotalShares = this.TotalShares.bind(this)
    this.SpotPrice = this.SpotPrice.bind(this)
    this.EstimateSwapExactAmountIn = this.EstimateSwapExactAmountIn.bind(this)
    this.EstimateSwapExactAmountOut = this.EstimateSwapExactAmountOut.bind(this)
    this.EstimateJoinExactAmountIn = this.EstimateJoinExactAmountIn.bind(this)
    this.EstimateJoinExactAmountOut = this.EstimateJoinExactAmountOut.bind(this)
    this.EstimateExitExactAmountIn = this.EstimateExitExactAmountIn.bind(this)
    this.EstimateExitExactAmountOut = this.EstimateExitExactAmountOut.bind(this)
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "Params", data)
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)))
  }

  PoolNumber(request: QueryPoolNumberRequest): Promise<QueryPoolNumberResponse> {
    const data = QueryPoolNumberRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "PoolNumber", data)
    return promise.then((data) =>
      QueryPoolNumberResponse.decode(_m0.Reader.create(data)),
    )
  }

  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "Pool", data)
    return promise.then((data) => QueryPoolResponse.decode(_m0.Reader.create(data)))
  }

  Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse> {
    const data = QueryPoolsRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "Pools", data)
    return promise.then((data) => QueryPoolsResponse.decode(_m0.Reader.create(data)))
  }

  PoolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse> {
    const data = QueryPoolParamsRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "PoolParams", data)
    return promise.then((data) =>
      QueryPoolParamsResponse.decode(_m0.Reader.create(data)),
    )
  }

  NumPools(request: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse> {
    const data = QueryNumPoolsRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "NumPools", data)
    return promise.then((data) => QueryNumPoolsResponse.decode(_m0.Reader.create(data)))
  }

  TotalLiquidity(
    request: QueryTotalLiquidityRequest,
  ): Promise<QueryTotalLiquidityResponse> {
    const data = QueryTotalLiquidityRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "TotalLiquidity", data)
    return promise.then((data) =>
      QueryTotalLiquidityResponse.decode(_m0.Reader.create(data)),
    )
  }

  TotalPoolLiquidity(
    request: QueryTotalPoolLiquidityRequest,
  ): Promise<QueryTotalPoolLiquidityResponse> {
    const data = QueryTotalPoolLiquidityRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "TotalPoolLiquidity", data)
    return promise.then((data) =>
      QueryTotalPoolLiquidityResponse.decode(_m0.Reader.create(data)),
    )
  }

  TotalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse> {
    const data = QueryTotalSharesRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "TotalShares", data)
    return promise.then((data) =>
      QueryTotalSharesResponse.decode(_m0.Reader.create(data)),
    )
  }

  SpotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse> {
    const data = QuerySpotPriceRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "SpotPrice", data)
    return promise.then((data) =>
      QuerySpotPriceResponse.decode(_m0.Reader.create(data)),
    )
  }

  EstimateSwapExactAmountIn(
    request: QuerySwapExactAmountInRequest,
  ): Promise<QuerySwapExactAmountInResponse> {
    const data = QuerySwapExactAmountInRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "EstimateSwapExactAmountIn", data)
    return promise.then((data) =>
      QuerySwapExactAmountInResponse.decode(_m0.Reader.create(data)),
    )
  }

  EstimateSwapExactAmountOut(
    request: QuerySwapExactAmountOutRequest,
  ): Promise<QuerySwapExactAmountOutResponse> {
    const data = QuerySwapExactAmountOutRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "EstimateSwapExactAmountOut", data)
    return promise.then((data) =>
      QuerySwapExactAmountOutResponse.decode(_m0.Reader.create(data)),
    )
  }

  EstimateJoinExactAmountIn(
    request: QueryJoinExactAmountInRequest,
  ): Promise<QueryJoinExactAmountInResponse> {
    const data = QueryJoinExactAmountInRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "EstimateJoinExactAmountIn", data)
    return promise.then((data) =>
      QueryJoinExactAmountInResponse.decode(_m0.Reader.create(data)),
    )
  }

  EstimateJoinExactAmountOut(
    request: QueryJoinExactAmountOutRequest,
  ): Promise<QueryJoinExactAmountOutResponse> {
    const data = QueryJoinExactAmountOutRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "EstimateJoinExactAmountOut", data)
    return promise.then((data) =>
      QueryJoinExactAmountOutResponse.decode(_m0.Reader.create(data)),
    )
  }

  EstimateExitExactAmountIn(
    request: QueryExitExactAmountInRequest,
  ): Promise<QueryExitExactAmountInResponse> {
    const data = QueryExitExactAmountInRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "EstimateExitExactAmountIn", data)
    return promise.then((data) =>
      QueryExitExactAmountInResponse.decode(_m0.Reader.create(data)),
    )
  }

  EstimateExitExactAmountOut(
    request: QueryExitExactAmountOutRequest,
  ): Promise<QueryExitExactAmountOutResponse> {
    const data = QueryExitExactAmountOutRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "EstimateExitExactAmountOut", data)
    return promise.then((data) =>
      QueryExitExactAmountOutResponse.decode(_m0.Reader.create(data)),
    )
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
