/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"
import { Coin } from "../../../cosmos/base/v1beta1/coin"
import { messageTypeRegistry } from "../../../typeRegistry"
import { AMM, Market, Position } from "./state"

export const protobufPackage = "nibiru.perp.v2"

/** Emitted when a position changes. */
export interface PositionChangedEvent {
  $type: "nibiru.perp.v2.PositionChangedEvent"
  finalPosition?: Position
  /**
   * Position notional (in quote units) after the change. In general,
   * 'notional = baseAmount * priceQuotePerBase', where size is the baseAmount.
   */
  positionNotional: string
  /** Transaction fee paid. A "taker" fee. */
  transactionFee?: Coin
  /** realize profits and losses after the change */
  realizedPnl: string
  /**
   * Amount of bad debt cleared by the PerpEF during the change.
   * Bad debt is negative net margin past the liquidation point of a position.
   */
  badDebt?: Coin
  /**
   * A funding payment made or received by the trader on the current position.
   * 'fundingPayment' is positive if 'owner' is the sender and negative if 'owner'
   * is the receiver of the payment. Its magnitude is abs(size * fundingRate).
   * Funding payments act to converge the mark price and index price
   * (average price on major exchanges).
   */
  fundingPayment: string
  /** The block number at which this position was changed. */
  blockHeight: Long
  /**
   * margin_to_user is the amount of collateral received by the trader during
   * the position change. A positve value indicates that the trader received
   * funds, while a negative value indicates that the trader spent funds.
   */
  marginToUser: string
  /**
   * change_reason describes the reason for why the position resulted in a
   * change. Change type can take the following values:
   *
   * - CHANGE_REASON_UNSPECIFIED: Unspecified change reason.
   * - CHANGE_REASON_ADD_MARGIN: Margin was added to the position.
   * - CHANGE_REASON_REMOVE_MARGIN: Margin was removed from the position.
   * - CHANGE_REASON_OPEN_POSITION: A new position was opened.
   * - CHANGE_REASON_CLOSE_POSITION: An existing position was closed.
   */
  changeReason: string
}

/** Emitted when a position is liquidated. */
export interface PositionLiquidatedEvent {
  $type: "nibiru.perp.v2.PositionLiquidatedEvent"
  /** identifier of the corresponding virtual pool for the position */
  pair: string
  /** owner of the position. */
  traderAddress: string
  /**
   * margin * leverage * vPrice. 'notional' is the virtual size times  the
   * virtual price on 'perp.amm'.
   */
  exchangedQuoteAmount: string
  /**
   * virtual amount of base assets for the position, which would be margin *
   * leverage * priceBasePerQuote.
   */
  exchangedPositionSize: string
  /** Address of the account that executed the tx. */
  liquidatorAddress: string
  /** Commission (in margin units) received by 'liquidator'. */
  feeToLiquidator?: Coin
  /** Commission (in margin units) given to the ecosystem fund. */
  feeToEcosystemFund?: Coin
  /**
   * Bad debt (margin units) cleared by the PerpEF during the tx. Bad debt is
   *  negative net margin past the liquidation point of a position.
   */
  badDebt?: Coin
  /** Remaining margin in the position after liquidation */
  margin?: Coin
  /** Remaining position notional in the position after liquidation */
  positionNotional: string
  /** Remaining position size in the position after liquidation */
  positionSize: string
  /** Unrealized PnL in the position after liquidation */
  unrealizedPnl: string
  /** Spot price of the vAMM after liquidation */
  markPrice: string
  /** The block number at which this liquidation occured. */
  blockHeight: Long
  /** The unix timestamp in milliseconds at which this liquidation occured. */
  blockTimeMs: Long
}

/** Emitted when a position is settled. */
export interface PositionSettledEvent {
  $type: "nibiru.perp.v2.PositionSettledEvent"
  /** Identifier for the virtual pool of the position. */
  pair: string
  /** Owner of the position. */
  traderAddress: string
  /** Settled coin as dictated by the settlement price of the perp.amm. */
  settledCoins: Coin[]
}

/** Emitted when the funding rate changes for a market. */
export interface FundingRateChangedEvent {
  $type: "nibiru.perp.v2.FundingRateChangedEvent"
  /** The pair for which the funding rate was calculated. */
  pair: string
  /** The mark price of the pair. */
  markPriceTwap: string
  /** The oracle index price of the pair. */
  indexPriceTwap: string
  /** The latest premium fraction just calculated. */
  premiumFraction: string
  /**
   * The market's latest cumulative premium fraction.
   * The funding payment a position will pay is the difference between this
   * value and the latest cumulative premium fraction on the position,
   * multiplied by the position size.
   */
  cumulativePremiumFraction: string
}

/** Emitted when liquidation fails. */
export interface LiquidationFailedEvent {
  $type: "nibiru.perp.v2.LiquidationFailedEvent"
  /** The pair for which we are trying to liquidate. */
  pair: string
  /** owner of the position. */
  trader: string
  /** Address of the account that executed the tx. */
  liquidator: string
  /** Reason for the liquidation failure. */
  reason: LiquidationFailedEvent_LiquidationFailedReason
}

export enum LiquidationFailedEvent_LiquidationFailedReason {
  UNSPECIFIED = 0,
  /** POSITION_HEALTHY - the position is healthy and does not need to be liquidated. */
  POSITION_HEALTHY = 1,
  /** NONEXISTENT_PAIR - the pair does not exist. */
  NONEXISTENT_PAIR = 2,
  /** NONEXISTENT_POSITION - the position does not exist. */
  NONEXISTENT_POSITION = 3,
  UNRECOGNIZED = -1,
}

export function liquidationFailedEvent_LiquidationFailedReasonFromJSON(
  object: any,
): LiquidationFailedEvent_LiquidationFailedReason {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return LiquidationFailedEvent_LiquidationFailedReason.UNSPECIFIED
    case 1:
    case "POSITION_HEALTHY":
      return LiquidationFailedEvent_LiquidationFailedReason.POSITION_HEALTHY
    case 2:
    case "NONEXISTENT_PAIR":
      return LiquidationFailedEvent_LiquidationFailedReason.NONEXISTENT_PAIR
    case 3:
    case "NONEXISTENT_POSITION":
      return LiquidationFailedEvent_LiquidationFailedReason.NONEXISTENT_POSITION
    case -1:
    case "UNRECOGNIZED":
    default:
      return LiquidationFailedEvent_LiquidationFailedReason.UNRECOGNIZED
  }
}

export function liquidationFailedEvent_LiquidationFailedReasonToJSON(
  object: LiquidationFailedEvent_LiquidationFailedReason,
): string {
  switch (object) {
    case LiquidationFailedEvent_LiquidationFailedReason.UNSPECIFIED:
      return "UNSPECIFIED"
    case LiquidationFailedEvent_LiquidationFailedReason.POSITION_HEALTHY:
      return "POSITION_HEALTHY"
    case LiquidationFailedEvent_LiquidationFailedReason.NONEXISTENT_PAIR:
      return "NONEXISTENT_PAIR"
    case LiquidationFailedEvent_LiquidationFailedReason.NONEXISTENT_POSITION:
      return "NONEXISTENT_POSITION"
    case LiquidationFailedEvent_LiquidationFailedReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED"
  }
}

/**
 * This event is emitted when the amm is updated, which can be triggered by
 * the following events:
 *
 * - swap
 * - edit price multiplier
 * - edit depth
 */
export interface AmmUpdatedEvent {
  $type: "nibiru.perp.v2.AmmUpdatedEvent"
  /** the final state of the AMM */
  finalAmm?: AMM
  /** The mark price of the pair. */
  markPriceTwap: string
  /** The oracle index price of the pair. */
  indexPriceTwap: string
}

/**
 * This event is emitted at the end of every block for persisting market changes
 * off-chain
 *
 * Market changes are triggered by the following actions:
 *
 * - disabling market
 * - changing market fees
 * - bad debt is prepaid by the ecosystem fund
 */
export interface MarketUpdatedEvent {
  $type: "nibiru.perp.v2.MarketUpdatedEvent"
  /** the final state of the market */
  finalMarket?: Market
}

function createBasePositionChangedEvent(): PositionChangedEvent {
  return {
    $type: "nibiru.perp.v2.PositionChangedEvent",
    finalPosition: undefined,
    positionNotional: "",
    transactionFee: undefined,
    realizedPnl: "",
    badDebt: undefined,
    fundingPayment: "",
    blockHeight: Long.ZERO,
    marginToUser: "",
    changeReason: "",
  }
}

export const PositionChangedEvent = {
  $type: "nibiru.perp.v2.PositionChangedEvent" as const,

  encode(
    message: PositionChangedEvent,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.finalPosition !== undefined) {
      Position.encode(message.finalPosition, writer.uint32(10).fork()).ldelim()
    }
    if (message.positionNotional !== "") {
      writer.uint32(18).string(message.positionNotional)
    }
    if (message.transactionFee !== undefined) {
      Coin.encode(message.transactionFee, writer.uint32(26).fork()).ldelim()
    }
    if (message.realizedPnl !== "") {
      writer.uint32(34).string(message.realizedPnl)
    }
    if (message.badDebt !== undefined) {
      Coin.encode(message.badDebt, writer.uint32(42).fork()).ldelim()
    }
    if (message.fundingPayment !== "") {
      writer.uint32(50).string(message.fundingPayment)
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(56).int64(message.blockHeight)
    }
    if (message.marginToUser !== "") {
      writer.uint32(66).string(message.marginToUser)
    }
    if (message.changeReason !== "") {
      writer.uint32(74).string(message.changeReason)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionChangedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePositionChangedEvent()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.finalPosition = Position.decode(reader, reader.uint32())
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.positionNotional = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.transactionFee = Coin.decode(reader, reader.uint32())
          continue
        case 4:
          if (tag !== 34) {
            break
          }

          message.realizedPnl = reader.string()
          continue
        case 5:
          if (tag !== 42) {
            break
          }

          message.badDebt = Coin.decode(reader, reader.uint32())
          continue
        case 6:
          if (tag !== 50) {
            break
          }

          message.fundingPayment = reader.string()
          continue
        case 7:
          if (tag !== 56) {
            break
          }

          message.blockHeight = reader.int64() as Long
          continue
        case 8:
          if (tag !== 66) {
            break
          }

          message.marginToUser = reader.string()
          continue
        case 9:
          if (tag !== 74) {
            break
          }

          message.changeReason = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): PositionChangedEvent {
    return {
      $type: PositionChangedEvent.$type,
      finalPosition: isSet(object.finalPosition)
        ? Position.fromJSON(object.finalPosition)
        : undefined,
      positionNotional: isSet(object.positionNotional)
        ? String(object.positionNotional)
        : "",
      transactionFee: isSet(object.transactionFee)
        ? Coin.fromJSON(object.transactionFee)
        : undefined,
      realizedPnl: isSet(object.realizedPnl) ? String(object.realizedPnl) : "",
      badDebt: isSet(object.badDebt) ? Coin.fromJSON(object.badDebt) : undefined,
      fundingPayment: isSet(object.fundingPayment) ? String(object.fundingPayment) : "",
      blockHeight: isSet(object.blockHeight)
        ? Long.fromValue(object.blockHeight)
        : Long.ZERO,
      marginToUser: isSet(object.marginToUser) ? String(object.marginToUser) : "",
      changeReason: isSet(object.changeReason) ? String(object.changeReason) : "",
    }
  },

  toJSON(message: PositionChangedEvent): unknown {
    const obj: any = {}
    message.finalPosition !== undefined &&
      (obj.finalPosition = message.finalPosition
        ? Position.toJSON(message.finalPosition)
        : undefined)
    message.positionNotional !== undefined &&
      (obj.positionNotional = message.positionNotional)
    message.transactionFee !== undefined &&
      (obj.transactionFee = message.transactionFee
        ? Coin.toJSON(message.transactionFee)
        : undefined)
    message.realizedPnl !== undefined && (obj.realizedPnl = message.realizedPnl)
    message.badDebt !== undefined &&
      (obj.badDebt = message.badDebt ? Coin.toJSON(message.badDebt) : undefined)
    message.fundingPayment !== undefined &&
      (obj.fundingPayment = message.fundingPayment)
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || Long.ZERO).toString())
    message.marginToUser !== undefined && (obj.marginToUser = message.marginToUser)
    message.changeReason !== undefined && (obj.changeReason = message.changeReason)
    return obj
  },

  create<I extends Exact<DeepPartial<PositionChangedEvent>, I>>(
    base?: I,
  ): PositionChangedEvent {
    return PositionChangedEvent.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<PositionChangedEvent>, I>>(
    object: I,
  ): PositionChangedEvent {
    const message = createBasePositionChangedEvent()
    message.finalPosition =
      object.finalPosition !== undefined && object.finalPosition !== null
        ? Position.fromPartial(object.finalPosition)
        : undefined
    message.positionNotional = object.positionNotional ?? ""
    message.transactionFee =
      object.transactionFee !== undefined && object.transactionFee !== null
        ? Coin.fromPartial(object.transactionFee)
        : undefined
    message.realizedPnl = object.realizedPnl ?? ""
    message.badDebt =
      object.badDebt !== undefined && object.badDebt !== null
        ? Coin.fromPartial(object.badDebt)
        : undefined
    message.fundingPayment = object.fundingPayment ?? ""
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.ZERO
    message.marginToUser = object.marginToUser ?? ""
    message.changeReason = object.changeReason ?? ""
    return message
  },
}

messageTypeRegistry.set(PositionChangedEvent.$type, PositionChangedEvent)

function createBasePositionLiquidatedEvent(): PositionLiquidatedEvent {
  return {
    $type: "nibiru.perp.v2.PositionLiquidatedEvent",
    pair: "",
    traderAddress: "",
    exchangedQuoteAmount: "",
    exchangedPositionSize: "",
    liquidatorAddress: "",
    feeToLiquidator: undefined,
    feeToEcosystemFund: undefined,
    badDebt: undefined,
    margin: undefined,
    positionNotional: "",
    positionSize: "",
    unrealizedPnl: "",
    markPrice: "",
    blockHeight: Long.ZERO,
    blockTimeMs: Long.ZERO,
  }
}

export const PositionLiquidatedEvent = {
  $type: "nibiru.perp.v2.PositionLiquidatedEvent" as const,

  encode(
    message: PositionLiquidatedEvent,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair)
    }
    if (message.traderAddress !== "") {
      writer.uint32(18).string(message.traderAddress)
    }
    if (message.exchangedQuoteAmount !== "") {
      writer.uint32(26).string(message.exchangedQuoteAmount)
    }
    if (message.exchangedPositionSize !== "") {
      writer.uint32(34).string(message.exchangedPositionSize)
    }
    if (message.liquidatorAddress !== "") {
      writer.uint32(42).string(message.liquidatorAddress)
    }
    if (message.feeToLiquidator !== undefined) {
      Coin.encode(message.feeToLiquidator, writer.uint32(50).fork()).ldelim()
    }
    if (message.feeToEcosystemFund !== undefined) {
      Coin.encode(message.feeToEcosystemFund, writer.uint32(58).fork()).ldelim()
    }
    if (message.badDebt !== undefined) {
      Coin.encode(message.badDebt, writer.uint32(66).fork()).ldelim()
    }
    if (message.margin !== undefined) {
      Coin.encode(message.margin, writer.uint32(74).fork()).ldelim()
    }
    if (message.positionNotional !== "") {
      writer.uint32(82).string(message.positionNotional)
    }
    if (message.positionSize !== "") {
      writer.uint32(90).string(message.positionSize)
    }
    if (message.unrealizedPnl !== "") {
      writer.uint32(98).string(message.unrealizedPnl)
    }
    if (message.markPrice !== "") {
      writer.uint32(106).string(message.markPrice)
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(112).int64(message.blockHeight)
    }
    if (!message.blockTimeMs.isZero()) {
      writer.uint32(120).int64(message.blockTimeMs)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionLiquidatedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePositionLiquidatedEvent()
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

          message.traderAddress = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.exchangedQuoteAmount = reader.string()
          continue
        case 4:
          if (tag !== 34) {
            break
          }

          message.exchangedPositionSize = reader.string()
          continue
        case 5:
          if (tag !== 42) {
            break
          }

          message.liquidatorAddress = reader.string()
          continue
        case 6:
          if (tag !== 50) {
            break
          }

          message.feeToLiquidator = Coin.decode(reader, reader.uint32())
          continue
        case 7:
          if (tag !== 58) {
            break
          }

          message.feeToEcosystemFund = Coin.decode(reader, reader.uint32())
          continue
        case 8:
          if (tag !== 66) {
            break
          }

          message.badDebt = Coin.decode(reader, reader.uint32())
          continue
        case 9:
          if (tag !== 74) {
            break
          }

          message.margin = Coin.decode(reader, reader.uint32())
          continue
        case 10:
          if (tag !== 82) {
            break
          }

          message.positionNotional = reader.string()
          continue
        case 11:
          if (tag !== 90) {
            break
          }

          message.positionSize = reader.string()
          continue
        case 12:
          if (tag !== 98) {
            break
          }

          message.unrealizedPnl = reader.string()
          continue
        case 13:
          if (tag !== 106) {
            break
          }

          message.markPrice = reader.string()
          continue
        case 14:
          if (tag !== 112) {
            break
          }

          message.blockHeight = reader.int64() as Long
          continue
        case 15:
          if (tag !== 120) {
            break
          }

          message.blockTimeMs = reader.int64() as Long
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): PositionLiquidatedEvent {
    return {
      $type: PositionLiquidatedEvent.$type,
      pair: isSet(object.pair) ? String(object.pair) : "",
      traderAddress: isSet(object.traderAddress) ? String(object.traderAddress) : "",
      exchangedQuoteAmount: isSet(object.exchangedQuoteAmount)
        ? String(object.exchangedQuoteAmount)
        : "",
      exchangedPositionSize: isSet(object.exchangedPositionSize)
        ? String(object.exchangedPositionSize)
        : "",
      liquidatorAddress: isSet(object.liquidatorAddress)
        ? String(object.liquidatorAddress)
        : "",
      feeToLiquidator: isSet(object.feeToLiquidator)
        ? Coin.fromJSON(object.feeToLiquidator)
        : undefined,
      feeToEcosystemFund: isSet(object.feeToEcosystemFund)
        ? Coin.fromJSON(object.feeToEcosystemFund)
        : undefined,
      badDebt: isSet(object.badDebt) ? Coin.fromJSON(object.badDebt) : undefined,
      margin: isSet(object.margin) ? Coin.fromJSON(object.margin) : undefined,
      positionNotional: isSet(object.positionNotional)
        ? String(object.positionNotional)
        : "",
      positionSize: isSet(object.positionSize) ? String(object.positionSize) : "",
      unrealizedPnl: isSet(object.unrealizedPnl) ? String(object.unrealizedPnl) : "",
      markPrice: isSet(object.markPrice) ? String(object.markPrice) : "",
      blockHeight: isSet(object.blockHeight)
        ? Long.fromValue(object.blockHeight)
        : Long.ZERO,
      blockTimeMs: isSet(object.blockTimeMs)
        ? Long.fromValue(object.blockTimeMs)
        : Long.ZERO,
    }
  },

  toJSON(message: PositionLiquidatedEvent): unknown {
    const obj: any = {}
    message.pair !== undefined && (obj.pair = message.pair)
    message.traderAddress !== undefined && (obj.traderAddress = message.traderAddress)
    message.exchangedQuoteAmount !== undefined &&
      (obj.exchangedQuoteAmount = message.exchangedQuoteAmount)
    message.exchangedPositionSize !== undefined &&
      (obj.exchangedPositionSize = message.exchangedPositionSize)
    message.liquidatorAddress !== undefined &&
      (obj.liquidatorAddress = message.liquidatorAddress)
    message.feeToLiquidator !== undefined &&
      (obj.feeToLiquidator = message.feeToLiquidator
        ? Coin.toJSON(message.feeToLiquidator)
        : undefined)
    message.feeToEcosystemFund !== undefined &&
      (obj.feeToEcosystemFund = message.feeToEcosystemFund
        ? Coin.toJSON(message.feeToEcosystemFund)
        : undefined)
    message.badDebt !== undefined &&
      (obj.badDebt = message.badDebt ? Coin.toJSON(message.badDebt) : undefined)
    message.margin !== undefined &&
      (obj.margin = message.margin ? Coin.toJSON(message.margin) : undefined)
    message.positionNotional !== undefined &&
      (obj.positionNotional = message.positionNotional)
    message.positionSize !== undefined && (obj.positionSize = message.positionSize)
    message.unrealizedPnl !== undefined && (obj.unrealizedPnl = message.unrealizedPnl)
    message.markPrice !== undefined && (obj.markPrice = message.markPrice)
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || Long.ZERO).toString())
    message.blockTimeMs !== undefined &&
      (obj.blockTimeMs = (message.blockTimeMs || Long.ZERO).toString())
    return obj
  },

  create<I extends Exact<DeepPartial<PositionLiquidatedEvent>, I>>(
    base?: I,
  ): PositionLiquidatedEvent {
    return PositionLiquidatedEvent.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<PositionLiquidatedEvent>, I>>(
    object: I,
  ): PositionLiquidatedEvent {
    const message = createBasePositionLiquidatedEvent()
    message.pair = object.pair ?? ""
    message.traderAddress = object.traderAddress ?? ""
    message.exchangedQuoteAmount = object.exchangedQuoteAmount ?? ""
    message.exchangedPositionSize = object.exchangedPositionSize ?? ""
    message.liquidatorAddress = object.liquidatorAddress ?? ""
    message.feeToLiquidator =
      object.feeToLiquidator !== undefined && object.feeToLiquidator !== null
        ? Coin.fromPartial(object.feeToLiquidator)
        : undefined
    message.feeToEcosystemFund =
      object.feeToEcosystemFund !== undefined && object.feeToEcosystemFund !== null
        ? Coin.fromPartial(object.feeToEcosystemFund)
        : undefined
    message.badDebt =
      object.badDebt !== undefined && object.badDebt !== null
        ? Coin.fromPartial(object.badDebt)
        : undefined
    message.margin =
      object.margin !== undefined && object.margin !== null
        ? Coin.fromPartial(object.margin)
        : undefined
    message.positionNotional = object.positionNotional ?? ""
    message.positionSize = object.positionSize ?? ""
    message.unrealizedPnl = object.unrealizedPnl ?? ""
    message.markPrice = object.markPrice ?? ""
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.ZERO
    message.blockTimeMs =
      object.blockTimeMs !== undefined && object.blockTimeMs !== null
        ? Long.fromValue(object.blockTimeMs)
        : Long.ZERO
    return message
  },
}

messageTypeRegistry.set(PositionLiquidatedEvent.$type, PositionLiquidatedEvent)

function createBasePositionSettledEvent(): PositionSettledEvent {
  return {
    $type: "nibiru.perp.v2.PositionSettledEvent",
    pair: "",
    traderAddress: "",
    settledCoins: [],
  }
}

export const PositionSettledEvent = {
  $type: "nibiru.perp.v2.PositionSettledEvent" as const,

  encode(
    message: PositionSettledEvent,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair)
    }
    if (message.traderAddress !== "") {
      writer.uint32(18).string(message.traderAddress)
    }
    for (const v of message.settledCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionSettledEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePositionSettledEvent()
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

          message.traderAddress = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.settledCoins.push(Coin.decode(reader, reader.uint32()))
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): PositionSettledEvent {
    return {
      $type: PositionSettledEvent.$type,
      pair: isSet(object.pair) ? String(object.pair) : "",
      traderAddress: isSet(object.traderAddress) ? String(object.traderAddress) : "",
      settledCoins: Array.isArray(object?.settledCoins)
        ? object.settledCoins.map((e: any) => Coin.fromJSON(e))
        : [],
    }
  },

  toJSON(message: PositionSettledEvent): unknown {
    const obj: any = {}
    message.pair !== undefined && (obj.pair = message.pair)
    message.traderAddress !== undefined && (obj.traderAddress = message.traderAddress)
    if (message.settledCoins) {
      obj.settledCoins = message.settledCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      )
    } else {
      obj.settledCoins = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<PositionSettledEvent>, I>>(
    base?: I,
  ): PositionSettledEvent {
    return PositionSettledEvent.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<PositionSettledEvent>, I>>(
    object: I,
  ): PositionSettledEvent {
    const message = createBasePositionSettledEvent()
    message.pair = object.pair ?? ""
    message.traderAddress = object.traderAddress ?? ""
    message.settledCoins = object.settledCoins?.map((e) => Coin.fromPartial(e)) || []
    return message
  },
}

messageTypeRegistry.set(PositionSettledEvent.$type, PositionSettledEvent)

function createBaseFundingRateChangedEvent(): FundingRateChangedEvent {
  return {
    $type: "nibiru.perp.v2.FundingRateChangedEvent",
    pair: "",
    markPriceTwap: "",
    indexPriceTwap: "",
    premiumFraction: "",
    cumulativePremiumFraction: "",
  }
}

export const FundingRateChangedEvent = {
  $type: "nibiru.perp.v2.FundingRateChangedEvent" as const,

  encode(
    message: FundingRateChangedEvent,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair)
    }
    if (message.markPriceTwap !== "") {
      writer.uint32(18).string(message.markPriceTwap)
    }
    if (message.indexPriceTwap !== "") {
      writer.uint32(26).string(message.indexPriceTwap)
    }
    if (message.premiumFraction !== "") {
      writer.uint32(42).string(message.premiumFraction)
    }
    if (message.cumulativePremiumFraction !== "") {
      writer.uint32(50).string(message.cumulativePremiumFraction)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FundingRateChangedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseFundingRateChangedEvent()
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

          message.markPriceTwap = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.indexPriceTwap = reader.string()
          continue
        case 5:
          if (tag !== 42) {
            break
          }

          message.premiumFraction = reader.string()
          continue
        case 6:
          if (tag !== 50) {
            break
          }

          message.cumulativePremiumFraction = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): FundingRateChangedEvent {
    return {
      $type: FundingRateChangedEvent.$type,
      pair: isSet(object.pair) ? String(object.pair) : "",
      markPriceTwap: isSet(object.markPriceTwap) ? String(object.markPriceTwap) : "",
      indexPriceTwap: isSet(object.indexPriceTwap) ? String(object.indexPriceTwap) : "",
      premiumFraction: isSet(object.premiumFraction)
        ? String(object.premiumFraction)
        : "",
      cumulativePremiumFraction: isSet(object.cumulativePremiumFraction)
        ? String(object.cumulativePremiumFraction)
        : "",
    }
  },

  toJSON(message: FundingRateChangedEvent): unknown {
    const obj: any = {}
    message.pair !== undefined && (obj.pair = message.pair)
    message.markPriceTwap !== undefined && (obj.markPriceTwap = message.markPriceTwap)
    message.indexPriceTwap !== undefined &&
      (obj.indexPriceTwap = message.indexPriceTwap)
    message.premiumFraction !== undefined &&
      (obj.premiumFraction = message.premiumFraction)
    message.cumulativePremiumFraction !== undefined &&
      (obj.cumulativePremiumFraction = message.cumulativePremiumFraction)
    return obj
  },

  create<I extends Exact<DeepPartial<FundingRateChangedEvent>, I>>(
    base?: I,
  ): FundingRateChangedEvent {
    return FundingRateChangedEvent.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<FundingRateChangedEvent>, I>>(
    object: I,
  ): FundingRateChangedEvent {
    const message = createBaseFundingRateChangedEvent()
    message.pair = object.pair ?? ""
    message.markPriceTwap = object.markPriceTwap ?? ""
    message.indexPriceTwap = object.indexPriceTwap ?? ""
    message.premiumFraction = object.premiumFraction ?? ""
    message.cumulativePremiumFraction = object.cumulativePremiumFraction ?? ""
    return message
  },
}

messageTypeRegistry.set(FundingRateChangedEvent.$type, FundingRateChangedEvent)

function createBaseLiquidationFailedEvent(): LiquidationFailedEvent {
  return {
    $type: "nibiru.perp.v2.LiquidationFailedEvent",
    pair: "",
    trader: "",
    liquidator: "",
    reason: 0,
  }
}

export const LiquidationFailedEvent = {
  $type: "nibiru.perp.v2.LiquidationFailedEvent" as const,

  encode(
    message: LiquidationFailedEvent,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair)
    }
    if (message.trader !== "") {
      writer.uint32(18).string(message.trader)
    }
    if (message.liquidator !== "") {
      writer.uint32(26).string(message.liquidator)
    }
    if (message.reason !== 0) {
      writer.uint32(32).int32(message.reason)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidationFailedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseLiquidationFailedEvent()
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

          message.trader = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.liquidator = reader.string()
          continue
        case 4:
          if (tag !== 32) {
            break
          }

          message.reason = reader.int32() as any
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): LiquidationFailedEvent {
    return {
      $type: LiquidationFailedEvent.$type,
      pair: isSet(object.pair) ? String(object.pair) : "",
      trader: isSet(object.trader) ? String(object.trader) : "",
      liquidator: isSet(object.liquidator) ? String(object.liquidator) : "",
      reason: isSet(object.reason)
        ? liquidationFailedEvent_LiquidationFailedReasonFromJSON(object.reason)
        : 0,
    }
  },

  toJSON(message: LiquidationFailedEvent): unknown {
    const obj: any = {}
    message.pair !== undefined && (obj.pair = message.pair)
    message.trader !== undefined && (obj.trader = message.trader)
    message.liquidator !== undefined && (obj.liquidator = message.liquidator)
    message.reason !== undefined &&
      (obj.reason = liquidationFailedEvent_LiquidationFailedReasonToJSON(
        message.reason,
      ))
    return obj
  },

  create<I extends Exact<DeepPartial<LiquidationFailedEvent>, I>>(
    base?: I,
  ): LiquidationFailedEvent {
    return LiquidationFailedEvent.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<LiquidationFailedEvent>, I>>(
    object: I,
  ): LiquidationFailedEvent {
    const message = createBaseLiquidationFailedEvent()
    message.pair = object.pair ?? ""
    message.trader = object.trader ?? ""
    message.liquidator = object.liquidator ?? ""
    message.reason = object.reason ?? 0
    return message
  },
}

messageTypeRegistry.set(LiquidationFailedEvent.$type, LiquidationFailedEvent)

function createBaseAmmUpdatedEvent(): AmmUpdatedEvent {
  return {
    $type: "nibiru.perp.v2.AmmUpdatedEvent",
    finalAmm: undefined,
    markPriceTwap: "",
    indexPriceTwap: "",
  }
}

export const AmmUpdatedEvent = {
  $type: "nibiru.perp.v2.AmmUpdatedEvent" as const,

  encode(
    message: AmmUpdatedEvent,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.finalAmm !== undefined) {
      AMM.encode(message.finalAmm, writer.uint32(10).fork()).ldelim()
    }
    if (message.markPriceTwap !== "") {
      writer.uint32(18).string(message.markPriceTwap)
    }
    if (message.indexPriceTwap !== "") {
      writer.uint32(26).string(message.indexPriceTwap)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AmmUpdatedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAmmUpdatedEvent()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.finalAmm = AMM.decode(reader, reader.uint32())
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.markPriceTwap = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.indexPriceTwap = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): AmmUpdatedEvent {
    return {
      $type: AmmUpdatedEvent.$type,
      finalAmm: isSet(object.finalAmm) ? AMM.fromJSON(object.finalAmm) : undefined,
      markPriceTwap: isSet(object.markPriceTwap) ? String(object.markPriceTwap) : "",
      indexPriceTwap: isSet(object.indexPriceTwap) ? String(object.indexPriceTwap) : "",
    }
  },

  toJSON(message: AmmUpdatedEvent): unknown {
    const obj: any = {}
    message.finalAmm !== undefined &&
      (obj.finalAmm = message.finalAmm ? AMM.toJSON(message.finalAmm) : undefined)
    message.markPriceTwap !== undefined && (obj.markPriceTwap = message.markPriceTwap)
    message.indexPriceTwap !== undefined &&
      (obj.indexPriceTwap = message.indexPriceTwap)
    return obj
  },

  create<I extends Exact<DeepPartial<AmmUpdatedEvent>, I>>(base?: I): AmmUpdatedEvent {
    return AmmUpdatedEvent.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<AmmUpdatedEvent>, I>>(
    object: I,
  ): AmmUpdatedEvent {
    const message = createBaseAmmUpdatedEvent()
    message.finalAmm =
      object.finalAmm !== undefined && object.finalAmm !== null
        ? AMM.fromPartial(object.finalAmm)
        : undefined
    message.markPriceTwap = object.markPriceTwap ?? ""
    message.indexPriceTwap = object.indexPriceTwap ?? ""
    return message
  },
}

messageTypeRegistry.set(AmmUpdatedEvent.$type, AmmUpdatedEvent)

function createBaseMarketUpdatedEvent(): MarketUpdatedEvent {
  return { $type: "nibiru.perp.v2.MarketUpdatedEvent", finalMarket: undefined }
}

export const MarketUpdatedEvent = {
  $type: "nibiru.perp.v2.MarketUpdatedEvent" as const,

  encode(
    message: MarketUpdatedEvent,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.finalMarket !== undefined) {
      Market.encode(message.finalMarket, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketUpdatedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMarketUpdatedEvent()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.finalMarket = Market.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MarketUpdatedEvent {
    return {
      $type: MarketUpdatedEvent.$type,
      finalMarket: isSet(object.finalMarket)
        ? Market.fromJSON(object.finalMarket)
        : undefined,
    }
  },

  toJSON(message: MarketUpdatedEvent): unknown {
    const obj: any = {}
    message.finalMarket !== undefined &&
      (obj.finalMarket = message.finalMarket
        ? Market.toJSON(message.finalMarket)
        : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<MarketUpdatedEvent>, I>>(
    base?: I,
  ): MarketUpdatedEvent {
    return MarketUpdatedEvent.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MarketUpdatedEvent>, I>>(
    object: I,
  ): MarketUpdatedEvent {
    const message = createBaseMarketUpdatedEvent()
    message.finalMarket =
      object.finalMarket !== undefined && object.finalMarket !== null
        ? Market.fromPartial(object.finalMarket)
        : undefined
    return message
  },
}

messageTypeRegistry.set(MarketUpdatedEvent.$type, MarketUpdatedEvent)

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
  ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never
    }

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
