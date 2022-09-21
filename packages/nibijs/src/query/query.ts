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
import { setupPerpExtension, PerpExtension } from "./perp"
import { setupVpoolExtension, VpoolExtension } from "./vpool"

export type ExtendedQueryClient = BankExtension &
  QueryClient &
  AuthExtension &
  DexExtension &
  PerpExtension &
  VpoolExtension

export interface IQueryCmd {
  client: ExtendedQueryClient
  tmClient: Tendermint34Client
  disconnect: () => void
}

export async function waitForNextBlock(chain: Chain): Promise<void> {
  const queryCmd = await initQueryCmd(chain)
  const getLatestBlockHeight = async () =>
    (await queryCmd.tmClient.abciInfo()).lastBlockHeight
  const startBlock = await getLatestBlockHeight()
  while (startBlock! >= (await getLatestBlockHeight())!) {
    await new Promise((resolve) => setTimeout(resolve, 300))
  }
}

export async function waitForBlockHeight(args: {
  chain: Chain
  height: number
}): Promise<void> {
  const { chain, height } = args
  const queryCmd = await initQueryCmd(chain)
  const getLatestBlockHeight = async () =>
    (await queryCmd.tmClient.abciInfo()).lastBlockHeight

  if (height < (await getLatestBlockHeight())!) {
    return
  } else {
    while ((await getLatestBlockHeight())! < height) {
      await new Promise((resolve) => setTimeout(resolve, 300))
    }
  }
}

export class QueryCmd implements IQueryCmd {
  client: ExtendedQueryClient
  tmClient: Tendermint34Client

  constructor(tmClient: Tendermint34Client) {
    this.tmClient = tmClient
    this.client = QueryClient.withExtensions(
      tmClient,
      setupBankExtension,
      setupAuthExtension,
      setupDexExtension,
      setupPerpExtension,
      setupVpoolExtension,
    )
  }

  disconnect = (): void => {
    this.tmClient.disconnect()
  }
}

export async function initQueryCmd(chain: Chain): Promise<QueryCmd> {
  const tmClient = await Tendermint34Client.connect(chain.endptTm)
  return new QueryCmd(tmClient)
}
