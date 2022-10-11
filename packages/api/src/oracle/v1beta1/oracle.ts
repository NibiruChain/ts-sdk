/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "nibiru.oracle.v1beta1";

/** Params defines the parameters for the oracle module. */
export interface Params {
  votePeriod: Long;
  voteThreshold: string;
  rewardBand: string;
  whitelist: Pair[];
  slashFraction: string;
  slashWindow: Long;
  minValidPerWindow: string;
}

/** Pair is the object that holds configuration of each pair. */
export interface Pair {
  name: string;
}

/**
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:({pair},{exchange_rate})|...|({pair},{exchange_rate}):{voter}")
 */
export interface AggregateExchangeRatePrevote {
  hash: string;
  voter: string;
  submitBlock: Long;
}

/**
 * MsgAggregateExchangeRateVote - struct for voting on
 * the exchange rates different assets.
 */
export interface AggregateExchangeRateVote {
  exchangeRateTuples: ExchangeRateTuple[];
  voter: string;
}

/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */
export interface ExchangeRateTuple {
  pair: string;
  exchangeRate: string;
}

/**
 * PairReward defines a credit object towards validators
 * which provide prices faithfully for different pairs.
 */
export interface PairReward {
  /** pair defines the pair for which we incentivize validator to provide prices for. */
  pair: string;
  /** id uniquely identifies the rewards instance of the pair */
  id: Long;
  /** vote_periods defines the vote periods left in which rewards will be distributed. */
  votePeriods: Long;
  /** coins defines the amount of coins to distribute in a single vote period. */
  coins: Coin[];
}

function createBaseParams(): Params {
  return {
    votePeriod: Long.UZERO,
    voteThreshold: "",
    rewardBand: "",
    whitelist: [],
    slashFraction: "",
    slashWindow: Long.UZERO,
    minValidPerWindow: "",
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.votePeriod.isZero()) {
      writer.uint32(8).uint64(message.votePeriod);
    }
    if (message.voteThreshold !== "") {
      writer.uint32(18).string(message.voteThreshold);
    }
    if (message.rewardBand !== "") {
      writer.uint32(26).string(message.rewardBand);
    }
    for (const v of message.whitelist) {
      Pair.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.slashFraction !== "") {
      writer.uint32(42).string(message.slashFraction);
    }
    if (!message.slashWindow.isZero()) {
      writer.uint32(48).uint64(message.slashWindow);
    }
    if (message.minValidPerWindow !== "") {
      writer.uint32(58).string(message.minValidPerWindow);
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
          message.votePeriod = reader.uint64() as Long;
          break;
        case 2:
          message.voteThreshold = reader.string();
          break;
        case 3:
          message.rewardBand = reader.string();
          break;
        case 4:
          message.whitelist.push(Pair.decode(reader, reader.uint32()));
          break;
        case 5:
          message.slashFraction = reader.string();
          break;
        case 6:
          message.slashWindow = reader.uint64() as Long;
          break;
        case 7:
          message.minValidPerWindow = reader.string();
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
      votePeriod: isSet(object.votePeriod) ? Long.fromValue(object.votePeriod) : Long.UZERO,
      voteThreshold: isSet(object.voteThreshold) ? String(object.voteThreshold) : "",
      rewardBand: isSet(object.rewardBand) ? String(object.rewardBand) : "",
      whitelist: Array.isArray(object?.whitelist) ? object.whitelist.map((e: any) => Pair.fromJSON(e)) : [],
      slashFraction: isSet(object.slashFraction) ? String(object.slashFraction) : "",
      slashWindow: isSet(object.slashWindow) ? Long.fromValue(object.slashWindow) : Long.UZERO,
      minValidPerWindow: isSet(object.minValidPerWindow) ? String(object.minValidPerWindow) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.votePeriod !== undefined && (obj.votePeriod = (message.votePeriod || Long.UZERO).toString());
    message.voteThreshold !== undefined && (obj.voteThreshold = message.voteThreshold);
    message.rewardBand !== undefined && (obj.rewardBand = message.rewardBand);
    if (message.whitelist) {
      obj.whitelist = message.whitelist.map((e) => e ? Pair.toJSON(e) : undefined);
    } else {
      obj.whitelist = [];
    }
    message.slashFraction !== undefined && (obj.slashFraction = message.slashFraction);
    message.slashWindow !== undefined && (obj.slashWindow = (message.slashWindow || Long.UZERO).toString());
    message.minValidPerWindow !== undefined && (obj.minValidPerWindow = message.minValidPerWindow);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.votePeriod = (object.votePeriod !== undefined && object.votePeriod !== null)
      ? Long.fromValue(object.votePeriod)
      : Long.UZERO;
    message.voteThreshold = object.voteThreshold ?? "";
    message.rewardBand = object.rewardBand ?? "";
    message.whitelist = object.whitelist?.map((e) => Pair.fromPartial(e)) || [];
    message.slashFraction = object.slashFraction ?? "";
    message.slashWindow = (object.slashWindow !== undefined && object.slashWindow !== null)
      ? Long.fromValue(object.slashWindow)
      : Long.UZERO;
    message.minValidPerWindow = object.minValidPerWindow ?? "";
    return message;
  },
};

function createBasePair(): Pair {
  return { name: "" };
}

export const Pair = {
  encode(message: Pair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pair {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: Pair): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pair>, I>>(object: I): Pair {
    const message = createBasePair();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseAggregateExchangeRatePrevote(): AggregateExchangeRatePrevote {
  return { hash: "", voter: "", submitBlock: Long.UZERO };
}

export const AggregateExchangeRatePrevote = {
  encode(message: AggregateExchangeRatePrevote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (!message.submitBlock.isZero()) {
      writer.uint32(24).uint64(message.submitBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AggregateExchangeRatePrevote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregateExchangeRatePrevote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.submitBlock = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AggregateExchangeRatePrevote {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      voter: isSet(object.voter) ? String(object.voter) : "",
      submitBlock: isSet(object.submitBlock) ? Long.fromValue(object.submitBlock) : Long.UZERO,
    };
  },

  toJSON(message: AggregateExchangeRatePrevote): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.voter !== undefined && (obj.voter = message.voter);
    message.submitBlock !== undefined && (obj.submitBlock = (message.submitBlock || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AggregateExchangeRatePrevote>, I>>(object: I): AggregateExchangeRatePrevote {
    const message = createBaseAggregateExchangeRatePrevote();
    message.hash = object.hash ?? "";
    message.voter = object.voter ?? "";
    message.submitBlock = (object.submitBlock !== undefined && object.submitBlock !== null)
      ? Long.fromValue(object.submitBlock)
      : Long.UZERO;
    return message;
  },
};

function createBaseAggregateExchangeRateVote(): AggregateExchangeRateVote {
  return { exchangeRateTuples: [], voter: "" };
}

export const AggregateExchangeRateVote = {
  encode(message: AggregateExchangeRateVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exchangeRateTuples) {
      ExchangeRateTuple.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AggregateExchangeRateVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregateExchangeRateVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRateTuples.push(ExchangeRateTuple.decode(reader, reader.uint32()));
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AggregateExchangeRateVote {
    return {
      exchangeRateTuples: Array.isArray(object?.exchangeRateTuples)
        ? object.exchangeRateTuples.map((e: any) => ExchangeRateTuple.fromJSON(e))
        : [],
      voter: isSet(object.voter) ? String(object.voter) : "",
    };
  },

  toJSON(message: AggregateExchangeRateVote): unknown {
    const obj: any = {};
    if (message.exchangeRateTuples) {
      obj.exchangeRateTuples = message.exchangeRateTuples.map((e) => e ? ExchangeRateTuple.toJSON(e) : undefined);
    } else {
      obj.exchangeRateTuples = [];
    }
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AggregateExchangeRateVote>, I>>(object: I): AggregateExchangeRateVote {
    const message = createBaseAggregateExchangeRateVote();
    message.exchangeRateTuples = object.exchangeRateTuples?.map((e) => ExchangeRateTuple.fromPartial(e)) || [];
    message.voter = object.voter ?? "";
    return message;
  },
};

function createBaseExchangeRateTuple(): ExchangeRateTuple {
  return { pair: "", exchangeRate: "" };
}

export const ExchangeRateTuple = {
  encode(message: ExchangeRateTuple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(18).string(message.exchangeRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRateTuple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRateTuple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pair = reader.string();
          break;
        case 2:
          message.exchangeRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExchangeRateTuple {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : "",
    };
  },

  toJSON(message: ExchangeRateTuple): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair);
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExchangeRateTuple>, I>>(object: I): ExchangeRateTuple {
    const message = createBaseExchangeRateTuple();
    message.pair = object.pair ?? "";
    message.exchangeRate = object.exchangeRate ?? "";
    return message;
  },
};

function createBasePairReward(): PairReward {
  return { pair: "", id: Long.UZERO, votePeriods: Long.UZERO, coins: [] };
}

export const PairReward = {
  encode(message: PairReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (!message.votePeriods.isZero()) {
      writer.uint32(24).uint64(message.votePeriods);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PairReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePairReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pair = reader.string();
          break;
        case 2:
          message.id = reader.uint64() as Long;
          break;
        case 3:
          message.votePeriods = reader.uint64() as Long;
          break;
        case 4:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PairReward {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      votePeriods: isSet(object.votePeriods) ? Long.fromValue(object.votePeriods) : Long.UZERO,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: PairReward): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.votePeriods !== undefined && (obj.votePeriods = (message.votePeriods || Long.UZERO).toString());
    if (message.coins) {
      obj.coins = message.coins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PairReward>, I>>(object: I): PairReward {
    const message = createBasePairReward();
    message.pair = object.pair ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.votePeriods = (object.votePeriods !== undefined && object.votePeriods !== null)
      ? Long.fromValue(object.votePeriods)
      : Long.UZERO;
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
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
