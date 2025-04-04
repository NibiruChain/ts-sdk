/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ExchangeRateTuple } from "./oracle";

/** Emitted when a price is posted */
export interface EventPriceUpdate {
  pair: string;
  price: string;
  timestampMs: Long;
}

/** Emitted when a valoper delegates oracle voting rights to a feeder address. */
export interface EventDelegateFeederConsent {
  /** Validator is the Bech32 address that is delegating voting rights. */
  validator: string;
  /**
   * Feeder is the delegate or representative that will be able to send
   * vote and prevote transaction messages.
   */
  feeder: string;
}

/** Emitted by MsgAggregateExchangeVote when an aggregate vote is added to state */
export interface EventAggregateVote {
  /** Validator is the Bech32 address to which the vote will be credited. */
  validator: string;
  /**
   * Feeder is the delegate or representative that will send vote and prevote
   * transaction messages on behalf of the voting validator.
   */
  feeder: string;
  prices: ExchangeRateTuple[];
}

/**
 * Emitted by MsgAggregateExchangePrevote when an aggregate prevote is added
 * to state
 */
export interface EventAggregatePrevote {
  /** Validator is the Bech32 address to which the vote will be credited. */
  validator: string;
  /**
   * Feeder is the delegate or representative that will send vote and prevote
   * transaction messages on behalf of the voting validator.
   */
  feeder: string;
}

export interface EventValidatorPerformance {
  /** Validator is the Bech32 address to which the vote will be credited. */
  validator: string;
  /** Tendermint consensus voting power */
  votingPower: Long;
  /**
   * RewardWeight: Weight of rewards the validator should receive in units of
   * consensus power.
   */
  rewardWeight: Long;
  /** Number of valid votes for which the validator will be rewarded */
  winCount: Long;
  /** Number of abstained votes for which there will be no reward or punishment */
  abstainCount: Long;
  /** Number of invalid/punishable votes */
  missCount: Long;
}

function createBaseEventPriceUpdate(): EventPriceUpdate {
  return { pair: "", price: "", timestampMs: Long.ZERO };
}

export const EventPriceUpdate = {
  encode(message: EventPriceUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    if (!message.timestampMs.isZero()) {
      writer.uint32(24).int64(message.timestampMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPriceUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPriceUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pair = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.price = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.timestampMs = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventPriceUpdate {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      price: isSet(object.price) ? String(object.price) : "",
      timestampMs: isSet(object.timestampMs) ? Long.fromValue(object.timestampMs) : Long.ZERO,
    };
  },

  toJSON(message: EventPriceUpdate): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair);
    message.price !== undefined && (obj.price = message.price);
    message.timestampMs !== undefined && (obj.timestampMs = (message.timestampMs || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<EventPriceUpdate>, I>>(base?: I): EventPriceUpdate {
    return EventPriceUpdate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventPriceUpdate>, I>>(object: I): EventPriceUpdate {
    const message = createBaseEventPriceUpdate();
    message.pair = object.pair ?? "";
    message.price = object.price ?? "";
    message.timestampMs = (object.timestampMs !== undefined && object.timestampMs !== null)
      ? Long.fromValue(object.timestampMs)
      : Long.ZERO;
    return message;
  },
};

function createBaseEventDelegateFeederConsent(): EventDelegateFeederConsent {
  return { validator: "", feeder: "" };
}

export const EventDelegateFeederConsent = {
  encode(message: EventDelegateFeederConsent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDelegateFeederConsent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDelegateFeederConsent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.feeder = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventDelegateFeederConsent {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
    };
  },

  toJSON(message: EventDelegateFeederConsent): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventDelegateFeederConsent>, I>>(base?: I): EventDelegateFeederConsent {
    return EventDelegateFeederConsent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventDelegateFeederConsent>, I>>(object: I): EventDelegateFeederConsent {
    const message = createBaseEventDelegateFeederConsent();
    message.validator = object.validator ?? "";
    message.feeder = object.feeder ?? "";
    return message;
  },
};

function createBaseEventAggregateVote(): EventAggregateVote {
  return { validator: "", feeder: "", prices: [] };
}

export const EventAggregateVote = {
  encode(message: EventAggregateVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    for (const v of message.prices) {
      ExchangeRateTuple.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAggregateVote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAggregateVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.feeder = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.prices.push(ExchangeRateTuple.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventAggregateVote {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => ExchangeRateTuple.fromJSON(e)) : [],
    };
  },

  toJSON(message: EventAggregateVote): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    if (message.prices) {
      obj.prices = message.prices.map((e) => e ? ExchangeRateTuple.toJSON(e) : undefined);
    } else {
      obj.prices = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventAggregateVote>, I>>(base?: I): EventAggregateVote {
    return EventAggregateVote.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventAggregateVote>, I>>(object: I): EventAggregateVote {
    const message = createBaseEventAggregateVote();
    message.validator = object.validator ?? "";
    message.feeder = object.feeder ?? "";
    message.prices = object.prices?.map((e) => ExchangeRateTuple.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventAggregatePrevote(): EventAggregatePrevote {
  return { validator: "", feeder: "" };
}

export const EventAggregatePrevote = {
  encode(message: EventAggregatePrevote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAggregatePrevote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAggregatePrevote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.feeder = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventAggregatePrevote {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
    };
  },

  toJSON(message: EventAggregatePrevote): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventAggregatePrevote>, I>>(base?: I): EventAggregatePrevote {
    return EventAggregatePrevote.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventAggregatePrevote>, I>>(object: I): EventAggregatePrevote {
    const message = createBaseEventAggregatePrevote();
    message.validator = object.validator ?? "";
    message.feeder = object.feeder ?? "";
    return message;
  },
};

function createBaseEventValidatorPerformance(): EventValidatorPerformance {
  return {
    validator: "",
    votingPower: Long.ZERO,
    rewardWeight: Long.ZERO,
    winCount: Long.ZERO,
    abstainCount: Long.ZERO,
    missCount: Long.ZERO,
  };
}

export const EventValidatorPerformance = {
  encode(message: EventValidatorPerformance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (!message.votingPower.isZero()) {
      writer.uint32(16).int64(message.votingPower);
    }
    if (!message.rewardWeight.isZero()) {
      writer.uint32(24).int64(message.rewardWeight);
    }
    if (!message.winCount.isZero()) {
      writer.uint32(32).int64(message.winCount);
    }
    if (!message.abstainCount.isZero()) {
      writer.uint32(40).int64(message.abstainCount);
    }
    if (!message.missCount.isZero()) {
      writer.uint32(48).int64(message.missCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventValidatorPerformance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventValidatorPerformance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.votingPower = reader.int64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.rewardWeight = reader.int64() as Long;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.winCount = reader.int64() as Long;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.abstainCount = reader.int64() as Long;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.missCount = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventValidatorPerformance {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      votingPower: isSet(object.votingPower) ? Long.fromValue(object.votingPower) : Long.ZERO,
      rewardWeight: isSet(object.rewardWeight) ? Long.fromValue(object.rewardWeight) : Long.ZERO,
      winCount: isSet(object.winCount) ? Long.fromValue(object.winCount) : Long.ZERO,
      abstainCount: isSet(object.abstainCount) ? Long.fromValue(object.abstainCount) : Long.ZERO,
      missCount: isSet(object.missCount) ? Long.fromValue(object.missCount) : Long.ZERO,
    };
  },

  toJSON(message: EventValidatorPerformance): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.votingPower !== undefined && (obj.votingPower = (message.votingPower || Long.ZERO).toString());
    message.rewardWeight !== undefined && (obj.rewardWeight = (message.rewardWeight || Long.ZERO).toString());
    message.winCount !== undefined && (obj.winCount = (message.winCount || Long.ZERO).toString());
    message.abstainCount !== undefined && (obj.abstainCount = (message.abstainCount || Long.ZERO).toString());
    message.missCount !== undefined && (obj.missCount = (message.missCount || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<EventValidatorPerformance>, I>>(base?: I): EventValidatorPerformance {
    return EventValidatorPerformance.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventValidatorPerformance>, I>>(object: I): EventValidatorPerformance {
    const message = createBaseEventValidatorPerformance();
    message.validator = object.validator ?? "";
    message.votingPower = (object.votingPower !== undefined && object.votingPower !== null)
      ? Long.fromValue(object.votingPower)
      : Long.ZERO;
    message.rewardWeight = (object.rewardWeight !== undefined && object.rewardWeight !== null)
      ? Long.fromValue(object.rewardWeight)
      : Long.ZERO;
    message.winCount = (object.winCount !== undefined && object.winCount !== null)
      ? Long.fromValue(object.winCount)
      : Long.ZERO;
    message.abstainCount = (object.abstainCount !== undefined && object.abstainCount !== null)
      ? Long.fromValue(object.abstainCount)
      : Long.ZERO;
    message.missCount = (object.missCount !== undefined && object.missCount !== null)
      ? Long.fromValue(object.missCount)
      : Long.ZERO;
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
