import { SigningStargateClient } from "@cosmjs/stargate"
import {
  Chain,
  Coin,
  CoinMap,
  isRestEndptLive,
  isRestEndptValid,
  newCoin,
  newCoinMapFromCoins,
  queryChainIdWithRest,
  Testnet,
  useFaucet,
} from "./chain"
import { initQueryCmd } from "./query/query"

describe("chain connections", () => {
  const chain: Chain = Testnet
  test("testnet rpc", async () => {
    const sgClient = await SigningStargateClient.connect(chain.endptTm)
    const blockHeight = await sgClient.getHeight()
    expect(blockHeight).toBeDefined()
    expect(blockHeight).toBeGreaterThanOrEqual(0)
  })
  test("testnet lcd/rest", async () => {
    const [chainId, err] = await queryChainIdWithRest(chain)
    expect(chainId).toBeDefined()
    expect(chainId).toEqual(chain.chainId)
    expect(err).toBeUndefined()
  })
  test("testnet lcd/rest endpoint validation functions", async () => {
    expect(await isRestEndptLive(chain)).toBeTruthy()
    expect(await isRestEndptValid(chain)).toBeTruthy()
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
    expect(chainId).toBeUndefined()
    expect(err).toBeDefined()
    expect(await isRestEndptLive(inactiveChain)).toBeFalsy()
    expect(await isRestEndptValid(inactiveChain)).toBeFalsy()
  })
})

test("faucet utility works", async () => {
  const address = "nibi1ah8gqrtjllhc5ld4rxgl4uglvwl93ag0sh6e6v"
  const chain = Testnet
  const queryCmd = await initQueryCmd(chain)
  const balancesStart = newCoinMapFromCoins(
    await queryCmd.client.bank.allBalances(address),
  )
  await useFaucet(address)
  const balances = newCoinMapFromCoins(await queryCmd.client.bank.allBalances(address))
  // Expect to receive 10 NIBI and 100_000 NUSD
  expect(balances["unusd"] - balancesStart["unusd"]).toEqual(100_000 * 1_000_000)
  expect(balances["unibi"] - balancesStart["unibi"]).toEqual(10 * 1_000_000)
}, 30_000) // 30 seconds

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
    expect(coins).not.toHaveProperty("unibi", 42.42)
    expect(coins).toHaveProperty("uatom", 42)
  })
})
