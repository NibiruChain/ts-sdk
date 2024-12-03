/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { InflationDistribution } from "./inflation";

/** GenesisState defines the inflation module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params?: Params;
  /** period is the amount of past periods, based on the epochs per period param */
  period: Long;
  /**
   * skipped_epochs is the number of epochs that have passed while inflation is
   * disabled
   */
  skippedEpochs: Long;
}

/** Params holds parameters for the inflation module. */
export interface Params {
  /**
   * inflation_enabled is the parameter that enables inflation and halts
   * increasing the skipped_epochs
   */
  inflationEnabled: boolean;
  /**
   * polynomial_factors takes in the variables to calculate polynomial
   * inflation
   */
  polynomialFactors: string[];
  /** inflation_distribution of the minted denom */
  inflationDistribution?: InflationDistribution;
  /**
   * epochs_per_period is the number of epochs that must pass before a new
   * period is created
   */
  epochsPerPeriod: Long;
  /** periods_per_year is the number of periods that occur in a year */
  periodsPerYear: Long;
  /**
   * max_period is the maximum number of periods that have inflation being
   * paid off. After this period, inflation will be disabled.
   */
  maxPeriod: Long;
  /**
   * has_inflation_started is the parameter that indicates if inflation has
   * started. It's set to false at the starts, and stays at true when we toggle
   * inflation on. It's used to track num skipped epochs
   */
  hasInflationStarted: boolean;
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, period: Long.UZERO, skippedEpochs: Long.UZERO };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (!message.period.isZero()) {
      writer.uint32(16).uint64(message.period);
    }
    if (!message.skippedEpochs.isZero()) {
      writer.uint32(24).uint64(message.skippedEpochs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.period = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.skippedEpochs = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      period: isSet(object.period) ? Long.fromValue(object.period) : Long.UZERO,
      skippedEpochs: isSet(object.skippedEpochs) ? Long.fromValue(object.skippedEpochs) : Long.UZERO,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.period !== undefined && (obj.period = (message.period || Long.UZERO).toString());
    message.skippedEpochs !== undefined && (obj.skippedEpochs = (message.skippedEpochs || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.period = (object.period !== undefined && object.period !== null)
      ? Long.fromValue(object.period)
      : Long.UZERO;
    message.skippedEpochs = (object.skippedEpochs !== undefined && object.skippedEpochs !== null)
      ? Long.fromValue(object.skippedEpochs)
      : Long.UZERO;
    return message;
  },
};

function createBaseParams(): Params {
  return {
    inflationEnabled: false,
    polynomialFactors: [],
    inflationDistribution: undefined,
    epochsPerPeriod: Long.UZERO,
    periodsPerYear: Long.UZERO,
    maxPeriod: Long.UZERO,
    hasInflationStarted: false,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflationEnabled === true) {
      writer.uint32(8).bool(message.inflationEnabled);
    }
    for (const v of message.polynomialFactors) {
      writer.uint32(18).string(v!);
    }
    if (message.inflationDistribution !== undefined) {
      InflationDistribution.encode(message.inflationDistribution, writer.uint32(26).fork()).ldelim();
    }
    if (!message.epochsPerPeriod.isZero()) {
      writer.uint32(32).uint64(message.epochsPerPeriod);
    }
    if (!message.periodsPerYear.isZero()) {
      writer.uint32(40).uint64(message.periodsPerYear);
    }
    if (!message.maxPeriod.isZero()) {
      writer.uint32(48).uint64(message.maxPeriod);
    }
    if (message.hasInflationStarted === true) {
      writer.uint32(56).bool(message.hasInflationStarted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.inflationEnabled = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.polynomialFactors.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.inflationDistribution = InflationDistribution.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.epochsPerPeriod = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.periodsPerYear = reader.uint64() as Long;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.maxPeriod = reader.uint64() as Long;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.hasInflationStarted = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      inflationEnabled: isSet(object.inflationEnabled) ? Boolean(object.inflationEnabled) : false,
      polynomialFactors: Array.isArray(object?.polynomialFactors)
        ? object.polynomialFactors.map((e: any) => String(e))
        : [],
      inflationDistribution: isSet(object.inflationDistribution)
        ? InflationDistribution.fromJSON(object.inflationDistribution)
        : undefined,
      epochsPerPeriod: isSet(object.epochsPerPeriod) ? Long.fromValue(object.epochsPerPeriod) : Long.UZERO,
      periodsPerYear: isSet(object.periodsPerYear) ? Long.fromValue(object.periodsPerYear) : Long.UZERO,
      maxPeriod: isSet(object.maxPeriod) ? Long.fromValue(object.maxPeriod) : Long.UZERO,
      hasInflationStarted: isSet(object.hasInflationStarted) ? Boolean(object.hasInflationStarted) : false,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.inflationEnabled !== undefined && (obj.inflationEnabled = message.inflationEnabled);
    if (message.polynomialFactors) {
      obj.polynomialFactors = message.polynomialFactors.map((e) => e);
    } else {
      obj.polynomialFactors = [];
    }
    message.inflationDistribution !== undefined && (obj.inflationDistribution = message.inflationDistribution
      ? InflationDistribution.toJSON(message.inflationDistribution)
      : undefined);
    message.epochsPerPeriod !== undefined && (obj.epochsPerPeriod = (message.epochsPerPeriod || Long.UZERO).toString());
    message.periodsPerYear !== undefined && (obj.periodsPerYear = (message.periodsPerYear || Long.UZERO).toString());
    message.maxPeriod !== undefined && (obj.maxPeriod = (message.maxPeriod || Long.UZERO).toString());
    message.hasInflationStarted !== undefined && (obj.hasInflationStarted = message.hasInflationStarted);
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.inflationEnabled = object.inflationEnabled ?? false;
    message.polynomialFactors = object.polynomialFactors?.map((e) => e) || [];
    message.inflationDistribution =
      (object.inflationDistribution !== undefined && object.inflationDistribution !== null)
        ? InflationDistribution.fromPartial(object.inflationDistribution)
        : undefined;
    message.epochsPerPeriod = (object.epochsPerPeriod !== undefined && object.epochsPerPeriod !== null)
      ? Long.fromValue(object.epochsPerPeriod)
      : Long.UZERO;
    message.periodsPerYear = (object.periodsPerYear !== undefined && object.periodsPerYear !== null)
      ? Long.fromValue(object.periodsPerYear)
      : Long.UZERO;
    message.maxPeriod = (object.maxPeriod !== undefined && object.maxPeriod !== null)
      ? Long.fromValue(object.maxPeriod)
      : Long.UZERO;
    message.hasInflationStarted = object.hasInflationStarted ?? false;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
