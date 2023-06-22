// @generated by protoc-gen-es v1.2.1 with parameter "target=ts"
// @generated from file nibiru/stablecoin/v1/events.proto (package nibiru.stablecoin.v1, syntax proto3)
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

/**
 * @generated from message nibiru.stablecoin.v1.EventTransfer
 */
export class EventTransfer extends Message<EventTransfer> {
  /**
   * @generated from field: cosmos.base.v1beta1.Coin coin = 1;
   */
  coin?: Coin

  /**
   * @generated from field: string from = 2;
   */
  from = ""

  /**
   * @generated from field: string to = 3;
   */
  to = ""

  constructor(data?: PartialMessage<EventTransfer>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = "nibiru.stablecoin.v1.EventTransfer"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "coin", kind: "message", T: Coin },
    { no: 2, name: "from", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "to", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): EventTransfer {
    return new EventTransfer().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): EventTransfer {
    return new EventTransfer().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): EventTransfer {
    return new EventTransfer().fromJsonString(jsonString, options)
  }

  static equals(
    a: EventTransfer | PlainMessage<EventTransfer> | undefined,
    b: EventTransfer | PlainMessage<EventTransfer> | undefined,
  ): boolean {
    return proto3.util.equals(EventTransfer, a, b)
  }
}

/**
 * @generated from message nibiru.stablecoin.v1.EventMintStable
 */
export class EventMintStable extends Message<EventMintStable> {
  /**
   * @generated from field: string amount = 1;
   */
  amount = ""

  constructor(data?: PartialMessage<EventMintStable>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = "nibiru.stablecoin.v1.EventMintStable"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): EventMintStable {
    return new EventMintStable().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): EventMintStable {
    return new EventMintStable().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): EventMintStable {
    return new EventMintStable().fromJsonString(jsonString, options)
  }

  static equals(
    a: EventMintStable | PlainMessage<EventMintStable> | undefined,
    b: EventMintStable | PlainMessage<EventMintStable> | undefined,
  ): boolean {
    return proto3.util.equals(EventMintStable, a, b)
  }
}

/**
 * @generated from message nibiru.stablecoin.v1.EventBurnStable
 */
export class EventBurnStable extends Message<EventBurnStable> {
  /**
   * @generated from field: string amount = 1;
   */
  amount = ""

  constructor(data?: PartialMessage<EventBurnStable>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = "nibiru.stablecoin.v1.EventBurnStable"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): EventBurnStable {
    return new EventBurnStable().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): EventBurnStable {
    return new EventBurnStable().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): EventBurnStable {
    return new EventBurnStable().fromJsonString(jsonString, options)
  }

  static equals(
    a: EventBurnStable | PlainMessage<EventBurnStable> | undefined,
    b: EventBurnStable | PlainMessage<EventBurnStable> | undefined,
  ): boolean {
    return proto3.util.equals(EventBurnStable, a, b)
  }
}

/**
 * @generated from message nibiru.stablecoin.v1.EventMintNIBI
 */
export class EventMintNIBI extends Message<EventMintNIBI> {
  /**
   * @generated from field: string amount = 1;
   */
  amount = ""

  constructor(data?: PartialMessage<EventMintNIBI>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = "nibiru.stablecoin.v1.EventMintNIBI"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): EventMintNIBI {
    return new EventMintNIBI().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): EventMintNIBI {
    return new EventMintNIBI().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): EventMintNIBI {
    return new EventMintNIBI().fromJsonString(jsonString, options)
  }

  static equals(
    a: EventMintNIBI | PlainMessage<EventMintNIBI> | undefined,
    b: EventMintNIBI | PlainMessage<EventMintNIBI> | undefined,
  ): boolean {
    return proto3.util.equals(EventMintNIBI, a, b)
  }
}

/**
 * @generated from message nibiru.stablecoin.v1.EventBurnNIBI
 */
export class EventBurnNIBI extends Message<EventBurnNIBI> {
  /**
   * @generated from field: string amount = 1;
   */
  amount = ""

  constructor(data?: PartialMessage<EventBurnNIBI>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = "nibiru.stablecoin.v1.EventBurnNIBI"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): EventBurnNIBI {
    return new EventBurnNIBI().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): EventBurnNIBI {
    return new EventBurnNIBI().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): EventBurnNIBI {
    return new EventBurnNIBI().fromJsonString(jsonString, options)
  }

  static equals(
    a: EventBurnNIBI | PlainMessage<EventBurnNIBI> | undefined,
    b: EventBurnNIBI | PlainMessage<EventBurnNIBI> | undefined,
  ): boolean {
    return proto3.util.equals(EventBurnNIBI, a, b)
  }
}

/**
 * @generated from message nibiru.stablecoin.v1.EventRecollateralize
 */
export class EventRecollateralize extends Message<EventRecollateralize> {
  /**
   * @generated from field: string caller = 1;
   */
  caller = ""

  /**
   * @generated from field: cosmos.base.v1beta1.Coin in_coin = 2;
   */
  inCoin?: Coin

  /**
   * @generated from field: cosmos.base.v1beta1.Coin out_coin = 3;
   */
  outCoin?: Coin

  /**
   * @generated from field: string coll_ratio = 4;
   */
  collRatio = ""

  constructor(data?: PartialMessage<EventRecollateralize>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = "nibiru.stablecoin.v1.EventRecollateralize"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "caller", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "in_coin", kind: "message", T: Coin },
    { no: 3, name: "out_coin", kind: "message", T: Coin },
    { no: 4, name: "coll_ratio", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): EventRecollateralize {
    return new EventRecollateralize().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): EventRecollateralize {
    return new EventRecollateralize().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): EventRecollateralize {
    return new EventRecollateralize().fromJsonString(jsonString, options)
  }

  static equals(
    a: EventRecollateralize | PlainMessage<EventRecollateralize> | undefined,
    b: EventRecollateralize | PlainMessage<EventRecollateralize> | undefined,
  ): boolean {
    return proto3.util.equals(EventRecollateralize, a, b)
  }
}

/**
 * @generated from message nibiru.stablecoin.v1.EventBuyback
 */
export class EventBuyback extends Message<EventBuyback> {
  /**
   * @generated from field: string caller = 1;
   */
  caller = ""

  /**
   * @generated from field: cosmos.base.v1beta1.Coin in_coin = 2;
   */
  inCoin?: Coin

  /**
   * @generated from field: cosmos.base.v1beta1.Coin out_coin = 3;
   */
  outCoin?: Coin

  /**
   * @generated from field: string coll_ratio = 4;
   */
  collRatio = ""

  constructor(data?: PartialMessage<EventBuyback>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = "nibiru.stablecoin.v1.EventBuyback"
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "caller", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "in_coin", kind: "message", T: Coin },
    { no: 3, name: "out_coin", kind: "message", T: Coin },
    { no: 4, name: "coll_ratio", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): EventBuyback {
    return new EventBuyback().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): EventBuyback {
    return new EventBuyback().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): EventBuyback {
    return new EventBuyback().fromJsonString(jsonString, options)
  }

  static equals(
    a: EventBuyback | PlainMessage<EventBuyback> | undefined,
    b: EventBuyback | PlainMessage<EventBuyback> | undefined,
  ): boolean {
    return proto3.util.equals(EventBuyback, a, b)
  }
}
