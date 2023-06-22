/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"
import { Coin } from "../../../cosmos/base/v1beta1/coin"
import { Duration } from "../../../google/protobuf/duration"

export const protobufPackage = "nibiru.perp.v2"

/**
 * The direction that the user is trading in
 * LONG means the user is going long the base asset (e.g. buy BTC)
 * SHORT means the user is shorting the base asset (e.g. sell BTC)
 */
export enum Direction {
  DIRECTION_UNSPECIFIED = 0,
  LONG = 1,
  SHORT = 2,
  UNRECOGNIZED = -1,
}

export function directionFromJSON(object: any): Direction {
  switch (object) {
    case 0:
    case "DIRECTION_UNSPECIFIED":
      return Direction.DIRECTION_UNSPECIFIED
    case 1:
    case "LONG":
      return Direction.LONG
    case 2:
    case "SHORT":
      return Direction.SHORT
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
    case Direction.LONG:
      return "LONG"
    case Direction.SHORT:
      return "SHORT"
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

export interface Market {
  /**
   * the trading pair represented by this market
   * always BASE:QUOTE, e.g. BTC:NUSD or ETH:NUSD
   */
  pair: string
  /** whether or not the market is enabled */
  enabled: boolean
  /** the minimum margin ratio which a user must maintain on this market */
  maintenanceMarginRatio: string
  /** the maximum leverage a user is able to be taken on this market */
  maxLeverage: string
  /**
   * Latest cumulative premium fraction for a given pair.
   * Calculated once per funding rate interval.
   * A premium fraction is the difference between mark and index, divided by the
   * number of payments per day. (mark - index) / # payments in a day
   */
  latestCumulativePremiumFraction: string
  /** the percentage of the notional given to the exchange when trading */
  exchangeFeeRatio: string
  /**
   * the percentage of the notional transferred to the ecosystem fund when
   * trading
   */
  ecosystemFundFeeRatio: string
  /**
   * the percentage of liquidated position that will be
   * given to out as a reward. Half of the liquidation fee is given to the
   * liquidator, and the other half is given to the ecosystem fund.
   */
  liquidationFeeRatio: string
  /**
   * the portion of the position size we try to liquidate if the available
   * margin is higher than liquidation fee
   */
  partialLiquidationRatio: string
  /** specifies the interval on which the funding rate is updated */
  fundingRateEpochId: string
  /** amount of time to look back for TWAP calculations */
  twapLookbackWindow?: Duration
  /** the amount of collateral already credited from the ecosystem fund */
  prepaidBadDebt?: Coin
}

export interface AMM {
  /** identifies the market this AMM belongs to */
  pair: string
  /** the amount of base reserves this AMM has */
  baseReserve: string
  /** the amount of quote reserves this AMM has */
  quoteReserve: string
  /** sqrt(k) */
  sqrtDepth: string
  /** the price multiplier of the dynamic AMM */
  priceMultiplier: string
  /** Total long refers to the sum of long open notional in base. */
  totalLong: string
  /** Total short refers to the sum of short open notional in base. */
  totalShort: string
}

export interface Position {
  /** address identifies the address owner of this position */
  traderAddress: string
  /** pair identifies the pair associated with this position */
  pair: string
  /** the position size */
  size: string
  /** amount of margin remaining in the position */
  margin: string
  /** value of position in quote assets when opened */
  openNotional: string
  /**
   * The most recent cumulative premium fraction this position has.
   * Used to calculate the next funding payment.
   */
  latestCumulativePremiumFraction: string
  /** last block number this position was updated */
  lastUpdatedBlockNumber: Long
}

/** a snapshot of the perp.amm's reserves at a given point in time */
export interface ReserveSnapshot {
  amm?: AMM
  /** milliseconds since unix epoch */
  timestampMs: Long
}

function createBaseMarket(): Market {
  return {
    pair: "",
    enabled: false,
    maintenanceMarginRatio: "",
    maxLeverage: "",
    latestCumulativePremiumFraction: "",
    exchangeFeeRatio: "",
    ecosystemFundFeeRatio: "",
    liquidationFeeRatio: "",
    partialLiquidationRatio: "",
    fundingRateEpochId: "",
    twapLookbackWindow: undefined,
    prepaidBadDebt: undefined,
  }
}

export const Market = {
  encode(message: Market, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair)
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled)
    }
    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(26).string(message.maintenanceMarginRatio)
    }
    if (message.maxLeverage !== "") {
      writer.uint32(34).string(message.maxLeverage)
    }
    if (message.latestCumulativePremiumFraction !== "") {
      writer.uint32(42).string(message.latestCumulativePremiumFraction)
    }
    if (message.exchangeFeeRatio !== "") {
      writer.uint32(50).string(message.exchangeFeeRatio)
    }
    if (message.ecosystemFundFeeRatio !== "") {
      writer.uint32(58).string(message.ecosystemFundFeeRatio)
    }
    if (message.liquidationFeeRatio !== "") {
      writer.uint32(66).string(message.liquidationFeeRatio)
    }
    if (message.partialLiquidationRatio !== "") {
      writer.uint32(74).string(message.partialLiquidationRatio)
    }
    if (message.fundingRateEpochId !== "") {
      writer.uint32(82).string(message.fundingRateEpochId)
    }
    if (message.twapLookbackWindow !== undefined) {
      Duration.encode(message.twapLookbackWindow, writer.uint32(90).fork()).ldelim()
    }
    if (message.prepaidBadDebt !== undefined) {
      Coin.encode(message.prepaidBadDebt, writer.uint32(98).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Market {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMarket()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.pair = reader.string()
          continue
        case 2:
          if (tag !== 16) {
            break
          }

          message.enabled = reader.bool()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.maintenanceMarginRatio = reader.string()
          continue
        case 4:
          if (tag !== 34) {
            break
          }

          message.maxLeverage = reader.string()
          continue
        case 5:
          if (tag !== 42) {
            break
          }

          message.latestCumulativePremiumFraction = reader.string()
          continue
        case 6:
          if (tag !== 50) {
            break
          }

          message.exchangeFeeRatio = reader.string()
          continue
        case 7:
          if (tag !== 58) {
            break
          }

          message.ecosystemFundFeeRatio = reader.string()
          continue
        case 8:
          if (tag !== 66) {
            break
          }

          message.liquidationFeeRatio = reader.string()
          continue
        case 9:
          if (tag !== 74) {
            break
          }

          message.partialLiquidationRatio = reader.string()
          continue
        case 10:
          if (tag !== 82) {
            break
          }

          message.fundingRateEpochId = reader.string()
          continue
        case 11:
          if (tag !== 90) {
            break
          }

          message.twapLookbackWindow = Duration.decode(reader, reader.uint32())
          continue
        case 12:
          if (tag !== 98) {
            break
          }

          message.prepaidBadDebt = Coin.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): Market {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      maintenanceMarginRatio: isSet(object.maintenanceMarginRatio)
        ? String(object.maintenanceMarginRatio)
        : "",
      maxLeverage: isSet(object.maxLeverage) ? String(object.maxLeverage) : "",
      latestCumulativePremiumFraction: isSet(object.latestCumulativePremiumFraction)
        ? String(object.latestCumulativePremiumFraction)
        : "",
      exchangeFeeRatio: isSet(object.exchangeFeeRatio)
        ? String(object.exchangeFeeRatio)
        : "",
      ecosystemFundFeeRatio: isSet(object.ecosystemFundFeeRatio)
        ? String(object.ecosystemFundFeeRatio)
        : "",
      liquidationFeeRatio: isSet(object.liquidationFeeRatio)
        ? String(object.liquidationFeeRatio)
        : "",
      partialLiquidationRatio: isSet(object.partialLiquidationRatio)
        ? String(object.partialLiquidationRatio)
        : "",
      fundingRateEpochId: isSet(object.fundingRateEpochId)
        ? String(object.fundingRateEpochId)
        : "",
      twapLookbackWindow: isSet(object.twapLookbackWindow)
        ? Duration.fromJSON(object.twapLookbackWindow)
        : undefined,
      prepaidBadDebt: isSet(object.prepaidBadDebt)
        ? Coin.fromJSON(object.prepaidBadDebt)
        : undefined,
    }
  },

  toJSON(message: Market): unknown {
    const obj: any = {}
    message.pair !== undefined && (obj.pair = message.pair)
    message.enabled !== undefined && (obj.enabled = message.enabled)
    message.maintenanceMarginRatio !== undefined &&
      (obj.maintenanceMarginRatio = message.maintenanceMarginRatio)
    message.maxLeverage !== undefined && (obj.maxLeverage = message.maxLeverage)
    message.latestCumulativePremiumFraction !== undefined &&
      (obj.latestCumulativePremiumFraction = message.latestCumulativePremiumFraction)
    message.exchangeFeeRatio !== undefined &&
      (obj.exchangeFeeRatio = message.exchangeFeeRatio)
    message.ecosystemFundFeeRatio !== undefined &&
      (obj.ecosystemFundFeeRatio = message.ecosystemFundFeeRatio)
    message.liquidationFeeRatio !== undefined &&
      (obj.liquidationFeeRatio = message.liquidationFeeRatio)
    message.partialLiquidationRatio !== undefined &&
      (obj.partialLiquidationRatio = message.partialLiquidationRatio)
    message.fundingRateEpochId !== undefined &&
      (obj.fundingRateEpochId = message.fundingRateEpochId)
    message.twapLookbackWindow !== undefined &&
      (obj.twapLookbackWindow = message.twapLookbackWindow
        ? Duration.toJSON(message.twapLookbackWindow)
        : undefined)
    message.prepaidBadDebt !== undefined &&
      (obj.prepaidBadDebt = message.prepaidBadDebt
        ? Coin.toJSON(message.prepaidBadDebt)
        : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<Market>, I>>(base?: I): Market {
    return Market.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<Market>, I>>(object: I): Market {
    const message = createBaseMarket()
    message.pair = object.pair ?? ""
    message.enabled = object.enabled ?? false
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? ""
    message.maxLeverage = object.maxLeverage ?? ""
    message.latestCumulativePremiumFraction =
      object.latestCumulativePremiumFraction ?? ""
    message.exchangeFeeRatio = object.exchangeFeeRatio ?? ""
    message.ecosystemFundFeeRatio = object.ecosystemFundFeeRatio ?? ""
    message.liquidationFeeRatio = object.liquidationFeeRatio ?? ""
    message.partialLiquidationRatio = object.partialLiquidationRatio ?? ""
    message.fundingRateEpochId = object.fundingRateEpochId ?? ""
    message.twapLookbackWindow =
      object.twapLookbackWindow !== undefined && object.twapLookbackWindow !== null
        ? Duration.fromPartial(object.twapLookbackWindow)
        : undefined
    message.prepaidBadDebt =
      object.prepaidBadDebt !== undefined && object.prepaidBadDebt !== null
        ? Coin.fromPartial(object.prepaidBadDebt)
        : undefined
    return message
  },
}

function createBaseAMM(): AMM {
  return {
    pair: "",
    baseReserve: "",
    quoteReserve: "",
    sqrtDepth: "",
    priceMultiplier: "",
    totalLong: "",
    totalShort: "",
  }
}

export const AMM = {
  encode(message: AMM, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair)
    }
    if (message.baseReserve !== "") {
      writer.uint32(18).string(message.baseReserve)
    }
    if (message.quoteReserve !== "") {
      writer.uint32(26).string(message.quoteReserve)
    }
    if (message.sqrtDepth !== "") {
      writer.uint32(34).string(message.sqrtDepth)
    }
    if (message.priceMultiplier !== "") {
      writer.uint32(42).string(message.priceMultiplier)
    }
    if (message.totalLong !== "") {
      writer.uint32(50).string(message.totalLong)
    }
    if (message.totalShort !== "") {
      writer.uint32(58).string(message.totalShort)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AMM {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAMM()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.pair = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.baseReserve = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.quoteReserve = reader.string()
          continue
        case 4:
          if (tag !== 34) {
            break
          }

          message.sqrtDepth = reader.string()
          continue
        case 5:
          if (tag !== 42) {
            break
          }

          message.priceMultiplier = reader.string()
          continue
        case 6:
          if (tag !== 50) {
            break
          }

          message.totalLong = reader.string()
          continue
        case 7:
          if (tag !== 58) {
            break
          }

          message.totalShort = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): AMM {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      baseReserve: isSet(object.baseReserve) ? String(object.baseReserve) : "",
      quoteReserve: isSet(object.quoteReserve) ? String(object.quoteReserve) : "",
      sqrtDepth: isSet(object.sqrtDepth) ? String(object.sqrtDepth) : "",
      priceMultiplier: isSet(object.priceMultiplier)
        ? String(object.priceMultiplier)
        : "",
      totalLong: isSet(object.totalLong) ? String(object.totalLong) : "",
      totalShort: isSet(object.totalShort) ? String(object.totalShort) : "",
    }
  },

  toJSON(message: AMM): unknown {
    const obj: any = {}
    message.pair !== undefined && (obj.pair = message.pair)
    message.baseReserve !== undefined && (obj.baseReserve = message.baseReserve)
    message.quoteReserve !== undefined && (obj.quoteReserve = message.quoteReserve)
    message.sqrtDepth !== undefined && (obj.sqrtDepth = message.sqrtDepth)
    message.priceMultiplier !== undefined &&
      (obj.priceMultiplier = message.priceMultiplier)
    message.totalLong !== undefined && (obj.totalLong = message.totalLong)
    message.totalShort !== undefined && (obj.totalShort = message.totalShort)
    return obj
  },

  create<I extends Exact<DeepPartial<AMM>, I>>(base?: I): AMM {
    return AMM.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<AMM>, I>>(object: I): AMM {
    const message = createBaseAMM()
    message.pair = object.pair ?? ""
    message.baseReserve = object.baseReserve ?? ""
    message.quoteReserve = object.quoteReserve ?? ""
    message.sqrtDepth = object.sqrtDepth ?? ""
    message.priceMultiplier = object.priceMultiplier ?? ""
    message.totalLong = object.totalLong ?? ""
    message.totalShort = object.totalShort ?? ""
    return message
  },
}

function createBasePosition(): Position {
  return {
    traderAddress: "",
    pair: "",
    size: "",
    margin: "",
    openNotional: "",
    latestCumulativePremiumFraction: "",
    lastUpdatedBlockNumber: Long.ZERO,
  }
}

export const Position = {
  encode(message: Position, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.traderAddress !== "") {
      writer.uint32(10).string(message.traderAddress)
    }
    if (message.pair !== "") {
      writer.uint32(18).string(message.pair)
    }
    if (message.size !== "") {
      writer.uint32(26).string(message.size)
    }
    if (message.margin !== "") {
      writer.uint32(34).string(message.margin)
    }
    if (message.openNotional !== "") {
      writer.uint32(42).string(message.openNotional)
    }
    if (message.latestCumulativePremiumFraction !== "") {
      writer.uint32(50).string(message.latestCumulativePremiumFraction)
    }
    if (!message.lastUpdatedBlockNumber.isZero()) {
      writer.uint32(56).int64(message.lastUpdatedBlockNumber)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Position {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePosition()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.traderAddress = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.pair = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.size = reader.string()
          continue
        case 4:
          if (tag !== 34) {
            break
          }

          message.margin = reader.string()
          continue
        case 5:
          if (tag !== 42) {
            break
          }

          message.openNotional = reader.string()
          continue
        case 6:
          if (tag !== 50) {
            break
          }

          message.latestCumulativePremiumFraction = reader.string()
          continue
        case 7:
          if (tag !== 56) {
            break
          }

          message.lastUpdatedBlockNumber = reader.int64() as Long
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): Position {
    return {
      traderAddress: isSet(object.traderAddress) ? String(object.traderAddress) : "",
      pair: isSet(object.pair) ? String(object.pair) : "",
      size: isSet(object.size) ? String(object.size) : "",
      margin: isSet(object.margin) ? String(object.margin) : "",
      openNotional: isSet(object.openNotional) ? String(object.openNotional) : "",
      latestCumulativePremiumFraction: isSet(object.latestCumulativePremiumFraction)
        ? String(object.latestCumulativePremiumFraction)
        : "",
      lastUpdatedBlockNumber: isSet(object.lastUpdatedBlockNumber)
        ? Long.fromValue(object.lastUpdatedBlockNumber)
        : Long.ZERO,
    }
  },

  toJSON(message: Position): unknown {
    const obj: any = {}
    message.traderAddress !== undefined && (obj.traderAddress = message.traderAddress)
    message.pair !== undefined && (obj.pair = message.pair)
    message.size !== undefined && (obj.size = message.size)
    message.margin !== undefined && (obj.margin = message.margin)
    message.openNotional !== undefined && (obj.openNotional = message.openNotional)
    message.latestCumulativePremiumFraction !== undefined &&
      (obj.latestCumulativePremiumFraction = message.latestCumulativePremiumFraction)
    message.lastUpdatedBlockNumber !== undefined &&
      (obj.lastUpdatedBlockNumber = (
        message.lastUpdatedBlockNumber || Long.ZERO
      ).toString())
    return obj
  },

  create<I extends Exact<DeepPartial<Position>, I>>(base?: I): Position {
    return Position.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<Position>, I>>(object: I): Position {
    const message = createBasePosition()
    message.traderAddress = object.traderAddress ?? ""
    message.pair = object.pair ?? ""
    message.size = object.size ?? ""
    message.margin = object.margin ?? ""
    message.openNotional = object.openNotional ?? ""
    message.latestCumulativePremiumFraction =
      object.latestCumulativePremiumFraction ?? ""
    message.lastUpdatedBlockNumber =
      object.lastUpdatedBlockNumber !== undefined &&
      object.lastUpdatedBlockNumber !== null
        ? Long.fromValue(object.lastUpdatedBlockNumber)
        : Long.ZERO
    return message
  },
}

function createBaseReserveSnapshot(): ReserveSnapshot {
  return { amm: undefined, timestampMs: Long.ZERO }
}

export const ReserveSnapshot = {
  encode(
    message: ReserveSnapshot,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.amm !== undefined) {
      AMM.encode(message.amm, writer.uint32(10).fork()).ldelim()
    }
    if (!message.timestampMs.isZero()) {
      writer.uint32(16).int64(message.timestampMs)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReserveSnapshot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseReserveSnapshot()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.amm = AMM.decode(reader, reader.uint32())
          continue
        case 2:
          if (tag !== 16) {
            break
          }

          message.timestampMs = reader.int64() as Long
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): ReserveSnapshot {
    return {
      amm: isSet(object.amm) ? AMM.fromJSON(object.amm) : undefined,
      timestampMs: isSet(object.timestampMs)
        ? Long.fromValue(object.timestampMs)
        : Long.ZERO,
    }
  },

  toJSON(message: ReserveSnapshot): unknown {
    const obj: any = {}
    message.amm !== undefined &&
      (obj.amm = message.amm ? AMM.toJSON(message.amm) : undefined)
    message.timestampMs !== undefined &&
      (obj.timestampMs = (message.timestampMs || Long.ZERO).toString())
    return obj
  },

  create<I extends Exact<DeepPartial<ReserveSnapshot>, I>>(base?: I): ReserveSnapshot {
    return ReserveSnapshot.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<ReserveSnapshot>, I>>(
    object: I,
  ): ReserveSnapshot {
    const message = createBaseReserveSnapshot()
    message.amm =
      object.amm !== undefined && object.amm !== null
        ? AMM.fromPartial(object.amm)
        : undefined
    message.timestampMs =
      object.timestampMs !== undefined && object.timestampMs !== null
        ? Long.fromValue(object.timestampMs)
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
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never
    }

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
