import { AccountData, coin, coins, parseCoins } from "@cosmjs/proto-signing"
import { assertIsDeliverTxSuccess, DeliverTxResponse } from "@cosmjs/stargate"
import {
  MsgAddMargin,
  MsgClosePosition,
  MsgMarketOrder,
  MsgRemoveMargin,
} from "../../protojs/nibiru/perp/v2/tx"
import { Direction } from "../../protojs/nibiru/perp/v2/state"
import {
  TxLog,
  TxMessage,
  PERP_MSG_TYPE_URLS,
  NibiruQuerier,
  assertHasEventType,
  assertHasMsgType,
  assertExpectedError,
  Localnet,
  TEST_ADDRESS,
  TEST_MNEMONIC,
  ERR,
  newRandomWallet,
  newSignerFromMnemonic,
  NibiruTxClient,
} from ".."

describe("txClient", () => {
  test("connects", async () => {
    const txClient = await NibiruTxClient.connect(Localnet.endptTm)
    expect(txClient).toBeTruthy()
  })
})

describe("nibid tx bank send", () => {
  test("send tokens from the devnet genesis validator to a random account", async () => {
    const signer = await newSignerFromMnemonic(TEST_MNEMONIC)
    const [{ address: fromAddr }]: readonly AccountData[] =
      await signer.getAccounts()
    expect(fromAddr).toBeDefined()

    const txClient = await NibiruTxClient.connectWithSigner(
      Localnet.endptTm,
      signer
    )

    const toWallet = await newRandomWallet()
    const [{ address: toAddr }] = await toWallet.getAccounts()

    const resp = await txClient.sendTokens(
      fromAddr,
      toAddr,
      parseCoins("1unibi"),
      400000
    )
    assertIsDeliverTxSuccess(resp)

    const querier = await NibiruQuerier.connect(Localnet.endptTm)
    const txQuery = await querier.getTxByHash(resp.transactionHash)
    expect(txQuery.isOk()).toBeTruthy()
  })
})

describe("nibid tx perp", () => {
  const pair = "ubtc:unusd"

  test("open-position, add-margin, remove-margin", async () => {
    const signer = await newSignerFromMnemonic(TEST_MNEMONIC)
    const txClient = await NibiruTxClient.connectWithSigner(
      Localnet.endptTm,
      signer
    )
    const [{ address: sender }] = await signer.getAccounts()

    const fee = {
      amount: coins(10_000, "unibi"),
      gas: "400000",
    }

    const msgs: TxMessage[] = [
      {
        typeUrl: PERP_MSG_TYPE_URLS.MsgMarketOrder,
        value: MsgMarketOrder.fromPartial({
          pair,
          baseAssetAmountLimit: "0",
          leverage: "10",
          quoteAssetAmount: "1000",
          sender,
          side: Direction.LONG,
        }),
      },
      {
        typeUrl: PERP_MSG_TYPE_URLS.MsgAddMargin,
        value: MsgAddMargin.fromPartial({
          margin: coin(20, "unusd"),
          pair,
          sender,
        }),
      },
      {
        typeUrl: PERP_MSG_TYPE_URLS.MsgRemoveMargin,
        value: MsgRemoveMargin.fromPartial({
          margin: coin(5, "unusd"),
          pair,
          sender,
        }),
      },
    ]

    const assertHappyPath = (result: DeliverTxResponse) => {
      const txLogs: TxLog[] = JSON.parse(result.rawLog ?? "{}")
      expect(txLogs).toHaveLength(4)

      // perp tx open-position events
      let idx = 0
      assertHasMsgType(PERP_MSG_TYPE_URLS.MsgMarketOrder, txLogs[idx].events)
      assertHasEventType(
        "nibiru.perp.v1.PositionChangedEvent",
        txLogs[idx].events
      )
      assertHasEventType("transfer", txLogs[idx].events)

      // perp tx add-margin events
      idx = 1
      assertHasMsgType(PERP_MSG_TYPE_URLS.MsgAddMargin, txLogs[idx].events)
      assertHasEventType(
        "nibiru.perp.v1.PositionChangedEvent",
        txLogs[idx].events
      )
      assertHasEventType("transfer", txLogs[idx].events)

      // perp tx remove-margin events
      idx = 2
      assertHasMsgType(PERP_MSG_TYPE_URLS.MsgRemoveMargin, txLogs[idx].events)
      assertHasEventType(
        "nibiru.perp.v1.PositionChangedEvent",
        txLogs[idx].events
      )
      assertHasEventType("transfer", txLogs[idx].events)

      // perp tx open-position events
      idx = 3
      assertHasMsgType(PERP_MSG_TYPE_URLS.MsgAddMargin, txLogs[idx].events)
      assertHasEventType(
        "nibiru.perp.v1.PositionChangedEvent",
        txLogs[idx].events
      )
      assertHasEventType("transfer", txLogs[idx].events)
    }

    try {
      const result = await txClient.signAndBroadcast(sender, msgs, fee)

      assertIsDeliverTxSuccess(result)
      assertHappyPath(result)
    } catch (error) {
      const okErrors: string[] = [ERR.collections, ERR.noPrices, ERR.sequence]

      const err = error as { rawLog: unknown }
      let rawError
      if (err.rawLog) {
        rawError = err.rawLog
      }
      assertExpectedError(rawError ?? err, okErrors)
    }
  }, 40_000 /* default timeout is not sufficient. */)

  test("nibid query perp positions", async () => {
    const querier = await NibiruQuerier.connect(Localnet.endptTm)
    const resp = await querier.nibiruExtensions.perp.positions({
      trader: TEST_ADDRESS,
    })
    resp.positions.forEach((position) => {
      const fields = [
        position.position,
        position.unrealizedPnl,
        position.positionNotional,
      ]
      fields.forEach((val) => expect(val).toBeDefined())
    })
  })

  test("nibid tx perp close-position", async () => {
    const signer = await newSignerFromMnemonic(TEST_MNEMONIC)
    const txClient = await NibiruTxClient.connectWithSigner(
      Localnet.endptTm,
      signer
    )
    const [{ address: sender }] = await signer.getAccounts()

    const fee = {
      amount: coins(12_500, "unibi"),
      gas: "500000",
    }

    const msgs: TxMessage[] = [
      {
        typeUrl: PERP_MSG_TYPE_URLS.MsgClosePosition,
        value: MsgClosePosition.fromPartial({
          pair,
          sender,
        }),
      },
    ]

    const assertHappyPath = (result: DeliverTxResponse) => {
      const txLogs: TxLog[] = JSON.parse(result.rawLog ?? "{}")
      expect(txLogs).toHaveLength(1)

      // perp tx close-position events
      assertHasMsgType(PERP_MSG_TYPE_URLS.MsgClosePosition, txLogs[0].events)
      assertHasEventType(
        "nibiru.perp.v1.PositionChangedEvent",
        txLogs[0].events
      )
      assertHasEventType("transfer", txLogs[0].events)
    }

    try {
      const result = await txClient.signAndBroadcast(sender, msgs, fee)
      assertIsDeliverTxSuccess(result)
      assertHappyPath(result)
    } catch (error) {
      const okErrors: string[] = [ERR.collections, ERR.sequence]

      const err = error as { rawLog: unknown }
      let rawError
      if (err.rawLog) {
        rawError = err.rawLog
      }
      assertExpectedError(rawError ?? err, okErrors)
    }
  })
})
