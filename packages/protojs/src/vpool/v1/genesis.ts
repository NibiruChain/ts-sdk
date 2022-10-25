/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ReserveSnapshot, VPool } from "./state";

export const protobufPackage = "nibiru.vpool.v1";

/** GenesisState defines the vpool module's genesis state. */
export interface GenesisState {
  vpools: VPool[];
  snapshots: ReserveSnapshot[];
}

function createBaseGenesisState(): GenesisState {
  return { vpools: [], snapshots: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.vpools) {
      VPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.snapshots) {
      ReserveSnapshot.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vpools.push(VPool.decode(reader, reader.uint32()));
          break;
        case 2:
          message.snapshots.push(ReserveSnapshot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      vpools: Array.isArray(object?.vpools) ? object.vpools.map((e: any) => VPool.fromJSON(e)) : [],
      snapshots: Array.isArray(object?.snapshots) ? object.snapshots.map((e: any) => ReserveSnapshot.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.vpools) {
      obj.vpools = message.vpools.map((e) => e ? VPool.toJSON(e) : undefined);
    } else {
      obj.vpools = [];
    }
    if (message.snapshots) {
      obj.snapshots = message.snapshots.map((e) => e ? ReserveSnapshot.toJSON(e) : undefined);
    } else {
      obj.snapshots = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.vpools = object.vpools?.map((e) => VPool.fromPartial(e)) || [];
    message.snapshots = object.snapshots?.map((e) => ReserveSnapshot.fromPartial(e)) || [];
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
