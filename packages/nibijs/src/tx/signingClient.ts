import { GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing"
import {
  defaultRegistryTypes,
  GasPrice,
  QueryClient,
  setupDistributionExtension,
  setupGovExtension,
  setupIbcExtension,
  setupStakingExtension,
  SigningStargateClient,
  SigningStargateClientOptions,
} from "@cosmjs/stargate"
import { Tendermint34Client } from "@cosmjs/tendermint-rpc"
import { perpTypes } from "../msg/perp"
import { spotTypes } from "../msg/spot"
import { setupEpochsExtension } from "../query/epochs"
import { setupOracleExtension } from "../query/oracle"
import { setupPerpExtension } from "../query/perp"
import { NibiruExtensions } from "../query/query"
import { setupSpotExtension } from "../query/spot"
import { setupUtilsExtension } from "../query/util"
import { setupVpoolExtension } from "../query/vpool"

export const nibiruRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ...defaultRegistryTypes,
  ...perpTypes,
  ...spotTypes,
]

export class NibiruSigningClient extends SigningStargateClient {
  public readonly nibiruExtensions: NibiruExtensions

  public static async connectWithSigner(
    endpoint: string,
    signer: OfflineSigner,
    options: SigningStargateClientOptions = {},
  ): Promise<NibiruSigningClient> {
    const tmClient = await Tendermint34Client.connect(endpoint)
    return new NibiruSigningClient(tmClient, signer, {
      registry: new Registry(nibiruRegistryTypes),
      gasPrice: GasPrice.fromString("0.025unibi"),
      broadcastPollIntervalMs: 1_000, // 1 second poll times
      ...options,
    })
  }

  protected constructor(
    tmClient: Tendermint34Client,
    signer: OfflineSigner,
    options: SigningStargateClientOptions,
  ) {
    super(tmClient, signer, options)
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
    while (currentHeight == (await this.getHeight())) {
      await new Promise((resolve) => {
        setTimeout(resolve, 300)
      })
    }
  }
}
