import { SigningStargateClient } from "@cosmjs/stargate"
import { Coin, coin } from "@cosmjs/proto-signing"
import {
  assert,
  Chain,
  CoinMap,
  CustomChain,
  fromSdkInt,
  go,
  isRestEndptLive,
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

  test("chain from chain-id", async () => {
    const chain = CustomChain.fromChainId(TEST_CHAIN.chainId)
    expect(chain.chainId).toEqual(TEST_CHAIN.chainId)
  })

  test("inactive chain validation cases", async () => {
    const inactiveChain: Chain = {
      endptTm: "",
      endptRest: "",
      endptGrpc: "",
      chainId: "chain-id",
      chainName: "inactive-chain",
      feeDenom: "unibi",
    }
    const [chainId, err] = await queryChainIdWithRest(inactiveChain)
    expect(err).toBeDefined()
    expect(chainId).toEqual("")
    await expect(isRestEndptLive(inactiveChain)).resolves.toBeFalsy()
  })
})

describe("chain/parse", () => {
  test("fromSdkInt", () => {
    const result = fromSdkInt("123456789.987654321")

    expect(result).toEqual(123456789)
  })
})

describe("chain/types", () => {
  const coinsIn: Coin[] = [
    coin(10, "unusd"),
    coin(50, "unibi"),
    { amount: "42.42", denom: "uatom" },
    { amount: "16800456610195729831", denom: "nibiru/pool/2" },
    { denom: "unibi2", amount: "21519262" },
  ]

  test("coin map fns", () => {
    const coins: CoinMap = newCoinMapFromCoins(coinsIn)
    expect(coins.unusd.toString()).toBe("10")
    expect(coins.unibi.toString()).toBe("50")
    expect(coins.uatom.toString()).toBe("42.42")
    expect(coins.unibi2.toString()).toBe("21519262")
    expect(coins["nibiru/pool/2"].toString()).toBe("16800456610195729831")
  })

  test("go", async () => {
    const error = Error("Failure")
    const result = await go(
      new Promise((_resolve, reject) => {
        reject(error)
      })
    )
    expect(result.err).toEqual(error.message)
    expect(result.res).toBeUndefined()
  })
})

test("custom assert fn", () => {
  expect(() => assert(false)).toThrow()
  const err = "useful error message"
  expect(() => assert(false, err)).toThrow(err)
})
