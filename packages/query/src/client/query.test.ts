import { DEVNET, DevnetNetwork } from "@nibiruchain/common"
import { initQuery } from "./query"
import fetch from "node-fetch"

require("dotenv").config() // yarn add -D dotenv

// const NETWORK = LocalNetwork
const NETWORK = DevnetNetwork
const VAL_ADDRESS = process.env.VALIDATOR_ADDRESS as string

describe("test node connection", () => {
  const port = DEVNET.tmPort
  const host = DEVNET.host
  test("has environment variables configured", () => {
    expect(VAL_ADDRESS).toBeDefined()
    expect(host).toBeDefined()
  })

  it("query block with get", async () => {
    const resp = await fetch(`http://${host}:${port}/block?height=5`)
    const respJson = await resp.json()
    const blockJson = respJson.result.block
    validateBlock(blockJson)
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
    validateBlock(blockJson)
  })
})

function validateBlock(blockJson: any) {
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

  test("query bank balances - client.bank.allBalances", async () => {
    const { client, disconnect } = await initQuery(NETWORK)
    const balances = await client.bank.allBalances(VAL_ADDRESS)
    console.log("balances: %o", balances)
    expect(balances.length).toBeGreaterThan(0)
    expect(+balances[0].amount).toBeGreaterThan(0)
    expect(balances[0].denom).not.toBe("")

    let balanceDenoms: string[] = []
    {
      balances.map((coin) => {
        balanceDenoms.push(coin.denom)
      })
    }
    expect(balanceDenoms).toContain("unibi")
  })

  test("query dex params - client.dex.params", async () => {
    const { client, disconnect } = await initQuery(NETWORK)
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

  test("query perp params - client.perp.params", async () => {
    const { client, disconnect } = await initQuery(NETWORK)
    const { params } = await client.perp.params()
    console.log("perp.params: %o", params)
    expect(params).not.toBeNull()
    const fields: string[] = [
      "stopped",
      "maintenanceMarginRatio",
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
