import { EncodeObject } from "@cosmjs/proto-signing"

export interface MsgTypeUrls {
  [msg: string]: string
}

/** TxMessage: a message contained within a transaction.
 *
 * @field typeUrl: registered identifier for the proto message
 * @field value: proto-able message body
 */
export interface TxMessage extends EncodeObject {}
