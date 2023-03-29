/* eslint-disable */
import { Params, PairMetadata, Position, PrepaidBadDebt } from "./state"
import Long from "long"
import * as _m0 from "protobufjs/minimal"

export const protobufPackage = "nibiru.perp.v1"

/** GenesisState defines the perp module's genesis state. */
export interface GenesisState {
  params?: Params
  pairMetadata: PairMetadata[]
  positions: Position[]
  prepaidBadDebts: PrepaidBadDebt[]
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, pairMetadata: [], positions: [], prepaidBadDebts: [] }
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim()
    }
    for (const v of message.pairMetadata) {
      PairMetadata.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.positions) {
      Position.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    for (const v of message.prepaidBadDebts) {
      PrepaidBadDebt.encode(v!, writer.uint32(34).fork()).ldelim()
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
          message.pairMetadata.push(PairMetadata.decode(reader, reader.uint32()))
          break
        case 3:
          message.positions.push(Position.decode(reader, reader.uint32()))
          break
        case 4:
          message.prepaidBadDebts.push(PrepaidBadDebt.decode(reader, reader.uint32()))
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
      pairMetadata: Array.isArray(object?.pairMetadata)
        ? object.pairMetadata.map((e: any) => PairMetadata.fromJSON(e))
        : [],
      positions: Array.isArray(object?.positions)
        ? object.positions.map((e: any) => Position.fromJSON(e))
        : [],
      prepaidBadDebts: Array.isArray(object?.prepaidBadDebts)
        ? object.prepaidBadDebts.map((e: any) => PrepaidBadDebt.fromJSON(e))
        : [],
    }
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined)
    if (message.pairMetadata) {
      obj.pairMetadata = message.pairMetadata.map((e) =>
        e ? PairMetadata.toJSON(e) : undefined,
      )
    } else {
      obj.pairMetadata = []
    }
    if (message.positions) {
      obj.positions = message.positions.map((e) => (e ? Position.toJSON(e) : undefined))
    } else {
      obj.positions = []
    }
    if (message.prepaidBadDebts) {
      obj.prepaidBadDebts = message.prepaidBadDebts.map((e) =>
        e ? PrepaidBadDebt.toJSON(e) : undefined,
      )
    } else {
      obj.prepaidBadDebts = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState()
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined
    message.pairMetadata =
      object.pairMetadata?.map((e) => PairMetadata.fromPartial(e)) || []
    message.positions = object.positions?.map((e) => Position.fromPartial(e)) || []
    message.prepaidBadDebts =
      object.prepaidBadDebts?.map((e) => PrepaidBadDebt.fromPartial(e)) || []
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
