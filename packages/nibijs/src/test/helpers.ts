import { Block } from "@cosmjs/stargate"
import { Chain, CustomChain, Devnet, Event } from "../chain"
import { PERP_MSG_TYPE_URLS } from "../msg/perp"

export const TEST_CHAIN = new CustomChain({
  prefix: "nibiru",
  shortName: "itn",
  number: 1,
}) // v0.19.2

export const DEVNET = Devnet(2)
export const TEST_MNEMONIC =
  process.env.VALIDATOR_MNEMONIC ??
  "license you roof spirit great mass wink warfare glide donor ozone copper truth face six relief soda bike various verify feature charge feel sausage"
export const TEST_ADDRESS =
  process.env.VALIDATOR_ADDRESS ?? "nibi1n686zur9ash48nm8p2uxm2p3dq527rnvhsks9t"

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
        value: PERP_MSG_TYPE_URLS[msgType],
      })
    }
  })
}

export function assertHasEventType(eventType: string, events: Event[]): void {
  const eventTypes = events.map((event) => event.type)
  expect(eventTypes).toContain(eventType)
}
