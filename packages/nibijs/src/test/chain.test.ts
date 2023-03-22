import { SigningStargateClient } from "@cosmjs/stargate"
import {
  assert,
  Chain,
  Coin,
  CoinMap,
  isRestEndptLive,
  isRestEndptValid,
  newCoin,
  newCoinMapFromCoins,
  queryChainIdWithRest,
} from "../chain"
import { TEST_CHAIN } from "./helpers"

describe("chain connections", () => {
  test("testnet rpc", async () => {
    const sgClient = await SigningStargateClient.connect(TEST_CHAIN.endptTm)
    const blockHeight = await sgClient.getHeight()
    expect(blockHeight).toBeDefined()
    expect(blockHeight).toBeGreaterThanOrEqual(0)
  })
  test("testnet lcd/rest", async () => {
    const [chainId, err] = await queryChainIdWithRest(TEST_CHAIN)
    expect(chainId).toBeDefined()
    expect(chainId).toEqual(TEST_CHAIN.chainId)
    expect(err).toBeUndefined()
  })
  test("testnet lcd/rest endpoint validation functions", async () => {
    await expect(isRestEndptLive(TEST_CHAIN)).resolves.toBeTruthy()
    await expect(isRestEndptValid(TEST_CHAIN)).resolves.toBeTruthy()
  })
  test("inactive chain validation cases", async () => {
    const inactiveChain: Chain = {
      endptTm: "",
      endptRest: "",
      chainId: "chain-id",
      chainName: "inactive-chain",
      feeDenom: "unibi",
    }
    const [chainId, err] = await queryChainIdWithRest(inactiveChain)
    expect(err).toBeDefined()
    expect(chainId).toEqual("")
    await expect(isRestEndptLive(inactiveChain)).resolves.toBeFalsy()
    await expect(isRestEndptValid(inactiveChain)).resolves.toBeFalsy()
  })
})

describe("chain/types", () => {
  const coinsIn: Coin[] = [
    newCoin(10, "unusd"),
    newCoin(50, "unibi"),
    { amount: "42.42", denom: "uatom" },
  ]
  test("coin map fns", () => {
    const coins: CoinMap = newCoinMapFromCoins(coinsIn)
    expect(coins).toHaveProperty("unusd", 10)
    expect(coins).toHaveProperty("unibi", 50)
    expect(coins).toHaveProperty("uatom", 42)
  })
})

test("custom assert fn", () => {
  expect(() => assert(false)).toThrow()
  const err = "useful error message"
  expect(() => assert(false, err)).toThrow(err)
})
