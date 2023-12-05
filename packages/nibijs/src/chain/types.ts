import { Coin, coin as newCoin, coins as newCoins } from "@cosmjs/proto-signing"
export { newCoin, newCoins }
import { ABCIEvent } from "../tx/event"
import BigNumber from "bignumber.js"

export const go = async <T>(promise: Promise<T>) => {
  try {
    return { res: await promise, err: undefined }
  } catch (err) {
    return { res: undefined, err: (err as Error).message }
  }
}

export const assert = (condition: boolean, message?: string) => {
  if (!condition) {
    const errMsg = message ? `AssertionError: ${message}` : "AssertionError"
    console.error(Error(errMsg))
    return errMsg
  }
  return true
}

export interface CoinMap {
  [denom: string]: BigNumber
}

// TODO test
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
