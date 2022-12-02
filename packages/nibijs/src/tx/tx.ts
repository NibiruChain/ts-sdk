import {
  SigningStargateClient,
  calculateFee,
  GasPrice,
  StdFee,
  DeliverTxResponse,
} from "@cosmjs/stargate"
import {
  AccountData,
  Coin,
  DirectSecp256k1HdWallet,
  OfflineDirectSigner,
  OfflineSigner,
  Registry,
} from "@cosmjs/proto-signing"
import { GAS_PRICE, Chain, go } from "../chain"
import { registerTypes as registerDex } from "../msg/dex"
import { registerTypes as registerPerp } from "../msg/perp"
import { getRegistry } from "./signer"
import { TxMessage } from "../msg/types"
import { waitForNextBlock } from "../query"
import { BankMsgs } from "../msg/bank"

export type Address = string
export type CosmosSigner =
  | (OfflineSigner & OfflineDirectSigner)
  | DirectSecp256k1HdWallet

/**
 * TODO docs
 *
 * @export
 * @class TxCmd
 * @typedef {TxCmd}
 */
export class TxCmd {
  client: SigningStargateClient

  chain: Chain

  private fee?: StdFee

  private directSigner: OfflineDirectSigner

  constructor(
    client: SigningStargateClient,
    directSigner: OfflineDirectSigner,
    chain: Chain,
  ) {
    this.client = client
    this.chain = chain
    this.directSigner = directSigner
    this.fee = undefined
  }

  withFee(gasLimit: number, gasPrice: string | GasPrice = GAS_PRICE) {
    this.fee = calculateFee(Math.round(gasLimit), gasPrice)
    return this
  }

  /**
   * Simulates a transaction containing the given list of tx messages, 'msgs' and
   * returns an estimate of how many gas units are required.
   *
   * @async
   * @param {...TxMessage[]} msgs
   * @returns {Promise<number>} - expected gas cost (units of unibi)
   */
  async simulate(...msgs: TxMessage[]): Promise<number> {
    const addr = await this.directSigner.getAccounts()
    return this.client.simulate(addr[0].address, msgs, undefined)
  }

  async signAndBroadcast(...msgs: TxMessage[]): Promise<DeliverTxResponse> {
    const accounts = await this.directSigner.getAccounts()
    await this.ensureFee(...msgs)
    return this.client.signAndBroadcast(accounts[0].address, msgs, this.fee ?? "auto")
  }

  async ensureFee(...msgs: TxMessage[]): Promise<void> {
    const addSimulatedFeeToCmd = async () => {
      const gasUsed = await this.simulate(...msgs)
      this.withFee(gasUsed * 1.25)
    }

    if (!this.fee) {
      let { err } = await go(addSimulatedFeeToCmd())
      if (err) {
        await waitForNextBlock(this.chain)
        ;({ err } = await go(addSimulatedFeeToCmd()))
        if (err) throw err
      }
    }
  }

  async sendTokens(to: string, coins: Coin[]) {
    const [{ address: from }] = await this.directSigner.getAccounts()
    const msgSend = BankMsgs.Send(from, to, coins)
    return this.signAndBroadcast(msgSend)
  }

  getAccounts(): Promise<readonly AccountData[]> {
    return this.directSigner.getAccounts()
  }
}

function registerModules(): Registry {
  const registry = getRegistry()
  registerDex(registry)
  registerPerp(registry)
  return registry
}

export async function newTxCmd(
  chain: Chain,
  signer: (OfflineSigner & OfflineDirectSigner) | DirectSecp256k1HdWallet,
): Promise<TxCmd> {
  const registry = registerModules()
  const client = await SigningStargateClient.connectWithSigner(
    chain.endptTm, // may need endptGrpc
    signer,
    { registry },
  )
  return new TxCmd(client, signer, chain)
}
