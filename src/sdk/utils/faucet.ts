import { fetch } from "cross-fetch"
import { Chain, chainToParts } from "."

/**
 * Sends 11 NIBI, 100 NUSD, and 100 USDT to the given address from the testnet faucet.
 */
export async function useFaucet({
  address,
  chain,
  amts,
  grecaptcha,
}: {
  address: string
  chain: Chain
  amts?: { nibi: number; nusd: number; usdt: number }
  grecaptcha: string
}): Promise<Response | undefined> {
  if (!amts) {
    // default values
    amts = {
      nibi: 11,
      nusd: 100,
      usdt: 100,
    }
  }

  const coins: string[] = [
    `${amts.nibi * 1e6}unibi`,
    `${amts.nusd * 1e6}unusd`,
    `${amts.usdt * 1e6}uusdt`,
  ]
  const faucetUrl = faucetUrlFromChain(chain)

  // Execute faucet request
  console.info(
    `Requesting funds from faucet @ ${faucetUrl}:
    Coins: ${coins}
    Address: ${address}
    `
  )

  return fetch(faucetUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ address, coins, grecaptcha }),
  })
}

/**
 * Constructs a faucet URL from a Chain object.
 * @param chain a Chain object
 */
export const faucetUrlFromChain = (chain: Chain) => {
  const parts = chainToParts(chain)
  // e.g. https://faucet.itn-X.nibiru.fi/ where X is the number
  const restOfChain = chain.chainName.includes("cataclysm")
    ? ""
    : `.${parts.shortName}-${parts.number}`

  return `https://faucet${restOfChain}.nibiru.fi/`
}
