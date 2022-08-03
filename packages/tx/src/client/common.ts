import { EncodeObject, Registry, DirectSecp256k1HdWallet, Coin } from '@cosmjs/proto-signing'
import { defaultRegistryTypes as defaultStargateTypes } from '@cosmjs/stargate'
import { BECH32_ADDR_ACC_PREFIX } from '@nibiruchain/common'
import { MsgSend, protobufPackage } from '@nibiruchain/api/src/cosmos/bank/v1beta1/tx'

export function getRegistry() {
  return new Registry(defaultStargateTypes)
}

export function fromMnemonic(mnemonic: string, prefix = BECH32_ADDR_ACC_PREFIX) {
  return DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix })
}

export function generate(prefix = BECH32_ADDR_ACC_PREFIX) {
  return DirectSecp256k1HdWallet.generate(24, { prefix })
}

export interface TxMessage extends EncodeObject {}

export enum Signer {
  Keplr = 'keplr',
  Direct = 'direct',
}

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
