import * as dotenv from "dotenv"
import fetch from "cross-fetch"
import { go } from "./types"

dotenv.config() // yarn add -D dotenv

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
  endptGrpc?: string
  /** chainId: identifier for the chain */
  chainId: string
  chainName: string
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

export const Localnet: Chain = {
  endptTm: "127.0.0.1:26657",
  endptRest: "127.0.0.1:1317",
  chainId: "nibiru-localnet-0",
  chainName: "Nibiru Localnet",
  feeDenom: "unibi",
}

export function newTestnet(chainNumber: number): Chain {
  return {
    endptTm: `https://rpc.testnet-${chainNumber}.nibiru.fi`,
    endptRest: `https://lcd.testnet-${chainNumber}.nibiru.fi`,
    endptGrpc: "",
    chainId: `nibiru-testnet-${chainNumber}`,
    chainName: `nibiru-testnet-${chainNumber}`,
    feeDenom: "unibi",
  }
}

export function newDevnet(chainNumber: number): Chain {
  return {
    endptTm: `https://rpc.devnet-${chainNumber}.nibiru.fi`,
    endptRest: `https://lcd.devnet-${chainNumber}.nibiru.fi`,
    endptGrpc: "",
    chainId: `nibiru-devnet-${chainNumber}`,
    chainName: `nibiru-devnet-${chainNumber}`,
    feeDenom: "unibi",
  }
}

export const Testnet: Chain = newTestnet(1)

export const Devnet: Chain = newDevnet(1)

export const CHAOSNET_CONFIG = {
  host: process.env.CHAIN_HOST,
  lcdPort: 1317,
  grpcPort: 9090,
  tmPort: 26657,
}

/**
 * Chaosnet is a private chain with trading bots, an oracle, and a node
 * running an updated version of Nibiru. This environment is useful for live
 * testing.
 */
export const Chaosnet: Chain = {
  endptGrpc: `http://${CHAOSNET_CONFIG.host}:${CHAOSNET_CONFIG.tmPort}`,
  endptTm: `http://${CHAOSNET_CONFIG.host}:${CHAOSNET_CONFIG.tmPort}`,
  endptRest: `http://${CHAOSNET_CONFIG.host}:${CHAOSNET_CONFIG.lcdPort}`,
  chainId: "nibiru-localnet-0",
  chainName: "Nibiru Chaosnet",
  feeDenom: "unibi",
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
  let isLive: boolean = false
  const [_chainId, err] = await queryChainIdWithRest(chain)
  if (err === undefined) {
    isLive = true
  }
  return isLive
}

export async function isRestEndptValid(chain: Chain): Promise<boolean> {
  let isLive: boolean = true
  const [chainId, err] = await queryChainIdWithRest(chain)
  if (err !== undefined) {
    isLive = false
  } else if (chainId !== chain.chainId) {
    isLive = false
  }
  return isLive
}
