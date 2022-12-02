import { DeliverTxResponse, assertIsDeliverTxSuccess } from "@cosmjs/stargate"
import {
  Chain,
  CoinMap,
  event2KeyValue,
  IEventLog,
  newCoinMapFromCoins,
  newCoins,
  useFaucet,
  WalletHD,
} from "../chain"
import { newQueryCmd, waitForBlockHeight, waitForNextBlock } from "../query"
import { newRandomWallet, newSignerFromMnemonic } from "../tx"
import { ISdk, newSdk } from "../sdk"
import { Msg } from "../msg"
import { expectTxToSucceed, prettyTmLogs, TEST_CHAIN, TxLog } from "./helpers"

const chain: Chain = TEST_CHAIN

test("faucet utility works", async () => {
  const setupFaucetTest = async (): Promise<{
    toAddr: string
    blockHeight: number
    walletSdk: ISdk
  }> => {
    const wallet: WalletHD = await newRandomWallet()
    const [{ address: toAddr }] = await wallet.getAccounts()
    const valMnemonic = process.env.VALIDATOR_MNEMONIC
    expect(valMnemonic).toBeDefined()

    const signer = await newSignerFromMnemonic(valMnemonic!)
    const sdk = await newSdk(chain, signer)
    const [{ address: fromAddr }] = await signer.getAccounts()
    await waitForNextBlock(chain)
    const txResp: DeliverTxResponse = await sdk.tx.signAndBroadcast(
      Msg.bank.Send(fromAddr, toAddr, newCoins(5, "unibi")),
    )
    expect(txResp).not.toBeNull()
    assertIsDeliverTxSuccess(txResp)

    const walletSdk = await newSdk(chain, wallet)
    return { toAddr, blockHeight: txResp.height, walletSdk }
  }

  const {
    toAddr: address,
    blockHeight: setupBlockHeight,
    walletSdk,
  } = await setupFaucetTest()

  const queryCmd = await newQueryCmd(chain)

  const expectFaucetRequestSucceeds = async (): Promise<CoinMap> => {
    await waitForBlockHeight({ chain, height: setupBlockHeight + 1 })
    const balancesStart = newCoinMapFromCoins(
      await queryCmd.client.bank.allBalances(address),
    )
    const faucetResp = await useFaucet({
      address,
      faucetUrl: "https://faucet.devnet-2.nibiru.fi/", // default "https://faucet.testnet-1.nibiru.fi/"
    })
    if (!faucetResp.ok) {
      console.debug(`useFaucet failed with response ${await faucetResp.text()}`)
    }
    expect(faucetResp.ok).toBeTruthy()
    return balancesStart
  }

  const expectedBalances = { unusd: 100 * 1_000_000, unibi: 10 * 1_000_000 }

  const expectBalancesToIncreaseByFaucetAmt = async (balancesStart: CoinMap) => {
    await waitForNextBlock(chain)
    const balances = newCoinMapFromCoins(
      await queryCmd.client.bank.allBalances(address),
    )
    // Expect to receive 10 NIBI and 100 NUSD
    if (balances.unusd === undefined) balances.unusd = 0
    if (balances.unibi === undefined) balances.unibi = 0
    expect(balances.unusd - (balancesStart.unusd ?? 0)).toEqual(expectedBalances.unusd)
    expect(balances.unibi - (balancesStart.unibi ?? 0)).toEqual(expectedBalances.unibi)
  }

  const balancesStart = await expectFaucetRequestSucceeds()
  await expectBalancesToIncreaseByFaucetAmt(balancesStart)

  // cleanup
  const cleanupResp: DeliverTxResponse = await walletSdk.tx.signAndBroadcast(
    Msg.bank.Send(
      address,
      "nibi10gm4kys9yyrlqpvj05vqvjwvje87gln8nsm8wa",
      newCoins(expectedBalances.unusd, "unusd"),
    ),
    Msg.bank.Send(
      address,
      "nibi10gm4kys9yyrlqpvj05vqvjwvje87gln8nsm8wa",
      newCoins(expectedBalances.unibi * 0.95, "unibi"),
    ),
  )
  expect(cleanupResp).not.toBeNull()
  if (cleanupResp.rawLog) {
    const txLogs: TxLog[] = JSON.parse(prettyTmLogs(cleanupResp.rawLog))
    console.info(
      "txResp events: \n%o",
      txLogs[0].events.map((event: IEventLog) => event2KeyValue(event)),
    )
  }
  expectTxToSucceed(cleanupResp)
}, 60_000) // 60 seconds
