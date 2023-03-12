import {
  QueryClient,
  setupBankExtension,
  setupAuthExtension,
  BankExtension,
  AuthExtension,
} from "@cosmjs/stargate"
import { Tendermint34Client } from "@cosmjs/tendermint-rpc"
import { Chain } from "../chain"
import { setupSpotExtension, SpotExtension } from "./spot"
import { EpochsExtension, setupEpochsExtension } from "./epochs"
import { setupPerpExtension, PerpExtension } from "./perp"
import { OracleExtension, setupOracleExtension } from "./oracle"
import { setupStakingExtension, StakingExtension } from "./staking"
import { setupVpoolExtension, VpoolExtension } from "./vpool"
import { DistributionExtension, setupDistributionExtension } from "./distribution"

export type ExtendedQueryClient = BankExtension &
  QueryClient &
  AuthExtension &
  SpotExtension &
  PerpExtension &
  VpoolExtension &
  OracleExtension &
  EpochsExtension &
  StakingExtension &
  DistributionExtension

export interface IQueryCmd {
  /**
   * An ExtendedQueryClient is the closest analogy to the query command of nibid CLI.
   * It contains queries for all of the active modules of Nibiru Chain.
   */
  client: ExtendedQueryClient
  tmClient: Tendermint34Client
  /** The chain to which this query client corresponds.
   * E.g. nibiru-testnet-1, nibiru-localnet-42 */
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
      setupSpotExtension,
      setupPerpExtension,
      setupVpoolExtension,
      setupOracleExtension,
      setupEpochsExtension,
      setupStakingExtension,
      setupDistributionExtension,
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
