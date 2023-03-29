/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Direction, directionFromJSON, directionToJSON, PoolPrices, Vpool } from "./state";

export const protobufPackage = "nibiru.vpool.v1";

export interface QueryReserveAssetsRequest {
  /** always BASE:QUOTE, e.g. BTC:NUSD or ETH:NUSD */
  pair: string;
}

export interface QueryReserveAssetsResponse {
  /** base asset is the crypto asset, e.g. BTC or ETH */
  baseAssetReserve: string;
  /** quote asset is usually stablecoin, in our case NUSD */
  quoteAssetReserve: string;
}

export interface QueryAllPoolsRequest {
}

export interface QueryAllPoolsResponse {
  pools: Vpool[];
  prices: PoolPrices[];
}

export interface QueryBaseAssetPriceRequest {
  pair: string;
  direction: Direction;
  /** base asset is the crypto asset, e.g. BTC or ETH */
  baseAssetAmount: string;
}

export interface QueryBaseAssetPriceResponse {
  priceInQuoteDenom: string;
}

function createBaseQueryReserveAssetsRequest(): QueryReserveAssetsRequest {
  return { pair: "" };
}

export const QueryReserveAssetsRequest = {
  encode(message: QueryReserveAssetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReserveAssetsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReserveAssetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pair = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryReserveAssetsRequest {
    return { pair: isSet(object.pair) ? String(object.pair) : "" };
  },

  toJSON(message: QueryReserveAssetsRequest): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryReserveAssetsRequest>, I>>(base?: I): QueryReserveAssetsRequest {
    return QueryReserveAssetsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryReserveAssetsRequest>, I>>(object: I): QueryReserveAssetsRequest {
    const message = createBaseQueryReserveAssetsRequest();
    message.pair = object.pair ?? "";
    return message;
  },
};

function createBaseQueryReserveAssetsResponse(): QueryReserveAssetsResponse {
  return { baseAssetReserve: "", quoteAssetReserve: "" };
}

export const QueryReserveAssetsResponse = {
  encode(message: QueryReserveAssetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseAssetReserve !== "") {
      writer.uint32(10).string(message.baseAssetReserve);
    }
    if (message.quoteAssetReserve !== "") {
      writer.uint32(18).string(message.quoteAssetReserve);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReserveAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReserveAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.baseAssetReserve = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.quoteAssetReserve = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryReserveAssetsResponse {
    return {
      baseAssetReserve: isSet(object.baseAssetReserve) ? String(object.baseAssetReserve) : "",
      quoteAssetReserve: isSet(object.quoteAssetReserve) ? String(object.quoteAssetReserve) : "",
    };
  },

  toJSON(message: QueryReserveAssetsResponse): unknown {
    const obj: any = {};
    message.baseAssetReserve !== undefined && (obj.baseAssetReserve = message.baseAssetReserve);
    message.quoteAssetReserve !== undefined && (obj.quoteAssetReserve = message.quoteAssetReserve);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryReserveAssetsResponse>, I>>(base?: I): QueryReserveAssetsResponse {
    return QueryReserveAssetsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryReserveAssetsResponse>, I>>(object: I): QueryReserveAssetsResponse {
    const message = createBaseQueryReserveAssetsResponse();
    message.baseAssetReserve = object.baseAssetReserve ?? "";
    message.quoteAssetReserve = object.quoteAssetReserve ?? "";
    return message;
  },
};

function createBaseQueryAllPoolsRequest(): QueryAllPoolsRequest {
  return {};
}

export const QueryAllPoolsRequest = {
  encode(_: QueryAllPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryAllPoolsRequest {
    return {};
  },

  toJSON(_: QueryAllPoolsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPoolsRequest>, I>>(base?: I): QueryAllPoolsRequest {
    return QueryAllPoolsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolsRequest>, I>>(_: I): QueryAllPoolsRequest {
    const message = createBaseQueryAllPoolsRequest();
    return message;
  },
};

function createBaseQueryAllPoolsResponse(): QueryAllPoolsResponse {
  return { pools: [], prices: [] };
}

export const QueryAllPoolsResponse = {
  encode(message: QueryAllPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      Vpool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.prices) {
      PoolPrices.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pools.push(Vpool.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.prices.push(PoolPrices.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Vpool.fromJSON(e)) : [],
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => PoolPrices.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryAllPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => e ? Vpool.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    if (message.prices) {
      obj.prices = message.prices.map((e) => e ? PoolPrices.toJSON(e) : undefined);
    } else {
      obj.prices = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPoolsResponse>, I>>(base?: I): QueryAllPoolsResponse {
    return QueryAllPoolsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPoolsResponse>, I>>(object: I): QueryAllPoolsResponse {
    const message = createBaseQueryAllPoolsResponse();
    message.pools = object.pools?.map((e) => Vpool.fromPartial(e)) || [];
    message.prices = object.prices?.map((e) => PoolPrices.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryBaseAssetPriceRequest(): QueryBaseAssetPriceRequest {
  return { pair: "", direction: 0, baseAssetAmount: "" };
}

export const QueryBaseAssetPriceRequest = {
  encode(message: QueryBaseAssetPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.direction !== 0) {
      writer.uint32(16).int32(message.direction);
    }
    if (message.baseAssetAmount !== "") {
      writer.uint32(26).string(message.baseAssetAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseAssetPriceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseAssetPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pair = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.direction = reader.int32() as any;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.baseAssetAmount = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBaseAssetPriceRequest {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      direction: isSet(object.direction) ? directionFromJSON(object.direction) : 0,
      baseAssetAmount: isSet(object.baseAssetAmount) ? String(object.baseAssetAmount) : "",
    };
  },

  toJSON(message: QueryBaseAssetPriceRequest): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair);
    message.direction !== undefined && (obj.direction = directionToJSON(message.direction));
    message.baseAssetAmount !== undefined && (obj.baseAssetAmount = message.baseAssetAmount);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBaseAssetPriceRequest>, I>>(base?: I): QueryBaseAssetPriceRequest {
    return QueryBaseAssetPriceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryBaseAssetPriceRequest>, I>>(object: I): QueryBaseAssetPriceRequest {
    const message = createBaseQueryBaseAssetPriceRequest();
    message.pair = object.pair ?? "";
    message.direction = object.direction ?? 0;
    message.baseAssetAmount = object.baseAssetAmount ?? "";
    return message;
  },
};

function createBaseQueryBaseAssetPriceResponse(): QueryBaseAssetPriceResponse {
  return { priceInQuoteDenom: "" };
}

export const QueryBaseAssetPriceResponse = {
  encode(message: QueryBaseAssetPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.priceInQuoteDenom !== "") {
      writer.uint32(10).string(message.priceInQuoteDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseAssetPriceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseAssetPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.priceInQuoteDenom = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBaseAssetPriceResponse {
    return { priceInQuoteDenom: isSet(object.priceInQuoteDenom) ? String(object.priceInQuoteDenom) : "" };
  },

  toJSON(message: QueryBaseAssetPriceResponse): unknown {
    const obj: any = {};
    message.priceInQuoteDenom !== undefined && (obj.priceInQuoteDenom = message.priceInQuoteDenom);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBaseAssetPriceResponse>, I>>(base?: I): QueryBaseAssetPriceResponse {
    return QueryBaseAssetPriceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryBaseAssetPriceResponse>, I>>(object: I): QueryBaseAssetPriceResponse {
    const message = createBaseQueryBaseAssetPriceResponse();
    message.priceInQuoteDenom = object.priceInQuoteDenom ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries the reserve assets in a given pool, identified by a token pair. */
  ReserveAssets(request: QueryReserveAssetsRequest): Promise<QueryReserveAssetsResponse>;
  /** Queries all virtual pools. */
  AllPools(request: QueryAllPoolsRequest): Promise<QueryAllPoolsResponse>;
  /** Queries prices */
  BaseAssetPrice(request: QueryBaseAssetPriceRequest): Promise<QueryBaseAssetPriceResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "nibiru.vpool.v1.Query";
    this.rpc = rpc;
    this.ReserveAssets = this.ReserveAssets.bind(this);
    this.AllPools = this.AllPools.bind(this);
    this.BaseAssetPrice = this.BaseAssetPrice.bind(this);
  }
  ReserveAssets(request: QueryReserveAssetsRequest): Promise<QueryReserveAssetsResponse> {
    const data = QueryReserveAssetsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReserveAssets", data);
    return promise.then((data) => QueryReserveAssetsResponse.decode(_m0.Reader.create(data)));
  }

  AllPools(request: QueryAllPoolsRequest): Promise<QueryAllPoolsResponse> {
    const data = QueryAllPoolsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllPools", data);
    return promise.then((data) => QueryAllPoolsResponse.decode(_m0.Reader.create(data)));
  }

  BaseAssetPrice(request: QueryBaseAssetPriceRequest): Promise<QueryBaseAssetPriceResponse> {
    const data = QueryBaseAssetPriceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BaseAssetPrice", data);
    return promise.then((data) => QueryBaseAssetPriceResponse.decode(_m0.Reader.create(data)));
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
