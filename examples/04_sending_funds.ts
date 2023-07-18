import {
  Coin,
  NibiruSigningClient,
  newCoins,
  newSignerFromMnemonic,
} from "@nibiruchain/nibijs"
import { TEST_CHAIN } from "@nibiruchain/nibijs/src/test/helpers"

async function runExample() {
  const mnemonic = "..." // fill in the blank
  const signer = await newSignerFromMnemonic(mnemonic!)
  const signingClient = await NibiruSigningClient.connectWithSigner(
    TEST_CHAIN.endptTm,
    signer
  )
  const [{ address: fromAddr }] = await signer.getAccounts()

  const tokens: Coin[] = newCoins(5, "unibi")
  const toAddr: string = "..." // bech32 address of the receiving party
  const txResp = await signingClient.sendTokens(
    fromAddr,
    toAddr,
    tokens,
    "auto"
  )
  console.log("txResp: %o", txResp)
}

runExample().then(async () => {
  console.log("Completed example: 04_sending_funds.ts")
})
