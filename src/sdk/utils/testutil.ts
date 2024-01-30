import { Block } from "@cosmjs/stargate"
import { Chain, Localnet, parseError, ABCIEvent } from ".."

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
export function assertValidBlockFromJsonRpc(blockJson: {
  [key: string]: unknown
}) {
  const blockSchema = {
    header: ["version", "chain_id", "height", "last_block_id"].concat(
      ["last_commit_hash", "data_hash", "validators_hash"],
      ["consensus_hash", "app_hash", "last_results_hash", "evidence_hash"],
      ["proposer_address", "next_validators_hash"]
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

/** assertValidBlock: Performs runtime type validation on a CometBFT "Block". */
export function assertValidBlock(block: Block, chain: Chain) {
  expect(block.header.chainId).toEqual(chain.chainId)
  expect(block.header.time).toBeDefined()
  expect(block.header.height).toBeGreaterThanOrEqual(1)
  expect(block).toHaveProperty("txs")
}

/**
 * Asserts that a list of ABCIEvents contains a specific type of `TxMsg`. This
 * `TxMsg` type is read from a "message" event's "action" attribute.
 *
 * @param {string} msgType - TxMsg type to look for within the event attributes.
 * @param {ABCIEvent[]} events - set of events over which we're searching.
 */
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

/**
 * Asserts that an array of ABCIEvent objects contains an event with a specified
 * type. This runs a test expectation that the specified `eventType` is
 * contained in `events`.
 *
 * @param {string} eventType - The event type to look for in the array of events.
 * @param {ABCIEvent[]} events - An array of ABCIEvent objects to be tested.
 */
export function assertHasEventType(
  eventType: string,
  events: ABCIEvent[]
): void {
  const eventTypes = events.map((event) => event.type)
  expect(eventTypes).toContain(eventType)
}

/**
 * Asserts that the given error matches one of the expected error messages.
 *
 * This function parses the error object to extract its message and checks if
 * it includes any of the specified acceptable error messages. It sets a test
 * expectation that the error message is contained within the list of acceptable errors.
 *
 * @param {unknown} err - The error object to be tested.
 * @param {string[]} okErrors - An array of acceptable error message strings.
 */
export const assertExpectedError = (err: unknown, okErrors: string[]) => {
  let isContained = false
  const errMsg = parseError(err).message
  okErrors.forEach((e) => {
    if (errMsg.includes(e)) {
      isContained = true
    }
  })
  expect(isContained).toBeTruthy()
}
