/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"
import { Coin } from "../../../cosmos/base/v1beta1/coin"
import { messageTypeRegistry } from "../../../typeRegistry"

export const protobufPackage = "nibiru.stablecoin.v1"

/**
 * MsgMintStable: Msg to mint NUSD. A user deposits NIBI and collateral and gets
 * NUSD in return. The amount of NUSD received depends on the current price set
 * by the oracle library and the current collateral ratio for the protocol.
 */
export interface MsgMintStable {
  $type: "nibiru.stablecoin.v1.MsgMintStable"
  creator: string
  stable?: Coin
}

/**
 * MsgMintStableResponse specifies the amount of NUSD token the user will
 * receive after their mint transaction
 */
export interface MsgMintStableResponse {
  $type: "nibiru.stablecoin.v1.MsgMintStableResponse"
  stable?: Coin
  usedCoins: Coin[]
  feesPayed: Coin[]
}

/**
 * MsgBurnStable allows users to burn NUSD in exchange for NIBI and collateral.
 * The amount of NIBI and Collateral received depends on the current price set by
 * the x/oracle library and the current collateral ratio.
 */
export interface MsgBurnStable {
  $type: "nibiru.stablecoin.v1.MsgBurnStable"
  creator: string
  stable?: Coin
}

/**
 * MsgBurnStableResponse specifies the amount of collateral and governance
 * token the user will receive after their burn transaction.
 */
export interface MsgBurnStableResponse {
  $type: "nibiru.stablecoin.v1.MsgBurnStableResponse"
  collateral?: Coin
  gov?: Coin
  feesPayed: Coin[]
}

/** MsgRecollateralize */
export interface MsgRecollateralize {
  $type: "nibiru.stablecoin.v1.MsgRecollateralize"
  creator: string
  coll?: Coin
}

/** MsgRecollateralizeResponse is the output of a successful 'Recollateralize' */
export interface MsgRecollateralizeResponse {
  $type: "nibiru.stablecoin.v1.MsgRecollateralizeResponse"
  /**
   * Gov (sdk.Coin): Tokens rewarded to the caller in exchange for her
   * collateral.
   */
  gov?: Coin
}

/** MsgBuyback */
export interface MsgBuyback {
  $type: "nibiru.stablecoin.v1.MsgBuyback"
  creator: string
  /**
   * Gov (sdk.Coin): Tokens the caller wants to sell to the protocol in exchange
   * for collateral.
   */
  gov?: Coin
}

/** MsgBuybackResponse is the output of a successful 'Buyback' */
export interface MsgBuybackResponse {
  $type: "nibiru.stablecoin.v1.MsgBuybackResponse"
  /** Coll (sdk.Coin): Tokens sold to the caller in exchange for her collateral. */
  coll?: Coin
}

function createBaseMsgMintStable(): MsgMintStable {
  return { $type: "nibiru.stablecoin.v1.MsgMintStable", creator: "", stable: undefined }
}

export const MsgMintStable = {
  $type: "nibiru.stablecoin.v1.MsgMintStable" as const,

  encode(message: MsgMintStable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator)
    }
    if (message.stable !== undefined) {
      Coin.encode(message.stable, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintStable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgMintStable()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.creator = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.stable = Coin.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgMintStable {
    return {
      $type: MsgMintStable.$type,
      creator: isSet(object.creator) ? String(object.creator) : "",
      stable: isSet(object.stable) ? Coin.fromJSON(object.stable) : undefined,
    }
  },

  toJSON(message: MsgMintStable): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.stable !== undefined &&
      (obj.stable = message.stable ? Coin.toJSON(message.stable) : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgMintStable>, I>>(base?: I): MsgMintStable {
    return MsgMintStable.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintStable>, I>>(
    object: I,
  ): MsgMintStable {
    const message = createBaseMsgMintStable()
    message.creator = object.creator ?? ""
    message.stable =
      object.stable !== undefined && object.stable !== null
        ? Coin.fromPartial(object.stable)
        : undefined
    return message
  },
}

messageTypeRegistry.set(MsgMintStable.$type, MsgMintStable)

function createBaseMsgMintStableResponse(): MsgMintStableResponse {
  return {
    $type: "nibiru.stablecoin.v1.MsgMintStableResponse",
    stable: undefined,
    usedCoins: [],
    feesPayed: [],
  }
}

export const MsgMintStableResponse = {
  $type: "nibiru.stablecoin.v1.MsgMintStableResponse" as const,

  encode(
    message: MsgMintStableResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.stable !== undefined) {
      Coin.encode(message.stable, writer.uint32(10).fork()).ldelim()
    }
    for (const v of message.usedCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.feesPayed) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintStableResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgMintStableResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.stable = Coin.decode(reader, reader.uint32())
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.usedCoins.push(Coin.decode(reader, reader.uint32()))
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.feesPayed.push(Coin.decode(reader, reader.uint32()))
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgMintStableResponse {
    return {
      $type: MsgMintStableResponse.$type,
      stable: isSet(object.stable) ? Coin.fromJSON(object.stable) : undefined,
      usedCoins: Array.isArray(object?.usedCoins)
        ? object.usedCoins.map((e: any) => Coin.fromJSON(e))
        : [],
      feesPayed: Array.isArray(object?.feesPayed)
        ? object.feesPayed.map((e: any) => Coin.fromJSON(e))
        : [],
    }
  },

  toJSON(message: MsgMintStableResponse): unknown {
    const obj: any = {}
    message.stable !== undefined &&
      (obj.stable = message.stable ? Coin.toJSON(message.stable) : undefined)
    if (message.usedCoins) {
      obj.usedCoins = message.usedCoins.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.usedCoins = []
    }
    if (message.feesPayed) {
      obj.feesPayed = message.feesPayed.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.feesPayed = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<MsgMintStableResponse>, I>>(
    base?: I,
  ): MsgMintStableResponse {
    return MsgMintStableResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintStableResponse>, I>>(
    object: I,
  ): MsgMintStableResponse {
    const message = createBaseMsgMintStableResponse()
    message.stable =
      object.stable !== undefined && object.stable !== null
        ? Coin.fromPartial(object.stable)
        : undefined
    message.usedCoins = object.usedCoins?.map((e) => Coin.fromPartial(e)) || []
    message.feesPayed = object.feesPayed?.map((e) => Coin.fromPartial(e)) || []
    return message
  },
}

messageTypeRegistry.set(MsgMintStableResponse.$type, MsgMintStableResponse)

function createBaseMsgBurnStable(): MsgBurnStable {
  return { $type: "nibiru.stablecoin.v1.MsgBurnStable", creator: "", stable: undefined }
}

export const MsgBurnStable = {
  $type: "nibiru.stablecoin.v1.MsgBurnStable" as const,

  encode(message: MsgBurnStable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator)
    }
    if (message.stable !== undefined) {
      Coin.encode(message.stable, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnStable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgBurnStable()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.creator = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.stable = Coin.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgBurnStable {
    return {
      $type: MsgBurnStable.$type,
      creator: isSet(object.creator) ? String(object.creator) : "",
      stable: isSet(object.stable) ? Coin.fromJSON(object.stable) : undefined,
    }
  },

  toJSON(message: MsgBurnStable): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.stable !== undefined &&
      (obj.stable = message.stable ? Coin.toJSON(message.stable) : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgBurnStable>, I>>(base?: I): MsgBurnStable {
    return MsgBurnStable.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnStable>, I>>(
    object: I,
  ): MsgBurnStable {
    const message = createBaseMsgBurnStable()
    message.creator = object.creator ?? ""
    message.stable =
      object.stable !== undefined && object.stable !== null
        ? Coin.fromPartial(object.stable)
        : undefined
    return message
  },
}

messageTypeRegistry.set(MsgBurnStable.$type, MsgBurnStable)

function createBaseMsgBurnStableResponse(): MsgBurnStableResponse {
  return {
    $type: "nibiru.stablecoin.v1.MsgBurnStableResponse",
    collateral: undefined,
    gov: undefined,
    feesPayed: [],
  }
}

export const MsgBurnStableResponse = {
  $type: "nibiru.stablecoin.v1.MsgBurnStableResponse" as const,

  encode(
    message: MsgBurnStableResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(10).fork()).ldelim()
    }
    if (message.gov !== undefined) {
      Coin.encode(message.gov, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.feesPayed) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnStableResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgBurnStableResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.collateral = Coin.decode(reader, reader.uint32())
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.gov = Coin.decode(reader, reader.uint32())
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.feesPayed.push(Coin.decode(reader, reader.uint32()))
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgBurnStableResponse {
    return {
      $type: MsgBurnStableResponse.$type,
      collateral: isSet(object.collateral)
        ? Coin.fromJSON(object.collateral)
        : undefined,
      gov: isSet(object.gov) ? Coin.fromJSON(object.gov) : undefined,
      feesPayed: Array.isArray(object?.feesPayed)
        ? object.feesPayed.map((e: any) => Coin.fromJSON(e))
        : [],
    }
  },

  toJSON(message: MsgBurnStableResponse): unknown {
    const obj: any = {}
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Coin.toJSON(message.collateral)
        : undefined)
    message.gov !== undefined &&
      (obj.gov = message.gov ? Coin.toJSON(message.gov) : undefined)
    if (message.feesPayed) {
      obj.feesPayed = message.feesPayed.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.feesPayed = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<MsgBurnStableResponse>, I>>(
    base?: I,
  ): MsgBurnStableResponse {
    return MsgBurnStableResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnStableResponse>, I>>(
    object: I,
  ): MsgBurnStableResponse {
    const message = createBaseMsgBurnStableResponse()
    message.collateral =
      object.collateral !== undefined && object.collateral !== null
        ? Coin.fromPartial(object.collateral)
        : undefined
    message.gov =
      object.gov !== undefined && object.gov !== null
        ? Coin.fromPartial(object.gov)
        : undefined
    message.feesPayed = object.feesPayed?.map((e) => Coin.fromPartial(e)) || []
    return message
  },
}

messageTypeRegistry.set(MsgBurnStableResponse.$type, MsgBurnStableResponse)

function createBaseMsgRecollateralize(): MsgRecollateralize {
  return {
    $type: "nibiru.stablecoin.v1.MsgRecollateralize",
    creator: "",
    coll: undefined,
  }
}

export const MsgRecollateralize = {
  $type: "nibiru.stablecoin.v1.MsgRecollateralize" as const,

  encode(
    message: MsgRecollateralize,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator)
    }
    if (message.coll !== undefined) {
      Coin.encode(message.coll, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecollateralize {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgRecollateralize()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.creator = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.coll = Coin.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgRecollateralize {
    return {
      $type: MsgRecollateralize.$type,
      creator: isSet(object.creator) ? String(object.creator) : "",
      coll: isSet(object.coll) ? Coin.fromJSON(object.coll) : undefined,
    }
  },

  toJSON(message: MsgRecollateralize): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.coll !== undefined &&
      (obj.coll = message.coll ? Coin.toJSON(message.coll) : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgRecollateralize>, I>>(
    base?: I,
  ): MsgRecollateralize {
    return MsgRecollateralize.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecollateralize>, I>>(
    object: I,
  ): MsgRecollateralize {
    const message = createBaseMsgRecollateralize()
    message.creator = object.creator ?? ""
    message.coll =
      object.coll !== undefined && object.coll !== null
        ? Coin.fromPartial(object.coll)
        : undefined
    return message
  },
}

messageTypeRegistry.set(MsgRecollateralize.$type, MsgRecollateralize)

function createBaseMsgRecollateralizeResponse(): MsgRecollateralizeResponse {
  return { $type: "nibiru.stablecoin.v1.MsgRecollateralizeResponse", gov: undefined }
}

export const MsgRecollateralizeResponse = {
  $type: "nibiru.stablecoin.v1.MsgRecollateralizeResponse" as const,

  encode(
    message: MsgRecollateralizeResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.gov !== undefined) {
      Coin.encode(message.gov, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecollateralizeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgRecollateralizeResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.gov = Coin.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgRecollateralizeResponse {
    return {
      $type: MsgRecollateralizeResponse.$type,
      gov: isSet(object.gov) ? Coin.fromJSON(object.gov) : undefined,
    }
  },

  toJSON(message: MsgRecollateralizeResponse): unknown {
    const obj: any = {}
    message.gov !== undefined &&
      (obj.gov = message.gov ? Coin.toJSON(message.gov) : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgRecollateralizeResponse>, I>>(
    base?: I,
  ): MsgRecollateralizeResponse {
    return MsgRecollateralizeResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecollateralizeResponse>, I>>(
    object: I,
  ): MsgRecollateralizeResponse {
    const message = createBaseMsgRecollateralizeResponse()
    message.gov =
      object.gov !== undefined && object.gov !== null
        ? Coin.fromPartial(object.gov)
        : undefined
    return message
  },
}

messageTypeRegistry.set(MsgRecollateralizeResponse.$type, MsgRecollateralizeResponse)

function createBaseMsgBuyback(): MsgBuyback {
  return { $type: "nibiru.stablecoin.v1.MsgBuyback", creator: "", gov: undefined }
}

export const MsgBuyback = {
  $type: "nibiru.stablecoin.v1.MsgBuyback" as const,

  encode(message: MsgBuyback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator)
    }
    if (message.gov !== undefined) {
      Coin.encode(message.gov, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyback {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgBuyback()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.creator = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.gov = Coin.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgBuyback {
    return {
      $type: MsgBuyback.$type,
      creator: isSet(object.creator) ? String(object.creator) : "",
      gov: isSet(object.gov) ? Coin.fromJSON(object.gov) : undefined,
    }
  },

  toJSON(message: MsgBuyback): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.gov !== undefined &&
      (obj.gov = message.gov ? Coin.toJSON(message.gov) : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgBuyback>, I>>(base?: I): MsgBuyback {
    return MsgBuyback.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyback>, I>>(object: I): MsgBuyback {
    const message = createBaseMsgBuyback()
    message.creator = object.creator ?? ""
    message.gov =
      object.gov !== undefined && object.gov !== null
        ? Coin.fromPartial(object.gov)
        : undefined
    return message
  },
}

messageTypeRegistry.set(MsgBuyback.$type, MsgBuyback)

function createBaseMsgBuybackResponse(): MsgBuybackResponse {
  return { $type: "nibiru.stablecoin.v1.MsgBuybackResponse", coll: undefined }
}

export const MsgBuybackResponse = {
  $type: "nibiru.stablecoin.v1.MsgBuybackResponse" as const,

  encode(
    message: MsgBuybackResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.coll !== undefined) {
      Coin.encode(message.coll, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuybackResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgBuybackResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.coll = Coin.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgBuybackResponse {
    return {
      $type: MsgBuybackResponse.$type,
      coll: isSet(object.coll) ? Coin.fromJSON(object.coll) : undefined,
    }
  },

  toJSON(message: MsgBuybackResponse): unknown {
    const obj: any = {}
    message.coll !== undefined &&
      (obj.coll = message.coll ? Coin.toJSON(message.coll) : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgBuybackResponse>, I>>(
    base?: I,
  ): MsgBuybackResponse {
    return MsgBuybackResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuybackResponse>, I>>(
    object: I,
  ): MsgBuybackResponse {
    const message = createBaseMsgBuybackResponse()
    message.coll =
      object.coll !== undefined && object.coll !== null
        ? Coin.fromPartial(object.coll)
        : undefined
    return message
  },
}

messageTypeRegistry.set(MsgBuybackResponse.$type, MsgBuybackResponse)

/** Msg defines the x/stablecoin Msg service. */
export interface Msg {
  /**
   * MintStable defines a method for trading a mixture of GOV and COLL to mint
   * an equivalent value of stablecoins.
   */
  MintStable(request: MsgMintStable): Promise<MsgMintStableResponse>
  /**
   * BurnStable defines a method for redeeming/burning stablecoins to receive an
   * equivalent value as a mixture of governance and collateral tokens.
   */
  BurnStable(request: MsgBurnStable): Promise<MsgBurnStableResponse>
  /**
   * Recollateralize defines a method for manually adding collateral to the
   * protocol in exchange for an equivalent stablecoin value in governance tokens
   * plus a small bonus.
   */
  Recollateralize(request: MsgRecollateralize): Promise<MsgRecollateralizeResponse>
  /**
   * Buyback defines a method for manually adding NIBI to the protocol
   * in exchange for an equivalent stablecoin value in collateral, effectively
   * executing a share buyback for Nibiru Chain. The NIBI purchased by the protocol
   * is then burned, distributing value to all NIBI hodlers.
   */
  Buyback(request: MsgBuyback): Promise<MsgBuybackResponse>
}

export const MsgServiceName = "nibiru.stablecoin.v1.Msg"
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  private readonly service: string
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName
    this.rpc = rpc
    this.MintStable = this.MintStable.bind(this)
    this.BurnStable = this.BurnStable.bind(this)
    this.Recollateralize = this.Recollateralize.bind(this)
    this.Buyback = this.Buyback.bind(this)
  }
  MintStable(request: MsgMintStable): Promise<MsgMintStableResponse> {
    const data = MsgMintStable.encode(request).finish()
    const promise = this.rpc.request(this.service, "MintStable", data)
    return promise.then((data) => MsgMintStableResponse.decode(_m0.Reader.create(data)))
  }

  BurnStable(request: MsgBurnStable): Promise<MsgBurnStableResponse> {
    const data = MsgBurnStable.encode(request).finish()
    const promise = this.rpc.request(this.service, "BurnStable", data)
    return promise.then((data) => MsgBurnStableResponse.decode(_m0.Reader.create(data)))
  }

  Recollateralize(request: MsgRecollateralize): Promise<MsgRecollateralizeResponse> {
    const data = MsgRecollateralize.encode(request).finish()
    const promise = this.rpc.request(this.service, "Recollateralize", data)
    return promise.then((data) =>
      MsgRecollateralizeResponse.decode(_m0.Reader.create(data)),
    )
  }

  Buyback(request: MsgBuyback): Promise<MsgBuybackResponse> {
    const data = MsgBuyback.encode(request).finish()
    const promise = this.rpc.request(this.service, "Buyback", data)
    return promise.then((data) => MsgBuybackResponse.decode(_m0.Reader.create(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
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
