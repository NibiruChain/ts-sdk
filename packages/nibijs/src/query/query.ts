import {
  AuthExtension,
  DistributionExtension,
  GovExtension,
  IbcExtension,
  QueryClient as StargateQueryClient,
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
import { TxResponse } from "@cosmjs/tendermint-rpc/build/tendermint37"
import { Result } from "../result"
import { bytesToHex, hexToBytes } from "../hash"

export type NibiruExtensions = StargateQueryClient &
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

/** Querier for a Nibiru network.
 * @example
 * import { NibiruQueryClient, Tesnet } from "@nibiruchain/nibijs"
 * const chain = Testnet()
 * const querier = await NibiruQueryClient.connect(chain.endptTm)
 * */
export class NibiruQueryClient extends StargateClient {
  public readonly nibiruExtensions: NibiruExtensions
  public readonly wasmClient: CosmWasmClient
  public readonly tm: Tendermint37Client

  public static async connect(
    endpoint: string,
    options: StargateClientOptions = {},
  ): Promise<NibiruQueryClient> {
    const tmClient = await Tendermint37Client.connect(endpoint)
    const wasmClient = await CosmWasmClient.connect(endpoint)
    return new NibiruQueryClient(tmClient, options, wasmClient)
  }

  protected constructor(
    tmClient: Tendermint37Client,
    options: StargateClientOptions,
    wasmClient: CosmWasmClient,
  ) {
    super(tmClient, options)
    this.wasmClient = wasmClient
    // Because the StargateQueryClient doesn't include methods from the TM client
    this.tm = tmClient
    this.nibiruExtensions = StargateQueryClient.withExtensions(
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

  /** getTxByHash: Query a transaction (tx) using its hexadecial encoded tx hash.
   * A tx hash uniquely identifies a tx on the blockchain.
   *
   * The hex-encoded tx hash is:
   * - An unambiguous representation of the SHA-256 cryptographic hash in the
   *   consensus layer.
   * - Well-suited for human-facing applications, as it is easier to work with
   *   than bytes.
   *
   * @example
   * const txHash = "7A919F2CC9A51B139444F7D8E84A46EEF307E839C6CA914C1A1C594FEF5C1562"
   * const txRespResult = await getTxByHash(txHash)
   * */
  getTxByHash = (txHashHex: string): Promise<Result<TxResponse>> =>
    Result.ofSafeExecAsync(async () => {
      const resBz = hexToBytes(txHashHex)
      if (resBz.ok) {
        return await this.tm.tx({ hash: resBz.ok })
      }
      throw resBz.err
    })

  /** getTxByHashBytes: Query a transaction (tx) using its SHA-256 tx hash (bytes).
   * A tx hash uniquely identifies a tx on the blockchain.
   *
   * @see getTxByHash - Equivalent query using the hex-encoded tx hash string.
   * */
  getTxByHashBytes = (txHash: Uint8Array): Promise<Result<TxResponse>> =>
    Result.ofSafeExecAsync(async () => {
      bytesToHex(txHash) // To validate the format up-front before making an
      // unnecessary request
      return await this.tm.tx({ hash: txHash })
    })
}
