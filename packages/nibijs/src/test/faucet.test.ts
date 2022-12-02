import { DeliverTxResponse, assertIsDeliverTxSuccess } from "@cosmjs/stargate"
import {
  Chain,
  CoinMap,
  newCoinMapFromCoins,
  newCoins,
  Testnet,
  useFaucet,
  WalletHD,
} from "../chain"
import { newQueryCmd, waitForBlockHeight, waitForNextBlock } from "../query"
import { newRandomWallet, newSignerFromMnemonic } from "../tx"
import { ISdk, newSdk } from "../sdk"
import { Msg } from "../msg"

test("faucet utility works", async () => {
  const chain: Chain = Testnet

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
    const sdk = await newSdk(Testnet, signer)
    const [{ address: fromAddr }] = await signer.getAccounts()
    await waitForNextBlock(chain)
    const txResp: DeliverTxResponse = await sdk.tx.signAndBroadcast(
      Msg.bank.Send(fromAddr, toAddr, newCoins(5, "unibi")),
    )
    expect(txResp).not.toBeNull()
    assertIsDeliverTxSuccess(txResp)

    const walletSdk = await newSdk(Testnet, wallet)
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

  const expectBalancesToIncreaseByFaucetAmt = async (balancesStart: CoinMap) => {
    await waitForNextBlock(chain)
    const balances = newCoinMapFromCoins(
      await queryCmd.client.bank.allBalances(address),
    )
    // Expect to receive 10 NIBI and 100 NUSD
    if (balances.unusd === undefined) balances.unusd = 0
    if (balances.unibi === undefined) balances.unibi = 0
    expect(balances.unusd - (balancesStart.unusd ?? 0)).toEqual(100 * 1_000_000)
    expect(balances.unibi - (balancesStart.unibi ?? 0)).toEqual(10 * 1_000_000)
  }

  const balancesStart = await expectFaucetRequestSucceeds()
  await expectBalancesToIncreaseByFaucetAmt(balancesStart)

  // cleanup
  const cleanupResp: DeliverTxResponse = await walletSdk.tx.signAndBroadcast(
    Msg.bank.Send(
      address,
      "nibi10gm4kys9yyrlqpvj05vqvjwvje87gln8nsm8wa",
      newCoins(100_000 * 1_000_000, "unusd"),
    ),
    Msg.bank.Send(
      address,
      "nibi10gm4kys9yyrlqpvj05vqvjwvje87gln8nsm8wa",
      newCoins(9.9 * 1_000_000, "unibi"),
    ),
  )
  expect(cleanupResp).not.toBeNull()
  console.info("cleanupResp (txHash): %s", cleanupResp.rawLog)
  assertIsDeliverTxSuccess(cleanupResp)
}, 60_000) // 60 seconds
