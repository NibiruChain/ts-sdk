// @generated by protoc-gen-es v1.2.1 with parameter "target=ts"
// @generated from file nibiru/perp/v2/tx.proto (package nibiru.perp.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from "@bufbuild/protobuf"
import { Message, proto3 } from "@bufbuild/protobuf"
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js"
import { Direction, Position } from "./state_pb.js"

/**
 * MsgRemoveMargin: Msg to remove margin.
 *
 * @generated from message nibiru.perp.v2.MsgRemoveMargin
 */
export class MsgRemoveMargin extends Message<MsgRemoveMargin> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = ""

  /**
   * @generated from field: string pair = 2;
   */
  pair = ""

  /**
   * @generated from field: cosmos.base.v1beta1.Coin margin = 3;
   */
  margin?: Coin

  constructor(data?: PartialMessage<MsgRemoveMargin>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = "nibiru.perp.v2.MsgRemoveMargin"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pair", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "margin", kind: "message", T: Coin },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): MsgRemoveMargin {
    return new MsgRemoveMargin().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): MsgRemoveMargin {
    return new MsgRemoveMargin().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): MsgRemoveMargin {
    return new MsgRemoveMargin().fromJsonString(jsonString, options)
  }

  static equals(
    a: MsgRemoveMargin | PlainMessage<MsgRemoveMargin> | undefined,
    b: MsgRemoveMargin | PlainMessage<MsgRemoveMargin> | undefined,
  ): boolean {
    return proto3.util.equals(MsgRemoveMargin, a, b)
  }
}

/**
 * @generated from message nibiru.perp.v2.MsgRemoveMarginResponse
 */
export class MsgRemoveMarginResponse extends Message<MsgRemoveMarginResponse> {
  /**
   * tokens transferred back to the trader
   *
   * @generated from field: cosmos.base.v1beta1.Coin margin_out = 1;
   */
  marginOut?: Coin

  /**
   * the funding payment applied on this position interaction
   *
   * @generated from field: string funding_payment = 2;
   */
  fundingPayment = ""

  /**
   * The resulting position
   *
   * @generated from field: nibiru.perp.v2.Position position = 3;
   */
  position?: Position

  constructor(data?: PartialMessage<MsgRemoveMarginResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = "nibiru.perp.v2.MsgRemoveMarginResponse"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "margin_out", kind: "message", T: Coin },
    { no: 2, name: "funding_payment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "position", kind: "message", T: Position },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): MsgRemoveMarginResponse {
    return new MsgRemoveMarginResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): MsgRemoveMarginResponse {
    return new MsgRemoveMarginResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): MsgRemoveMarginResponse {
    return new MsgRemoveMarginResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: MsgRemoveMarginResponse | PlainMessage<MsgRemoveMarginResponse> | undefined,
    b: MsgRemoveMarginResponse | PlainMessage<MsgRemoveMarginResponse> | undefined,
  ): boolean {
    return proto3.util.equals(MsgRemoveMarginResponse, a, b)
  }
}

/**
 * MsgAddMargin: Msg to remove margin.
 *
 * @generated from message nibiru.perp.v2.MsgAddMargin
 */
export class MsgAddMargin extends Message<MsgAddMargin> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = ""

  /**
   * @generated from field: string pair = 2;
   */
  pair = ""

  /**
   * @generated from field: cosmos.base.v1beta1.Coin margin = 3;
   */
  margin?: Coin

  constructor(data?: PartialMessage<MsgAddMargin>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = "nibiru.perp.v2.MsgAddMargin"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pair", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "margin", kind: "message", T: Coin },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): MsgAddMargin {
    return new MsgAddMargin().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): MsgAddMargin {
    return new MsgAddMargin().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): MsgAddMargin {
    return new MsgAddMargin().fromJsonString(jsonString, options)
  }

  static equals(
    a: MsgAddMargin | PlainMessage<MsgAddMargin> | undefined,
    b: MsgAddMargin | PlainMessage<MsgAddMargin> | undefined,
  ): boolean {
    return proto3.util.equals(MsgAddMargin, a, b)
  }
}

/**
 * @generated from message nibiru.perp.v2.MsgAddMarginResponse
 */
export class MsgAddMarginResponse extends Message<MsgAddMarginResponse> {
  /**
   * @generated from field: string funding_payment = 1;
   */
  fundingPayment = ""

  /**
   * @generated from field: nibiru.perp.v2.Position position = 2;
   */
  position?: Position

  constructor(data?: PartialMessage<MsgAddMarginResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = "nibiru.perp.v2.MsgAddMarginResponse"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "funding_payment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "position", kind: "message", T: Position },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): MsgAddMarginResponse {
    return new MsgAddMarginResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): MsgAddMarginResponse {
    return new MsgAddMarginResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): MsgAddMarginResponse {
    return new MsgAddMarginResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: MsgAddMarginResponse | PlainMessage<MsgAddMarginResponse> | undefined,
    b: MsgAddMarginResponse | PlainMessage<MsgAddMarginResponse> | undefined,
  ): boolean {
    return proto3.util.equals(MsgAddMarginResponse, a, b)
  }
}

/**
 * @generated from message nibiru.perp.v2.MsgMultiLiquidate
 */
export class MsgMultiLiquidate extends Message<MsgMultiLiquidate> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = ""

  /**
   * @generated from field: repeated nibiru.perp.v2.MsgMultiLiquidate.Liquidation liquidations = 2;
   */
  liquidations: MsgMultiLiquidate_Liquidation[] = []

  constructor(data?: PartialMessage<MsgMultiLiquidate>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = "nibiru.perp.v2.MsgMultiLiquidate"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    {
      no: 2,
      name: "liquidations",
      kind: "message",
      T: MsgMultiLiquidate_Liquidation,
      repeated: true,
    },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): MsgMultiLiquidate {
    return new MsgMultiLiquidate().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): MsgMultiLiquidate {
    return new MsgMultiLiquidate().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): MsgMultiLiquidate {
    return new MsgMultiLiquidate().fromJsonString(jsonString, options)
  }

  static equals(
    a: MsgMultiLiquidate | PlainMessage<MsgMultiLiquidate> | undefined,
    b: MsgMultiLiquidate | PlainMessage<MsgMultiLiquidate> | undefined,
  ): boolean {
    return proto3.util.equals(MsgMultiLiquidate, a, b)
  }
}

/**
 * @generated from message nibiru.perp.v2.MsgMultiLiquidate.Liquidation
 */
export class MsgMultiLiquidate_Liquidation extends Message<MsgMultiLiquidate_Liquidation> {
  /**
   * @generated from field: string pair = 1;
   */
  pair = ""

  /**
   * @generated from field: string trader = 2;
   */
  trader = ""

  constructor(data?: PartialMessage<MsgMultiLiquidate_Liquidation>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = "nibiru.perp.v2.MsgMultiLiquidate.Liquidation"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pair", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "trader", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): MsgMultiLiquidate_Liquidation {
    return new MsgMultiLiquidate_Liquidation().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): MsgMultiLiquidate_Liquidation {
    return new MsgMultiLiquidate_Liquidation().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): MsgMultiLiquidate_Liquidation {
    return new MsgMultiLiquidate_Liquidation().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | MsgMultiLiquidate_Liquidation
      | PlainMessage<MsgMultiLiquidate_Liquidation>
      | undefined,
    b:
      | MsgMultiLiquidate_Liquidation
      | PlainMessage<MsgMultiLiquidate_Liquidation>
      | undefined,
  ): boolean {
    return proto3.util.equals(MsgMultiLiquidate_Liquidation, a, b)
  }
}

/**
 * @generated from message nibiru.perp.v2.MsgMultiLiquidateResponse
 */
export class MsgMultiLiquidateResponse extends Message<MsgMultiLiquidateResponse> {
  /**
   * @generated from field: repeated nibiru.perp.v2.MsgMultiLiquidateResponse.LiquidationResponse liquidations = 1;
   */
  liquidations: MsgMultiLiquidateResponse_LiquidationResponse[] = []

  constructor(data?: PartialMessage<MsgMultiLiquidateResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = "nibiru.perp.v2.MsgMultiLiquidateResponse"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: "liquidations",
      kind: "message",
      T: MsgMultiLiquidateResponse_LiquidationResponse,
      repeated: true,
    },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): MsgMultiLiquidateResponse {
    return new MsgMultiLiquidateResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): MsgMultiLiquidateResponse {
    return new MsgMultiLiquidateResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): MsgMultiLiquidateResponse {
    return new MsgMultiLiquidateResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: MsgMultiLiquidateResponse | PlainMessage<MsgMultiLiquidateResponse> | undefined,
    b: MsgMultiLiquidateResponse | PlainMessage<MsgMultiLiquidateResponse> | undefined,
  ): boolean {
    return proto3.util.equals(MsgMultiLiquidateResponse, a, b)
  }
}

/**
 * @generated from message nibiru.perp.v2.MsgMultiLiquidateResponse.LiquidationResponse
 */
export class MsgMultiLiquidateResponse_LiquidationResponse extends Message<MsgMultiLiquidateResponse_LiquidationResponse> {
  /**
   * @generated from field: bool success = 1;
   */
  success = false

  /**
   * @generated from field: string error = 2;
   */
  error = ""

  /**
   * nullable since no fee is taken on failed liquidation
   *
   * @generated from field: cosmos.base.v1beta1.Coin liquidator_fee = 3;
   */
  liquidatorFee?: Coin

  /**
   * perp ecosystem fund
   *
   * @generated from field: cosmos.base.v1beta1.Coin perp_ef_fee = 4;
   */
  perpEfFee?: Coin

  /**
   * @generated from field: string trader = 5;
   */
  trader = ""

  constructor(data?: PartialMessage<MsgMultiLiquidateResponse_LiquidationResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName =
    "nibiru.perp.v2.MsgMultiLiquidateResponse.LiquidationResponse"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "success", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "liquidator_fee", kind: "message", T: Coin },
    { no: 4, name: "perp_ef_fee", kind: "message", T: Coin },
    { no: 5, name: "trader", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): MsgMultiLiquidateResponse_LiquidationResponse {
    return new MsgMultiLiquidateResponse_LiquidationResponse().fromBinary(
      bytes,
      options,
    )
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): MsgMultiLiquidateResponse_LiquidationResponse {
    return new MsgMultiLiquidateResponse_LiquidationResponse().fromJson(
      jsonValue,
      options,
    )
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): MsgMultiLiquidateResponse_LiquidationResponse {
    return new MsgMultiLiquidateResponse_LiquidationResponse().fromJsonString(
      jsonString,
      options,
    )
  }

  static equals(
    a:
      | MsgMultiLiquidateResponse_LiquidationResponse
      | PlainMessage<MsgMultiLiquidateResponse_LiquidationResponse>
      | undefined,
    b:
      | MsgMultiLiquidateResponse_LiquidationResponse
      | PlainMessage<MsgMultiLiquidateResponse_LiquidationResponse>
      | undefined,
  ): boolean {
    return proto3.util.equals(MsgMultiLiquidateResponse_LiquidationResponse, a, b)
  }
}

/**
 * @generated from message nibiru.perp.v2.MsgOpenPosition
 */
export class MsgOpenPosition extends Message<MsgOpenPosition> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = ""

  /**
   * @generated from field: string pair = 2;
   */
  pair = ""

  /**
   * @generated from field: nibiru.perp.v2.Direction side = 3;
   */
  side = Direction.DIRECTION_UNSPECIFIED

  /**
   * @generated from field: string quote_asset_amount = 4;
   */
  quoteAssetAmount = ""

  /**
   * @generated from field: string leverage = 5;
   */
  leverage = ""

  /**
   * @generated from field: string base_asset_amount_limit = 6;
   */
  baseAssetAmountLimit = ""

  constructor(data?: PartialMessage<MsgOpenPosition>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = "nibiru.perp.v2.MsgOpenPosition"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pair", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "side", kind: "enum", T: proto3.getEnumType(Direction) },
    { no: 4, name: "quote_asset_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "leverage", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    {
      no: 6,
      name: "base_asset_amount_limit",
      kind: "scalar",
      T: 9 /* ScalarType.STRING */,
    },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): MsgOpenPosition {
    return new MsgOpenPosition().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): MsgOpenPosition {
    return new MsgOpenPosition().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): MsgOpenPosition {
    return new MsgOpenPosition().fromJsonString(jsonString, options)
  }

  static equals(
    a: MsgOpenPosition | PlainMessage<MsgOpenPosition> | undefined,
    b: MsgOpenPosition | PlainMessage<MsgOpenPosition> | undefined,
  ): boolean {
    return proto3.util.equals(MsgOpenPosition, a, b)
  }
}

/**
 * @generated from message nibiru.perp.v2.MsgOpenPositionResponse
 */
export class MsgOpenPositionResponse extends Message<MsgOpenPositionResponse> {
  /**
   * @generated from field: nibiru.perp.v2.Position position = 1;
   */
  position?: Position

  /**
   * The amount of quote assets exchanged.
   *
   * @generated from field: string exchanged_notional_value = 2;
   */
  exchangedNotionalValue = ""

  /**
   * The amount of base assets exchanged.
   *
   * @generated from field: string exchanged_position_size = 3;
   */
  exchangedPositionSize = ""

  /**
   * The funding payment applied on this position change, measured in quote
   * units.
   *
   * @generated from field: string funding_payment = 4;
   */
  fundingPayment = ""

  /**
   * The amount of PnL realized on this position changed, measured in quote
   * units.
   *
   * @generated from field: string realized_pnl = 5;
   */
  realizedPnl = ""

  /**
   * The unrealized PnL in the position after the position change, measured in
   * quote units.
   *
   * @generated from field: string unrealized_pnl_after = 6;
   */
  unrealizedPnlAfter = ""

  /**
   * The amount of margin the trader has to give to the vault.
   * A negative value means the vault pays the trader.
   *
   * @generated from field: string margin_to_vault = 7;
   */
  marginToVault = ""

  /**
   * The position's notional value after the position change, measured in quote
   * units.
   *
   * @generated from field: string position_notional = 8;
   */
  positionNotional = ""

  constructor(data?: PartialMessage<MsgOpenPositionResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = "nibiru.perp.v2.MsgOpenPositionResponse"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "position", kind: "message", T: Position },
    {
      no: 2,
      name: "exchanged_notional_value",
      kind: "scalar",
      T: 9 /* ScalarType.STRING */,
    },
    {
      no: 3,
      name: "exchanged_position_size",
      kind: "scalar",
      T: 9 /* ScalarType.STRING */,
    },
    { no: 4, name: "funding_payment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "realized_pnl", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    {
      no: 6,
      name: "unrealized_pnl_after",
      kind: "scalar",
      T: 9 /* ScalarType.STRING */,
    },
    { no: 7, name: "margin_to_vault", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "position_notional", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): MsgOpenPositionResponse {
    return new MsgOpenPositionResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): MsgOpenPositionResponse {
    return new MsgOpenPositionResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): MsgOpenPositionResponse {
    return new MsgOpenPositionResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: MsgOpenPositionResponse | PlainMessage<MsgOpenPositionResponse> | undefined,
    b: MsgOpenPositionResponse | PlainMessage<MsgOpenPositionResponse> | undefined,
  ): boolean {
    return proto3.util.equals(MsgOpenPositionResponse, a, b)
  }
}

/**
 * @generated from message nibiru.perp.v2.MsgClosePosition
 */
export class MsgClosePosition extends Message<MsgClosePosition> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = ""

  /**
   * @generated from field: string pair = 2;
   */
  pair = ""

  constructor(data?: PartialMessage<MsgClosePosition>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = "nibiru.perp.v2.MsgClosePosition"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pair", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): MsgClosePosition {
    return new MsgClosePosition().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): MsgClosePosition {
    return new MsgClosePosition().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): MsgClosePosition {
    return new MsgClosePosition().fromJsonString(jsonString, options)
  }

  static equals(
    a: MsgClosePosition | PlainMessage<MsgClosePosition> | undefined,
    b: MsgClosePosition | PlainMessage<MsgClosePosition> | undefined,
  ): boolean {
    return proto3.util.equals(MsgClosePosition, a, b)
  }
}

/**
 * @generated from message nibiru.perp.v2.MsgClosePositionResponse
 */
export class MsgClosePositionResponse extends Message<MsgClosePositionResponse> {
  /**
   * The amount of quote assets exchanged.
   *
   * @generated from field: string exchanged_notional_value = 1;
   */
  exchangedNotionalValue = ""

  /**
   * The amount of base assets exchanged.
   *
   * @generated from field: string exchanged_position_size = 2;
   */
  exchangedPositionSize = ""

  /**
   * The funding payment applied on this position change, measured in quote
   * units.
   *
   * @generated from field: string funding_payment = 3;
   */
  fundingPayment = ""

  /**
   * The amount of PnL realized on this position changed, measured in quote
   * units.
   *
   * @generated from field: string realized_pnl = 4;
   */
  realizedPnl = ""

  /**
   * The amount of margin the trader receives after closing the position, from
   * the vault. Should never be negative.
   *
   * @generated from field: string margin_to_trader = 7;
   */
  marginToTrader = ""

  constructor(data?: PartialMessage<MsgClosePositionResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = "nibiru.perp.v2.MsgClosePositionResponse"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: "exchanged_notional_value",
      kind: "scalar",
      T: 9 /* ScalarType.STRING */,
    },
    {
      no: 2,
      name: "exchanged_position_size",
      kind: "scalar",
      T: 9 /* ScalarType.STRING */,
    },
    { no: 3, name: "funding_payment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "realized_pnl", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "margin_to_trader", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): MsgClosePositionResponse {
    return new MsgClosePositionResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): MsgClosePositionResponse {
    return new MsgClosePositionResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): MsgClosePositionResponse {
    return new MsgClosePositionResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a: MsgClosePositionResponse | PlainMessage<MsgClosePositionResponse> | undefined,
    b: MsgClosePositionResponse | PlainMessage<MsgClosePositionResponse> | undefined,
  ): boolean {
    return proto3.util.equals(MsgClosePositionResponse, a, b)
  }
}

/**
 * @generated from message nibiru.perp.v2.MsgDonateToEcosystemFund
 */
export class MsgDonateToEcosystemFund extends Message<MsgDonateToEcosystemFund> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = ""

  /**
   * donation to the EF
   *
   * @generated from field: cosmos.base.v1beta1.Coin donation = 2;
   */
  donation?: Coin

  constructor(data?: PartialMessage<MsgDonateToEcosystemFund>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = "nibiru.perp.v2.MsgDonateToEcosystemFund"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "donation", kind: "message", T: Coin },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): MsgDonateToEcosystemFund {
    return new MsgDonateToEcosystemFund().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): MsgDonateToEcosystemFund {
    return new MsgDonateToEcosystemFund().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): MsgDonateToEcosystemFund {
    return new MsgDonateToEcosystemFund().fromJsonString(jsonString, options)
  }

  static equals(
    a: MsgDonateToEcosystemFund | PlainMessage<MsgDonateToEcosystemFund> | undefined,
    b: MsgDonateToEcosystemFund | PlainMessage<MsgDonateToEcosystemFund> | undefined,
  ): boolean {
    return proto3.util.equals(MsgDonateToEcosystemFund, a, b)
  }
}

/**
 * @generated from message nibiru.perp.v2.MsgDonateToEcosystemFundResponse
 */
export class MsgDonateToEcosystemFundResponse extends Message<MsgDonateToEcosystemFundResponse> {
  constructor(data?: PartialMessage<MsgDonateToEcosystemFundResponse>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = "nibiru.perp.v2.MsgDonateToEcosystemFundResponse"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): MsgDonateToEcosystemFundResponse {
    return new MsgDonateToEcosystemFundResponse().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): MsgDonateToEcosystemFundResponse {
    return new MsgDonateToEcosystemFundResponse().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): MsgDonateToEcosystemFundResponse {
    return new MsgDonateToEcosystemFundResponse().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | MsgDonateToEcosystemFundResponse
      | PlainMessage<MsgDonateToEcosystemFundResponse>
      | undefined,
    b:
      | MsgDonateToEcosystemFundResponse
      | PlainMessage<MsgDonateToEcosystemFundResponse>
      | undefined,
  ): boolean {
    return proto3.util.equals(MsgDonateToEcosystemFundResponse, a, b)
  }
}
