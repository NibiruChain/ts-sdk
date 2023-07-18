import {
  AccountData,
  Coin,
  coin as newCoin,
  coins as newCoins,
  DirectSecp256k1HdWallet as WalletHD,
  parseCoins,
} from "@cosmjs/proto-signing"
import { instanceOfError } from "./error"

export { AccountData, newCoin, newCoins, Coin, parseCoins, WalletHD }

export const go = async <T>(promise: Promise<T>) => {
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

export const assert = (condition: boolean, message?: string) => {
  if (!condition) {
    const errMsg = message ? `AssertionError: ${message}` : "AssertionError"
    throw new Error(errMsg)
  }
}

export interface CoinMap {
  [denom: string]: number
}

// TODO test
export const newCoinMapFromCoins = (coins: readonly Coin[]) => {
  const coinMap: CoinMap = {}
  for (const coin of coins) {
    coinMap[coin.denom] = parseInt(coin.amount)
  }
  return coinMap
}

export interface Event {
  type: string
  attributes: Attribute[]
}

export interface Attribute {
  key: string
  value: string
}

export interface TxLog {
  events: Event[]
}
