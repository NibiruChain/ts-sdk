/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "nibiru.vpool.v1";

export interface ReserveSnapshotSavedEvent {
  pair: string;
  quoteReserve: string;
  baseReserve: string;
  /**
   * MarkPrice at the end of the block.
   * (instantaneous) markPrice := quoteReserve / baseReserve
   */
  markPrice: string;
  blockHeight: Long;
  blockTimestamp?: Date;
}

/**
 * A swap on the vpool represented by 'pair'.
 * Amounts are negative or positive base on the perspective of the pool, i.e.
 * a negative quote means the trader has gained quote and the vpool lost quote.
 */
export interface SwapOnVpoolEvent {
  pair: string;
  /** delta in the quote reserves of the vpool */
  quoteAmount: string;
  /** delta in the base reserves of the vpool */
  baseAmount: string;
}

export interface MarkPriceChangedEvent {
  pair: string;
  price: string;
  blockTimestamp?: Date;
}

function createBaseReserveSnapshotSavedEvent(): ReserveSnapshotSavedEvent {
  return {
    pair: "",
    quoteReserve: "",
    baseReserve: "",
    markPrice: "",
    blockHeight: Long.ZERO,
    blockTimestamp: undefined,
  };
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
    if (message.markPrice !== "") {
      writer.uint32(34).string(message.markPrice);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(40).int64(message.blockHeight);
    }
    if (message.blockTimestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.blockTimestamp), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReserveSnapshotSavedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReserveSnapshotSavedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pair = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.quoteReserve = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.baseReserve = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.markPrice = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.blockHeight = reader.int64() as Long;
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.blockTimestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReserveSnapshotSavedEvent {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      quoteReserve: isSet(object.quoteReserve) ? String(object.quoteReserve) : "",
      baseReserve: isSet(object.baseReserve) ? String(object.baseReserve) : "",
      markPrice: isSet(object.markPrice) ? String(object.markPrice) : "",
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      blockTimestamp: isSet(object.blockTimestamp) ? fromJsonTimestamp(object.blockTimestamp) : undefined,
    };
  },

  toJSON(message: ReserveSnapshotSavedEvent): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair);
    message.quoteReserve !== undefined && (obj.quoteReserve = message.quoteReserve);
    message.baseReserve !== undefined && (obj.baseReserve = message.baseReserve);
    message.markPrice !== undefined && (obj.markPrice = message.markPrice);
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.blockTimestamp !== undefined && (obj.blockTimestamp = message.blockTimestamp.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<ReserveSnapshotSavedEvent>, I>>(base?: I): ReserveSnapshotSavedEvent {
    return ReserveSnapshotSavedEvent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReserveSnapshotSavedEvent>, I>>(object: I): ReserveSnapshotSavedEvent {
    const message = createBaseReserveSnapshotSavedEvent();
    message.pair = object.pair ?? "";
    message.quoteReserve = object.quoteReserve ?? "";
    message.baseReserve = object.baseReserve ?? "";
    message.markPrice = object.markPrice ?? "";
    message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
      ? Long.fromValue(object.blockHeight)
      : Long.ZERO;
    message.blockTimestamp = object.blockTimestamp ?? undefined;
    return message;
  },
};

function createBaseSwapOnVpoolEvent(): SwapOnVpoolEvent {
  return { pair: "", quoteAmount: "", baseAmount: "" };
}

export const SwapOnVpoolEvent = {
  encode(message: SwapOnVpoolEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapOnVpoolEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapOnVpoolEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pair = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.quoteAmount = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.baseAmount = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SwapOnVpoolEvent {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      quoteAmount: isSet(object.quoteAmount) ? String(object.quoteAmount) : "",
      baseAmount: isSet(object.baseAmount) ? String(object.baseAmount) : "",
    };
  },

  toJSON(message: SwapOnVpoolEvent): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair);
    message.quoteAmount !== undefined && (obj.quoteAmount = message.quoteAmount);
    message.baseAmount !== undefined && (obj.baseAmount = message.baseAmount);
    return obj;
  },

  create<I extends Exact<DeepPartial<SwapOnVpoolEvent>, I>>(base?: I): SwapOnVpoolEvent {
    return SwapOnVpoolEvent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SwapOnVpoolEvent>, I>>(object: I): SwapOnVpoolEvent {
    const message = createBaseSwapOnVpoolEvent();
    message.pair = object.pair ?? "";
    message.quoteAmount = object.quoteAmount ?? "";
    message.baseAmount = object.baseAmount ?? "";
    return message;
  },
};

function createBaseMarkPriceChangedEvent(): MarkPriceChangedEvent {
  return { pair: "", price: "", blockTimestamp: undefined };
}

export const MarkPriceChangedEvent = {
  encode(message: MarkPriceChangedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    if (message.blockTimestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.blockTimestamp), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarkPriceChangedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarkPriceChangedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pair = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.price = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.blockTimestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarkPriceChangedEvent {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      price: isSet(object.price) ? String(object.price) : "",
      blockTimestamp: isSet(object.blockTimestamp) ? fromJsonTimestamp(object.blockTimestamp) : undefined,
    };
  },

  toJSON(message: MarkPriceChangedEvent): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair);
    message.price !== undefined && (obj.price = message.price);
    message.blockTimestamp !== undefined && (obj.blockTimestamp = message.blockTimestamp.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MarkPriceChangedEvent>, I>>(base?: I): MarkPriceChangedEvent {
    return MarkPriceChangedEvent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MarkPriceChangedEvent>, I>>(object: I): MarkPriceChangedEvent {
    const message = createBaseMarkPriceChangedEvent();
    message.pair = object.pair ?? "";
    message.price = object.price ?? "";
    message.blockTimestamp = object.blockTimestamp ?? undefined;
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
