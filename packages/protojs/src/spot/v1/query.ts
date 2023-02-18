/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { Pool, PoolParams } from "./pool";

export const protobufPackage = "nibiru.spot.v1";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryPoolNumberRequest {
}

export interface QueryPoolNumberResponse {
  poolId: Long;
}

export interface QueryPoolRequest {
  poolId: Long;
}

export interface QueryPoolResponse {
  pool?: Pool;
}

export interface QueryPoolsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

export interface QueryPoolsResponse {
  pools: Pool[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

export interface QueryPoolParamsRequest {
  poolId: Long;
}

export interface QueryPoolParamsResponse {
  poolParams?: PoolParams;
}

export interface QueryNumPoolsRequest {
}

export interface QueryNumPoolsResponse {
  numPools: Long;
}

/**
 * --------------------------------------------
 * Query total liquidity the protocol
 */
export interface QueryTotalLiquidityRequest {
}

export interface QueryTotalLiquidityResponse {
  liquidity: Coin[];
}

/**
 * --------------------------------------------
 * Query total liquidity for a pool
 */
export interface QueryTotalPoolLiquidityRequest {
  poolId: Long;
}

export interface QueryTotalPoolLiquidityResponse {
  liquidity: Coin[];
}

export interface QueryTotalSharesRequest {
  poolId: Long;
}

export interface QueryTotalSharesResponse {
  /** sum of all LP tokens sent out */
  totalShares?: Coin;
}

/**
 * Returns the amount of tokenInDenom to produce 1 tokenOutDenom
 * For example, if the price of NIBI = 9.123 NUSD, then setting tokenInDenom=NUSD
 * and tokenOutDenom=NIBI would give "9.123".
 */
export interface QuerySpotPriceRequest {
  poolId: Long;
  /** the denomination of the token you are giving into the pool */
  tokenInDenom: string;
  /** the denomination of the token you are taking out of the pool */
  tokenOutDenom: string;
}

export interface QuerySpotPriceResponse {
  spotPrice: string;
}

/**
 * Given an exact amount of tokens in and a target tokenOutDenom, calculates
 * the expected amount of tokens out received from a swap.
 */
export interface QuerySwapExactAmountInRequest {
  poolId: Long;
  tokenIn?: Coin;
  tokenOutDenom: string;
}

export interface QuerySwapExactAmountInResponse {
  tokenOut?: Coin;
}

/**
 * Given an exact amount of tokens out and a target tokenInDenom, calculates
 * the expected amount of tokens in required to do the swap.
 */
export interface QuerySwapExactAmountOutRequest {
  poolId: Long;
  tokenOut?: Coin;
  tokenInDenom: string;
}

export interface QuerySwapExactAmountOutResponse {
  tokenIn?: Coin;
}

export interface QueryJoinExactAmountInRequest {
  poolId: Long;
  tokensIn: Coin[];
}

export interface QueryJoinExactAmountInResponse {
  /** amount of pool shares returned to user after join */
  poolSharesOut: string;
  /** coins remaining after pool join */
  remCoins: Coin[];
}

export interface QueryJoinExactAmountOutRequest {
  poolId: Long;
}

export interface QueryJoinExactAmountOutResponse {
}

export interface QueryExitExactAmountInRequest {
  poolId: Long;
  /** amount of pool shares to return to pool */
  poolSharesIn: string;
}

export interface QueryExitExactAmountInResponse {
  /** coins obtained after exiting */
  tokensOut: Coin[];
}

export interface QueryExitExactAmountOutRequest {
  poolId: Long;
}

export interface QueryExitExactAmountOutResponse {
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryPoolNumberRequest(): QueryPoolNumberRequest {
  return {};
}

export const QueryPoolNumberRequest = {
  encode(_: QueryPoolNumberRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolNumberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolNumberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryPoolNumberRequest {
    return {};
  },

  toJSON(_: QueryPoolNumberRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolNumberRequest>, I>>(_: I): QueryPoolNumberRequest {
    const message = createBaseQueryPoolNumberRequest();
    return message;
  },
};

function createBaseQueryPoolNumberResponse(): QueryPoolNumberResponse {
  return { poolId: Long.UZERO };
}

export const QueryPoolNumberResponse = {
  encode(message: QueryPoolNumberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolNumberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolNumberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolNumberResponse {
    return { poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO };
  },

  toJSON(message: QueryPoolNumberResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolNumberResponse>, I>>(object: I): QueryPoolNumberResponse {
    const message = createBaseQueryPoolNumberResponse();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryPoolRequest(): QueryPoolRequest {
  return { poolId: Long.UZERO };
}

export const QueryPoolRequest = {
  encode(message: QueryPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolRequest {
    return { poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO };
  },

  toJSON(message: QueryPoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(object: I): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryPoolResponse(): QueryPoolResponse {
  return { pool: undefined };
}

export const QueryPoolResponse = {
  encode(message: QueryPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolResponse {
    return { pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined };
  },

  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(object: I): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = (object.pool !== undefined && object.pool !== null) ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
};

function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return { pagination: undefined };
}

export const QueryPoolsRequest = {
  encode(message: QueryPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryPoolsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolsRequest>, I>>(object: I): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return { pools: [], pagination: undefined };
}

export const QueryPoolsResponse = {
  encode(message: QueryPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Pool.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Pool.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => e ? Pool.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolsResponse>, I>>(object: I): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map((e) => Pool.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPoolParamsRequest(): QueryPoolParamsRequest {
  return { poolId: Long.UZERO };
}

export const QueryPoolParamsRequest = {
  encode(message: QueryPoolParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolParamsRequest {
    return { poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO };
  },

  toJSON(message: QueryPoolParamsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolParamsRequest>, I>>(object: I): QueryPoolParamsRequest {
    const message = createBaseQueryPoolParamsRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryPoolParamsResponse(): QueryPoolParamsResponse {
  return { poolParams: undefined };
}

export const QueryPoolParamsResponse = {
  encode(message: QueryPoolParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolParamsResponse {
    return { poolParams: isSet(object.poolParams) ? PoolParams.fromJSON(object.poolParams) : undefined };
  },

  toJSON(message: QueryPoolParamsResponse): unknown {
    const obj: any = {};
    message.poolParams !== undefined &&
      (obj.poolParams = message.poolParams ? PoolParams.toJSON(message.poolParams) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolParamsResponse>, I>>(object: I): QueryPoolParamsResponse {
    const message = createBaseQueryPoolParamsResponse();
    message.poolParams = (object.poolParams !== undefined && object.poolParams !== null)
      ? PoolParams.fromPartial(object.poolParams)
      : undefined;
    return message;
  },
};

function createBaseQueryNumPoolsRequest(): QueryNumPoolsRequest {
  return {};
}

export const QueryNumPoolsRequest = {
  encode(_: QueryNumPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNumPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryNumPoolsRequest {
    return {};
  },

  toJSON(_: QueryNumPoolsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNumPoolsRequest>, I>>(_: I): QueryNumPoolsRequest {
    const message = createBaseQueryNumPoolsRequest();
    return message;
  },
};

function createBaseQueryNumPoolsResponse(): QueryNumPoolsResponse {
  return { numPools: Long.UZERO };
}

export const QueryNumPoolsResponse = {
  encode(message: QueryNumPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.numPools.isZero()) {
      writer.uint32(8).uint64(message.numPools);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNumPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numPools = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNumPoolsResponse {
    return { numPools: isSet(object.numPools) ? Long.fromValue(object.numPools) : Long.UZERO };
  },

  toJSON(message: QueryNumPoolsResponse): unknown {
    const obj: any = {};
    message.numPools !== undefined && (obj.numPools = (message.numPools || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNumPoolsResponse>, I>>(object: I): QueryNumPoolsResponse {
    const message = createBaseQueryNumPoolsResponse();
    message.numPools = (object.numPools !== undefined && object.numPools !== null)
      ? Long.fromValue(object.numPools)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryTotalLiquidityRequest(): QueryTotalLiquidityRequest {
  return {};
}

export const QueryTotalLiquidityRequest = {
  encode(_: QueryTotalLiquidityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryTotalLiquidityRequest {
    return {};
  },

  toJSON(_: QueryTotalLiquidityRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalLiquidityRequest>, I>>(_: I): QueryTotalLiquidityRequest {
    const message = createBaseQueryTotalLiquidityRequest();
    return message;
  },
};

function createBaseQueryTotalLiquidityResponse(): QueryTotalLiquidityResponse {
  return { liquidity: [] };
}

export const QueryTotalLiquidityResponse = {
  encode(message: QueryTotalLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalLiquidityResponse {
    return { liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: QueryTotalLiquidityResponse): unknown {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.liquidity = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalLiquidityResponse>, I>>(object: I): QueryTotalLiquidityResponse {
    const message = createBaseQueryTotalLiquidityResponse();
    message.liquidity = object.liquidity?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryTotalPoolLiquidityRequest(): QueryTotalPoolLiquidityRequest {
  return { poolId: Long.UZERO };
}

export const QueryTotalPoolLiquidityRequest = {
  encode(message: QueryTotalPoolLiquidityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalPoolLiquidityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalPoolLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalPoolLiquidityRequest {
    return { poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO };
  },

  toJSON(message: QueryTotalPoolLiquidityRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalPoolLiquidityRequest>, I>>(
    object: I,
  ): QueryTotalPoolLiquidityRequest {
    const message = createBaseQueryTotalPoolLiquidityRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryTotalPoolLiquidityResponse(): QueryTotalPoolLiquidityResponse {
  return { liquidity: [] };
}

export const QueryTotalPoolLiquidityResponse = {
  encode(message: QueryTotalPoolLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalPoolLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalPoolLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalPoolLiquidityResponse {
    return { liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: QueryTotalPoolLiquidityResponse): unknown {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.liquidity = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalPoolLiquidityResponse>, I>>(
    object: I,
  ): QueryTotalPoolLiquidityResponse {
    const message = createBaseQueryTotalPoolLiquidityResponse();
    message.liquidity = object.liquidity?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryTotalSharesRequest(): QueryTotalSharesRequest {
  return { poolId: Long.UZERO };
}

export const QueryTotalSharesRequest = {
  encode(message: QueryTotalSharesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSharesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalSharesRequest {
    return { poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO };
  },

  toJSON(message: QueryTotalSharesRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalSharesRequest>, I>>(object: I): QueryTotalSharesRequest {
    const message = createBaseQueryTotalSharesRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryTotalSharesResponse(): QueryTotalSharesResponse {
  return { totalShares: undefined };
}

export const QueryTotalSharesResponse = {
  encode(message: QueryTotalSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalShares = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalSharesResponse {
    return { totalShares: isSet(object.totalShares) ? Coin.fromJSON(object.totalShares) : undefined };
  },

  toJSON(message: QueryTotalSharesResponse): unknown {
    const obj: any = {};
    message.totalShares !== undefined &&
      (obj.totalShares = message.totalShares ? Coin.toJSON(message.totalShares) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalSharesResponse>, I>>(object: I): QueryTotalSharesResponse {
    const message = createBaseQueryTotalSharesResponse();
    message.totalShares = (object.totalShares !== undefined && object.totalShares !== null)
      ? Coin.fromPartial(object.totalShares)
      : undefined;
    return message;
  },
};

function createBaseQuerySpotPriceRequest(): QuerySpotPriceRequest {
  return { poolId: Long.UZERO, tokenInDenom: "", tokenOutDenom: "" };
}

export const QuerySpotPriceRequest = {
  encode(message: QuerySpotPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(26).string(message.tokenOutDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.tokenInDenom = reader.string();
          break;
        case 3:
          message.tokenOutDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySpotPriceRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokenInDenom: isSet(object.tokenInDenom) ? String(object.tokenInDenom) : "",
      tokenOutDenom: isSet(object.tokenOutDenom) ? String(object.tokenOutDenom) : "",
    };
  },

  toJSON(message: QuerySpotPriceRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySpotPriceRequest>, I>>(object: I): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  },
};

function createBaseQuerySpotPriceResponse(): QuerySpotPriceResponse {
  return { spotPrice: "" };
}

export const QuerySpotPriceResponse = {
  encode(message: QuerySpotPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySpotPriceResponse {
    return { spotPrice: isSet(object.spotPrice) ? String(object.spotPrice) : "" };
  },

  toJSON(message: QuerySpotPriceResponse): unknown {
    const obj: any = {};
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySpotPriceResponse>, I>>(object: I): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },
};

function createBaseQuerySwapExactAmountInRequest(): QuerySwapExactAmountInRequest {
  return { poolId: Long.UZERO, tokenIn: undefined, tokenOutDenom: "" };
}

export const QuerySwapExactAmountInRequest = {
  encode(message: QuerySwapExactAmountInRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(26).string(message.tokenOutDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountInRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.tokenOutDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySwapExactAmountInRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokenIn: isSet(object.tokenIn) ? Coin.fromJSON(object.tokenIn) : undefined,
      tokenOutDenom: isSet(object.tokenOutDenom) ? String(object.tokenOutDenom) : "",
    };
  },

  toJSON(message: QuerySwapExactAmountInRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined);
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapExactAmountInRequest>, I>>(
    object: I,
  ): QuerySwapExactAmountInRequest {
    const message = createBaseQuerySwapExactAmountInRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.tokenIn = (object.tokenIn !== undefined && object.tokenIn !== null)
      ? Coin.fromPartial(object.tokenIn)
      : undefined;
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  },
};

function createBaseQuerySwapExactAmountInResponse(): QuerySwapExactAmountInResponse {
  return { tokenOut: undefined };
}

export const QuerySwapExactAmountInResponse = {
  encode(message: QuerySwapExactAmountInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.tokenOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySwapExactAmountInResponse {
    return { tokenOut: isSet(object.tokenOut) ? Coin.fromJSON(object.tokenOut) : undefined };
  },

  toJSON(message: QuerySwapExactAmountInResponse): unknown {
    const obj: any = {};
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapExactAmountInResponse>, I>>(
    object: I,
  ): QuerySwapExactAmountInResponse {
    const message = createBaseQuerySwapExactAmountInResponse();
    message.tokenOut = (object.tokenOut !== undefined && object.tokenOut !== null)
      ? Coin.fromPartial(object.tokenOut)
      : undefined;
    return message;
  },
};

function createBaseQuerySwapExactAmountOutRequest(): QuerySwapExactAmountOutRequest {
  return { poolId: Long.UZERO, tokenOut: undefined, tokenInDenom: "" };
}

export const QuerySwapExactAmountOutRequest = {
  encode(message: QuerySwapExactAmountOutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(26).string(message.tokenInDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountOutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.tokenOut = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.tokenInDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySwapExactAmountOutRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokenOut: isSet(object.tokenOut) ? Coin.fromJSON(object.tokenOut) : undefined,
      tokenInDenom: isSet(object.tokenInDenom) ? String(object.tokenInDenom) : "",
    };
  },

  toJSON(message: QuerySwapExactAmountOutRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined);
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapExactAmountOutRequest>, I>>(
    object: I,
  ): QuerySwapExactAmountOutRequest {
    const message = createBaseQuerySwapExactAmountOutRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.tokenOut = (object.tokenOut !== undefined && object.tokenOut !== null)
      ? Coin.fromPartial(object.tokenOut)
      : undefined;
    message.tokenInDenom = object.tokenInDenom ?? "";
    return message;
  },
};

function createBaseQuerySwapExactAmountOutResponse(): QuerySwapExactAmountOutResponse {
  return { tokenIn: undefined };
}

export const QuerySwapExactAmountOutResponse = {
  encode(message: QuerySwapExactAmountOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySwapExactAmountOutResponse {
    return { tokenIn: isSet(object.tokenIn) ? Coin.fromJSON(object.tokenIn) : undefined };
  },

  toJSON(message: QuerySwapExactAmountOutResponse): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapExactAmountOutResponse>, I>>(
    object: I,
  ): QuerySwapExactAmountOutResponse {
    const message = createBaseQuerySwapExactAmountOutResponse();
    message.tokenIn = (object.tokenIn !== undefined && object.tokenIn !== null)
      ? Coin.fromPartial(object.tokenIn)
      : undefined;
    return message;
  },
};

function createBaseQueryJoinExactAmountInRequest(): QueryJoinExactAmountInRequest {
  return { poolId: Long.UZERO, tokensIn: [] };
}

export const QueryJoinExactAmountInRequest = {
  encode(message: QueryJoinExactAmountInRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.tokensIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryJoinExactAmountInRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryJoinExactAmountInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.tokensIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryJoinExactAmountInRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokensIn: Array.isArray(object?.tokensIn) ? object.tokensIn.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryJoinExactAmountInRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.tokensIn) {
      obj.tokensIn = message.tokensIn.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokensIn = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryJoinExactAmountInRequest>, I>>(
    object: I,
  ): QueryJoinExactAmountInRequest {
    const message = createBaseQueryJoinExactAmountInRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.tokensIn = object.tokensIn?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryJoinExactAmountInResponse(): QueryJoinExactAmountInResponse {
  return { poolSharesOut: "", remCoins: [] };
}

export const QueryJoinExactAmountInResponse = {
  encode(message: QueryJoinExactAmountInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolSharesOut !== "") {
      writer.uint32(10).string(message.poolSharesOut);
    }
    for (const v of message.remCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryJoinExactAmountInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryJoinExactAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolSharesOut = reader.string();
          break;
        case 2:
          message.remCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryJoinExactAmountInResponse {
    return {
      poolSharesOut: isSet(object.poolSharesOut) ? String(object.poolSharesOut) : "",
      remCoins: Array.isArray(object?.remCoins) ? object.remCoins.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryJoinExactAmountInResponse): unknown {
    const obj: any = {};
    message.poolSharesOut !== undefined && (obj.poolSharesOut = message.poolSharesOut);
    if (message.remCoins) {
      obj.remCoins = message.remCoins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.remCoins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryJoinExactAmountInResponse>, I>>(
    object: I,
  ): QueryJoinExactAmountInResponse {
    const message = createBaseQueryJoinExactAmountInResponse();
    message.poolSharesOut = object.poolSharesOut ?? "";
    message.remCoins = object.remCoins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryJoinExactAmountOutRequest(): QueryJoinExactAmountOutRequest {
  return { poolId: Long.UZERO };
}

export const QueryJoinExactAmountOutRequest = {
  encode(message: QueryJoinExactAmountOutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryJoinExactAmountOutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryJoinExactAmountOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryJoinExactAmountOutRequest {
    return { poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO };
  },

  toJSON(message: QueryJoinExactAmountOutRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryJoinExactAmountOutRequest>, I>>(
    object: I,
  ): QueryJoinExactAmountOutRequest {
    const message = createBaseQueryJoinExactAmountOutRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryJoinExactAmountOutResponse(): QueryJoinExactAmountOutResponse {
  return {};
}

export const QueryJoinExactAmountOutResponse = {
  encode(_: QueryJoinExactAmountOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryJoinExactAmountOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryJoinExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryJoinExactAmountOutResponse {
    return {};
  },

  toJSON(_: QueryJoinExactAmountOutResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryJoinExactAmountOutResponse>, I>>(_: I): QueryJoinExactAmountOutResponse {
    const message = createBaseQueryJoinExactAmountOutResponse();
    return message;
  },
};

function createBaseQueryExitExactAmountInRequest(): QueryExitExactAmountInRequest {
  return { poolId: Long.UZERO, poolSharesIn: "" };
}

export const QueryExitExactAmountInRequest = {
  encode(message: QueryExitExactAmountInRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.poolSharesIn !== "") {
      writer.uint32(18).string(message.poolSharesIn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExitExactAmountInRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExitExactAmountInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.poolSharesIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExitExactAmountInRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      poolSharesIn: isSet(object.poolSharesIn) ? String(object.poolSharesIn) : "",
    };
  },

  toJSON(message: QueryExitExactAmountInRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.poolSharesIn !== undefined && (obj.poolSharesIn = message.poolSharesIn);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryExitExactAmountInRequest>, I>>(
    object: I,
  ): QueryExitExactAmountInRequest {
    const message = createBaseQueryExitExactAmountInRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.poolSharesIn = object.poolSharesIn ?? "";
    return message;
  },
};

function createBaseQueryExitExactAmountInResponse(): QueryExitExactAmountInResponse {
  return { tokensOut: [] };
}

export const QueryExitExactAmountInResponse = {
  encode(message: QueryExitExactAmountInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokensOut) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExitExactAmountInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExitExactAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokensOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExitExactAmountInResponse {
    return { tokensOut: Array.isArray(object?.tokensOut) ? object.tokensOut.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: QueryExitExactAmountInResponse): unknown {
    const obj: any = {};
    if (message.tokensOut) {
      obj.tokensOut = message.tokensOut.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokensOut = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryExitExactAmountInResponse>, I>>(
    object: I,
  ): QueryExitExactAmountInResponse {
    const message = createBaseQueryExitExactAmountInResponse();
    message.tokensOut = object.tokensOut?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryExitExactAmountOutRequest(): QueryExitExactAmountOutRequest {
  return { poolId: Long.UZERO };
}

export const QueryExitExactAmountOutRequest = {
  encode(message: QueryExitExactAmountOutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExitExactAmountOutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExitExactAmountOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExitExactAmountOutRequest {
    return { poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO };
  },

  toJSON(message: QueryExitExactAmountOutRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryExitExactAmountOutRequest>, I>>(
    object: I,
  ): QueryExitExactAmountOutRequest {
    const message = createBaseQueryExitExactAmountOutRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryExitExactAmountOutResponse(): QueryExitExactAmountOutResponse {
  return {};
}

export const QueryExitExactAmountOutResponse = {
  encode(_: QueryExitExactAmountOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExitExactAmountOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExitExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryExitExactAmountOutResponse {
    return {};
  },

  toJSON(_: QueryExitExactAmountOutResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryExitExactAmountOutResponse>, I>>(_: I): QueryExitExactAmountOutResponse {
    const message = createBaseQueryExitExactAmountOutResponse();
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters of the spot module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Next available pool id number. */
  PoolNumber(request: QueryPoolNumberRequest): Promise<QueryPoolNumberResponse>;
  /** Fetch a pool by id. */
  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
  /** Returns all pools. */
  Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
  /** Parameters of a single pool. */
  PoolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse>;
  /** Number of pools. */
  NumPools(request: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse>;
  /** Total liquidity across all pools. */
  TotalLiquidity(request: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse>;
  /** Total liquidity in a single pool. */
  TotalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse>;
  /** Total shares in a single pool. */
  TotalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse>;
  /** Instantaneous price of an asset in a pool. */
  SpotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
  /**
   * Estimates the amount of assets returned given an exact amount of tokens to
   * swap.
   */
  EstimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponse>;
  /**
   * Estimates the amount of tokens required to return the exact amount of
   * assets requested.
   */
  EstimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponse>;
  /**
   * Estimates the amount of pool shares returned given an amount of tokens to
   * join.
   */
  EstimateJoinExactAmountIn(request: QueryJoinExactAmountInRequest): Promise<QueryJoinExactAmountInResponse>;
  /**
   * Estimates the amount of tokens required to obtain an exact amount of pool
   * shares.
   */
  EstimateJoinExactAmountOut(request: QueryJoinExactAmountOutRequest): Promise<QueryJoinExactAmountOutResponse>;
  /**
   * Estimates the amount of tokens returned to the user given an exact amount
   * of pool shares.
   */
  EstimateExitExactAmountIn(request: QueryExitExactAmountInRequest): Promise<QueryExitExactAmountInResponse>;
  /**
   * Estimates the amount of pool shares required to extract an exact amount of
   * tokens from the pool.
   */
  EstimateExitExactAmountOut(request: QueryExitExactAmountOutRequest): Promise<QueryExitExactAmountOutResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.PoolNumber = this.PoolNumber.bind(this);
    this.Pool = this.Pool.bind(this);
    this.Pools = this.Pools.bind(this);
    this.PoolParams = this.PoolParams.bind(this);
    this.NumPools = this.NumPools.bind(this);
    this.TotalLiquidity = this.TotalLiquidity.bind(this);
    this.TotalPoolLiquidity = this.TotalPoolLiquidity.bind(this);
    this.TotalShares = this.TotalShares.bind(this);
    this.SpotPrice = this.SpotPrice.bind(this);
    this.EstimateSwapExactAmountIn = this.EstimateSwapExactAmountIn.bind(this);
    this.EstimateSwapExactAmountOut = this.EstimateSwapExactAmountOut.bind(this);
    this.EstimateJoinExactAmountIn = this.EstimateJoinExactAmountIn.bind(this);
    this.EstimateJoinExactAmountOut = this.EstimateJoinExactAmountOut.bind(this);
    this.EstimateExitExactAmountIn = this.EstimateExitExactAmountIn.bind(this);
    this.EstimateExitExactAmountOut = this.EstimateExitExactAmountOut.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.spot.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  PoolNumber(request: QueryPoolNumberRequest): Promise<QueryPoolNumberResponse> {
    const data = QueryPoolNumberRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.spot.v1.Query", "PoolNumber", data);
    return promise.then((data) => QueryPoolNumberResponse.decode(new _m0.Reader(data)));
  }

  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.spot.v1.Query", "Pool", data);
    return promise.then((data) => QueryPoolResponse.decode(new _m0.Reader(data)));
  }

  Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse> {
    const data = QueryPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.spot.v1.Query", "Pools", data);
    return promise.then((data) => QueryPoolsResponse.decode(new _m0.Reader(data)));
  }

  PoolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse> {
    const data = QueryPoolParamsRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.spot.v1.Query", "PoolParams", data);
    return promise.then((data) => QueryPoolParamsResponse.decode(new _m0.Reader(data)));
  }

  NumPools(request: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse> {
    const data = QueryNumPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.spot.v1.Query", "NumPools", data);
    return promise.then((data) => QueryNumPoolsResponse.decode(new _m0.Reader(data)));
  }

  TotalLiquidity(request: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse> {
    const data = QueryTotalLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.spot.v1.Query", "TotalLiquidity", data);
    return promise.then((data) => QueryTotalLiquidityResponse.decode(new _m0.Reader(data)));
  }

  TotalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse> {
    const data = QueryTotalPoolLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.spot.v1.Query", "TotalPoolLiquidity", data);
    return promise.then((data) => QueryTotalPoolLiquidityResponse.decode(new _m0.Reader(data)));
  }

  TotalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse> {
    const data = QueryTotalSharesRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.spot.v1.Query", "TotalShares", data);
    return promise.then((data) => QueryTotalSharesResponse.decode(new _m0.Reader(data)));
  }

  SpotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse> {
    const data = QuerySpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.spot.v1.Query", "SpotPrice", data);
    return promise.then((data) => QuerySpotPriceResponse.decode(new _m0.Reader(data)));
  }

  EstimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponse> {
    const data = QuerySwapExactAmountInRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.spot.v1.Query", "EstimateSwapExactAmountIn", data);
    return promise.then((data) => QuerySwapExactAmountInResponse.decode(new _m0.Reader(data)));
  }

  EstimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponse> {
    const data = QuerySwapExactAmountOutRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.spot.v1.Query", "EstimateSwapExactAmountOut", data);
    return promise.then((data) => QuerySwapExactAmountOutResponse.decode(new _m0.Reader(data)));
  }

  EstimateJoinExactAmountIn(request: QueryJoinExactAmountInRequest): Promise<QueryJoinExactAmountInResponse> {
    const data = QueryJoinExactAmountInRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.spot.v1.Query", "EstimateJoinExactAmountIn", data);
    return promise.then((data) => QueryJoinExactAmountInResponse.decode(new _m0.Reader(data)));
  }

  EstimateJoinExactAmountOut(request: QueryJoinExactAmountOutRequest): Promise<QueryJoinExactAmountOutResponse> {
    const data = QueryJoinExactAmountOutRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.spot.v1.Query", "EstimateJoinExactAmountOut", data);
    return promise.then((data) => QueryJoinExactAmountOutResponse.decode(new _m0.Reader(data)));
  }

  EstimateExitExactAmountIn(request: QueryExitExactAmountInRequest): Promise<QueryExitExactAmountInResponse> {
    const data = QueryExitExactAmountInRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.spot.v1.Query", "EstimateExitExactAmountIn", data);
    return promise.then((data) => QueryExitExactAmountInResponse.decode(new _m0.Reader(data)));
  }

  EstimateExitExactAmountOut(request: QueryExitExactAmountOutRequest): Promise<QueryExitExactAmountOutResponse> {
    const data = QueryExitExactAmountOutRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.spot.v1.Query", "EstimateExitExactAmountOut", data);
    return promise.then((data) => QueryExitExactAmountOutResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
