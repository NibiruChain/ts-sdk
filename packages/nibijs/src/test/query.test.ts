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

describe("nibid query spot", () => {
  test("query spot params - client.spot.params", async () => {
    const { client, disconnect } = await newQueryCmd(chain)
    const { params } = await client.spot.params()
    console.info("spot.params: %o", params)
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

describe("nibid query oracle", () => {
  const pairId = "ubtc:unusd"

  test("nibid query oracle actives", async () => {
    const { client: query } = await newQueryCmd(chain)
    const { actives } = await query.oracle.actives()
    expect(actives.length).toBeGreaterThan(0)
    expect(actives.length).toBeGreaterThan(0)
    const pair = actives[0]
    expect(pair).toContain(":")
    console.info("query oracle actives: ", actives)
  })

  test("nibid query oracle params", async () => {
    const { client: query } = await newQueryCmd(chain)
    const { params: moduleParams } = await query.oracle.params()
    expect(moduleParams).toBeDefined()
    expect(moduleParams!.whitelist.length).toBeGreaterThan(0)
    console.info("nibid query oracle params: %o", moduleParams)
  })

  test("nibid query exchange rates", async () => {
    const { client: query } = await newQueryCmd(chain)
    const exhangeRateMap = await query.oracle.exchangeRates()
    expect(Object.keys(exhangeRateMap).length).toBeGreaterThan(0)
    for (const pair in exhangeRateMap) {
      const exchangeRate = exhangeRateMap[pair]
      expect(exchangeRate).toBeDefined()
      expect(exchangeRate).toBeGreaterThan(0)
      break
    }
    console.info("nibid query oracle exchange rates: %o", exhangeRateMap)
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

describe("staking module queries", () => {
  test("nibid query staking validators", async () => {
    const { client: query } = await newQueryCmd(chain)
    const infoResp = await query.staking.validators("BOND_STATUS_BONDED")
    expect(infoResp).toHaveProperty("validators")
    expect(infoResp.validators.length).toBeGreaterThan(0)
  })
})
