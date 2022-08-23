/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin"
import Long from "long"
import _m0 from "protobufjs/minimal"

export const protobufPackage = "nibiru.dex.v1"

/** Configuration parameters for the pool. */
export interface PoolParams {
  swapFee: string
  exitFee: string
}

/** Which assets the pool contains. */
export interface PoolAsset {
  /**
   * Coins we are talking about,
   * the denomination must be unique amongst all PoolAssets for this pool.
   */
  token?: Coin
  /** Weight that is not normalized. This weight must be less than 2^50 */
  weight: string
}

export interface Pool {
  /** The pool id. */
  id: Long
  /** The pool account address. */
  address: string
  /** Fees and other pool-specific parameters. */
  poolParams?: PoolParams
  /**
   * These are assumed to be sorted by denomiation.
   * They contain the pool asset and the information about the weight
   */
  poolAssets: PoolAsset[]
  /** sum of all non-normalized pool weights */
  totalWeight: string
  /** sum of all LP tokens sent out */
  totalShares?: Coin
}

function createBasePoolParams(): PoolParams {
  return { swapFee: "", exitFee: "" }
}

export const PoolParams = {
  encode(message: PoolParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapFee !== "") {
      writer.uint32(10).string(message.swapFee)
    }
    if (message.exitFee !== "") {
      writer.uint32(18).string(message.exitFee)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePoolParams()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.swapFee = reader.string()
          break
        case 2:
          message.exitFee = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PoolParams {
    return {
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : "",
      exitFee: isSet(object.exitFee) ? String(object.exitFee) : "",
    }
  },

  toJSON(message: PoolParams): unknown {
    const obj: any = {}
    message.swapFee !== undefined && (obj.swapFee = message.swapFee)
    message.exitFee !== undefined && (obj.exitFee = message.exitFee)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PoolParams>, I>>(object: I): PoolParams {
    const message = createBasePoolParams()
    message.swapFee = object.swapFee ?? ""
    message.exitFee = object.exitFee ?? ""
    return message
  },
}

function createBasePoolAsset(): PoolAsset {
  return { token: undefined, weight: "" }
}

export const PoolAsset = {
  encode(message: PoolAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(10).fork()).ldelim()
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePoolAsset()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.token = Coin.decode(reader, reader.uint32())
          break
        case 2:
          message.weight = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PoolAsset {
    return {
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
      weight: isSet(object.weight) ? String(object.weight) : "",
    }
  },

  toJSON(message: PoolAsset): unknown {
    const obj: any = {}
    message.token !== undefined &&
      (obj.token = message.token ? Coin.toJSON(message.token) : undefined)
    message.weight !== undefined && (obj.weight = message.weight)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PoolAsset>, I>>(object: I): PoolAsset {
    const message = createBasePoolAsset()
    message.token =
      object.token !== undefined && object.token !== null
        ? Coin.fromPartial(object.token)
        : undefined
    message.weight = object.weight ?? ""
    return message
  },
}

function createBasePool(): Pool {
  return {
    id: Long.UZERO,
    address: "",
    poolParams: undefined,
    poolAssets: [],
    totalWeight: "",
    totalShares: undefined,
  }
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id)
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address)
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(26).fork()).ldelim()
    }
    for (const v of message.poolAssets) {
      PoolAsset.encode(v!, writer.uint32(34).fork()).ldelim()
    }
    if (message.totalWeight !== "") {
      writer.uint32(42).string(message.totalWeight)
    }
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(50).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePool()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long
          break
        case 2:
          message.address = reader.string()
          break
        case 3:
          message.poolParams = PoolParams.decode(reader, reader.uint32())
          break
        case 4:
          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()))
          break
        case 5:
          message.totalWeight = reader.string()
          break
        case 6:
          message.totalShares = Coin.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Pool {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      poolParams: isSet(object.poolParams)
        ? PoolParams.fromJSON(object.poolParams)
        : undefined,
      poolAssets: Array.isArray(object?.poolAssets)
        ? object.poolAssets.map((e: any) => PoolAsset.fromJSON(e))
        : [],
      totalWeight: isSet(object.totalWeight) ? String(object.totalWeight) : "",
      totalShares: isSet(object.totalShares)
        ? Coin.fromJSON(object.totalShares)
        : undefined,
    }
  },

  toJSON(message: Pool): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    message.address !== undefined && (obj.address = message.address)
    message.poolParams !== undefined &&
      (obj.poolParams = message.poolParams
        ? PoolParams.toJSON(message.poolParams)
        : undefined)
    if (message.poolAssets) {
      obj.poolAssets = message.poolAssets.map((e) =>
        e ? PoolAsset.toJSON(e) : undefined,
      )
    } else {
      obj.poolAssets = []
    }
    message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight)
    message.totalShares !== undefined &&
      (obj.totalShares = message.totalShares
        ? Coin.toJSON(message.totalShares)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool()
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO
    message.address = object.address ?? ""
    message.poolParams =
      object.poolParams !== undefined && object.poolParams !== null
        ? PoolParams.fromPartial(object.poolParams)
        : undefined
    message.poolAssets = object.poolAssets?.map((e) => PoolAsset.fromPartial(e)) || []
    message.totalWeight = object.totalWeight ?? ""
    message.totalShares =
      object.totalShares !== undefined && object.totalShares !== null
        ? Coin.fromPartial(object.totalShares)
        : undefined
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
