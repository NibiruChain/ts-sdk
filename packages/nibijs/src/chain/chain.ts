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

export const Localnet: Chain = {
  endptTm: "127.0.0.1:26657",
  endptRest: "127.0.0.1:1317",
  chainId: "nibiru-localnet-0",
  chainName: "Nibiru Localnet",
  feeDenom: "unibi",
}

export const Testnet: Chain = {
  endptTm: "https://rpc.testnet-1.nibiru.fi",
  endptRest: "https://lcd.testnet-1.nibiru.fi",
  endptGrpc: "",
  chainId: "nibiru-testnet-1",
  chainName: "nibiru-testnet-1",
  feeDenom: "unibi",
}

export const Devnet: Chain = {
  endptTm: "https://rpc.devnet-2.nibiru.fi",
  endptRest: "https://lcd.devnet-2.nibiru.fi",
  endptGrpc: "",
  chainId: "nibiru-devnet-2",
  chainName: "nibiru-devnet-2",
  feeDenom: "unibi",
}

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

/**
 * Sends 10 NIBI and 100_000 NUSD to the given address from the testnet faucet.
 */
export async function useFaucet(
  address: string,
  faucetUrl?: string,
): Promise<Response> {
  const amtNibi = 10
  const amtNusd = 100_000
  const coins: string[] = [
    `${(amtNibi * 1_000_000).toString()}unibi`,
    `${(amtNusd * 1_000_000).toString()}unusd`,
  ]
  faucetUrl = faucetUrl ?? "https://faucet.testnet-1.nibiru.fi/"
  console.info(
    `Requesting funds from faucet @ ${faucetUrl}: 
    Coins: ${coins}
    Address: ${address}
    `,
  )

  const resp = await fetch(faucetUrl, {
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
  return resp
}

export async function queryChainIdWithRest(
  chain: Chain,
): Promise<[string | undefined, Error | undefined]> {
  const queryChainId = async (chain: Chain): Promise<string> => {
    const response = await fetch(`${chain.endptRest}/node_info`)
    const nodeInfo: { node_info: { network: string } } = await response.json()
    return nodeInfo.node_info.network
  }

  const [chainId, err] = await go(queryChainId(chain))
  return [chainId, err]
}

export async function isRestEndptLive(network: Chain): Promise<boolean> {
  let isLive: boolean = false
  const [chainId, err] = await queryChainIdWithRest(network)
  if (chainId) {
    isLive = true
  }
  return isLive
}

export async function isRestEndptValid(network: Chain): Promise<boolean> {
  let isLive: boolean = true
  const [chainId, err] = await queryChainIdWithRest(network)
  if (!chainId) {
    isLive = false
  } else if (chainId !== network.chainId) {
    isLive = false
  }
  return isLive
}
