/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"
import { ModuleParams } from "./genesis"

export const protobufPackage = "nibiru.devgas.v1"

/** MsgRegisterFeeShare defines a message that registers a FeeShare */
export interface MsgRegisterFeeShare {
  /** contract_address in bech32 format */
  contractAddress: string
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same the contract's admin address
   */
  deployerAddress: string
  /**
   * withdrawer_address is the bech32 address of account receiving the
   * transaction fees
   */
  withdrawerAddress: string
}

/** MsgRegisterFeeShareResponse defines the MsgRegisterFeeShare response type */
export interface MsgRegisterFeeShareResponse {}

/**
 * MsgUpdateFeeShare defines a message that updates the withdrawer address for a
 * registered FeeShare
 */
export interface MsgUpdateFeeShare {
  /** contract_address in bech32 format */
  contractAddress: string
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same the contract's admin address
   */
  deployerAddress: string
  /**
   * withdrawer_address is the bech32 address of account receiving the
   * transaction fees
   */
  withdrawerAddress: string
}

/** MsgUpdateFeeShareResponse defines the MsgUpdateFeeShare response type */
export interface MsgUpdateFeeShareResponse {}

/** MsgCancelFeeShare defines a message that cancels a registered FeeShare */
export interface MsgCancelFeeShare {
  /** contract_address in bech32 format */
  contractAddress: string
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same the contract's admin address
   */
  deployerAddress: string
}

/** MsgCancelFeeShareResponse defines the MsgCancelFeeShare response type */
export interface MsgCancelFeeShareResponse {}

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string
  /**
   * params defines the x/feeshare parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params?: ModuleParams
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}

function createBaseMsgRegisterFeeShare(): MsgRegisterFeeShare {
  return { contractAddress: "", deployerAddress: "", withdrawerAddress: "" }
}

export const MsgRegisterFeeShare = {
  encode(
    message: MsgRegisterFeeShare,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress)
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress)
    }
    if (message.withdrawerAddress !== "") {
      writer.uint32(26).string(message.withdrawerAddress)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterFeeShare {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgRegisterFeeShare()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.contractAddress = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.deployerAddress = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.withdrawerAddress = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgRegisterFeeShare {
    return {
      contractAddress: isSet(object.contractAddress)
        ? String(object.contractAddress)
        : "",
      deployerAddress: isSet(object.deployerAddress)
        ? String(object.deployerAddress)
        : "",
      withdrawerAddress: isSet(object.withdrawerAddress)
        ? String(object.withdrawerAddress)
        : "",
    }
  },

  toJSON(message: MsgRegisterFeeShare): unknown {
    const obj: any = {}
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress)
    message.deployerAddress !== undefined &&
      (obj.deployerAddress = message.deployerAddress)
    message.withdrawerAddress !== undefined &&
      (obj.withdrawerAddress = message.withdrawerAddress)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgRegisterFeeShare>, I>>(
    base?: I
  ): MsgRegisterFeeShare {
    return MsgRegisterFeeShare.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterFeeShare>, I>>(
    object: I
  ): MsgRegisterFeeShare {
    const message = createBaseMsgRegisterFeeShare()
    message.contractAddress = object.contractAddress ?? ""
    message.deployerAddress = object.deployerAddress ?? ""
    message.withdrawerAddress = object.withdrawerAddress ?? ""
    return message
  },
}

function createBaseMsgRegisterFeeShareResponse(): MsgRegisterFeeShareResponse {
  return {}
}

export const MsgRegisterFeeShareResponse = {
  encode(
    _: MsgRegisterFeeShareResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterFeeShareResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgRegisterFeeShareResponse()
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

  fromJSON(_: any): MsgRegisterFeeShareResponse {
    return {}
  },

  toJSON(_: MsgRegisterFeeShareResponse): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<MsgRegisterFeeShareResponse>, I>>(
    base?: I
  ): MsgRegisterFeeShareResponse {
    return MsgRegisterFeeShareResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterFeeShareResponse>, I>>(
    _: I
  ): MsgRegisterFeeShareResponse {
    const message = createBaseMsgRegisterFeeShareResponse()
    return message
  },
}

function createBaseMsgUpdateFeeShare(): MsgUpdateFeeShare {
  return { contractAddress: "", deployerAddress: "", withdrawerAddress: "" }
}

export const MsgUpdateFeeShare = {
  encode(
    message: MsgUpdateFeeShare,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress)
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress)
    }
    if (message.withdrawerAddress !== "") {
      writer.uint32(26).string(message.withdrawerAddress)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeeShare {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgUpdateFeeShare()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.contractAddress = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.deployerAddress = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.withdrawerAddress = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgUpdateFeeShare {
    return {
      contractAddress: isSet(object.contractAddress)
        ? String(object.contractAddress)
        : "",
      deployerAddress: isSet(object.deployerAddress)
        ? String(object.deployerAddress)
        : "",
      withdrawerAddress: isSet(object.withdrawerAddress)
        ? String(object.withdrawerAddress)
        : "",
    }
  },

  toJSON(message: MsgUpdateFeeShare): unknown {
    const obj: any = {}
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress)
    message.deployerAddress !== undefined &&
      (obj.deployerAddress = message.deployerAddress)
    message.withdrawerAddress !== undefined &&
      (obj.withdrawerAddress = message.withdrawerAddress)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgUpdateFeeShare>, I>>(
    base?: I
  ): MsgUpdateFeeShare {
    return MsgUpdateFeeShare.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateFeeShare>, I>>(
    object: I
  ): MsgUpdateFeeShare {
    const message = createBaseMsgUpdateFeeShare()
    message.contractAddress = object.contractAddress ?? ""
    message.deployerAddress = object.deployerAddress ?? ""
    message.withdrawerAddress = object.withdrawerAddress ?? ""
    return message
  },
}

function createBaseMsgUpdateFeeShareResponse(): MsgUpdateFeeShareResponse {
  return {}
}

export const MsgUpdateFeeShareResponse = {
  encode(
    _: MsgUpdateFeeShareResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateFeeShareResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgUpdateFeeShareResponse()
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

  fromJSON(_: any): MsgUpdateFeeShareResponse {
    return {}
  },

  toJSON(_: MsgUpdateFeeShareResponse): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<MsgUpdateFeeShareResponse>, I>>(
    base?: I
  ): MsgUpdateFeeShareResponse {
    return MsgUpdateFeeShareResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateFeeShareResponse>, I>>(
    _: I
  ): MsgUpdateFeeShareResponse {
    const message = createBaseMsgUpdateFeeShareResponse()
    return message
  },
}

function createBaseMsgCancelFeeShare(): MsgCancelFeeShare {
  return { contractAddress: "", deployerAddress: "" }
}

export const MsgCancelFeeShare = {
  encode(
    message: MsgCancelFeeShare,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress)
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelFeeShare {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgCancelFeeShare()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.contractAddress = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.deployerAddress = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgCancelFeeShare {
    return {
      contractAddress: isSet(object.contractAddress)
        ? String(object.contractAddress)
        : "",
      deployerAddress: isSet(object.deployerAddress)
        ? String(object.deployerAddress)
        : "",
    }
  },

  toJSON(message: MsgCancelFeeShare): unknown {
    const obj: any = {}
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress)
    message.deployerAddress !== undefined &&
      (obj.deployerAddress = message.deployerAddress)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgCancelFeeShare>, I>>(
    base?: I
  ): MsgCancelFeeShare {
    return MsgCancelFeeShare.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelFeeShare>, I>>(
    object: I
  ): MsgCancelFeeShare {
    const message = createBaseMsgCancelFeeShare()
    message.contractAddress = object.contractAddress ?? ""
    message.deployerAddress = object.deployerAddress ?? ""
    return message
  },
}

function createBaseMsgCancelFeeShareResponse(): MsgCancelFeeShareResponse {
  return {}
}

export const MsgCancelFeeShareResponse = {
  encode(
    _: MsgCancelFeeShareResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelFeeShareResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgCancelFeeShareResponse()
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

  fromJSON(_: any): MsgCancelFeeShareResponse {
    return {}
  },

  toJSON(_: MsgCancelFeeShareResponse): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<MsgCancelFeeShareResponse>, I>>(
    base?: I
  ): MsgCancelFeeShareResponse {
    return MsgCancelFeeShareResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelFeeShareResponse>, I>>(
    _: I
  ): MsgCancelFeeShareResponse {
    const message = createBaseMsgCancelFeeShareResponse()
    return message
  },
}

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined }
}

export const MsgUpdateParams = {
  encode(
    message: MsgUpdateParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority)
    }
    if (message.params !== undefined) {
      ModuleParams.encode(message.params, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgUpdateParams()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.authority = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.params = ModuleParams.decode(reader, reader.uint32())
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params)
        ? ModuleParams.fromJSON(object.params)
        : undefined,
    }
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {}
    message.authority !== undefined && (obj.authority = message.authority)
    message.params !== undefined &&
      (obj.params = message.params
        ? ModuleParams.toJSON(message.params)
        : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(
    base?: I
  ): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(
    object: I
  ): MsgUpdateParams {
    const message = createBaseMsgUpdateParams()
    message.authority = object.authority ?? ""
    message.params =
      object.params !== undefined && object.params !== null
        ? ModuleParams.fromPartial(object.params)
        : undefined
    return message
  },
}

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {}
}

export const MsgUpdateParamsResponse = {
  encode(
    _: MsgUpdateParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateParamsResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgUpdateParamsResponse()
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {}
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(
    base?: I
  ): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(
    _: I
  ): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse()
    return message
  },
}

/** Msg defines the fees Msg service. */
export interface Msg {
  /** RegisterFeeShare registers a new contract for receiving transaction fees */
  RegisterFeeShare(
    request: MsgRegisterFeeShare
  ): Promise<MsgRegisterFeeShareResponse>
  /** UpdateFeeShare updates the withdrawer address of a FeeShare */
  UpdateFeeShare(request: MsgUpdateFeeShare): Promise<MsgUpdateFeeShareResponse>
  /**
   * CancelFeeShare cancels a contract's fee registration and further receival
   * of transaction fees
   */
  CancelFeeShare(request: MsgCancelFeeShare): Promise<MsgCancelFeeShareResponse>
  /** Update the params of the module through gov v1 type. */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>
}

export const MsgServiceName = "nibiru.devgas.v1.Msg"
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  private readonly service: string
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName
    this.rpc = rpc
    this.RegisterFeeShare = this.RegisterFeeShare.bind(this)
    this.UpdateFeeShare = this.UpdateFeeShare.bind(this)
    this.CancelFeeShare = this.CancelFeeShare.bind(this)
    this.UpdateParams = this.UpdateParams.bind(this)
  }
  RegisterFeeShare(
    request: MsgRegisterFeeShare
  ): Promise<MsgRegisterFeeShareResponse> {
    const data = MsgRegisterFeeShare.encode(request).finish()
    const promise = this.rpc.request(this.service, "RegisterFeeShare", data)
    return promise.then((data) =>
      MsgRegisterFeeShareResponse.decode(_m0.Reader.create(data))
    )
  }

  UpdateFeeShare(
    request: MsgUpdateFeeShare
  ): Promise<MsgUpdateFeeShareResponse> {
    const data = MsgUpdateFeeShare.encode(request).finish()
    const promise = this.rpc.request(this.service, "UpdateFeeShare", data)
    return promise.then((data) =>
      MsgUpdateFeeShareResponse.decode(_m0.Reader.create(data))
    )
  }

  CancelFeeShare(
    request: MsgCancelFeeShare
  ): Promise<MsgCancelFeeShareResponse> {
    const data = MsgCancelFeeShare.encode(request).finish()
    const promise = this.rpc.request(this.service, "CancelFeeShare", data)
    return promise.then((data) =>
      MsgCancelFeeShareResponse.decode(_m0.Reader.create(data))
    )
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish()
    const promise = this.rpc.request(this.service, "UpdateParams", data)
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(_m0.Reader.create(data))
    )
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
