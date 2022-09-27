import {
  AccountData,
  coin as newCoin,
  coins as newCoins,
  parseCoins,
  Coin,
  DirectSecp256k1HdWallet as WalletHD,
} from "@cosmjs/proto-signing"

export { AccountData, newCoin, newCoins, Coin, parseCoins, WalletHD }

export async function go<T>(promise: Promise<T>): Promise<[T | undefined, any]> {
  try {
    return [await promise, undefined]
  } catch (err) {
    return [undefined, err]
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
