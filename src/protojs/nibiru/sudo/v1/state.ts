/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface Sudoers {
  /** Root: The "root" user. */
  root: string;
  /** Contracts: The set of contracts with elevated permissions. */
  contracts: string[];
}

/** GenesisState: State for migrations and genesis for the x/sudo module. */
export interface GenesisState {
  sudoers?: Sudoers;
}

function createBaseSudoers(): Sudoers {
  return { root: "", contracts: [] };
}

export const Sudoers = {
  encode(message: Sudoers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.root !== "") {
      writer.uint32(10).string(message.root);
    }
    for (const v of message.contracts) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sudoers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSudoers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.root = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contracts.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Sudoers {
    return {
      root: isSet(object.root) ? String(object.root) : "",
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Sudoers): unknown {
    const obj: any = {};
    message.root !== undefined && (obj.root = message.root);
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => e);
    } else {
      obj.contracts = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Sudoers>, I>>(base?: I): Sudoers {
    return Sudoers.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Sudoers>, I>>(object: I): Sudoers {
    const message = createBaseSudoers();
    message.root = object.root ?? "";
    message.contracts = object.contracts?.map((e) => e) || [];
    return message;
  },
};

function createBaseGenesisState(): GenesisState {
  return { sudoers: undefined };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sudoers !== undefined) {
      Sudoers.encode(message.sudoers, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sudoers = Sudoers.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return { sudoers: isSet(object.sudoers) ? Sudoers.fromJSON(object.sudoers) : undefined };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.sudoers !== undefined && (obj.sudoers = message.sudoers ? Sudoers.toJSON(message.sudoers) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.sudoers = (object.sudoers !== undefined && object.sudoers !== null)
      ? Sudoers.fromPartial(object.sudoers)
      : undefined;
    return message;
  },
};

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
