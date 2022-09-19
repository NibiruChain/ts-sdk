import * as pb from "@nibiruchain/api/dist/cosmos/bank/v1beta1/tx"
import { Coin } from "@cosmjs/proto-signing"
import { TxMessage } from "./types"

export class BankMsgs {
  /**
   * Creates a 'MsgSend' message to send coins from one account to another.
   *
   * @static
   * @param {string} from - Address of the sender
   * @param {string} to - Address of the receiver
   * @param {Coin[]} coins - Tokens (coins) to transfer from 'from' to 'to'
   * @returns {TxMessage}
   */
  static Send(from: string, to: string, coins: Coin[]): TxMessage {
    return {
      typeUrl: `/${pb.protobufPackage}.MsgSend`,
      value: pb.MsgSend.fromPartial({
        fromAddress: from,
        toAddress: to,
        amount: coins,
      }),
    }
  }

  /**
   * Creates a 'MsgMultiSend' message to send multiple transfers
   *
   * @returns {TxMessage}
   */
  static MultiSend(msg: pb.MsgMultiSend): TxMessage {
    return {
      typeUrl: `/${pb.protobufPackage}.MsgMultiSend`,
      value: pb.MsgMultiSend.fromPartial(msg),
    }
  }
}
