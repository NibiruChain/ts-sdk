/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CodeInfo, ContractCodeHistoryEntry, ContractInfo, Model, Params } from "./types";

/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
  params?: Params;
  codes: Code[];
  contracts: Contract[];
  sequences: Sequence[];
}

/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
  codeId: Long;
  codeInfo?: CodeInfo;
  codeBytes: Uint8Array;
  /** Pinned to wasmvm cache */
  pinned: boolean;
}

/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
  contractAddress: string;
  contractInfo?: ContractInfo;
  contractState: Model[];
  contractCodeHistory: ContractCodeHistoryEntry[];
}

/** Sequence key and value of an id generation counter */
export interface Sequence {
  idKey: Uint8Array;
  value: Long;
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, codes: [], contracts: [], sequences: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.codes) {
      Code.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sequences) {
      Sequence.encode(v!, writer.uint32(34).fork()).ldelim();
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

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.codes.push(Code.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contracts.push(Contract.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sequences.push(Sequence.decode(reader, reader.uint32()));
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      codes: Array.isArray(object?.codes) ? object.codes.map((e: any) => Code.fromJSON(e)) : [],
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => Contract.fromJSON(e)) : [],
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Sequence.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.codes) {
      obj.codes = message.codes.map((e) => e ? Code.toJSON(e) : undefined);
    } else {
      obj.codes = [];
    }
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => e ? Contract.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }
    if (message.sequences) {
      obj.sequences = message.sequences.map((e) => e ? Sequence.toJSON(e) : undefined);
    } else {
      obj.sequences = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.codes = object.codes?.map((e) => Code.fromPartial(e)) || [];
    message.contracts = object.contracts?.map((e) => Contract.fromPartial(e)) || [];
    message.sequences = object.sequences?.map((e) => Sequence.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCode(): Code {
  return { codeId: Long.UZERO, codeInfo: undefined, codeBytes: new Uint8Array(0), pinned: false };
}

export const Code = {
  encode(message: Code, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.codeInfo !== undefined) {
      CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.codeBytes.length !== 0) {
      writer.uint32(26).bytes(message.codeBytes);
    }
    if (message.pinned === true) {
      writer.uint32(32).bool(message.pinned);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Code {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.codeId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.codeInfo = CodeInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.codeBytes = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.pinned = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Code {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      codeInfo: isSet(object.codeInfo) ? CodeInfo.fromJSON(object.codeInfo) : undefined,
      codeBytes: isSet(object.codeBytes) ? bytesFromBase64(object.codeBytes) : new Uint8Array(0),
      pinned: isSet(object.pinned) ? Boolean(object.pinned) : false,
    };
  },

  toJSON(message: Code): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.codeInfo !== undefined && (obj.codeInfo = message.codeInfo ? CodeInfo.toJSON(message.codeInfo) : undefined);
    message.codeBytes !== undefined &&
      (obj.codeBytes = base64FromBytes(message.codeBytes !== undefined ? message.codeBytes : new Uint8Array(0)));
    message.pinned !== undefined && (obj.pinned = message.pinned);
    return obj;
  },

  create<I extends Exact<DeepPartial<Code>, I>>(base?: I): Code {
    return Code.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Code>, I>>(object: I): Code {
    const message = createBaseCode();
    message.codeId = (object.codeId !== undefined && object.codeId !== null)
      ? Long.fromValue(object.codeId)
      : Long.UZERO;
    message.codeInfo = (object.codeInfo !== undefined && object.codeInfo !== null)
      ? CodeInfo.fromPartial(object.codeInfo)
      : undefined;
    message.codeBytes = object.codeBytes ?? new Uint8Array(0);
    message.pinned = object.pinned ?? false;
    return message;
  },
};

function createBaseContract(): Contract {
  return { contractAddress: "", contractInfo: undefined, contractState: [], contractCodeHistory: [] };
}

export const Contract = {
  encode(message: Contract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contractState) {
      Model.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.contractCodeHistory) {
      ContractCodeHistoryEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contract {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contractAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contractState.push(Model.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.contractCodeHistory.push(ContractCodeHistoryEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Contract {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      contractInfo: isSet(object.contractInfo) ? ContractInfo.fromJSON(object.contractInfo) : undefined,
      contractState: Array.isArray(object?.contractState)
        ? object.contractState.map((e: any) => Model.fromJSON(e))
        : [],
      contractCodeHistory: Array.isArray(object?.contractCodeHistory)
        ? object.contractCodeHistory.map((e: any) => ContractCodeHistoryEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Contract): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.contractInfo !== undefined &&
      (obj.contractInfo = message.contractInfo ? ContractInfo.toJSON(message.contractInfo) : undefined);
    if (message.contractState) {
      obj.contractState = message.contractState.map((e) => e ? Model.toJSON(e) : undefined);
    } else {
      obj.contractState = [];
    }
    if (message.contractCodeHistory) {
      obj.contractCodeHistory = message.contractCodeHistory.map((e) =>
        e ? ContractCodeHistoryEntry.toJSON(e) : undefined
      );
    } else {
      obj.contractCodeHistory = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Contract>, I>>(base?: I): Contract {
    return Contract.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Contract>, I>>(object: I): Contract {
    const message = createBaseContract();
    message.contractAddress = object.contractAddress ?? "";
    message.contractInfo = (object.contractInfo !== undefined && object.contractInfo !== null)
      ? ContractInfo.fromPartial(object.contractInfo)
      : undefined;
    message.contractState = object.contractState?.map((e) => Model.fromPartial(e)) || [];
    message.contractCodeHistory = object.contractCodeHistory?.map((e) => ContractCodeHistoryEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSequence(): Sequence {
  return { idKey: new Uint8Array(0), value: Long.UZERO };
}

export const Sequence = {
  encode(message: Sequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idKey.length !== 0) {
      writer.uint32(10).bytes(message.idKey);
    }
    if (!message.value.isZero()) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sequence {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.idKey = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Sequence {
    return {
      idKey: isSet(object.idKey) ? bytesFromBase64(object.idKey) : new Uint8Array(0),
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO,
    };
  },

  toJSON(message: Sequence): unknown {
    const obj: any = {};
    message.idKey !== undefined &&
      (obj.idKey = base64FromBytes(message.idKey !== undefined ? message.idKey : new Uint8Array(0)));
    message.value !== undefined && (obj.value = (message.value || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<Sequence>, I>>(base?: I): Sequence {
    return Sequence.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Sequence>, I>>(object: I): Sequence {
    const message = createBaseSequence();
    message.idKey = object.idKey ?? new Uint8Array(0);
    message.value = (object.value !== undefined && object.value !== null) ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
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
