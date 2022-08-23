/* eslint-disable */
import { AssetPair } from "../../common/common"
import Long from "long"
import _m0 from "protobufjs/minimal"

export const protobufPackage = "nibiru.vpool.v1"

export enum Direction {
  DIRECTION_UNSPECIFIED = 0,
  ADD_TO_POOL = 1,
  REMOVE_FROM_POOL = 2,
  UNRECOGNIZED = -1,
}

export function directionFromJSON(object: any): Direction {
  switch (object) {
    case 0:
    case "DIRECTION_UNSPECIFIED":
      return Direction.DIRECTION_UNSPECIFIED
    case 1:
    case "ADD_TO_POOL":
      return Direction.ADD_TO_POOL
    case 2:
    case "REMOVE_FROM_POOL":
      return Direction.REMOVE_FROM_POOL
    case -1:
    case "UNRECOGNIZED":
    default:
      return Direction.UNRECOGNIZED
  }
}

export function directionToJSON(object: Direction): string {
  switch (object) {
    case Direction.DIRECTION_UNSPECIFIED:
      return "DIRECTION_UNSPECIFIED"
    case Direction.ADD_TO_POOL:
      return "ADD_TO_POOL"
    case Direction.REMOVE_FROM_POOL:
      return "REMOVE_FROM_POOL"
    case Direction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED"
  }
}

/** Enumerates different options of calculating twap. */
export enum TwapCalcOption {
  TWAP_CALC_OPTION_UNSPECIFIED = 0,
  /** SPOT - Spot price from quote asset reserve / base asset reserve */
  SPOT = 1,
  /** QUOTE_ASSET_SWAP - Swapping with quote assets, output denominated in base assets */
  QUOTE_ASSET_SWAP = 2,
  /** BASE_ASSET_SWAP - Swapping with base assets, output denominated in quote assets */
  BASE_ASSET_SWAP = 3,
  UNRECOGNIZED = -1,
}

export function twapCalcOptionFromJSON(object: any): TwapCalcOption {
  switch (object) {
    case 0:
    case "TWAP_CALC_OPTION_UNSPECIFIED":
      return TwapCalcOption.TWAP_CALC_OPTION_UNSPECIFIED
    case 1:
    case "SPOT":
      return TwapCalcOption.SPOT
    case 2:
    case "QUOTE_ASSET_SWAP":
      return TwapCalcOption.QUOTE_ASSET_SWAP
    case 3:
    case "BASE_ASSET_SWAP":
      return TwapCalcOption.BASE_ASSET_SWAP
    case -1:
    case "UNRECOGNIZED":
    default:
      return TwapCalcOption.UNRECOGNIZED
  }
}

export function twapCalcOptionToJSON(object: TwapCalcOption): string {
  switch (object) {
    case TwapCalcOption.TWAP_CALC_OPTION_UNSPECIFIED:
      return "TWAP_CALC_OPTION_UNSPECIFIED"
    case TwapCalcOption.SPOT:
      return "SPOT"
    case TwapCalcOption.QUOTE_ASSET_SWAP:
      return "QUOTE_ASSET_SWAP"
    case TwapCalcOption.BASE_ASSET_SWAP:
      return "BASE_ASSET_SWAP"
    case TwapCalcOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED"
  }
}

/** a snapshot of the vpool's reserves at a given point in time */
export interface ReserveSnapshot {
  baseAssetReserve: string
  /** quote asset is usually the margin asset, e.g. NUSD */
  quoteAssetReserve: string
  /** milliseconds since unix epoch */
  timestampMs: Long
  blockNumber: Long
}

/**
 * A virtual pool used only for price discovery of perpetual futures contracts.
 * No real liquidity exists in this pool.
 */
export interface Pool {
  /** always BASE:QUOTE, e.g. BTC:NUSD or ETH:NUSD */
  pair?: AssetPair
  /** base asset is the crypto asset, e.g. BTC or ETH */
  baseAssetReserve: string
  /** quote asset is usually stablecoin, in our case NUSD */
  quoteAssetReserve: string
  /** ratio applied to reserves in order not to over trade */
  tradeLimitRatio: string
  /** percentage that a single open or close position can alter the reserve amounts */
  fluctuationLimitRatio: string
  /** max_oracle_spread_ratio */
  maxOracleSpreadRatio: string
  /** maintenance_margin_ratio */
  maintenanceMarginRatio: string
  /** max_leverage */
  maxLeverage: string
}

export interface PoolPrices {
  /**
   * MarkPrice is the instantaneous price of the perp.
   * Equivalent to quoteAssetReserve / baseAssetReserve.
   */
  markPrice: string
  /** IndexPrice is the price of the "underlying" for the perp */
  indexPrice: string
  /** TwapMark is the time-weighted average (mark) price. */
  twapMark: string
  /** SwapInvariant is the product of the reserves, commonly referred to as "k". */
  swapInvariant: string
  /** The block number corresponding to each price */
  blockNumber: Long
}

function createBaseReserveSnapshot(): ReserveSnapshot {
  return {
    baseAssetReserve: "",
    quoteAssetReserve: "",
    timestampMs: Long.ZERO,
    blockNumber: Long.ZERO,
  }
}

export const ReserveSnapshot = {
  encode(
    message: ReserveSnapshot,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.baseAssetReserve !== "") {
      writer.uint32(10).string(message.baseAssetReserve)
    }
    if (message.quoteAssetReserve !== "") {
      writer.uint32(18).string(message.quoteAssetReserve)
    }
    if (!message.timestampMs.isZero()) {
      writer.uint32(24).int64(message.timestampMs)
    }
    if (!message.blockNumber.isZero()) {
      writer.uint32(32).int64(message.blockNumber)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReserveSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseReserveSnapshot()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.baseAssetReserve = reader.string()
          break
        case 2:
          message.quoteAssetReserve = reader.string()
          break
        case 3:
          message.timestampMs = reader.int64() as Long
          break
        case 4:
          message.blockNumber = reader.int64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ReserveSnapshot {
    return {
      baseAssetReserve: isSet(object.baseAssetReserve)
        ? String(object.baseAssetReserve)
        : "",
      quoteAssetReserve: isSet(object.quoteAssetReserve)
        ? String(object.quoteAssetReserve)
        : "",
      timestampMs: isSet(object.timestampMs)
        ? Long.fromValue(object.timestampMs)
        : Long.ZERO,
      blockNumber: isSet(object.blockNumber)
        ? Long.fromValue(object.blockNumber)
        : Long.ZERO,
    }
  },

  toJSON(message: ReserveSnapshot): unknown {
    const obj: any = {}
    message.baseAssetReserve !== undefined &&
      (obj.baseAssetReserve = message.baseAssetReserve)
    message.quoteAssetReserve !== undefined &&
      (obj.quoteAssetReserve = message.quoteAssetReserve)
    message.timestampMs !== undefined &&
      (obj.timestampMs = (message.timestampMs || Long.ZERO).toString())
    message.blockNumber !== undefined &&
      (obj.blockNumber = (message.blockNumber || Long.ZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ReserveSnapshot>, I>>(
    object: I,
  ): ReserveSnapshot {
    const message = createBaseReserveSnapshot()
    message.baseAssetReserve = object.baseAssetReserve ?? ""
    message.quoteAssetReserve = object.quoteAssetReserve ?? ""
    message.timestampMs =
      object.timestampMs !== undefined && object.timestampMs !== null
        ? Long.fromValue(object.timestampMs)
        : Long.ZERO
    message.blockNumber =
      object.blockNumber !== undefined && object.blockNumber !== null
        ? Long.fromValue(object.blockNumber)
        : Long.ZERO
    return message
  },
}

function createBasePool(): Pool {
  return {
    pair: undefined,
    baseAssetReserve: "",
    quoteAssetReserve: "",
    tradeLimitRatio: "",
    fluctuationLimitRatio: "",
    maxOracleSpreadRatio: "",
    maintenanceMarginRatio: "",
    maxLeverage: "",
  }
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== undefined) {
      AssetPair.encode(message.pair, writer.uint32(10).fork()).ldelim()
    }
    if (message.baseAssetReserve !== "") {
      writer.uint32(18).string(message.baseAssetReserve)
    }
    if (message.quoteAssetReserve !== "") {
      writer.uint32(26).string(message.quoteAssetReserve)
    }
    if (message.tradeLimitRatio !== "") {
      writer.uint32(34).string(message.tradeLimitRatio)
    }
    if (message.fluctuationLimitRatio !== "") {
      writer.uint32(42).string(message.fluctuationLimitRatio)
    }
    if (message.maxOracleSpreadRatio !== "") {
      writer.uint32(50).string(message.maxOracleSpreadRatio)
    }
    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(58).string(message.maintenanceMarginRatio)
    }
    if (message.maxLeverage !== "") {
      writer.uint32(66).string(message.maxLeverage)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePool()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pair = AssetPair.decode(reader, reader.uint32())
          break
        case 2:
          message.baseAssetReserve = reader.string()
          break
        case 3:
          message.quoteAssetReserve = reader.string()
          break
        case 4:
          message.tradeLimitRatio = reader.string()
          break
        case 5:
          message.fluctuationLimitRatio = reader.string()
          break
        case 6:
          message.maxOracleSpreadRatio = reader.string()
          break
        case 7:
          message.maintenanceMarginRatio = reader.string()
          break
        case 8:
          message.maxLeverage = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Pool {
    return {
      pair: isSet(object.pair) ? AssetPair.fromJSON(object.pair) : undefined,
      baseAssetReserve: isSet(object.baseAssetReserve)
        ? String(object.baseAssetReserve)
        : "",
      quoteAssetReserve: isSet(object.quoteAssetReserve)
        ? String(object.quoteAssetReserve)
        : "",
      tradeLimitRatio: isSet(object.tradeLimitRatio)
        ? String(object.tradeLimitRatio)
        : "",
      fluctuationLimitRatio: isSet(object.fluctuationLimitRatio)
        ? String(object.fluctuationLimitRatio)
        : "",
      maxOracleSpreadRatio: isSet(object.maxOracleSpreadRatio)
        ? String(object.maxOracleSpreadRatio)
        : "",
      maintenanceMarginRatio: isSet(object.maintenanceMarginRatio)
        ? String(object.maintenanceMarginRatio)
        : "",
      maxLeverage: isSet(object.maxLeverage) ? String(object.maxLeverage) : "",
    }
  },

  toJSON(message: Pool): unknown {
    const obj: any = {}
    message.pair !== undefined &&
      (obj.pair = message.pair ? AssetPair.toJSON(message.pair) : undefined)
    message.baseAssetReserve !== undefined &&
      (obj.baseAssetReserve = message.baseAssetReserve)
    message.quoteAssetReserve !== undefined &&
      (obj.quoteAssetReserve = message.quoteAssetReserve)
    message.tradeLimitRatio !== undefined &&
      (obj.tradeLimitRatio = message.tradeLimitRatio)
    message.fluctuationLimitRatio !== undefined &&
      (obj.fluctuationLimitRatio = message.fluctuationLimitRatio)
    message.maxOracleSpreadRatio !== undefined &&
      (obj.maxOracleSpreadRatio = message.maxOracleSpreadRatio)
    message.maintenanceMarginRatio !== undefined &&
      (obj.maintenanceMarginRatio = message.maintenanceMarginRatio)
    message.maxLeverage !== undefined && (obj.maxLeverage = message.maxLeverage)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool()
    message.pair =
      object.pair !== undefined && object.pair !== null
        ? AssetPair.fromPartial(object.pair)
        : undefined
    message.baseAssetReserve = object.baseAssetReserve ?? ""
    message.quoteAssetReserve = object.quoteAssetReserve ?? ""
    message.tradeLimitRatio = object.tradeLimitRatio ?? ""
    message.fluctuationLimitRatio = object.fluctuationLimitRatio ?? ""
    message.maxOracleSpreadRatio = object.maxOracleSpreadRatio ?? ""
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? ""
    message.maxLeverage = object.maxLeverage ?? ""
    return message
  },
}

function createBasePoolPrices(): PoolPrices {
  return {
    markPrice: "",
    indexPrice: "",
    twapMark: "",
    swapInvariant: "",
    blockNumber: Long.ZERO,
  }
}

export const PoolPrices = {
  encode(message: PoolPrices, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.markPrice !== "") {
      writer.uint32(82).string(message.markPrice)
    }
    if (message.indexPrice !== "") {
      writer.uint32(90).string(message.indexPrice)
    }
    if (message.twapMark !== "") {
      writer.uint32(98).string(message.twapMark)
    }
    if (message.swapInvariant !== "") {
      writer.uint32(106).string(message.swapInvariant)
    }
    if (!message.blockNumber.isZero()) {
      writer.uint32(112).int64(message.blockNumber)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolPrices {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePoolPrices()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 10:
          message.markPrice = reader.string()
          break
        case 11:
          message.indexPrice = reader.string()
          break
        case 12:
          message.twapMark = reader.string()
          break
        case 13:
          message.swapInvariant = reader.string()
          break
        case 14:
          message.blockNumber = reader.int64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PoolPrices {
    return {
      markPrice: isSet(object.markPrice) ? String(object.markPrice) : "",
      indexPrice: isSet(object.indexPrice) ? String(object.indexPrice) : "",
      twapMark: isSet(object.twapMark) ? String(object.twapMark) : "",
      swapInvariant: isSet(object.swapInvariant) ? String(object.swapInvariant) : "",
      blockNumber: isSet(object.blockNumber)
        ? Long.fromValue(object.blockNumber)
        : Long.ZERO,
    }
  },

  toJSON(message: PoolPrices): unknown {
    const obj: any = {}
    message.markPrice !== undefined && (obj.markPrice = message.markPrice)
    message.indexPrice !== undefined && (obj.indexPrice = message.indexPrice)
    message.twapMark !== undefined && (obj.twapMark = message.twapMark)
    message.swapInvariant !== undefined && (obj.swapInvariant = message.swapInvariant)
    message.blockNumber !== undefined &&
      (obj.blockNumber = (message.blockNumber || Long.ZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PoolPrices>, I>>(object: I): PoolPrices {
    const message = createBasePoolPrices()
    message.markPrice = object.markPrice ?? ""
    message.indexPrice = object.indexPrice ?? ""
    message.twapMark = object.twapMark ?? ""
    message.swapInvariant = object.swapInvariant ?? ""
    message.blockNumber =
      object.blockNumber !== undefined && object.blockNumber !== null
        ? Long.fromValue(object.blockNumber)
        : Long.ZERO
    return message
  },
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
