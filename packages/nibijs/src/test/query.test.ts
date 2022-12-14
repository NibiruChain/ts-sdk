import fetch from "cross-fetch"
import { BlockResponse } from "@cosmjs/tendermint-rpc"
import Long from "long"
import { Chain, Testnet, CHAOSNET_CONFIG } from "../chain"
import { newQueryCmd } from "../query"
import { TEST_CHAIN, validateBlock, validateBlockFromJsonRpc } from "./helpers"

require("dotenv").config() // yarn add -D dotenv

const chain = TEST_CHAIN
const VAL_ADDRESS = process.env.VALIDATOR_ADDRESS

describe("chain connections", () => {
  const testChainConnection = async (chain: Chain) => {
    const queryCmd = await newQueryCmd(chain)
    const blockHeight = 5
    const blockResp: BlockResponse = await queryCmd.tmClient.block(blockHeight)
    validateBlock(blockResp.block, chain)
  }
  test("testnet", async () => {
    testChainConnection(Testnet)
  })
  test("chaosnet", async () => {
    // testChainConnection(Chaosnet) // chaosnet is not activate right now.
  })
})

describe("test node connection", () => {
  const { host } = CHAOSNET_CONFIG
  test("chaosnet has environment variables configured", () => {
    expect(VAL_ADDRESS).toBeDefined()
    expect(host).toBeDefined()
    expect(CHAOSNET_CONFIG.tmPort).toBeDefined()
  })

  interface BlockResp {
    result: { block: any }
  }

  test("query block with get", async () => {
    const resp = await fetch(`${chain.endptTm}/block?height=5`)
    const respJson = (await resp.json()) as BlockResp
    const blockJson = respJson.result.block
    validateBlockFromJsonRpc(blockJson)
  })

  test("query block with post", async () => {
    const body = { method: "block", params: ["5"], id: 1 }
    const resp = await fetch(chain.endptTm, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })
    const respJson = (await resp.json()) as BlockResp
    const blockJson = respJson.result.block
    validateBlockFromJsonRpc(blockJson)
  })
})

describe("test query module", () => {
  test("has environment variables configured", () => {
    expect(VAL_ADDRESS).toBeDefined()
  })

  test("query bank balances - client.bank.allBalances", async () => {
    const { client: query, disconnect } = await newQueryCmd(chain)
    if (!VAL_ADDRESS) {
      throw Error("VAL_ADDRESS is not set in the .env")
    }
    const balances = await query.bank.allBalances(VAL_ADDRESS ?? "")
    console.info("balances: %o", balances)
    expect(balances.length).toBeGreaterThan(0)
    const amount: number = +balances[0].amount
    expect(amount).toBeGreaterThan(0)
    expect(balances[0].denom).not.toBe("")

    const balanceDenoms: string[] = balances.map((coin) => coin.denom)
    expect(balanceDenoms).toContain("unibi")
    disconnect()
  })
})

describe("nibid query dex", () => {
  test("query dex params - client.dex.params", async () => {
    const { client, disconnect } = await newQueryCmd(chain)
    const { params } = await client.dex.params()
    console.info("dex.params: %o", params)
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

describe("nibid query perp", () => {
  test("perp params - client.perp.params", async () => {
    const { client, disconnect } = await newQueryCmd(chain)
    const { params } = await client.perp.params()
    console.info("perp.params: %o", JSON.stringify(params))
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
    const { client, disconnect } = await newQueryCmd(chain)
    const premiumFractions = await client.perp.premiumFractions({ pair: "ubtc:unusd" })
    console.info("perp premiumFractions: %o", JSON.stringify(premiumFractions))
    expect(premiumFractions).not.toBeNull()
    disconnect()
  })

  test("nibid query perp metrics", async () => {
    const { client, disconnect } = await newQueryCmd(chain)
    const { metrics } = await client.perp.metrics({ pair: "ubtc:unusd" })
    console.info("perp metrics: %o", JSON.stringify(metrics))
    expect(metrics).not.toBeNull()
    const metricsAttrs = ["volumeQuote", "volumeBase", "netSize", "pair"]
    metricsAttrs.forEach((attr) => {
      expect(metrics).toHaveProperty(attr)
    })
    disconnect()
  })
})

describe("nibid query vpool", () => {
  const timeoutMs = 8_000
  test(
    "nibid query vpool all-pools",
    async () => {
      const { client: query } = await newQueryCmd(chain)
      const queryResp = await query.vpool.allPools()
      expect(queryResp.pools.length).toBeGreaterThan(0)
      expect(queryResp.prices).toHaveLength(queryResp.pools.length)
      console.info("query vpool all-pools: %o", queryResp)
    },
    timeoutMs,
  )

  test(
    "nibid query vpool prices",
    async () => {
      const { client: query } = await newQueryCmd(chain)
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

describe("nibid query pricefeed", () => {
  const pairId = "ubtc:unusd"

  test("nibid query pricefeed markets", async () => {
    const { client: query } = await newQueryCmd(chain)
    const { markets } = await query.pricefeed.markets()
    expect(markets.length).toBeGreaterThan(0)
    expect(markets[0].oracles.length).toBeGreaterThan(0)
    expect(markets[0].active).toBeTruthy()
    console.info("query pricefeed markets: %o", markets.slice(0, 2))
  })

  test("nibid query pricefeed params", async () => {
    const { client: query } = await newQueryCmd(chain)
    const { params: moduleParams } = await query.pricefeed.params()
    expect(moduleParams).toBeDefined()
    expect(moduleParams!.pairs.length).toBeGreaterThan(0)
    console.info("nibid query pricefeed params: %o", moduleParams)
  })

  test("nibid query pricefeed price", async () => {
    const { client: query } = await newQueryCmd(chain)
    const { price } = await query.pricefeed.price({ pairId })
    expect(price).toBeDefined()
    for (const field of ["pairId", "price", "twap"]) {
      expect(price).toHaveProperty(field)
    }
    console.info("nibid query pricefeed price: %o", price)
  })

  test("nibid query pricefeed prices", async () => {
    const { client: query } = await newQueryCmd(chain)
    const { prices } = await query.pricefeed.prices()
    expect(prices).toBeDefined()
    expect(prices.length).toBeGreaterThan(0)
    console.info("nibid query pricefeed prices: %o", prices)
  })

  test("nibid query pricefeed raw-prices", async () => {
    const { client: query } = await newQueryCmd(chain)
    const resp = await query.pricefeed.pricesRaw({ pairId })
    const { rawPrices } = resp
    expect(rawPrices).toBeDefined()
    console.info("nibid query pricefeed raw-prices: %o", rawPrices)
  })
})

describe("epochs module queries", () => {
  const timeoutMs = 8_000

  test(
    "nibid query epochs epochs-info && nibid query epochs current-epoch",
    async () => {
      const { client: query } = await newQueryCmd(chain)
      const infoResp = await query.epochs.epochsInfo()
      expect(infoResp).toHaveProperty("epochs")
      expect(infoResp.epochs.length).toBeGreaterThan(0)
      console.info("query epochs epochs-info: %o", infoResp)

      const epochId = infoResp.epochs[0].identifier
      const currentEpochResp = await query.epochs.currentEpoch({ identifier: epochId })
      expect(Long.isLong(currentEpochResp.currentEpoch)).toBeTruthy()
    },
    timeoutMs,
  )
})
