import { fetch } from "cross-fetch"
import { Result } from "../result"

/**
 * Specifies chain information for all endpoints a Nibiru node exposes such as the
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
  prefix?: string // e.g. `nibiru`
  shortName: string // e.g. `testnet`
  number: number // e.g. `1`
  mainnet?: boolean
}

/** CustomChain is a convenience class for intializing the endpoints of a chain
 * based on its chain ID.
 *
 * @example
 * ```ts
 * export const TEST_CHAIN = new CustomChain({
 *   prefix: "nibiru",
 *   shortName: "testnet",
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

    const chainEndpt = chainIdParts.mainnet
      ? ""
      : `.${chainIdParts.shortName}-${chainIdParts.number}`

    this.endptTm = `https://rpc${chainEndpt}.nibiru.fi`
    this.endptRest = `https://lcd${chainEndpt}.nibiru.fi`
    this.endptGrpc = `grpc${chainEndpt}.nibiru.fi`
  }

  public static fromChainId(chainId: string): Chain {
    const parts = chainId.split("-")
    const chainIdParts: ChainIdParts = {
      prefix: parts[0],
      shortName: parts[1],
      number: parseInt(parts[2]),
    }
    return new CustomChain(chainIdParts)
  }

  private initChainId = () => {
    const { prefix, shortName, number } = this.chainIdParts
    return [prefix, shortName, number]
      .filter((v) => Boolean(v) || Number(v) === 0)
      .join("-")
  }
}

/** Localnet: "Chain" configuration for a local Nibiru network. A local
 * environment is no different from a real one, except that it has a single
 * validator running on your host machine. Localnet is primarily used as a
 * controllable, isolated development environment for testing purposes. */
export const Localnet: Chain = {
  endptTm: "http://127.0.0.1:26657",
  endptRest: "http://127.0.0.1:1317",
  endptGrpc: "http://127.0.0.1:9090",
  chainId: "nibiru-localnet-0",
  chainName: "Nibiru Localnet (Default)",
  feeDenom: "unibi",
}

/** Testnet: "Chain" configuration for a Nibiru testnet. These are public
 * networks that are upgraded in advance of Nibiru's mainnet network as a
 * beta-testing environments.
 *
 * For an updated list of active networks, see:
 * TODO: Add networks link
 * - <a href="https://nibiru.fi/docs/">Networks | Nibiru Docs (Recommended)</a>
 * - <a href="https://github.com/NibiruChain/Networks/tree/main">NibiruChain/Networks (GitHub)</a>
 *
 * By default, the "Testnet" function returns the permanent testnet if no
 * arguments are passed.
 * */
export const Testnet = (chainNumber: number = 1) =>
  new CustomChain({
    prefix: "nibiru",
    shortName: "testnet",
    number: chainNumber,
  })

/** @deprecated Incentivized testnet is no longer active. This variable exists
 * for backwards compatibility, but "Testnet" should be used instead.
 *
 * @see Testnet - Permanent Nibiru public test network.
 */
export const IncentivizedTestnet = Testnet

/** Devnet: "Chain" configuration for a Nibiru "devnet". These networks
 * are more ephemeral than "Testnet" and used internally by the core Nibiru
 * dev team to live-test new features before official public release.
 * */
export const Devnet = (chainNumber: number) =>
  new CustomChain({
    prefix: "nibiru",
    shortName: "devnet",
    number: chainNumber,
  })

export const queryChainIdWithRest = async (
  chain: Chain
): Promise<Result<string>> => {
  const queryChainId = async (chain: Chain): Promise<string> => {
    const response = await fetch(
      `${chain.endptRest}/cosmos/base/tendermint/v1beta1/node_info`
    )
    const nodeInfo: { default_node_info: { network: string } } =
      await response.json()
    return nodeInfo.default_node_info.network
  }

  return Result.ofSafeExecAsync(async () => queryChainId(chain))
}

/** isRestEndptLive: Makes a request using the chain's REST endpoint to see if
 * the network and endpoint are active. */
export const isRestEndptLive = async (chain: Chain): Promise<boolean> => {
  const res = await queryChainIdWithRest(chain)
  return res.isOk()
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
