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
  StargateClient,
  StargateClientOptions,
  StakingExtension,
  setupStakingExtension,
} from "@cosmjs/stargate"
import { Tendermint37Client } from "@cosmjs/tendermint-rpc"
import {
  CosmWasmClient,
  setupWasmExtension,
  WasmExtension,
} from "@cosmjs/cosmwasm-stargate"
import { TxResponse } from "@cosmjs/tendermint-rpc/build/tendermint37"
import {
  EpochsExtension,
  setupEpochsExtension,
  OracleExtension,
  setupOracleExtension,
  setupSudoExtension,
  SudoExtension,
  InflationExtension,
  setupInflationExtension,
  Result,
  bytesToHex,
  hexToBytes,
  setupDevgasExtension,
  DevgasExtension,
  DevgasMsgExtension,
  OracleMsgExtension,
  InflationMsgExtension,
  SudoMsgExtension,
  TokenFactoryMsgExtension,
  setupDevgasMsgExtension,
  setupInflationMsgExtension,
  setupOracleMsgExtension,
  setupSudoMsgExtension,
  setupTokenFactoryMsgExtension,
} from ".."
import {
  TokenFactoryExtension,
  setupTokenFactoryExtension,
} from "./tokenfactory"

export type NibiruExtensions = StargateQueryClient &
  SudoExtension &
  InflationExtension &
  OracleExtension &
  EpochsExtension &
  DevgasExtension &
  DistributionExtension &
  GovExtension &
  StakingExtension &
  IbcExtension &
  WasmExtension &
  AuthExtension &
  TokenFactoryExtension &
  DevgasMsgExtension &
  OracleMsgExtension &
  InflationMsgExtension &
  SudoMsgExtension &
  TokenFactoryMsgExtension

/** Querier for a Nibiru network.
 * @example
 * import { NibiruQuerier, Tesnet } from "@nibiruchain/nibijs"
 * const chain = Testnet()
 * const querier = await NibiruQuerier.connect(chain.endptTm)
 * */
export class NibiruQuerier extends StargateClient {
  public readonly nibiruExtensions: NibiruExtensions
  public readonly wasmClient: CosmWasmClient
  public readonly tm: Tendermint37Client

  public static async connect(
    endpoint: string,
    options: StargateClientOptions = {}
  ): Promise<NibiruQuerier> {
    const tmClient = await Tendermint37Client.connect(endpoint)
    const wasmClient = await CosmWasmClient.connect(endpoint)
    return new NibiruQuerier(tmClient, options, wasmClient)
  }

  protected constructor(
    tmClient: Tendermint37Client,
    options: StargateClientOptions,
    wasmClient: CosmWasmClient
  ) {
    super(tmClient, options)
    this.wasmClient = wasmClient
    // Because the StargateQueryClient doesn't include methods from the TM client
    this.tm = tmClient
    this.nibiruExtensions = StargateQueryClient.withExtensions(
      tmClient,
      setupDevgasExtension,
      setupEpochsExtension,
      setupOracleExtension,
      setupSudoExtension,
      setupInflationExtension,
      setupDistributionExtension,
      setupGovExtension,
      setupStakingExtension,
      setupIbcExtension,
      setupWasmExtension,
      setupAuthExtension,
      setupTokenFactoryExtension,
      setupDevgasMsgExtension,
      setupInflationMsgExtension,
      setupOracleMsgExtension,
      setupSudoMsgExtension,
      setupTokenFactoryMsgExtension
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
  public getTxByHash = (txHashHex: string): Promise<Result<TxResponse>> =>
    Result.ofSafeExecAsync(async () => {
      const resBz = hexToBytes(txHashHex)
      if (resBz.ok) {
        return this.tm.tx({ hash: resBz.ok })
      }
      throw resBz.err
    })

  /** getTxByHashBytes: Query a transaction (tx) using its SHA-256 tx hash (bytes).
   * A tx hash uniquely identifies a tx on the blockchain.
   *
   * @see getTxByHash - Equivalent query using the hex-encoded tx hash string.
   * */
  public getTxByHashBytes = (txHash: Uint8Array): Promise<Result<TxResponse>> =>
    Result.ofSafeExecAsync(async () => {
      bytesToHex(txHash) // To validate the format up-front before making an
      // unnecessary request
      return this.tm.tx({ hash: txHash })
    })
}
