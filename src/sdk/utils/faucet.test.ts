import { fetch } from "cross-fetch"
import {
  Chain,
  faucetUrlFromChain,
  useFaucet,
  newRandomWallet,
  Localnet,
} from ".."

jest.mock("cross-fetch", () => ({
  fetch: jest.fn().mockImplementation(() => ({ catch: jest.fn() })),
}))

test("faucet utility works", async () => {
  const response = { ok: true } as Response
  ;(fetch as jest.Mock).mockResolvedValueOnce(response)

  const wallet = await newRandomWallet()
  const [{ address }] = await wallet.getAccounts()
  const faucetResp = await useFaucet({
    address,
    chain: Localnet,
    grecaptcha: "",
  })

  expect(faucetResp).toBe(response)
  expect(fetch).toHaveBeenCalledWith(
    "https://faucet.localnet-0.nibiru.fi/",
    expect.objectContaining({
      method: "POST",
      body: JSON.stringify({
        address,
        coins: ["10000000unibi"],
        grecaptcha: "",
      }),
    })
  )
})

describe("useFaucet", () => {
  const chain: Chain = {
    endptTm: "",
    endptRest: "",
    endptGrpc: "",
    endptHm: "",
    endptWs: "",
    chainId: "nibiru-testnet-2",
    chainName: "",
    feeDenom: "",
  }

  const grecaptcha = "TEST_GRECAPTCHA_TOKEN"
  const address = "0x1234567890"
  const expectedUrl = "https://faucet.testnet-2.nibiru.fi/"

  test("should request funds from faucet with default amounts", async () => {
    await useFaucet({ address, chain, grecaptcha })

    const expectedCoins = ["10000000unibi"]

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
    await useFaucet({ address, chain, grecaptcha })

    const expectedCoins = ["10000000unibi"]

    expect(fetch).toHaveBeenCalledWith(expectedUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address, coins: expectedCoins, grecaptcha }),
    })
  })

  test("faucetUrlFromChain helper func should construct faucet URL from chain object", () => {
    expect(
      faucetUrlFromChain({
        endptTm: "",
        endptRest: "",
        endptGrpc: "",
        endptHm: "",
        endptWs: "",
        chainId: "nibiru-testnet-2",
        chainName: "",
        feeDenom: "",
      })
    ).toBe(expectedUrl)
  })

  test("faucetUrlFromChain - chain includes cataclysm", () => {
    const result = faucetUrlFromChain({
      endptTm: "",
      endptRest: "",
      endptGrpc: "",
      endptHm: "",
      endptWs: "",
      chainId: "",
      chainName: "cataclysm",
      feeDenom: "",
    })
    expect(result).toEqual(`https://faucet.nibiru.fi/`)
  })
})
