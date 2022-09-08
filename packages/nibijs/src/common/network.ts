import * as dotenv from "dotenv"

dotenv.config() // yarn add -D dotenv

/**
 * Specifies chain information for all endpoints a node exposes such as the
 * gRPC server, Tendermint RPC endpoint, and REST server.
 *
 * @see https://docs.cosmos.network/master/core/grpc_rest.html
 * @export
 * @interface Network
 * @typedef {Network}
 */
export interface Network {
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

export const Localnet: Network = {
  endptTm: "127.0.0.1:26657",
  endptRest: "127.0.0.1:1317",
  chainId: "nibiru-localnet-0",
  chainName: "Nibiru Localnet",
  feeDenom: "unibi",
}

export const Testnet: Network = {
  endptTm: "https://rpc.testnet-3.nibiru.fi",
  endptRest: "https://lcd.testnet-3.nibiru.fi",
  endptGrpc: "",
  chainId: "nibiru-testnet-3",
  chainName: "nibiru-testnet-3",
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
export const Chaosnet: Network = {
  endptGrpc: `http://${CHAOSNET_CONFIG.host}:${CHAOSNET_CONFIG.tmPort}`,
  endptTm: `http://${CHAOSNET_CONFIG.host}:${CHAOSNET_CONFIG.tmPort}`,
  endptRest: `http://${CHAOSNET_CONFIG.host}:${CHAOSNET_CONFIG.lcdPort}`,
  chainId: "nibiru-localnet-0",
  chainName: "Nibiru Chaosnet",
  feeDenom: "unibi",
}
