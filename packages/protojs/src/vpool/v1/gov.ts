/* eslint-disable */
import { VpoolConfig } from "./state"
import Long from "long"
import * as _m0 from "protobufjs/minimal"

export const protobufPackage = "nibiru.vpool.v1"

export interface CreatePoolProposal {
  title: string
  description: string
  /** pair represents the pair of the vpool. */
  pair: string
  /** quote_asset_reserve is the amount of quote asset the pool will be initialized with. */
  quoteAssetReserve: string
  /** base_asset_reserve is the amount of base asset the pool will be initialized with. */
  baseAssetReserve: string
  config?: VpoolConfig
}

export interface EditPoolConfigProposal {
  title: string
  description: string
  pair: string
  config?: VpoolConfig
}

/**
 * EditSwapInvariantsProposal is a governance proposal to change the swap
 * invariant of the virtual pool for one or more trading pairs.
 */
export interface EditSwapInvariantsProposal {
  title: string
  description: string
  /**
   * Map from pair ID to a multiple on the swap invariant. For example, a proposal containing
   * "swap_invariant_maps": [{ "uatom:unusd": "5" }, { "uosmo:unusd": "0.9" }]
   * would mutliply the swap invariant of the ATOM and OSMO trading pairs by
   * 5 and 0.9 respectively. The price at which k changes is the instantaneous
   * mark price at the time of the proposal's execution.
   */
  swapInvariantMaps: EditSwapInvariantsProposal_SwapInvariantMultiple[]
}

/** A map between a trading pair and a desired multiplier for its swap invariant. */
export interface EditSwapInvariantsProposal_SwapInvariantMultiple {
  /** Pair is a string identifier for an asset pair. */
  pair: string
  /**
   * Multiplier is a number representing the desired percentage change to the
   * swap invariant of the AMM pool underlying 'pair'
   */
  multiplier: string
}

function createBaseCreatePoolProposal(): CreatePoolProposal {
  return {
    title: "",
    description: "",
    pair: "",
    quoteAssetReserve: "",
    baseAssetReserve: "",
    config: undefined,
  }
}

export const CreatePoolProposal = {
  encode(
    message: CreatePoolProposal,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title)
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description)
    }
    if (message.pair !== "") {
      writer.uint32(26).string(message.pair)
    }
    if (message.quoteAssetReserve !== "") {
      writer.uint32(42).string(message.quoteAssetReserve)
    }
    if (message.baseAssetReserve !== "") {
      writer.uint32(50).string(message.baseAssetReserve)
    }
    if (message.config !== undefined) {
      VpoolConfig.encode(message.config, writer.uint32(58).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePoolProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseCreatePoolProposal()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string()
          break
        case 2:
          message.description = reader.string()
          break
        case 3:
          message.pair = reader.string()
          break
        case 5:
          message.quoteAssetReserve = reader.string()
          break
        case 6:
          message.baseAssetReserve = reader.string()
          break
        case 7:
          message.config = VpoolConfig.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CreatePoolProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      pair: isSet(object.pair) ? String(object.pair) : "",
      quoteAssetReserve: isSet(object.quoteAssetReserve)
        ? String(object.quoteAssetReserve)
        : "",
      baseAssetReserve: isSet(object.baseAssetReserve)
        ? String(object.baseAssetReserve)
        : "",
      config: isSet(object.config) ? VpoolConfig.fromJSON(object.config) : undefined,
    }
  },

  toJSON(message: CreatePoolProposal): unknown {
    const obj: any = {}
    message.title !== undefined && (obj.title = message.title)
    message.description !== undefined && (obj.description = message.description)
    message.pair !== undefined && (obj.pair = message.pair)
    message.quoteAssetReserve !== undefined &&
      (obj.quoteAssetReserve = message.quoteAssetReserve)
    message.baseAssetReserve !== undefined &&
      (obj.baseAssetReserve = message.baseAssetReserve)
    message.config !== undefined &&
      (obj.config = message.config ? VpoolConfig.toJSON(message.config) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<CreatePoolProposal>, I>>(
    object: I,
  ): CreatePoolProposal {
    const message = createBaseCreatePoolProposal()
    message.title = object.title ?? ""
    message.description = object.description ?? ""
    message.pair = object.pair ?? ""
    message.quoteAssetReserve = object.quoteAssetReserve ?? ""
    message.baseAssetReserve = object.baseAssetReserve ?? ""
    message.config =
      object.config !== undefined && object.config !== null
        ? VpoolConfig.fromPartial(object.config)
        : undefined
    return message
  },
}

function createBaseEditPoolConfigProposal(): EditPoolConfigProposal {
  return { title: "", description: "", pair: "", config: undefined }
}

export const EditPoolConfigProposal = {
  encode(
    message: EditPoolConfigProposal,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title)
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description)
    }
    if (message.pair !== "") {
      writer.uint32(26).string(message.pair)
    }
    if (message.config !== undefined) {
      VpoolConfig.encode(message.config, writer.uint32(34).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditPoolConfigProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEditPoolConfigProposal()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string()
          break
        case 2:
          message.description = reader.string()
          break
        case 3:
          message.pair = reader.string()
          break
        case 4:
          message.config = VpoolConfig.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EditPoolConfigProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      pair: isSet(object.pair) ? String(object.pair) : "",
      config: isSet(object.config) ? VpoolConfig.fromJSON(object.config) : undefined,
    }
  },

  toJSON(message: EditPoolConfigProposal): unknown {
    const obj: any = {}
    message.title !== undefined && (obj.title = message.title)
    message.description !== undefined && (obj.description = message.description)
    message.pair !== undefined && (obj.pair = message.pair)
    message.config !== undefined &&
      (obj.config = message.config ? VpoolConfig.toJSON(message.config) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EditPoolConfigProposal>, I>>(
    object: I,
  ): EditPoolConfigProposal {
    const message = createBaseEditPoolConfigProposal()
    message.title = object.title ?? ""
    message.description = object.description ?? ""
    message.pair = object.pair ?? ""
    message.config =
      object.config !== undefined && object.config !== null
        ? VpoolConfig.fromPartial(object.config)
        : undefined
    return message
  },
}

function createBaseEditSwapInvariantsProposal(): EditSwapInvariantsProposal {
  return { title: "", description: "", swapInvariantMaps: [] }
}

export const EditSwapInvariantsProposal = {
  encode(
    message: EditSwapInvariantsProposal,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title)
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description)
    }
    for (const v of message.swapInvariantMaps) {
      EditSwapInvariantsProposal_SwapInvariantMultiple.encode(
        v!,
        writer.uint32(42).fork(),
      ).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditSwapInvariantsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEditSwapInvariantsProposal()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string()
          break
        case 2:
          message.description = reader.string()
          break
        case 5:
          message.swapInvariantMaps.push(
            EditSwapInvariantsProposal_SwapInvariantMultiple.decode(
              reader,
              reader.uint32(),
            ),
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EditSwapInvariantsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      swapInvariantMaps: Array.isArray(object?.swapInvariantMaps)
        ? object.swapInvariantMaps.map((e: any) =>
            EditSwapInvariantsProposal_SwapInvariantMultiple.fromJSON(e),
          )
        : [],
    }
  },

  toJSON(message: EditSwapInvariantsProposal): unknown {
    const obj: any = {}
    message.title !== undefined && (obj.title = message.title)
    message.description !== undefined && (obj.description = message.description)
    if (message.swapInvariantMaps) {
      obj.swapInvariantMaps = message.swapInvariantMaps.map((e) =>
        e ? EditSwapInvariantsProposal_SwapInvariantMultiple.toJSON(e) : undefined,
      )
    } else {
      obj.swapInvariantMaps = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EditSwapInvariantsProposal>, I>>(
    object: I,
  ): EditSwapInvariantsProposal {
    const message = createBaseEditSwapInvariantsProposal()
    message.title = object.title ?? ""
    message.description = object.description ?? ""
    message.swapInvariantMaps =
      object.swapInvariantMaps?.map((e) =>
        EditSwapInvariantsProposal_SwapInvariantMultiple.fromPartial(e),
      ) || []
    return message
  },
}

function createBaseEditSwapInvariantsProposal_SwapInvariantMultiple(): EditSwapInvariantsProposal_SwapInvariantMultiple {
  return { pair: "", multiplier: "" }
}

export const EditSwapInvariantsProposal_SwapInvariantMultiple = {
  encode(
    message: EditSwapInvariantsProposal_SwapInvariantMultiple,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(26).string(message.pair)
    }
    if (message.multiplier !== "") {
      writer.uint32(34).string(message.multiplier)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EditSwapInvariantsProposal_SwapInvariantMultiple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEditSwapInvariantsProposal_SwapInvariantMultiple()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 3:
          message.pair = reader.string()
          break
        case 4:
          message.multiplier = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EditSwapInvariantsProposal_SwapInvariantMultiple {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      multiplier: isSet(object.multiplier) ? String(object.multiplier) : "",
    }
  },

  toJSON(message: EditSwapInvariantsProposal_SwapInvariantMultiple): unknown {
    const obj: any = {}
    message.pair !== undefined && (obj.pair = message.pair)
    message.multiplier !== undefined && (obj.multiplier = message.multiplier)
    return obj
  },

  fromPartial<
    I extends Exact<DeepPartial<EditSwapInvariantsProposal_SwapInvariantMultiple>, I>,
  >(object: I): EditSwapInvariantsProposal_SwapInvariantMultiple {
    const message = createBaseEditSwapInvariantsProposal_SwapInvariantMultiple()
    message.pair = object.pair ?? ""
    message.multiplier = object.multiplier ?? ""
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
