import { Coin } from "@cosmjs/proto-signing"
import BigNumber from "bignumber.js"
import { ABCIEvent } from "../tx/event"

/**
 * Asserts that a given condition is true. If the condition evaluates to false,
 * an "AssertionError" is thrown with an optional custom message.
 *
 * @param {boolean} condition - The condition to test.
 * @param {string} message - Optional. A custom error message to display if the
 * assertion fails.
 * @returns {boolean} - Returns true if the assertion is successful.
 */
export const assert = (
  condition: boolean,
  message?: string
): boolean | string => {
  if (!condition) {
    const errMsg = message ? `AssertionError: ${message}` : "AssertionError"
    console.error(Error(errMsg))
    return errMsg
  }
  return true
}

/** Fungible token type, "Coin", expressed as a map. */
export interface CoinMap {
  [denom: string]: BigNumber
}

// TODO: test
export const newCoinMapFromCoins = (coins: readonly Coin[]) => {
  const coinMap: CoinMap = {}
  for (const coin of coins) {
    coinMap[coin.denom] = BigNumber(coin.amount)
  }
  return coinMap
}

export interface TxLog {
  events: ABCIEvent[]
}
