/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"
import { Coin } from "../../../cosmos/base/v1beta1/coin"
import { messageTypeRegistry } from "../../../typeRegistry"

export const protobufPackage = "nibiru.spot.v1"

/**
 * - `balancer`: Balancer are pools defined by the equation xy=k, extended by
 * the weighs introduced by Balancer.
 * - `stableswap`: Stableswap pools are defined by a combination of
 * constant-product and constant-sum pool
 */
export enum PoolType {
  BALANCER = 0,
  STABLESWAP = 1,
  UNRECOGNIZED = -1,
}

export function poolTypeFromJSON(object: any): PoolType {
  switch (object) {
    case 0:
    case "BALANCER":
      return PoolType.BALANCER
    case 1:
    case "STABLESWAP":
      return PoolType.STABLESWAP
    case -1:
    case "UNRECOGNIZED":
    default:
      return PoolType.UNRECOGNIZED
  }
}

export function poolTypeToJSON(object: PoolType): string {
  switch (object) {
    case PoolType.BALANCER:
      return "BALANCER"
    case PoolType.STABLESWAP:
      return "STABLESWAP"
    case PoolType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED"
  }
}

/** Configuration parameters for the pool. */
export interface PoolParams {
  $type: "nibiru.spot.v1.PoolParams"
  swapFee: string
  exitFee: string
  /**
   * Amplification Parameter (A): Larger value of A make the curve better
   * resemble a straight line in the center (when pool is near balance).  Highly
   * volatile assets should use a lower value, while assets that are closer
   * together may be best with a higher value. This is only used if the
   * pool_type is set to 1 (stableswap)
   */
  A: string
  poolType: PoolType
}

/** Which assets the pool contains. */
export interface PoolAsset {
  $type: "nibiru.spot.v1.PoolAsset"
  /**
   * Coins we are talking about,
   * the denomination must be unique amongst all PoolAssets for this pool.
   */
  token?: Coin
  /** Weight that is not normalized. This weight must be less than 2^50 */
  weight: string
}

export interface Pool {
  $type: "nibiru.spot.v1.Pool"
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
  return {
    $type: "nibiru.spot.v1.PoolParams",
    swapFee: "",
    exitFee: "",
    A: "",
    poolType: 0,
  }
}

export const PoolParams = {
  $type: "nibiru.spot.v1.PoolParams" as const,

  encode(message: PoolParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapFee !== "") {
      writer.uint32(10).string(message.swapFee)
    }
    if (message.exitFee !== "") {
      writer.uint32(18).string(message.exitFee)
    }
    if (message.A !== "") {
      writer.uint32(26).string(message.A)
    }
    if (message.poolType !== 0) {
      writer.uint32(32).int32(message.poolType)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePoolParams()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.swapFee = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.exitFee = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.A = reader.string()
          continue
        case 4:
          if (tag !== 32) {
            break
          }

          message.poolType = reader.int32() as any
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): PoolParams {
    return {
      $type: PoolParams.$type,
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : "",
      exitFee: isSet(object.exitFee) ? String(object.exitFee) : "",
      A: isSet(object.A) ? String(object.A) : "",
      poolType: isSet(object.poolType) ? poolTypeFromJSON(object.poolType) : 0,
    }
  },

  toJSON(message: PoolParams): unknown {
    const obj: any = {}
    message.swapFee !== undefined && (obj.swapFee = message.swapFee)
    message.exitFee !== undefined && (obj.exitFee = message.exitFee)
    message.A !== undefined && (obj.A = message.A)
    message.poolType !== undefined && (obj.poolType = poolTypeToJSON(message.poolType))
    return obj
  },

  create<I extends Exact<DeepPartial<PoolParams>, I>>(base?: I): PoolParams {
    return PoolParams.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<PoolParams>, I>>(object: I): PoolParams {
    const message = createBasePoolParams()
    message.swapFee = object.swapFee ?? ""
    message.exitFee = object.exitFee ?? ""
    message.A = object.A ?? ""
    message.poolType = object.poolType ?? 0
    return message
  },
}

messageTypeRegistry.set(PoolParams.$type, PoolParams)

function createBasePoolAsset(): PoolAsset {
  return { $type: "nibiru.spot.v1.PoolAsset", token: undefined, weight: "" }
}

export const PoolAsset = {
  $type: "nibiru.spot.v1.PoolAsset" as const,

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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePoolAsset()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.token = Coin.decode(reader, reader.uint32())
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.weight = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): PoolAsset {
    return {
      $type: PoolAsset.$type,
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

  create<I extends Exact<DeepPartial<PoolAsset>, I>>(base?: I): PoolAsset {
    return PoolAsset.fromPartial(base ?? {})
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

messageTypeRegistry.set(PoolAsset.$type, PoolAsset)

function createBasePool(): Pool {
  return {
    $type: "nibiru.spot.v1.Pool",
    id: Long.UZERO,
    address: "",
    poolParams: undefined,
    poolAssets: [],
    totalWeight: "",
    totalShares: undefined,
  }
}

export const Pool = {
  $type: "nibiru.spot.v1.Pool" as const,

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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePool()
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
          if (tag !== 18) {
            break
          }

          message.address = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.poolParams = PoolParams.decode(reader, reader.uint32())
          continue
        case 4:
          if (tag !== 34) {
            break
          }

          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()))
          continue
        case 5:
          if (tag !== 42) {
            break
          }

          message.totalWeight = reader.string()
          continue
        case 6:
          if (tag !== 50) {
            break
          }

          message.totalShares = Coin.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): Pool {
    return {
      $type: Pool.$type,
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

  create<I extends Exact<DeepPartial<Pool>, I>>(base?: I): Pool {
    return Pool.fromPartial(base ?? {})
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

messageTypeRegistry.set(Pool.$type, Pool)

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
