/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"
import { Coin } from "../../../cosmos/base/v1beta1/coin"
import { Duration } from "../../../google/protobuf/duration"
import { messageTypeRegistry } from "../../../typeRegistry"

export const protobufPackage = "nibiru.oracle.v1"

/** Params defines the module parameters for the x/oracle module. */
export interface Params {
  $type: "nibiru.oracle.v1.Params"
  /** VotePeriod defines the number of blocks during which voting takes place. */
  votePeriod: Long
  /**
   * VoteThreshold specifies the minimum proportion of votes that must be
   * received for a ballot to pass.
   */
  voteThreshold: string
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
  rewardBand: string
  /**
   * The set of whitelisted markets, or asset pairs, for the module.
   * Ex. '["unibi:uusd","ubtc:uusd"]'
   */
  whitelist: string[]
  /**
   * SlashFraction returns the proportion of an oracle's stake that gets
   * slashed in the event of slashing. `SlashFraction` specifies the exact
   * penalty for failing a voting period.
   */
  slashFraction: string
  /**
   * SlashWindow returns the number of voting periods that specify a
   * "slash window". After each slash window, all oracles that have missed more
   * than the penalty threshold are slashed. Missing the penalty threshold is
   * synonymous with submitting fewer valid votes than `MinValidPerWindow`.
   */
  slashWindow: Long
  minValidPerWindow: string
  /** Amount of time to look back for TWAP calculations */
  twapLookbackWindow?: Duration
  /**
   * The minimum number of voters (i.e. oracle validators) per pair for it to be
   * considered a passing ballot. Recommended at least 4.
   */
  minVoters: Long
  /** The validator fee ratio that is given to validators every epoch. */
  validatorFeeRatio: string
  expirationBlocks: Long
}

/**
 * Struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in
 * SHA256("{salt}:({pair},{exchange_rate})|...|({pair},{exchange_rate}):{voter}")
 */
export interface AggregateExchangeRatePrevote {
  $type: "nibiru.oracle.v1.AggregateExchangeRatePrevote"
  hash: string
  voter: string
  submitBlock: Long
}

/**
 * MsgAggregateExchangeRateVote - struct for voting on
 * the exchange rates different assets.
 */
export interface AggregateExchangeRateVote {
  $type: "nibiru.oracle.v1.AggregateExchangeRateVote"
  exchangeRateTuples: ExchangeRateTuple[]
  voter: string
}

/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */
export interface ExchangeRateTuple {
  $type: "nibiru.oracle.v1.ExchangeRateTuple"
  pair: string
  exchangeRate: string
}

export interface DatedPrice {
  $type: "nibiru.oracle.v1.DatedPrice"
  exchangeRate: string
  createdBlock: Long
}

/**
 * Rewards defines a credit object towards validators
 * which provide prices faithfully for different pairs.
 */
export interface Rewards {
  $type: "nibiru.oracle.v1.Rewards"
  /** id uniquely identifies the rewards instance of the pair */
  id: Long
  /**
   * vote_periods defines the vote periods left in which rewards will be
   * distributed.
   */
  votePeriods: Long
  /** Coins defines the amount of coins to distribute in a single vote period. */
  coins: Coin[]
}

function createBaseParams(): Params {
  return {
    $type: "nibiru.oracle.v1.Params",
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
  }
}

export const Params = {
  $type: "nibiru.oracle.v1.Params" as const,

  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.votePeriod.isZero()) {
      writer.uint32(8).uint64(message.votePeriod)
    }
    if (message.voteThreshold !== "") {
      writer.uint32(18).string(message.voteThreshold)
    }
    if (message.rewardBand !== "") {
      writer.uint32(26).string(message.rewardBand)
    }
    for (const v of message.whitelist) {
      writer.uint32(34).string(v!)
    }
    if (message.slashFraction !== "") {
      writer.uint32(42).string(message.slashFraction)
    }
    if (!message.slashWindow.isZero()) {
      writer.uint32(48).uint64(message.slashWindow)
    }
    if (message.minValidPerWindow !== "") {
      writer.uint32(58).string(message.minValidPerWindow)
    }
    if (message.twapLookbackWindow !== undefined) {
      Duration.encode(message.twapLookbackWindow, writer.uint32(66).fork()).ldelim()
    }
    if (!message.minVoters.isZero()) {
      writer.uint32(72).uint64(message.minVoters)
    }
    if (message.validatorFeeRatio !== "") {
      writer.uint32(82).string(message.validatorFeeRatio)
    }
    if (!message.expirationBlocks.isZero()) {
      writer.uint32(88).uint64(message.expirationBlocks)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseParams()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.votePeriod = reader.uint64() as Long
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.voteThreshold = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.rewardBand = reader.string()
          continue
        case 4:
          if (tag !== 34) {
            break
          }

          message.whitelist.push(reader.string())
          continue
        case 5:
          if (tag !== 42) {
            break
          }

          message.slashFraction = reader.string()
          continue
        case 6:
          if (tag !== 48) {
            break
          }

          message.slashWindow = reader.uint64() as Long
          continue
        case 7:
          if (tag !== 58) {
            break
          }

          message.minValidPerWindow = reader.string()
          continue
        case 8:
          if (tag !== 66) {
            break
          }

          message.twapLookbackWindow = Duration.decode(reader, reader.uint32())
          continue
        case 9:
          if (tag !== 72) {
            break
          }

          message.minVoters = reader.uint64() as Long
          continue
        case 10:
          if (tag !== 82) {
            break
          }

          message.validatorFeeRatio = reader.string()
          continue
        case 11:
          if (tag !== 88) {
            break
          }

          message.expirationBlocks = reader.uint64() as Long
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): Params {
    return {
      $type: Params.$type,
      votePeriod: isSet(object.votePeriod)
        ? Long.fromValue(object.votePeriod)
        : Long.UZERO,
      voteThreshold: isSet(object.voteThreshold) ? String(object.voteThreshold) : "",
      rewardBand: isSet(object.rewardBand) ? String(object.rewardBand) : "",
      whitelist: Array.isArray(object?.whitelist)
        ? object.whitelist.map((e: any) => String(e))
        : [],
      slashFraction: isSet(object.slashFraction) ? String(object.slashFraction) : "",
      slashWindow: isSet(object.slashWindow)
        ? Long.fromValue(object.slashWindow)
        : Long.UZERO,
      minValidPerWindow: isSet(object.minValidPerWindow)
        ? String(object.minValidPerWindow)
        : "",
      twapLookbackWindow: isSet(object.twapLookbackWindow)
        ? Duration.fromJSON(object.twapLookbackWindow)
        : undefined,
      minVoters: isSet(object.minVoters)
        ? Long.fromValue(object.minVoters)
        : Long.UZERO,
      validatorFeeRatio: isSet(object.validatorFeeRatio)
        ? String(object.validatorFeeRatio)
        : "",
      expirationBlocks: isSet(object.expirationBlocks)
        ? Long.fromValue(object.expirationBlocks)
        : Long.UZERO,
    }
  },

  toJSON(message: Params): unknown {
    const obj: any = {}
    message.votePeriod !== undefined &&
      (obj.votePeriod = (message.votePeriod || Long.UZERO).toString())
    message.voteThreshold !== undefined && (obj.voteThreshold = message.voteThreshold)
    message.rewardBand !== undefined && (obj.rewardBand = message.rewardBand)
    if (message.whitelist) {
      obj.whitelist = message.whitelist.map((e) => e)
    } else {
      obj.whitelist = []
    }
    message.slashFraction !== undefined && (obj.slashFraction = message.slashFraction)
    message.slashWindow !== undefined &&
      (obj.slashWindow = (message.slashWindow || Long.UZERO).toString())
    message.minValidPerWindow !== undefined &&
      (obj.minValidPerWindow = message.minValidPerWindow)
    message.twapLookbackWindow !== undefined &&
      (obj.twapLookbackWindow = message.twapLookbackWindow
        ? Duration.toJSON(message.twapLookbackWindow)
        : undefined)
    message.minVoters !== undefined &&
      (obj.minVoters = (message.minVoters || Long.UZERO).toString())
    message.validatorFeeRatio !== undefined &&
      (obj.validatorFeeRatio = message.validatorFeeRatio)
    message.expirationBlocks !== undefined &&
      (obj.expirationBlocks = (message.expirationBlocks || Long.UZERO).toString())
    return obj
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams()
    message.votePeriod =
      object.votePeriod !== undefined && object.votePeriod !== null
        ? Long.fromValue(object.votePeriod)
        : Long.UZERO
    message.voteThreshold = object.voteThreshold ?? ""
    message.rewardBand = object.rewardBand ?? ""
    message.whitelist = object.whitelist?.map((e) => e) || []
    message.slashFraction = object.slashFraction ?? ""
    message.slashWindow =
      object.slashWindow !== undefined && object.slashWindow !== null
        ? Long.fromValue(object.slashWindow)
        : Long.UZERO
    message.minValidPerWindow = object.minValidPerWindow ?? ""
    message.twapLookbackWindow =
      object.twapLookbackWindow !== undefined && object.twapLookbackWindow !== null
        ? Duration.fromPartial(object.twapLookbackWindow)
        : undefined
    message.minVoters =
      object.minVoters !== undefined && object.minVoters !== null
        ? Long.fromValue(object.minVoters)
        : Long.UZERO
    message.validatorFeeRatio = object.validatorFeeRatio ?? ""
    message.expirationBlocks =
      object.expirationBlocks !== undefined && object.expirationBlocks !== null
        ? Long.fromValue(object.expirationBlocks)
        : Long.UZERO
    return message
  },
}

messageTypeRegistry.set(Params.$type, Params)

function createBaseAggregateExchangeRatePrevote(): AggregateExchangeRatePrevote {
  return {
    $type: "nibiru.oracle.v1.AggregateExchangeRatePrevote",
    hash: "",
    voter: "",
    submitBlock: Long.UZERO,
  }
}

export const AggregateExchangeRatePrevote = {
  $type: "nibiru.oracle.v1.AggregateExchangeRatePrevote" as const,

  encode(
    message: AggregateExchangeRatePrevote,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash)
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter)
    }
    if (!message.submitBlock.isZero()) {
      writer.uint32(24).uint64(message.submitBlock)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AggregateExchangeRatePrevote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAggregateExchangeRatePrevote()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.hash = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.voter = reader.string()
          continue
        case 3:
          if (tag !== 24) {
            break
          }

          message.submitBlock = reader.uint64() as Long
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): AggregateExchangeRatePrevote {
    return {
      $type: AggregateExchangeRatePrevote.$type,
      hash: isSet(object.hash) ? String(object.hash) : "",
      voter: isSet(object.voter) ? String(object.voter) : "",
      submitBlock: isSet(object.submitBlock)
        ? Long.fromValue(object.submitBlock)
        : Long.UZERO,
    }
  },

  toJSON(message: AggregateExchangeRatePrevote): unknown {
    const obj: any = {}
    message.hash !== undefined && (obj.hash = message.hash)
    message.voter !== undefined && (obj.voter = message.voter)
    message.submitBlock !== undefined &&
      (obj.submitBlock = (message.submitBlock || Long.UZERO).toString())
    return obj
  },

  create<I extends Exact<DeepPartial<AggregateExchangeRatePrevote>, I>>(
    base?: I,
  ): AggregateExchangeRatePrevote {
    return AggregateExchangeRatePrevote.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<AggregateExchangeRatePrevote>, I>>(
    object: I,
  ): AggregateExchangeRatePrevote {
    const message = createBaseAggregateExchangeRatePrevote()
    message.hash = object.hash ?? ""
    message.voter = object.voter ?? ""
    message.submitBlock =
      object.submitBlock !== undefined && object.submitBlock !== null
        ? Long.fromValue(object.submitBlock)
        : Long.UZERO
    return message
  },
}

messageTypeRegistry.set(
  AggregateExchangeRatePrevote.$type,
  AggregateExchangeRatePrevote,
)

function createBaseAggregateExchangeRateVote(): AggregateExchangeRateVote {
  return {
    $type: "nibiru.oracle.v1.AggregateExchangeRateVote",
    exchangeRateTuples: [],
    voter: "",
  }
}

export const AggregateExchangeRateVote = {
  $type: "nibiru.oracle.v1.AggregateExchangeRateVote" as const,

  encode(
    message: AggregateExchangeRateVote,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.exchangeRateTuples) {
      ExchangeRateTuple.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AggregateExchangeRateVote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAggregateExchangeRateVote()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.exchangeRateTuples.push(
            ExchangeRateTuple.decode(reader, reader.uint32()),
          )
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.voter = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): AggregateExchangeRateVote {
    return {
      $type: AggregateExchangeRateVote.$type,
      exchangeRateTuples: Array.isArray(object?.exchangeRateTuples)
        ? object.exchangeRateTuples.map((e: any) => ExchangeRateTuple.fromJSON(e))
        : [],
      voter: isSet(object.voter) ? String(object.voter) : "",
    }
  },

  toJSON(message: AggregateExchangeRateVote): unknown {
    const obj: any = {}
    if (message.exchangeRateTuples) {
      obj.exchangeRateTuples = message.exchangeRateTuples.map((e) =>
        e ? ExchangeRateTuple.toJSON(e) : undefined,
      )
    } else {
      obj.exchangeRateTuples = []
    }
    message.voter !== undefined && (obj.voter = message.voter)
    return obj
  },

  create<I extends Exact<DeepPartial<AggregateExchangeRateVote>, I>>(
    base?: I,
  ): AggregateExchangeRateVote {
    return AggregateExchangeRateVote.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<AggregateExchangeRateVote>, I>>(
    object: I,
  ): AggregateExchangeRateVote {
    const message = createBaseAggregateExchangeRateVote()
    message.exchangeRateTuples =
      object.exchangeRateTuples?.map((e) => ExchangeRateTuple.fromPartial(e)) || []
    message.voter = object.voter ?? ""
    return message
  },
}

messageTypeRegistry.set(AggregateExchangeRateVote.$type, AggregateExchangeRateVote)

function createBaseExchangeRateTuple(): ExchangeRateTuple {
  return { $type: "nibiru.oracle.v1.ExchangeRateTuple", pair: "", exchangeRate: "" }
}

export const ExchangeRateTuple = {
  $type: "nibiru.oracle.v1.ExchangeRateTuple" as const,

  encode(
    message: ExchangeRateTuple,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair)
    }
    if (message.exchangeRate !== "") {
      writer.uint32(18).string(message.exchangeRate)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRateTuple {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseExchangeRateTuple()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.pair = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.exchangeRate = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): ExchangeRateTuple {
    return {
      $type: ExchangeRateTuple.$type,
      pair: isSet(object.pair) ? String(object.pair) : "",
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : "",
    }
  },

  toJSON(message: ExchangeRateTuple): unknown {
    const obj: any = {}
    message.pair !== undefined && (obj.pair = message.pair)
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate)
    return obj
  },

  create<I extends Exact<DeepPartial<ExchangeRateTuple>, I>>(
    base?: I,
  ): ExchangeRateTuple {
    return ExchangeRateTuple.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<ExchangeRateTuple>, I>>(
    object: I,
  ): ExchangeRateTuple {
    const message = createBaseExchangeRateTuple()
    message.pair = object.pair ?? ""
    message.exchangeRate = object.exchangeRate ?? ""
    return message
  },
}

messageTypeRegistry.set(ExchangeRateTuple.$type, ExchangeRateTuple)

function createBaseDatedPrice(): DatedPrice {
  return {
    $type: "nibiru.oracle.v1.DatedPrice",
    exchangeRate: "",
    createdBlock: Long.UZERO,
  }
}

export const DatedPrice = {
  $type: "nibiru.oracle.v1.DatedPrice" as const,

  encode(message: DatedPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exchangeRate !== "") {
      writer.uint32(10).string(message.exchangeRate)
    }
    if (!message.createdBlock.isZero()) {
      writer.uint32(16).uint64(message.createdBlock)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DatedPrice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDatedPrice()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.exchangeRate = reader.string()
          continue
        case 2:
          if (tag !== 16) {
            break
          }

          message.createdBlock = reader.uint64() as Long
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): DatedPrice {
    return {
      $type: DatedPrice.$type,
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : "",
      createdBlock: isSet(object.createdBlock)
        ? Long.fromValue(object.createdBlock)
        : Long.UZERO,
    }
  },

  toJSON(message: DatedPrice): unknown {
    const obj: any = {}
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate)
    message.createdBlock !== undefined &&
      (obj.createdBlock = (message.createdBlock || Long.UZERO).toString())
    return obj
  },

  create<I extends Exact<DeepPartial<DatedPrice>, I>>(base?: I): DatedPrice {
    return DatedPrice.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<DatedPrice>, I>>(object: I): DatedPrice {
    const message = createBaseDatedPrice()
    message.exchangeRate = object.exchangeRate ?? ""
    message.createdBlock =
      object.createdBlock !== undefined && object.createdBlock !== null
        ? Long.fromValue(object.createdBlock)
        : Long.UZERO
    return message
  },
}

messageTypeRegistry.set(DatedPrice.$type, DatedPrice)

function createBaseRewards(): Rewards {
  return {
    $type: "nibiru.oracle.v1.Rewards",
    id: Long.UZERO,
    votePeriods: Long.UZERO,
    coins: [],
  }
}

export const Rewards = {
  $type: "nibiru.oracle.v1.Rewards" as const,

  encode(message: Rewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id)
    }
    if (!message.votePeriods.isZero()) {
      writer.uint32(16).uint64(message.votePeriods)
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rewards {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRewards()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.id = reader.uint64() as Long
          continue
        case 2:
          if (tag !== 16) {
            break
          }

          message.votePeriods = reader.uint64() as Long
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.coins.push(Coin.decode(reader, reader.uint32()))
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): Rewards {
    return {
      $type: Rewards.$type,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      votePeriods: isSet(object.votePeriods)
        ? Long.fromValue(object.votePeriods)
        : Long.UZERO,
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    }
  },

  toJSON(message: Rewards): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    message.votePeriods !== undefined &&
      (obj.votePeriods = (message.votePeriods || Long.UZERO).toString())
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.coins = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<Rewards>, I>>(base?: I): Rewards {
    return Rewards.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<Rewards>, I>>(object: I): Rewards {
    const message = createBaseRewards()
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO
    message.votePeriods =
      object.votePeriods !== undefined && object.votePeriods !== null
        ? Long.fromValue(object.votePeriods)
        : Long.UZERO
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || []
    return message
  },
}

messageTypeRegistry.set(Rewards.$type, Rewards)

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
  ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never
    }

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
