import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing"
import { MsgChangeRoot, MsgEditSudoers } from "../../protojs/nibiru/sudo/v1/tx"
import { TxMessage } from ".."

const protobufPackage = "nibiru.sudo.v1"

export const SUDO_MSG_TYPE_URLS = {
  MsgChangeRoot: `/${protobufPackage}.MsgChangeRoot`,
  MsgEditSudoers: `/${protobufPackage}.MsgEditSudoers`,
}

export const sudoTypes: ReadonlyArray<[string, GeneratedType]> = [
  [SUDO_MSG_TYPE_URLS.MsgChangeRoot, MsgChangeRoot],
  [SUDO_MSG_TYPE_URLS.MsgEditSudoers, MsgEditSudoers],
]

export interface MsgChangeRootEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgChangeRoot>
}

export const isMsgChangeRootEncodeObject = (encodeObject: EncodeObject) =>
  encodeObject.typeUrl === SUDO_MSG_TYPE_URLS.MsgChangeRoot

export interface MsgEditSudoersEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgEditSudoers>
}

export const isMsgEditSudoersEncodeObject = (encodeObject: EncodeObject) =>
  encodeObject.typeUrl === SUDO_MSG_TYPE_URLS.MsgEditSudoers

// ----------------------------------------------------------------------------

export class SudoMsgFactory {
  static changeRoot(msg: MsgChangeRoot): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgChangeRoot`,
      value: MsgChangeRoot.fromPartial(msg),
    }
  }

  static editSudoers(msg: MsgEditSudoers): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgEditSudoers`,
      value: MsgEditSudoers.fromPartial(msg),
    }
  }
}
