/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Log } from "./evm";

/** Copyright (c) 2023-2024 Nibi, Inc. */

/** EventEthereumTx defines the event for an Ethereum transaction */
export interface EventEthereumTx {
  /** amount */
  amount: string;
  /** eth_hash is the Ethereum hash of the transaction */
  ethHash: string;
  /** index of the transaction in the block */
  index: string;
  /** gas_used is the amount of gas used by the transaction */
  gasUsed: string;
  /** hash is the Tendermint hash of the transaction */
  hash: string;
  /** recipient of the transaction */
  recipient: string;
  /** vm_error contains a VM error should it occur */
  vmError: string;
}

/** EventTxLog defines the event for an Ethereum transaction log */
export interface EventTxLog {
  /** tx_logs is an array of transaction logs */
  logs: Log[];
}

/**
 * EventBlockBloom contains the bloom filter for an Ethereum block.
 * The bloom filter encodes logs for efficient event filtering.
 */
export interface EventBlockBloom {
  /** bloom is the bloom filter of the block */
  bloom: string;
}

/** EventFunTokenCreated defines a fun token creation event. */
export interface EventFunTokenCreated {
  bankDenom: string;
  erc20ContractAddress: string;
  creator: string;
  isMadeFromCoin: boolean;
}

/**
 * EventConvertCoinToEvm is an event emitted when converting Bank Coins into
 * ERC20 tokens with the "eth.evm.v1.MsgConvertCoinToEvm" transaction message.
 */
export interface EventConvertCoinToEvm {
  sender: string;
  erc20ContractAddress: string;
  toEthAddr: string;
  bankCoin?: Coin;
}

/** EventTransfer defines event for EVM transfer */
export interface EventTransfer {
  sender: string;
  recipient: string;
  amount: string;
}

/** EventContractDeployed defines event for EVM contract deployment */
export interface EventContractDeployed {
  sender: string;
  contractAddr: string;
}

/** EventContractExecuted defines event for EVM contract execution */
export interface EventContractExecuted {
  sender: string;
  contractAddr: string;
}

/**
 * EventConvertEvmToCoin is an event emitted when converting ERC20 tokens to Bank
 * Coins with the "eth.evm.v1.MsgConvertEvmToCoin" transaction message.
 */
export interface EventConvertEvmToCoin {
  sender: string;
  erc20ContractAddress: string;
  toAddress: string;
  bankCoin?: Coin;
  senderEthAddr: string;
}

function createBaseEventEthereumTx(): EventEthereumTx {
  return { amount: "", ethHash: "", index: "", gasUsed: "", hash: "", recipient: "", vmError: "" };
}

export const EventEthereumTx = {
  encode(message: EventEthereumTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.ethHash !== "") {
      writer.uint32(18).string(message.ethHash);
    }
    if (message.index !== "") {
      writer.uint32(26).string(message.index);
    }
    if (message.gasUsed !== "") {
      writer.uint32(34).string(message.gasUsed);
    }
    if (message.hash !== "") {
      writer.uint32(42).string(message.hash);
    }
    if (message.recipient !== "") {
      writer.uint32(50).string(message.recipient);
    }
    if (message.vmError !== "") {
      writer.uint32(58).string(message.vmError);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEthereumTx {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEthereumTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ethHash = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.index = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.gasUsed = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.hash = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.recipient = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.vmError = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventEthereumTx {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
      ethHash: isSet(object.ethHash) ? String(object.ethHash) : "",
      index: isSet(object.index) ? String(object.index) : "",
      gasUsed: isSet(object.gasUsed) ? String(object.gasUsed) : "",
      hash: isSet(object.hash) ? String(object.hash) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      vmError: isSet(object.vmError) ? String(object.vmError) : "",
    };
  },

  toJSON(message: EventEthereumTx): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.ethHash !== undefined && (obj.ethHash = message.ethHash);
    message.index !== undefined && (obj.index = message.index);
    message.gasUsed !== undefined && (obj.gasUsed = message.gasUsed);
    message.hash !== undefined && (obj.hash = message.hash);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.vmError !== undefined && (obj.vmError = message.vmError);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventEthereumTx>, I>>(base?: I): EventEthereumTx {
    return EventEthereumTx.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventEthereumTx>, I>>(object: I): EventEthereumTx {
    const message = createBaseEventEthereumTx();
    message.amount = object.amount ?? "";
    message.ethHash = object.ethHash ?? "";
    message.index = object.index ?? "";
    message.gasUsed = object.gasUsed ?? "";
    message.hash = object.hash ?? "";
    message.recipient = object.recipient ?? "";
    message.vmError = object.vmError ?? "";
    return message;
  },
};

function createBaseEventTxLog(): EventTxLog {
  return { logs: [] };
}

export const EventTxLog = {
  encode(message: EventTxLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTxLog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTxLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logs.push(Log.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventTxLog {
    return { logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => Log.fromJSON(e)) : [] };
  },

  toJSON(message: EventTxLog): unknown {
    const obj: any = {};
    if (message.logs) {
      obj.logs = message.logs.map((e) => e ? Log.toJSON(e) : undefined);
    } else {
      obj.logs = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventTxLog>, I>>(base?: I): EventTxLog {
    return EventTxLog.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventTxLog>, I>>(object: I): EventTxLog {
    const message = createBaseEventTxLog();
    message.logs = object.logs?.map((e) => Log.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventBlockBloom(): EventBlockBloom {
  return { bloom: "" };
}

export const EventBlockBloom = {
  encode(message: EventBlockBloom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bloom !== "") {
      writer.uint32(10).string(message.bloom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBlockBloom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBlockBloom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bloom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventBlockBloom {
    return { bloom: isSet(object.bloom) ? String(object.bloom) : "" };
  },

  toJSON(message: EventBlockBloom): unknown {
    const obj: any = {};
    message.bloom !== undefined && (obj.bloom = message.bloom);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventBlockBloom>, I>>(base?: I): EventBlockBloom {
    return EventBlockBloom.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventBlockBloom>, I>>(object: I): EventBlockBloom {
    const message = createBaseEventBlockBloom();
    message.bloom = object.bloom ?? "";
    return message;
  },
};

function createBaseEventFunTokenCreated(): EventFunTokenCreated {
  return { bankDenom: "", erc20ContractAddress: "", creator: "", isMadeFromCoin: false };
}

export const EventFunTokenCreated = {
  encode(message: EventFunTokenCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bankDenom !== "") {
      writer.uint32(10).string(message.bankDenom);
    }
    if (message.erc20ContractAddress !== "") {
      writer.uint32(18).string(message.erc20ContractAddress);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.isMadeFromCoin === true) {
      writer.uint32(32).bool(message.isMadeFromCoin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventFunTokenCreated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFunTokenCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bankDenom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.erc20ContractAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
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

  fromJSON(object: any): EventFunTokenCreated {
    return {
      bankDenom: isSet(object.bankDenom) ? String(object.bankDenom) : "",
      erc20ContractAddress: isSet(object.erc20ContractAddress) ? String(object.erc20ContractAddress) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      isMadeFromCoin: isSet(object.isMadeFromCoin) ? Boolean(object.isMadeFromCoin) : false,
    };
  },

  toJSON(message: EventFunTokenCreated): unknown {
    const obj: any = {};
    message.bankDenom !== undefined && (obj.bankDenom = message.bankDenom);
    message.erc20ContractAddress !== undefined && (obj.erc20ContractAddress = message.erc20ContractAddress);
    message.creator !== undefined && (obj.creator = message.creator);
    message.isMadeFromCoin !== undefined && (obj.isMadeFromCoin = message.isMadeFromCoin);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventFunTokenCreated>, I>>(base?: I): EventFunTokenCreated {
    return EventFunTokenCreated.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventFunTokenCreated>, I>>(object: I): EventFunTokenCreated {
    const message = createBaseEventFunTokenCreated();
    message.bankDenom = object.bankDenom ?? "";
    message.erc20ContractAddress = object.erc20ContractAddress ?? "";
    message.creator = object.creator ?? "";
    message.isMadeFromCoin = object.isMadeFromCoin ?? false;
    return message;
  },
};

function createBaseEventConvertCoinToEvm(): EventConvertCoinToEvm {
  return { sender: "", erc20ContractAddress: "", toEthAddr: "", bankCoin: undefined };
}

export const EventConvertCoinToEvm = {
  encode(message: EventConvertCoinToEvm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.erc20ContractAddress !== "") {
      writer.uint32(18).string(message.erc20ContractAddress);
    }
    if (message.toEthAddr !== "") {
      writer.uint32(26).string(message.toEthAddr);
    }
    if (message.bankCoin !== undefined) {
      Coin.encode(message.bankCoin, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventConvertCoinToEvm {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventConvertCoinToEvm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.erc20ContractAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.toEthAddr = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bankCoin = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventConvertCoinToEvm {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      erc20ContractAddress: isSet(object.erc20ContractAddress) ? String(object.erc20ContractAddress) : "",
      toEthAddr: isSet(object.toEthAddr) ? String(object.toEthAddr) : "",
      bankCoin: isSet(object.bankCoin) ? Coin.fromJSON(object.bankCoin) : undefined,
    };
  },

  toJSON(message: EventConvertCoinToEvm): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.erc20ContractAddress !== undefined && (obj.erc20ContractAddress = message.erc20ContractAddress);
    message.toEthAddr !== undefined && (obj.toEthAddr = message.toEthAddr);
    message.bankCoin !== undefined && (obj.bankCoin = message.bankCoin ? Coin.toJSON(message.bankCoin) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventConvertCoinToEvm>, I>>(base?: I): EventConvertCoinToEvm {
    return EventConvertCoinToEvm.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventConvertCoinToEvm>, I>>(object: I): EventConvertCoinToEvm {
    const message = createBaseEventConvertCoinToEvm();
    message.sender = object.sender ?? "";
    message.erc20ContractAddress = object.erc20ContractAddress ?? "";
    message.toEthAddr = object.toEthAddr ?? "";
    message.bankCoin = (object.bankCoin !== undefined && object.bankCoin !== null)
      ? Coin.fromPartial(object.bankCoin)
      : undefined;
    return message;
  },
};

function createBaseEventTransfer(): EventTransfer {
  return { sender: "", recipient: "", amount: "" };
}

export const EventTransfer = {
  encode(message: EventTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTransfer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.recipient = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventTransfer {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: EventTransfer): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventTransfer>, I>>(base?: I): EventTransfer {
    return EventTransfer.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventTransfer>, I>>(object: I): EventTransfer {
    const message = createBaseEventTransfer();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseEventContractDeployed(): EventContractDeployed {
  return { sender: "", contractAddr: "" };
}

export const EventContractDeployed = {
  encode(message: EventContractDeployed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAddr !== "") {
      writer.uint32(18).string(message.contractAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventContractDeployed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventContractDeployed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contractAddr = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventContractDeployed {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : "",
    };
  },

  toJSON(message: EventContractDeployed): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventContractDeployed>, I>>(base?: I): EventContractDeployed {
    return EventContractDeployed.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventContractDeployed>, I>>(object: I): EventContractDeployed {
    const message = createBaseEventContractDeployed();
    message.sender = object.sender ?? "";
    message.contractAddr = object.contractAddr ?? "";
    return message;
  },
};

function createBaseEventContractExecuted(): EventContractExecuted {
  return { sender: "", contractAddr: "" };
}

export const EventContractExecuted = {
  encode(message: EventContractExecuted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAddr !== "") {
      writer.uint32(18).string(message.contractAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventContractExecuted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventContractExecuted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contractAddr = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventContractExecuted {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contractAddr: isSet(object.contractAddr) ? String(object.contractAddr) : "",
    };
  },

  toJSON(message: EventContractExecuted): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventContractExecuted>, I>>(base?: I): EventContractExecuted {
    return EventContractExecuted.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventContractExecuted>, I>>(object: I): EventContractExecuted {
    const message = createBaseEventContractExecuted();
    message.sender = object.sender ?? "";
    message.contractAddr = object.contractAddr ?? "";
    return message;
  },
};

function createBaseEventConvertEvmToCoin(): EventConvertEvmToCoin {
  return { sender: "", erc20ContractAddress: "", toAddress: "", bankCoin: undefined, senderEthAddr: "" };
}

export const EventConvertEvmToCoin = {
  encode(message: EventConvertEvmToCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.erc20ContractAddress !== "") {
      writer.uint32(18).string(message.erc20ContractAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(26).string(message.toAddress);
    }
    if (message.bankCoin !== undefined) {
      Coin.encode(message.bankCoin, writer.uint32(34).fork()).ldelim();
    }
    if (message.senderEthAddr !== "") {
      writer.uint32(50).string(message.senderEthAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventConvertEvmToCoin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventConvertEvmToCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.erc20ContractAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.toAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bankCoin = Coin.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.senderEthAddr = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventConvertEvmToCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      erc20ContractAddress: isSet(object.erc20ContractAddress) ? String(object.erc20ContractAddress) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      bankCoin: isSet(object.bankCoin) ? Coin.fromJSON(object.bankCoin) : undefined,
      senderEthAddr: isSet(object.senderEthAddr) ? String(object.senderEthAddr) : "",
    };
  },

  toJSON(message: EventConvertEvmToCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.erc20ContractAddress !== undefined && (obj.erc20ContractAddress = message.erc20ContractAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.bankCoin !== undefined && (obj.bankCoin = message.bankCoin ? Coin.toJSON(message.bankCoin) : undefined);
    message.senderEthAddr !== undefined && (obj.senderEthAddr = message.senderEthAddr);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventConvertEvmToCoin>, I>>(base?: I): EventConvertEvmToCoin {
    return EventConvertEvmToCoin.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventConvertEvmToCoin>, I>>(object: I): EventConvertEvmToCoin {
    const message = createBaseEventConvertEvmToCoin();
    message.sender = object.sender ?? "";
    message.erc20ContractAddress = object.erc20ContractAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.bankCoin = (object.bankCoin !== undefined && object.bankCoin !== null)
      ? Coin.fromPartial(object.bankCoin)
      : undefined;
    message.senderEthAddr = object.senderEthAddr ?? "";
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
