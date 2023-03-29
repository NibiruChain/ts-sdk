/* eslint-disable */
import Long from "long"
import * as _m0 from "protobufjs/minimal"

export const protobufPackage = "nibiru.stablecoin.v1"

/** Params defines the parameters for the module. */
export interface Params {
  /** collRatio is the ratio needed as collateral to exchange for stables */
  collRatio: Long
  /** feeRatio is the ratio taken as fees when minting or burning stables */
  feeRatio: Long
  /** efFeeRatio is the ratio taken from the fees that goes to Ecosystem Fund */
  efFeeRatio: Long
  /**
   * BonusRateRecoll is the percentage of extra stablecoin value given to the caller
   * of 'Recollateralize' in units of governance tokens.
   */
  bonusRateRecoll: Long
  /** distr_epoch_identifier defines the frequnecy of update for the collateral ratio */
  distrEpochIdentifier: string
  /** adjustmentStep is the size of the step taken when updating the collateral ratio */
  adjustmentStep: Long
  /** priceLowerBound is the lower bound for the stable coin to trigger a collateral ratio update */
  priceLowerBound: Long
  /** priceUpperBound is the upper bound for the stable coin to trigger a collateral ratio update */
  priceUpperBound: Long
  /** isCollateralRatioValid checks if the collateral ratio is correctly updated */
  isCollateralRatioValid: boolean
}

function createBaseParams(): Params {
  return {
    collRatio: Long.ZERO,
    feeRatio: Long.ZERO,
    efFeeRatio: Long.ZERO,
    bonusRateRecoll: Long.ZERO,
    distrEpochIdentifier: "",
    adjustmentStep: Long.ZERO,
    priceLowerBound: Long.ZERO,
    priceUpperBound: Long.ZERO,
    isCollateralRatioValid: false,
  }
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.collRatio.isZero()) {
      writer.uint32(8).int64(message.collRatio)
    }
    if (!message.feeRatio.isZero()) {
      writer.uint32(16).int64(message.feeRatio)
    }
    if (!message.efFeeRatio.isZero()) {
      writer.uint32(24).int64(message.efFeeRatio)
    }
    if (!message.bonusRateRecoll.isZero()) {
      writer.uint32(32).int64(message.bonusRateRecoll)
    }
    if (message.distrEpochIdentifier !== "") {
      writer.uint32(42).string(message.distrEpochIdentifier)
    }
    if (!message.adjustmentStep.isZero()) {
      writer.uint32(48).int64(message.adjustmentStep)
    }
    if (!message.priceLowerBound.isZero()) {
      writer.uint32(56).int64(message.priceLowerBound)
    }
    if (!message.priceUpperBound.isZero()) {
      writer.uint32(64).int64(message.priceUpperBound)
    }
    if (message.isCollateralRatioValid === true) {
      writer.uint32(72).bool(message.isCollateralRatioValid)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseParams()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.collRatio = reader.int64() as Long
          break
        case 2:
          message.feeRatio = reader.int64() as Long
          break
        case 3:
          message.efFeeRatio = reader.int64() as Long
          break
        case 4:
          message.bonusRateRecoll = reader.int64() as Long
          break
        case 5:
          message.distrEpochIdentifier = reader.string()
          break
        case 6:
          message.adjustmentStep = reader.int64() as Long
          break
        case 7:
          message.priceLowerBound = reader.int64() as Long
          break
        case 8:
          message.priceUpperBound = reader.int64() as Long
          break
        case 9:
          message.isCollateralRatioValid = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Params {
    return {
      collRatio: isSet(object.collRatio) ? Long.fromValue(object.collRatio) : Long.ZERO,
      feeRatio: isSet(object.feeRatio) ? Long.fromValue(object.feeRatio) : Long.ZERO,
      efFeeRatio: isSet(object.efFeeRatio)
        ? Long.fromValue(object.efFeeRatio)
        : Long.ZERO,
      bonusRateRecoll: isSet(object.bonusRateRecoll)
        ? Long.fromValue(object.bonusRateRecoll)
        : Long.ZERO,
      distrEpochIdentifier: isSet(object.distrEpochIdentifier)
        ? String(object.distrEpochIdentifier)
        : "",
      adjustmentStep: isSet(object.adjustmentStep)
        ? Long.fromValue(object.adjustmentStep)
        : Long.ZERO,
      priceLowerBound: isSet(object.priceLowerBound)
        ? Long.fromValue(object.priceLowerBound)
        : Long.ZERO,
      priceUpperBound: isSet(object.priceUpperBound)
        ? Long.fromValue(object.priceUpperBound)
        : Long.ZERO,
      isCollateralRatioValid: isSet(object.isCollateralRatioValid)
        ? Boolean(object.isCollateralRatioValid)
        : false,
    }
  },

  toJSON(message: Params): unknown {
    const obj: any = {}
    message.collRatio !== undefined &&
      (obj.collRatio = (message.collRatio || Long.ZERO).toString())
    message.feeRatio !== undefined &&
      (obj.feeRatio = (message.feeRatio || Long.ZERO).toString())
    message.efFeeRatio !== undefined &&
      (obj.efFeeRatio = (message.efFeeRatio || Long.ZERO).toString())
    message.bonusRateRecoll !== undefined &&
      (obj.bonusRateRecoll = (message.bonusRateRecoll || Long.ZERO).toString())
    message.distrEpochIdentifier !== undefined &&
      (obj.distrEpochIdentifier = message.distrEpochIdentifier)
    message.adjustmentStep !== undefined &&
      (obj.adjustmentStep = (message.adjustmentStep || Long.ZERO).toString())
    message.priceLowerBound !== undefined &&
      (obj.priceLowerBound = (message.priceLowerBound || Long.ZERO).toString())
    message.priceUpperBound !== undefined &&
      (obj.priceUpperBound = (message.priceUpperBound || Long.ZERO).toString())
    message.isCollateralRatioValid !== undefined &&
      (obj.isCollateralRatioValid = message.isCollateralRatioValid)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams()
    message.collRatio =
      object.collRatio !== undefined && object.collRatio !== null
        ? Long.fromValue(object.collRatio)
        : Long.ZERO
    message.feeRatio =
      object.feeRatio !== undefined && object.feeRatio !== null
        ? Long.fromValue(object.feeRatio)
        : Long.ZERO
    message.efFeeRatio =
      object.efFeeRatio !== undefined && object.efFeeRatio !== null
        ? Long.fromValue(object.efFeeRatio)
        : Long.ZERO
    message.bonusRateRecoll =
      object.bonusRateRecoll !== undefined && object.bonusRateRecoll !== null
        ? Long.fromValue(object.bonusRateRecoll)
        : Long.ZERO
    message.distrEpochIdentifier = object.distrEpochIdentifier ?? ""
    message.adjustmentStep =
      object.adjustmentStep !== undefined && object.adjustmentStep !== null
        ? Long.fromValue(object.adjustmentStep)
        : Long.ZERO
    message.priceLowerBound =
      object.priceLowerBound !== undefined && object.priceLowerBound !== null
        ? Long.fromValue(object.priceLowerBound)
        : Long.ZERO
    message.priceUpperBound =
      object.priceUpperBound !== undefined && object.priceUpperBound !== null
        ? Long.fromValue(object.priceUpperBound)
        : Long.ZERO
    message.isCollateralRatioValid = object.isCollateralRatioValid ?? false
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
