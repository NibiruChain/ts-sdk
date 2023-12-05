import {
  NibiruSigningClient,
  newSignerFromMnemonic,
  newRandomWallet,
  parseEventLogs,
  toSdkInt,
} from "@nibiruchain/nibijs"
import { TEST_ADDRESS, TEST_MNEMONIC } from "../nibijs/src/test/helpers"
import { CHAIN, hereDoc, logSuccess } from "./shared"

async function runExample() {
  console.log(
    hereDoc(`Running example: ${__filename}...
    This example broadcasts a transaction to send 5 unibi from the test account
    (${TEST_ADDRESS}). The funds are sent to a random address.`),
  )

  // mnemonic: For the account that will sign the transaction
  const mnemonic: string = TEST_MNEMONIC
  // toAddr: bech32 address (prefixed with nibi) of the receiving party
  const [{ address: randAddr }] = await (await newRandomWallet()).getAccounts()
  const toAddr: string = process.argv[2] ?? randAddr

  const signer = await newSignerFromMnemonic(mnemonic)
  const signingClient = await NibiruSigningClient.connectWithSigner(
    CHAIN.endptTm,
    signer,
  )
  const [{ address: fromAddr }] = await signer.getAccounts()

  const txResp = await signingClient.sendTokens(
    fromAddr,
    toAddr,
    [{ denom: "unibi", amount: toSdkInt(5) }],
    "auto",
  )
  const { transactionHash, gasUsed, gasWanted, code } = txResp
  const events = parseEventLogs(txResp)
  console.log("txResp (partial): %o", {
    transactionHash,
    gasUsed,
    gasWanted,
    code,
  })
  console.log("events: %o", events)
}

runExample().then(() => {
  logSuccess(__filename)
})
