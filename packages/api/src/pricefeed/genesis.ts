/* eslint-disable */
import { Params, PostedPrice } from "./params"
import Long from "long"
import _m0 from "protobufjs/minimal"

export const protobufPackage = "nibiru.pricefeed.v1"

/** GenesisState defines the pricefeed module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params?: Params
  postedPrices: PostedPrice[]
  genesisOracles: string[]
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, postedPrices: [], genesisOracles: [] }
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim()
    }
    for (const v of message.postedPrices) {
      PostedPrice.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.genesisOracles) {
      writer.uint32(26).string(v!)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseGenesisState()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32())
          break
        case 2:
          message.postedPrices.push(PostedPrice.decode(reader, reader.uint32()))
          break
        case 3:
          message.genesisOracles.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      postedPrices: Array.isArray(object?.postedPrices)
        ? object.postedPrices.map((e: any) => PostedPrice.fromJSON(e))
        : [],
      genesisOracles: Array.isArray(object?.genesisOracles)
        ? object.genesisOracles.map((e: any) => String(e))
        : [],
    }
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined)
    if (message.postedPrices) {
      obj.postedPrices = message.postedPrices.map((e) =>
        e ? PostedPrice.toJSON(e) : undefined,
      )
    } else {
      obj.postedPrices = []
    }
    if (message.genesisOracles) {
      obj.genesisOracles = message.genesisOracles.map((e) => e)
    } else {
      obj.genesisOracles = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState()
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined
    message.postedPrices =
      object.postedPrices?.map((e) => PostedPrice.fromPartial(e)) || []
    message.genesisOracles = object.genesisOracles?.map((e) => e) || []
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
