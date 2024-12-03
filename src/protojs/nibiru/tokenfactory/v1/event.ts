/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Metadata } from "../../../cosmos/bank/v1beta1/bank";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export interface EventCreateDenom {
  denom: string;
  creator: string;
}

export interface EventChangeAdmin {
  denom: string;
  newAdmin: string;
  oldAdmin: string;
}

export interface EventMint {
  coin?: Coin;
  toAddr: string;
  caller: string;
}

export interface EventBurn {
  coin?: Coin;
  fromAddr: string;
  caller: string;
}

export interface EventSetDenomMetadata {
  denom: string;
  /**
   * Metadata: Official x/bank metadata for the denom. All token factory denoms
   * are standard, native assets. The "metadata.base" is the denom.
   */
  metadata?: Metadata;
  caller: string;
}

function createBaseEventCreateDenom(): EventCreateDenom {
  return { denom: "", creator: "" };
}

export const EventCreateDenom = {
  encode(message: EventCreateDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateDenom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): EventCreateDenom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: EventCreateDenom): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventCreateDenom>, I>>(base?: I): EventCreateDenom {
    return EventCreateDenom.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateDenom>, I>>(object: I): EventCreateDenom {
    const message = createBaseEventCreateDenom();
    message.denom = object.denom ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseEventChangeAdmin(): EventChangeAdmin {
  return { denom: "", newAdmin: "", oldAdmin: "" };
}

export const EventChangeAdmin = {
  encode(message: EventChangeAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.newAdmin !== "") {
      writer.uint32(18).string(message.newAdmin);
    }
    if (message.oldAdmin !== "") {
      writer.uint32(26).string(message.oldAdmin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventChangeAdmin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventChangeAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.newAdmin = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.oldAdmin = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventChangeAdmin {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
      oldAdmin: isSet(object.oldAdmin) ? String(object.oldAdmin) : "",
    };
  },

  toJSON(message: EventChangeAdmin): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    message.oldAdmin !== undefined && (obj.oldAdmin = message.oldAdmin);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventChangeAdmin>, I>>(base?: I): EventChangeAdmin {
    return EventChangeAdmin.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventChangeAdmin>, I>>(object: I): EventChangeAdmin {
    const message = createBaseEventChangeAdmin();
    message.denom = object.denom ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.oldAdmin = object.oldAdmin ?? "";
    return message;
  },
};

function createBaseEventMint(): EventMint {
  return { coin: undefined, toAddr: "", caller: "" };
}

export const EventMint = {
  encode(message: EventMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.toAddr !== "") {
      writer.uint32(18).string(message.toAddr);
    }
    if (message.caller !== "") {
      writer.uint32(26).string(message.caller);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.toAddr = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.caller = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventMint {
    return {
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      toAddr: isSet(object.toAddr) ? String(object.toAddr) : "",
      caller: isSet(object.caller) ? String(object.caller) : "",
    };
  },

  toJSON(message: EventMint): unknown {
    const obj: any = {};
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.toAddr !== undefined && (obj.toAddr = message.toAddr);
    message.caller !== undefined && (obj.caller = message.caller);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventMint>, I>>(base?: I): EventMint {
    return EventMint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventMint>, I>>(object: I): EventMint {
    const message = createBaseEventMint();
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    message.toAddr = object.toAddr ?? "";
    message.caller = object.caller ?? "";
    return message;
  },
};

function createBaseEventBurn(): EventBurn {
  return { coin: undefined, fromAddr: "", caller: "" };
}

export const EventBurn = {
  encode(message: EventBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.fromAddr !== "") {
      writer.uint32(18).string(message.fromAddr);
    }
    if (message.caller !== "") {
      writer.uint32(26).string(message.caller);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBurn {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fromAddr = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.caller = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventBurn {
    return {
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      fromAddr: isSet(object.fromAddr) ? String(object.fromAddr) : "",
      caller: isSet(object.caller) ? String(object.caller) : "",
    };
  },

  toJSON(message: EventBurn): unknown {
    const obj: any = {};
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.fromAddr !== undefined && (obj.fromAddr = message.fromAddr);
    message.caller !== undefined && (obj.caller = message.caller);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventBurn>, I>>(base?: I): EventBurn {
    return EventBurn.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventBurn>, I>>(object: I): EventBurn {
    const message = createBaseEventBurn();
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    message.fromAddr = object.fromAddr ?? "";
    message.caller = object.caller ?? "";
    return message;
  },
};

function createBaseEventSetDenomMetadata(): EventSetDenomMetadata {
  return { denom: "", metadata: undefined, caller: "" };
}

export const EventSetDenomMetadata = {
  encode(message: EventSetDenomMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.caller !== "") {
      writer.uint32(26).string(message.caller);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetDenomMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetDenomMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = Metadata.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.caller = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventSetDenomMetadata {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
      caller: isSet(object.caller) ? String(object.caller) : "",
    };
  },

  toJSON(message: EventSetDenomMetadata): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    message.caller !== undefined && (obj.caller = message.caller);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventSetDenomMetadata>, I>>(base?: I): EventSetDenomMetadata {
    return EventSetDenomMetadata.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventSetDenomMetadata>, I>>(object: I): EventSetDenomMetadata {
    const message = createBaseEventSetDenomMetadata();
    message.denom = object.denom ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Metadata.fromPartial(object.metadata)
      : undefined;
    message.caller = object.caller ?? "";
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
