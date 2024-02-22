import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing"
import {
  MsgBurn,
  MsgChangeAdmin,
  MsgCreateDenom,
  MsgMint,
  MsgSetDenomMetadata,
  MsgUpdateModuleParams,
} from "../../protojs/nibiru/tokenfactory/v1/tx"
import { TxMessage } from ".."

const protobufPackage = "nibiru.tokenfactory.v1"

export const TOKENFACTORY_MSG_TYPE_URLS = {
  MsgBurn: `/${protobufPackage}.MsgBurn`,
  MsgChangeAdmin: `/${protobufPackage}.MsgChangeAdmin`,
  MsgCreateDenom: `/${protobufPackage}.MsgCreateDenom`,
  MsgMint: `/${protobufPackage}.MsgMint`,
  MsgSetDenomMetadata: `/${protobufPackage}.MsgSetDenomMetadata`,
  MsgUpdateModuleParams: `/${protobufPackage}.MsgUpdateModuleParams`,
}

export const tokenfactoryTypes: ReadonlyArray<[string, GeneratedType]> = [
  [TOKENFACTORY_MSG_TYPE_URLS.MsgBurn, MsgBurn],
  [TOKENFACTORY_MSG_TYPE_URLS.MsgChangeAdmin, MsgChangeAdmin],
  [TOKENFACTORY_MSG_TYPE_URLS.MsgCreateDenom, MsgCreateDenom],
  [TOKENFACTORY_MSG_TYPE_URLS.MsgMint, MsgMint],
  [TOKENFACTORY_MSG_TYPE_URLS.MsgSetDenomMetadata, MsgSetDenomMetadata],
  [TOKENFACTORY_MSG_TYPE_URLS.MsgUpdateModuleParams, MsgUpdateModuleParams],
]

export interface MsgBurnEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgBurn>
}

export const isMsgBurnEncodeObject = (encodeObject: EncodeObject) =>
  encodeObject.typeUrl === TOKENFACTORY_MSG_TYPE_URLS.MsgBurn

export interface MsgChangeAdminEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgChangeAdmin>
}

export const isMsgChangeAdminEncodeObject = (encodeObject: EncodeObject) =>
  encodeObject.typeUrl === TOKENFACTORY_MSG_TYPE_URLS.MsgChangeAdmin

export interface MsgCreateDenomEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgCreateDenom>
}

export const isMsgCreateDenomEncodeObject = (encodeObject: EncodeObject) =>
  encodeObject.typeUrl === TOKENFACTORY_MSG_TYPE_URLS.MsgCreateDenom

export interface MsgMintEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgMint>
}

export const isMsgMintEncodeObject = (encodeObject: EncodeObject) =>
  encodeObject.typeUrl === TOKENFACTORY_MSG_TYPE_URLS.MsgMint

export interface MsgSetDenomMetadataObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgSetDenomMetadata>
}
export const isMsgSetDenomMetadataEncodeObject = (encodeObject: EncodeObject) =>
  encodeObject.typeUrl === TOKENFACTORY_MSG_TYPE_URLS.MsgSetDenomMetadata

export interface MsgMsgUpdateModuleParamsObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgUpdateModuleParams>
}

export const isMsgUpdateModuleParamsEncodeObject = (
  encodeObject: EncodeObject
) => encodeObject.typeUrl === TOKENFACTORY_MSG_TYPE_URLS.MsgUpdateModuleParams

// ----------------------------------------------------------------------------

export class TokenfactoryMsgFactory {
  static burn(msg: MsgBurn): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgBurn`,
      value: MsgBurn.fromPartial(msg),
    }
  }

  static changeAdmin(msg: MsgChangeAdmin): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgChangeAdmin`,
      value: MsgChangeAdmin.fromPartial(msg),
    }
  }

  static createDenom(msg: MsgCreateDenom): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgCreateDenom`,
      value: MsgCreateDenom.fromPartial(msg),
    }
  }

  static mint(msg: MsgMint): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgMint`,
      value: MsgMint.fromPartial(msg),
    }
  }

  static setDenomMetadata(msg: MsgSetDenomMetadata): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgSetDenomMetadata`,
      value: MsgSetDenomMetadata.fromPartial(msg),
    }
  }

  static updateModuleParams(msg: MsgUpdateModuleParams): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgMint`,
      value: MsgUpdateModuleParams.fromPartial(msg),
    }
  }
}
