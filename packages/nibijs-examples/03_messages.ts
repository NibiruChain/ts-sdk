import {
  NibiruSigningClient,
  newCoin,
  newSignerFromMnemonic,
  Msg,
  TxMessage,
  StdFee,
  toSdkInt,
  parseEventLogs,
} from "@nibiruchain/nibijs"
import { CHAIN, logSuccess } from "./shared"
import { TEST_MNEMONIC } from "../nibijs/src/test/helpers"

async function runExample() {
  // Replace with real one
  const mnemonic: string = TEST_MNEMONIC
  const signer = await newSignerFromMnemonic(mnemonic!)
  signer.getAccounts()
  const signingClient = await NibiruSigningClient.connectWithSigner(
    CHAIN.endptTm,
    signer,
  )
  const [{ address: fromAddr }] = await signer.getAccounts()

  // ------------------------------------
  // Construct tx msgs
  // ------------------------------------
  const pair = "ubtc:unusd"
  const msgs: TxMessage[] = [
    Msg.perp.openPosition({
      sender: fromAddr,
      pair: pair,
      quoteAssetAmount: 10,
      leverage: 1,
      goLong: true,
      baseAssetAmountLimit: 0,
    }),
    Msg.perp.addMargin({
      sender: fromAddr,
      pair: pair,
      margin: newCoin("20", "unusd"),
    }),
    Msg.perp.removeMargin({
      sender: fromAddr,
      pair: pair,
      margin: newCoin("5", "unusd"),
    }),
    // final margin value of 10 (open) + 20 (add) - 5 (remove) = 25
  ]

  // ------------------------------------
  // Broadcast tx
  // ------------------------------------
  const txFee: StdFee = {
    // amount: Desired fees to be spent for gas. The transaction doesn't work
    // if this value is set too low or uses the wrong coin denominations.
    amount: [newCoin(100_000, "unibi")],
    // gas: Gas limit. The maximum amount of gas units that can be used for the
    // tx signature to still be considered valid.
    gas: toSdkInt(1_000_000),
  }
  const txResp = await signingClient.signAndBroadcast(fromAddr, msgs, txFee)
  const { transactionHash, gasUsed, gasWanted } = txResp
  const events = parseEventLogs(txResp)
  console.log("txResp (partial): %o", { transactionHash, gasUsed, gasWanted })
  console.log("events: %o", events)
}

runExample().then(() => {
  logSuccess(__filename)
})
