import {
  QueryClient,
  setupBankExtension,
  setupAuthExtension,
  BankExtension,
  AuthExtension,
} from "@cosmjs/stargate"
import { Tendermint34Client } from "@cosmjs/tendermint-rpc"
import { Chain } from "../chain"
import { setupDexExtension, DexExtension } from "./dex"
import { EpochsExtension, setupEpochsExtension } from "./epochs"
import { setupPerpExtension, PerpExtension } from "./perp"
import { PricefeedExtension, setupPricefeedExtension } from "./pricefeed"
import { setupVpoolExtension, VpoolExtension } from "./vpool"

export type ExtendedQueryClient = BankExtension &
  QueryClient &
  AuthExtension &
  DexExtension &
  PerpExtension &
  VpoolExtension &
  PricefeedExtension &
  EpochsExtension

export interface IQueryCmd {
  client: ExtendedQueryClient
  tmClient: Tendermint34Client
  chain: Chain
  disconnect: () => void
}

export async function waitForNextBlock(chain: Chain): Promise<void> {
  const queryCmd = await newQueryCmd(chain)
  const getLatestBlockHeight = async () =>
    (await queryCmd.tmClient.abciInfo()).lastBlockHeight
  const startBlock = await getLatestBlockHeight()
  while (startBlock! >= (await getLatestBlockHeight())!) {
    await new Promise((resolve): void => {
      setTimeout(resolve, 300)
    })
  }
}

export async function waitForBlockHeight(args: {
  chain: Chain
  height: number
}): Promise<void> {
  const { chain, height } = args
  const queryCmd = await newQueryCmd(chain)
  const getLatestBlockHeight = async () =>
    (await queryCmd.tmClient.abciInfo()).lastBlockHeight

  if (!(height < (await getLatestBlockHeight())!)) {
    while ((await getLatestBlockHeight())! < height) {
      await new Promise((resolve): void => {
        setTimeout(resolve, 300)
      })
    }
  }
}

export class QueryCmd implements IQueryCmd {
  client: ExtendedQueryClient

  tmClient: Tendermint34Client

  chain: Chain

  constructor(tmClient: Tendermint34Client, chain: Chain) {
    this.tmClient = tmClient
    this.chain = chain
    this.client = QueryClient.withExtensions(
      tmClient,
      setupBankExtension,
      setupAuthExtension,
      setupDexExtension,
      setupPerpExtension,
      setupVpoolExtension,
      setupPricefeedExtension,
      setupEpochsExtension,
    )
  }

  disconnect = (): void => {
    this.tmClient.disconnect()
  }
}

export async function newQueryCmd(chain: Chain): Promise<QueryCmd> {
  const tmClient = await Tendermint34Client.connect(chain.endptTm)
  return new QueryCmd(tmClient, chain)
}
