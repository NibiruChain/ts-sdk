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
import {
  SigningCosmWasmClient,
  SigningCosmWasmClientOptions,
  setupWasmExtension,
} from "@cosmjs/cosmwasm-stargate"
import { NibiruExtensions, setupNibiruExtension } from ".."
import { accountFromNibiru } from "./account"

export const nibiruRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ...defaultRegistryTypes,
]

export class NibiruTxClient extends SigningStargateClient {
  public readonly nibiruExtensions: NibiruExtensions
  public readonly wasmClient: SigningCosmWasmClient

  protected constructor(
    tmClient: Tendermint37Client,
    signer: OfflineSigner,
    options: SigningStargateClientOptions,
    wasm: SigningCosmWasmClient
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
    wasmOptions: SigningCosmWasmClientOptions = {}
  ): Promise<NibiruTxClient> {
    const tmClient = await Tendermint37Client.connect(endpoint)
    const wasmClient = await SigningCosmWasmClient.connectWithSigner(
      endpoint,
      signer,
      {
        gasPrice: GasPrice.fromString("0.025unibi"),
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
