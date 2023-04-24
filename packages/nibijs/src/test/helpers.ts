import { Block } from "@cosmjs/stargate"
import {
  Chain,
  CustomChain,
  Devnet,
  Event,
  IncentivizedTestent,
  Localnet,
} from "../chain"

export const TEST_CHAIN = IncentivizedTestent(1)
// export const TEST_CHAIN = Localnet
// export const TEST_CHAIN = new CustomChain({
//   prefix: "nibiru",
//   shortName: "itn",
//   number: 1,
// }) // v0.19.2

export const TEST_MNEMONIC =
  process.env.VALIDATOR_MNEMONIC ??
  "guard cream sadness conduct invite crumble clock pudding hole grit liar hotel maid produce squeeze return argue turtle know drive eight casino maze host"
export const TEST_ADDRESS =
  process.env.VALIDATOR_ADDRESS ?? "nibi1zaavvzxez0elundtn32qnk9lkm8kmcsz44g7xl"

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
}

export function assertHasMsgType(msgType: string, events: Event[]): void {
  events.forEach((event) => {
    if (event.type === "message") {
      expect(event.attributes).toContainEqual({
        key: "action",
        value: msgType,
      })
    }
  })
}

export function assertHasEventType(eventType: string, events: Event[]): void {
  const eventTypes = events.map((event) => event.type)
  expect(eventTypes).toContain(eventType)
}
