/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"
import { Sudoers } from "./state"

export const protobufPackage = "nibiru.sudo.v1"

export interface QuerySudoersRequest {}

/** QuerySudoersResponse indicates the successful execution of MsgEditSudeors. */
export interface QuerySudoersResponse {
  sudoers?: Sudoers
}

function createBaseQuerySudoersRequest(): QuerySudoersRequest {
  return {}
}

export const QuerySudoersRequest = {
  encode(
    _: QuerySudoersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySudoersRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQuerySudoersRequest()
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

  fromJSON(_: any): QuerySudoersRequest {
    return {}
  },

  toJSON(_: QuerySudoersRequest): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<QuerySudoersRequest>, I>>(
    base?: I
  ): QuerySudoersRequest {
    return QuerySudoersRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QuerySudoersRequest>, I>>(
    _: I
  ): QuerySudoersRequest {
    const message = createBaseQuerySudoersRequest()
    return message
  },
}

function createBaseQuerySudoersResponse(): QuerySudoersResponse {
  return { sudoers: undefined }
}

export const QuerySudoersResponse = {
  encode(
    message: QuerySudoersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sudoers !== undefined) {
      Sudoers.encode(message.sudoers, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySudoersResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQuerySudoersResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.sudoers = Sudoers.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): QuerySudoersResponse {
    return {
      sudoers: isSet(object.sudoers)
        ? Sudoers.fromJSON(object.sudoers)
        : undefined,
    }
  },

  toJSON(message: QuerySudoersResponse): unknown {
    const obj: any = {}
    message.sudoers !== undefined &&
      (obj.sudoers = message.sudoers
        ? Sudoers.toJSON(message.sudoers)
        : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<QuerySudoersResponse>, I>>(
    base?: I
  ): QuerySudoersResponse {
    return QuerySudoersResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<QuerySudoersResponse>, I>>(
    object: I
  ): QuerySudoersResponse {
    const message = createBaseQuerySudoersResponse()
    message.sudoers =
      object.sudoers !== undefined && object.sudoers !== null
        ? Sudoers.fromPartial(object.sudoers)
        : undefined
    return message
  },
}

/** Query defines the gRPC querier service. */
export interface Query {
  QuerySudoers(request: QuerySudoersRequest): Promise<QuerySudoersResponse>
}

export const QueryServiceName = "nibiru.sudo.v1.Query"
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  private readonly service: string
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName
    this.rpc = rpc
    this.QuerySudoers = this.QuerySudoers.bind(this)
  }
  QuerySudoers(request: QuerySudoersRequest): Promise<QuerySudoersResponse> {
    const data = QuerySudoersRequest.encode(request).finish()
    const promise = this.rpc.request(this.service, "QuerySudoers", data)
    return promise.then((data) =>
      QuerySudoersResponse.decode(_m0.Reader.create(data))
    )
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined

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
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never
    }

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
