import { assertIsDeliverTxSuccess, DeliverTxResponse } from "@cosmjs/stargate"
import { Block } from "@cosmjs/tendermint-rpc"
import { Chain, newDevnet } from "../chain"

export const TEST_CHAIN = newDevnet(2) // v0.19.0

export function validateBlockFromJsonRpc(blockJson: any) {
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

export function validateBlock(block: Block, chain: Chain) {
  expect(block.header.chainId).toEqual(chain.chainId)
  expect(block.header.time).toBeDefined()
  expect(block.header.height).toBeGreaterThanOrEqual(1)
  expect(block).toHaveProperty("txs")
  expect(block).toHaveProperty("lastCommit")
}

export function prettyTmLogs(tmLogs: string): string {
  return tmLogs.split('\\"').join("")
}

export function expectTxToSucceed(txResp: DeliverTxResponse) {
  expect(txResp).not.toBeNull()
  assertIsDeliverTxSuccess(txResp)
}
export interface TxLog {
  events: { type: string; attributes: any[] }[]
}
