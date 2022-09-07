import {
  QueryClient,
  setupBankExtension,
  setupAuthExtension,
  BankExtension,
  AuthExtension,
} from "@cosmjs/stargate"
import { Tendermint34Client } from "@cosmjs/tendermint-rpc"
import { network } from "../common"
import { setupDexExtension, DexExtension } from "./dex"
import { setupPerpExtension, PerpExtension } from "./perp"

export type ExtendedQueryClient = BankExtension &
  QueryClient &
  AuthExtension &
  DexExtension &
  PerpExtension

export interface IQueryCmd {
  client: ExtendedQueryClient
  tmClient: Tendermint34Client
  disconnect: () => void
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
    )
  }

  disconnect = () => {
    this.tmClient.disconnect()
  }
}

export async function initQueryCmd(network: network.Network): Promise<QueryCmd> {
  const tmClient = await Tendermint34Client.connect(network.endptTm)
  return new QueryCmd(tmClient)
}
