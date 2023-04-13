import {
  AccountData,
  coin,
  coins,
  DirectSecp256k1HdWallet,
  parseCoins,
} from "@cosmjs/proto-signing"
import { assertIsDeliverTxSuccess } from "@cosmjs/stargate"
import {
  MsgAddMargin,
  MsgClosePosition,
  MsgOpenPosition,
  MsgRemoveMargin,
} from "@nibiruchain/protojs/dist/perp/v1/tx"
import { Side } from "@nibiruchain/protojs/src/perp/v1/state"
import { TxLog } from "../chain/types"
import { PERP_MSG_TYPE_URLS } from "../msg/perp"
import { NibiruQueryClient } from "../query/query"
import {
  assertHasEventType,
  assertHasMsgType,
  TEST_CHAIN,
  TEST_ADDRESS,
  TEST_MNEMONIC,
} from "../test/helpers"
import { newRandomWallet, newSignerFromMnemonic } from "./signer"
import { NibiruSigningClient } from "./signingClient"

describe("signingClient", () => {
  test("connects", async () => {
    const client = await NibiruSigningClient.connect(TEST_CHAIN.endptTm)
    expect(client).toBeTruthy()
  })
})

describe("nibid tx bank send", () => {
  test("send tokens from the devnet genesis validator to a random account", async () => {
    const signer = await newSignerFromMnemonic(TEST_MNEMONIC)
    const [{ address: fromAddr }]: readonly AccountData[] = await signer.getAccounts()
    expect(fromAddr).toBeDefined()

    const signingClient = await NibiruSigningClient.connectWithSigner(
      TEST_CHAIN.endptTm,
      signer,
    )

    const toWallet: DirectSecp256k1HdWallet = await newRandomWallet()
    const [{ address: toAddr }] = await toWallet.getAccounts()

    const resp = await signingClient.sendTokens(
      fromAddr,
      toAddr,
      parseCoins("1unibi"),
      "auto",
    )
    assertIsDeliverTxSuccess(resp)
  })
})

describe("nibid tx perp", () => {
  const pair = "ubtc:unusd"

  test("open-position, add-margin, remove-margin", async () => {
    const signer = await newSignerFromMnemonic(TEST_MNEMONIC)
    const signingClient = await NibiruSigningClient.connectWithSigner(
      TEST_CHAIN.endptTm,
      signer,
    )
    const [{ address: sender }] = await signer.getAccounts()

    const fee = {
      amount: coins(10_000, "unibi"),
      gas: "400000",
    }

    const result = await signingClient.signAndBroadcast(
      sender,
      [
        {
          typeUrl: PERP_MSG_TYPE_URLS.MsgOpenPosition,
          value: MsgOpenPosition.fromPartial({
            pair,
            baseAssetAmountLimit: "0",
            leverage: "10",
            quoteAssetAmount: "1000",
            sender,
            side: Side.BUY,
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
      ],
      fee,
    )
    assertIsDeliverTxSuccess(result)

    const txLogs: TxLog[] = JSON.parse(result.rawLog!)
    expect(txLogs).toHaveLength(3)

    // perp tx open-position events
    assertHasMsgType(PERP_MSG_TYPE_URLS.MsgOpenPosition, txLogs[0].events)
    assertHasEventType("nibiru.perp.v1.PositionChangedEvent", txLogs[0].events)
    assertHasEventType("nibiru.vpool.v1.SwapOnVpoolEvent", txLogs[0].events)
    assertHasEventType("nibiru.vpool.v1.MarkPriceChangedEvent", txLogs[0].events)
    assertHasEventType("transfer", txLogs[0].events)

    // perp tx add-margin events
    assertHasMsgType(PERP_MSG_TYPE_URLS.MsgAddMargin, txLogs[1].events)
    assertHasEventType("nibiru.perp.v1.PositionChangedEvent", txLogs[1].events)
    assertHasEventType("transfer", txLogs[1].events)

    // perp tx remove-margin events
    assertHasMsgType(PERP_MSG_TYPE_URLS.MsgRemoveMargin, txLogs[2].events)
    assertHasEventType("nibiru.perp.v1.PositionChangedEvent", txLogs[2].events)
    assertHasEventType("transfer", txLogs[2].events)
  }, 40_000 /* default timeout is not sufficient. */)

  test("nibid query perp positions", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const resp = await queryClient.nibiruExtensions.perp.positions({
      trader: TEST_ADDRESS,
    })
    resp.positions.forEach((position) => {
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

  test("nibid tx perp close-position", async () => {
    const signer = await newSignerFromMnemonic(TEST_MNEMONIC)
    const signingClient = await NibiruSigningClient.connectWithSigner(
      TEST_CHAIN.endptTm,
      signer,
    )
    const [{ address: sender }] = await signer.getAccounts()

    const fee = {
      amount: coins(12_500, "unibi"),
      gas: "500000",
    }

    const result = await signingClient.signAndBroadcast(
      sender,
      [
        {
          typeUrl: PERP_MSG_TYPE_URLS.MsgClosePosition,
          value: MsgClosePosition.fromPartial({
            pair,
            sender,
          }),
        },
      ],
      fee,
    )
    assertIsDeliverTxSuccess(result)

    const txLogs: TxLog[] = JSON.parse(result.rawLog!)
    expect(txLogs).toHaveLength(1)

    // perp tx close-position events
    assertHasMsgType("MsgClosePosition", txLogs[0].events)
    assertHasEventType("nibiru.perp.v1.PositionChangedEvent", txLogs[0].events)
    assertHasEventType("nibiru.vpool.v1.SwapOnVpoolEvent", txLogs[0].events)
    assertHasEventType("nibiru.vpool.v1.MarkPriceChangedEvent", txLogs[0].events)
    assertHasEventType("transfer", txLogs[0].events)
  })
})
