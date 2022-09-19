/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "nibiru.pricefeed.v1";

export interface AddOracleProposal {
  title: string;
  description: string;
  oracles: string[];
  pairs: string[];
}

function createBaseAddOracleProposal(): AddOracleProposal {
  return { title: "", description: "", oracles: [], pairs: [] };
}

export const AddOracleProposal = {
  encode(message: AddOracleProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.oracles) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.pairs) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddOracleProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddOracleProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.oracles.push(reader.string());
          break;
        case 4:
          message.pairs.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddOracleProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      oracles: Array.isArray(object?.oracles) ? object.oracles.map((e: any) => String(e)) : [],
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: AddOracleProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.oracles) {
      obj.oracles = message.oracles.map((e) => e);
    } else {
      obj.oracles = [];
    }
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) => e);
    } else {
      obj.pairs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddOracleProposal>, I>>(object: I): AddOracleProposal {
    const message = createBaseAddOracleProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.oracles = object.oracles?.map((e) => e) || [];
    message.pairs = object.pairs?.map((e) => e) || [];
    return message;
  },
};

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
