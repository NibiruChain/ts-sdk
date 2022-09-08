/**
 * @fileoverview High-level description of the file.
 *
 *
 * - item 0
 * - item 1
 */

import { Network } from "./common"
import { ExtendedQueryClient, initQueryCmd, QueryCmd } from "./query"
import { initTx, TxCmd } from "./tx"
import { Tendermint34Client } from "@cosmjs/tendermint-rpc"

/**
 * Assembles an all-purpose SDK for interacting with the Nibiru blockchain.
 *
 * If transaction signing is not needed, simply pass an empty string for the
 * mnemonic. The querier and Tendermint client will still function normally.
 *
 * @param {Network} network
 * @param {string} mnemonic
 * @returns {Promise<Sdk>}
 */
export async function newSdk(network: Network, mnemonic: string): Promise<Sdk> {
  const txCmd = await initTx(network, mnemonic)
  const queryCmd = await initQueryCmd(network)
  return new Sdk({ network, txCmd, queryCmd })
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
class Sdk {
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
