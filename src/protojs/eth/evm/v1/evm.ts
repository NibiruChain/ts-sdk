/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

/** Copyright (c) 2023-2024 Nibi, Inc. */

/**
 * FunToken is a fungible token mapping between a Bank Coin and a corresponding
 * ERC-20 smart contract. Bank Coins here refer to tokens like NIBI, IBC
 * coins (ICS-20), and token factory coins, which are each represented by the
 * "Coin" type in Golang.
 */
export interface FunToken {
  /** Hexadecimal address of the ERC20 token to which the `FunToken` maps */
  erc20Addr: string;
  /** bank_denom: Coin denomination in the Bank Module. */
  bankDenom: string;
  /**
   * True if the `FunToken` mapping was created from an existing Bank Coin and
   * the ERC-20 contract gets deployed by the module account. False if the
   * mapping was created from an externally owned ERC-20 contract.
   */
  isMadeFromCoin: boolean;
}

/** Params defines the EVM module parameters */
export interface Params {
  /** extra_eips defines the additional EIPs for the vm.Config */
  extraEips: Long[];
  /** evm_channels is the list of channel identifiers from EVM compatible chains */
  evmChannels: string[];
  /**
   * Fee deducted and burned when calling "CreateFunToken" in units of
   * "evm_denom".
   */
  createFuntokenFee: string;
}

/** State represents a single Storage key value pair item. */
export interface State {
  /** key is the stored key */
  key: string;
  /** value is the stored value for the given key */
  value: string;
}

/**
 * Log represents an protobuf compatible Ethereum Log that defines a contract
 * log event. These events are generated by the LOG opcode and stored/indexed by
 * the node.
 *
 * NOTE: address, topics and data are consensus fields. The rest of the fields
 * are derived, i.e. filled in by the nodes, but not secured by consensus.
 */
export interface Log {
  /** address of the contract that generated the event */
  address: string;
  /** topics is a list of topics provided by the contract. */
  topics: string[];
  /** data which is supplied by the contract, usually ABI-encoded */
  data: Uint8Array;
  /** block_number of the block in which the transaction was included */
  blockNumber: Long;
  /** tx_hash is the transaction hash */
  txHash: string;
  /** tx_index of the transaction in the block */
  txIndex: Long;
  /** block_hash of the block in which the transaction was included */
  blockHash: string;
  /** index of the log in the block */
  index: Long;
  /**
   * removed is true if this log was reverted due to a chain
   * reorganisation. You must pay attention to this field if you receive logs
   * through a filter query.
   */
  removed: boolean;
}

/** AccessTuple is the element type of an access list. */
export interface AccessTuple {
  /** address is a hex formatted ethereum address */
  address: string;
  /** storage_keys are hex formatted hashes of the storage keys */
  storageKeys: string[];
}

/**
 * TracerConfig stores additional tracer args. For geth it's only one attr:
 * onlyTopCall
 */
export interface TracerConfig {
  onlyTopCall: boolean;
}

/** TraceConfig holds extra parameters to trace functions. */
export interface TraceConfig {
  /** tracer is a custom javascript tracer */
  tracer: string;
  /**
   * timeout overrides the default timeout of 5 seconds for JavaScript-based
   * tracing calls
   */
  timeout: string;
  /** reexec defines the number of blocks the tracer is willing to go back */
  reexec: Long;
  /** disable_stack switches stack capture */
  disableStack: boolean;
  /** disable_storage switches storage capture */
  disableStorage: boolean;
  /** debug can be used to print output during capture end */
  debug: boolean;
  /** limit defines the maximum length of output, but zero means unlimited */
  limit: number;
  /** enable_memory switches memory capture */
  enableMemory: boolean;
  /** enable_return_data switches the capture of return data */
  enableReturnData: boolean;
  /** tracer_config configures the tracer options */
  tracerConfig?: TracerConfig;
}

function createBaseFunToken(): FunToken {
  return { erc20Addr: "", bankDenom: "", isMadeFromCoin: false };
}

export const FunToken = {
  encode(message: FunToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.erc20Addr !== "") {
      writer.uint32(10).string(message.erc20Addr);
    }
    if (message.bankDenom !== "") {
      writer.uint32(18).string(message.bankDenom);
    }
    if (message.isMadeFromCoin === true) {
      writer.uint32(24).bool(message.isMadeFromCoin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FunToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          // Converting raw bytes to string
          const bytes = reader.bytes()
          message.erc20Addr = "0x" + Buffer.from(bytes).toString("hex");
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bankDenom = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isMadeFromCoin = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FunToken {
    return {
      erc20Addr: isSet(object.erc20Addr) ? String(object.erc20Addr) : "",
      bankDenom: isSet(object.bankDenom) ? String(object.bankDenom) : "",
      isMadeFromCoin: isSet(object.isMadeFromCoin) ? Boolean(object.isMadeFromCoin) : false,
    };
  },

  toJSON(message: FunToken): unknown {
    const obj: any = {};
    message.erc20Addr !== undefined && (obj.erc20Addr = message.erc20Addr);
    message.bankDenom !== undefined && (obj.bankDenom = message.bankDenom);
    message.isMadeFromCoin !== undefined && (obj.isMadeFromCoin = message.isMadeFromCoin);
    return obj;
  },

  create<I extends Exact<DeepPartial<FunToken>, I>>(base?: I): FunToken {
    return FunToken.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FunToken>, I>>(object: I): FunToken {
    const message = createBaseFunToken();
    message.erc20Addr = object.erc20Addr ?? "";
    message.bankDenom = object.bankDenom ?? "";
    message.isMadeFromCoin = object.isMadeFromCoin ?? false;
    return message;
  },
};

function createBaseParams(): Params {
  return { extraEips: [], evmChannels: [], createFuntokenFee: "" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(34).fork();
    for (const v of message.extraEips) {
      writer.int64(v);
    }
    writer.ldelim();
    for (const v of message.evmChannels) {
      writer.uint32(66).string(v!);
    }
    if (message.createFuntokenFee !== "") {
      writer.uint32(74).string(message.createFuntokenFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag === 32) {
            message.extraEips.push(reader.int64() as Long);

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.extraEips.push(reader.int64() as Long);
            }

            continue;
          }

          break;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.evmChannels.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.createFuntokenFee = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      extraEips: Array.isArray(object?.extraEips) ? object.extraEips.map((e: any) => Long.fromValue(e)) : [],
      evmChannels: Array.isArray(object?.evmChannels) ? object.evmChannels.map((e: any) => String(e)) : [],
      createFuntokenFee: isSet(object.createFuntokenFee) ? String(object.createFuntokenFee) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.extraEips) {
      obj.extraEips = message.extraEips.map((e) => (e || Long.ZERO).toString());
    } else {
      obj.extraEips = [];
    }
    if (message.evmChannels) {
      obj.evmChannels = message.evmChannels.map((e) => e);
    } else {
      obj.evmChannels = [];
    }
    message.createFuntokenFee !== undefined && (obj.createFuntokenFee = message.createFuntokenFee);
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.extraEips = object.extraEips?.map((e) => Long.fromValue(e)) || [];
    message.evmChannels = object.evmChannels?.map((e) => e) || [];
    message.createFuntokenFee = object.createFuntokenFee ?? "";
    return message;
  },
};

function createBaseState(): State {
  return { key: "", value: "" };
}

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): State {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): State {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: State): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<State>, I>>(base?: I): State {
    return State.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State {
    const message = createBaseState();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseLog(): Log {
  return {
    address: "",
    topics: [],
    data: new Uint8Array(0),
    blockNumber: Long.UZERO,
    txHash: "",
    txIndex: Long.UZERO,
    blockHash: "",
    index: Long.UZERO,
    removed: false,
  };
}

export const Log = {
  encode(message: Log, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.topics) {
      writer.uint32(18).string(v!);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (!message.blockNumber.isZero()) {
      writer.uint32(32).uint64(message.blockNumber);
    }
    if (message.txHash !== "") {
      writer.uint32(42).string(message.txHash);
    }
    if (!message.txIndex.isZero()) {
      writer.uint32(48).uint64(message.txIndex);
    }
    if (message.blockHash !== "") {
      writer.uint32(58).string(message.blockHash);
    }
    if (!message.index.isZero()) {
      writer.uint32(64).uint64(message.index);
    }
    if (message.removed === true) {
      writer.uint32(72).bool(message.removed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Log {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.topics.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.blockNumber = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.txHash = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.txIndex = reader.uint64() as Long;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.blockHash = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.index = reader.uint64() as Long;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.removed = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Log {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      topics: Array.isArray(object?.topics) ? object.topics.map((e: any) => String(e)) : [],
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      blockNumber: isSet(object.blockNumber) ? Long.fromValue(object.blockNumber) : Long.UZERO,
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      txIndex: isSet(object.txIndex) ? Long.fromValue(object.txIndex) : Long.UZERO,
      blockHash: isSet(object.blockHash) ? String(object.blockHash) : "",
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
      removed: isSet(object.removed) ? Boolean(object.removed) : false,
    };
  },

  toJSON(message: Log): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.topics) {
      obj.topics = message.topics.map((e) => e);
    } else {
      obj.topics = [];
    }
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array(0)));
    message.blockNumber !== undefined && (obj.blockNumber = (message.blockNumber || Long.UZERO).toString());
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.txIndex !== undefined && (obj.txIndex = (message.txIndex || Long.UZERO).toString());
    message.blockHash !== undefined && (obj.blockHash = message.blockHash);
    message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());
    message.removed !== undefined && (obj.removed = message.removed);
    return obj;
  },

  create<I extends Exact<DeepPartial<Log>, I>>(base?: I): Log {
    return Log.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Log>, I>>(object: I): Log {
    const message = createBaseLog();
    message.address = object.address ?? "";
    message.topics = object.topics?.map((e) => e) || [];
    message.data = object.data ?? new Uint8Array(0);
    message.blockNumber = (object.blockNumber !== undefined && object.blockNumber !== null)
      ? Long.fromValue(object.blockNumber)
      : Long.UZERO;
    message.txHash = object.txHash ?? "";
    message.txIndex = (object.txIndex !== undefined && object.txIndex !== null)
      ? Long.fromValue(object.txIndex)
      : Long.UZERO;
    message.blockHash = object.blockHash ?? "";
    message.index = (object.index !== undefined && object.index !== null) ? Long.fromValue(object.index) : Long.UZERO;
    message.removed = object.removed ?? false;
    return message;
  },
};

function createBaseAccessTuple(): AccessTuple {
  return { address: "", storageKeys: [] };
}

export const AccessTuple = {
  encode(message: AccessTuple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.storageKeys) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessTuple {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessTuple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.storageKeys.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccessTuple {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      storageKeys: Array.isArray(object?.storageKeys) ? object.storageKeys.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: AccessTuple): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.storageKeys) {
      obj.storageKeys = message.storageKeys.map((e) => e);
    } else {
      obj.storageKeys = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccessTuple>, I>>(base?: I): AccessTuple {
    return AccessTuple.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AccessTuple>, I>>(object: I): AccessTuple {
    const message = createBaseAccessTuple();
    message.address = object.address ?? "";
    message.storageKeys = object.storageKeys?.map((e) => e) || [];
    return message;
  },
};

function createBaseTracerConfig(): TracerConfig {
  return { onlyTopCall: false };
}

export const TracerConfig = {
  encode(message: TracerConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.onlyTopCall === true) {
      writer.uint32(8).bool(message.onlyTopCall);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TracerConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTracerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.onlyTopCall = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TracerConfig {
    return { onlyTopCall: isSet(object.onlyTopCall) ? Boolean(object.onlyTopCall) : false };
  },

  toJSON(message: TracerConfig): unknown {
    const obj: any = {};
    message.onlyTopCall !== undefined && (obj.onlyTopCall = message.onlyTopCall);
    return obj;
  },

  create<I extends Exact<DeepPartial<TracerConfig>, I>>(base?: I): TracerConfig {
    return TracerConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TracerConfig>, I>>(object: I): TracerConfig {
    const message = createBaseTracerConfig();
    message.onlyTopCall = object.onlyTopCall ?? false;
    return message;
  },
};

function createBaseTraceConfig(): TraceConfig {
  return {
    tracer: "",
    timeout: "",
    reexec: Long.UZERO,
    disableStack: false,
    disableStorage: false,
    debug: false,
    limit: 0,
    enableMemory: false,
    enableReturnData: false,
    tracerConfig: undefined,
  };
}

export const TraceConfig = {
  encode(message: TraceConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tracer !== "") {
      writer.uint32(10).string(message.tracer);
    }
    if (message.timeout !== "") {
      writer.uint32(18).string(message.timeout);
    }
    if (!message.reexec.isZero()) {
      writer.uint32(24).uint64(message.reexec);
    }
    if (message.disableStack === true) {
      writer.uint32(40).bool(message.disableStack);
    }
    if (message.disableStorage === true) {
      writer.uint32(48).bool(message.disableStorage);
    }
    if (message.debug === true) {
      writer.uint32(64).bool(message.debug);
    }
    if (message.limit !== 0) {
      writer.uint32(72).int32(message.limit);
    }
    if (message.enableMemory === true) {
      writer.uint32(88).bool(message.enableMemory);
    }
    if (message.enableReturnData === true) {
      writer.uint32(96).bool(message.enableReturnData);
    }
    if (message.tracerConfig !== undefined) {
      TracerConfig.encode(message.tracerConfig, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TraceConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTraceConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tracer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.timeout = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.reexec = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.disableStack = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.disableStorage = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.debug = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.limit = reader.int32();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.enableMemory = reader.bool();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.enableReturnData = reader.bool();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.tracerConfig = TracerConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TraceConfig {
    return {
      tracer: isSet(object.tracer) ? String(object.tracer) : "",
      timeout: isSet(object.timeout) ? String(object.timeout) : "",
      reexec: isSet(object.reexec) ? Long.fromValue(object.reexec) : Long.UZERO,
      disableStack: isSet(object.disableStack) ? Boolean(object.disableStack) : false,
      disableStorage: isSet(object.disableStorage) ? Boolean(object.disableStorage) : false,
      debug: isSet(object.debug) ? Boolean(object.debug) : false,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      enableMemory: isSet(object.enableMemory) ? Boolean(object.enableMemory) : false,
      enableReturnData: isSet(object.enableReturnData) ? Boolean(object.enableReturnData) : false,
      tracerConfig: isSet(object.tracerConfig) ? TracerConfig.fromJSON(object.tracerConfig) : undefined,
    };
  },

  toJSON(message: TraceConfig): unknown {
    const obj: any = {};
    message.tracer !== undefined && (obj.tracer = message.tracer);
    message.timeout !== undefined && (obj.timeout = message.timeout);
    message.reexec !== undefined && (obj.reexec = (message.reexec || Long.UZERO).toString());
    message.disableStack !== undefined && (obj.disableStack = message.disableStack);
    message.disableStorage !== undefined && (obj.disableStorage = message.disableStorage);
    message.debug !== undefined && (obj.debug = message.debug);
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.enableMemory !== undefined && (obj.enableMemory = message.enableMemory);
    message.enableReturnData !== undefined && (obj.enableReturnData = message.enableReturnData);
    message.tracerConfig !== undefined &&
      (obj.tracerConfig = message.tracerConfig ? TracerConfig.toJSON(message.tracerConfig) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<TraceConfig>, I>>(base?: I): TraceConfig {
    return TraceConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TraceConfig>, I>>(object: I): TraceConfig {
    const message = createBaseTraceConfig();
    message.tracer = object.tracer ?? "";
    message.timeout = object.timeout ?? "";
    message.reexec = (object.reexec !== undefined && object.reexec !== null)
      ? Long.fromValue(object.reexec)
      : Long.UZERO;
    message.disableStack = object.disableStack ?? false;
    message.disableStorage = object.disableStorage ?? false;
    message.debug = object.debug ?? false;
    message.limit = object.limit ?? 0;
    message.enableMemory = object.enableMemory ?? false;
    message.enableReturnData = object.enableReturnData ?? false;
    message.tracerConfig = (object.tracerConfig !== undefined && object.tracerConfig !== null)
      ? TracerConfig.fromPartial(object.tracerConfig)
      : undefined;
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
