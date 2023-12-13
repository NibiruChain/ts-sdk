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
  Testnet,
  isRestEndptLive,
  newCoinMapFromCoins,
  queryChainIdWithRest,
  toSdkDec,
  Mainnet,
} from "../chain"
import { TEST_CHAIN } from "../testutil"
import { NibiruTxClient } from "../tx/txClient"

describe("chain/chain", () => {
  test("testnet rpc", async () => {
    const sgClient = await NibiruTxClient.connect(TEST_CHAIN.endptTm)
    const blockHeight = await sgClient.getHeight()
    expect(blockHeight).toBeDefined()
    expect(blockHeight).toBeGreaterThanOrEqual(0)
  })

  test("chain from chain-id", async () => {
    const chain = CustomChain.fromChainId(TEST_CHAIN.chainId)
    expect(chain.chainId).toEqual(TEST_CHAIN.chainId)
  })

  const expectCreatedChain = (
    result: CustomChain,
    prefix: string,
    num: number
  ) => {
    expect(result.chainId).toEqual(`nibiru-${prefix}-${num}`)
    expect(result.chainName).toEqual(`nibiru-${prefix}-${num}`)
    expect(result.endptGrpc).toEqual(`grpc.${prefix}-${num}.nibiru.fi`)
    expect(result.endptRest).toEqual(`https://lcd.${prefix}-${num}.nibiru.fi`)
    expect(result.endptTm).toEqual(`https://rpc.${prefix}-${num}.nibiru.fi`)
    expect(result.feeDenom).toEqual(`unibi`)
  }

  test("IncentivizedTestnet", async () => {
    const num = 1
    const result = Testnet(num)
    expectCreatedChain(result, "testnet", num)
  })

  test("Devnet", async () => {
    const num = 2
    const result = Devnet(num)
    expectCreatedChain(result, "devnet", num)
  })

  test("Mainnet", () => {
    const result = Mainnet()
    const shortName = "cataclysm"
    const number = 1
    expect(result.chainId).toEqual(`${shortName}-${number}`)
    expect(result.chainName).toEqual(`${shortName}-${number}`)
    expect(result.endptGrpc).toEqual(`grpc.nibiru.fi`)
    expect(result.endptRest).toEqual(`https://lcd.nibiru.fi`)
    expect(result.endptTm).toEqual(`https://rpc.nibiru.fi`)
    expect(result.feeDenom).toEqual(`unibi`)
  })

  test("queryChainIdWithRest", async () => {
    const chain = Devnet(2)
    const result = await queryChainIdWithRest(chain)
    expect(result.ok).toEqual("nibiru-devnet-2")
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
    const res = await queryChainIdWithRest(inactiveChain)
    expect(res.isErr()).toBeDefined()
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

  const fromSdkDecTests = () => {
    interface TestCase {
      name: string
      in: string
    }

    const tests: TestCase[] = [
      {
        name: "fromSdkDec number with decimal",
        in: "12345678.9987654321",
      },
      {
        name: "fromSdkDec NaN",
        in: "$$$",
      },
    ]

    test.each(tests)("%o", (tt) => {
      const res = fromSdkDec(tt.in)
      expect(res).toBe(0)
    })
  }

  const toSdkDecTests = () => {
    interface TestCase {
      name: string
      in: string
      expected: string
    }

    const tests: TestCase[] = [
      {
        name: "toSdkDec empty string",
        in: "",
        expected: "0",
      },
      {
        name: "toSdkDec negative zero",
        in: "-0",
        expected: "-0000000000000000000",
      },
      {
        name: "toSdkDec negative",
        in: "-",
        expected: "0",
      },
      {
        name: "toSdkDec NaN",
        in: "$$$",
        expected: "0",
      },
      {
        name: "toSdkDec multi-decimal",
        in: "1.1.1",
        expected: "0",
      },
      {
        name: "toSdkDec no leading zero",
        in: ".1",
        expected: "0",
      },
      {
        name: "toSdkDec why handling with bignumber is better",
        in: "0.232423423423423423434234234234234234234234234234234234234234231",
        expected: "0",
      },
    ]

    test.each(tests)("%o", (tt) => {
      const res = toSdkDec(tt.in)
      expect(res).toBe(tt.expected)
    })
  }

  toSdkDecTests()
  fromSdkDecTests()
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
})

test("custom assert fn", () => {
  expect(assert(false)).toEqual("AssertionError")
  const err = "useful error message"
  expect(assert(false, err)).toEqual(`AssertionError: ${err}`)
})
