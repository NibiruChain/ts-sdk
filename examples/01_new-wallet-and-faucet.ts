import {
  useFaucet,
  WalletHD,
  newRandomWallet,
  IncentivizedTestent,
} from "@nibiruchain/nibijs"

const TEST_CHAIN = IncentivizedTestent(1)

async function runExample() {
  const wallet: WalletHD = await newRandomWallet()
  const [{ address }] = await wallet.getAccounts()

  // Save the mnemonic somewhere to re-use the account
  console.log("mnemonic: ", wallet.mnemonic)
  console.log("address: ", address)

  await useFaucet({
    address,
    chain: TEST_CHAIN,
  })
}

runExample().then(() => {
  console.log("Completed 01_new-wallet-and-faucet.ts")
})
