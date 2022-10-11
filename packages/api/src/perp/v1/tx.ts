/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Position, Side, sideFromJSON, sideToJSON } from "./state";

export const protobufPackage = "nibiru.perp.v1";

/** MsgRemoveMargin: Msg to remove margin. */
export interface MsgRemoveMargin {
  sender: string;
  tokenPair: string;
  margin?: Coin;
}

export interface MsgRemoveMarginResponse {
  /** tokens transferred back to the trader */
  marginOut?: Coin;
  /** the funding payment applied on this position interaction */
  fundingPayment: string;
  /** The resulting position */
  position?: Position;
}

/** MsgAddMargin: Msg to remove margin. */
export interface MsgAddMargin {
  sender: string;
  tokenPair: string;
  margin?: Coin;
}

export interface MsgAddMarginResponse {
  fundingPayment: string;
  position?: Position;
}

export interface MsgLiquidate {
  /** Sender is the liquidator address */
  sender: string;
  /** TokenPair is the identifier for the position's virtual pool */
  tokenPair: string;
  /** Trader is the address of the owner of the position */
  trader: string;
}

export interface MsgLiquidateResponse {
  feeToLiquidator?: Coin;
  feeToPerpEcosystemFund?: Coin;
}

export interface MsgMultiLiquidate {
  sender: string;
  liquidations: MsgMultiLiquidate_MultiLiquidation[];
}

export interface MsgMultiLiquidate_MultiLiquidation {
  tokenPair: string;
  trader: string;
}

export interface MsgMultiLiquidateResponse {
  liquidationResponses: MsgMultiLiquidateResponse_MultiLiquidateResponse[];
}

export interface MsgMultiLiquidateResponse_MultiLiquidateResponse {
  error: string | undefined;
  liquidation?: MsgLiquidateResponse | undefined;
}

export interface MsgOpenPosition {
  sender: string;
  tokenPair: string;
  side: Side;
  quoteAssetAmount: string;
  leverage: string;
  baseAssetAmountLimit: string;
}

export interface MsgOpenPositionResponse {
  position?: Position;
  /** The amount of quote assets exchanged. */
  exchangedNotionalValue: string;
  /** The amount of base assets exchanged. */
  exchangedPositionSize: string;
  /** The funding payment applied on this position change, measured in quote units. */
  fundingPayment: string;
  /** The amount of PnL realized on this position changed, measured in quote units. */
  realizedPnl: string;
  /** The unrealized PnL in the position after the position change, measured in quote units. */
  unrealizedPnlAfter: string;
  /**
   * The amount of margin the trader has to give to the vault.
   * A negative value means the vault pays the trader.
   */
  marginToVault: string;
  /** The position's notional value after the position change, measured in quote units. */
  positionNotional: string;
}

export interface MsgClosePosition {
  sender: string;
  tokenPair: string;
}

export interface MsgClosePositionResponse {
  /** The amount of quote assets exchanged. */
  exchangedNotionalValue: string;
  /** The amount of base assets exchanged. */
  exchangedPositionSize: string;
  /** The funding payment applied on this position change, measured in quote units. */
  fundingPayment: string;
  /** The amount of PnL realized on this position changed, measured in quote units. */
  realizedPnl: string;
  /**
   * The amount of margin the trader receives after closing the position, from the vault.
   * Should never be negative.
   */
  marginToTrader: string;
}

function createBaseMsgRemoveMargin(): MsgRemoveMargin {
  return { sender: "", tokenPair: "", margin: undefined };
}

export const MsgRemoveMargin = {
  encode(message: MsgRemoveMargin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.tokenPair !== "") {
      writer.uint32(18).string(message.tokenPair);
    }
    if (message.margin !== undefined) {
      Coin.encode(message.margin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveMargin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveMargin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.tokenPair = reader.string();
          break;
        case 3:
          message.margin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveMargin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      tokenPair: isSet(object.tokenPair) ? String(object.tokenPair) : "",
      margin: isSet(object.margin) ? Coin.fromJSON(object.margin) : undefined,
    };
  },

  toJSON(message: MsgRemoveMargin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.tokenPair !== undefined && (obj.tokenPair = message.tokenPair);
    message.margin !== undefined && (obj.margin = message.margin ? Coin.toJSON(message.margin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveMargin>, I>>(object: I): MsgRemoveMargin {
    const message = createBaseMsgRemoveMargin();
    message.sender = object.sender ?? "";
    message.tokenPair = object.tokenPair ?? "";
    message.margin = (object.margin !== undefined && object.margin !== null)
      ? Coin.fromPartial(object.margin)
      : undefined;
    return message;
  },
};

function createBaseMsgRemoveMarginResponse(): MsgRemoveMarginResponse {
  return { marginOut: undefined, fundingPayment: "", position: undefined };
}

export const MsgRemoveMarginResponse = {
  encode(message: MsgRemoveMarginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marginOut !== undefined) {
      Coin.encode(message.marginOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.fundingPayment !== "") {
      writer.uint32(18).string(message.fundingPayment);
    }
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveMarginResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveMarginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marginOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.fundingPayment = reader.string();
          break;
        case 3:
          message.position = Position.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveMarginResponse {
    return {
      marginOut: isSet(object.marginOut) ? Coin.fromJSON(object.marginOut) : undefined,
      fundingPayment: isSet(object.fundingPayment) ? String(object.fundingPayment) : "",
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
    };
  },

  toJSON(message: MsgRemoveMarginResponse): unknown {
    const obj: any = {};
    message.marginOut !== undefined && (obj.marginOut = message.marginOut ? Coin.toJSON(message.marginOut) : undefined);
    message.fundingPayment !== undefined && (obj.fundingPayment = message.fundingPayment);
    message.position !== undefined && (obj.position = message.position ? Position.toJSON(message.position) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveMarginResponse>, I>>(object: I): MsgRemoveMarginResponse {
    const message = createBaseMsgRemoveMarginResponse();
    message.marginOut = (object.marginOut !== undefined && object.marginOut !== null)
      ? Coin.fromPartial(object.marginOut)
      : undefined;
    message.fundingPayment = object.fundingPayment ?? "";
    message.position = (object.position !== undefined && object.position !== null)
      ? Position.fromPartial(object.position)
      : undefined;
    return message;
  },
};

function createBaseMsgAddMargin(): MsgAddMargin {
  return { sender: "", tokenPair: "", margin: undefined };
}

export const MsgAddMargin = {
  encode(message: MsgAddMargin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.tokenPair !== "") {
      writer.uint32(18).string(message.tokenPair);
    }
    if (message.margin !== undefined) {
      Coin.encode(message.margin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMargin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddMargin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.tokenPair = reader.string();
          break;
        case 3:
          message.margin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddMargin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      tokenPair: isSet(object.tokenPair) ? String(object.tokenPair) : "",
      margin: isSet(object.margin) ? Coin.fromJSON(object.margin) : undefined,
    };
  },

  toJSON(message: MsgAddMargin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.tokenPair !== undefined && (obj.tokenPair = message.tokenPair);
    message.margin !== undefined && (obj.margin = message.margin ? Coin.toJSON(message.margin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddMargin>, I>>(object: I): MsgAddMargin {
    const message = createBaseMsgAddMargin();
    message.sender = object.sender ?? "";
    message.tokenPair = object.tokenPair ?? "";
    message.margin = (object.margin !== undefined && object.margin !== null)
      ? Coin.fromPartial(object.margin)
      : undefined;
    return message;
  },
};

function createBaseMsgAddMarginResponse(): MsgAddMarginResponse {
  return { fundingPayment: "", position: undefined };
}

export const MsgAddMarginResponse = {
  encode(message: MsgAddMarginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fundingPayment !== "") {
      writer.uint32(10).string(message.fundingPayment);
    }
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMarginResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddMarginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fundingPayment = reader.string();
          break;
        case 2:
          message.position = Position.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddMarginResponse {
    return {
      fundingPayment: isSet(object.fundingPayment) ? String(object.fundingPayment) : "",
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
    };
  },

  toJSON(message: MsgAddMarginResponse): unknown {
    const obj: any = {};
    message.fundingPayment !== undefined && (obj.fundingPayment = message.fundingPayment);
    message.position !== undefined && (obj.position = message.position ? Position.toJSON(message.position) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddMarginResponse>, I>>(object: I): MsgAddMarginResponse {
    const message = createBaseMsgAddMarginResponse();
    message.fundingPayment = object.fundingPayment ?? "";
    message.position = (object.position !== undefined && object.position !== null)
      ? Position.fromPartial(object.position)
      : undefined;
    return message;
  },
};

function createBaseMsgLiquidate(): MsgLiquidate {
  return { sender: "", tokenPair: "", trader: "" };
}

export const MsgLiquidate = {
  encode(message: MsgLiquidate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.tokenPair !== "") {
      writer.uint32(18).string(message.tokenPair);
    }
    if (message.trader !== "") {
      writer.uint32(26).string(message.trader);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.tokenPair = reader.string();
          break;
        case 3:
          message.trader = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidate {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      tokenPair: isSet(object.tokenPair) ? String(object.tokenPair) : "",
      trader: isSet(object.trader) ? String(object.trader) : "",
    };
  },

  toJSON(message: MsgLiquidate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.tokenPair !== undefined && (obj.tokenPair = message.tokenPair);
    message.trader !== undefined && (obj.trader = message.trader);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidate>, I>>(object: I): MsgLiquidate {
    const message = createBaseMsgLiquidate();
    message.sender = object.sender ?? "";
    message.tokenPair = object.tokenPair ?? "";
    message.trader = object.trader ?? "";
    return message;
  },
};

function createBaseMsgLiquidateResponse(): MsgLiquidateResponse {
  return { feeToLiquidator: undefined, feeToPerpEcosystemFund: undefined };
}

export const MsgLiquidateResponse = {
  encode(message: MsgLiquidateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeToLiquidator !== undefined) {
      Coin.encode(message.feeToLiquidator, writer.uint32(10).fork()).ldelim();
    }
    if (message.feeToPerpEcosystemFund !== undefined) {
      Coin.encode(message.feeToPerpEcosystemFund, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeToLiquidator = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.feeToPerpEcosystemFund = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateResponse {
    return {
      feeToLiquidator: isSet(object.feeToLiquidator) ? Coin.fromJSON(object.feeToLiquidator) : undefined,
      feeToPerpEcosystemFund: isSet(object.feeToPerpEcosystemFund)
        ? Coin.fromJSON(object.feeToPerpEcosystemFund)
        : undefined,
    };
  },

  toJSON(message: MsgLiquidateResponse): unknown {
    const obj: any = {};
    message.feeToLiquidator !== undefined &&
      (obj.feeToLiquidator = message.feeToLiquidator ? Coin.toJSON(message.feeToLiquidator) : undefined);
    message.feeToPerpEcosystemFund !== undefined && (obj.feeToPerpEcosystemFund = message.feeToPerpEcosystemFund
      ? Coin.toJSON(message.feeToPerpEcosystemFund)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidateResponse>, I>>(object: I): MsgLiquidateResponse {
    const message = createBaseMsgLiquidateResponse();
    message.feeToLiquidator = (object.feeToLiquidator !== undefined && object.feeToLiquidator !== null)
      ? Coin.fromPartial(object.feeToLiquidator)
      : undefined;
    message.feeToPerpEcosystemFund =
      (object.feeToPerpEcosystemFund !== undefined && object.feeToPerpEcosystemFund !== null)
        ? Coin.fromPartial(object.feeToPerpEcosystemFund)
        : undefined;
    return message;
  },
};

function createBaseMsgMultiLiquidate(): MsgMultiLiquidate {
  return { sender: "", liquidations: [] };
}

export const MsgMultiLiquidate = {
  encode(message: MsgMultiLiquidate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.liquidations) {
      MsgMultiLiquidate_MultiLiquidation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiLiquidate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiLiquidate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.liquidations.push(MsgMultiLiquidate_MultiLiquidation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMultiLiquidate {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      liquidations: Array.isArray(object?.liquidations)
        ? object.liquidations.map((e: any) => MsgMultiLiquidate_MultiLiquidation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgMultiLiquidate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.liquidations) {
      obj.liquidations = message.liquidations.map((e) => e ? MsgMultiLiquidate_MultiLiquidation.toJSON(e) : undefined);
    } else {
      obj.liquidations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMultiLiquidate>, I>>(object: I): MsgMultiLiquidate {
    const message = createBaseMsgMultiLiquidate();
    message.sender = object.sender ?? "";
    message.liquidations = object.liquidations?.map((e) => MsgMultiLiquidate_MultiLiquidation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgMultiLiquidate_MultiLiquidation(): MsgMultiLiquidate_MultiLiquidation {
  return { tokenPair: "", trader: "" };
}

export const MsgMultiLiquidate_MultiLiquidation = {
  encode(message: MsgMultiLiquidate_MultiLiquidation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenPair !== "") {
      writer.uint32(18).string(message.tokenPair);
    }
    if (message.trader !== "") {
      writer.uint32(26).string(message.trader);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiLiquidate_MultiLiquidation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiLiquidate_MultiLiquidation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.tokenPair = reader.string();
          break;
        case 3:
          message.trader = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMultiLiquidate_MultiLiquidation {
    return {
      tokenPair: isSet(object.tokenPair) ? String(object.tokenPair) : "",
      trader: isSet(object.trader) ? String(object.trader) : "",
    };
  },

  toJSON(message: MsgMultiLiquidate_MultiLiquidation): unknown {
    const obj: any = {};
    message.tokenPair !== undefined && (obj.tokenPair = message.tokenPair);
    message.trader !== undefined && (obj.trader = message.trader);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMultiLiquidate_MultiLiquidation>, I>>(
    object: I,
  ): MsgMultiLiquidate_MultiLiquidation {
    const message = createBaseMsgMultiLiquidate_MultiLiquidation();
    message.tokenPair = object.tokenPair ?? "";
    message.trader = object.trader ?? "";
    return message;
  },
};

function createBaseMsgMultiLiquidateResponse(): MsgMultiLiquidateResponse {
  return { liquidationResponses: [] };
}

export const MsgMultiLiquidateResponse = {
  encode(message: MsgMultiLiquidateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liquidationResponses) {
      MsgMultiLiquidateResponse_MultiLiquidateResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiLiquidateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiLiquidateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidationResponses.push(
            MsgMultiLiquidateResponse_MultiLiquidateResponse.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMultiLiquidateResponse {
    return {
      liquidationResponses: Array.isArray(object?.liquidationResponses)
        ? object.liquidationResponses.map((e: any) => MsgMultiLiquidateResponse_MultiLiquidateResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgMultiLiquidateResponse): unknown {
    const obj: any = {};
    if (message.liquidationResponses) {
      obj.liquidationResponses = message.liquidationResponses.map((e) =>
        e ? MsgMultiLiquidateResponse_MultiLiquidateResponse.toJSON(e) : undefined
      );
    } else {
      obj.liquidationResponses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMultiLiquidateResponse>, I>>(object: I): MsgMultiLiquidateResponse {
    const message = createBaseMsgMultiLiquidateResponse();
    message.liquidationResponses =
      object.liquidationResponses?.map((e) => MsgMultiLiquidateResponse_MultiLiquidateResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgMultiLiquidateResponse_MultiLiquidateResponse(): MsgMultiLiquidateResponse_MultiLiquidateResponse {
  return { error: undefined, liquidation: undefined };
}

export const MsgMultiLiquidateResponse_MultiLiquidateResponse = {
  encode(
    message: MsgMultiLiquidateResponse_MultiLiquidateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.error !== undefined) {
      writer.uint32(10).string(message.error);
    }
    if (message.liquidation !== undefined) {
      MsgLiquidateResponse.encode(message.liquidation, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiLiquidateResponse_MultiLiquidateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiLiquidateResponse_MultiLiquidateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
          break;
        case 2:
          message.liquidation = MsgLiquidateResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMultiLiquidateResponse_MultiLiquidateResponse {
    return {
      error: isSet(object.error) ? String(object.error) : undefined,
      liquidation: isSet(object.liquidation) ? MsgLiquidateResponse.fromJSON(object.liquidation) : undefined,
    };
  },

  toJSON(message: MsgMultiLiquidateResponse_MultiLiquidateResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = message.error);
    message.liquidation !== undefined &&
      (obj.liquidation = message.liquidation ? MsgLiquidateResponse.toJSON(message.liquidation) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMultiLiquidateResponse_MultiLiquidateResponse>, I>>(
    object: I,
  ): MsgMultiLiquidateResponse_MultiLiquidateResponse {
    const message = createBaseMsgMultiLiquidateResponse_MultiLiquidateResponse();
    message.error = object.error ?? undefined;
    message.liquidation = (object.liquidation !== undefined && object.liquidation !== null)
      ? MsgLiquidateResponse.fromPartial(object.liquidation)
      : undefined;
    return message;
  },
};

function createBaseMsgOpenPosition(): MsgOpenPosition {
  return { sender: "", tokenPair: "", side: 0, quoteAssetAmount: "", leverage: "", baseAssetAmountLimit: "" };
}

export const MsgOpenPosition = {
  encode(message: MsgOpenPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.tokenPair !== "") {
      writer.uint32(18).string(message.tokenPair);
    }
    if (message.side !== 0) {
      writer.uint32(24).int32(message.side);
    }
    if (message.quoteAssetAmount !== "") {
      writer.uint32(34).string(message.quoteAssetAmount);
    }
    if (message.leverage !== "") {
      writer.uint32(42).string(message.leverage);
    }
    if (message.baseAssetAmountLimit !== "") {
      writer.uint32(50).string(message.baseAssetAmountLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpenPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOpenPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.tokenPair = reader.string();
          break;
        case 3:
          message.side = reader.int32() as any;
          break;
        case 4:
          message.quoteAssetAmount = reader.string();
          break;
        case 5:
          message.leverage = reader.string();
          break;
        case 6:
          message.baseAssetAmountLimit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOpenPosition {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      tokenPair: isSet(object.tokenPair) ? String(object.tokenPair) : "",
      side: isSet(object.side) ? sideFromJSON(object.side) : 0,
      quoteAssetAmount: isSet(object.quoteAssetAmount) ? String(object.quoteAssetAmount) : "",
      leverage: isSet(object.leverage) ? String(object.leverage) : "",
      baseAssetAmountLimit: isSet(object.baseAssetAmountLimit) ? String(object.baseAssetAmountLimit) : "",
    };
  },

  toJSON(message: MsgOpenPosition): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.tokenPair !== undefined && (obj.tokenPair = message.tokenPair);
    message.side !== undefined && (obj.side = sideToJSON(message.side));
    message.quoteAssetAmount !== undefined && (obj.quoteAssetAmount = message.quoteAssetAmount);
    message.leverage !== undefined && (obj.leverage = message.leverage);
    message.baseAssetAmountLimit !== undefined && (obj.baseAssetAmountLimit = message.baseAssetAmountLimit);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOpenPosition>, I>>(object: I): MsgOpenPosition {
    const message = createBaseMsgOpenPosition();
    message.sender = object.sender ?? "";
    message.tokenPair = object.tokenPair ?? "";
    message.side = object.side ?? 0;
    message.quoteAssetAmount = object.quoteAssetAmount ?? "";
    message.leverage = object.leverage ?? "";
    message.baseAssetAmountLimit = object.baseAssetAmountLimit ?? "";
    return message;
  },
};

function createBaseMsgOpenPositionResponse(): MsgOpenPositionResponse {
  return {
    position: undefined,
    exchangedNotionalValue: "",
    exchangedPositionSize: "",
    fundingPayment: "",
    realizedPnl: "",
    unrealizedPnlAfter: "",
    marginToVault: "",
    positionNotional: "",
  };
}

export const MsgOpenPositionResponse = {
  encode(message: MsgOpenPositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.exchangedNotionalValue !== "") {
      writer.uint32(18).string(message.exchangedNotionalValue);
    }
    if (message.exchangedPositionSize !== "") {
      writer.uint32(26).string(message.exchangedPositionSize);
    }
    if (message.fundingPayment !== "") {
      writer.uint32(34).string(message.fundingPayment);
    }
    if (message.realizedPnl !== "") {
      writer.uint32(42).string(message.realizedPnl);
    }
    if (message.unrealizedPnlAfter !== "") {
      writer.uint32(50).string(message.unrealizedPnlAfter);
    }
    if (message.marginToVault !== "") {
      writer.uint32(58).string(message.marginToVault);
    }
    if (message.positionNotional !== "") {
      writer.uint32(66).string(message.positionNotional);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpenPositionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOpenPositionResponse();
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
          message.fundingPayment = reader.string();
          break;
        case 5:
          message.realizedPnl = reader.string();
          break;
        case 6:
          message.unrealizedPnlAfter = reader.string();
          break;
        case 7:
          message.marginToVault = reader.string();
          break;
        case 8:
          message.positionNotional = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOpenPositionResponse {
    return {
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
      exchangedNotionalValue: isSet(object.exchangedNotionalValue) ? String(object.exchangedNotionalValue) : "",
      exchangedPositionSize: isSet(object.exchangedPositionSize) ? String(object.exchangedPositionSize) : "",
      fundingPayment: isSet(object.fundingPayment) ? String(object.fundingPayment) : "",
      realizedPnl: isSet(object.realizedPnl) ? String(object.realizedPnl) : "",
      unrealizedPnlAfter: isSet(object.unrealizedPnlAfter) ? String(object.unrealizedPnlAfter) : "",
      marginToVault: isSet(object.marginToVault) ? String(object.marginToVault) : "",
      positionNotional: isSet(object.positionNotional) ? String(object.positionNotional) : "",
    };
  },

  toJSON(message: MsgOpenPositionResponse): unknown {
    const obj: any = {};
    message.position !== undefined && (obj.position = message.position ? Position.toJSON(message.position) : undefined);
    message.exchangedNotionalValue !== undefined && (obj.exchangedNotionalValue = message.exchangedNotionalValue);
    message.exchangedPositionSize !== undefined && (obj.exchangedPositionSize = message.exchangedPositionSize);
    message.fundingPayment !== undefined && (obj.fundingPayment = message.fundingPayment);
    message.realizedPnl !== undefined && (obj.realizedPnl = message.realizedPnl);
    message.unrealizedPnlAfter !== undefined && (obj.unrealizedPnlAfter = message.unrealizedPnlAfter);
    message.marginToVault !== undefined && (obj.marginToVault = message.marginToVault);
    message.positionNotional !== undefined && (obj.positionNotional = message.positionNotional);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOpenPositionResponse>, I>>(object: I): MsgOpenPositionResponse {
    const message = createBaseMsgOpenPositionResponse();
    message.position = (object.position !== undefined && object.position !== null)
      ? Position.fromPartial(object.position)
      : undefined;
    message.exchangedNotionalValue = object.exchangedNotionalValue ?? "";
    message.exchangedPositionSize = object.exchangedPositionSize ?? "";
    message.fundingPayment = object.fundingPayment ?? "";
    message.realizedPnl = object.realizedPnl ?? "";
    message.unrealizedPnlAfter = object.unrealizedPnlAfter ?? "";
    message.marginToVault = object.marginToVault ?? "";
    message.positionNotional = object.positionNotional ?? "";
    return message;
  },
};

function createBaseMsgClosePosition(): MsgClosePosition {
  return { sender: "", tokenPair: "" };
}

export const MsgClosePosition = {
  encode(message: MsgClosePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.tokenPair !== "") {
      writer.uint32(18).string(message.tokenPair);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClosePosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClosePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.tokenPair = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClosePosition {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      tokenPair: isSet(object.tokenPair) ? String(object.tokenPair) : "",
    };
  },

  toJSON(message: MsgClosePosition): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.tokenPair !== undefined && (obj.tokenPair = message.tokenPair);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClosePosition>, I>>(object: I): MsgClosePosition {
    const message = createBaseMsgClosePosition();
    message.sender = object.sender ?? "";
    message.tokenPair = object.tokenPair ?? "";
    return message;
  },
};

function createBaseMsgClosePositionResponse(): MsgClosePositionResponse {
  return {
    exchangedNotionalValue: "",
    exchangedPositionSize: "",
    fundingPayment: "",
    realizedPnl: "",
    marginToTrader: "",
  };
}

export const MsgClosePositionResponse = {
  encode(message: MsgClosePositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exchangedNotionalValue !== "") {
      writer.uint32(10).string(message.exchangedNotionalValue);
    }
    if (message.exchangedPositionSize !== "") {
      writer.uint32(18).string(message.exchangedPositionSize);
    }
    if (message.fundingPayment !== "") {
      writer.uint32(26).string(message.fundingPayment);
    }
    if (message.realizedPnl !== "") {
      writer.uint32(34).string(message.realizedPnl);
    }
    if (message.marginToTrader !== "") {
      writer.uint32(58).string(message.marginToTrader);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClosePositionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClosePositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangedNotionalValue = reader.string();
          break;
        case 2:
          message.exchangedPositionSize = reader.string();
          break;
        case 3:
          message.fundingPayment = reader.string();
          break;
        case 4:
          message.realizedPnl = reader.string();
          break;
        case 7:
          message.marginToTrader = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClosePositionResponse {
    return {
      exchangedNotionalValue: isSet(object.exchangedNotionalValue) ? String(object.exchangedNotionalValue) : "",
      exchangedPositionSize: isSet(object.exchangedPositionSize) ? String(object.exchangedPositionSize) : "",
      fundingPayment: isSet(object.fundingPayment) ? String(object.fundingPayment) : "",
      realizedPnl: isSet(object.realizedPnl) ? String(object.realizedPnl) : "",
      marginToTrader: isSet(object.marginToTrader) ? String(object.marginToTrader) : "",
    };
  },

  toJSON(message: MsgClosePositionResponse): unknown {
    const obj: any = {};
    message.exchangedNotionalValue !== undefined && (obj.exchangedNotionalValue = message.exchangedNotionalValue);
    message.exchangedPositionSize !== undefined && (obj.exchangedPositionSize = message.exchangedPositionSize);
    message.fundingPayment !== undefined && (obj.fundingPayment = message.fundingPayment);
    message.realizedPnl !== undefined && (obj.realizedPnl = message.realizedPnl);
    message.marginToTrader !== undefined && (obj.marginToTrader = message.marginToTrader);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClosePositionResponse>, I>>(object: I): MsgClosePositionResponse {
    const message = createBaseMsgClosePositionResponse();
    message.exchangedNotionalValue = object.exchangedNotionalValue ?? "";
    message.exchangedPositionSize = object.exchangedPositionSize ?? "";
    message.fundingPayment = object.fundingPayment ?? "";
    message.realizedPnl = object.realizedPnl ?? "";
    message.marginToTrader = object.marginToTrader ?? "";
    return message;
  },
};

/** Msg defines the x/perp Msg service. */
export interface Msg {
  RemoveMargin(request: MsgRemoveMargin): Promise<MsgRemoveMarginResponse>;
  AddMargin(request: MsgAddMargin): Promise<MsgAddMarginResponse>;
  /**
   * Liquidate is a transaction that allows the caller to fully or partially
   * liquidate an existing position.
   */
  Liquidate(request: MsgLiquidate): Promise<MsgLiquidateResponse>;
  MultiLiquidate(request: MsgMultiLiquidate): Promise<MsgMultiLiquidateResponse>;
  OpenPosition(request: MsgOpenPosition): Promise<MsgOpenPositionResponse>;
  ClosePosition(request: MsgClosePosition): Promise<MsgClosePositionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RemoveMargin = this.RemoveMargin.bind(this);
    this.AddMargin = this.AddMargin.bind(this);
    this.Liquidate = this.Liquidate.bind(this);
    this.MultiLiquidate = this.MultiLiquidate.bind(this);
    this.OpenPosition = this.OpenPosition.bind(this);
    this.ClosePosition = this.ClosePosition.bind(this);
  }
  RemoveMargin(request: MsgRemoveMargin): Promise<MsgRemoveMarginResponse> {
    const data = MsgRemoveMargin.encode(request).finish();
    const promise = this.rpc.request("nibiru.perp.v1.Msg", "RemoveMargin", data);
    return promise.then((data) => MsgRemoveMarginResponse.decode(new _m0.Reader(data)));
  }

  AddMargin(request: MsgAddMargin): Promise<MsgAddMarginResponse> {
    const data = MsgAddMargin.encode(request).finish();
    const promise = this.rpc.request("nibiru.perp.v1.Msg", "AddMargin", data);
    return promise.then((data) => MsgAddMarginResponse.decode(new _m0.Reader(data)));
  }

  Liquidate(request: MsgLiquidate): Promise<MsgLiquidateResponse> {
    const data = MsgLiquidate.encode(request).finish();
    const promise = this.rpc.request("nibiru.perp.v1.Msg", "Liquidate", data);
    return promise.then((data) => MsgLiquidateResponse.decode(new _m0.Reader(data)));
  }

  MultiLiquidate(request: MsgMultiLiquidate): Promise<MsgMultiLiquidateResponse> {
    const data = MsgMultiLiquidate.encode(request).finish();
    const promise = this.rpc.request("nibiru.perp.v1.Msg", "MultiLiquidate", data);
    return promise.then((data) => MsgMultiLiquidateResponse.decode(new _m0.Reader(data)));
  }

  OpenPosition(request: MsgOpenPosition): Promise<MsgOpenPositionResponse> {
    const data = MsgOpenPosition.encode(request).finish();
    const promise = this.rpc.request("nibiru.perp.v1.Msg", "OpenPosition", data);
    return promise.then((data) => MsgOpenPositionResponse.decode(new _m0.Reader(data)));
  }

  ClosePosition(request: MsgClosePosition): Promise<MsgClosePositionResponse> {
    const data = MsgClosePosition.encode(request).finish();
    const promise = this.rpc.request("nibiru.perp.v1.Msg", "ClosePosition", data);
    return promise.then((data) => MsgClosePositionResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
