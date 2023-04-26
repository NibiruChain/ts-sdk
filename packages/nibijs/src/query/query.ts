import {
  DistributionExtension,
  GovExtension,
  IbcExtension,
  QueryClient,
  setupDistributionExtension,
  setupGovExtension,
  setupIbcExtension,
  setupStakingExtension,
  StakingExtension,
  StargateClient,
  StargateClientOptions,
} from "@cosmjs/stargate"
import { Tendermint34Client } from "@cosmjs/tendermint-rpc"
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
  IbcExtension

export class NibiruQueryClient extends StargateClient {
  public readonly nibiruExtensions: NibiruExtensions

  public static async connect(
    endpoint: string,
    options: StargateClientOptions = {},
  ): Promise<NibiruQueryClient> {
    const tmClient = await Tendermint34Client.connect(endpoint)
    return new NibiruQueryClient(tmClient, options)
  }

  protected constructor(tmClient: Tendermint34Client, options: StargateClientOptions) {
    super(tmClient, options)
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
