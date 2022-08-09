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
  /** endpointRpc: endpoint for the gRPC gateway. Usually 26657 or 9090. */
  endpointRpc: string
  /** endpointRest: endpoint for the REST server. Also, the LCD endpoint. */
  endpointRest: string
  /** chainId: identifier for the chain */
  chainId: string
  chainName: string
  feeDenom: string
}

export const LocalNetwork: Network = {
  endpointRpc: "127.0.0.1:26657",
  endpointRest: "127.0.0.1:1317",
  chainId: "nibiru-localnet-0",
  chainName: "Nibiru localnet",
  feeDenom: "unibi",
}

export const TestnetNetwork: Network = {
  endpointRpc: "rpc.nibiru.fi:9090",
  endpointRest: "https://lcd.nibiru.fi",
  chainId: "nibiru-testnet-3",
  chainName: "Nibiru testnet",
  feeDenom: "unibi",
}

export const CONFIG_DEVNET = {
  host: process.env.HOST,
  lcdPort: 1317,
  grpcPort: 9090,
}

/**
 * DevnetNetwork is a private chain with trading bots, an oracle, and a node
 * running an updated version of Nibiru. This environment is useful for live
 * testing.
 */
export const DevnetNetwork: Network = {
  // endpointRpc: `${CONFIG_DEVNET.host}:${CONFIG_DEVNET.grpcPort}`,
  endpointRpc: `http://${CONFIG_DEVNET.host}:${26657}`,
  // endpointRest: `http://${CONFIG_DEVNET.host}.:${CONFIG_DEVNET.lcdPort}`,
  endpointRest: `http://${CONFIG_DEVNET.host}:${CONFIG_DEVNET.lcdPort}`,
  chainId: "nibiru-localnet-0",
  chainName: "Nibiru devnet",
  feeDenom: "unibi",
}
