import {
  Registry,
  DirectSecp256k1HdWallet,
  OfflineSigner,
  OfflineDirectSigner,
} from "@cosmjs/proto-signing"
import { defaultRegistryTypes as defaultStargateTypes } from "@cosmjs/stargate"
import { BECH32_ADDR_ACC_PREFIX } from "../common"
import { Keplr } from "../wallet"

export function getRegistry() {
  return new Registry(defaultStargateTypes)
}

/**
 * Creates a wallet from the given BIP39 mnemonic.
 *
 * @export
 * @param mnemonic
 * @param prefix - (optional) Bech32 address prefix. Defaults to "nibi".
 * @returns A wallet for protobuf based signing using SIGN_MODE_DIRECT
 */
export async function newSignerFromMnemonic(
  mnemonic: string,
  prefix = BECH32_ADDR_ACC_PREFIX,
): Promise<DirectSecp256k1HdWallet> {
  return DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix })
}

function newSignerFromKeplr(
  keplr: Keplr,
  chainId: string,
): OfflineSigner & OfflineDirectSigner {
  return keplr.getOfflineSigner(chainId)
}

/**
 * Generates a new wallet with a BIP39 mnemonic of length 24.
 *
 * @export
 * @param length (optional) The number of words in the mnemonic (12, 15, 18, 21 or 24).
 * @param prefix - (optional) Bech32 address prefix. Defaults to "nibi".
 * @returns A wallet for protobuf based signing using SIGN_MODE_DIRECT.
 */
export function newRandomWallet(
  length?: 12 | 15 | 18 | 21 | 24,
  prefix = BECH32_ADDR_ACC_PREFIX,
): Promise<DirectSecp256k1HdWallet> {
  return DirectSecp256k1HdWallet.generate(length ? length : 24, { prefix })
}

export enum Signer {
  Keplr = "keplr",
  Direct = "direct",
}
