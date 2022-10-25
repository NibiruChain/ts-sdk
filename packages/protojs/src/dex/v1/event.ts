/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "nibiru.dex.v1";

export interface EventPoolJoined {
  address: string;
  poolId: Long;
  tokensIn: Coin[];
  poolSharesOut?: Coin;
  remCoins: Coin[];
}

export interface EventPoolCreated {
  creator: string;
  poolId: Long;
}

export interface EventPoolExited {
  address: string;
  poolId: Long;
  poolSharesIn?: Coin;
  tokensOut: Coin[];
}

export interface EventAssetsSwapped {
  address: string;
  poolId: Long;
  tokenIn?: Coin;
  tokenOut?: Coin;
}

function createBaseEventPoolJoined(): EventPoolJoined {
  return { address: "", poolId: Long.UZERO, tokensIn: [], poolSharesOut: undefined, remCoins: [] };
}

export const EventPoolJoined = {
  encode(message: EventPoolJoined, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.tokensIn) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.poolSharesOut !== undefined) {
      Coin.encode(message.poolSharesOut, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.remCoins) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolJoined {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPoolJoined();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.tokensIn.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.poolSharesOut = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.remCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventPoolJoined {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokensIn: Array.isArray(object?.tokensIn) ? object.tokensIn.map((e: any) => Coin.fromJSON(e)) : [],
      poolSharesOut: isSet(object.poolSharesOut) ? Coin.fromJSON(object.poolSharesOut) : undefined,
      remCoins: Array.isArray(object?.remCoins) ? object.remCoins.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: EventPoolJoined): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.tokensIn) {
      obj.tokensIn = message.tokensIn.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokensIn = [];
    }
    message.poolSharesOut !== undefined &&
      (obj.poolSharesOut = message.poolSharesOut ? Coin.toJSON(message.poolSharesOut) : undefined);
    if (message.remCoins) {
      obj.remCoins = message.remCoins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.remCoins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPoolJoined>, I>>(object: I): EventPoolJoined {
    const message = createBaseEventPoolJoined();
    message.address = object.address ?? "";
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.tokensIn = object.tokensIn?.map((e) => Coin.fromPartial(e)) || [];
    message.poolSharesOut = (object.poolSharesOut !== undefined && object.poolSharesOut !== null)
      ? Coin.fromPartial(object.poolSharesOut)
      : undefined;
    message.remCoins = object.remCoins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventPoolCreated(): EventPoolCreated {
  return { creator: "", poolId: Long.UZERO };
}

export const EventPoolCreated = {
  encode(message: EventPoolCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolCreated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPoolCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventPoolCreated {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
    };
  },

  toJSON(message: EventPoolCreated): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPoolCreated>, I>>(object: I): EventPoolCreated {
    const message = createBaseEventPoolCreated();
    message.creator = object.creator ?? "";
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    return message;
  },
};

function createBaseEventPoolExited(): EventPoolExited {
  return { address: "", poolId: Long.UZERO, poolSharesIn: undefined, tokensOut: [] };
}

export const EventPoolExited = {
  encode(message: EventPoolExited, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.poolSharesIn !== undefined) {
      Coin.encode(message.poolSharesIn, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.tokensOut) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolExited {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPoolExited();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.poolSharesIn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.tokensOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventPoolExited {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      poolSharesIn: isSet(object.poolSharesIn) ? Coin.fromJSON(object.poolSharesIn) : undefined,
      tokensOut: Array.isArray(object?.tokensOut) ? object.tokensOut.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: EventPoolExited): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.poolSharesIn !== undefined &&
      (obj.poolSharesIn = message.poolSharesIn ? Coin.toJSON(message.poolSharesIn) : undefined);
    if (message.tokensOut) {
      obj.tokensOut = message.tokensOut.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokensOut = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPoolExited>, I>>(object: I): EventPoolExited {
    const message = createBaseEventPoolExited();
    message.address = object.address ?? "";
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.poolSharesIn = (object.poolSharesIn !== undefined && object.poolSharesIn !== null)
      ? Coin.fromPartial(object.poolSharesIn)
      : undefined;
    message.tokensOut = object.tokensOut?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventAssetsSwapped(): EventAssetsSwapped {
  return { address: "", poolId: Long.UZERO, tokenIn: undefined, tokenOut: undefined };
}

export const EventAssetsSwapped = {
  encode(message: EventAssetsSwapped, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAssetsSwapped {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAssetsSwapped();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.tokenOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventAssetsSwapped {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokenIn: isSet(object.tokenIn) ? Coin.fromJSON(object.tokenIn) : undefined,
      tokenOut: isSet(object.tokenOut) ? Coin.fromJSON(object.tokenOut) : undefined,
    };
  },

  toJSON(message: EventAssetsSwapped): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventAssetsSwapped>, I>>(object: I): EventAssetsSwapped {
    const message = createBaseEventAssetsSwapped();
    message.address = object.address ?? "";
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.tokenIn = (object.tokenIn !== undefined && object.tokenIn !== null)
      ? Coin.fromPartial(object.tokenIn)
      : undefined;
    message.tokenOut = (object.tokenOut !== undefined && object.tokenOut !== null)
      ? Coin.fromPartial(object.tokenOut)
      : undefined;
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
