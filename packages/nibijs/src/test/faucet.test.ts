import { assertIsDeliverTxSuccess, DeliverTxResponse } from "@cosmjs/stargate"
import { newCoinMapFromCoins, newCoins, useFaucet, WalletHD } from "../chain"
import {
  newRandomWallet,
  newSignerFromMnemonic,
  NibiruSigningClient,
} from "../tx"
import { TEST_CHAIN, TEST_MNEMONIC } from "./helpers"

test("faucet utility works", async () => {
  const wallet: WalletHD = await newRandomWallet()
  const [{ address: toAddr }] = await wallet.getAccounts()

  const validator = await newSignerFromMnemonic(TEST_MNEMONIC)
  const signingClient = await NibiruSigningClient.connectWithSigner(
    TEST_CHAIN.endptTm,
    validator
  )
  const [{ address: fromAddr }] = await validator.getAccounts()
  await signingClient.waitForNextBlock()
  const txResp: DeliverTxResponse = await signingClient.sendTokens(
    fromAddr,
    toAddr,
    newCoins(100, "unibi"),
    "auto"
  )
  assertIsDeliverTxSuccess(txResp)

  const balancesStart = newCoinMapFromCoins(
    await signingClient.getAllBalances(toAddr)
  )
  const faucetResp = await useFaucet({
    address: toAddr,
    chain: TEST_CHAIN,
  })
  expect(faucetResp.ok).toBeTruthy()

  const balancesEnd = newCoinMapFromCoins(
    await signingClient.getAllBalances(toAddr)
  )
  expect(balancesEnd.unusd - balancesStart.unusd).toEqual(100 * 1e6)
  expect(balancesEnd.unibi - balancesStart.unibi).toEqual(11 * 1e6)
}, 60_000) // 60 seconds
