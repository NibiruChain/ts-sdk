import {
  AccountData,
  coin as newCoin,
  coins as newCoins,
  parseCoins,
  Coin,
  DirectSecp256k1HdWallet as WalletHD,
} from "@cosmjs/proto-signing"
import { instanceOfError } from "./error"

export { AccountData, newCoin, newCoins, Coin, parseCoins, WalletHD }

export async function go<T>(
  promise: Promise<T>,
): Promise<{ res: T | undefined; err: undefined | Error }> {
  try {
    return { res: await promise, err: undefined }
  } catch (err) {
    if (instanceOfError(err)) {
      return { res: undefined, err }
    } else {
      return { res: undefined, err: new Error(`${err}`) }
    }
  }
}

export function assert(condition: boolean, message?: string) {
  if (!condition) {
    const errMsg = message ? `AssertionError: ${message}` : "AssertionError"
    throw new Error(errMsg)
  }
}

export interface CoinMap {
  [denom: string]: number
}

// TODO test
export function newCoinMapFromCoins(coins: Coin[]): CoinMap {
  const coinMap: CoinMap = {}
  for (const coin of coins) {
    coinMap[coin.denom] = parseInt(coin.amount)
  }
  return coinMap
}

export interface IEventLog {
  type: string
  attributes: { key: string; value: string }[]
}
