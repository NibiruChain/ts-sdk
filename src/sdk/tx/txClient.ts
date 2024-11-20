import { GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing"
import {
  defaultRegistryTypes,
  GasPrice,
  QueryClient,
  setupAuthExtension,
  setupDistributionExtension,
  setupGovExtension,
  setupIbcExtension,
  setupStakingExtension,
  SigningStargateClient,
  SigningStargateClientOptions,
} from "@cosmjs/stargate"
import { Tendermint37Client } from "@cosmjs/tendermint-rpc"
import { setupWasmExtension } from "@cosmjs/cosmwasm-stargate"
import {
  ethTypes,
  NibiruExtensions,
  setupNibiruExtension,
  tokenfactoryTypes,
} from ".."
import { accountFromNibiru } from "./account"
import {
  NibiSigningCosmWasmClient,
  NibiSigningCosmWasmClientOptions,
} from "../core/signingcosmwasmclient"

export const nibiruRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ...defaultRegistryTypes,
  ...tokenfactoryTypes,
  ...ethTypes,
]

export class NibiruTxClient extends SigningStargateClient {
  public readonly nibiruExtensions: NibiruExtensions
  public readonly wasmClient: NibiSigningCosmWasmClient

  protected constructor(
    tmClient: Tendermint37Client,
    signer: OfflineSigner,
    options: SigningStargateClientOptions,
    wasm: NibiSigningCosmWasmClient
  ) {
    super(tmClient, signer, options)
    this.wasmClient = wasm
    this.nibiruExtensions = QueryClient.withExtensions(
      tmClient,
      setupDistributionExtension,
      setupGovExtension,
      setupStakingExtension,
      setupIbcExtension,
      setupWasmExtension,
      setupAuthExtension,
      setupNibiruExtension
    )
  }

  public static async connectWithSigner(
    endpoint: string,
    signer: OfflineSigner,
    options: SigningStargateClientOptions = {},
    wasmOptions: NibiSigningCosmWasmClientOptions = {}
  ): Promise<NibiruTxClient> {
    const tmClient = await Tendermint37Client.connect(endpoint)
    const wasmClient = await NibiSigningCosmWasmClient.connectWithSigner(
      endpoint,
      signer,
      {
        gasPrice: GasPrice.fromString("0.025unibi"),
        registry: new Registry(nibiruRegistryTypes),
        accountParser: accountFromNibiru,
        ...wasmOptions,
      }
    )
    return new NibiruTxClient(
      tmClient,
      signer,
      {
        registry: new Registry(nibiruRegistryTypes),
        gasPrice: GasPrice.fromString("0.025unibi"),
        broadcastPollIntervalMs: 1_000, // 1 second poll times
        accountParser: accountFromNibiru,
        ...options,
      },
      wasmClient
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
