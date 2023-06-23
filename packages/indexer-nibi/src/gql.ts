import * as cf from "cross-fetch"

declare global {
  interface Window {
    fetch: typeof cf.fetch
  }
}

window.fetch = cf.fetch

/**
 * The workhorse function that fetches data from the GraphQL endpoint.
 *
 * ### Args:
 * @param {string} gqlQuery - raw GraphQL query string
 * @param {string} gqlEndpt - URL for the GraphQL endpoint.
 * @returns {Promise<any>}
 */
export async function doGqlQuery(gqlQuery: string, gqlEndpt: string): Promise<any> {
  const encodedGqlQuery = encodeURI(gqlQuery)
  const fetchString = `${gqlEndpt}?query=${encodedGqlQuery}`
  const rawResp = await fetch(fetchString)
  return cleanResponse(rawResp)
}

export async function cleanResponse(rawResp: Response): Promise<any> {
  const respJson: any = await rawResp.json().catch((err) => {
    console.error(err)
  })
  // console.debug("DEBUG respJson: %o", respJson)

  if (!rawResp.ok || respJson === undefined) {
    throw new Error(`${respJson}`)
  } else if (respJson.data !== undefined) {
    return respJson.data
  } else if (respJson !== undefined) {
    return respJson
  } else {
    return respJson
  }
}

/**
 * arg: Returns the string format for an "argument" in a GraphQL query.
 *
 * @param {string} name - name of the argument
 * @param {*} value - value of the argument
 * @returns {string}
 */
export const arg = (name: string, value: any): string => `${name}: ${value}`

/** createGqlEndpt: Returns the URL of a heart monitor endpoint based on the
 * standard 'chainNickname' included as part of the Tendermint RPC endpoint and
 * LCD/Rest endpoint.
 *
 * Example: The chain ID "nibiru-testnet-2" has the chain nickname, "testnet",
 *   and chain number, "2". The combination of the nickname and number is what
 *   we'd use as prefix in the hm-graphql URL.
 */
const createGqlEndpt = (chain: string): string =>
  `https://hm-graphql.${chain}.nibiru.fi/graphql`

export function gqlEndptFromTmRpc(endptTm: string): string | null {
  const endptTmParts: string[] = endptTm.split(".")
  //  rpcIdx: the index of the substring that includes rpc
  let rpcIdx: number = -1
  endptTmParts.forEach((part, idx) => {
    if (part.includes("rpc")) {
      rpcIdx = idx
    }
  })

  // nicknameIdx: the index of the substring that includes the chain nickname
  const nicknameIdx = rpcIdx + 1
  const invalidRpcIdx: boolean = rpcIdx === -1
  const invalidNicknameIdx: boolean = nicknameIdx === endptTmParts.length
  if (invalidRpcIdx || invalidNicknameIdx) {
    return null
  }

  const chainNickname = endptTmParts[nicknameIdx]
  const gqlEndpt = createGqlEndpt(chainNickname)
  return gqlEndpt
}
