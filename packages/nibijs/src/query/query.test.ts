import { Chain, Chaosnet, Testnet, CHAOSNET_CONFIG } from "../chain"
import { initQueryCmd } from "./query"
import fetch from "node-fetch"
import { Block, BlockResponse } from "@cosmjs/tendermint-rpc"

require("dotenv").config() // yarn add -D dotenv

const VAL_ADDRESS = process.env.VALIDATOR_ADDRESS

describe("chain connections", () => {
  const testChainConnection = async (chain: Chain) => {
    const queryCmd = await initQueryCmd(chain)
    const blockHeight = 5
    const blockResp: BlockResponse = await queryCmd.tmClient.block(blockHeight)
    validateBlock(blockResp.block, chain)
  }
  test("testnet", async () => {
    testChainConnection(Testnet)
  })
  test("chaosnet", async () => {
    testChainConnection(Chaosnet)
  })
})

describe("test node connection", () => {
  const port = CHAOSNET_CONFIG.tmPort
  const host = CHAOSNET_CONFIG.host
  test("has environment variables configured", () => {
    expect(VAL_ADDRESS).toBeDefined()
    expect(host).toBeDefined()
  })

  it("query block with get", async () => {
    const resp = await fetch(`http://${host}:${port}/block?height=5`)
    const respJson = await resp.json()
    const blockJson = respJson.result.block
    validateBlockFromJsonRpc(blockJson)
  })

  it("query block with post", async () => {
    const body = { method: "block", params: ["5"], id: 1 }
    const resp = await fetch(`http://${host}:${port}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })
    const respJson = await resp.json()
    const blockJson = respJson.result.block
    validateBlockFromJsonRpc(blockJson)
  })
})

function validateBlock(block: Block, chain: Chain) {
  expect(block.header.chainId).toEqual(chain.chainId)
  expect(block.header.time).toBeDefined()
  expect(block.header.height).toBeGreaterThanOrEqual(1)
  expect(block).toHaveProperty("txs")
  expect(block).toHaveProperty("lastCommit")
}

function validateBlockFromJsonRpc(blockJson: any) {
  const blockSchema = {
    header: ["version", "chain_id", "height", "last_block_id"].concat(
      ["last_commit_hash", "data_hash", "validators_hash", "next_validators_hash"],
      ["consensus_hash", "app_hash", "last_results_hash", "evidence_hash"],
      ["proposer_address"],
    ),
    data: ["txs"],
    evidence: ["evidence"],
    last_commit: ["height", "round", "block_id", "signatures"],
  }
  type BlockSchemaKey = keyof typeof blockSchema

  for (const attr in blockSchema) {
    expect(blockJson).toHaveProperty(attr)
    const blockSchemaAtAttr: string[] = blockSchema[attr as BlockSchemaKey]
    for (const subAttr of blockSchemaAtAttr) {
      expect(blockJson[attr]).toHaveProperty(subAttr)
    }
  }
}

describe("test query module", () => {
  test("has environment variables configured", () => {
    expect(VAL_ADDRESS).toBeDefined()
  })

  const chain = Chaosnet

  test("query bank balances - client.bank.allBalances", async () => {
    const { client: query, disconnect } = await initQueryCmd(chain)
    if (!VAL_ADDRESS) {
      throw Error("VAL_ADDRESS is not set in the .env")
    }
    const balances = await query.bank.allBalances(VAL_ADDRESS ?? "")
    console.log("balances: %o", balances)
    expect(balances.length).toBeGreaterThan(0)
    const amount: number = +balances[0].amount
    expect(amount).toBeGreaterThan(0)
    expect(balances[0].denom).not.toBe("")

    let balanceDenoms: string[] = []
    {
      balances.map((coin) => {
        balanceDenoms.push(coin.denom)
      })
    }
    expect(balanceDenoms).toContain("unibi")
    disconnect()
  })

  /*  // NOTE The dex module is on hold for public testnet
  test("query dex params - client.dex.params", async () => {
    const { client, disconnect } = await initQueryCmd(chain)
    const { params } = await client.dex.params()
    console.log("dex.params: %o", params)
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
  */

  test("query perp params - client.perp.params", async () => {
    const { client, disconnect } = await initQueryCmd(chain)
    const { params } = await client.perp.params()
    console.log("perp.params: %o", JSON.stringify(params))
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
})

describe("vpool module queries", () => {
  const chain = Testnet

  let timeoutMs = 8_000
  test(
    "nibid query vpool all-pools",
    async () => {
      const { client: query } = await initQueryCmd(chain)
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
      const { client: query } = await initQueryCmd(chain)
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

describe("'pricefeed' module queries", () => {
  const chain = Testnet
  const pairId = "ubtc:unusd"

  test("nibid query pricefeed markets", async () => {
    const { client: query } = await initQueryCmd(chain)
    const { markets } = await query.pricefeed.markets()
    expect(markets.length).toBeGreaterThan(0)
    expect(markets[0].oracles.length).toBeGreaterThan(0)
    expect(markets[0].active).toBeTruthy()
    console.info("query pricefeed markets: %o", markets.slice(0, 2))
  })

  test("nibid query pricefeed params", async () => {
    const { client: query } = await initQueryCmd(chain)
    const { params: moduleParams } = await query.pricefeed.params()
    expect(moduleParams).toBeDefined()
    expect(moduleParams!.pairs.length).toBeGreaterThan(0)
    console.info("nibid query pricefeed params: %o", moduleParams)
  })

  test("nibid query pricefeed price", async () => {
    const { client: query } = await initQueryCmd(chain)
    const { price } = await query.pricefeed.price({ pairId })
    expect(price).toBeDefined()
    for (const field of ["pairId", "price", "twap"]) {
      expect(price).toHaveProperty(field)
    }
    console.info("nibid query pricefeed price: %o", price)
  })

  test("nibid query pricefeed prices", async () => {
    const { client: query } = await initQueryCmd(chain)
    const { prices } = await query.pricefeed.prices()
    expect(prices).toBeDefined()
    expect(prices.length).toBeGreaterThan(0)
    console.info("nibid query pricefeed prices: %o", prices)
  })

  test("nibid query pricefeed raw-prices", async () => {
    const { client: query } = await initQueryCmd(chain)
    const resp = await query.pricefeed.pricesRaw({ pairId })
    const { rawPrices } = resp
    expect(rawPrices).toBeDefined()
    console.info("nibid query pricefeed raw-prices: %o", rawPrices)
  })
})
