import fetch from "cross-fetch"
import {
  GqlMarkPricesInputs,
  IGqlBlockMarkPrices,
  IGqlMarkPrices,
  IGqlPosChange,
} from "./types"

/**
 * The workhorse function that fetches data from the GraphQL endpoint.
 *
 * @param {string} gqlQuery
 * @returns {Promise<any>}
 */
async function doGqlQuery(gqlQuery: string): Promise<any> {
  const encodedGqlQuery = encodeURI(gqlQuery)
  const fetchString = `http://35.221.52.89:5555/graphql?query=${encodedGqlQuery}`
  const rawResp = await fetch(fetchString)
  return cleanResponse(rawResp)
}

async function cleanResponse(rawResp: Response): Promise<any> {
  const respJson: { data?: any } = await rawResp.json()

  if (respJson.data !== undefined) {
    return respJson.data
  } else if (!rawResp.ok) {
    throw new Error(await rawResp.text())
  } else {
    return respJson
  }
}

// ------------------------------------------------------------
// hooks
// ------------------------------------------------------------

export async function useQueryMarkPrices(args: {
  pair: string
  fromBlock: number
  toBlock: number
}): Promise<IGqlMarkPrices> {
  const queryMarkPrices = ({ pair, fromBlock, toBlock }: GqlMarkPricesInputs): string =>
    `{
    markPrices(pair:"${pair}", fromBlock:${fromBlock}, toBlock:${toBlock}) {
      pair
      price
      block
    }, 
    blockTimestamps(fromBlock:${fromBlock}, toBlock:${toBlock}) {
      height
      timestamp
    }
  }`
  return doGqlQuery(queryMarkPrices(args))
}

export async function useQueryBlockMarkPrices(args: {
  pair: string
  fromBlock: number
  toBlock: number
}): Promise<IGqlBlockMarkPrices> {
  const queryBlockMarkPrices = ({
    pair,
    fromBlock,
    toBlock,
  }: GqlMarkPricesInputs): string =>
    `{
    blockMarkPrices(pair:"${pair}", fromBlock:${fromBlock}, toBlock:${toBlock}) {
      pair
      price
      block
      blockTimestamp
    }
  }`
  return doGqlQuery(queryBlockMarkPrices(args))
}

export async function useQueryPosChange(args: {
  pair: string
  fromBlock: number
  toBlock: number
}): Promise<IGqlPosChange> {
  const queryPosChange = ({ pair, fromBlock, toBlock }: GqlMarkPricesInputs): string =>
    `{
    positions(pair:"${pair}", fromBlock:${fromBlock}, toBlock:${toBlock}) {
      block
      blockTimestamp
      fundingPayment
      margin
      pair
      positionNotional
      positionNotionalChange
      size
      sizeChange
      trader
      transactionFee
    }
  }`
  return doGqlQuery(queryPosChange(args))
}
