/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"
import { messageTypeRegistry } from "../../../typeRegistry"

export const protobufPackage = "nibiru.sudo.v1"

/** MsgEditSudoers: Msg to update the "Sudoers" state. */
export interface MsgEditSudoers {
  $type: "nibiru.sudo.v1.MsgEditSudoers"
  /**
   * Action: identifier for the type of edit that will take place. Using this
   *   action field prevents us from needing to create several similar message
   *   types.
   */
  action: string
  /** Contracts: An input payload. */
  contracts: string[]
  /** Sender: Address for the signer of the transaction. */
  sender: string
}

/** MsgEditSudoersResponse indicates the successful execution of MsgEditSudeors. */
export interface MsgEditSudoersResponse {
  $type: "nibiru.sudo.v1.MsgEditSudoersResponse"
}

function createBaseMsgEditSudoers(): MsgEditSudoers {
  return {
    $type: "nibiru.sudo.v1.MsgEditSudoers",
    action: "",
    contracts: [],
    sender: "",
  }
}

export const MsgEditSudoers = {
  $type: "nibiru.sudo.v1.MsgEditSudoers" as const,

  encode(
    message: MsgEditSudoers,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.action !== "") {
      writer.uint32(10).string(message.action)
    }
    for (const v of message.contracts) {
      writer.uint32(18).string(v!)
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditSudoers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgEditSudoers()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.action = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.contracts.push(reader.string())
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.sender = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgEditSudoers {
    return {
      $type: MsgEditSudoers.$type,
      action: isSet(object.action) ? String(object.action) : "",
      contracts: Array.isArray(object?.contracts)
        ? object.contracts.map((e: any) => String(e))
        : [],
      sender: isSet(object.sender) ? String(object.sender) : "",
    }
  },

  toJSON(message: MsgEditSudoers): unknown {
    const obj: any = {}
    message.action !== undefined && (obj.action = message.action)
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => e)
    } else {
      obj.contracts = []
    }
    message.sender !== undefined && (obj.sender = message.sender)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgEditSudoers>, I>>(base?: I): MsgEditSudoers {
    return MsgEditSudoers.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditSudoers>, I>>(
    object: I,
  ): MsgEditSudoers {
    const message = createBaseMsgEditSudoers()
    message.action = object.action ?? ""
    message.contracts = object.contracts?.map((e) => e) || []
    message.sender = object.sender ?? ""
    return message
  },
}

messageTypeRegistry.set(MsgEditSudoers.$type, MsgEditSudoers)

function createBaseMsgEditSudoersResponse(): MsgEditSudoersResponse {
  return { $type: "nibiru.sudo.v1.MsgEditSudoersResponse" }
}

export const MsgEditSudoersResponse = {
  $type: "nibiru.sudo.v1.MsgEditSudoersResponse" as const,

  encode(
    _: MsgEditSudoersResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditSudoersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgEditSudoersResponse()
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

  fromJSON(_: any): MsgEditSudoersResponse {
    return { $type: MsgEditSudoersResponse.$type }
  },

  toJSON(_: MsgEditSudoersResponse): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<MsgEditSudoersResponse>, I>>(
    base?: I,
  ): MsgEditSudoersResponse {
    return MsgEditSudoersResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditSudoersResponse>, I>>(
    _: I,
  ): MsgEditSudoersResponse {
    const message = createBaseMsgEditSudoersResponse()
    return message
  },
}

messageTypeRegistry.set(MsgEditSudoersResponse.$type, MsgEditSudoersResponse)

/**
 * Msg defines the x/sudo module's Msg service. Protobuf `Msg` services are
 * called from `BaseApp` instances during `DeliverTx`. The `Msg` service will be
 * responsible for processing `sdk.Msg` requests.
 */
export interface Msg {
  /** EditSudoers updates the "Sudoers" state */
  EditSudoers(request: MsgEditSudoers): Promise<MsgEditSudoersResponse>
}

export const MsgServiceName = "nibiru.sudo.v1.Msg"
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  private readonly service: string
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName
    this.rpc = rpc
    this.EditSudoers = this.EditSudoers.bind(this)
  }
  EditSudoers(request: MsgEditSudoers): Promise<MsgEditSudoersResponse> {
    const data = MsgEditSudoers.encode(request).finish()
    const promise = this.rpc.request(this.service, "EditSudoers", data)
    return promise.then((data) =>
      MsgEditSudoersResponse.decode(_m0.Reader.create(data)),
    )
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
