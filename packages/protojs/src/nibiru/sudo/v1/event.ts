/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"
import { messageTypeRegistry } from "../../../typeRegistry"
import { Sudoers } from "./state"

export const protobufPackage = "nibiru.sudo.v1"

export interface EventUpdateSudoers {
  $type: "nibiru.sudo.v1.EventUpdateSudoers"
  sudoers?: Sudoers
  /** Action is the type of update that occured to the "sudoers" */
  action: string
}

function createBaseEventUpdateSudoers(): EventUpdateSudoers {
  return { $type: "nibiru.sudo.v1.EventUpdateSudoers", sudoers: undefined, action: "" }
}

export const EventUpdateSudoers = {
  $type: "nibiru.sudo.v1.EventUpdateSudoers" as const,

  encode(
    message: EventUpdateSudoers,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sudoers !== undefined) {
      Sudoers.encode(message.sudoers, writer.uint32(10).fork()).ldelim()
    }
    if (message.action !== "") {
      writer.uint32(18).string(message.action)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateSudoers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEventUpdateSudoers()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.sudoers = Sudoers.decode(reader, reader.uint32())
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.action = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): EventUpdateSudoers {
    return {
      $type: EventUpdateSudoers.$type,
      sudoers: isSet(object.sudoers) ? Sudoers.fromJSON(object.sudoers) : undefined,
      action: isSet(object.action) ? String(object.action) : "",
    }
  },

  toJSON(message: EventUpdateSudoers): unknown {
    const obj: any = {}
    message.sudoers !== undefined &&
      (obj.sudoers = message.sudoers ? Sudoers.toJSON(message.sudoers) : undefined)
    message.action !== undefined && (obj.action = message.action)
    return obj
  },

  create<I extends Exact<DeepPartial<EventUpdateSudoers>, I>>(
    base?: I,
  ): EventUpdateSudoers {
    return EventUpdateSudoers.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateSudoers>, I>>(
    object: I,
  ): EventUpdateSudoers {
    const message = createBaseEventUpdateSudoers()
    message.sudoers =
      object.sudoers !== undefined && object.sudoers !== null
        ? Sudoers.fromPartial(object.sudoers)
        : undefined
    message.action = object.action ?? ""
    return message
  },
}

messageTypeRegistry.set(EventUpdateSudoers.$type, EventUpdateSudoers)

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
