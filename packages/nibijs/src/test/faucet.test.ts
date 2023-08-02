import { assertIsDeliverTxSuccess, DeliverTxResponse } from "@cosmjs/stargate"
import {
  Chain,
  faucetUrlFromChain,
  newCoinMapFromCoins,
  newCoins,
  useFaucet,
  WalletHD,
} from "../chain"
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
    chainId: "prefix-shortName-1",
    chainName: "",
    feeDenom: "",
  }

  const address = "0x1234567890"
  const expectedUrl = "https://faucet.shortName-1.nibiru.fi/"
  const mockedFetch = jest.fn(
    () =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      }) as unknown as Promise<Response>
  )
  window.fetch = mockedFetch

  test("should request funds from faucet with default amounts", async () => {
    await useFaucet({ address, chain })

    const expectedCoins = ["11000000unibi", "100000000unusd", "100000000uusdt"]

    expect(mockedFetch).toHaveBeenCalledWith(expectedUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address, coins: expectedCoins }),
    })
  })

  test("should request funds from faucet with custom amounts", async () => {
    const amts = { nibi: 5, nusd: 50, usdt: 50 }
    await useFaucet({ address, chain, amts })

    const expectedCoins = ["5000000unibi", "50000000unusd", "50000000uusdt"]

    expect(mockedFetch).toHaveBeenCalledWith(expectedUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address, coins: expectedCoins }),
    })
  })

  test("should throw an error if fetch fails", async () => {
    const errorMessage = "Failed to fetch"
    const mockedFetchError = jest
      .fn()
      .mockImplementationOnce(() => Promise.reject(new Error(errorMessage)))
    window.fetch = mockedFetchError

    await expect(useFaucet({ address, chain })).rejects.toThrow(errorMessage)
    expect(mockedFetchError).toHaveBeenCalledTimes(1)
  })

  test("faucetUrlFromChain helper func should construct faucet URL from chain object", () => {
    expect(
      faucetUrlFromChain({
        endptTm: "",
        endptRest: "",
        endptGrpc: "",
        chainId: "prefix-shortName-1",
        chainName: "",
        feeDenom: "",
      })
    ).toBe(expectedUrl)
  })
})
