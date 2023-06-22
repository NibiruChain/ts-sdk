/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"
import { AMM, Market, Position, ReserveSnapshot } from "./state"

export const protobufPackage = "nibiru.perp.v2"

/** GenesisState defines the perp module's genesis state. */
export interface GenesisState {
  markets: Market[]
  amms: AMM[]
  positions: Position[]
  reserveSnapshots: ReserveSnapshot[]
}

function createBaseGenesisState(): GenesisState {
  return { markets: [], amms: [], positions: [], reserveSnapshots: [] }
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.markets) {
      Market.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.amms) {
      AMM.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    for (const v of message.positions) {
      Position.encode(v!, writer.uint32(34).fork()).ldelim()
    }
    for (const v of message.reserveSnapshots) {
      ReserveSnapshot.encode(v!, writer.uint32(42).fork()).ldelim()
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
        case 2:
          if (tag !== 18) {
            break
          }

          message.markets.push(Market.decode(reader, reader.uint32()))
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.amms.push(AMM.decode(reader, reader.uint32()))
          continue
        case 4:
          if (tag !== 34) {
            break
          }

          message.positions.push(Position.decode(reader, reader.uint32()))
          continue
        case 5:
          if (tag !== 42) {
            break
          }

          message.reserveSnapshots.push(ReserveSnapshot.decode(reader, reader.uint32()))
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
      markets: Array.isArray(object?.markets)
        ? object.markets.map((e: any) => Market.fromJSON(e))
        : [],
      amms: Array.isArray(object?.amms)
        ? object.amms.map((e: any) => AMM.fromJSON(e))
        : [],
      positions: Array.isArray(object?.positions)
        ? object.positions.map((e: any) => Position.fromJSON(e))
        : [],
      reserveSnapshots: Array.isArray(object?.reserveSnapshots)
        ? object.reserveSnapshots.map((e: any) => ReserveSnapshot.fromJSON(e))
        : [],
    }
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.markets) {
      obj.markets = message.markets.map((e) => (e ? Market.toJSON(e) : undefined))
    } else {
      obj.markets = []
    }
    if (message.amms) {
      obj.amms = message.amms.map((e) => (e ? AMM.toJSON(e) : undefined))
    } else {
      obj.amms = []
    }
    if (message.positions) {
      obj.positions = message.positions.map((e) => (e ? Position.toJSON(e) : undefined))
    } else {
      obj.positions = []
    }
    if (message.reserveSnapshots) {
      obj.reserveSnapshots = message.reserveSnapshots.map((e) =>
        e ? ReserveSnapshot.toJSON(e) : undefined,
      )
    } else {
      obj.reserveSnapshots = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState()
    message.markets = object.markets?.map((e) => Market.fromPartial(e)) || []
    message.amms = object.amms?.map((e) => AMM.fromPartial(e)) || []
    message.positions = object.positions?.map((e) => Position.fromPartial(e)) || []
    message.reserveSnapshots =
      object.reserveSnapshots?.map((e) => ReserveSnapshot.fromPartial(e)) || []
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
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never
    }

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}
