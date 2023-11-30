import {
  AuthExtension,
  DistributionExtension,
  GovExtension,
  IbcExtension,
  QueryClient,
  setupAuthExtension,
  setupDistributionExtension,
  setupGovExtension,
  setupIbcExtension,
  setupStakingExtension,
  StakingExtension,
  StargateClient,
  StargateClientOptions,
} from "@cosmjs/stargate"
import { Tendermint37Client } from "@cosmjs/tendermint-rpc"
import {
  CosmWasmClient,
  setupWasmExtension,
  WasmExtension,
} from "@cosmjs/cosmwasm-stargate"
import { EpochsExtension, setupEpochsExtension } from "./epochs"
import { OracleExtension, setupOracleExtension } from "./oracle"
import { PerpExtension, setupPerpExtension } from "./perp"
import { setupSpotExtension, SpotExtension } from "./spot"
import { setupSudoExtension, SudoExtension } from "./sudo"
import { InflationExtension, setupInflationExtension } from "./inflation"

export type NibiruExtensions = QueryClient &
  SpotExtension &
  PerpExtension &
  SudoExtension &
  InflationExtension &
  OracleExtension &
  EpochsExtension &
  DistributionExtension &
  GovExtension &
  StakingExtension &
  IbcExtension &
  WasmExtension &
  AuthExtension

export class NibiruQueryClient extends StargateClient {
  public readonly nibiruExtensions: NibiruExtensions
  public readonly wasmClient: CosmWasmClient

  public static async connect(
    endpoint: string,
    options: StargateClientOptions = {}
  ): Promise<NibiruQueryClient> {
    const tmClient = await Tendermint37Client.connect(endpoint)
    const wasmClient = await CosmWasmClient.connect(endpoint)
    return new NibiruQueryClient(tmClient, options, wasmClient)
  }

  protected constructor(
    tmClient: Tendermint37Client,
    options: StargateClientOptions,
    wasmClient: CosmWasmClient
  ) {
    super(tmClient, options)
    this.wasmClient = wasmClient
    this.nibiruExtensions = QueryClient.withExtensions(
      tmClient,
      setupEpochsExtension,
      setupOracleExtension,
      setupPerpExtension,
      setupSudoExtension,
      setupInflationExtension,
      setupSpotExtension,
      setupDistributionExtension,
      setupGovExtension,
      setupStakingExtension,
      setupIbcExtension,
      setupWasmExtension,
      setupAuthExtension
    )
  }

  public async waitForHeight(height: number) {
    while ((await this.getHeight()) < height) {
      await new Promise((resolve) => {
        setTimeout(resolve, 300)
      })
    }
  }

  public async waitForNextBlock() {
    const currentHeight = await this.getHeight()
    while (currentHeight >= (await this.getHeight())) {
      await new Promise((resolve) => {
        setTimeout(resolve, 300)
      })
    }
  }
}
