import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate"
import {
  Account,
  accountFromAny,
  AccountParser,
  HttpEndpoint,
  SequenceResponse,
} from "@cosmjs/stargate"
import { CometClient } from "@cosmjs/tendermint-rpc"

export interface NibiCosmWasmClientOptions {
  readonly accountParser?: AccountParser
}

export class NibiCosmWasmClient extends CosmWasmClient {
  private readonly accountParser: AccountParser

  protected constructor(
    cometClient: CometClient | undefined,
    options: NibiCosmWasmClientOptions = {}
  ) {
    super(cometClient)
    const { accountParser = accountFromAny } = options
    this.accountParser = accountParser
  }

  public static async connect(
    endpoint: string | HttpEndpoint,
    options: NibiCosmWasmClientOptions = {}
  ): Promise<NibiCosmWasmClient> {
    const cosmWasmClient = await CosmWasmClient.connect(endpoint)
    return new NibiCosmWasmClient(cosmWasmClient["cometClient"], options)
  }

  public async getAccount(searchAddress: string): Promise<Account | null> {
    try {
      const account = await this.forceGetQueryClient().auth.account(
        searchAddress
      )
      return account ? this.accountParser(account) : null
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (/rpc error: code = NotFound/i.test(error.toString())) {
        return null
      }
      throw error
    }
  }

  public async getSequence(address: string): Promise<SequenceResponse> {
    const account = await this.getAccount(address)
    if (!account) {
      throw new Error(
        `Account '${address}' does not exist on chain. Send some tokens there before trying to query sequence.`
      )
    }
    return {
      accountNumber: account.accountNumber,
      sequence: account.sequence,
    }
  }
}
