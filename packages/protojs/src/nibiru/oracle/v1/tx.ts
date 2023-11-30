/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"

export const protobufPackage = "nibiru.oracle.v1"

/**
 * MsgAggregateExchangeRatePrevote represents a message to submit
 * aggregate exchange rate prevote.
 */
export interface MsgAggregateExchangeRatePrevote {
  hash: string
  /**
   * Feeder is the Bech32 address of the price feeder. A validator may
   * specify multiple price feeders by delegating them consent. The validator
   * address is also a valid feeder by default.
   */
  feeder: string
  /** Validator is the Bech32 address to which the prevote will be credited. */
  validator: string
}

/**
 * MsgAggregateExchangeRatePrevoteResponse defines the
 * Msg/AggregateExchangeRatePrevote response type.
 */
export interface MsgAggregateExchangeRatePrevoteResponse {}

/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 */
export interface MsgAggregateExchangeRateVote {
  salt: string
  exchangeRates: string
  /**
   * Feeder is the Bech32 address of the price feeder. A validator may
   * specify multiple price feeders by delegating them consent. The validator
   * address is also a valid feeder by default.
   */
  feeder: string
  /** Validator is the Bech32 address to which the vote will be credited. */
  validator: string
}

/**
 * MsgAggregateExchangeRateVoteResponse defines the
 * Msg/AggregateExchangeRateVote response type.
 */
export interface MsgAggregateExchangeRateVoteResponse {}

/**
 * MsgDelegateFeedConsent represents a message to delegate oracle voting rights
 * to another address.
 */
export interface MsgDelegateFeedConsent {
  operator: string
  delegate: string
}

/**
 * MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response
 * type.
 */
export interface MsgDelegateFeedConsentResponse {}

function createBaseMsgAggregateExchangeRatePrevote(): MsgAggregateExchangeRatePrevote {
  return { hash: "", feeder: "", validator: "" }
}

export const MsgAggregateExchangeRatePrevote = {
  encode(
    message: MsgAggregateExchangeRatePrevote,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash)
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder)
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAggregateExchangeRatePrevote {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgAggregateExchangeRatePrevote()
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

          message.feeder = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.validator = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgAggregateExchangeRatePrevote {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
    }
  },

  toJSON(message: MsgAggregateExchangeRatePrevote): unknown {
    const obj: any = {}
    message.hash !== undefined && (obj.hash = message.hash)
    message.feeder !== undefined && (obj.feeder = message.feeder)
    message.validator !== undefined && (obj.validator = message.validator)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgAggregateExchangeRatePrevote>, I>>(
    base?: I
  ): MsgAggregateExchangeRatePrevote {
    return MsgAggregateExchangeRatePrevote.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgAggregateExchangeRatePrevote>, I>>(
    object: I
  ): MsgAggregateExchangeRatePrevote {
    const message = createBaseMsgAggregateExchangeRatePrevote()
    message.hash = object.hash ?? ""
    message.feeder = object.feeder ?? ""
    message.validator = object.validator ?? ""
    return message
  },
}

function createBaseMsgAggregateExchangeRatePrevoteResponse(): MsgAggregateExchangeRatePrevoteResponse {
  return {}
}

export const MsgAggregateExchangeRatePrevoteResponse = {
  encode(
    _: MsgAggregateExchangeRatePrevoteResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAggregateExchangeRatePrevoteResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgAggregateExchangeRatePrevoteResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(_: any): MsgAggregateExchangeRatePrevoteResponse {
    return {}
  },

  toJSON(_: MsgAggregateExchangeRatePrevoteResponse): unknown {
    const obj: any = {}
    return obj
  },

  create<
    I extends Exact<DeepPartial<MsgAggregateExchangeRatePrevoteResponse>, I>
  >(base?: I): MsgAggregateExchangeRatePrevoteResponse {
    return MsgAggregateExchangeRatePrevoteResponse.fromPartial(base ?? {})
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgAggregateExchangeRatePrevoteResponse>, I>
  >(_: I): MsgAggregateExchangeRatePrevoteResponse {
    const message = createBaseMsgAggregateExchangeRatePrevoteResponse()
    return message
  },
}

function createBaseMsgAggregateExchangeRateVote(): MsgAggregateExchangeRateVote {
  return { salt: "", exchangeRates: "", feeder: "", validator: "" }
}

export const MsgAggregateExchangeRateVote = {
  encode(
    message: MsgAggregateExchangeRateVote,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.salt !== "") {
      writer.uint32(10).string(message.salt)
    }
    if (message.exchangeRates !== "") {
      writer.uint32(18).string(message.exchangeRates)
    }
    if (message.feeder !== "") {
      writer.uint32(26).string(message.feeder)
    }
    if (message.validator !== "") {
      writer.uint32(34).string(message.validator)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAggregateExchangeRateVote {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgAggregateExchangeRateVote()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.salt = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.exchangeRates = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.feeder = reader.string()
          continue
        case 4:
          if (tag !== 34) {
            break
          }

          message.validator = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgAggregateExchangeRateVote {
    return {
      salt: isSet(object.salt) ? String(object.salt) : "",
      exchangeRates: isSet(object.exchangeRates)
        ? String(object.exchangeRates)
        : "",
      feeder: isSet(object.feeder) ? String(object.feeder) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
    }
  },

  toJSON(message: MsgAggregateExchangeRateVote): unknown {
    const obj: any = {}
    message.salt !== undefined && (obj.salt = message.salt)
    message.exchangeRates !== undefined &&
      (obj.exchangeRates = message.exchangeRates)
    message.feeder !== undefined && (obj.feeder = message.feeder)
    message.validator !== undefined && (obj.validator = message.validator)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgAggregateExchangeRateVote>, I>>(
    base?: I
  ): MsgAggregateExchangeRateVote {
    return MsgAggregateExchangeRateVote.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgAggregateExchangeRateVote>, I>>(
    object: I
  ): MsgAggregateExchangeRateVote {
    const message = createBaseMsgAggregateExchangeRateVote()
    message.salt = object.salt ?? ""
    message.exchangeRates = object.exchangeRates ?? ""
    message.feeder = object.feeder ?? ""
    message.validator = object.validator ?? ""
    return message
  },
}

function createBaseMsgAggregateExchangeRateVoteResponse(): MsgAggregateExchangeRateVoteResponse {
  return {}
}

export const MsgAggregateExchangeRateVoteResponse = {
  encode(
    _: MsgAggregateExchangeRateVoteResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAggregateExchangeRateVoteResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgAggregateExchangeRateVoteResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(_: any): MsgAggregateExchangeRateVoteResponse {
    return {}
  },

  toJSON(_: MsgAggregateExchangeRateVoteResponse): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<MsgAggregateExchangeRateVoteResponse>, I>>(
    base?: I
  ): MsgAggregateExchangeRateVoteResponse {
    return MsgAggregateExchangeRateVoteResponse.fromPartial(base ?? {})
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgAggregateExchangeRateVoteResponse>, I>
  >(_: I): MsgAggregateExchangeRateVoteResponse {
    const message = createBaseMsgAggregateExchangeRateVoteResponse()
    return message
  },
}

function createBaseMsgDelegateFeedConsent(): MsgDelegateFeedConsent {
  return { operator: "", delegate: "" }
}

export const MsgDelegateFeedConsent = {
  encode(
    message: MsgDelegateFeedConsent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator)
    }
    if (message.delegate !== "") {
      writer.uint32(18).string(message.delegate)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDelegateFeedConsent {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgDelegateFeedConsent()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.operator = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.delegate = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgDelegateFeedConsent {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      delegate: isSet(object.delegate) ? String(object.delegate) : "",
    }
  },

  toJSON(message: MsgDelegateFeedConsent): unknown {
    const obj: any = {}
    message.operator !== undefined && (obj.operator = message.operator)
    message.delegate !== undefined && (obj.delegate = message.delegate)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgDelegateFeedConsent>, I>>(
    base?: I
  ): MsgDelegateFeedConsent {
    return MsgDelegateFeedConsent.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateFeedConsent>, I>>(
    object: I
  ): MsgDelegateFeedConsent {
    const message = createBaseMsgDelegateFeedConsent()
    message.operator = object.operator ?? ""
    message.delegate = object.delegate ?? ""
    return message
  },
}

function createBaseMsgDelegateFeedConsentResponse(): MsgDelegateFeedConsentResponse {
  return {}
}

export const MsgDelegateFeedConsentResponse = {
  encode(
    _: MsgDelegateFeedConsentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDelegateFeedConsentResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgDelegateFeedConsentResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(_: any): MsgDelegateFeedConsentResponse {
    return {}
  },

  toJSON(_: MsgDelegateFeedConsentResponse): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<MsgDelegateFeedConsentResponse>, I>>(
    base?: I
  ): MsgDelegateFeedConsentResponse {
    return MsgDelegateFeedConsentResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateFeedConsentResponse>, I>>(
    _: I
  ): MsgDelegateFeedConsentResponse {
    const message = createBaseMsgDelegateFeedConsentResponse()
    return message
  },
}

/** Msg defines the oracle Msg service. */
export interface Msg {
  /**
   * AggregateExchangeRatePrevote defines a method for submitting
   * aggregate exchange rate prevote
   */
  AggregateExchangeRatePrevote(
    request: MsgAggregateExchangeRatePrevote
  ): Promise<MsgAggregateExchangeRatePrevoteResponse>
  /**
   * AggregateExchangeRateVote defines a method for submitting
   * aggregate exchange rate vote
   */
  AggregateExchangeRateVote(
    request: MsgAggregateExchangeRateVote
  ): Promise<MsgAggregateExchangeRateVoteResponse>
  /**
   * DelegateFeedConsent defines a method for delegating oracle voting rights
   * to another address known as a price feeder.
   * See https://github.com/NibiruChain/pricefeeder.
   */
  DelegateFeedConsent(
    request: MsgDelegateFeedConsent
  ): Promise<MsgDelegateFeedConsentResponse>
}

export const MsgServiceName = "nibiru.oracle.v1.Msg"
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  private readonly service: string
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName
    this.rpc = rpc
    this.AggregateExchangeRatePrevote =
      this.AggregateExchangeRatePrevote.bind(this)
    this.AggregateExchangeRateVote = this.AggregateExchangeRateVote.bind(this)
    this.DelegateFeedConsent = this.DelegateFeedConsent.bind(this)
  }
  AggregateExchangeRatePrevote(
    request: MsgAggregateExchangeRatePrevote
  ): Promise<MsgAggregateExchangeRatePrevoteResponse> {
    const data = MsgAggregateExchangeRatePrevote.encode(request).finish()
    const promise = this.rpc.request(
      this.service,
      "AggregateExchangeRatePrevote",
      data
    )
    return promise.then((data) =>
      MsgAggregateExchangeRatePrevoteResponse.decode(_m0.Reader.create(data))
    )
  }

  AggregateExchangeRateVote(
    request: MsgAggregateExchangeRateVote
  ): Promise<MsgAggregateExchangeRateVoteResponse> {
    const data = MsgAggregateExchangeRateVote.encode(request).finish()
    const promise = this.rpc.request(
      this.service,
      "AggregateExchangeRateVote",
      data
    )
    return promise.then((data) =>
      MsgAggregateExchangeRateVoteResponse.decode(_m0.Reader.create(data))
    )
  }

  DelegateFeedConsent(
    request: MsgDelegateFeedConsent
  ): Promise<MsgDelegateFeedConsentResponse> {
    const data = MsgDelegateFeedConsent.encode(request).finish()
    const promise = this.rpc.request(this.service, "DelegateFeedConsent", data)
    return promise.then((data) =>
      MsgDelegateFeedConsentResponse.decode(_m0.Reader.create(data))
    )
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined

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
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never
    }

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
