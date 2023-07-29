import { Chain, ChainIdParts, chainToParts } from "./chain"

/**
 * Sends 11 NIBI, 100 NUSD, and 100 USDT to the given address from the testnet faucet.
 */
export async function useFaucet({
  address,
  chain,
  amts,
}: {
  address: string
  chain: Chain
  amts?: { nibi: number; nusd: number; usdt: number }
}): Promise<Response> {
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

  return window.fetch(faucetUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ address, coins }),
  })
}

/**
 * Constructs a faucet URL from a Chain object.
 * @param chain a Chain object
 */
export const faucetUrlFromChain = (chain: Chain) => {
  const parts = chainToParts(chain)
  // e.g. https://faucet.itn-1.nibiru.fi/
  return `https://faucet.${parts.shortName}-${parts.number}.nibiru.fi/`
}
