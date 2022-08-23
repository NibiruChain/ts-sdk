import { DevnetNetwork } from "@nibiruchain/common"
import { initQuery } from "@nibiruchain/query"
import { Side } from "@nibiruchain/api/src/perp/v1/state"
import { AccountData, coins, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing"
import * as dotenv from "dotenv"
import { DexComposer, PerpComposer } from "."
import { generateWallet, msgSend, TxMessage } from "./common"
import { initTx, TxImpl } from "./tx"
import {} from "@cosmjs/stargate"

dotenv.config() // yarn add -D dotenv

const VAL_MNEMONIC = process.env.VALIDATOR_MNEMONIC
const NETWORK = DevnetNetwork
const VAL_ADDRESS = process.env.VALIDATOR_ADDRESS as string

describe("test tx module", () => {
  test("send tokens from the devnet genesis validator to a random account", async () => {
    expect(VAL_ADDRESS).toBeDefined()
    expect(VAL_MNEMONIC).toBeDefined()

    const txCmd: TxImpl = await initTx(NETWORK, VAL_MNEMONIC)
    const [{ address: fromAddr }]: readonly AccountData[] = await txCmd.getAccounts()
    expect(fromAddr).toBeDefined()

    const toWallet: DirectSecp256k1HdWallet = await generateWallet()
    const [{ address: toAddr }] = await toWallet.getAccounts()
    const tokens = coins(5, "unibi")
    const gasUsed = await txCmd.client.simulate(
      /*signerAddress*/ fromAddr,
      /*messages*/ [msgSend(fromAddr, toAddr, tokens)],
      /*memo*/ "example memo", // undefined,
    )
    expect(gasUsed).toBeGreaterThan(0)

    console.info(
      `Sending tokens...
      tokens: %O
      from: %s
      to: %s`,
      tokens,
      fromAddr,
      toAddr,
    )
    const gasLimit = gasUsed * 1.25

    const txResp = await txCmd.withFee(gasLimit).sendTokens(toAddr, tokens)
    expect(txResp).not.toBeNull()
    expect(txResp.code).toBe(0)
    expect(txResp.gasUsed).toBeLessThanOrEqual(gasLimit)
    console.info("%o", txResp)

    // TODO add tx hash query to the Query interface (output of initQuery)
    // const query = await initQuery(NETWORK)
    // let queryResp = await query.
  }, 10_000 /* This test takes roughly 5.3 seconds. The default timeout is not sufficient. */)

  // TODO commenting out tx commands native to nibiru for now.
  // - TODO test LPing into a pool, which is called JoinPool
  // - TODO test swapping on an existing pool

  /* 
  // NOTE commented out dex commands until public testnet
  test("dex create pool", async () => {
    const client = await initTx(DevnetNetwork, VAL_MNEMONIC)
    const [{ address: fromAddr }] = await client.getAccounts()
    const txResp = await client.signAndBroadcast(
      DexComposer.createPool({
        creator: fromAddr,
        poolAssets: [
          {
            token: { amount: "5", denom: "unibi" },
            weight: "1",
          },
          {
            token: { amount: "50", denom: "unusd" },
            weight: "1",
          },
        ],
        // Backend bug, throws nilpointer exception if omitted
        poolParams: {
          swapFee: "0",
          exitFee: "0",
        },
      }),
    )
    console.log("%o", txResp)
    expect(txResp).not.toBeNull()
    expect(txResp.code).toBe(0)
  })
 */

  test("nibid tx perp open-position", async () => {
    const tx = await initTx(DevnetNetwork, VAL_MNEMONIC)
    const [{ address: fromAddr }] = await tx.getAccounts()
    const msgs: TxMessage[] = [
      PerpComposer.openPosition({
        tokenPair: "ubtc:unusd",
        baseAssetAmountLimit: "0",
        leverage: "1",
        quoteAssetAmount: "10",
        sender: fromAddr,
        side: Side.BUY,
      }),
    ]
    const txResp = await tx.signAndBroadcast(...msgs)
    expect(txResp.code).toBe(0)
    console.log("open-position txResp:\n", JSON.stringify(await txResp.rawLog, null, 2))
    expect(txResp).not.toBeNull()
  }, 10_000 /* This test takes roughly 5.3 seconds. The default timeout is not sufficient. */)
})
