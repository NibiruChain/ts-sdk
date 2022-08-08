import { CONFIG_DEVNET, DevnetNetwork } from "@nibiruchain/common"
import { initQuery } from "./query"
import fetch from "node-fetch"

require("dotenv").config() // yarn add -D dotenv

const VAL_ADDRESS = process.env.VALIDATOR_ADDRESS as string

describe("test node connection", () => {
  const port = 26657
  const host = CONFIG_DEVNET.host

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
  it("has environment variables configured", () => {
    expect(VAL_ADDRESS).toBeDefined()
  })

  it("query bank balances - client.bank.allBalances", async () => {
    const { client, disconnect } = await initQuery(DevnetNetwork)
    const balances = await client.bank.allBalances(VAL_ADDRESS)
    console.log("%o", balances)
    expect(balances.length).toBeGreaterThan(0)
    expect(+balances[0].amount).toBeGreaterThan(0)
    expect(balances[0].denom).not.toBe("")
    disconnect()
  })

  it("query dex params - client.dex.params", async () => {
    const { client, disconnect } = await initQuery(DevnetNetwork)
    const { params } = await client.dex.params()
    console.log("%o", params)
    expect(params?.whitelistedAsset.length).toBeGreaterThan(0)
    expect(params?.whitelistedAsset[0]).not.toBe("")
    disconnect()
  })

  it("query perp params - client.perp.params", async () => {
    const { client, disconnect } = await initQuery(DevnetNetwork)
    const { params } = await client.perp.params()
    console.log("%o", params)
    expect(params).not.toBeNull()
    expect(+params!.feePoolFeeRatio).toBeGreaterThan(0)
    expect(+params!.liquidationFeeRatio).toBeGreaterThan(0)
    disconnect()
  })
})
