/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { EpochInfo } from "./state";

export interface QueryEpochInfosRequest {
}

export interface QueryEpochInfosResponse {
  epochs: EpochInfo[];
}

export interface QueryCurrentEpochRequest {
  identifier: string;
}

export interface QueryCurrentEpochResponse {
  currentEpoch: Long;
}

function createBaseQueryEpochInfosRequest(): QueryEpochInfosRequest {
  return {};
}

export const QueryEpochInfosRequest = {
  encode(_: QueryEpochInfosRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochInfosRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochInfosRequest();
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

  fromJSON(_: any): QueryEpochInfosRequest {
    return {};
  },

  toJSON(_: QueryEpochInfosRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryEpochInfosRequest>, I>>(base?: I): QueryEpochInfosRequest {
    return QueryEpochInfosRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryEpochInfosRequest>, I>>(_: I): QueryEpochInfosRequest {
    const message = createBaseQueryEpochInfosRequest();
    return message;
  },
};

function createBaseQueryEpochInfosResponse(): QueryEpochInfosResponse {
  return { epochs: [] };
}

export const QueryEpochInfosResponse = {
  encode(message: QueryEpochInfosResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochInfosResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochInfosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryEpochInfosResponse {
    return { epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromJSON(e)) : [] };
  },

  toJSON(message: QueryEpochInfosResponse): unknown {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map((e) => e ? EpochInfo.toJSON(e) : undefined);
    } else {
      obj.epochs = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryEpochInfosResponse>, I>>(base?: I): QueryEpochInfosResponse {
    return QueryEpochInfosResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryEpochInfosResponse>, I>>(object: I): QueryEpochInfosResponse {
    const message = createBaseQueryEpochInfosResponse();
    message.epochs = object.epochs?.map((e) => EpochInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryCurrentEpochRequest(): QueryCurrentEpochRequest {
  return { identifier: "" };
}

export const QueryCurrentEpochRequest = {
  encode(message: QueryCurrentEpochRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifier = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCurrentEpochRequest {
    return { identifier: isSet(object.identifier) ? String(object.identifier) : "" };
  },

  toJSON(message: QueryCurrentEpochRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCurrentEpochRequest>, I>>(base?: I): QueryCurrentEpochRequest {
    return QueryCurrentEpochRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentEpochRequest>, I>>(object: I): QueryCurrentEpochRequest {
    const message = createBaseQueryCurrentEpochRequest();
    message.identifier = object.identifier ?? "";
    return message;
  },
};

function createBaseQueryCurrentEpochResponse(): QueryCurrentEpochResponse {
  return { currentEpoch: Long.UZERO };
}

export const QueryCurrentEpochResponse = {
  encode(message: QueryCurrentEpochResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.currentEpoch.isZero()) {
      writer.uint32(8).uint64(message.currentEpoch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.currentEpoch = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCurrentEpochResponse {
    return { currentEpoch: isSet(object.currentEpoch) ? Long.fromValue(object.currentEpoch) : Long.UZERO };
  },

  toJSON(message: QueryCurrentEpochResponse): unknown {
    const obj: any = {};
    message.currentEpoch !== undefined && (obj.currentEpoch = (message.currentEpoch || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCurrentEpochResponse>, I>>(base?: I): QueryCurrentEpochResponse {
    return QueryCurrentEpochResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentEpochResponse>, I>>(object: I): QueryCurrentEpochResponse {
    const message = createBaseQueryCurrentEpochResponse();
    message.currentEpoch = (object.currentEpoch !== undefined && object.currentEpoch !== null)
      ? Long.fromValue(object.currentEpoch)
      : Long.UZERO;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** EpochInfos provide running epochInfos */
  EpochInfos(request: QueryEpochInfosRequest): Promise<QueryEpochInfosResponse>;
  /** CurrentEpoch provide current epoch of specified identifier */
  CurrentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
}

export const QueryServiceName = "nibiru.epochs.v1.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.EpochInfos = this.EpochInfos.bind(this);
    this.CurrentEpoch = this.CurrentEpoch.bind(this);
  }
  EpochInfos(request: QueryEpochInfosRequest): Promise<QueryEpochInfosResponse> {
    const data = QueryEpochInfosRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EpochInfos", data);
    return promise.then((data) => QueryEpochInfosResponse.decode(_m0.Reader.create(data)));
  }

  CurrentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse> {
    const data = QueryCurrentEpochRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CurrentEpoch", data);
    return promise.then((data) => QueryCurrentEpochResponse.decode(_m0.Reader.create(data)));
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
