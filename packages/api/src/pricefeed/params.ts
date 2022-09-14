/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { AssetPair } from "../common/common";
import { Duration } from "../google/protobuf/duration";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "nibiru.pricefeed.v1";

/** Params defines the parameters for the x/pricefeed module. */
export interface Params {
  /**
   * Pairs is the list of valid trading pairs for the module.
   * Add new trading pairs
   */
  pairs: AssetPair[];
  /** amount of time to look back for TWAP calculations */
  twapLookbackWindow?: Duration;
}

/**
 * OraclesMarshaler is a codec.ProtoMarshaler for an oracles array in the
 * OraclesState sdk.KVStore.
 */
export interface OraclesMarshaler {
  oracles: Uint8Array[];
}

/**
 * ActivePairMarshaler is a codec.ProtoMarshaler for the "IsActive" status of
 * a pair in the ActivePairState sdk.KVStore.
 */
export interface ActivePairMarshaler {
  isActive: boolean;
}

/** PostedPrice defines a price for an asset pair posted by a specific oracle. */
export interface PostedPrice {
  pairId: string;
  oracle: string;
  price: string;
  expiry?: Date;
}

/**
 * CurrentPrice defines the current price for an asset pair in the pricefeed
 * module.
 */
export interface CurrentPrice {
  pairId: string;
  price: string;
}

/** CurrentTWAP states defines the numerator and denominator for the TWAP calculation */
export interface CurrentTWAP {
  pairId: string;
  numerator: string;
  denominator: string;
  price: string;
}

function createBaseParams(): Params {
  return { pairs: [], twapLookbackWindow: undefined };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pairs) {
      AssetPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.twapLookbackWindow !== undefined) {
      Duration.encode(message.twapLookbackWindow, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(AssetPair.decode(reader, reader.uint32()));
          break;
        case 2:
          message.twapLookbackWindow = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => AssetPair.fromJSON(e)) : [],
      twapLookbackWindow: isSet(object.twapLookbackWindow) ? Duration.fromJSON(object.twapLookbackWindow) : undefined,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) => e ? AssetPair.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    message.twapLookbackWindow !== undefined &&
      (obj.twapLookbackWindow = message.twapLookbackWindow ? Duration.toJSON(message.twapLookbackWindow) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.pairs = object.pairs?.map((e) => AssetPair.fromPartial(e)) || [];
    message.twapLookbackWindow = (object.twapLookbackWindow !== undefined && object.twapLookbackWindow !== null)
      ? Duration.fromPartial(object.twapLookbackWindow)
      : undefined;
    return message;
  },
};

function createBaseOraclesMarshaler(): OraclesMarshaler {
  return { oracles: [] };
}

export const OraclesMarshaler = {
  encode(message: OraclesMarshaler, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.oracles) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OraclesMarshaler {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclesMarshaler();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracles.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OraclesMarshaler {
    return { oracles: Array.isArray(object?.oracles) ? object.oracles.map((e: any) => bytesFromBase64(e)) : [] };
  },

  toJSON(message: OraclesMarshaler): unknown {
    const obj: any = {};
    if (message.oracles) {
      obj.oracles = message.oracles.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.oracles = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OraclesMarshaler>, I>>(object: I): OraclesMarshaler {
    const message = createBaseOraclesMarshaler();
    message.oracles = object.oracles?.map((e) => e) || [];
    return message;
  },
};

function createBaseActivePairMarshaler(): ActivePairMarshaler {
  return { isActive: false };
}

export const ActivePairMarshaler = {
  encode(message: ActivePairMarshaler, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isActive === true) {
      writer.uint32(8).bool(message.isActive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivePairMarshaler {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivePairMarshaler();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isActive = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActivePairMarshaler {
    return { isActive: isSet(object.isActive) ? Boolean(object.isActive) : false };
  },

  toJSON(message: ActivePairMarshaler): unknown {
    const obj: any = {};
    message.isActive !== undefined && (obj.isActive = message.isActive);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActivePairMarshaler>, I>>(object: I): ActivePairMarshaler {
    const message = createBaseActivePairMarshaler();
    message.isActive = object.isActive ?? false;
    return message;
  },
};

function createBasePostedPrice(): PostedPrice {
  return { pairId: "", oracle: "", price: "", expiry: undefined };
}

export const PostedPrice = {
  encode(message: PostedPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.oracle !== "") {
      writer.uint32(18).string(message.oracle);
    }
    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }
    if (message.expiry !== undefined) {
      Timestamp.encode(toTimestamp(message.expiry), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostedPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostedPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        case 2:
          message.oracle = reader.string();
          break;
        case 3:
          message.price = reader.string();
          break;
        case 4:
          message.expiry = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostedPrice {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      oracle: isSet(object.oracle) ? String(object.oracle) : "",
      price: isSet(object.price) ? String(object.price) : "",
      expiry: isSet(object.expiry) ? fromJsonTimestamp(object.expiry) : undefined,
    };
  },

  toJSON(message: PostedPrice): unknown {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.oracle !== undefined && (obj.oracle = message.oracle);
    message.price !== undefined && (obj.price = message.price);
    message.expiry !== undefined && (obj.expiry = message.expiry.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostedPrice>, I>>(object: I): PostedPrice {
    const message = createBasePostedPrice();
    message.pairId = object.pairId ?? "";
    message.oracle = object.oracle ?? "";
    message.price = object.price ?? "";
    message.expiry = object.expiry ?? undefined;
    return message;
  },
};

function createBaseCurrentPrice(): CurrentPrice {
  return { pairId: "", price: "" };
}

export const CurrentPrice = {
  encode(message: CurrentPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        case 2:
          message.price = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CurrentPrice {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      price: isSet(object.price) ? String(object.price) : "",
    };
  },

  toJSON(message: CurrentPrice): unknown {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CurrentPrice>, I>>(object: I): CurrentPrice {
    const message = createBaseCurrentPrice();
    message.pairId = object.pairId ?? "";
    message.price = object.price ?? "";
    return message;
  },
};

function createBaseCurrentTWAP(): CurrentTWAP {
  return { pairId: "", numerator: "", denominator: "", price: "" };
}

export const CurrentTWAP = {
  encode(message: CurrentTWAP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.numerator !== "") {
      writer.uint32(18).string(message.numerator);
    }
    if (message.denominator !== "") {
      writer.uint32(26).string(message.denominator);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentTWAP {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentTWAP();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.string();
          break;
        case 2:
          message.numerator = reader.string();
          break;
        case 3:
          message.denominator = reader.string();
          break;
        case 4:
          message.price = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CurrentTWAP {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      numerator: isSet(object.numerator) ? String(object.numerator) : "",
      denominator: isSet(object.denominator) ? String(object.denominator) : "",
      price: isSet(object.price) ? String(object.price) : "",
    };
  },

  toJSON(message: CurrentTWAP): unknown {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.numerator !== undefined && (obj.numerator = message.numerator);
    message.denominator !== undefined && (obj.denominator = message.denominator);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CurrentTWAP>, I>>(object: I): CurrentTWAP {
    const message = createBaseCurrentTWAP();
    message.pairId = object.pairId ?? "";
    message.numerator = object.numerator ?? "";
    message.denominator = object.denominator ?? "";
    message.price = object.price ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
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
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
