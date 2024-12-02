/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Metadata } from "../../../cosmos/bank/v1beta1/bank";
import { ModuleParams } from "./state";

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** Module parameters stored in state */
  params?: ModuleParams;
}

/** QueryDenomsRequest: gRPC query for all denoms registered for a creator */
export interface QueryDenomsRequest {
  creator: string;
}

/** QueryDenomsResponse: All registered denoms for a creator */
export interface QueryDenomsResponse {
  denoms: string[];
}

/** QueryDenomInfoRequest: gRPC query for the denom admin and x/bank metadata */
export interface QueryDenomInfoRequest {
  denom: string;
}

/** QueryDenomInfoResponse: All registered denoms for a creator */
export interface QueryDenomInfoResponse {
  /** Admin of the token factory denom */
  admin: string;
  /**
   * Metadata: Official x/bank metadata for the denom. All token factory denoms
   * are standard, native assets.
   */
  metadata?: Metadata;
}

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

function createBaseQueryDenomsRequest(): QueryDenomsRequest {
  return { creator: "" };
}

export const QueryDenomsRequest = {
  encode(message: QueryDenomsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDenomsRequest {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: QueryDenomsRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDenomsRequest>, I>>(base?: I): QueryDenomsRequest {
    return QueryDenomsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomsRequest>, I>>(object: I): QueryDenomsRequest {
    const message = createBaseQueryDenomsRequest();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseQueryDenomsResponse(): QueryDenomsResponse {
  return { denoms: [] };
}

export const QueryDenomsResponse = {
  encode(message: QueryDenomsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denoms.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDenomsResponse {
    return { denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => String(e)) : [] };
  },

  toJSON(message: QueryDenomsResponse): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDenomsResponse>, I>>(base?: I): QueryDenomsResponse {
    return QueryDenomsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomsResponse>, I>>(object: I): QueryDenomsResponse {
    const message = createBaseQueryDenomsResponse();
    message.denoms = object.denoms?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryDenomInfoRequest(): QueryDenomInfoRequest {
  return { denom: "" };
}

export const QueryDenomInfoRequest = {
  encode(message: QueryDenomInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDenomInfoRequest {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryDenomInfoRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDenomInfoRequest>, I>>(base?: I): QueryDenomInfoRequest {
    return QueryDenomInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomInfoRequest>, I>>(object: I): QueryDenomInfoRequest {
    const message = createBaseQueryDenomInfoRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryDenomInfoResponse(): QueryDenomInfoResponse {
  return { admin: "", metadata: undefined };
}

export const QueryDenomInfoResponse = {
  encode(message: QueryDenomInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = Metadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDenomInfoResponse {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: QueryDenomInfoResponse): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDenomInfoResponse>, I>>(base?: I): QueryDenomInfoResponse {
    return QueryDenomInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomInfoResponse>, I>>(object: I): QueryDenomInfoResponse {
    const message = createBaseQueryDenomInfoResponse();
    message.admin = object.admin ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Metadata.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Params retrieves the module params */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Denoms retrieves all registered denoms for a given creator */
  Denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse>;
  /** DenomInfo retrieves the denom metadata and admin info */
  DenomInfo(request: QueryDenomInfoRequest): Promise<QueryDenomInfoResponse>;
}

export const QueryServiceName = "nibiru.tokenfactory.v1.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Denoms = this.Denoms.bind(this);
    this.DenomInfo = this.DenomInfo.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  Denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse> {
    const data = QueryDenomsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Denoms", data);
    return promise.then((data) => QueryDenomsResponse.decode(_m0.Reader.create(data)));
  }

  DenomInfo(request: QueryDenomInfoRequest): Promise<QueryDenomInfoResponse> {
    const data = QueryDenomInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DenomInfo", data);
    return promise.then((data) => QueryDenomInfoResponse.decode(_m0.Reader.create(data)));
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
