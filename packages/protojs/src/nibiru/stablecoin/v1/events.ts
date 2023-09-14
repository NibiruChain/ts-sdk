/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "nibiru.stablecoin.v1";

export interface EventTransfer {
  coin?: Coin;
  from: string;
  to: string;
}

export interface EventMintStable {
  amount: string;
}

export interface EventBurnStable {
  amount: string;
}

export interface EventMintNIBI {
  amount: string;
}

export interface EventBurnNIBI {
  amount: string;
}

export interface EventRecollateralize {
  caller: string;
  inCoin?: Coin;
  outCoin?: Coin;
  collRatio: string;
}

export interface EventBuyback {
  caller: string;
  inCoin?: Coin;
  outCoin?: Coin;
  collRatio: string;
}

function createBaseEventTransfer(): EventTransfer {
  return { coin: undefined, from: "", to: "" };
}

export const EventTransfer = {
  encode(message: EventTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
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

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.from = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.to = reader.string();
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
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
    };
  },

  toJSON(message: EventTransfer): unknown {
    const obj: any = {};
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventTransfer>, I>>(base?: I): EventTransfer {
    return EventTransfer.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventTransfer>, I>>(object: I): EventTransfer {
    const message = createBaseEventTransfer();
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    return message;
  },
};

function createBaseEventMintStable(): EventMintStable {
  return { amount: "" };
}

export const EventMintStable = {
  encode(message: EventMintStable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMintStable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMintStable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): EventMintStable {
    return { amount: isSet(object.amount) ? String(object.amount) : "" };
  },

  toJSON(message: EventMintStable): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventMintStable>, I>>(base?: I): EventMintStable {
    return EventMintStable.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventMintStable>, I>>(object: I): EventMintStable {
    const message = createBaseEventMintStable();
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseEventBurnStable(): EventBurnStable {
  return { amount: "" };
}

export const EventBurnStable = {
  encode(message: EventBurnStable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnStable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurnStable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): EventBurnStable {
    return { amount: isSet(object.amount) ? String(object.amount) : "" };
  },

  toJSON(message: EventBurnStable): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventBurnStable>, I>>(base?: I): EventBurnStable {
    return EventBurnStable.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventBurnStable>, I>>(object: I): EventBurnStable {
    const message = createBaseEventBurnStable();
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseEventMintNIBI(): EventMintNIBI {
  return { amount: "" };
}

export const EventMintNIBI = {
  encode(message: EventMintNIBI, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMintNIBI {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMintNIBI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): EventMintNIBI {
    return { amount: isSet(object.amount) ? String(object.amount) : "" };
  },

  toJSON(message: EventMintNIBI): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventMintNIBI>, I>>(base?: I): EventMintNIBI {
    return EventMintNIBI.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventMintNIBI>, I>>(object: I): EventMintNIBI {
    const message = createBaseEventMintNIBI();
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseEventBurnNIBI(): EventBurnNIBI {
  return { amount: "" };
}

export const EventBurnNIBI = {
  encode(message: EventBurnNIBI, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnNIBI {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurnNIBI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): EventBurnNIBI {
    return { amount: isSet(object.amount) ? String(object.amount) : "" };
  },

  toJSON(message: EventBurnNIBI): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventBurnNIBI>, I>>(base?: I): EventBurnNIBI {
    return EventBurnNIBI.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventBurnNIBI>, I>>(object: I): EventBurnNIBI {
    const message = createBaseEventBurnNIBI();
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseEventRecollateralize(): EventRecollateralize {
  return { caller: "", inCoin: undefined, outCoin: undefined, collRatio: "" };
}

export const EventRecollateralize = {
  encode(message: EventRecollateralize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.caller !== "") {
      writer.uint32(10).string(message.caller);
    }
    if (message.inCoin !== undefined) {
      Coin.encode(message.inCoin, writer.uint32(18).fork()).ldelim();
    }
    if (message.outCoin !== undefined) {
      Coin.encode(message.outCoin, writer.uint32(26).fork()).ldelim();
    }
    if (message.collRatio !== "") {
      writer.uint32(34).string(message.collRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRecollateralize {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRecollateralize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.caller = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.inCoin = Coin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.outCoin = Coin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.collRatio = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventRecollateralize {
    return {
      caller: isSet(object.caller) ? String(object.caller) : "",
      inCoin: isSet(object.inCoin) ? Coin.fromJSON(object.inCoin) : undefined,
      outCoin: isSet(object.outCoin) ? Coin.fromJSON(object.outCoin) : undefined,
      collRatio: isSet(object.collRatio) ? String(object.collRatio) : "",
    };
  },

  toJSON(message: EventRecollateralize): unknown {
    const obj: any = {};
    message.caller !== undefined && (obj.caller = message.caller);
    message.inCoin !== undefined && (obj.inCoin = message.inCoin ? Coin.toJSON(message.inCoin) : undefined);
    message.outCoin !== undefined && (obj.outCoin = message.outCoin ? Coin.toJSON(message.outCoin) : undefined);
    message.collRatio !== undefined && (obj.collRatio = message.collRatio);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventRecollateralize>, I>>(base?: I): EventRecollateralize {
    return EventRecollateralize.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventRecollateralize>, I>>(object: I): EventRecollateralize {
    const message = createBaseEventRecollateralize();
    message.caller = object.caller ?? "";
    message.inCoin = (object.inCoin !== undefined && object.inCoin !== null)
      ? Coin.fromPartial(object.inCoin)
      : undefined;
    message.outCoin = (object.outCoin !== undefined && object.outCoin !== null)
      ? Coin.fromPartial(object.outCoin)
      : undefined;
    message.collRatio = object.collRatio ?? "";
    return message;
  },
};

function createBaseEventBuyback(): EventBuyback {
  return { caller: "", inCoin: undefined, outCoin: undefined, collRatio: "" };
}

export const EventBuyback = {
  encode(message: EventBuyback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.caller !== "") {
      writer.uint32(10).string(message.caller);
    }
    if (message.inCoin !== undefined) {
      Coin.encode(message.inCoin, writer.uint32(18).fork()).ldelim();
    }
    if (message.outCoin !== undefined) {
      Coin.encode(message.outCoin, writer.uint32(26).fork()).ldelim();
    }
    if (message.collRatio !== "") {
      writer.uint32(34).string(message.collRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBuyback {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBuyback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.caller = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.inCoin = Coin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.outCoin = Coin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.collRatio = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventBuyback {
    return {
      caller: isSet(object.caller) ? String(object.caller) : "",
      inCoin: isSet(object.inCoin) ? Coin.fromJSON(object.inCoin) : undefined,
      outCoin: isSet(object.outCoin) ? Coin.fromJSON(object.outCoin) : undefined,
      collRatio: isSet(object.collRatio) ? String(object.collRatio) : "",
    };
  },

  toJSON(message: EventBuyback): unknown {
    const obj: any = {};
    message.caller !== undefined && (obj.caller = message.caller);
    message.inCoin !== undefined && (obj.inCoin = message.inCoin ? Coin.toJSON(message.inCoin) : undefined);
    message.outCoin !== undefined && (obj.outCoin = message.outCoin ? Coin.toJSON(message.outCoin) : undefined);
    message.collRatio !== undefined && (obj.collRatio = message.collRatio);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventBuyback>, I>>(base?: I): EventBuyback {
    return EventBuyback.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventBuyback>, I>>(object: I): EventBuyback {
    const message = createBaseEventBuyback();
    message.caller = object.caller ?? "";
    message.inCoin = (object.inCoin !== undefined && object.inCoin !== null)
      ? Coin.fromPartial(object.inCoin)
      : undefined;
    message.outCoin = (object.outCoin !== undefined && object.outCoin !== null)
      ? Coin.fromPartial(object.outCoin)
      : undefined;
    message.collRatio = object.collRatio ?? "";
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
