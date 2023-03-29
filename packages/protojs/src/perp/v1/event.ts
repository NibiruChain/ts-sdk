/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "nibiru.perp.v1";

/**
 * Emitted when a position changes.
 * TODO: Is there a way to split this into different events without creating too much complexity?
 */
export interface PositionChangedEvent {
  /** identifier of the corresponding virtual pool for the position */
  pair: string;
  /** owner of the position. */
  traderAddress: string;
  /** Amount of collateral (quote units) backing the position after the change. */
  margin?: Coin;
  /**
   * Position notional (quote units) after the change. In general,
   * 'notional = baseAmount * priceQuotePerBase', where size is the baseAmount.
   */
  positionNotional: string;
  /**
   * Exchanged size is the magnitude of the change to position size (base units).
   * The size is a signed quantity expressing how much exposure a position has in
   * base units of the pair.
   */
  exchangedSize: string;
  /**
   * Exchanged notional is the value of the exchanged size in quote units.
   * exchangedNotional = posBefore.OpenNotional + (direction * realizedPnl),
   * where 'posBefore' is the position before the change, and
   * direction is 1 if posBefore.Size > 0 or -1 if posBefore.Size < 0,
   */
  exchangedNotional: string;
  /** Transaction fee paid. A "taker" fee. */
  transactionFee?: Coin;
  /** Position size after the change. */
  positionSize: string;
  /** realize profits and losses after the change */
  realizedPnl: string;
  /** unrealized profits and losses after the change */
  unrealizedPnlAfter: string;
  /**
   * Amount of bad debt cleared by the PerpEF during the change.
   * Bad debt is negative net margin past the liquidation point of a position.
   */
  badDebt?: Coin;
  /**
   * Mark price, synonymous with mark price in this context, is the quotient of
   * the quote reserves and base reserves
   */
  markPrice: string;
  /**
   * A funding payment made or received by the trader on the current position.
   * 'fundingPayment' is positive if 'owner' is the sender and negative if 'owner'
   * is the receiver of the payment. Its magnitude is abs(vSize * fundingRate).
   * Funding payments act to converge the mark price (vPrice) and index price
   * (average price on major exchanges).
   */
  fundingPayment: string;
  /** The block number at which this position was changed. */
  blockHeight: Long;
  /** The block time in unix milliseconds at which this position was changed. */
  blockTimeMs: Long;
}

/** Emitted when a position is liquidated. */
export interface PositionLiquidatedEvent {
  /** identifier of the corresponding virtual pool for the position */
  pair: string;
  /** owner of the position. */
  traderAddress: string;
  /** margin * leverage * vPrice. 'notional' is the virtual size times  the virtual price on 'vpool'. */
  exchangedQuoteAmount: string;
  /** virtual amount of base assets for the position, which would be margin * leverage * priceBasePerQuote. */
  exchangedPositionSize: string;
  /** Address of the account that executed the tx. */
  liquidatorAddress: string;
  /** Commission (in margin units) received by 'liquidator'. */
  feeToLiquidator?: Coin;
  /** Commission (in margin units) given to the ecosystem fund. */
  feeToEcosystemFund?: Coin;
  /** Bad debt (margin units) cleared by the PerpEF during the tx. Bad debt is negative net margin past the liquidation point of a position. */
  badDebt?: Coin;
  /** Remaining margin in the position after liquidation */
  margin?: Coin;
  /** Remaining position notional in the position after liquidation */
  positionNotional: string;
  /** Remaining position size in the position after liquidation */
  positionSize: string;
  /** Unrealized PnL in the position after liquidation */
  unrealizedPnl: string;
  /** Spot price of the vAMM after liquidation */
  markPrice: string;
  /** The block number at which this liquidation occured. */
  blockHeight: Long;
  /** The unix timestamp in milliseconds at which this liquidation occured. */
  blockTimeMs: Long;
}

/** Emitted when a position is settled. */
export interface PositionSettledEvent {
  /** Identifier for the virtual pool of the position. */
  pair: string;
  /** Owner of the position. */
  traderAddress: string;
  /** Settled coin as dictated by the settlement price of the vpool. */
  settledCoins: Coin[];
}

/** Emitted when a new funding rate is calculated. */
export interface FundingRateChangedEvent {
  /** The pair for which the funding rate was calculated. */
  pair: string;
  /** The mark price of the pair. */
  markPrice: string;
  /** The oracle index price of the pair. */
  indexPrice: string;
  /** The latest funding rate. */
  latestFundingRate: string;
  /** The latest premium fraction just calculated. */
  latestPremiumFraction: string;
  /**
   * The latest cumulative premium fraction.
   * The funding payment a position will pay is the difference between this value
   * and the latest cumulative premium fraction on the position, multiplied by the position size.
   */
  cumulativePremiumFraction: string;
  /** The block number at which the funding rate was calculated. */
  blockHeight: Long;
  /** The block time in unix milliseconds at which the funding rate was calculated. */
  blockTimeMs: Long;
}

/** Emitted when liquidation fails. */
export interface LiquidationFailedEvent {
  /** The pair for which we are trying to liquidate. */
  pair: string;
  /** owner of the position. */
  trader: string;
  /** Address of the account that executed the tx. */
  liquidator: string;
  /** Reason for the liquidation failure. */
  reason: LiquidationFailedEvent_LiquidationFailedReason;
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
      return LiquidationFailedEvent_LiquidationFailedReason.UNSPECIFIED;
    case 1:
    case "POSITION_HEALTHY":
      return LiquidationFailedEvent_LiquidationFailedReason.POSITION_HEALTHY;
    case 2:
    case "NONEXISTENT_PAIR":
      return LiquidationFailedEvent_LiquidationFailedReason.NONEXISTENT_PAIR;
    case 3:
    case "NONEXISTENT_POSITION":
      return LiquidationFailedEvent_LiquidationFailedReason.NONEXISTENT_POSITION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LiquidationFailedEvent_LiquidationFailedReason.UNRECOGNIZED;
  }
}

export function liquidationFailedEvent_LiquidationFailedReasonToJSON(
  object: LiquidationFailedEvent_LiquidationFailedReason,
): string {
  switch (object) {
    case LiquidationFailedEvent_LiquidationFailedReason.UNSPECIFIED:
      return "UNSPECIFIED";
    case LiquidationFailedEvent_LiquidationFailedReason.POSITION_HEALTHY:
      return "POSITION_HEALTHY";
    case LiquidationFailedEvent_LiquidationFailedReason.NONEXISTENT_PAIR:
      return "NONEXISTENT_PAIR";
    case LiquidationFailedEvent_LiquidationFailedReason.NONEXISTENT_POSITION:
      return "NONEXISTENT_POSITION";
    case LiquidationFailedEvent_LiquidationFailedReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MetricsEvent {
  pair: string;
  /** Sum of all active position sizes for the pair. */
  netSize: string;
  /** Total notional volume for the pair. */
  volumeQuote: string;
  /** Total size volume for the pair. */
  volumeBase: string;
  /** The block number at which metrics were generated. */
  blockHeight: Long;
  /** The block time in unix milliseconds at which metrics were generated. */
  blockTimeMs: Long;
}

function createBasePositionChangedEvent(): PositionChangedEvent {
  return {
    pair: "",
    traderAddress: "",
    margin: undefined,
    positionNotional: "",
    exchangedSize: "",
    exchangedNotional: "",
    transactionFee: undefined,
    positionSize: "",
    realizedPnl: "",
    unrealizedPnlAfter: "",
    badDebt: undefined,
    markPrice: "",
    fundingPayment: "",
    blockHeight: Long.ZERO,
    blockTimeMs: Long.ZERO,
  };
}

export const PositionChangedEvent = {
  encode(message: PositionChangedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.traderAddress !== "") {
      writer.uint32(18).string(message.traderAddress);
    }
    if (message.margin !== undefined) {
      Coin.encode(message.margin, writer.uint32(26).fork()).ldelim();
    }
    if (message.positionNotional !== "") {
      writer.uint32(34).string(message.positionNotional);
    }
    if (message.exchangedSize !== "") {
      writer.uint32(42).string(message.exchangedSize);
    }
    if (message.exchangedNotional !== "") {
      writer.uint32(50).string(message.exchangedNotional);
    }
    if (message.transactionFee !== undefined) {
      Coin.encode(message.transactionFee, writer.uint32(58).fork()).ldelim();
    }
    if (message.positionSize !== "") {
      writer.uint32(66).string(message.positionSize);
    }
    if (message.realizedPnl !== "") {
      writer.uint32(74).string(message.realizedPnl);
    }
    if (message.unrealizedPnlAfter !== "") {
      writer.uint32(82).string(message.unrealizedPnlAfter);
    }
    if (message.badDebt !== undefined) {
      Coin.encode(message.badDebt, writer.uint32(90).fork()).ldelim();
    }
    if (message.markPrice !== "") {
      writer.uint32(98).string(message.markPrice);
    }
    if (message.fundingPayment !== "") {
      writer.uint32(106).string(message.fundingPayment);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(112).int64(message.blockHeight);
    }
    if (!message.blockTimeMs.isZero()) {
      writer.uint32(120).int64(message.blockTimeMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionChangedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionChangedEvent();
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

          message.traderAddress = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.margin = Coin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.positionNotional = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.exchangedSize = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.exchangedNotional = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.transactionFee = Coin.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.positionSize = reader.string();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.realizedPnl = reader.string();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.unrealizedPnlAfter = reader.string();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.badDebt = Coin.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.markPrice = reader.string();
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.fundingPayment = reader.string();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.blockHeight = reader.int64() as Long;
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.blockTimeMs = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PositionChangedEvent {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      traderAddress: isSet(object.traderAddress) ? String(object.traderAddress) : "",
      margin: isSet(object.margin) ? Coin.fromJSON(object.margin) : undefined,
      positionNotional: isSet(object.positionNotional) ? String(object.positionNotional) : "",
      exchangedSize: isSet(object.exchangedSize) ? String(object.exchangedSize) : "",
      exchangedNotional: isSet(object.exchangedNotional) ? String(object.exchangedNotional) : "",
      transactionFee: isSet(object.transactionFee) ? Coin.fromJSON(object.transactionFee) : undefined,
      positionSize: isSet(object.positionSize) ? String(object.positionSize) : "",
      realizedPnl: isSet(object.realizedPnl) ? String(object.realizedPnl) : "",
      unrealizedPnlAfter: isSet(object.unrealizedPnlAfter) ? String(object.unrealizedPnlAfter) : "",
      badDebt: isSet(object.badDebt) ? Coin.fromJSON(object.badDebt) : undefined,
      markPrice: isSet(object.markPrice) ? String(object.markPrice) : "",
      fundingPayment: isSet(object.fundingPayment) ? String(object.fundingPayment) : "",
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      blockTimeMs: isSet(object.blockTimeMs) ? Long.fromValue(object.blockTimeMs) : Long.ZERO,
    };
  },

  toJSON(message: PositionChangedEvent): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair);
    message.traderAddress !== undefined && (obj.traderAddress = message.traderAddress);
    message.margin !== undefined && (obj.margin = message.margin ? Coin.toJSON(message.margin) : undefined);
    message.positionNotional !== undefined && (obj.positionNotional = message.positionNotional);
    message.exchangedSize !== undefined && (obj.exchangedSize = message.exchangedSize);
    message.exchangedNotional !== undefined && (obj.exchangedNotional = message.exchangedNotional);
    message.transactionFee !== undefined &&
      (obj.transactionFee = message.transactionFee ? Coin.toJSON(message.transactionFee) : undefined);
    message.positionSize !== undefined && (obj.positionSize = message.positionSize);
    message.realizedPnl !== undefined && (obj.realizedPnl = message.realizedPnl);
    message.unrealizedPnlAfter !== undefined && (obj.unrealizedPnlAfter = message.unrealizedPnlAfter);
    message.badDebt !== undefined && (obj.badDebt = message.badDebt ? Coin.toJSON(message.badDebt) : undefined);
    message.markPrice !== undefined && (obj.markPrice = message.markPrice);
    message.fundingPayment !== undefined && (obj.fundingPayment = message.fundingPayment);
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.blockTimeMs !== undefined && (obj.blockTimeMs = (message.blockTimeMs || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<PositionChangedEvent>, I>>(base?: I): PositionChangedEvent {
    return PositionChangedEvent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PositionChangedEvent>, I>>(object: I): PositionChangedEvent {
    const message = createBasePositionChangedEvent();
    message.pair = object.pair ?? "";
    message.traderAddress = object.traderAddress ?? "";
    message.margin = (object.margin !== undefined && object.margin !== null)
      ? Coin.fromPartial(object.margin)
      : undefined;
    message.positionNotional = object.positionNotional ?? "";
    message.exchangedSize = object.exchangedSize ?? "";
    message.exchangedNotional = object.exchangedNotional ?? "";
    message.transactionFee = (object.transactionFee !== undefined && object.transactionFee !== null)
      ? Coin.fromPartial(object.transactionFee)
      : undefined;
    message.positionSize = object.positionSize ?? "";
    message.realizedPnl = object.realizedPnl ?? "";
    message.unrealizedPnlAfter = object.unrealizedPnlAfter ?? "";
    message.badDebt = (object.badDebt !== undefined && object.badDebt !== null)
      ? Coin.fromPartial(object.badDebt)
      : undefined;
    message.markPrice = object.markPrice ?? "";
    message.fundingPayment = object.fundingPayment ?? "";
    message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
      ? Long.fromValue(object.blockHeight)
      : Long.ZERO;
    message.blockTimeMs = (object.blockTimeMs !== undefined && object.blockTimeMs !== null)
      ? Long.fromValue(object.blockTimeMs)
      : Long.ZERO;
    return message;
  },
};

function createBasePositionLiquidatedEvent(): PositionLiquidatedEvent {
  return {
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
  };
}

export const PositionLiquidatedEvent = {
  encode(message: PositionLiquidatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.traderAddress !== "") {
      writer.uint32(18).string(message.traderAddress);
    }
    if (message.exchangedQuoteAmount !== "") {
      writer.uint32(26).string(message.exchangedQuoteAmount);
    }
    if (message.exchangedPositionSize !== "") {
      writer.uint32(34).string(message.exchangedPositionSize);
    }
    if (message.liquidatorAddress !== "") {
      writer.uint32(42).string(message.liquidatorAddress);
    }
    if (message.feeToLiquidator !== undefined) {
      Coin.encode(message.feeToLiquidator, writer.uint32(50).fork()).ldelim();
    }
    if (message.feeToEcosystemFund !== undefined) {
      Coin.encode(message.feeToEcosystemFund, writer.uint32(58).fork()).ldelim();
    }
    if (message.badDebt !== undefined) {
      Coin.encode(message.badDebt, writer.uint32(66).fork()).ldelim();
    }
    if (message.margin !== undefined) {
      Coin.encode(message.margin, writer.uint32(74).fork()).ldelim();
    }
    if (message.positionNotional !== "") {
      writer.uint32(82).string(message.positionNotional);
    }
    if (message.positionSize !== "") {
      writer.uint32(90).string(message.positionSize);
    }
    if (message.unrealizedPnl !== "") {
      writer.uint32(98).string(message.unrealizedPnl);
    }
    if (message.markPrice !== "") {
      writer.uint32(106).string(message.markPrice);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(112).int64(message.blockHeight);
    }
    if (!message.blockTimeMs.isZero()) {
      writer.uint32(120).int64(message.blockTimeMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionLiquidatedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionLiquidatedEvent();
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

          message.traderAddress = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.exchangedQuoteAmount = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.exchangedPositionSize = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.liquidatorAddress = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.feeToLiquidator = Coin.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.feeToEcosystemFund = Coin.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.badDebt = Coin.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.margin = Coin.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.positionNotional = reader.string();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.positionSize = reader.string();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.unrealizedPnl = reader.string();
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.markPrice = reader.string();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.blockHeight = reader.int64() as Long;
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.blockTimeMs = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PositionLiquidatedEvent {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      traderAddress: isSet(object.traderAddress) ? String(object.traderAddress) : "",
      exchangedQuoteAmount: isSet(object.exchangedQuoteAmount) ? String(object.exchangedQuoteAmount) : "",
      exchangedPositionSize: isSet(object.exchangedPositionSize) ? String(object.exchangedPositionSize) : "",
      liquidatorAddress: isSet(object.liquidatorAddress) ? String(object.liquidatorAddress) : "",
      feeToLiquidator: isSet(object.feeToLiquidator) ? Coin.fromJSON(object.feeToLiquidator) : undefined,
      feeToEcosystemFund: isSet(object.feeToEcosystemFund) ? Coin.fromJSON(object.feeToEcosystemFund) : undefined,
      badDebt: isSet(object.badDebt) ? Coin.fromJSON(object.badDebt) : undefined,
      margin: isSet(object.margin) ? Coin.fromJSON(object.margin) : undefined,
      positionNotional: isSet(object.positionNotional) ? String(object.positionNotional) : "",
      positionSize: isSet(object.positionSize) ? String(object.positionSize) : "",
      unrealizedPnl: isSet(object.unrealizedPnl) ? String(object.unrealizedPnl) : "",
      markPrice: isSet(object.markPrice) ? String(object.markPrice) : "",
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      blockTimeMs: isSet(object.blockTimeMs) ? Long.fromValue(object.blockTimeMs) : Long.ZERO,
    };
  },

  toJSON(message: PositionLiquidatedEvent): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair);
    message.traderAddress !== undefined && (obj.traderAddress = message.traderAddress);
    message.exchangedQuoteAmount !== undefined && (obj.exchangedQuoteAmount = message.exchangedQuoteAmount);
    message.exchangedPositionSize !== undefined && (obj.exchangedPositionSize = message.exchangedPositionSize);
    message.liquidatorAddress !== undefined && (obj.liquidatorAddress = message.liquidatorAddress);
    message.feeToLiquidator !== undefined &&
      (obj.feeToLiquidator = message.feeToLiquidator ? Coin.toJSON(message.feeToLiquidator) : undefined);
    message.feeToEcosystemFund !== undefined &&
      (obj.feeToEcosystemFund = message.feeToEcosystemFund ? Coin.toJSON(message.feeToEcosystemFund) : undefined);
    message.badDebt !== undefined && (obj.badDebt = message.badDebt ? Coin.toJSON(message.badDebt) : undefined);
    message.margin !== undefined && (obj.margin = message.margin ? Coin.toJSON(message.margin) : undefined);
    message.positionNotional !== undefined && (obj.positionNotional = message.positionNotional);
    message.positionSize !== undefined && (obj.positionSize = message.positionSize);
    message.unrealizedPnl !== undefined && (obj.unrealizedPnl = message.unrealizedPnl);
    message.markPrice !== undefined && (obj.markPrice = message.markPrice);
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.blockTimeMs !== undefined && (obj.blockTimeMs = (message.blockTimeMs || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<PositionLiquidatedEvent>, I>>(base?: I): PositionLiquidatedEvent {
    return PositionLiquidatedEvent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PositionLiquidatedEvent>, I>>(object: I): PositionLiquidatedEvent {
    const message = createBasePositionLiquidatedEvent();
    message.pair = object.pair ?? "";
    message.traderAddress = object.traderAddress ?? "";
    message.exchangedQuoteAmount = object.exchangedQuoteAmount ?? "";
    message.exchangedPositionSize = object.exchangedPositionSize ?? "";
    message.liquidatorAddress = object.liquidatorAddress ?? "";
    message.feeToLiquidator = (object.feeToLiquidator !== undefined && object.feeToLiquidator !== null)
      ? Coin.fromPartial(object.feeToLiquidator)
      : undefined;
    message.feeToEcosystemFund = (object.feeToEcosystemFund !== undefined && object.feeToEcosystemFund !== null)
      ? Coin.fromPartial(object.feeToEcosystemFund)
      : undefined;
    message.badDebt = (object.badDebt !== undefined && object.badDebt !== null)
      ? Coin.fromPartial(object.badDebt)
      : undefined;
    message.margin = (object.margin !== undefined && object.margin !== null)
      ? Coin.fromPartial(object.margin)
      : undefined;
    message.positionNotional = object.positionNotional ?? "";
    message.positionSize = object.positionSize ?? "";
    message.unrealizedPnl = object.unrealizedPnl ?? "";
    message.markPrice = object.markPrice ?? "";
    message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
      ? Long.fromValue(object.blockHeight)
      : Long.ZERO;
    message.blockTimeMs = (object.blockTimeMs !== undefined && object.blockTimeMs !== null)
      ? Long.fromValue(object.blockTimeMs)
      : Long.ZERO;
    return message;
  },
};

function createBasePositionSettledEvent(): PositionSettledEvent {
  return { pair: "", traderAddress: "", settledCoins: [] };
}

export const PositionSettledEvent = {
  encode(message: PositionSettledEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.traderAddress !== "") {
      writer.uint32(18).string(message.traderAddress);
    }
    for (const v of message.settledCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionSettledEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionSettledEvent();
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

          message.traderAddress = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.settledCoins.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PositionSettledEvent {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      traderAddress: isSet(object.traderAddress) ? String(object.traderAddress) : "",
      settledCoins: Array.isArray(object?.settledCoins) ? object.settledCoins.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: PositionSettledEvent): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair);
    message.traderAddress !== undefined && (obj.traderAddress = message.traderAddress);
    if (message.settledCoins) {
      obj.settledCoins = message.settledCoins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.settledCoins = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PositionSettledEvent>, I>>(base?: I): PositionSettledEvent {
    return PositionSettledEvent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PositionSettledEvent>, I>>(object: I): PositionSettledEvent {
    const message = createBasePositionSettledEvent();
    message.pair = object.pair ?? "";
    message.traderAddress = object.traderAddress ?? "";
    message.settledCoins = object.settledCoins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFundingRateChangedEvent(): FundingRateChangedEvent {
  return {
    pair: "",
    markPrice: "",
    indexPrice: "",
    latestFundingRate: "",
    latestPremiumFraction: "",
    cumulativePremiumFraction: "",
    blockHeight: Long.ZERO,
    blockTimeMs: Long.ZERO,
  };
}

export const FundingRateChangedEvent = {
  encode(message: FundingRateChangedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.markPrice !== "") {
      writer.uint32(18).string(message.markPrice);
    }
    if (message.indexPrice !== "") {
      writer.uint32(26).string(message.indexPrice);
    }
    if (message.latestFundingRate !== "") {
      writer.uint32(34).string(message.latestFundingRate);
    }
    if (message.latestPremiumFraction !== "") {
      writer.uint32(42).string(message.latestPremiumFraction);
    }
    if (message.cumulativePremiumFraction !== "") {
      writer.uint32(50).string(message.cumulativePremiumFraction);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(56).int64(message.blockHeight);
    }
    if (!message.blockTimeMs.isZero()) {
      writer.uint32(64).int64(message.blockTimeMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FundingRateChangedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFundingRateChangedEvent();
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

          message.markPrice = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.indexPrice = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.latestFundingRate = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.latestPremiumFraction = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.cumulativePremiumFraction = reader.string();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.blockHeight = reader.int64() as Long;
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.blockTimeMs = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FundingRateChangedEvent {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      markPrice: isSet(object.markPrice) ? String(object.markPrice) : "",
      indexPrice: isSet(object.indexPrice) ? String(object.indexPrice) : "",
      latestFundingRate: isSet(object.latestFundingRate) ? String(object.latestFundingRate) : "",
      latestPremiumFraction: isSet(object.latestPremiumFraction) ? String(object.latestPremiumFraction) : "",
      cumulativePremiumFraction: isSet(object.cumulativePremiumFraction)
        ? String(object.cumulativePremiumFraction)
        : "",
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      blockTimeMs: isSet(object.blockTimeMs) ? Long.fromValue(object.blockTimeMs) : Long.ZERO,
    };
  },

  toJSON(message: FundingRateChangedEvent): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair);
    message.markPrice !== undefined && (obj.markPrice = message.markPrice);
    message.indexPrice !== undefined && (obj.indexPrice = message.indexPrice);
    message.latestFundingRate !== undefined && (obj.latestFundingRate = message.latestFundingRate);
    message.latestPremiumFraction !== undefined && (obj.latestPremiumFraction = message.latestPremiumFraction);
    message.cumulativePremiumFraction !== undefined &&
      (obj.cumulativePremiumFraction = message.cumulativePremiumFraction);
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.blockTimeMs !== undefined && (obj.blockTimeMs = (message.blockTimeMs || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<FundingRateChangedEvent>, I>>(base?: I): FundingRateChangedEvent {
    return FundingRateChangedEvent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FundingRateChangedEvent>, I>>(object: I): FundingRateChangedEvent {
    const message = createBaseFundingRateChangedEvent();
    message.pair = object.pair ?? "";
    message.markPrice = object.markPrice ?? "";
    message.indexPrice = object.indexPrice ?? "";
    message.latestFundingRate = object.latestFundingRate ?? "";
    message.latestPremiumFraction = object.latestPremiumFraction ?? "";
    message.cumulativePremiumFraction = object.cumulativePremiumFraction ?? "";
    message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
      ? Long.fromValue(object.blockHeight)
      : Long.ZERO;
    message.blockTimeMs = (object.blockTimeMs !== undefined && object.blockTimeMs !== null)
      ? Long.fromValue(object.blockTimeMs)
      : Long.ZERO;
    return message;
  },
};

function createBaseLiquidationFailedEvent(): LiquidationFailedEvent {
  return { pair: "", trader: "", liquidator: "", reason: 0 };
}

export const LiquidationFailedEvent = {
  encode(message: LiquidationFailedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.trader !== "") {
      writer.uint32(18).string(message.trader);
    }
    if (message.liquidator !== "") {
      writer.uint32(26).string(message.liquidator);
    }
    if (message.reason !== 0) {
      writer.uint32(32).int32(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidationFailedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidationFailedEvent();
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

          message.trader = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.liquidator = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.reason = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LiquidationFailedEvent {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      trader: isSet(object.trader) ? String(object.trader) : "",
      liquidator: isSet(object.liquidator) ? String(object.liquidator) : "",
      reason: isSet(object.reason) ? liquidationFailedEvent_LiquidationFailedReasonFromJSON(object.reason) : 0,
    };
  },

  toJSON(message: LiquidationFailedEvent): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair);
    message.trader !== undefined && (obj.trader = message.trader);
    message.liquidator !== undefined && (obj.liquidator = message.liquidator);
    message.reason !== undefined && (obj.reason = liquidationFailedEvent_LiquidationFailedReasonToJSON(message.reason));
    return obj;
  },

  create<I extends Exact<DeepPartial<LiquidationFailedEvent>, I>>(base?: I): LiquidationFailedEvent {
    return LiquidationFailedEvent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LiquidationFailedEvent>, I>>(object: I): LiquidationFailedEvent {
    const message = createBaseLiquidationFailedEvent();
    message.pair = object.pair ?? "";
    message.trader = object.trader ?? "";
    message.liquidator = object.liquidator ?? "";
    message.reason = object.reason ?? 0;
    return message;
  },
};

function createBaseMetricsEvent(): MetricsEvent {
  return { pair: "", netSize: "", volumeQuote: "", volumeBase: "", blockHeight: Long.ZERO, blockTimeMs: Long.ZERO };
}

export const MetricsEvent = {
  encode(message: MetricsEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.netSize !== "") {
      writer.uint32(18).string(message.netSize);
    }
    if (message.volumeQuote !== "") {
      writer.uint32(26).string(message.volumeQuote);
    }
    if (message.volumeBase !== "") {
      writer.uint32(34).string(message.volumeBase);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(40).int64(message.blockHeight);
    }
    if (!message.blockTimeMs.isZero()) {
      writer.uint32(48).int64(message.blockTimeMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetricsEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricsEvent();
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

          message.netSize = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.volumeQuote = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.volumeBase = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.blockHeight = reader.int64() as Long;
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.blockTimeMs = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MetricsEvent {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      netSize: isSet(object.netSize) ? String(object.netSize) : "",
      volumeQuote: isSet(object.volumeQuote) ? String(object.volumeQuote) : "",
      volumeBase: isSet(object.volumeBase) ? String(object.volumeBase) : "",
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      blockTimeMs: isSet(object.blockTimeMs) ? Long.fromValue(object.blockTimeMs) : Long.ZERO,
    };
  },

  toJSON(message: MetricsEvent): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair);
    message.netSize !== undefined && (obj.netSize = message.netSize);
    message.volumeQuote !== undefined && (obj.volumeQuote = message.volumeQuote);
    message.volumeBase !== undefined && (obj.volumeBase = message.volumeBase);
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.blockTimeMs !== undefined && (obj.blockTimeMs = (message.blockTimeMs || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MetricsEvent>, I>>(base?: I): MetricsEvent {
    return MetricsEvent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MetricsEvent>, I>>(object: I): MetricsEvent {
    const message = createBaseMetricsEvent();
    message.pair = object.pair ?? "";
    message.netSize = object.netSize ?? "";
    message.volumeQuote = object.volumeQuote ?? "";
    message.volumeBase = object.volumeBase ?? "";
    message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
      ? Long.fromValue(object.blockHeight)
      : Long.ZERO;
    message.blockTimeMs = (object.blockTimeMs !== undefined && object.blockTimeMs !== null)
      ? Long.fromValue(object.blockTimeMs)
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
