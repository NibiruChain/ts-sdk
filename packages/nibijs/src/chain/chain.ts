import fetch from "cross-fetch"
import { go } from "./types"

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

/**
 * A function for strongly typing. Returns true if the input object satisfies
 * the Chain interface.
 */
export function instanceOfChain(obj: any): obj is Chain {
  return ["endptTm", "endptRest", "chainId", "chainName", "feeDenom"].every(
    (attr) => attr in obj,
  )
}

export interface ChainIdParts {
  prefix: string
  shortName: string
  number: number
}

export class CustomChain implements Chain {
  public readonly chainId: string
  public readonly chainName: string
  public readonly endptTm: string
  public readonly endptRest: string
  public readonly endptGrpc: string
  public readonly feeDenom: string = "unibi"

  private readonly chainIdParts: ChainIdParts

  constructor(chainIdParts: ChainIdParts) {
    this.chainIdParts = chainIdParts

    this.chainId = this.initChainId()
    this.chainName = this.chainId
    this.endptTm = this.initTendermintEndpoint()
    this.endptRest = this.initRestEndpoint()
    this.endptGrpc = this.initGrpcEndpoint()
  }

  private initChainId = (): string => {
    const { prefix, shortName, number } = this.chainIdParts
    return [prefix, shortName, number].join("-")
  }

  public initTendermintEndpoint = (): string => {
    const { shortName, number } = this.chainIdParts
    return `https://rpc.${shortName}-${number}.nibiru.fi`
  }

  public initRestEndpoint = (): string => {
    const { shortName, number } = this.chainIdParts
    return `https://lcd.${shortName}-${number}.nibiru.fi`
  }

  public initGrpcEndpoint = (): string => {
    const { shortName, number } = this.chainIdParts
    return `grpc.${shortName}-${number}.nibiru.fi`
  }
}

export const Localnet: Chain = {
  endptTm: "127.0.0.1:26657",
  endptRest: "127.0.0.1:1317",
  endptGrpc: "127.0.0.1:9090",
  chainId: "nibiru-localnet-0",
  chainName: "Nibiru Localnet",
  feeDenom: "unibi",
}

export function IncentivizedTestent(chainNumber: number): Chain {
  return new CustomChain({
    prefix: "nibiru",
    shortName: "itn",
    number: chainNumber,
  })
}

export function Devnet(chainNumber: number): Chain {
  return new CustomChain({
    prefix: "nibiru",
    shortName: "devnet",
    number: chainNumber,
  })
}

export async function queryChainIdWithRest(chain: Chain): Promise<[string, Error?]> {
  const queryChainId = async (chain: Chain): Promise<string> => {
    const response = await fetch(`${chain.endptRest}/node_info`)
    const nodeInfo: { node_info: { network: string } } = await response.json()
    return nodeInfo.node_info.network
  }

  const { res: chainId, err } = await go(queryChainId(chain))
  return [chainId ?? "", err]
}

export async function isRestEndptLive(chain: Chain): Promise<boolean> {
  const [_chainId, err] = await queryChainIdWithRest(chain)
  return err === undefined
}
