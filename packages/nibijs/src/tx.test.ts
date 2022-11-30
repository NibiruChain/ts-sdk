/**
 * @fileoverview Tests transactions with a signing client.
 *
 * Modules and Methods tested:
 * - perp module
 * - bank module | TODO MultiSend
 */
import * as dotenv from "dotenv"
import { DeliverTxResponse, assertIsDeliverTxSuccess } from "@cosmjs/stargate"
import { QueryPositionResponse } from "@nibiruchain/protojs/dist/perp/v1/query"
import { Devnet, event2KeyValue, Testnet } from "./chain"
import { AccountData, newCoin, newCoins, WalletHD } from "./chain/types"
import { Msg, TxMessage } from "./msg"
import { newRandomWallet, newSignerFromMnemonic } from "./tx"
import { newSdk } from "./sdk"
import { PerpMsgTypeUrls } from "./msg/perp"

dotenv.config() // yarn add -D dotenv

const VAL_MNEMONIC = process.env.VALIDATOR_MNEMONIC
const VAL_ADDRESS = process.env.VALIDATOR_ADDRESS as string

function prettyTmLogs(tmLogs: string): string {
  return tmLogs.split('\\"').join("")
}

function expectTxToSucceed(txResp: DeliverTxResponse) {
  expect(txResp).not.toBeNull()
  assertIsDeliverTxSuccess(txResp)
}

function eventTypesForPerpMsg(
  msgType: string,
  events: { type: string; attributes: any[] }[],
): string[] {
  const eventTypes: string[] = events.map((event) => event.type)
  eventTypes.forEach((eventType, eventIdx) => {
    if (eventType == "message") {
      expect(events[eventIdx].attributes).toContainEqual({
        key: "action",
        value: PerpMsgTypeUrls[msgType],
      })
    }
  })
  return eventTypes
}

interface TxLog {
  events: { type: string; attributes: any[] }[]
}

describe("test tx module", () => {
  const chain = Testnet
  test("send tokens from the devnet genesis validator to a random account", async () => {
    expect(VAL_ADDRESS).toBeDefined()
    expect(VAL_MNEMONIC).toBeDefined()

    const signer = await newSignerFromMnemonic(VAL_MNEMONIC!)
    const sdk = await newSdk(chain, signer)
    const [{ address: fromAddr }]: readonly AccountData[] = await sdk.tx.getAccounts()
    expect(fromAddr).toBeDefined()

    const toWallet: WalletHD = await newRandomWallet()
    const [{ address: toAddr }] = await toWallet.getAccounts()
    const tokens = newCoins(5, "unibi")
    console.info(
      `Sending tokens...
      tokens: ${tokens.toString()}
      from: ${fromAddr}
      to: ${toAddr}`,
    )
    const txResp = await sdk.tx.sendTokens(toAddr, tokens)
    expectTxToSucceed(txResp)
    console.info("txResp: %o", txResp)
  }, 15_000 /* The default timeout (5_000 ms) is not sufficient. */)
})

describe("perp module transactions", () => {
  const chain = Testnet
  test("open-position, add-margin, remove-margin, close-position", async () => {
    const signer = await newSignerFromMnemonic(VAL_MNEMONIC!)
    const sdk = await newSdk(chain, signer)
    const [{ address: fromAddr }] = await sdk.tx.getAccounts()
    const pair = "ubtc:unusd"

    // Query and validate fundingRate of given pair
    const currentEpoch = await sdk.query.epoch.epochsInfo({})
    console.log("here", currentEpoch)

    // Query and validate the trader's position
    let msgs: TxMessage[] = [
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
        margin: newCoin(20, "unusd"),
      }),
      Msg.perp.removeMargin({
        tokenPair: pair,
        sender: fromAddr,
        margin: newCoin("5", "unusd"),
      }),
      // final margin value of 10 (open) + 20 (add) - 5 (remove) = 25
    ]
    let txResp: DeliverTxResponse = await sdk.tx.signAndBroadcast(...msgs)
    expectTxToSucceed(txResp)

    const txLogs: TxLog[] = JSON.parse(prettyTmLogs(txResp.rawLog!))

    // perp tx open-position events
    let eventTypes: string[] = eventTypesForPerpMsg("MsgOpenPosition", txLogs[0].events)
    expect(eventTypes).toContain("nibiru.vpool.v1.SwapQuoteForBaseEvent")
    expect(eventTypes).toContain("nibiru.vpool.v1.MarkPriceChangedEvent")
    expect(eventTypes).toContain("nibiru.perp.v1.PositionChangedEvent")
    expect(eventTypes).toContain("transfer")
    const eventPositionChangedIdx = eventTypes.findIndex(
      (el) => el === "nibiru.perp.v1.PositionChangedEvent",
    )
    const eventPositionChanged = event2KeyValue(
      txLogs[0].events[eventPositionChangedIdx],
    )
    expect(eventPositionChanged.bad_debt).toContain("amount:0")

    // perp tx add-margin events
    eventTypes = eventTypesForPerpMsg("MsgAddMargin", txLogs[1].events)
    expect(eventTypes).not.toContain("nibiru.vpool.v1.MarkPriceChanged")
    expect(eventTypes).toContain("nibiru.perp.v1.PositionChangedEvent")
    expect(eventTypes).toContain("transfer")

    // perp tx remove-margin events
    eventTypes = eventTypesForPerpMsg("MsgRemoveMargin", txLogs[2].events)
    expect(eventTypes).toContain("nibiru.perp.v1.PositionChangedEvent")
    expect(eventTypes).toContain("transfer")

    // Query and validate the trader's position
    const queryPositions = await sdk.query.perp.positions({
      trader: fromAddr,
    })
    queryPositions.positions.forEach((position) => {
      const fields = [
        position.blockNumber,
        position.position,
        position.marginRatioMark,
        position.marginRatioIndex,
        position.unrealizedPnl,
        position.positionNotional,
      ]
      fields.forEach((val) => expect(val).toBeDefined())
    })
    const queryResp: QueryPositionResponse = await sdk.query.perp.position({
      tokenPair: pair,
      trader: fromAddr,
    })
    const fields = [
      queryResp.blockNumber,
      queryResp.position,
      queryResp.marginRatioMark,
      queryResp.marginRatioIndex,
      queryResp.unrealizedPnl,
      queryResp.positionNotional,
    ]
    fields.forEach((val) => expect(val).toBeDefined())

    // close the position
    msgs = [Msg.perp.closePosition({ sender: fromAddr, tokenPair: pair })]
    txResp = await sdk.tx.signAndBroadcast(...msgs)
    expectTxToSucceed(txResp)
  }, 40_000 /* default timeout is not sufficient. */)
})

// ------------------------------------------------------------------------
// Commenting out tests for the dex module because it was temporarily removed.
// ------------------------------------------------------------------------

// - TODO test LPing into a pool, which is called JoinPool
// - TODO test swapping on an existing pool

/*
  // NOTE commented out dex commands until public testnet
  test("dex create pool", async () => {
    const client = await newTxCmd(chain, VAL_MNEMONIC)
    const [{ address: fromAddr }] = await client.getAccounts()
    const txResp = await client.signAndBroadcast(
      DexMsgs.createPool({
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
    console.info("%o", txResp)
    expect(txResp).not.toBeNull()
    expect(txResp.code).toBe(0)
  })
 */
