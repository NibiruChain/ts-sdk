import { newRandomWallet } from "@nibiruchain/nibijs"
import { logSuccess } from "./shared"

async function runExample() {
  // Create a new Nibiru wallet
  const wallet = await newRandomWallet()
  const [{ address }] = await wallet.getAccounts()

  // Save the mnemonic somewhere to re-use the account
  console.log("mnemonic: ", wallet.mnemonic)
  console.log("address: ", address)
}

runExample().then(() => {
  logSuccess(__filename)
})
