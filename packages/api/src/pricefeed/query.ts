/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";
import { Params } from "./params";

export const protobufPackage = "nibiru.pricefeed.v1";

/**
 * QueryParamsRequest defines the request type for querying x/pricefeed
 * parameters.
 */
export interface QueryParamsRequest {
}

/**
 * QueryParamsResponse defines the response type for querying x/pricefeed
 * parameters.
 */
export interface QueryParamsResponse {
  params?: Params;
}

/** QueryPriceRequest is the request type for the Query/PriceRequest RPC method. */
export interface QueryPriceRequest {
  pairId: string;
}

/** QueryPriceResponse is the response type for the Query/Prices RPC method. */
export interface QueryPriceResponse {
  price?: CurrentPriceResponse;
}

/** QueryPricesRequest is the request type for the Query/Prices RPC method. */
export interface QueryPricesRequest {
}

/** QueryPricesResponse is the response type for the Query/Prices RPC method. */
export interface QueryPricesResponse {
  prices: CurrentPriceResponse[];
}

/** QueryRawPricesRequest is the request type for the Query/RawPrices RPC method. */
export interface QueryRawPricesRequest {
  pairId: string;
}

/**
 * QueryRawPricesResponse is the response type for the Query/RawPrices RPC
 * method.
 */
export interface QueryRawPricesResponse {
  rawPrices: PostedPriceResponse[];
}

/** QueryOraclesRequest is the request type for the Query/Oracles RPC method. */
export interface QueryOraclesRequest {
  pairId: string;
}

/** QueryOraclesResponse is the response type for the Query/Oracles RPC method. */
export interface QueryOraclesResponse {
  /** List of oracle addresses */
  oracles: string[];
}

/** QueryMarketsRequest is the request type for the Query/Pairs RPC method. */
export interface QueryMarketsRequest {
}

/** QueryMarketsResponse is the response type for the Query/Pairs RPC method. */
export interface QueryMarketsResponse {
  markets: Market[];
}

/** PostedPriceResponse defines a price for 'PairID' posted by a specific oracle. */
export interface PostedPriceResponse {
  pairId: string;
  oracleAddress: string;
  price: string;
  expiry?: Date;
}

/**
 * CurrentPriceResponse defines a current price for a particular 'PairID' in the pricefeed
 * module.
 */
export interface CurrentPriceResponse {
  pairId: string;
  /** most current price of the trading pair */
  price: string;
  /** twap of the trading pair */
  twap: string;
}

/** Market defines an asset in the pricefeed. */
export interface Market {
  pairId: string;
  oracles: string[];
  active: boolean;
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

function createBaseQueryPriceRequest(): QueryPriceRequest {
  return { pairId: "" };
}

export const QueryPriceRequest = {
  encode(message: QueryPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPriceRequest {
    return { pairId: isSet(object.pairId) ? String(object.pairId) : "" };
  },

  toJSON(message: QueryPriceRequest): unknown {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPriceRequest>, I>>(object: I): QueryPriceRequest {
    const message = createBaseQueryPriceRequest();
    message.pairId = object.pairId ?? "";
    return message;
  },
};

function createBaseQueryPriceResponse(): QueryPriceResponse {
  return { price: undefined };
}

export const QueryPriceResponse = {
  encode(message: QueryPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== undefined) {
      CurrentPriceResponse.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = CurrentPriceResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPriceResponse {
    return { price: isSet(object.price) ? CurrentPriceResponse.fromJSON(object.price) : undefined };
  },

  toJSON(message: QueryPriceResponse): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price ? CurrentPriceResponse.toJSON(message.price) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPriceResponse>, I>>(object: I): QueryPriceResponse {
    const message = createBaseQueryPriceResponse();
    message.price = (object.price !== undefined && object.price !== null)
      ? CurrentPriceResponse.fromPartial(object.price)
      : undefined;
    return message;
  },
};

function createBaseQueryPricesRequest(): QueryPricesRequest {
  return {};
}

export const QueryPricesRequest = {
  encode(_: QueryPricesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPricesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPricesRequest();
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

  fromJSON(_: any): QueryPricesRequest {
    return {};
  },

  toJSON(_: QueryPricesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPricesRequest>, I>>(_: I): QueryPricesRequest {
    const message = createBaseQueryPricesRequest();
    return message;
  },
};

function createBaseQueryPricesResponse(): QueryPricesResponse {
  return { prices: [] };
}

export const QueryPricesResponse = {
  encode(message: QueryPricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.prices) {
      CurrentPriceResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPricesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices.push(CurrentPriceResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPricesResponse {
    return {
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => CurrentPriceResponse.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryPricesResponse): unknown {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map((e) => e ? CurrentPriceResponse.toJSON(e) : undefined);
    } else {
      obj.prices = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPricesResponse>, I>>(object: I): QueryPricesResponse {
    const message = createBaseQueryPricesResponse();
    message.prices = object.prices?.map((e) => CurrentPriceResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryRawPricesRequest(): QueryRawPricesRequest {
  return { pairId: "" };
}

export const QueryRawPricesRequest = {
  encode(message: QueryRawPricesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawPricesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawPricesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRawPricesRequest {
    return { pairId: isSet(object.pairId) ? String(object.pairId) : "" };
  },

  toJSON(message: QueryRawPricesRequest): unknown {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRawPricesRequest>, I>>(object: I): QueryRawPricesRequest {
    const message = createBaseQueryRawPricesRequest();
    message.pairId = object.pairId ?? "";
    return message;
  },
};

function createBaseQueryRawPricesResponse(): QueryRawPricesResponse {
  return { rawPrices: [] };
}

export const QueryRawPricesResponse = {
  encode(message: QueryRawPricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rawPrices) {
      PostedPriceResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawPricesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rawPrices.push(PostedPriceResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRawPricesResponse {
    return {
      rawPrices: Array.isArray(object?.rawPrices)
        ? object.rawPrices.map((e: any) => PostedPriceResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryRawPricesResponse): unknown {
    const obj: any = {};
    if (message.rawPrices) {
      obj.rawPrices = message.rawPrices.map((e) => e ? PostedPriceResponse.toJSON(e) : undefined);
    } else {
      obj.rawPrices = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRawPricesResponse>, I>>(object: I): QueryRawPricesResponse {
    const message = createBaseQueryRawPricesResponse();
    message.rawPrices = object.rawPrices?.map((e) => PostedPriceResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryOraclesRequest(): QueryOraclesRequest {
  return { pairId: "" };
}

export const QueryOraclesRequest = {
  encode(message: QueryOraclesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOraclesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOraclesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOraclesRequest {
    return { pairId: isSet(object.pairId) ? String(object.pairId) : "" };
  },

  toJSON(message: QueryOraclesRequest): unknown {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOraclesRequest>, I>>(object: I): QueryOraclesRequest {
    const message = createBaseQueryOraclesRequest();
    message.pairId = object.pairId ?? "";
    return message;
  },
};

function createBaseQueryOraclesResponse(): QueryOraclesResponse {
  return { oracles: [] };
}

export const QueryOraclesResponse = {
  encode(message: QueryOraclesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.oracles) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOraclesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOraclesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracles.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOraclesResponse {
    return { oracles: Array.isArray(object?.oracles) ? object.oracles.map((e: any) => String(e)) : [] };
  },

  toJSON(message: QueryOraclesResponse): unknown {
    const obj: any = {};
    if (message.oracles) {
      obj.oracles = message.oracles.map((e) => e);
    } else {
      obj.oracles = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOraclesResponse>, I>>(object: I): QueryOraclesResponse {
    const message = createBaseQueryOraclesResponse();
    message.oracles = object.oracles?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryMarketsRequest(): QueryMarketsRequest {
  return {};
}

export const QueryMarketsRequest = {
  encode(_: QueryMarketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketsRequest();
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

  fromJSON(_: any): QueryMarketsRequest {
    return {};
  },

  toJSON(_: QueryMarketsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMarketsRequest>, I>>(_: I): QueryMarketsRequest {
    const message = createBaseQueryMarketsRequest();
    return message;
  },
};

function createBaseQueryMarketsResponse(): QueryMarketsResponse {
  return { markets: [] };
}

export const QueryMarketsResponse = {
  encode(message: QueryMarketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.markets) {
      Market.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.markets.push(Market.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMarketsResponse {
    return { markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => Market.fromJSON(e)) : [] };
  },

  toJSON(message: QueryMarketsResponse): unknown {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map((e) => e ? Market.toJSON(e) : undefined);
    } else {
      obj.markets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMarketsResponse>, I>>(object: I): QueryMarketsResponse {
    const message = createBaseQueryMarketsResponse();
    message.markets = object.markets?.map((e) => Market.fromPartial(e)) || [];
    return message;
  },
};

function createBasePostedPriceResponse(): PostedPriceResponse {
  return { pairId: "", oracleAddress: "", price: "", expiry: undefined };
}

export const PostedPriceResponse = {
  encode(message: PostedPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.oracleAddress !== "") {
      writer.uint32(18).string(message.oracleAddress);
    }
    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }
    if (message.expiry !== undefined) {
      Timestamp.encode(toTimestamp(message.expiry), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostedPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostedPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        case 2:
          message.oracleAddress = reader.string();
          break;
        case 3:
          message.price = reader.string();
          break;
        case 4:
          message.expiry = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostedPriceResponse {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      oracleAddress: isSet(object.oracleAddress) ? String(object.oracleAddress) : "",
      price: isSet(object.price) ? String(object.price) : "",
      expiry: isSet(object.expiry) ? fromJsonTimestamp(object.expiry) : undefined,
    };
  },

  toJSON(message: PostedPriceResponse): unknown {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.oracleAddress !== undefined && (obj.oracleAddress = message.oracleAddress);
    message.price !== undefined && (obj.price = message.price);
    message.expiry !== undefined && (obj.expiry = message.expiry.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostedPriceResponse>, I>>(object: I): PostedPriceResponse {
    const message = createBasePostedPriceResponse();
    message.pairId = object.pairId ?? "";
    message.oracleAddress = object.oracleAddress ?? "";
    message.price = object.price ?? "";
    message.expiry = object.expiry ?? undefined;
    return message;
  },
};

function createBaseCurrentPriceResponse(): CurrentPriceResponse {
  return { pairId: "", price: "", twap: "" };
}

export const CurrentPriceResponse = {
  encode(message: CurrentPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    if (message.twap !== "") {
      writer.uint32(26).string(message.twap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        case 2:
          message.price = reader.string();
          break;
        case 3:
          message.twap = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CurrentPriceResponse {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      price: isSet(object.price) ? String(object.price) : "",
      twap: isSet(object.twap) ? String(object.twap) : "",
    };
  },

  toJSON(message: CurrentPriceResponse): unknown {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.price !== undefined && (obj.price = message.price);
    message.twap !== undefined && (obj.twap = message.twap);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CurrentPriceResponse>, I>>(object: I): CurrentPriceResponse {
    const message = createBaseCurrentPriceResponse();
    message.pairId = object.pairId ?? "";
    message.price = object.price ?? "";
    message.twap = object.twap ?? "";
    return message;
  },
};

function createBaseMarket(): Market {
  return { pairId: "", oracles: [], active: false };
}

export const Market = {
  encode(message: Market, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    for (const v of message.oracles) {
      writer.uint32(18).string(v!);
    }
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Market {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        case 2:
          message.oracles.push(reader.string());
          break;
        case 3:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Market {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      oracles: Array.isArray(object?.oracles) ? object.oracles.map((e: any) => String(e)) : [],
      active: isSet(object.active) ? Boolean(object.active) : false,
    };
  },

  toJSON(message: Market): unknown {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    if (message.oracles) {
      obj.oracles = message.oracles.map((e) => e);
    } else {
      obj.oracles = [];
    }
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Market>, I>>(object: I): Market {
    const message = createBaseMarket();
    message.pairId = object.pairId ?? "";
    message.oracles = object.oracles?.map((e) => e) || [];
    message.active = object.active ?? false;
    return message;
  },
};

/** Query defines the gRPC querier service for pricefeed module */
export interface Query {
  /** QueryParams queries all parameters of the pricefeed module. */
  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** QueryPrice queries price details for a pair */
  QueryPrice(request: QueryPriceRequest): Promise<QueryPriceResponse>;
  /** QueryPrices queries all prices */
  QueryPrices(request: QueryPricesRequest): Promise<QueryPricesResponse>;
  /** QueryRawPrices queries all raw prices for an asset pair */
  QueryRawPrices(request: QueryRawPricesRequest): Promise<QueryRawPricesResponse>;
  /** QueryOracles queries all oracles for an asset pair */
  QueryOracles(request: QueryOraclesRequest): Promise<QueryOraclesResponse>;
  /** QueryMarkets queries all markets */
  QueryMarkets(request: QueryMarketsRequest): Promise<QueryMarketsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.QueryParams = this.QueryParams.bind(this);
    this.QueryPrice = this.QueryPrice.bind(this);
    this.QueryPrices = this.QueryPrices.bind(this);
    this.QueryRawPrices = this.QueryRawPrices.bind(this);
    this.QueryOracles = this.QueryOracles.bind(this);
    this.QueryMarkets = this.QueryMarkets.bind(this);
  }
  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.pricefeed.v1.Query", "QueryParams", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  QueryPrice(request: QueryPriceRequest): Promise<QueryPriceResponse> {
    const data = QueryPriceRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.pricefeed.v1.Query", "QueryPrice", data);
    return promise.then((data) => QueryPriceResponse.decode(new _m0.Reader(data)));
  }

  QueryPrices(request: QueryPricesRequest): Promise<QueryPricesResponse> {
    const data = QueryPricesRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.pricefeed.v1.Query", "QueryPrices", data);
    return promise.then((data) => QueryPricesResponse.decode(new _m0.Reader(data)));
  }

  QueryRawPrices(request: QueryRawPricesRequest): Promise<QueryRawPricesResponse> {
    const data = QueryRawPricesRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.pricefeed.v1.Query", "QueryRawPrices", data);
    return promise.then((data) => QueryRawPricesResponse.decode(new _m0.Reader(data)));
  }

  QueryOracles(request: QueryOraclesRequest): Promise<QueryOraclesResponse> {
    const data = QueryOraclesRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.pricefeed.v1.Query", "QueryOracles", data);
    return promise.then((data) => QueryOraclesResponse.decode(new _m0.Reader(data)));
  }

  QueryMarkets(request: QueryMarketsRequest): Promise<QueryMarketsResponse> {
    const data = QueryMarketsRequest.encode(request).finish();
    const promise = this.rpc.request("nibiru.pricefeed.v1.Query", "QueryMarkets", data);
    return promise.then((data) => QueryMarketsResponse.decode(new _m0.Reader(data)));
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
