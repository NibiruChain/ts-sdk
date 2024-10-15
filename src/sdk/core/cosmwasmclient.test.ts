import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate"
import { Account, accountFromAny, SequenceResponse } from "@cosmjs/stargate"
import { NibiCosmWasmClient } from "./cosmwasmclient"
import { Any } from "cosmjs-types/google/protobuf/any"

// Mock dependencies
jest.mock("@cosmjs/cosmwasm-stargate")
jest.mock("@cosmjs/stargate")
jest.mock("@cosmjs/tendermint-rpc")

describe("NibiCosmWasmClient", () => {
  const mockCosmWasmClient = {
    forceGetQueryClient: jest.fn(),
    connect: jest.fn(),
  }

  const mockQueryClient = {
    auth: {
      account: jest.fn(),
    },
  }

  // Mock Any type (used for accountFromAny)
  const mockAny: Any = {
    typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
    value: new Uint8Array([10, 20, 30, 40]), // Example value
  }

  // Mock Account structure (returned from accountFromAny)
  const mockAccount: Account = {
    address: "nibi1234...",
    pubkey: {
      type: "tendermint/PubKeySecp256k1",
      value: new Uint8Array([1, 2, 3, 4, 5]),
    },
    accountNumber: 1,
    sequence: 1,
  }

  beforeEach(() => {
    jest.clearAllMocks()
    // Set up mock client
    ;(CosmWasmClient.connect as jest.Mock).mockResolvedValue(mockCosmWasmClient)
    mockCosmWasmClient.forceGetQueryClient.mockReturnValue(mockQueryClient)
  })

  describe("connect", () => {
    it("should create a new NibiCosmWasmClient", async () => {
      const endpoint = "http://localhost:26657"
      const client = await NibiCosmWasmClient.connect(endpoint)

      expect(CosmWasmClient.connect).toHaveBeenCalledWith(endpoint)
      expect(client).toBeInstanceOf(NibiCosmWasmClient)
    })
  })

  describe("getAccount", () => {
    it("should return parsed account if account exists", async () => {
      mockQueryClient.auth.account.mockResolvedValue(mockAny)
      // Mock accountFromAny to return the mockAccount when called with mockAny
      ;(accountFromAny as jest.Mock).mockReturnValue(mockAccount)

      const client = await NibiCosmWasmClient.connect("http://localhost:26657")
      const result = await client.getAccount("nibi1234...")

      expect(mockQueryClient.auth.account).toHaveBeenCalledWith("nibi1234...")
      expect(result).toEqual(mockAccount)
    })

    it("should return null if account does not exist", async () => {
      mockQueryClient.auth.account.mockResolvedValue(null)

      const client = await NibiCosmWasmClient.connect("http://localhost:26657")
      const result = await client.getAccount("nibi1234...")

      expect(mockQueryClient.auth.account).toHaveBeenCalledWith("nibi1234...")
      expect(result).toBeNull()
    })

    it("should return null on 'NotFound' error", async () => {
      mockQueryClient.auth.account.mockRejectedValue(
        new Error("rpc error: code = NotFound")
      )

      const client = await NibiCosmWasmClient.connect("http://localhost:26657")
      const result = await client.getAccount("nibi1234...")

      expect(result).toBeNull()
    })

    it("should throw error on other errors", async () => {
      const errorMessage = "Some other error"
      mockQueryClient.auth.account.mockRejectedValue(new Error(errorMessage))

      const client = await NibiCosmWasmClient.connect("http://localhost:26657")
      await expect(client.getAccount("nibi1234...")).rejects.toThrow(
        errorMessage
      )
    })
  })

  describe("getSequence", () => {
    it("should return sequence and account number for valid account", async () => {
      mockQueryClient.auth.account.mockResolvedValue(mockAny)
      ;(accountFromAny as jest.Mock).mockReturnValue(mockAccount)

      const client = await NibiCosmWasmClient.connect("http://localhost:26657")
      const result: SequenceResponse = await client.getSequence("nibi1234...")

      expect(mockQueryClient.auth.account).toHaveBeenCalledWith("nibi1234...")
      expect(result).toEqual({
        accountNumber: mockAccount.accountNumber,
        sequence: mockAccount.sequence,
      })
    })

    it("should throw an error if the account does not exist", async () => {
      mockQueryClient.auth.account.mockResolvedValue(null)

      const client = await NibiCosmWasmClient.connect("http://localhost:26657")
      await expect(client.getSequence("nibi1234...")).rejects.toThrow(
        "Account 'nibi1234...' does not exist on chain. Send some tokens there before trying to query sequence."
      )
    })
  })
})
