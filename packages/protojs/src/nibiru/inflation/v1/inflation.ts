/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "nibiru.inflation.v1";

/**
 * InflationDistribution defines the distribution in which inflation is
 * allocated through minting on each epoch (staking, community, strategic). It
 * excludes the team vesting distribution.
 */
export interface InflationDistribution {
  /**
   * staking_rewards defines the proportion of the minted_denom that is
   * to be allocated as staking rewards
   */
  stakingRewards: string;
  /**
   * community_pool defines the proportion of the minted_denom that is to
   * be allocated to the community pool
   */
  communityPool: string;
  /**
   * strategic_reserves defines the proportion of the minted_denom that
   * is to be allocated to the strategic reserves module address
   */
  strategicReserves: string;
}

/**
 * ExponentialCalculation holds factors to calculate exponential inflation on
 * each period. Calculation reference:
 * periodProvision = exponentialDecay
 * f(x)            = a * (1 - r) ^ x + c
 */
export interface ExponentialCalculation {
  /** a defines the initial value */
  a: string;
  /** r defines the reduction factor */
  r: string;
  /** c defines the parameter for long term inflation */
  c: string;
}

function createBaseInflationDistribution(): InflationDistribution {
  return { stakingRewards: "", communityPool: "", strategicReserves: "" };
}

export const InflationDistribution = {
  encode(message: InflationDistribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakingRewards !== "") {
      writer.uint32(10).string(message.stakingRewards);
    }
    if (message.communityPool !== "") {
      writer.uint32(18).string(message.communityPool);
    }
    if (message.strategicReserves !== "") {
      writer.uint32(26).string(message.strategicReserves);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InflationDistribution {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInflationDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stakingRewards = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.communityPool = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.strategicReserves = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InflationDistribution {
    return {
      stakingRewards: isSet(object.stakingRewards) ? String(object.stakingRewards) : "",
      communityPool: isSet(object.communityPool) ? String(object.communityPool) : "",
      strategicReserves: isSet(object.strategicReserves) ? String(object.strategicReserves) : "",
    };
  },

  toJSON(message: InflationDistribution): unknown {
    const obj: any = {};
    message.stakingRewards !== undefined && (obj.stakingRewards = message.stakingRewards);
    message.communityPool !== undefined && (obj.communityPool = message.communityPool);
    message.strategicReserves !== undefined && (obj.strategicReserves = message.strategicReserves);
    return obj;
  },

  create<I extends Exact<DeepPartial<InflationDistribution>, I>>(base?: I): InflationDistribution {
    return InflationDistribution.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InflationDistribution>, I>>(object: I): InflationDistribution {
    const message = createBaseInflationDistribution();
    message.stakingRewards = object.stakingRewards ?? "";
    message.communityPool = object.communityPool ?? "";
    message.strategicReserves = object.strategicReserves ?? "";
    return message;
  },
};

function createBaseExponentialCalculation(): ExponentialCalculation {
  return { a: "", r: "", c: "" };
}

export const ExponentialCalculation = {
  encode(message: ExponentialCalculation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.a !== "") {
      writer.uint32(10).string(message.a);
    }
    if (message.r !== "") {
      writer.uint32(18).string(message.r);
    }
    if (message.c !== "") {
      writer.uint32(26).string(message.c);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExponentialCalculation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExponentialCalculation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.a = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.r = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.c = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExponentialCalculation {
    return {
      a: isSet(object.a) ? String(object.a) : "",
      r: isSet(object.r) ? String(object.r) : "",
      c: isSet(object.c) ? String(object.c) : "",
    };
  },

  toJSON(message: ExponentialCalculation): unknown {
    const obj: any = {};
    message.a !== undefined && (obj.a = message.a);
    message.r !== undefined && (obj.r = message.r);
    message.c !== undefined && (obj.c = message.c);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExponentialCalculation>, I>>(base?: I): ExponentialCalculation {
    return ExponentialCalculation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExponentialCalculation>, I>>(object: I): ExponentialCalculation {
    const message = createBaseExponentialCalculation();
    message.a = object.a ?? "";
    message.r = object.r ?? "";
    message.c = object.c ?? "";
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
