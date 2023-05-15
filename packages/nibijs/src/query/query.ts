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
import { Tendermint34Client } from "@cosmjs/tendermint-rpc"
import {
  CosmWasmClient,
  setupWasmExtension,
  WasmExtension,
} from "@cosmjs/cosmwasm-stargate"
import { EpochsExtension, setupEpochsExtension } from "./epochs"
import { OracleExtension, setupOracleExtension } from "./oracle"
import { PerpExtension, setupPerpExtension } from "./perp"
import { setupSpotExtension, SpotExtension } from "./spot"
import { setupUtilsExtension, UtilsExtension } from "./util"
import { setupVpoolExtension, VpoolExtension } from "./vpool"

export type NibiruExtensions = QueryClient &
  SpotExtension &
  PerpExtension &
  VpoolExtension &
  OracleExtension &
  EpochsExtension &
  DistributionExtension &
  GovExtension &
  UtilsExtension &
  StakingExtension &
  IbcExtension &
  WasmExtension &
  AuthExtension

export class NibiruQueryClient extends StargateClient {
  public readonly nibiruExtensions: NibiruExtensions
  public readonly wasmClient: CosmWasmClient

  public static async connect(
    endpoint: string,
    options: StargateClientOptions = {},
  ): Promise<NibiruQueryClient> {
    const tmClient = await Tendermint34Client.connect(endpoint)
    const wasmClient = await CosmWasmClient.connect(endpoint)
    return new NibiruQueryClient(tmClient, options, wasmClient)
  }

  protected constructor(
    tmClient: Tendermint34Client,
    options: StargateClientOptions,
    wasmClient: CosmWasmClient,
  ) {
    super(tmClient, options)
    this.wasmClient = wasmClient
    this.nibiruExtensions = QueryClient.withExtensions(
      tmClient,
      setupEpochsExtension,
      setupOracleExtension,
      setupPerpExtension,
      setupSpotExtension,
      setupVpoolExtension,
      setupDistributionExtension,
      setupGovExtension,
      setupStakingExtension,
      setupUtilsExtension,
      setupIbcExtension,
      setupWasmExtension,
      setupAuthExtension,
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
