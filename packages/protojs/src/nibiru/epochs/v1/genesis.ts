/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"
import { messageTypeRegistry } from "../../../typeRegistry"
import { EpochInfo } from "./state"

export const protobufPackage = "nibiru.epochs.v1"

/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
  $type: "nibiru.epochs.v1.GenesisState"
  epochs: EpochInfo[]
}

function createBaseGenesisState(): GenesisState {
  return { $type: "nibiru.epochs.v1.GenesisState", epochs: [] }
}

export const GenesisState = {
  $type: "nibiru.epochs.v1.GenesisState" as const,

  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseGenesisState()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.epochs.push(EpochInfo.decode(reader, reader.uint32()))
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    return {
      $type: GenesisState.$type,
      epochs: Array.isArray(object?.epochs)
        ? object.epochs.map((e: any) => EpochInfo.fromJSON(e))
        : [],
    }
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.epochs) {
      obj.epochs = message.epochs.map((e) => (e ? EpochInfo.toJSON(e) : undefined))
    } else {
      obj.epochs = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState()
    message.epochs = object.epochs?.map((e) => EpochInfo.fromPartial(e)) || []
    return message
  },
}

messageTypeRegistry.set(GenesisState.$type, GenesisState)

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
