import { newCoin, newSdk, Testnet } from "@nibiruchain/nibijs" // nibijs v0.7.1
import { Msg, TxMessage } from "@nibiruchain/nibijs/dist/msg"
import { newSignerFromMnemonic } from "@nibiruchain/nibijs/dist/tx"

async function runExample() {
  const mnemonic = "..." // fill in the blank
  const signer = await newSignerFromMnemonic(mnemonic!)
  const sdk = await newSdk(Testnet, signer)
  const [{ address: fromAddr }] = await sdk.tx.getAccounts()
  const pair = "ubtc:unusd"
  const msgs: TxMessage[] = [
    Msg.perp.openPosition({
      tokenPair: pair,
      baseAssetAmountLimit: 0,
      leverage: 1,
      quoteAssetAmount: 10,
      sender: fromAddr,
      goLong: true,
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
  const txResp = await sdk.tx.signAndBroadcast(...msgs)
  console.log("txResp: %o", txResp)
}

runExample().then(async () => {
  console.log("Completed example: 03_messages.ts")
})
