import {
  EncodeObject,
  Registry,
  DirectSecp256k1HdWallet,
  Coin,
} from "@cosmjs/proto-signing"
import { defaultRegistryTypes as defaultStargateTypes } from "@cosmjs/stargate"
import { BECH32_ADDR_ACC_PREFIX } from "@nibiruchain/common"
import { MsgSend, protobufPackage } from "@nibiruchain/api/src/cosmos/bank/v1beta1/tx"

export function getRegistry() {
  return new Registry(defaultStargateTypes)
}

export function fromMnemonic(mnemonic: string, prefix = BECH32_ADDR_ACC_PREFIX) {
  return DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix })
}

/**
 * Generates a new wallet with a BIP39 mnemonic of length 24.
 *
 * @export
 * @param {string} prefix - (optional) Bech32 address prefix. Defaults to "nibi".
 * @returns {Promise<DirectSecp256k1HdWallet>} - A wallet for protobuf based signing
 *   using SIGN_MODE_DIRECT.
 */
export function generateWallet(
  prefix = BECH32_ADDR_ACC_PREFIX,
): Promise<DirectSecp256k1HdWallet> {
  return DirectSecp256k1HdWallet.generate(24, { prefix })
}

export interface TxMessage extends EncodeObject {}

export enum Signer {
  Keplr = "keplr",
  Direct = "direct",
}

/**
 * Creates a 'MsgSend' message to send coins from one account to another.
 *
 * @export
 * @param {string} from - Address of the sender
 * @param {string} to - Address of the receiver
 * @param {Coin[]} coins - Tokens (coins) to transfer from 'from' to 'to'
 * @returns {TxMessage}
 */
export function msgSend(from: string, to: string, coins: Coin[]): TxMessage {
  return {
    typeUrl: `/${protobufPackage}.MsgSend`,
    value: MsgSend.fromPartial({
      fromAddress: from,
      toAddress: to,
      amount: coins,
    }),
  }
}
