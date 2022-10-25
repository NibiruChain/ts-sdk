/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "nibiru.vpool.v1";

export interface CreatePoolProposal {
  title: string;
  description: string;
  /** pair represents the pair of the vpool. */
  pair: string;
  /** trade_limit_ratio represents the limit on trading amounts. */
  tradeLimitRatio: string;
  /** quote_asset_reserve is the amount of quote asset the pool will be initialized with. */
  quoteAssetReserve: string;
  /** base_asset_reserve is the amount of base asset the pool will be initialized with. */
  baseAssetReserve: string;
  /**
   * fluctuation_limit_ratio represents the maximum price
   * percentage difference a trade can create on the pool.
   */
  fluctuationLimitRatio: string;
  /**
   * max_oracle_spread_ratio represents the maximum price percentage
   * difference that can exist between oracle price and vpool prices after a trade.
   */
  maxOracleSpreadRatio: string;
  /** maintenance_margin_ratio */
  maintenanceMarginRatio: string;
  /** max_leverage */
  maxLeverage: string;
}

function createBaseCreatePoolProposal(): CreatePoolProposal {
  return {
    title: "",
    description: "",
    pair: "",
    tradeLimitRatio: "",
    quoteAssetReserve: "",
    baseAssetReserve: "",
    fluctuationLimitRatio: "",
    maxOracleSpreadRatio: "",
    maintenanceMarginRatio: "",
    maxLeverage: "",
  };
}

export const CreatePoolProposal = {
  encode(message: CreatePoolProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.pair !== "") {
      writer.uint32(26).string(message.pair);
    }
    if (message.tradeLimitRatio !== "") {
      writer.uint32(34).string(message.tradeLimitRatio);
    }
    if (message.quoteAssetReserve !== "") {
      writer.uint32(42).string(message.quoteAssetReserve);
    }
    if (message.baseAssetReserve !== "") {
      writer.uint32(50).string(message.baseAssetReserve);
    }
    if (message.fluctuationLimitRatio !== "") {
      writer.uint32(58).string(message.fluctuationLimitRatio);
    }
    if (message.maxOracleSpreadRatio !== "") {
      writer.uint32(66).string(message.maxOracleSpreadRatio);
    }
    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(74).string(message.maintenanceMarginRatio);
    }
    if (message.maxLeverage !== "") {
      writer.uint32(82).string(message.maxLeverage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePoolProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePoolProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.pair = reader.string();
          break;
        case 4:
          message.tradeLimitRatio = reader.string();
          break;
        case 5:
          message.quoteAssetReserve = reader.string();
          break;
        case 6:
          message.baseAssetReserve = reader.string();
          break;
        case 7:
          message.fluctuationLimitRatio = reader.string();
          break;
        case 8:
          message.maxOracleSpreadRatio = reader.string();
          break;
        case 9:
          message.maintenanceMarginRatio = reader.string();
          break;
        case 10:
          message.maxLeverage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePoolProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      pair: isSet(object.pair) ? String(object.pair) : "",
      tradeLimitRatio: isSet(object.tradeLimitRatio) ? String(object.tradeLimitRatio) : "",
      quoteAssetReserve: isSet(object.quoteAssetReserve) ? String(object.quoteAssetReserve) : "",
      baseAssetReserve: isSet(object.baseAssetReserve) ? String(object.baseAssetReserve) : "",
      fluctuationLimitRatio: isSet(object.fluctuationLimitRatio) ? String(object.fluctuationLimitRatio) : "",
      maxOracleSpreadRatio: isSet(object.maxOracleSpreadRatio) ? String(object.maxOracleSpreadRatio) : "",
      maintenanceMarginRatio: isSet(object.maintenanceMarginRatio) ? String(object.maintenanceMarginRatio) : "",
      maxLeverage: isSet(object.maxLeverage) ? String(object.maxLeverage) : "",
    };
  },

  toJSON(message: CreatePoolProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.pair !== undefined && (obj.pair = message.pair);
    message.tradeLimitRatio !== undefined && (obj.tradeLimitRatio = message.tradeLimitRatio);
    message.quoteAssetReserve !== undefined && (obj.quoteAssetReserve = message.quoteAssetReserve);
    message.baseAssetReserve !== undefined && (obj.baseAssetReserve = message.baseAssetReserve);
    message.fluctuationLimitRatio !== undefined && (obj.fluctuationLimitRatio = message.fluctuationLimitRatio);
    message.maxOracleSpreadRatio !== undefined && (obj.maxOracleSpreadRatio = message.maxOracleSpreadRatio);
    message.maintenanceMarginRatio !== undefined && (obj.maintenanceMarginRatio = message.maintenanceMarginRatio);
    message.maxLeverage !== undefined && (obj.maxLeverage = message.maxLeverage);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePoolProposal>, I>>(object: I): CreatePoolProposal {
    const message = createBaseCreatePoolProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.pair = object.pair ?? "";
    message.tradeLimitRatio = object.tradeLimitRatio ?? "";
    message.quoteAssetReserve = object.quoteAssetReserve ?? "";
    message.baseAssetReserve = object.baseAssetReserve ?? "";
    message.fluctuationLimitRatio = object.fluctuationLimitRatio ?? "";
    message.maxOracleSpreadRatio = object.maxOracleSpreadRatio ?? "";
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
    message.maxLeverage = object.maxLeverage ?? "";
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
