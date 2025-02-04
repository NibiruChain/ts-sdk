/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";

/**
 * MsgAggregateExchangeRatePrevote represents a message to submit
 * aggregate exchange rate prevote.
 */
export interface MsgAggregateExchangeRatePrevote {
  hash: string;
  /**
   * Feeder is the Bech32 address of the price feeder. A validator may
   * specify multiple price feeders by delegating them consent. The validator
   * address is also a valid feeder by default.
   */
  feeder: string;
  /** Validator is the Bech32 address to which the prevote will be credited. */
  validator: string;
}

/**
 * MsgAggregateExchangeRatePrevoteResponse defines the
 * Msg/AggregateExchangeRatePrevote response type.
 */
export interface MsgAggregateExchangeRatePrevoteResponse {
}

/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 */
export interface MsgAggregateExchangeRateVote {
  salt: string;
  exchangeRates: string;
  /**
   * Feeder is the Bech32 address of the price feeder. A validator may
   * specify multiple price feeders by delegating them consent. The validator
   * address is also a valid feeder by default.
   */
  feeder: string;
  /** Validator is the Bech32 address to which the vote will be credited. */
  validator: string;
}

/**
 * MsgAggregateExchangeRateVoteResponse defines the
 * Msg/AggregateExchangeRateVote response type.
 */
export interface MsgAggregateExchangeRateVoteResponse {
}

/**
 * MsgDelegateFeedConsent represents a message to delegate oracle voting rights
 * to another address.
 */
export interface MsgDelegateFeedConsent {
  operator: string;
  delegate: string;
}

/**
 * MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response
 * type.
 */
export interface MsgDelegateFeedConsentResponse {
}

export interface MsgEditOracleParams {
  sender: string;
  params?: OracleParamsMsg;
}

export interface MsgEditOracleParamsResponse {
}

export interface OracleParamsMsg {
  /** VotePeriod defines the number of blocks during which voting takes place. */
  votePeriod: Long;
  /**
   * VoteThreshold specifies the minimum proportion of votes that must be
   * received for a ballot to pass.
   */
  voteThreshold: string;
  /**
   * RewardBand defines a maxium divergence that a price vote can have from the
   * weighted median in the ballot. If a vote lies within the valid range
   * defined by:
   * 	μ := weightedMedian,
   * 	validRange := μ ± (μ * rewardBand / 2),
   * then rewards are added to the validator performance.
   * Note that if the reward band is smaller than 1 standard
   * deviation, the band is taken to be 1 standard deviation.a price
   */
  rewardBand: string;
  /**
   * The set of whitelisted markets, or asset pairs, for the module.
   * Ex. '["unibi:uusd","ubtc:uusd"]'
   */
  whitelist: string[];
  /**
   * SlashFraction returns the proportion of an oracle's stake that gets
   * slashed in the event of slashing. `SlashFraction` specifies the exact
   * penalty for failing a voting period.
   */
  slashFraction: string;
  /**
   * SlashWindow returns the number of voting periods that specify a
   * "slash window". After each slash window, all oracles that have missed more
   * than the penalty threshold are slashed. Missing the penalty threshold is
   * synonymous with submitting fewer valid votes than `MinValidPerWindow`.
   */
  slashWindow: Long;
  minValidPerWindow: string;
  /** Amount of time to look back for TWAP calculations */
  twapLookbackWindow?: Duration;
  /**
   * The minimum number of voters (i.e. oracle validators) per pair for it to be
   * considered a passing ballot. Recommended at least 4.
   */
  minVoters: Long;
  /** The validator fee ratio that is given to validators every epoch. */
  validatorFeeRatio: string;
  expirationBlocks: Long;
}

function createBaseMsgAggregateExchangeRatePrevote(): MsgAggregateExchangeRatePrevote {
  return { hash: "", feeder: "", validator: "" };
}

export const MsgAggregateExchangeRatePrevote = {
  encode(message: MsgAggregateExchangeRatePrevote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAggregateExchangeRatePrevote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAggregateExchangeRatePrevote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hash = reader.string();
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

          message.validator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAggregateExchangeRatePrevote {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
    };
  },

  toJSON(message: MsgAggregateExchangeRatePrevote): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAggregateExchangeRatePrevote>, I>>(base?: I): MsgAggregateExchangeRatePrevote {
    return MsgAggregateExchangeRatePrevote.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgAggregateExchangeRatePrevote>, I>>(
    object: I,
  ): MsgAggregateExchangeRatePrevote {
    const message = createBaseMsgAggregateExchangeRatePrevote();
    message.hash = object.hash ?? "";
    message.feeder = object.feeder ?? "";
    message.validator = object.validator ?? "";
    return message;
  },
};

function createBaseMsgAggregateExchangeRatePrevoteResponse(): MsgAggregateExchangeRatePrevoteResponse {
  return {};
}

export const MsgAggregateExchangeRatePrevoteResponse = {
  encode(_: MsgAggregateExchangeRatePrevoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAggregateExchangeRatePrevoteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAggregateExchangeRatePrevoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgAggregateExchangeRatePrevoteResponse {
    return {};
  },

  toJSON(_: MsgAggregateExchangeRatePrevoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAggregateExchangeRatePrevoteResponse>, I>>(
    base?: I,
  ): MsgAggregateExchangeRatePrevoteResponse {
    return MsgAggregateExchangeRatePrevoteResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgAggregateExchangeRatePrevoteResponse>, I>>(
    _: I,
  ): MsgAggregateExchangeRatePrevoteResponse {
    const message = createBaseMsgAggregateExchangeRatePrevoteResponse();
    return message;
  },
};

function createBaseMsgAggregateExchangeRateVote(): MsgAggregateExchangeRateVote {
  return { salt: "", exchangeRates: "", feeder: "", validator: "" };
}

export const MsgAggregateExchangeRateVote = {
  encode(message: MsgAggregateExchangeRateVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.salt !== "") {
      writer.uint32(10).string(message.salt);
    }
    if (message.exchangeRates !== "") {
      writer.uint32(18).string(message.exchangeRates);
    }
    if (message.feeder !== "") {
      writer.uint32(26).string(message.feeder);
    }
    if (message.validator !== "") {
      writer.uint32(34).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAggregateExchangeRateVote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAggregateExchangeRateVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.salt = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.exchangeRates = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.feeder = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.validator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAggregateExchangeRateVote {
    return {
      salt: isSet(object.salt) ? String(object.salt) : "",
      exchangeRates: isSet(object.exchangeRates) ? String(object.exchangeRates) : "",
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
    };
  },

  toJSON(message: MsgAggregateExchangeRateVote): unknown {
    const obj: any = {};
    message.salt !== undefined && (obj.salt = message.salt);
    message.exchangeRates !== undefined && (obj.exchangeRates = message.exchangeRates);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAggregateExchangeRateVote>, I>>(base?: I): MsgAggregateExchangeRateVote {
    return MsgAggregateExchangeRateVote.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgAggregateExchangeRateVote>, I>>(object: I): MsgAggregateExchangeRateVote {
    const message = createBaseMsgAggregateExchangeRateVote();
    message.salt = object.salt ?? "";
    message.exchangeRates = object.exchangeRates ?? "";
    message.feeder = object.feeder ?? "";
    message.validator = object.validator ?? "";
    return message;
  },
};

function createBaseMsgAggregateExchangeRateVoteResponse(): MsgAggregateExchangeRateVoteResponse {
  return {};
}

export const MsgAggregateExchangeRateVoteResponse = {
  encode(_: MsgAggregateExchangeRateVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAggregateExchangeRateVoteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAggregateExchangeRateVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgAggregateExchangeRateVoteResponse {
    return {};
  },

  toJSON(_: MsgAggregateExchangeRateVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAggregateExchangeRateVoteResponse>, I>>(
    base?: I,
  ): MsgAggregateExchangeRateVoteResponse {
    return MsgAggregateExchangeRateVoteResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgAggregateExchangeRateVoteResponse>, I>>(
    _: I,
  ): MsgAggregateExchangeRateVoteResponse {
    const message = createBaseMsgAggregateExchangeRateVoteResponse();
    return message;
  },
};

function createBaseMsgDelegateFeedConsent(): MsgDelegateFeedConsent {
  return { operator: "", delegate: "" };
}

export const MsgDelegateFeedConsent = {
  encode(message: MsgDelegateFeedConsent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.delegate !== "") {
      writer.uint32(18).string(message.delegate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateFeedConsent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateFeedConsent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.delegate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDelegateFeedConsent {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      delegate: isSet(object.delegate) ? String(object.delegate) : "",
    };
  },

  toJSON(message: MsgDelegateFeedConsent): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.delegate !== undefined && (obj.delegate = message.delegate);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDelegateFeedConsent>, I>>(base?: I): MsgDelegateFeedConsent {
    return MsgDelegateFeedConsent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateFeedConsent>, I>>(object: I): MsgDelegateFeedConsent {
    const message = createBaseMsgDelegateFeedConsent();
    message.operator = object.operator ?? "";
    message.delegate = object.delegate ?? "";
    return message;
  },
};

function createBaseMsgDelegateFeedConsentResponse(): MsgDelegateFeedConsentResponse {
  return {};
}

export const MsgDelegateFeedConsentResponse = {
  encode(_: MsgDelegateFeedConsentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateFeedConsentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateFeedConsentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgDelegateFeedConsentResponse {
    return {};
  },

  toJSON(_: MsgDelegateFeedConsentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDelegateFeedConsentResponse>, I>>(base?: I): MsgDelegateFeedConsentResponse {
    return MsgDelegateFeedConsentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateFeedConsentResponse>, I>>(_: I): MsgDelegateFeedConsentResponse {
    const message = createBaseMsgDelegateFeedConsentResponse();
    return message;
  },
};

function createBaseMsgEditOracleParams(): MsgEditOracleParams {
  return { sender: "", params: undefined };
}

export const MsgEditOracleParams = {
  encode(message: MsgEditOracleParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.params !== undefined) {
      OracleParamsMsg.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditOracleParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditOracleParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = OracleParamsMsg.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgEditOracleParams {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      params: isSet(object.params) ? OracleParamsMsg.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgEditOracleParams): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.params !== undefined && (obj.params = message.params ? OracleParamsMsg.toJSON(message.params) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEditOracleParams>, I>>(base?: I): MsgEditOracleParams {
    return MsgEditOracleParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditOracleParams>, I>>(object: I): MsgEditOracleParams {
    const message = createBaseMsgEditOracleParams();
    message.sender = object.sender ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? OracleParamsMsg.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgEditOracleParamsResponse(): MsgEditOracleParamsResponse {
  return {};
}

export const MsgEditOracleParamsResponse = {
  encode(_: MsgEditOracleParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditOracleParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditOracleParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgEditOracleParamsResponse {
    return {};
  },

  toJSON(_: MsgEditOracleParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEditOracleParamsResponse>, I>>(base?: I): MsgEditOracleParamsResponse {
    return MsgEditOracleParamsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditOracleParamsResponse>, I>>(_: I): MsgEditOracleParamsResponse {
    const message = createBaseMsgEditOracleParamsResponse();
    return message;
  },
};

function createBaseOracleParamsMsg(): OracleParamsMsg {
  return {
    votePeriod: Long.UZERO,
    voteThreshold: "",
    rewardBand: "",
    whitelist: [],
    slashFraction: "",
    slashWindow: Long.UZERO,
    minValidPerWindow: "",
    twapLookbackWindow: undefined,
    minVoters: Long.UZERO,
    validatorFeeRatio: "",
    expirationBlocks: Long.UZERO,
  };
}

export const OracleParamsMsg = {
  encode(message: OracleParamsMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      writer.uint32(34).string(v!);
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
    if (message.twapLookbackWindow !== undefined) {
      Duration.encode(message.twapLookbackWindow, writer.uint32(66).fork()).ldelim();
    }
    if (!message.minVoters.isZero()) {
      writer.uint32(72).uint64(message.minVoters);
    }
    if (message.validatorFeeRatio !== "") {
      writer.uint32(82).string(message.validatorFeeRatio);
    }
    if (!message.expirationBlocks.isZero()) {
      writer.uint32(88).uint64(message.expirationBlocks);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleParamsMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleParamsMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.votePeriod = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.voteThreshold = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rewardBand = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.whitelist.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.slashFraction = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.slashWindow = reader.uint64() as Long;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.minValidPerWindow = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.twapLookbackWindow = Duration.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.minVoters = reader.uint64() as Long;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.validatorFeeRatio = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.expirationBlocks = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OracleParamsMsg {
    return {
      votePeriod: isSet(object.votePeriod) ? Long.fromValue(object.votePeriod) : Long.UZERO,
      voteThreshold: isSet(object.voteThreshold) ? String(object.voteThreshold) : "",
      rewardBand: isSet(object.rewardBand) ? String(object.rewardBand) : "",
      whitelist: Array.isArray(object?.whitelist) ? object.whitelist.map((e: any) => String(e)) : [],
      slashFraction: isSet(object.slashFraction) ? String(object.slashFraction) : "",
      slashWindow: isSet(object.slashWindow) ? Long.fromValue(object.slashWindow) : Long.UZERO,
      minValidPerWindow: isSet(object.minValidPerWindow) ? String(object.minValidPerWindow) : "",
      twapLookbackWindow: isSet(object.twapLookbackWindow) ? Duration.fromJSON(object.twapLookbackWindow) : undefined,
      minVoters: isSet(object.minVoters) ? Long.fromValue(object.minVoters) : Long.UZERO,
      validatorFeeRatio: isSet(object.validatorFeeRatio) ? String(object.validatorFeeRatio) : "",
      expirationBlocks: isSet(object.expirationBlocks) ? Long.fromValue(object.expirationBlocks) : Long.UZERO,
    };
  },

  toJSON(message: OracleParamsMsg): unknown {
    const obj: any = {};
    message.votePeriod !== undefined && (obj.votePeriod = (message.votePeriod || Long.UZERO).toString());
    message.voteThreshold !== undefined && (obj.voteThreshold = message.voteThreshold);
    message.rewardBand !== undefined && (obj.rewardBand = message.rewardBand);
    if (message.whitelist) {
      obj.whitelist = message.whitelist.map((e) => e);
    } else {
      obj.whitelist = [];
    }
    message.slashFraction !== undefined && (obj.slashFraction = message.slashFraction);
    message.slashWindow !== undefined && (obj.slashWindow = (message.slashWindow || Long.UZERO).toString());
    message.minValidPerWindow !== undefined && (obj.minValidPerWindow = message.minValidPerWindow);
    message.twapLookbackWindow !== undefined &&
      (obj.twapLookbackWindow = message.twapLookbackWindow ? Duration.toJSON(message.twapLookbackWindow) : undefined);
    message.minVoters !== undefined && (obj.minVoters = (message.minVoters || Long.UZERO).toString());
    message.validatorFeeRatio !== undefined && (obj.validatorFeeRatio = message.validatorFeeRatio);
    message.expirationBlocks !== undefined &&
      (obj.expirationBlocks = (message.expirationBlocks || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<OracleParamsMsg>, I>>(base?: I): OracleParamsMsg {
    return OracleParamsMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OracleParamsMsg>, I>>(object: I): OracleParamsMsg {
    const message = createBaseOracleParamsMsg();
    message.votePeriod = (object.votePeriod !== undefined && object.votePeriod !== null)
      ? Long.fromValue(object.votePeriod)
      : Long.UZERO;
    message.voteThreshold = object.voteThreshold ?? "";
    message.rewardBand = object.rewardBand ?? "";
    message.whitelist = object.whitelist?.map((e) => e) || [];
    message.slashFraction = object.slashFraction ?? "";
    message.slashWindow = (object.slashWindow !== undefined && object.slashWindow !== null)
      ? Long.fromValue(object.slashWindow)
      : Long.UZERO;
    message.minValidPerWindow = object.minValidPerWindow ?? "";
    message.twapLookbackWindow = (object.twapLookbackWindow !== undefined && object.twapLookbackWindow !== null)
      ? Duration.fromPartial(object.twapLookbackWindow)
      : undefined;
    message.minVoters = (object.minVoters !== undefined && object.minVoters !== null)
      ? Long.fromValue(object.minVoters)
      : Long.UZERO;
    message.validatorFeeRatio = object.validatorFeeRatio ?? "";
    message.expirationBlocks = (object.expirationBlocks !== undefined && object.expirationBlocks !== null)
      ? Long.fromValue(object.expirationBlocks)
      : Long.UZERO;
    return message;
  },
};

/** Msg defines the oracle Msg service. */
export interface Msg {
  /**
   * AggregateExchangeRatePrevote defines a method for submitting
   * aggregate exchange rate prevote
   */
  AggregateExchangeRatePrevote(
    request: MsgAggregateExchangeRatePrevote,
  ): Promise<MsgAggregateExchangeRatePrevoteResponse>;
  /**
   * AggregateExchangeRateVote defines a method for submitting
   * aggregate exchange rate vote
   */
  AggregateExchangeRateVote(request: MsgAggregateExchangeRateVote): Promise<MsgAggregateExchangeRateVoteResponse>;
  /**
   * DelegateFeedConsent defines a method for delegating oracle voting rights
   * to another address known as a price feeder.
   * See https://github.com/NibiruChain/pricefeeder.
   */
  DelegateFeedConsent(request: MsgDelegateFeedConsent): Promise<MsgDelegateFeedConsentResponse>;
  EditOracleParams(request: MsgEditOracleParams): Promise<MsgEditOracleParamsResponse>;
}

export const MsgServiceName = "nibiru.oracle.v1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.AggregateExchangeRatePrevote = this.AggregateExchangeRatePrevote.bind(this);
    this.AggregateExchangeRateVote = this.AggregateExchangeRateVote.bind(this);
    this.DelegateFeedConsent = this.DelegateFeedConsent.bind(this);
    this.EditOracleParams = this.EditOracleParams.bind(this);
  }
  AggregateExchangeRatePrevote(
    request: MsgAggregateExchangeRatePrevote,
  ): Promise<MsgAggregateExchangeRatePrevoteResponse> {
    const data = MsgAggregateExchangeRatePrevote.encode(request).finish();
    const promise = this.rpc.request(this.service, "AggregateExchangeRatePrevote", data);
    return promise.then((data) => MsgAggregateExchangeRatePrevoteResponse.decode(_m0.Reader.create(data)));
  }

  AggregateExchangeRateVote(request: MsgAggregateExchangeRateVote): Promise<MsgAggregateExchangeRateVoteResponse> {
    const data = MsgAggregateExchangeRateVote.encode(request).finish();
    const promise = this.rpc.request(this.service, "AggregateExchangeRateVote", data);
    return promise.then((data) => MsgAggregateExchangeRateVoteResponse.decode(_m0.Reader.create(data)));
  }

  DelegateFeedConsent(request: MsgDelegateFeedConsent): Promise<MsgDelegateFeedConsentResponse> {
    const data = MsgDelegateFeedConsent.encode(request).finish();
    const promise = this.rpc.request(this.service, "DelegateFeedConsent", data);
    return promise.then((data) => MsgDelegateFeedConsentResponse.decode(_m0.Reader.create(data)));
  }

  EditOracleParams(request: MsgEditOracleParams): Promise<MsgEditOracleParamsResponse> {
    const data = MsgEditOracleParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "EditOracleParams", data);
    return promise.then((data) => MsgEditOracleParamsResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
