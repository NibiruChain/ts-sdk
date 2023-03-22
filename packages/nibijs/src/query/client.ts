import {
  DistributionExtension,
  GovExtension,
  QueryClient,
  setupDistributionExtension,
  setupGovExtension,
  StargateClient,
  StargateClientOptions,
} from "@cosmjs/stargate"
import { Tendermint34Client } from "@cosmjs/tendermint-rpc"
import { EpochsExtension, setupEpochsExtension } from "./epochs"
import { OracleExtension, setupOracleExtension } from "./oracle"
import { PerpExtension, setupPerpExtension } from "./perp"
import { setupSpotExtension, SpotExtension } from "./spot"
import { setupVpoolExtension, VpoolExtension } from "./vpool"

export type NibiruExtensions = QueryClient &
  SpotExtension &
  PerpExtension &
  VpoolExtension &
  OracleExtension &
  EpochsExtension &
  DistributionExtension &
  GovExtension

export class NibiruClient extends StargateClient {
  public readonly nibiruExtensions: NibiruExtensions

  public static async connect(
    endpoint: string,
    options: StargateClientOptions = {},
  ): Promise<NibiruClient> {
    const tmClient = await Tendermint34Client.connect(endpoint)
    return new NibiruClient(tmClient, options)
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
    )
  }
}
