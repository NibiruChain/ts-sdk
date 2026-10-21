import { DirectSecp256k1HdWallet as CosmjsDirectSecp256k1HdWallet } from "@cosmjs/proto-signing"
import { DirectSecp256k1HdWallet } from "./signer"

describe("signer re-exports", () => {
  test("exposes DirectSecp256k1HdWallet from cosmjs", () => {
    expect(DirectSecp256k1HdWallet).toBe(CosmjsDirectSecp256k1HdWallet)
  })
})
