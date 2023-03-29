/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "nibiru.spot.v1";

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
  fees: Coin[];
}

export interface EventPoolExited {
  address: string;
  poolId: Long;
  poolSharesIn?: Coin;
  tokensOut: Coin[];
  fees: Coin[];
}

export interface EventAssetsSwapped {
  address: string;
  poolId: Long;
  tokenIn?: Coin;
  tokenOut?: Coin;
  fee?: Coin;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPoolJoined();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.tokensIn.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.poolSharesOut = Coin.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.remCoins.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create<I extends Exact<DeepPartial<EventPoolJoined>, I>>(base?: I): EventPoolJoined {
    return EventPoolJoined.fromPartial(base ?? {});
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
  return { creator: "", poolId: Long.UZERO, fees: [] };
}

export const EventPoolCreated = {
  encode(message: EventPoolCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.fees) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolCreated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPoolCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.fees.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventPoolCreated {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: EventPoolCreated): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.fees) {
      obj.fees = message.fees.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.fees = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventPoolCreated>, I>>(base?: I): EventPoolCreated {
    return EventPoolCreated.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventPoolCreated>, I>>(object: I): EventPoolCreated {
    const message = createBaseEventPoolCreated();
    message.creator = object.creator ?? "";
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.fees = object.fees?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventPoolExited(): EventPoolExited {
  return { address: "", poolId: Long.UZERO, poolSharesIn: undefined, tokensOut: [], fees: [] };
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
    for (const v of message.fees) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolExited {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPoolExited();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.poolSharesIn = Coin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.tokensOut.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.fees.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventPoolExited {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      poolSharesIn: isSet(object.poolSharesIn) ? Coin.fromJSON(object.poolSharesIn) : undefined,
      tokensOut: Array.isArray(object?.tokensOut) ? object.tokensOut.map((e: any) => Coin.fromJSON(e)) : [],
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin.fromJSON(e)) : [],
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
    if (message.fees) {
      obj.fees = message.fees.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.fees = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventPoolExited>, I>>(base?: I): EventPoolExited {
    return EventPoolExited.fromPartial(base ?? {});
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
    message.fees = object.fees?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventAssetsSwapped(): EventAssetsSwapped {
  return { address: "", poolId: Long.UZERO, tokenIn: undefined, tokenOut: undefined, fee: undefined };
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
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAssetsSwapped {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAssetsSwapped();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.tokenIn = Coin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.tokenOut = Coin.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.fee = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventAssetsSwapped {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokenIn: isSet(object.tokenIn) ? Coin.fromJSON(object.tokenIn) : undefined,
      tokenOut: isSet(object.tokenOut) ? Coin.fromJSON(object.tokenOut) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
    };
  },

  toJSON(message: EventAssetsSwapped): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventAssetsSwapped>, I>>(base?: I): EventAssetsSwapped {
    return EventAssetsSwapped.fromPartial(base ?? {});
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
    message.fee = (object.fee !== undefined && object.fee !== null) ? Coin.fromPartial(object.fee) : undefined;
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
