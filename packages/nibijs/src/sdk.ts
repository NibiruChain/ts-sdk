/**
 * @fileoverview Implements the 'Sdk' object, the main entrypoint to the
 * Nibiru TypeScript SDK. The SDK is accessible from the 'newSdk' function.
 *
 */
import { Network } from "./common"
import { ExtendedQueryClient, initQueryCmd, QueryCmd } from "./query"
import { CosmosSigner, newTxCmd, TxCmd } from "./tx"
import { Tendermint34Client } from "@cosmjs/tendermint-rpc"

/**
 * Assembles an all-purpose SDK for interacting with the Nibiru blockchain.
 *
 * If transaction signing is not needed, simply pass an empty string for the
 * mnemonic. The querier and Tendermint client will still function normally.
 *
 * @param {Network} network
 * @param {CosmosSigner} signer
 * @returns {Promise<Sdk>}
 */
export async function newSdk(network: Network, signer: CosmosSigner): Promise<Sdk> {
  const txCmd = await newTxCmd(network, signer)
  const queryCmd = await initQueryCmd(network)
  return new Sdk({ network, txCmd, queryCmd })
}

export interface ISdk {
  network: Network
  tx: TxCmd
  query: ExtendedQueryClient
  tmClient: Tendermint34Client
}

/**
 * The 'Sdk' object is the main entrypoint to the Nibiru TypeScript SDK.
 * It can be used to interact with the Nibiru blockchain from Node or browser
 * environments.
 *
 * @example querying the block at height 1
 * ```ts
 * import { Testnet, newSdk } from "@nibiruchain/nibijs"
 * const sdk = newSdk(Testnet, myMnemonic)
 * const blockHeight = 1
 * const block = sdk.tmClient.block(blockHeight)
 * ```
 *
 * @example sending funds
 * ```ts
 * import { Testnet, newSdk, newCoins, Coin } from "@nibiruchain/nibijs"
 * const sdk = newSdk(Testnet, myMnemonic)
 * const tokens: Coin[] = newCoins(5, "unibi")
 * const toAddr: string = "..." // bech32 address of the receiving party
 * let txResp = sdk.tx.sendTokens(toAddr, tokens)
 * ```
 */
class Sdk implements ISdk {
  network: Network
  tx: TxCmd
  query: ExtendedQueryClient
  tmClient: Tendermint34Client

  /**
   * Creates an instance of Sdk.
   *
   * @constructor
   * @param {{ network: Network; txCmd: TxCmd; query: QueryCmd }} args
   */
  constructor(args: { network: Network; txCmd: TxCmd; queryCmd: QueryCmd }) {
    const { network, txCmd, queryCmd } = args
    this.network = network
    this.tx = txCmd
    this.query = queryCmd.client
    this.tmClient = queryCmd.tmClient
  }
}
