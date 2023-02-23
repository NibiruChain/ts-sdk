import fetch from "cross-fetch"

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
  console.debug("DEBUG respJson: %o", respJson)

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

export const arg = (name: string, value: any): string => `${name}: ${value}`
