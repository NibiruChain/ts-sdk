import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing"
import {
  MsgCancelFeeShare,
  MsgRegisterFeeShare,
  MsgUpdateFeeShare,
  MsgUpdateParams,
} from "../../protojs/nibiru/devgas/v1/tx"
import { TxMessage } from ".."

const protobufPackage = "nibiru.devgas.v1"

export const DEVGAS_MSG_TYPE_URLS = {
  MsgCancelFeeShare: `/${protobufPackage}.MsgCancelFeeShare`,
  MsgRegisterFeeShare: `/${protobufPackage}.MsgRegisterFeeShare`,
  MsgUpdateFeeShare: `/${protobufPackage}.MsgUpdateFeeShare`,
  MsgUpdateParams: `/${protobufPackage}.MsgUpdateParams`,
}

export const devgasTypes: ReadonlyArray<[string, GeneratedType]> = [
  [DEVGAS_MSG_TYPE_URLS.MsgCancelFeeShare, MsgCancelFeeShare],
  [DEVGAS_MSG_TYPE_URLS.MsgRegisterFeeShare, MsgRegisterFeeShare],
  [DEVGAS_MSG_TYPE_URLS.MsgUpdateFeeShare, MsgUpdateFeeShare],
  [DEVGAS_MSG_TYPE_URLS.MsgUpdateParams, MsgUpdateParams],
]

export interface MsgCancelFeeShareEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgCancelFeeShare>
}

export const isMsgCancelFeeShareEncodeObject = (encodeObject: EncodeObject) =>
  encodeObject.typeUrl === DEVGAS_MSG_TYPE_URLS.MsgCancelFeeShare

export interface MsgRegisterFeeShareEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgRegisterFeeShare>
}

export const isMsgRegisterFeeShareEncodeObject = (encodeObject: EncodeObject) =>
  encodeObject.typeUrl === DEVGAS_MSG_TYPE_URLS.MsgRegisterFeeShare

export interface MsgUpdateFeeShareEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgUpdateFeeShare>
}

export const isMsgUpdateFeeShareEncodeObject = (encodeObject: EncodeObject) =>
  encodeObject.typeUrl === DEVGAS_MSG_TYPE_URLS.MsgUpdateFeeShare

export interface MsgUpdateParamsEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgUpdateParams>
}

export const isMsgUpdateParamsEncodeObject = (encodeObject: EncodeObject) =>
  encodeObject.typeUrl === DEVGAS_MSG_TYPE_URLS.MsgUpdateParams

// ----------------------------------------------------------------------------

export class DevgasMsgFactory {
  static cancelFeeShare(msg: MsgCancelFeeShare): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgCancelFeeShare`,
      value: MsgCancelFeeShare.fromPartial(msg),
    }
  }

  static registerFeeShare(msg: MsgRegisterFeeShare): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgRegisterFeeShare`,
      value: MsgRegisterFeeShare.fromPartial(msg),
    }
  }

  static MsgUpdateFeeShare(msg: MsgUpdateFeeShare): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgUpdateFeeShare`,
      value: MsgUpdateFeeShare.fromPartial(msg),
    }
  }

  static updateParams(msg: MsgUpdateParams): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgUpdateParams`,
      value: MsgUpdateParams.fromPartial(msg),
    }
  }
}
