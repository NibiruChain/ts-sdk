import * as network from "../common"
import { initQueryCmd } from "./query"
import fetch from "node-fetch"
import { Block, BlockResponse } from "@cosmjs/tendermint-rpc"

require("dotenv").config() // yarn add -D dotenv

// const NETWORK = LocalNetwork
const NETWORK = network.Chaosnet
const VAL_ADDRESS = process.env.VALIDATOR_ADDRESS as string

describe("network connections", () => {
  const testNetworkConnection = async (network: network.Network) => {
    const queryCmd = await initQueryCmd(network)
    const blockHeight = 5
    const blockResp: BlockResponse = await queryCmd.tmClient.block(blockHeight)
    validateBlock(blockResp.block, network)
  }
  test("testnet", async () => {
    testNetworkConnection(network.Testnet)
  })
  test("chaosnet", async () => {
    testNetworkConnection(network.Chaosnet)
  })
})

describe("test node connection", () => {
  const port = network.CHAOSNET_CONFIG.tmPort
  const host = network.CHAOSNET_CONFIG.host
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

function validateBlock(block: Block, network: network.Network) {
  expect(block.header.chainId).toEqual(network.chainId)
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

  test("query bank balances - client.bank.allBalances", async () => {
    const { client: query, disconnect } = await initQueryCmd(NETWORK)
    const balances = await query.bank.allBalances(VAL_ADDRESS)
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
    disconnect()
  })

  /*  // NOTE The dex module is on hold for public testnet
  test("query dex params - client.dex.params", async () => {
    const { client, disconnect } = await initQueryCmd(NETWORK)
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
    const { client, disconnect } = await initQueryCmd(NETWORK)
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
