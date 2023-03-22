import fetch from "cross-fetch"
import { BlockResponse } from "@cosmjs/tendermint-rpc"
import Long from "long"
import { newQueryCmd } from "../query"
import { TEST_CHAIN, validateBlock, validateBlockFromJsonRpc } from "./helpers"

const TEST_ADDRESS = "nibi1khwntys59nwxl906p8rl68ky3d5tzuk7hp4syc"

interface BlockResp {
  result: { block: any }
}

describe("connections", () => {
  test("query command is able to fetch latest block", async () => {
    const queryCmd = await newQueryCmd(TEST_CHAIN)
    const blockResp: BlockResponse = await queryCmd.tmClient.block()
    validateBlock(blockResp.block, TEST_CHAIN)
  })

  test("tendermint rpc url returns block with GET", async () => {
    const resp = await fetch(`${TEST_CHAIN.endptTm}/block`)
    const respJson = (await resp.json()) as BlockResp
    const blockJson = respJson.result.block
    validateBlockFromJsonRpc(blockJson)
  })

  test("tendermint rpc url returns block with POST", async () => {
    const body = { method: "block", id: 1 }
    const resp = await fetch(TEST_CHAIN.endptTm, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })
    const respJson = (await resp.json()) as BlockResp
    const blockJson = respJson.result.block
    validateBlockFromJsonRpc(blockJson)
  })
})

describe("x/bank queries", () => {
  test("query bank balance", async () => {
    const { client, disconnect } = await newQueryCmd(TEST_CHAIN)
    const balances = await client.bank.allBalances(TEST_ADDRESS)

    expect(balances.length).toBeGreaterThan(0)
    const amount: number = +balances[0].amount
    expect(amount).toBeGreaterThan(0)
    expect(balances[0].denom).not.toBe("")

    const balanceDenoms: string[] = balances.map((coin) => coin.denom)
    expect(balanceDenoms).toContain("unibi")
    disconnect()
  })
})

describe("x/spot queries", () => {
  test("query spot params", async () => {
    const { client, disconnect } = await newQueryCmd(TEST_CHAIN)
    const { params } = await client.spot.params()
    const fields: string[] = [
      "poolCreationFee",
      "startingPoolNumber",
      "whitelistedAsset",
    ]
    for (const field of fields) {
      expect(params).toHaveProperty(field)
    }
    expect(params?.whitelistedAsset.length).toBeGreaterThan(0)
    expect(params?.whitelistedAsset[0]).not.toBe("")
    disconnect()
  })
})

describe("x/vpool queries", () => {
  const timeoutMs = 8_000
  test(
    "query all pools",
    async () => {
      const { client: query } = await newQueryCmd(TEST_CHAIN)
      const queryResp = await query.vpool.allPools()
      expect(queryResp.pools.length).toBeGreaterThan(0)
      expect(queryResp.prices).toHaveLength(queryResp.pools.length)
    },
    timeoutMs,
  )

  test(
    "nibid query vpool prices",
    async () => {
      const { client: query } = await newQueryCmd(TEST_CHAIN)
      const { priceInQuoteDenom: basePrice } = await query.vpool.basePrice({
        pair: "ubtc:unusd",
        goLong: true,
        baseAssetAmount: 1_000,
      })
      expect(basePrice.length).toBeGreaterThan(0)
      expect(parseFloat(basePrice)).toBeGreaterThan(0)
    },
    timeoutMs,
  )
})

describe("x/perp queries", () => {
  test("perp params - client.perp.params", async () => {
    const { client, disconnect } = await newQueryCmd(TEST_CHAIN)
    const { params } = await client.perp.params()
    expect(params).not.toBeNull()
    const fields: string[] = [
      "stopped",
      "feePoolFeeRatio",
      "liquidationFeeRatio",
      "partialLiquidationRatio",
      "ecosystemFundFeeRatio",
      "twapLookbackWindow",
    ]
    for (const field of fields) {
      expect(params).toHaveProperty(field)
    }
    disconnect()
  })

  test("nibid query perp funding-rates", async () => {
    const { client, disconnect } = await newQueryCmd(TEST_CHAIN)
    const premiumFractions = await client.perp.premiumFractions({ pair: "ubtc:unusd" })
    expect(premiumFractions).not.toBeNull()
    disconnect()
  })

  test("nibid query perp metrics", async () => {
    const { client, disconnect } = await newQueryCmd(TEST_CHAIN)
    const { metrics } = await client.perp.metrics({ pair: "ubtc:unusd" })
    expect(metrics).not.toBeNull()
    const metricsAttrs = ["volumeQuote", "volumeBase", "netSize", "pair"]
    metricsAttrs.forEach((attr) => {
      expect(metrics).toHaveProperty(attr)
    })
    disconnect()
  })
})

describe("x/oracle queries", () => {
  test("query active oracles", async () => {
    const { client: query } = await newQueryCmd(TEST_CHAIN)
    const { actives } = await query.oracle.actives()
    expect(actives.length).toBeGreaterThan(0)
    expect(actives.length).toBeGreaterThan(0)
    const pair = actives[0]
    expect(pair).toContain(":")
  })

  test("query oracle params", async () => {
    const { client: query } = await newQueryCmd(TEST_CHAIN)
    const { params: moduleParams } = await query.oracle.params()
    expect(moduleParams).toBeDefined()
    expect(moduleParams!.whitelist.length).toBeGreaterThan(0)
  })

  test("query exchange rates", async () => {
    const { client: query } = await newQueryCmd(TEST_CHAIN)
    const exhangeRateMap = await query.oracle.exchangeRates()
    expect(Object.keys(exhangeRateMap).length).toBeGreaterThan(0)
    for (const pair in exhangeRateMap) {
      const exchangeRate = exhangeRateMap[pair]
      expect(exchangeRate).toBeDefined()
      expect(exchangeRate).toBeGreaterThan(0)
      break
    }
  })
})

describe("x/epochs queries", () => {
  const timeoutMs = 8_000

  test(
    "query epochs info and current epoch",
    async () => {
      const { client: query } = await newQueryCmd(TEST_CHAIN)
      const infoResp = await query.epochs.epochsInfo()
      expect(infoResp).toHaveProperty("epochs")
      expect(infoResp.epochs.length).toBeGreaterThan(0)

      const epochId = infoResp.epochs[0].identifier
      const currentEpochResp = await query.epochs.currentEpoch({ identifier: epochId })
      expect(Long.isLong(currentEpochResp.currentEpoch)).toBeTruthy()
    },
    timeoutMs,
  )
})

describe("x/staking module queries", () => {
  test("query bonded validators", async () => {
    const { client: query } = await newQueryCmd(TEST_CHAIN)
    const infoResp = await query.staking.validators("BOND_STATUS_BONDED")
    expect(infoResp).toHaveProperty("validators")
    expect(infoResp.validators.length).toBeGreaterThan(0)
  })
})

describe("distribution module queries", () => {
  test("distribution params", async () => {
    const { client: query } = await newQueryCmd(TEST_CHAIN)
    const resp = await query.distribution.params()
    const { params } = resp
    expect(params).toBeDefined()
    const properties: string[] = [
      "communityTax",
      "baseProposerReward",
      "bonusProposerReward",
      "withdrawAddrEnabled",
    ]
    properties.forEach((prop) => {
      expect(params).toHaveProperty(prop)
    })
  })
})

describe("gov module queries", () => {
  test("gov params", async () => {
    const { client: query } = await newQueryCmd(TEST_CHAIN)
    const resp = await query.gov.params("voting")
    const { votingParams } = resp
    expect(votingParams).toBeDefined()
    const properties: string[] = ["votingPeriod"]
    properties.forEach((prop) => {
      expect(votingParams).toHaveProperty(prop)
    })
  })
})
