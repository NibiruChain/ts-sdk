import * as cf from "cross-fetch"
import { Chain, instanceOfChain } from "./chain"

declare global {
  interface Window {
    fetch: typeof cf.fetch
  }
}

window.fetch = cf.fetch

/**
 * Sends 10 NIBI and 100 NUSD to the given address from the testnet faucet.
 */
export async function useFaucet({
  address,
  amts,
  chain,
  faucetUrl,
}: {
  address: string
  amts?: { nibi: number; nusd: number; usdt: number }
  chain?: Chain | string
  faucetUrl?: string
}): Promise<Response> {
  amts = {
    nibi: amts?.nibi ?? 11,
    nusd: amts?.nusd ?? 100,
    usdt: amts?.usdt ?? 100,
  }
  const micro = 1_000_000
  const coins: string[] = [
    `${(micro * amts.nibi).toString()}unibi`,
    `${(micro * amts.nusd).toString()}unusd`,
    `${(micro * amts.usdt).toString()}uusdt`,
  ]

  if (chain !== undefined) {
    // deduce faucet URL from 'chain' if possible
    if (typeof chain === "string" || chain instanceof String) {
      const [outFaucetUrl, err] = faucetUrlFromEndpoint(chain as string)
      if (err) throw err
      faucetUrl = outFaucetUrl
    } else if (instanceOfChain(chain)) {
      const [outFaucetUrl, err] = faucetUrlFromChain(chain as Chain)
      if (err) throw err
      faucetUrl = outFaucetUrl
    } else {
      throw TypeError("'chain' must be a string or Chain")
    }
  } else if (faucetUrl === undefined) {
    faucetUrl = "https://faucet.testnet-1.nibiru.fi/"
  }

  // Execute faucet request
  console.info(
    `Requesting funds from faucet @ ${faucetUrl}: 
    Coins: ${coins}
    Address: ${address}
    `,
  )

  return fetch(faucetUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ address, coins }),
  }).catch((err) => {
    console.error(err)
    throw err
  })
}

/** TODO doc */
function faucetUrlFromEndpoint(endptTm: string): [string, Error?] {
  const endptTmParts: string[] = endptTm.split(".")
  let rpcIdx: number = -1
  endptTmParts.forEach((part, idx) => {
    if (part.includes("rpc")) {
      rpcIdx = idx
    }
  })

  if (rpcIdx === -1) {
    return [
      "https://faucet.testnet-1.nibiru.fi/",
      new Error(`failed to deduce chain name from Tendermint RPC endpoint: ${endptTm}`),
    ]
  }

  const chainIdx = rpcIdx + 1
  const chainName = endptTmParts[chainIdx]
  const faucetUrl = `https://faucet.${chainName}.nibiru.fi/`
  return [faucetUrl, undefined]
}

/** TODO doc */
function faucetUrlFromChain(chain: Chain): [string, Error?] {
  return faucetUrlFromEndpoint(chain.endptTm)
}
