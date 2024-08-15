import { fetch } from "cross-fetch"
import { Chain, chainToParts } from "."

/**
 * Sends 10 NIBI to the given address from the testnet faucet.
 */
export async function useFaucet({
  address,
  chain,
  grecaptcha,
}: {
  address: string
  chain: Chain
  grecaptcha: string
}): Promise<Response | undefined> {
  const coins: string[] = [`${10e6}unibi`]
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
