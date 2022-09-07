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

interface ISdk {
  tx: TxCmd
  query: ExtendedQueryClient
  tmClient: Tendermint34Client
}

export async function createSdk(network: Network, mnemonic: string): Promise<ISdk> {
  const txCmd = await initTx(network, mnemonic)
  const queryCmd = await initQueryCmd(network)
  return new Sdk({ network, txCmd, queryCmd })
}

/**
 * TODO docs
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
