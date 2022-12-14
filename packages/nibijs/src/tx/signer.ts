import {
  Registry,
  DirectSecp256k1HdWallet,
  OfflineSigner,
  OfflineDirectSigner,
} from "@cosmjs/proto-signing"
import { defaultRegistryTypes as defaultStargateTypes } from "@cosmjs/stargate"
import { Keplr } from "../wallet"

export enum BECH32_PREFIX {
  /** ADDR defines the Bech32 prefix of an account address */
  ADDR = "nibi",
  /** ADDR_VAL defines the Bech32 prefix of an validator's operator address */
  ADDR_VAL = "nibivaloper",
  /** ADDR_VALCONS defines the Bech32 prefix of a consensus node address */
  ADDR_VALCONS = "nibivalcons",
  /** PUB defines the Bech32 prefix of an account's public key */
  PUB = "nibipub",
  /** PUB_VAL defines the Bech32 prefix of an validator's operator public key */
  PUB_VAL = "nibivaloperpub",
  /** PUB_VALCONS defines the Bech32 prefix of a consensus node public key */
  PUB_VALCONS = "nibivalconspub",
}

// Q: Why is this constant here?
const DEFAULT_DERIVATION_PATH = "m/44'/118'/0'/0/0"

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
  prefix = BECH32_PREFIX.ADDR,
): Promise<DirectSecp256k1HdWallet> {
  return DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix })
}

export function newSignerFromKeplr(
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
  prefix = BECH32_PREFIX.ADDR,
): Promise<DirectSecp256k1HdWallet> {
  return DirectSecp256k1HdWallet.generate(length || 24, { prefix })
}

export enum Signer {
  Keplr = "keplr",
  Direct = "direct",
}
