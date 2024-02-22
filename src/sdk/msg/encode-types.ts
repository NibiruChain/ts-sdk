import { EncodeObject } from "@cosmjs/proto-signing"
import {
  DevgasMsgFactory,
  InflationMsgFactory,
  OracleMsgFactory,
  PerpMsgFactory,
  SpotMsgFactory,
  SudoMsgFactory,
  TokenfactoryMsgFactory,
} from "."

export interface MsgTypeUrls {
  [msg: string]: string
}

export declare class MsgFactory {
  devgas: typeof DevgasMsgFactory
  inflation: typeof InflationMsgFactory
  oracle: typeof OracleMsgFactory
  perp: typeof PerpMsgFactory
  spot: typeof SpotMsgFactory
  sudo: typeof SudoMsgFactory
  tokenfactory: typeof TokenfactoryMsgFactory
}

export declare const Msg: MsgFactory

/** TxMessage: a message contained within a transaction.
 *
 * @field typeUrl: registered identifier for the proto message
 * @field value: proto-able message body
 */
export type TxMessage = EncodeObject
