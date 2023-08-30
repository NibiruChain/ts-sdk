import * as cf from "cross-fetch"
import { go } from "./types"

declare global {
  interface Window {
    fetch: typeof cf.fetch
  }
}

window.fetch = cf.fetch

/**
 * Specifies chain information for all endpoints a node exposes such as the
 * gRPC server, Tendermint RPC endpoint, and REST server.
 *
 * @see https://docs.cosmos.network/master/core/grpc_rest.html
 * @export
 * @interface Chain
 * @typedef {Chain}
 */

export interface Chain {
  /** endptTm: endpoint for the Tendermint RPC server. Usually on port 26657. */
  endptTm: string
  /** endptRest: endpoint for the REST server. Also, the LCD endpoint. */
  endptRest: string
  /** endptGrpc: endpoint for the gRPC gateway. Usually on port 9090. */
  endptGrpc: string
  /** chainId: identifier for the chain */
  chainId: string
  /** chainName: the name of the chain to display to the user */
  chainName: string
  /** feeDenom: the denomination of the fee to be paid for transactions. */
  feeDenom: string
}

export interface ChainIdParts {
  prefix: string // e.g. `nibiru`
  shortName: string // e.g. `itn`
  number: number // e.g. `1`
}

/** CustomChain is a convenience class for intializing the endpoints of a chain
 * based on its chain ID.
 *
 * @example
 * ```ts
 * export const TEST_CHAIN = new CustomChain({
 *   prefix: "nibiru",
 *   shortName: "itn",
 *   number: 1,
 * }) // v0.19.2
 * ```
 */
export class CustomChain implements Chain {
  public readonly chainId: string
  public readonly chainName: string
  public readonly endptTm: string
  public readonly endptRest: string
  public readonly endptGrpc: string
  public readonly feeDenom = "unibi"

  private readonly chainIdParts: ChainIdParts

  constructor(chainIdParts: ChainIdParts) {
    this.chainIdParts = chainIdParts
    this.chainId = this.initChainId()
    this.chainName = this.chainId
    this.endptTm = `https://rpc.${chainIdParts.shortName}-${chainIdParts.number}.nibiru.fi`
    this.endptRest = `https://lcd.${chainIdParts.shortName}-${chainIdParts.number}.nibiru.fi`
    this.endptGrpc = `grpc.${chainIdParts.shortName}-${chainIdParts.number}.nibiru.fi`
  }

  private initChainId = () => {
    const { prefix, shortName, number } = this.chainIdParts
    return [prefix, shortName, number].join("-")
  }
}

export const Localnet: Chain = {
  endptTm: "http://127.0.0.1:26657",
  endptRest: "http://127.0.0.1:1317",
  endptGrpc: "http://127.0.0.1:9090",
  chainId: "nibiru-localnet-0",
  chainName: "Nibiru Localnet (Default)",
  feeDenom: "unibi",
}

export const IncentivizedTestnet = (chainNumber: number) =>
  new CustomChain({
    prefix: "nibiru",
    shortName: "itn",
    number: chainNumber,
  })

export const Devnet = (chainNumber: number) =>
  new CustomChain({
    prefix: "nibiru",
    shortName: "devnet",
    number: chainNumber,
  })

export const queryChainIdWithRest = async (chain: Chain) => {
  const queryChainId = async (chain: Chain): Promise<string> => {
    const response = await window.fetch(`${chain.endptRest}/node_info`)
    const nodeInfo: { node_info: { network: string } } = await response.json()
    return nodeInfo.node_info.network
  }

  const { res: chainId, err } = await go(queryChainId(chain))
  return [chainId ?? "", err]
}

export const isRestEndptLive = async (chain: Chain) => {
  const [_chainId, err] = await queryChainIdWithRest(chain)
  return err === undefined
}

/**
 * Converts a Chain object to its constituent parts.
 * @param chain a Chain object
 * @returns a ChainIdParts object
 */
export const chainToParts = (chain: Chain) => {
  const parts = chain.chainId.split("-")
  return {
    prefix: parts[0],
    shortName: parts[1],
    number: Number(parts[2]),
  } as ChainIdParts
}
