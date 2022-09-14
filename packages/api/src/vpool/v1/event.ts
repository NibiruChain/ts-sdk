/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "nibiru.vpool.v1";

export interface ReserveSnapshotSavedEvent {
  pair: string;
  quoteReserve: string;
  baseReserve: string;
}

export interface SwapQuoteForBaseEvent {
  pair: string;
  quoteAmount: string;
  baseAmount: string;
}

export interface SwapBaseForQuoteEvent {
  pair: string;
  quoteAmount: string;
  baseAmount: string;
}

export interface MarkPriceChanged {
  pair: string;
  price: string;
  timestamp?: Date;
}

function createBaseReserveSnapshotSavedEvent(): ReserveSnapshotSavedEvent {
  return { pair: "", quoteReserve: "", baseReserve: "" };
}

export const ReserveSnapshotSavedEvent = {
  encode(message: ReserveSnapshotSavedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.quoteReserve !== "") {
      writer.uint32(18).string(message.quoteReserve);
    }
    if (message.baseReserve !== "") {
      writer.uint32(26).string(message.baseReserve);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReserveSnapshotSavedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReserveSnapshotSavedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pair = reader.string();
          break;
        case 2:
          message.quoteReserve = reader.string();
          break;
        case 3:
          message.baseReserve = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReserveSnapshotSavedEvent {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      quoteReserve: isSet(object.quoteReserve) ? String(object.quoteReserve) : "",
      baseReserve: isSet(object.baseReserve) ? String(object.baseReserve) : "",
    };
  },

  toJSON(message: ReserveSnapshotSavedEvent): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair);
    message.quoteReserve !== undefined && (obj.quoteReserve = message.quoteReserve);
    message.baseReserve !== undefined && (obj.baseReserve = message.baseReserve);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReserveSnapshotSavedEvent>, I>>(object: I): ReserveSnapshotSavedEvent {
    const message = createBaseReserveSnapshotSavedEvent();
    message.pair = object.pair ?? "";
    message.quoteReserve = object.quoteReserve ?? "";
    message.baseReserve = object.baseReserve ?? "";
    return message;
  },
};

function createBaseSwapQuoteForBaseEvent(): SwapQuoteForBaseEvent {
  return { pair: "", quoteAmount: "", baseAmount: "" };
}

export const SwapQuoteForBaseEvent = {
  encode(message: SwapQuoteForBaseEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.quoteAmount !== "") {
      writer.uint32(18).string(message.quoteAmount);
    }
    if (message.baseAmount !== "") {
      writer.uint32(26).string(message.baseAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapQuoteForBaseEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapQuoteForBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pair = reader.string();
          break;
        case 2:
          message.quoteAmount = reader.string();
          break;
        case 3:
          message.baseAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapQuoteForBaseEvent {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      quoteAmount: isSet(object.quoteAmount) ? String(object.quoteAmount) : "",
      baseAmount: isSet(object.baseAmount) ? String(object.baseAmount) : "",
    };
  },

  toJSON(message: SwapQuoteForBaseEvent): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair);
    message.quoteAmount !== undefined && (obj.quoteAmount = message.quoteAmount);
    message.baseAmount !== undefined && (obj.baseAmount = message.baseAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SwapQuoteForBaseEvent>, I>>(object: I): SwapQuoteForBaseEvent {
    const message = createBaseSwapQuoteForBaseEvent();
    message.pair = object.pair ?? "";
    message.quoteAmount = object.quoteAmount ?? "";
    message.baseAmount = object.baseAmount ?? "";
    return message;
  },
};

function createBaseSwapBaseForQuoteEvent(): SwapBaseForQuoteEvent {
  return { pair: "", quoteAmount: "", baseAmount: "" };
}

export const SwapBaseForQuoteEvent = {
  encode(message: SwapBaseForQuoteEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.quoteAmount !== "") {
      writer.uint32(18).string(message.quoteAmount);
    }
    if (message.baseAmount !== "") {
      writer.uint32(26).string(message.baseAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapBaseForQuoteEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapBaseForQuoteEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pair = reader.string();
          break;
        case 2:
          message.quoteAmount = reader.string();
          break;
        case 3:
          message.baseAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapBaseForQuoteEvent {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      quoteAmount: isSet(object.quoteAmount) ? String(object.quoteAmount) : "",
      baseAmount: isSet(object.baseAmount) ? String(object.baseAmount) : "",
    };
  },

  toJSON(message: SwapBaseForQuoteEvent): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair);
    message.quoteAmount !== undefined && (obj.quoteAmount = message.quoteAmount);
    message.baseAmount !== undefined && (obj.baseAmount = message.baseAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SwapBaseForQuoteEvent>, I>>(object: I): SwapBaseForQuoteEvent {
    const message = createBaseSwapBaseForQuoteEvent();
    message.pair = object.pair ?? "";
    message.quoteAmount = object.quoteAmount ?? "";
    message.baseAmount = object.baseAmount ?? "";
    return message;
  },
};

function createBaseMarkPriceChanged(): MarkPriceChanged {
  return { pair: "", price: "", timestamp: undefined };
}

export const MarkPriceChanged = {
  encode(message: MarkPriceChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarkPriceChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarkPriceChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pair = reader.string();
          break;
        case 2:
          message.price = reader.string();
          break;
        case 3:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarkPriceChanged {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      price: isSet(object.price) ? String(object.price) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
    };
  },

  toJSON(message: MarkPriceChanged): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair);
    message.price !== undefined && (obj.price = message.price);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarkPriceChanged>, I>>(object: I): MarkPriceChanged {
    const message = createBaseMarkPriceChanged();
    message.pair = object.pair ?? "";
    message.price = object.price ?? "";
    message.timestamp = object.timestamp ?? undefined;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
