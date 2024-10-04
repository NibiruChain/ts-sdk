import { accountFromEthAccount, accountFromNibiru } from "./account"
import { EthAccount } from "src/protojs/eth/types/v1/account"
import { Any } from "src/protojs/google/protobuf/any"
import Long from "long"
import * as cosmjs from "@cosmjs/stargate"
import { decodeOptionalPubkey } from "@cosmjs/proto-signing"

// Mock decodeOptionalPubkey
jest.mock("@cosmjs/proto-signing", () => ({
  decodeOptionalPubkey: jest.fn(),
}))

const mockedDecodeOptionalPubkey = decodeOptionalPubkey as jest.Mock

describe("accountFromEthAccount", () => {
  it("should throw an error when baseAccount is undefined", () => {
    const ethAccount: EthAccount = {
      baseAccount: undefined, // Simulating undefined baseAccount
      codeHash: "",
    }

    expect(() => accountFromEthAccount(ethAccount)).toThrowError(
      "baseAccount is undefined in EthAccount"
    )
  })

  it("should return a valid account when baseAccount is defined", () => {
    const ethAccount: EthAccount = {
      baseAccount: {
        address: "nibi1testaddress",
        pubKey: {
          typeUrl: "/cosmos.crypto.secp256k1.PubKey",
          value: new Uint8Array([1, 2, 3]),
        },
        accountNumber: Long.fromNumber(123),
        sequence: Long.fromNumber(1),
      },
      codeHash: "",
    }

    mockedDecodeOptionalPubkey.mockReturnValue({
      typeUrl: "/cosmos.crypto.secp256k1.PubKey",
      value: new Uint8Array([1, 2, 3]),
    })

    const account = accountFromEthAccount(ethAccount)

    expect(account.address).toBe("nibi1testaddress")
    expect(account.pubkey).toEqual({
      typeUrl: "/cosmos.crypto.secp256k1.PubKey",
      value: new Uint8Array([1, 2, 3]),
    })
    expect(account.accountNumber).toEqual(123)
    expect(account.sequence).toEqual(1)
  })
})

describe("accountFromNibiru", () => {
  it("should parse EthAccount typeUrl and return valid account", () => {
    const input: Any = {
      typeUrl: "/eth.types.v1.EthAccount",
      value: EthAccount.encode({
        baseAccount: {
          address: "nibi1testaddress",
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

    mockedDecodeOptionalPubkey.mockReturnValue({
      typeUrl: "/cosmos.crypto.secp256k1.PubKey",
      value: new Uint8Array([4, 5, 6]),
    })

    const account = accountFromNibiru(input)

    expect(account.address).toBe("nibi1testaddress")
    expect(account.pubkey).toEqual({
      typeUrl: "/cosmos.crypto.secp256k1.PubKey",
      value: new Uint8Array([4, 5, 6]),
    })
    expect(account.accountNumber).toEqual(456)
    expect(account.sequence).toEqual(2)
  })

  it("should handle non-EthAccount typeUrl by calling accountFromAny", () => {
    const mockAccountFromAny = jest
      .spyOn(cosmjs, "accountFromAny")
      .mockReturnValue({
        address: "nibi1otheraddress",
        pubkey: null,
        accountNumber: 789,
        sequence: 3,
      })

    const input: Any = {
      typeUrl: "/other.types.v1.Account",
      value: new Uint8Array([7, 8, 9]),
    }

    const account = accountFromNibiru(input)

    expect(account.address).toBe("nibi1otheraddress")
    expect(mockAccountFromAny).toHaveBeenCalledWith(input)
  })
})
