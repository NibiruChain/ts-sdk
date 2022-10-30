import { useFaucet } from "@nibiruchain/nibijs" // v0.7.3
import { newRandomWallet, WalletHD } from "@nibiruchain/nibijs/dist/tx"

async function runExample() {
  const wallet: WalletHD = await newRandomWallet()
  const [{ address }] = await wallet.getAccounts()

  // Save the mnemonic somewhere to re-use the account
  console.log("mnemonic: ", wallet.mnemonic)
  console.log("address: ", address)

  await useFaucet(address)
}

runExample().then(() => {
  console.log("Completed 01_new-wallet-and-faucet.ts")
})
