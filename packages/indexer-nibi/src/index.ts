/**
 * @fileoverview '@nibiruchain/indexer-nibi' contains hooks for querying event data
 * indexed from a Nibiru blockchain via a GraphQL endpoint ('heart-monitor' database).
 * @see https://github.com/NibiruChain/heart-monitor
 *
 * ### Hooks
 * - useQueryMarkPrices
 * - useQueryBlockMarkPrices
 * - useQueryPosChange
 *
 * @example
 * ```js
 * const fromBlock = 1
 * const toBlock = 20
 * const pair = "ubtc:unusd"
 * const prices = await useQueryBlockMarkPrices();
 * console.info("prices:  %o", prices)
 * ```
 * @package
 */
export * from "./heart-monitor"
export * from "./types"
