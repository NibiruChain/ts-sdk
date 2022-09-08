import { EncodeObject } from "@cosmjs/proto-signing"

export interface MsgTypeUrls {
  [msg: string]: string
}

export interface TxMessage extends EncodeObject {}
