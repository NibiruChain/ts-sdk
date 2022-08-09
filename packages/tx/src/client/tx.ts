import { SigningStargateClient, calculateFee, GasPrice, StdFee } from "@cosmjs/stargate"
import { GAS_PRICE, Network } from "@nibiruchain/common"
import { Coin, OfflineDirectSigner } from "@cosmjs/proto-signing"
import { getKeplr, Keplr } from "../wallet"
import { registerTypes as registerDex } from "./dex"
import { registerTypes as registerPerp } from "./perp"
import { getRegistry, TxMessage, fromMnemonic } from "./common"

export type Address = string

export class TxImpl {
  client: SigningStargateClient

  private fee?: StdFee

  private directSigner: OfflineDirectSigner

  constructor(client: SigningStargateClient, directSigner: OfflineDirectSigner) {
    this.client = client
    this.directSigner = directSigner
    this.fee = undefined
  }

  withFee(gasLimit: number, gasPrice: string | GasPrice = GAS_PRICE) {
    this.fee = calculateFee(Math.round(gasLimit), gasPrice)
    return this
  }

  async simulate(...msgs: TxMessage[]) {
    const addr = await this.directSigner.getAccounts()
    return this.client.simulate(addr[0].address, msgs, undefined)
  }

  async signAndBroadcast(...msgs: TxMessage[]) {
    const addr = await this.directSigner.getAccounts()
    await this.ensureFee(...msgs)
    return this.client.signAndBroadcast(addr[0].address, msgs, this.fee!)
  }

  async ensureFee(...msgs: TxMessage[]) {
    if (!this.fee) {
      const gasUsed = await this.simulate(...msgs)
      this.withFee(gasUsed * 1.25)
    }
  }

  async sendTokens(to: string, coins: Coin[]) {
    const addr = await this.directSigner.getAccounts()
    return this.client.sendTokens(addr[0].address, to, coins, this.fee!)
  }

  getAccounts() {
    return this.directSigner.getAccounts()
  }
}

function registerModules() {
  const registry = getRegistry()
  registerDex(registry)
  registerPerp(registry)
  return registry
}

async function getSigner(network: Network, mnemonic: string) {
  if (mnemonic === "") {
    const keplr: Keplr = await getKeplr(network)
    return keplr.getOfflineSigner(network.chainId)
  }
  return fromMnemonic(mnemonic)
}

export async function initTx(network: Network, mnemonic = ""): Promise<TxImpl> {
  const registry = registerModules()
  const offlineSigner = await getSigner(network, mnemonic)

  const client = await SigningStargateClient.connectWithSigner(
    network.endpointRpc,
    offlineSigner,
    { registry },
  )
  return new TxImpl(client, offlineSigner)
}
