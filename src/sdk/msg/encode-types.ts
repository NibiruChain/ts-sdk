import { EncodeObject } from "@cosmjs/proto-signing"
import { PerpMsgFactory, SpotMsgFactory } from "."

export interface MsgTypeUrls {
  [msg: string]: string
}

export declare class MsgFactory {
  spot: typeof SpotMsgFactory
  perp: typeof PerpMsgFactory
}

export declare const Msg: MsgFactory

/** TxMessage: a message contained within a transaction.
 *
 * @field typeUrl: registered identifier for the proto message
 * @field value: proto-able message body
 */
export type TxMessage = EncodeObject
