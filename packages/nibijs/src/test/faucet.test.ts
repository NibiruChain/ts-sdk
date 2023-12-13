import { assertIsDeliverTxSuccess, DeliverTxResponse } from "@cosmjs/stargate"
import { coins } from "@cosmjs/proto-signing"
import { fetch } from "cross-fetch"
import {
  Chain,
  faucetUrlFromChain,
  newCoinMapFromCoins,
  useFaucet,
} from "../chain"
import { newRandomWallet, newSignerFromMnemonic, NibiruTxClient } from "../tx"
import { TEST_CHAIN, TEST_MNEMONIC } from "../testutil"

jest.mock("cross-fetch", () => ({
  fetch: jest.fn().mockImplementation(() => ({ catch: jest.fn() })),
}))

// We can't create a test token even with faked recaptcha site
// and secret tokens. This not only would require a setup to generate
// a token from the UI, but to also create a fake backend
// recaptcha check with a test secret.
// In this case, this test can be skipped and checked it manually.
// eslint-disable-next-line jest/no-disabled-tests
test.skip("faucet utility works", async () => {
  const wallet = await newRandomWallet()
  const [{ address: toAddr }] = await wallet.getAccounts()

  const validator = await newSignerFromMnemonic(TEST_MNEMONIC)
  const txClient = await NibiruTxClient.connectWithSigner(
    TEST_CHAIN.endptTm,
    validator
  )
  const [{ address: fromAddr }] = await validator.getAccounts()
  await txClient.waitForNextBlock()
  const txResp: DeliverTxResponse = await txClient.sendTokens(
    fromAddr,
    toAddr,
    coins(100, "unibi"),
    "auto"
  )
  assertIsDeliverTxSuccess(txResp)

  const balancesStart = newCoinMapFromCoins(
    await txClient.getAllBalances(toAddr)
  )
  const faucetResp = await useFaucet({
    address: toAddr,
    chain: TEST_CHAIN,
    grecaptcha: "",
  })
  expect(faucetResp?.ok).toBeTruthy()

  const balancesEnd = newCoinMapFromCoins(await txClient.getAllBalances(toAddr))
  expect(
    balancesEnd.unusd.minus(balancesStart.unusd).eq(100 * 1e6)
  ).toBeTruthy()
  expect(balancesEnd.unibi.minus(balancesStart.unibi).eq(11 * 1e6)).toBeTruthy()
}, 60_000) // 60 seconds

describe("useFaucet", () => {
  const chain: Chain = {
    endptTm: "",
    endptRest: "",
    endptGrpc: "",
    chainId: "nibiru-testnet-1",
    chainName: "",
    feeDenom: "",
  }

  const grecaptcha = "TEST_GRECAPTCHA_TOKEN"
  const address = "0x1234567890"
  const expectedUrl = "https://faucet.testnet-1.nibiru.fi/"

  test("should request funds from faucet with default amounts", async () => {
    await useFaucet({ address, chain, grecaptcha })

    const expectedCoins = ["11000000unibi", "100000000unusd", "100000000uusdt"]

    expect(fetch).toHaveBeenCalledWith(expectedUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address, coins: expectedCoins, grecaptcha }),
    })
  })

  test("should request funds from faucet with custom amounts", async () => {
    const amts = { nibi: 5, nusd: 50, usdt: 50 }
    await useFaucet({ address, chain, amts, grecaptcha })

    const expectedCoins = ["5000000unibi", "50000000unusd", "50000000uusdt"]

    expect(fetch).toHaveBeenCalledWith(expectedUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address, coins: expectedCoins, grecaptcha }),
    })
  })

  test("should return undefined if fetch fails", async () => {
    const errorMessage = "Failed to fetch"

    jest.mock("cross-fetch", () => ({
      fetch: jest.fn().mockRejectedValueOnce(new Error(errorMessage)),
    }))

    expect(await useFaucet({ address, chain, grecaptcha })).toEqual(undefined)
  })

  test("faucetUrlFromChain helper func should construct faucet URL from chain object", () => {
    expect(
      faucetUrlFromChain({
        endptTm: "",
        endptRest: "",
        endptGrpc: "",
        chainId: "nibiru-testnet-1",
        chainName: "",
        feeDenom: "",
      })
    ).toBe(expectedUrl)
  })
})
