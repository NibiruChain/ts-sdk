/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { AssetPair } from "../../common/common";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Duration } from "../../google/protobuf/duration";

export const protobufPackage = "nibiru.perp.v1";

export enum Side {
  SIDE_UNSPECIFIED = 0,
  BUY = 1,
  SELL = 2,
  UNRECOGNIZED = -1,
}

export function sideFromJSON(object: any): Side {
  switch (object) {
    case 0:
    case "SIDE_UNSPECIFIED":
      return Side.SIDE_UNSPECIFIED;
    case 1:
    case "BUY":
      return Side.BUY;
    case 2:
    case "SELL":
      return Side.SELL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Side.UNRECOGNIZED;
  }
}

export function sideToJSON(object: Side): string {
  switch (object) {
    case Side.SIDE_UNSPECIFIED:
      return "SIDE_UNSPECIFIED";
    case Side.BUY:
      return "BUY";
    case Side.SELL:
      return "SELL";
    case Side.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PnLCalcOption {
  PNL_CALC_OPTION_UNSPECIFIED = 0,
  SPOT_PRICE = 1,
  TWAP = 2,
  ORACLE = 3,
  UNRECOGNIZED = -1,
}

export function pnLCalcOptionFromJSON(object: any): PnLCalcOption {
  switch (object) {
    case 0:
    case "PNL_CALC_OPTION_UNSPECIFIED":
      return PnLCalcOption.PNL_CALC_OPTION_UNSPECIFIED;
    case 1:
    case "SPOT_PRICE":
      return PnLCalcOption.SPOT_PRICE;
    case 2:
    case "TWAP":
      return PnLCalcOption.TWAP;
    case 3:
    case "ORACLE":
      return PnLCalcOption.ORACLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PnLCalcOption.UNRECOGNIZED;
  }
}

export function pnLCalcOptionToJSON(object: PnLCalcOption): string {
  switch (object) {
    case PnLCalcOption.PNL_CALC_OPTION_UNSPECIFIED:
      return "PNL_CALC_OPTION_UNSPECIFIED";
    case PnLCalcOption.SPOT_PRICE:
      return "SPOT_PRICE";
    case PnLCalcOption.TWAP:
      return "TWAP";
    case PnLCalcOption.ORACLE:
      return "ORACLE";
    case PnLCalcOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PnLPreferenceOption {
  PNL_PREFERENCE_UNSPECIFIED = 0,
  MAX = 1,
  MIN = 2,
  UNRECOGNIZED = -1,
}

export function pnLPreferenceOptionFromJSON(object: any): PnLPreferenceOption {
  switch (object) {
    case 0:
    case "PNL_PREFERENCE_UNSPECIFIED":
      return PnLPreferenceOption.PNL_PREFERENCE_UNSPECIFIED;
    case 1:
    case "MAX":
      return PnLPreferenceOption.MAX;
    case 2:
    case "MIN":
      return PnLPreferenceOption.MIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PnLPreferenceOption.UNRECOGNIZED;
  }
}

export function pnLPreferenceOptionToJSON(object: PnLPreferenceOption): string {
  switch (object) {
    case PnLPreferenceOption.PNL_PREFERENCE_UNSPECIFIED:
      return "PNL_PREFERENCE_UNSPECIFIED";
    case PnLPreferenceOption.MAX:
      return "MAX";
    case PnLPreferenceOption.MIN:
      return "MIN";
    case PnLPreferenceOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum MarginCalculationPriceOption {
  MARGIN_CALCULATION_PRICE_OPTION_UNSPECIFIED = 0,
  SPOT = 1,
  INDEX = 2,
  MAX_PNL = 3,
  UNRECOGNIZED = -1,
}

export function marginCalculationPriceOptionFromJSON(object: any): MarginCalculationPriceOption {
  switch (object) {
    case 0:
    case "MARGIN_CALCULATION_PRICE_OPTION_UNSPECIFIED":
      return MarginCalculationPriceOption.MARGIN_CALCULATION_PRICE_OPTION_UNSPECIFIED;
    case 1:
    case "SPOT":
      return MarginCalculationPriceOption.SPOT;
    case 2:
    case "INDEX":
      return MarginCalculationPriceOption.INDEX;
    case 3:
    case "MAX_PNL":
      return MarginCalculationPriceOption.MAX_PNL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MarginCalculationPriceOption.UNRECOGNIZED;
  }
}

export function marginCalculationPriceOptionToJSON(object: MarginCalculationPriceOption): string {
  switch (object) {
    case MarginCalculationPriceOption.MARGIN_CALCULATION_PRICE_OPTION_UNSPECIFIED:
      return "MARGIN_CALCULATION_PRICE_OPTION_UNSPECIFIED";
    case MarginCalculationPriceOption.SPOT:
      return "SPOT";
    case MarginCalculationPriceOption.INDEX:
      return "INDEX";
    case MarginCalculationPriceOption.MAX_PNL:
      return "MAX_PNL";
    case MarginCalculationPriceOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Params {
  /** stopped identifies if the perp exchange is stopped or not */
  stopped: boolean;
  /** FeePoolFeeRatio is the ratio transferred to the the fee pool */
  feePoolFeeRatio: string;
  /** EcosystemFundFeeRatio is the ratio transferred to the PerpEF. */
  ecosystemFundFeeRatio: string;
  /**
   * LiquidationFeeRatio is the percentage of liquidated position that will be given
   * to out as a reward. Half of the liquidation fee is given to the liquidator,
   * and the other half is given to the ecosystem fund.
   */
  liquidationFeeRatio: string;
  /** PartialLiquidationRatio is the share we try to liquidate if the margin is higher than liquidation fee */
  partialLiquidationRatio: string;
  /** specifies the interval on which the funding rate is updated */
  fundingRateInterval: string;
  /** amount of time to look back for TWAP calculations */
  twapLookbackWindow?: Duration;
}

/** GenesisState defines the perp module's genesis state. */
export interface GenesisState {
  params?: Params;
  vaultBalance: Coin[];
  perpEfBalance: Coin[];
  feePoolBalance: Coin[];
  pairMetadata: PairMetadata[];
  positions: Position[];
  prepaidBadDebts: PrepaidBadDebt[];
  whitelistedAddresses: string[];
}

/**
 * Position identifies and records information on a user's position on one of
 * the virtual liquidity pools.
 */
export interface Position {
  /** address identifies the address owner of this position */
  traderAddress: string;
  /** pair identifies the pair associated with this position */
  pair?: AssetPair;
  /** Position size. */
  size: string;
  /** Amount of margin remaining in the position. */
  margin: string;
  /**
   * OpenNotional is the quote denom value of the position when opening.
   * Used to calculate PnL.
   */
  openNotional: string;
  /**
   * The last cumulative funding payment this position has applied.
   * Used to calculate the next funding payment.
   */
  lastUpdateCumulativePremiumFraction: string;
  /** BlockNumber is the last block number when this position changed. */
  blockNumber: Long;
}

export interface PositionResp {
  position?: Position;
  /** The amount of quote assets exchanged. */
  exchangedNotionalValue: string;
  /** The amount of base assets exchanged. */
  exchangedPositionSize: string;
  /**
   * The amount of bad debt accrued during this position change.
   * Measured in absolute value of quote units.
   * If greater than zero, then the position change event will likely fail.
   */
  badDebt: string;
  /** The funding payment applied on this position change. */
  fundingPayment: string;
  /** The amount of PnL realized on this position changed, measured in quote units. */
  realizedPnl: string;
  /** The unrealized PnL in the position after the position change. */
  unrealizedPnlAfter: string;
  /**
   * The amount of margin the trader has to give to the vault.
   * A negative value means the vault pays the trader.
   */
  marginToVault: string;
  /** The position's notional value after the position change, measured in quote units. */
  positionNotional: string;
}

export interface LiquidateResp {
  /** Amount of bad debt created by the liquidation event */
  badDebt: string;
  /** Fee paid to the liquidator */
  feeToLiquidator: string;
  /** Fee paid to the Perp EF fund */
  feeToPerpEcosystemFund: string;
  /** Address of the liquidator */
  liquidator: string;
  /** Position response from the close or open reverse position */
  positionResp?: PositionResp;
}

export interface PairMetadata {
  pair?: AssetPair;
  cumulativePremiumFractions: string[];
}

export interface PrepaidBadDebt {
  denom: string;
  amount: string;
}

function createBaseParams(): Params {
  return {
    stopped: false,
    feePoolFeeRatio: "",
    ecosystemFundFeeRatio: "",
    liquidationFeeRatio: "",
    partialLiquidationRatio: "",
    fundingRateInterval: "",
    twapLookbackWindow: undefined,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stopped === true) {
      writer.uint32(8).bool(message.stopped);
    }
    if (message.feePoolFeeRatio !== "") {
      writer.uint32(26).string(message.feePoolFeeRatio);
    }
    if (message.ecosystemFundFeeRatio !== "") {
      writer.uint32(34).string(message.ecosystemFundFeeRatio);
    }
    if (message.liquidationFeeRatio !== "") {
      writer.uint32(42).string(message.liquidationFeeRatio);
    }
    if (message.partialLiquidationRatio !== "") {
      writer.uint32(50).string(message.partialLiquidationRatio);
    }
    if (message.fundingRateInterval !== "") {
      writer.uint32(58).string(message.fundingRateInterval);
    }
    if (message.twapLookbackWindow !== undefined) {
      Duration.encode(message.twapLookbackWindow, writer.uint32(66).fork()).ldelim();
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
          message.stopped = reader.bool();
          break;
        case 3:
          message.feePoolFeeRatio = reader.string();
          break;
        case 4:
          message.ecosystemFundFeeRatio = reader.string();
          break;
        case 5:
          message.liquidationFeeRatio = reader.string();
          break;
        case 6:
          message.partialLiquidationRatio = reader.string();
          break;
        case 7:
          message.fundingRateInterval = reader.string();
          break;
        case 8:
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
      stopped: isSet(object.stopped) ? Boolean(object.stopped) : false,
      feePoolFeeRatio: isSet(object.feePoolFeeRatio) ? String(object.feePoolFeeRatio) : "",
      ecosystemFundFeeRatio: isSet(object.ecosystemFundFeeRatio) ? String(object.ecosystemFundFeeRatio) : "",
      liquidationFeeRatio: isSet(object.liquidationFeeRatio) ? String(object.liquidationFeeRatio) : "",
      partialLiquidationRatio: isSet(object.partialLiquidationRatio) ? String(object.partialLiquidationRatio) : "",
      fundingRateInterval: isSet(object.fundingRateInterval) ? String(object.fundingRateInterval) : "",
      twapLookbackWindow: isSet(object.twapLookbackWindow) ? Duration.fromJSON(object.twapLookbackWindow) : undefined,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.stopped !== undefined && (obj.stopped = message.stopped);
    message.feePoolFeeRatio !== undefined && (obj.feePoolFeeRatio = message.feePoolFeeRatio);
    message.ecosystemFundFeeRatio !== undefined && (obj.ecosystemFundFeeRatio = message.ecosystemFundFeeRatio);
    message.liquidationFeeRatio !== undefined && (obj.liquidationFeeRatio = message.liquidationFeeRatio);
    message.partialLiquidationRatio !== undefined && (obj.partialLiquidationRatio = message.partialLiquidationRatio);
    message.fundingRateInterval !== undefined && (obj.fundingRateInterval = message.fundingRateInterval);
    message.twapLookbackWindow !== undefined &&
      (obj.twapLookbackWindow = message.twapLookbackWindow ? Duration.toJSON(message.twapLookbackWindow) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.stopped = object.stopped ?? false;
    message.feePoolFeeRatio = object.feePoolFeeRatio ?? "";
    message.ecosystemFundFeeRatio = object.ecosystemFundFeeRatio ?? "";
    message.liquidationFeeRatio = object.liquidationFeeRatio ?? "";
    message.partialLiquidationRatio = object.partialLiquidationRatio ?? "";
    message.fundingRateInterval = object.fundingRateInterval ?? "";
    message.twapLookbackWindow = (object.twapLookbackWindow !== undefined && object.twapLookbackWindow !== null)
      ? Duration.fromPartial(object.twapLookbackWindow)
      : undefined;
    return message;
  },
};

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    vaultBalance: [],
    perpEfBalance: [],
    feePoolBalance: [],
    pairMetadata: [],
    positions: [],
    prepaidBadDebts: [],
    whitelistedAddresses: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.vaultBalance) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.perpEfBalance) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.feePoolBalance) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.pairMetadata) {
      PairMetadata.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.positions) {
      Position.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.prepaidBadDebts) {
      PrepaidBadDebt.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.whitelistedAddresses) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.vaultBalance.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.perpEfBalance.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.feePoolBalance.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.pairMetadata.push(PairMetadata.decode(reader, reader.uint32()));
          break;
        case 6:
          message.positions.push(Position.decode(reader, reader.uint32()));
          break;
        case 7:
          message.prepaidBadDebts.push(PrepaidBadDebt.decode(reader, reader.uint32()));
          break;
        case 8:
          message.whitelistedAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      vaultBalance: Array.isArray(object?.vaultBalance) ? object.vaultBalance.map((e: any) => Coin.fromJSON(e)) : [],
      perpEfBalance: Array.isArray(object?.perpEfBalance) ? object.perpEfBalance.map((e: any) => Coin.fromJSON(e)) : [],
      feePoolBalance: Array.isArray(object?.feePoolBalance)
        ? object.feePoolBalance.map((e: any) => Coin.fromJSON(e))
        : [],
      pairMetadata: Array.isArray(object?.pairMetadata)
        ? object.pairMetadata.map((e: any) => PairMetadata.fromJSON(e))
        : [],
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => Position.fromJSON(e)) : [],
      prepaidBadDebts: Array.isArray(object?.prepaidBadDebts)
        ? object.prepaidBadDebts.map((e: any) => PrepaidBadDebt.fromJSON(e))
        : [],
      whitelistedAddresses: Array.isArray(object?.whitelistedAddresses)
        ? object.whitelistedAddresses.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.vaultBalance) {
      obj.vaultBalance = message.vaultBalance.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.vaultBalance = [];
    }
    if (message.perpEfBalance) {
      obj.perpEfBalance = message.perpEfBalance.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.perpEfBalance = [];
    }
    if (message.feePoolBalance) {
      obj.feePoolBalance = message.feePoolBalance.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.feePoolBalance = [];
    }
    if (message.pairMetadata) {
      obj.pairMetadata = message.pairMetadata.map((e) => e ? PairMetadata.toJSON(e) : undefined);
    } else {
      obj.pairMetadata = [];
    }
    if (message.positions) {
      obj.positions = message.positions.map((e) => e ? Position.toJSON(e) : undefined);
    } else {
      obj.positions = [];
    }
    if (message.prepaidBadDebts) {
      obj.prepaidBadDebts = message.prepaidBadDebts.map((e) => e ? PrepaidBadDebt.toJSON(e) : undefined);
    } else {
      obj.prepaidBadDebts = [];
    }
    if (message.whitelistedAddresses) {
      obj.whitelistedAddresses = message.whitelistedAddresses.map((e) => e);
    } else {
      obj.whitelistedAddresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.vaultBalance = object.vaultBalance?.map((e) => Coin.fromPartial(e)) || [];
    message.perpEfBalance = object.perpEfBalance?.map((e) => Coin.fromPartial(e)) || [];
    message.feePoolBalance = object.feePoolBalance?.map((e) => Coin.fromPartial(e)) || [];
    message.pairMetadata = object.pairMetadata?.map((e) => PairMetadata.fromPartial(e)) || [];
    message.positions = object.positions?.map((e) => Position.fromPartial(e)) || [];
    message.prepaidBadDebts = object.prepaidBadDebts?.map((e) => PrepaidBadDebt.fromPartial(e)) || [];
    message.whitelistedAddresses = object.whitelistedAddresses?.map((e) => e) || [];
    return message;
  },
};

function createBasePosition(): Position {
  return {
    traderAddress: "",
    pair: undefined,
    size: "",
    margin: "",
    openNotional: "",
    lastUpdateCumulativePremiumFraction: "",
    blockNumber: Long.ZERO,
  };
}

export const Position = {
  encode(message: Position, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.traderAddress !== "") {
      writer.uint32(10).string(message.traderAddress);
    }
    if (message.pair !== undefined) {
      AssetPair.encode(message.pair, writer.uint32(18).fork()).ldelim();
    }
    if (message.size !== "") {
      writer.uint32(26).string(message.size);
    }
    if (message.margin !== "") {
      writer.uint32(34).string(message.margin);
    }
    if (message.openNotional !== "") {
      writer.uint32(42).string(message.openNotional);
    }
    if (message.lastUpdateCumulativePremiumFraction !== "") {
      writer.uint32(50).string(message.lastUpdateCumulativePremiumFraction);
    }
    if (!message.blockNumber.isZero()) {
      writer.uint32(56).int64(message.blockNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Position {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.traderAddress = reader.string();
          break;
        case 2:
          message.pair = AssetPair.decode(reader, reader.uint32());
          break;
        case 3:
          message.size = reader.string();
          break;
        case 4:
          message.margin = reader.string();
          break;
        case 5:
          message.openNotional = reader.string();
          break;
        case 6:
          message.lastUpdateCumulativePremiumFraction = reader.string();
          break;
        case 7:
          message.blockNumber = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Position {
    return {
      traderAddress: isSet(object.traderAddress) ? String(object.traderAddress) : "",
      pair: isSet(object.pair) ? AssetPair.fromJSON(object.pair) : undefined,
      size: isSet(object.size) ? String(object.size) : "",
      margin: isSet(object.margin) ? String(object.margin) : "",
      openNotional: isSet(object.openNotional) ? String(object.openNotional) : "",
      lastUpdateCumulativePremiumFraction: isSet(object.lastUpdateCumulativePremiumFraction)
        ? String(object.lastUpdateCumulativePremiumFraction)
        : "",
      blockNumber: isSet(object.blockNumber) ? Long.fromValue(object.blockNumber) : Long.ZERO,
    };
  },

  toJSON(message: Position): unknown {
    const obj: any = {};
    message.traderAddress !== undefined && (obj.traderAddress = message.traderAddress);
    message.pair !== undefined && (obj.pair = message.pair ? AssetPair.toJSON(message.pair) : undefined);
    message.size !== undefined && (obj.size = message.size);
    message.margin !== undefined && (obj.margin = message.margin);
    message.openNotional !== undefined && (obj.openNotional = message.openNotional);
    message.lastUpdateCumulativePremiumFraction !== undefined &&
      (obj.lastUpdateCumulativePremiumFraction = message.lastUpdateCumulativePremiumFraction);
    message.blockNumber !== undefined && (obj.blockNumber = (message.blockNumber || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Position>, I>>(object: I): Position {
    const message = createBasePosition();
    message.traderAddress = object.traderAddress ?? "";
    message.pair = (object.pair !== undefined && object.pair !== null) ? AssetPair.fromPartial(object.pair) : undefined;
    message.size = object.size ?? "";
    message.margin = object.margin ?? "";
    message.openNotional = object.openNotional ?? "";
    message.lastUpdateCumulativePremiumFraction = object.lastUpdateCumulativePremiumFraction ?? "";
    message.blockNumber = (object.blockNumber !== undefined && object.blockNumber !== null)
      ? Long.fromValue(object.blockNumber)
      : Long.ZERO;
    return message;
  },
};

function createBasePositionResp(): PositionResp {
  return {
    position: undefined,
    exchangedNotionalValue: "",
    exchangedPositionSize: "",
    badDebt: "",
    fundingPayment: "",
    realizedPnl: "",
    unrealizedPnlAfter: "",
    marginToVault: "",
    positionNotional: "",
  };
}

export const PositionResp = {
  encode(message: PositionResp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.exchangedNotionalValue !== "") {
      writer.uint32(18).string(message.exchangedNotionalValue);
    }
    if (message.exchangedPositionSize !== "") {
      writer.uint32(26).string(message.exchangedPositionSize);
    }
    if (message.badDebt !== "") {
      writer.uint32(34).string(message.badDebt);
    }
    if (message.fundingPayment !== "") {
      writer.uint32(42).string(message.fundingPayment);
    }
    if (message.realizedPnl !== "") {
      writer.uint32(50).string(message.realizedPnl);
    }
    if (message.unrealizedPnlAfter !== "") {
      writer.uint32(58).string(message.unrealizedPnlAfter);
    }
    if (message.marginToVault !== "") {
      writer.uint32(66).string(message.marginToVault);
    }
    if (message.positionNotional !== "") {
      writer.uint32(74).string(message.positionNotional);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32());
          break;
        case 2:
          message.exchangedNotionalValue = reader.string();
          break;
        case 3:
          message.exchangedPositionSize = reader.string();
          break;
        case 4:
          message.badDebt = reader.string();
          break;
        case 5:
          message.fundingPayment = reader.string();
          break;
        case 6:
          message.realizedPnl = reader.string();
          break;
        case 7:
          message.unrealizedPnlAfter = reader.string();
          break;
        case 8:
          message.marginToVault = reader.string();
          break;
        case 9:
          message.positionNotional = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PositionResp {
    return {
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
      exchangedNotionalValue: isSet(object.exchangedNotionalValue) ? String(object.exchangedNotionalValue) : "",
      exchangedPositionSize: isSet(object.exchangedPositionSize) ? String(object.exchangedPositionSize) : "",
      badDebt: isSet(object.badDebt) ? String(object.badDebt) : "",
      fundingPayment: isSet(object.fundingPayment) ? String(object.fundingPayment) : "",
      realizedPnl: isSet(object.realizedPnl) ? String(object.realizedPnl) : "",
      unrealizedPnlAfter: isSet(object.unrealizedPnlAfter) ? String(object.unrealizedPnlAfter) : "",
      marginToVault: isSet(object.marginToVault) ? String(object.marginToVault) : "",
      positionNotional: isSet(object.positionNotional) ? String(object.positionNotional) : "",
    };
  },

  toJSON(message: PositionResp): unknown {
    const obj: any = {};
    message.position !== undefined && (obj.position = message.position ? Position.toJSON(message.position) : undefined);
    message.exchangedNotionalValue !== undefined && (obj.exchangedNotionalValue = message.exchangedNotionalValue);
    message.exchangedPositionSize !== undefined && (obj.exchangedPositionSize = message.exchangedPositionSize);
    message.badDebt !== undefined && (obj.badDebt = message.badDebt);
    message.fundingPayment !== undefined && (obj.fundingPayment = message.fundingPayment);
    message.realizedPnl !== undefined && (obj.realizedPnl = message.realizedPnl);
    message.unrealizedPnlAfter !== undefined && (obj.unrealizedPnlAfter = message.unrealizedPnlAfter);
    message.marginToVault !== undefined && (obj.marginToVault = message.marginToVault);
    message.positionNotional !== undefined && (obj.positionNotional = message.positionNotional);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PositionResp>, I>>(object: I): PositionResp {
    const message = createBasePositionResp();
    message.position = (object.position !== undefined && object.position !== null)
      ? Position.fromPartial(object.position)
      : undefined;
    message.exchangedNotionalValue = object.exchangedNotionalValue ?? "";
    message.exchangedPositionSize = object.exchangedPositionSize ?? "";
    message.badDebt = object.badDebt ?? "";
    message.fundingPayment = object.fundingPayment ?? "";
    message.realizedPnl = object.realizedPnl ?? "";
    message.unrealizedPnlAfter = object.unrealizedPnlAfter ?? "";
    message.marginToVault = object.marginToVault ?? "";
    message.positionNotional = object.positionNotional ?? "";
    return message;
  },
};

function createBaseLiquidateResp(): LiquidateResp {
  return { badDebt: "", feeToLiquidator: "", feeToPerpEcosystemFund: "", liquidator: "", positionResp: undefined };
}

export const LiquidateResp = {
  encode(message: LiquidateResp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.badDebt !== "") {
      writer.uint32(10).string(message.badDebt);
    }
    if (message.feeToLiquidator !== "") {
      writer.uint32(18).string(message.feeToLiquidator);
    }
    if (message.feeToPerpEcosystemFund !== "") {
      writer.uint32(26).string(message.feeToPerpEcosystemFund);
    }
    if (message.liquidator !== "") {
      writer.uint32(34).string(message.liquidator);
    }
    if (message.positionResp !== undefined) {
      PositionResp.encode(message.positionResp, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidateResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidateResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.badDebt = reader.string();
          break;
        case 2:
          message.feeToLiquidator = reader.string();
          break;
        case 3:
          message.feeToPerpEcosystemFund = reader.string();
          break;
        case 4:
          message.liquidator = reader.string();
          break;
        case 5:
          message.positionResp = PositionResp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidateResp {
    return {
      badDebt: isSet(object.badDebt) ? String(object.badDebt) : "",
      feeToLiquidator: isSet(object.feeToLiquidator) ? String(object.feeToLiquidator) : "",
      feeToPerpEcosystemFund: isSet(object.feeToPerpEcosystemFund) ? String(object.feeToPerpEcosystemFund) : "",
      liquidator: isSet(object.liquidator) ? String(object.liquidator) : "",
      positionResp: isSet(object.positionResp) ? PositionResp.fromJSON(object.positionResp) : undefined,
    };
  },

  toJSON(message: LiquidateResp): unknown {
    const obj: any = {};
    message.badDebt !== undefined && (obj.badDebt = message.badDebt);
    message.feeToLiquidator !== undefined && (obj.feeToLiquidator = message.feeToLiquidator);
    message.feeToPerpEcosystemFund !== undefined && (obj.feeToPerpEcosystemFund = message.feeToPerpEcosystemFund);
    message.liquidator !== undefined && (obj.liquidator = message.liquidator);
    message.positionResp !== undefined &&
      (obj.positionResp = message.positionResp ? PositionResp.toJSON(message.positionResp) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LiquidateResp>, I>>(object: I): LiquidateResp {
    const message = createBaseLiquidateResp();
    message.badDebt = object.badDebt ?? "";
    message.feeToLiquidator = object.feeToLiquidator ?? "";
    message.feeToPerpEcosystemFund = object.feeToPerpEcosystemFund ?? "";
    message.liquidator = object.liquidator ?? "";
    message.positionResp = (object.positionResp !== undefined && object.positionResp !== null)
      ? PositionResp.fromPartial(object.positionResp)
      : undefined;
    return message;
  },
};

function createBasePairMetadata(): PairMetadata {
  return { pair: undefined, cumulativePremiumFractions: [] };
}

export const PairMetadata = {
  encode(message: PairMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== undefined) {
      AssetPair.encode(message.pair, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.cumulativePremiumFractions) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PairMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePairMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pair = AssetPair.decode(reader, reader.uint32());
          break;
        case 2:
          message.cumulativePremiumFractions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PairMetadata {
    return {
      pair: isSet(object.pair) ? AssetPair.fromJSON(object.pair) : undefined,
      cumulativePremiumFractions: Array.isArray(object?.cumulativePremiumFractions)
        ? object.cumulativePremiumFractions.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: PairMetadata): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair ? AssetPair.toJSON(message.pair) : undefined);
    if (message.cumulativePremiumFractions) {
      obj.cumulativePremiumFractions = message.cumulativePremiumFractions.map((e) => e);
    } else {
      obj.cumulativePremiumFractions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PairMetadata>, I>>(object: I): PairMetadata {
    const message = createBasePairMetadata();
    message.pair = (object.pair !== undefined && object.pair !== null) ? AssetPair.fromPartial(object.pair) : undefined;
    message.cumulativePremiumFractions = object.cumulativePremiumFractions?.map((e) => e) || [];
    return message;
  },
};

function createBasePrepaidBadDebt(): PrepaidBadDebt {
  return { denom: "", amount: "" };
}

export const PrepaidBadDebt = {
  encode(message: PrepaidBadDebt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrepaidBadDebt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrepaidBadDebt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrepaidBadDebt {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: PrepaidBadDebt): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PrepaidBadDebt>, I>>(object: I): PrepaidBadDebt {
    const message = createBasePrepaidBadDebt();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
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
