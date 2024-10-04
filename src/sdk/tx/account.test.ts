import { accountFromEthAccount, accountFromNibiru } from "./account"
import { EthAccount } from "src/protojs/eth/types/v1/account"
import { Any } from "cosmjs-types/google/protobuf/any"
import Long from "long"

describe("accountFromEthAccount", () => {
  it("should return valid account information with nibi address and Long types", () => {
    const ethAccount: EthAccount = {
      baseAccount: {
        address: "nibi1234567", // Use nibi Bech32 encoding
        pubKey: {
          typeUrl: "/cosmos.crypto.secp256k1.PubKey",
          value: new Uint8Array([1, 2, 3]),
        },
        accountNumber: Long.fromNumber(123),
        sequence: Long.fromNumber(1),
      },
      codeHash: "",
    }

    const account = accountFromEthAccount(ethAccount)

    expect(account.address).toEqual("nibi1234567")
    expect(account.pubkey).toEqual({
      typeUrl: "/cosmos.crypto.secp256k1.PubKey",
      value: new Uint8Array([1, 2, 3]),
    })
    expect(account.accountNumber).toEqual(Long.fromNumber(123))
    expect(account.sequence).toEqual(Long.fromNumber(1))
  })

  it("should handle null/undefined baseAccount fields and return Long.ZERO", () => {
    const ethAccount: EthAccount = { baseAccount: undefined, codeHash: "" }

    const account = accountFromEthAccount(ethAccount)

    expect(account.address).toEqual("")
    expect(account.pubkey).toBeNull()
    expect(account.accountNumber).toEqual(Long.ZERO)
    expect(account.sequence).toEqual(Long.ZERO)
  })
})

describe("accountFromNibiru", () => {
  it("should parse EthAccount typeUrl", () => {
    const input: Any = {
      typeUrl: "/eth.types.v1.EthAccount",
      value: EthAccount.encode({
        baseAccount: {
          address: "nibi1234567",
          pubKey: {
            typeUrl: "/cosmos.crypto.secp256k1.PubKey",
            value: new Uint8Array([4, 5, 6]),
          },
          accountNumber: Long.fromNumber(456),
          sequence: Long.fromNumber(2),
        },
        codeHash: "",
      }).finish(),
    }

    const account = accountFromNibiru(input)

    expect(account.address).toEqual("nibi1234567") // Ensure the prefix is 'nibi'
    expect(account.pubkey).toEqual({
      typeUrl: "/cosmos.crypto.secp256k1.PubKey",
      value: new Uint8Array([4, 5, 6]),
    })
    expect(account.accountNumber).toEqual(Long.fromNumber(456))
    expect(account.sequence).toEqual(Long.fromNumber(2))
  })

  it("should call accountFromAny for non-EthAccount typeUrl", () => {
    const input: Any = {
      typeUrl: "/other.types.v1.Account",
      value: new Uint8Array([7, 8, 9]),
    }

    const account = accountFromNibiru(input)

    expect(account.address).toBe("nibi1otheraddress")
  })
})
