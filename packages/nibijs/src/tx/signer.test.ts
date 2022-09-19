import { newRandomWallet, newSignerFromMnemonic, WalletHD } from "./signer"

test("newRandomWallet", async () => {
  const wallet: WalletHD = await newRandomWallet(24)
  const [{ address }] = await wallet.getAccounts()
  expect(address.length).toEqual(43)
  expect(wallet.mnemonic.split(" ").length).toEqual(24)
})

// ANKI HD wallet is heirarchical deterministic
// NOTEs see https://www.investopedia.com/terms/h/hd-wallet-hierarchical-deterministic-wallet.asp#:~:text=A%20hierarchical%20deterministic%20(HD)%20wallet%20is%20a%20digital%20wallet%20commonly,the%20cryptocurrency%20in%20the%20account.

test("newSignerFromMnemonic", async () => {
  const mnemonic =
    "honey club license water device crew gap hidden prize debate enhance true absent vibrant image pitch audit beef ability shadow dog label fetch cup"
  const addressForMnemonic = "nibi1qdk4jkwghcq7lz9uf28tf3qcy3appa42k8wxzg"
  const wallet: WalletHD = await newSignerFromMnemonic(mnemonic)
  const [{ address }] = await wallet.getAccounts()
  expect(address).toEqual(addressForMnemonic)
})
