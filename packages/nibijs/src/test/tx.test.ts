/**
 * @fileoverview Tests transactions with a signing client.
 *
 * Modules and Methods tested:
 * - perp module
 *   - Msg.perp.openPosition
 *   - Msg.perp.addMargin
 *   - Msg.perp.removeMargin
 * - bank module | TODO MultiSend
 *   - Msg.bank.Send
 */
import * as dotenv from "dotenv"
import { DeliverTxResponse } from "@cosmjs/stargate"
import { QueryPositionResponse } from "@nibiruchain/protojs/dist/perp/v1/query"
import { PoolType } from "@nibiruchain/protojs/dist/dex/v1/pool"
import { event2KeyValue } from "../chain"
import { AccountData, go, newCoin, newCoins, WalletHD } from "../chain/types"
import { Msg, TxMessage } from "../msg"
import { newRandomWallet, newSignerFromMnemonic } from "../tx"
import { newSdk } from "../sdk"
import { PerpMsgTypeUrls } from "../msg/perp"
import { expectTxToSucceed, prettyTmLogs, TEST_CHAIN, TxLog } from "./helpers"
import { instanceOfError, PerpErrors, raises } from "../chain/error"

dotenv.config() // yarn add -D dotenv

const VAL_MNEMONIC = process.env.VALIDATOR_MNEMONIC
const VAL_ADDRESS = process.env.VALIDATOR_ADDRESS as string
const chain = TEST_CHAIN

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

describe("nibid tx bank send", () => {
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
    expectTxToSucceed(txResp as DeliverTxResponse)
    console.info("txResp: %o", txResp)
  }, 15_000 /* The default timeout (5_000 ms) is not sufficient. */)
})

describe("nibid tx perp", () => {
  const pair = "ubtc:unusd"
  test("open-position, add-margin, remove-margin, close-position", async () => {
    const signer = await newSignerFromMnemonic(VAL_MNEMONIC!)
    const sdk = await newSdk(chain, signer)
    const [{ address: fromAddr }] = await sdk.tx.getAccounts()

    // Query and validate the trader's position
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
        margin: newCoin(20, "unusd"),
      }),
      Msg.perp.removeMargin({
        tokenPair: pair,
        sender: fromAddr,
        margin: newCoin("5", "unusd"),
      }),
      // final margin value of 10 (open) + 20 (add) - 5 (remove) = 25
    ]
    let txResp: DeliverTxResponse | Error = await sdk.tx.signAndBroadcast(...msgs)
    if (instanceOfError(txResp)) {
      const err = txResp
      expect(
        raises([PerpErrors.badDebt, PerpErrors.underwaterPosition], err),
        `${err}`,
        // err.message,
      ).toBeTruthy()
    } else {
      txResp = txResp as DeliverTxResponse
      expectTxToSucceed(txResp)

      const txLogs: TxLog[] = JSON.parse(prettyTmLogs(txResp.rawLog!))

      // perp tx open-position events
      let eventTypes: string[] = eventTypesForPerpMsg(
        "MsgOpenPosition",
        txLogs[0].events,
      )
      expect(eventTypes).toContain("nibiru.vpool.v1.SwapOnVpoolEvent")
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
    }
  }, 40_000 /* default timeout is not sufficient. */)

  test("nibid query perp positions", async () => {
    const signer = await newSignerFromMnemonic(VAL_MNEMONIC!)
    const sdk = await newSdk(chain, signer)
    const [{ address: fromAddr }] = await sdk.tx.getAccounts()
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
  })

  test("nibid query perp position", async () => {
    const signer = await newSignerFromMnemonic(VAL_MNEMONIC!)
    const sdk = await newSdk(chain, signer)
    const [{ address: fromAddr }] = await sdk.tx.getAccounts()
    const { res: resp, err } = await go(
      sdk.query.perp.position({
        tokenPair: pair,
        trader: fromAddr,
      }),
    )
    if (err) {
      expect(raises([PerpErrors.positionNotFound], err), err.message).toBeTruthy()
    } else {
      expect(resp).toBeDefined()
      const queryResp: QueryPositionResponse = resp!
      const fields = [
        queryResp.blockNumber,
        queryResp.position,
        queryResp.marginRatioMark,
        queryResp.marginRatioIndex,
        queryResp.unrealizedPnl,
        queryResp.positionNotional,
      ]
      fields.forEach((val) => expect(val).toBeDefined())
    }
  })

  test("nibid tx perp close-position", async () => {
    const signer = await newSignerFromMnemonic(VAL_MNEMONIC!)
    const sdk = await newSdk(chain, signer)
    const [{ address: fromAddr }] = await sdk.tx.getAccounts()
    // close the position
    const msgs = [Msg.perp.closePosition({ sender: fromAddr, tokenPair: pair })]
    let txResp = await sdk.tx.signAndBroadcast(...msgs)

    if (instanceOfError(txResp)) {
      const err = txResp
      expect(
        raises([PerpErrors.positionNotFound, PerpErrors.underwaterPosition], err),
        err.message,
      ).toBeTruthy()
    } else {
      txResp = txResp as DeliverTxResponse
      expectTxToSucceed(txResp)
    }
  })
})

// ------------------------------------------------------------------------
// Commenting out tests for the dex module because it was temporarily removed.
// ------------------------------------------------------------------------

// - TODO test LPing into a pool, which is called JoinPool
// - TODO test swapping on an existing pool

// NOTE commented out dex commands until public testnet
test("nibid tx dex create-pool", async () => {
  expect(VAL_ADDRESS).toBeDefined()
  expect(VAL_MNEMONIC).toBeDefined()
  const signer = await newSignerFromMnemonic(VAL_MNEMONIC!)
  const sdk = await newSdk(chain, signer)
  const [{ address: fromAddr }] = await sdk.tx.getAccounts()
  const msgs = [
    Msg.dex.createPool({
      creator: fromAddr,
      poolAssets: [
        {
          token: newCoin(5, "unibi"),
          weight: "1",
        },
        {
          token: newCoin(50, "unusd"),
          weight: "1",
        },
      ],
      // Backend bug, throws nilpointer exception if omitted
      poolParams: {
        swapFee: "0",
        exitFee: "0",
        poolType: PoolType.BALANCER,
        A: "10",
      },
    }),
  ]
  // TODO Find way to test this with insufficient funds
  // await sdk.tx.ensureFee(...msgs)
  // const gasUnitsReq = await sdk.tx.simulate(...msgs)
  // expect(gasUnitsReq).toBeGreaterThan(0)
})
