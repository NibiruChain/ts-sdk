import { Block } from "@cosmjs/stargate"
import { Chain, Localnet } from "./chain"
import { ABCIEvent } from "./tx"

/** TEST_CHAIN: Alias for Localnet.
 * @see Localnet */
export const TEST_CHAIN = Localnet

/** Mnemonic for the wallet of the default validator on localnet" */
export const TEST_MNEMONIC =
  process.env.VALIDATOR_MNEMONIC ??
  "guard cream sadness conduct invite crumble clock pudding hole grit liar hotel maid produce squeeze return argue turtle know drive eight casino maze host"

/** Address for the wallet of the default validator on localnet" */
export const TEST_ADDRESS =
  process.env.VALIDATOR_ADDRESS ?? "nibi1zaavvzxez0elundtn32qnk9lkm8kmcsz44g7xl"

export const ERR = {
  collections: "collections: not found",
  sequence: "account sequence mismatch",
  noPrices: "no valid prices available",
}

/** Validates that block queried via the JSON RPC client has the expected fields. */
export function validateBlockFromJsonRpc(blockJson: any) {
  const blockSchema = {
    header: ["version", "chain_id", "height", "last_block_id"].concat(
      ["last_commit_hash", "data_hash", "validators_hash"],
      ["consensus_hash", "app_hash", "last_results_hash", "evidence_hash"],
      ["proposer_address", "next_validators_hash"],
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

/** valideBlock: Performs runtime type validation on a CometBFT "Block". */
export function validateBlock(block: Block, chain: Chain) {
  expect(block.header.chainId).toEqual(chain.chainId)
  expect(block.header.time).toBeDefined()
  expect(block.header.height).toBeGreaterThanOrEqual(1)
  expect(block).toHaveProperty("txs")
}

export function assertHasMsgType(msgType: string, events: ABCIEvent[]): void {
  events.forEach((event) => {
    if (event.type === "message") {
      expect(event.attributes).toContainEqual({
        key: "action",
        value: msgType,
      })
    }
  })
}

export function assertHasEventType(
  eventType: string,
  events: ABCIEvent[],
): void {
  const eventTypes = events.map((event) => event.type)
  expect(eventTypes).toContain(eventType)
}

export const assertExpectedError = (err: unknown, okErrors: string[]) => {
  let errMsg: string
  if (err instanceof Error) {
    errMsg = err.message
  } else {
    errMsg = `${err}`
  }
  console.log(errMsg)
  let isContained = false
  okErrors.forEach((e) => {
    if (errMsg.includes(e)) {
      isContained = true
    }
  })
  expect(isContained).toBeTruthy()
}
