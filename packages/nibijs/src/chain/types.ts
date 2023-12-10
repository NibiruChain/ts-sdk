import { Coin } from "@cosmjs/proto-signing"
import BigNumber from "bignumber.js"
import { ABCIEvent } from "../tx/event"

/** go: Generic function for executing asynchronous code safely inside a
 * try-catch by default. If the promise succeeds, it's result is returned and the
 * error is undefined. If it fails, the result is undefined and the error message
 * is present. The function's called "go" because it mimics the error handling
 * behavior from Golang.
 *
 * GoSuccess<T>: A successful promise result that doesn't "throw".
 * GoError: A wrapped error type resulting from a "throw" inside a Promise.
 * */
export const go = async <T>(
  promise: Promise<T>
): Promise<GoSuccess<T> | GoError> => {
  try {
    return { res: await promise, err: undefined }
  } catch (err) {
    return { res: undefined, err: (err as Error).message }
  }
}

/** GoSuccess: A successful promise result that doesn't "throw". */
type GoSuccess<T> = { res: T; err: undefined }
/** GoError: A wrapped error type resulting from a "throw" inside a Promise. */
type GoError = { res: undefined; err: string }

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
    console.error(errMsg)
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
