/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "nibiru.oracle.v1beta1";

/** a snapshot of the prices at a given point in time */
export interface PriceSnapshot {
  pair: string;
  price: string;
  /** milliseconds since unix epoch */
  timestampMs: Long;
}

function createBasePriceSnapshot(): PriceSnapshot {
  return { pair: "", price: "", timestampMs: Long.ZERO };
}

export const PriceSnapshot = {
  encode(message: PriceSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    if (!message.timestampMs.isZero()) {
      writer.uint32(24).int64(message.timestampMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceSnapshot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceSnapshot();
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
          if (tag != 24) {
            break;
          }

          message.timestampMs = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PriceSnapshot {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      price: isSet(object.price) ? String(object.price) : "",
      timestampMs: isSet(object.timestampMs) ? Long.fromValue(object.timestampMs) : Long.ZERO,
    };
  },

  toJSON(message: PriceSnapshot): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair);
    message.price !== undefined && (obj.price = message.price);
    message.timestampMs !== undefined && (obj.timestampMs = (message.timestampMs || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<PriceSnapshot>, I>>(base?: I): PriceSnapshot {
    return PriceSnapshot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PriceSnapshot>, I>>(object: I): PriceSnapshot {
    const message = createBasePriceSnapshot();
    message.pair = object.pair ?? "";
    message.price = object.price ?? "";
    message.timestampMs = (object.timestampMs !== undefined && object.timestampMs !== null)
      ? Long.fromValue(object.timestampMs)
      : Long.ZERO;
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
