/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { FeeShare } from "./devgas";
import { ModuleParams } from "./genesis";

/** QueryFeeSharesRequest is the request type for the Query/FeeShares RPC method. */
export interface QueryFeeSharesRequest {
  /**
   * TODO feat(devgas): re-implement the paginated version
   * TODO feat(colletions): add automatic pagination generation
   */
  deployer: string;
}

/**
 * QueryFeeSharesResponse is the response type for the Query/FeeShares RPC
 * method.
 */
export interface QueryFeeSharesResponse {
  /** FeeShare is the slice of all stored Reveneue for the deployer */
  feeshare: FeeShare[];
}

/** QueryFeeShareRequest is the request type for the Query/FeeShare RPC method. */
export interface QueryFeeShareRequest {
  /** contract_address of a registered contract in bech32 format */
  contractAddress: string;
}

/** QueryFeeShareResponse is the response type for the Query/FeeShare RPC method. */
export interface QueryFeeShareResponse {
  /** FeeShare is a stored Reveneue for the queried contract */
  feeshare?: FeeShare;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params is the returned FeeShare parameter */
  params?: ModuleParams;
}

/**
 * QueryFeeSharesByWithdrawerRequest is the request type for the
 * Query/FeeSharesByWithdrawer RPC method.
 */
export interface QueryFeeSharesByWithdrawerRequest {
  /** withdrawer_address in bech32 format */
  withdrawerAddress: string;
}

/**
 * QueryFeeSharesByWithdrawerResponse is the response type for the
 * Query/FeeSharesByWithdrawer RPC method.
 */
export interface QueryFeeSharesByWithdrawerResponse {
  feeshare: FeeShare[];
}

function createBaseQueryFeeSharesRequest(): QueryFeeSharesRequest {
  return { deployer: "" };
}

export const QueryFeeSharesRequest = {
  encode(message: QueryFeeSharesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deployer !== "") {
      writer.uint32(10).string(message.deployer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeSharesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deployer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFeeSharesRequest {
    return { deployer: isSet(object.deployer) ? String(object.deployer) : "" };
  },

  toJSON(message: QueryFeeSharesRequest): unknown {
    const obj: any = {};
    message.deployer !== undefined && (obj.deployer = message.deployer);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFeeSharesRequest>, I>>(base?: I): QueryFeeSharesRequest {
    return QueryFeeSharesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeeSharesRequest>, I>>(object: I): QueryFeeSharesRequest {
    const message = createBaseQueryFeeSharesRequest();
    message.deployer = object.deployer ?? "";
    return message;
  },
};

function createBaseQueryFeeSharesResponse(): QueryFeeSharesResponse {
  return { feeshare: [] };
}

export const QueryFeeSharesResponse = {
  encode(message: QueryFeeSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeshare) {
      FeeShare.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.feeshare.push(FeeShare.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFeeSharesResponse {
    return { feeshare: Array.isArray(object?.feeshare) ? object.feeshare.map((e: any) => FeeShare.fromJSON(e)) : [] };
  },

  toJSON(message: QueryFeeSharesResponse): unknown {
    const obj: any = {};
    if (message.feeshare) {
      obj.feeshare = message.feeshare.map((e) => e ? FeeShare.toJSON(e) : undefined);
    } else {
      obj.feeshare = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFeeSharesResponse>, I>>(base?: I): QueryFeeSharesResponse {
    return QueryFeeSharesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeeSharesResponse>, I>>(object: I): QueryFeeSharesResponse {
    const message = createBaseQueryFeeSharesResponse();
    message.feeshare = object.feeshare?.map((e) => FeeShare.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryFeeShareRequest(): QueryFeeShareRequest {
  return { contractAddress: "" };
}

export const QueryFeeShareRequest = {
  encode(message: QueryFeeShareRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeShareRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeShareRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contractAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFeeShareRequest {
    return { contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "" };
  },

  toJSON(message: QueryFeeShareRequest): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFeeShareRequest>, I>>(base?: I): QueryFeeShareRequest {
    return QueryFeeShareRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeeShareRequest>, I>>(object: I): QueryFeeShareRequest {
    const message = createBaseQueryFeeShareRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};

function createBaseQueryFeeShareResponse(): QueryFeeShareResponse {
  return { feeshare: undefined };
}

export const QueryFeeShareResponse = {
  encode(message: QueryFeeShareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeshare !== undefined) {
      FeeShare.encode(message.feeshare, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeShareResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeShareResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.feeshare = FeeShare.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFeeShareResponse {
    return { feeshare: isSet(object.feeshare) ? FeeShare.fromJSON(object.feeshare) : undefined };
  },

  toJSON(message: QueryFeeShareResponse): unknown {
    const obj: any = {};
    message.feeshare !== undefined && (obj.feeshare = message.feeshare ? FeeShare.toJSON(message.feeshare) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFeeShareResponse>, I>>(base?: I): QueryFeeShareResponse {
    return QueryFeeShareResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeeShareResponse>, I>>(object: I): QueryFeeShareResponse {
    const message = createBaseQueryFeeShareResponse();
    message.feeshare = (object.feeshare !== undefined && object.feeshare !== null)
      ? FeeShare.fromPartial(object.feeshare)
      : undefined;
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {});
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
      ModuleParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = ModuleParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? ModuleParams.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? ModuleParams.toJSON(message.params) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? ModuleParams.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryFeeSharesByWithdrawerRequest(): QueryFeeSharesByWithdrawerRequest {
  return { withdrawerAddress: "" };
}

export const QueryFeeSharesByWithdrawerRequest = {
  encode(message: QueryFeeSharesByWithdrawerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawerAddress !== "") {
      writer.uint32(10).string(message.withdrawerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeSharesByWithdrawerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeSharesByWithdrawerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.withdrawerAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFeeSharesByWithdrawerRequest {
    return { withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : "" };
  },

  toJSON(message: QueryFeeSharesByWithdrawerRequest): unknown {
    const obj: any = {};
    message.withdrawerAddress !== undefined && (obj.withdrawerAddress = message.withdrawerAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFeeSharesByWithdrawerRequest>, I>>(
    base?: I,
  ): QueryFeeSharesByWithdrawerRequest {
    return QueryFeeSharesByWithdrawerRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeeSharesByWithdrawerRequest>, I>>(
    object: I,
  ): QueryFeeSharesByWithdrawerRequest {
    const message = createBaseQueryFeeSharesByWithdrawerRequest();
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    return message;
  },
};

function createBaseQueryFeeSharesByWithdrawerResponse(): QueryFeeSharesByWithdrawerResponse {
  return { feeshare: [] };
}

export const QueryFeeSharesByWithdrawerResponse = {
  encode(message: QueryFeeSharesByWithdrawerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeshare) {
      FeeShare.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeSharesByWithdrawerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeSharesByWithdrawerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.feeshare.push(FeeShare.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFeeSharesByWithdrawerResponse {
    return { feeshare: Array.isArray(object?.feeshare) ? object.feeshare.map((e: any) => FeeShare.fromJSON(e)) : [] };
  },

  toJSON(message: QueryFeeSharesByWithdrawerResponse): unknown {
    const obj: any = {};
    if (message.feeshare) {
      obj.feeshare = message.feeshare.map((e) => e ? FeeShare.toJSON(e) : undefined);
    } else {
      obj.feeshare = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFeeSharesByWithdrawerResponse>, I>>(
    base?: I,
  ): QueryFeeSharesByWithdrawerResponse {
    return QueryFeeSharesByWithdrawerResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeeSharesByWithdrawerResponse>, I>>(
    object: I,
  ): QueryFeeSharesByWithdrawerResponse {
    const message = createBaseQueryFeeSharesByWithdrawerResponse();
    message.feeshare = object.feeshare?.map((e) => FeeShare.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * FeeShares retrieves all FeeShares that a deployer has
   * registered
   */
  FeeShares(request: QueryFeeSharesRequest): Promise<QueryFeeSharesResponse>;
  /** FeeShare retrieves a registered FeeShare for a given contract address */
  FeeShare(request: QueryFeeShareRequest): Promise<QueryFeeShareResponse>;
  /** Params retrieves the module params */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * FeeSharesByWithdrawer retrieves all FeeShares with a given withdrawer
   * address
   */
  FeeSharesByWithdrawer(request: QueryFeeSharesByWithdrawerRequest): Promise<QueryFeeSharesByWithdrawerResponse>;
}

export const QueryServiceName = "nibiru.devgas.v1.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.FeeShares = this.FeeShares.bind(this);
    this.FeeShare = this.FeeShare.bind(this);
    this.Params = this.Params.bind(this);
    this.FeeSharesByWithdrawer = this.FeeSharesByWithdrawer.bind(this);
  }
  FeeShares(request: QueryFeeSharesRequest): Promise<QueryFeeSharesResponse> {
    const data = QueryFeeSharesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FeeShares", data);
    return promise.then((data) => QueryFeeSharesResponse.decode(_m0.Reader.create(data)));
  }

  FeeShare(request: QueryFeeShareRequest): Promise<QueryFeeShareResponse> {
    const data = QueryFeeShareRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FeeShare", data);
    return promise.then((data) => QueryFeeShareResponse.decode(_m0.Reader.create(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  FeeSharesByWithdrawer(request: QueryFeeSharesByWithdrawerRequest): Promise<QueryFeeSharesByWithdrawerResponse> {
    const data = QueryFeeSharesByWithdrawerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FeeSharesByWithdrawer", data);
    return promise.then((data) => QueryFeeSharesByWithdrawerResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
