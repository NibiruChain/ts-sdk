import { SigningStargateClient } from "@cosmjs/stargate"
import { Coin, coin } from "@cosmjs/proto-signing"
import {
  assert,
  Chain,
  chainToParts,
  CoinMap,
  CustomChain,
  Devnet,
  fromSdkDec,
  fromSdkInt,
  go,
  IncentivizedTestnet,
  isRestEndptLive,
  newCoinMapFromCoins,
  queryChainIdWithRest,
  toSdkDec,
} from "../chain"
import { TEST_CHAIN } from "./helpers"

describe("chain/chain", () => {
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

  test("IncentivizedTestnet", async () => {
    const result = IncentivizedTestnet(1)
    expect(result.chainId).toEqual("nibiru-itn-1")
    expect(result.chainName).toEqual("nibiru-itn-1")
    expect(result.endptGrpc).toEqual("grpc.itn-1.nibiru.fi")
    expect(result.endptRest).toEqual("https://lcd.itn-1.nibiru.fi")
    expect(result.endptTm).toEqual("https://rpc.itn-1.nibiru.fi")
    expect(result.feeDenom).toEqual("unibi")
  })

  test("Devnet", async () => {
    const result = Devnet(1)
    expect(result.chainId).toEqual("nibiru-devnet-1")
    expect(result.chainName).toEqual("nibiru-devnet-1")
    expect(result.endptGrpc).toEqual("grpc.devnet-1.nibiru.fi")
    expect(result.endptRest).toEqual("https://lcd.devnet-1.nibiru.fi")
    expect(result.endptTm).toEqual("https://rpc.devnet-1.nibiru.fi")
    expect(result.feeDenom).toEqual("unibi")
  })

  test("queryChainIdWithRest", async () => {
    const chain = Devnet(2)
    const result = await queryChainIdWithRest(chain)
    expect(result).toEqual(["nibiru-devnet-2", undefined])
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

  test("chainToParts", () => {
    const chain = Devnet(2)
    const result = chainToParts(chain)
    expect(result).toEqual({ prefix: "nibiru", shortName: "devnet", number: 2 })
  })
})

describe("chain/parse", () => {
  test("fromSdkInt", () => {
    const result = fromSdkInt("123456789.987654321")

    expect(result).toEqual(123456789)
  })

  test("fromSdkDec number with decimal", () => {
    expect(fromSdkDec("12345678.9987654321")).toEqual(0)
  })

  test("fromSdkDec NaN", () => {
    expect(fromSdkDec("$$$")).toEqual(0)
  })

  test("toSdkDec empty string", () => {
    expect(toSdkDec("")).toEqual("0")
  })

  test("toSdkDec negative zero", () => {
    expect(toSdkDec("-0")).toEqual("-0000000000000000000")
  })

  test("toSdkDec negative", () => {
    expect(toSdkDec("-")).toEqual("0")
  })

  test("toSdkDec NaN", () => {
    expect(toSdkDec("$$$")).toEqual("0")
  })

  test("toSdkDec multi-decimal", () => {
    expect(toSdkDec("1.1.1")).toEqual("0")
  })

  test("toSdkDec no leading zero", () => {
    expect(toSdkDec(".1")).toEqual("0")
  })

  test("toSdkDec why handling with bignumber is better", () => {
    expect(
      toSdkDec(
        "0.232423423423423423434234234234234234234234234234234234234234231"
      )
    ).toEqual("0")
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
    const result = await go(Promise.reject(error))
    expect(result.err).toEqual(error.message)
    expect(result.res).toBeUndefined()
  })
})

test("custom assert fn", () => {
  expect(() => assert(false)).toThrow()
  const err = "useful error message"
  expect(() => assert(false, err)).toThrow(err)
})
