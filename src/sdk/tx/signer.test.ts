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

test("newRandomWallet", async () => {
  const wallet = await newRandomWallet(24)
  const [{ address }] = await wallet.getAccounts()
  expect(address).toHaveLength(43)
  expect(wallet.mnemonic.split(" ")).toHaveLength(24)
})

// ANKI HD wallet is heirarchical deterministic
// NOTEs see https://www.investopedia.com/terms/h/hd-wallet-hierarchical-deterministic-wallet.asp#:~:text=A%20hierarchical%20deterministic%20(HD)%20wallet%20is%20a%20digital%20wallet%20commonly,the%20cryptocurrency%20in%20the%20account.

test("newSignerFromMnemonic", async () => {
  const mnemonic =
    "honey club license water device crew gap hidden prize debate enhance true absent vibrant image pitch audit beef ability shadow dog label fetch cup"
  const addressForMnemonic = "nibi1qdk4jkwghcq7lz9uf28tf3qcy3appa42k8wxzg"
  const wallet = await newSignerFromMnemonic(mnemonic)
  const [{ address }] = await wallet.getAccounts()
  expect(address).toEqual(addressForMnemonic)
})
