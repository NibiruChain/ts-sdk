import { DirectSecp256k1HdWallet, Registry } from "@cosmjs/proto-signing"
import { getRegistry, newRandomWallet, newSignerFromMnemonic } from "./signer"

describe("signer tests", () => {
  test("getRegistry", () => {
    const testResult = getRegistry()

    expect(testResult).toBeInstanceOf(Registry)
    expect(testResult.encode).toBeTruthy()
    expect(testResult.decode).toBeTruthy()
    expect(testResult.decodeTxBody).toBeTruthy()
    expect(testResult.encodeAsAny).toBeTruthy()
    expect(testResult.encodeTxBody).toBeTruthy()
    expect(testResult.lookupType).toBeTruthy()
    expect(testResult.register).toBeTruthy()
  })

  test("newSignerFromMnemonic", async () => {
    const mnemonic =
      "guard cream sadness conduct invite crumble clock pudding hole grit liar hotel maid produce squeeze return argue turtle know drive eight casino maze host"
    const testResult = await newSignerFromMnemonic(mnemonic)

    expect(testResult).toBeInstanceOf(DirectSecp256k1HdWallet)
    expect(testResult.getAccounts).toBeTruthy()
    expect(testResult.mnemonic).toEqual(mnemonic)
    expect(testResult.serialize).toBeTruthy()
    expect(testResult.serializeWithEncryptionKey).toBeTruthy()
    expect(testResult.signDirect).toBeTruthy()
  })

  test("newRandomWallet", async () => {
    const testResult = await newRandomWallet()

    expect(testResult).toBeInstanceOf(DirectSecp256k1HdWallet)
    expect(testResult.getAccounts).toBeTruthy()
    expect(testResult.mnemonic).toBeTruthy()
    expect(testResult.serialize).toBeTruthy()
    expect(testResult.serializeWithEncryptionKey).toBeTruthy()
    expect(testResult.signDirect).toBeTruthy()
  })
})
