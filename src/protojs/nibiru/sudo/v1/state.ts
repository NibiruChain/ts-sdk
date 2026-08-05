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
  zeroGasActors?: ZeroGasActors;
  wasmBlockHooksContract: string;
}

/**
 * ZeroGasActors: Actors that can execute zero gas transactions against a set of
 * smart contracts.
 */
export interface ZeroGasActors {
  /**
   * Senders: Addresses that can sign for zero gas transactions from the
   * contract set.
   */
  senders: string[];
  /**
   * Contracts: contract addresses that can be invoked by "senders" with zero
   * gas costs.
   */
  contracts: string[];
  /**
   * AlwaysZeroGasContracts: contract addresses that can be invoked with zero
   * gas costs for any sender.
   */
  alwaysZeroGasContracts: string[];
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
  return { sudoers: undefined, zeroGasActors: undefined, wasmBlockHooksContract: "" };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sudoers !== undefined) {
      Sudoers.encode(message.sudoers, writer.uint32(10).fork()).ldelim();
    }
    if (message.zeroGasActors !== undefined) {
      ZeroGasActors.encode(message.zeroGasActors, writer.uint32(18).fork()).ldelim();
    }
    if (message.wasmBlockHooksContract !== "") {
      writer.uint32(26).string(message.wasmBlockHooksContract);
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
        case 2:
          if (tag !== 18) {
            break;
          }

          message.zeroGasActors = ZeroGasActors.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.wasmBlockHooksContract = reader.string();
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
    return {
      sudoers: isSet(object.sudoers) ? Sudoers.fromJSON(object.sudoers) : undefined,
      zeroGasActors: isSet(object.zeroGasActors) ? ZeroGasActors.fromJSON(object.zeroGasActors) : undefined,
      wasmBlockHooksContract: isSet(object.wasmBlockHooksContract) ? String(object.wasmBlockHooksContract) : "",
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.sudoers !== undefined && (obj.sudoers = message.sudoers ? Sudoers.toJSON(message.sudoers) : undefined);
    message.zeroGasActors !== undefined &&
      (obj.zeroGasActors = message.zeroGasActors ? ZeroGasActors.toJSON(message.zeroGasActors) : undefined);
    message.wasmBlockHooksContract !== undefined && (obj.wasmBlockHooksContract = message.wasmBlockHooksContract);
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
    message.zeroGasActors = (object.zeroGasActors !== undefined && object.zeroGasActors !== null)
      ? ZeroGasActors.fromPartial(object.zeroGasActors)
      : undefined;
    message.wasmBlockHooksContract = object.wasmBlockHooksContract ?? "";
    return message;
  },
};

function createBaseZeroGasActors(): ZeroGasActors {
  return { senders: [], contracts: [], alwaysZeroGasContracts: [] };
}

export const ZeroGasActors = {
  encode(message: ZeroGasActors, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.senders) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.contracts) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.alwaysZeroGasContracts) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ZeroGasActors {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZeroGasActors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.senders.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contracts.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.alwaysZeroGasContracts.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ZeroGasActors {
    return {
      senders: Array.isArray(object?.senders) ? object.senders.map((e: any) => String(e)) : [],
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => String(e)) : [],
      alwaysZeroGasContracts: Array.isArray(object?.alwaysZeroGasContracts)
        ? object.alwaysZeroGasContracts.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: ZeroGasActors): unknown {
    const obj: any = {};
    if (message.senders) {
      obj.senders = message.senders.map((e) => e);
    } else {
      obj.senders = [];
    }
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => e);
    } else {
      obj.contracts = [];
    }
    if (message.alwaysZeroGasContracts) {
      obj.alwaysZeroGasContracts = message.alwaysZeroGasContracts.map((e) => e);
    } else {
      obj.alwaysZeroGasContracts = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ZeroGasActors>, I>>(base?: I): ZeroGasActors {
    return ZeroGasActors.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ZeroGasActors>, I>>(object: I): ZeroGasActors {
    const message = createBaseZeroGasActors();
    message.senders = object.senders?.map((e) => e) || [];
    message.contracts = object.contracts?.map((e) => e) || [];
    message.alwaysZeroGasContracts = object.alwaysZeroGasContracts?.map((e) => e) || [];
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
