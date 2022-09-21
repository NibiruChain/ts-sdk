import { newCoin, newSdk, Testnet } from "@nibiruchain/nibijs" // nibijs v0.6.1
import { Msg, TxMessage } from "@nibiruchain/nibijs/dist/msg"
import { newSignerFromMnemonic } from "@nibiruchain/nibijs/dist/tx"
import { DeliverTxResponse } from "@cosmjs/stargate"
import { Side } from "@nibiruchain/api/dist/perp/v1/state"

async function runExample() {
  const mnemonic = "..." // fill in the blank
  const signer = await newSignerFromMnemonic(mnemonic!)
  const sdk = await newSdk(Testnet, signer)
  const [{ address: fromAddr }] = await sdk.tx.getAccounts()
  const pair = "ubtc:unusd"
  let msgs: TxMessage[] = [
    Msg.perp.openPosition({
      tokenPair: pair,
      baseAssetAmountLimit: "0",
      leverage: "1",
      quoteAssetAmount: "10",
      sender: fromAddr,
      side: Side.BUY,
    }),
    Msg.perp.addMargin({
      sender: fromAddr,
      tokenPair: pair,
      margin: newCoin("20", "unusd"),
    }),
    Msg.perp.removeMargin({
      tokenPair: pair,
      sender: fromAddr,
      margin: newCoin("5", "unusd"),
    }),
    // final margin value of 10 (open) + 20 (add) - 5 (remove) = 25
  ]
  let txResp: DeliverTxResponse = await sdk.tx.signAndBroadcast(...msgs)
  console.log("txResp: %o", txResp)
}

runExample().then(async () => {
  console.log("Completed example: 03_messages.ts")
})
