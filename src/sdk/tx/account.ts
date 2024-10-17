import { decodeOptionalPubkey } from "@cosmjs/proto-signing"
import { Account, accountFromAny, AccountParser } from "@cosmjs/stargate"
import { EthAccount } from "src/protojs/eth/types/v1/account"
import { Any } from "src/protojs/google/protobuf/any"
import { assert } from "@cosmjs/utils"
import { BaseAccount } from "src/protojs/cosmos/auth/v1beta1/auth"

/**
 * Converts an EthAccount to a general Cosmos Account object.
 *
 * @param {EthAccount} ethAccount - The EthAccount object containing the account's base information.
 * @returns {Account} The Cosmos account object.
 */
export const accountFromEthAccount = ({
  address,
  pubKey,
  accountNumber,
  sequence,
}: BaseAccount): Account => ({
  address,
  pubkey: decodeOptionalPubkey(pubKey),
  accountNumber: accountNumber.toNumber(),
  sequence: sequence.toNumber(),
})

/**
 * Parses an account input into a Cosmos account. Handles both EthAccount and other standard accounts.
 *
 * @param {Any} input - The input account information, containing the typeUrl and value.
 * @returns {Account} Parsed account object.
 */
export const accountFromNibiru: AccountParser = (input: Any): Account => {
  const { typeUrl, value } = input

  if (typeUrl === "/eth.types.v1.EthAccount") {
    const baseAccount = EthAccount.decode(value).baseAccount
    assert(baseAccount)
    return accountFromEthAccount(baseAccount)
  }

  return accountFromAny(input)
}
