import { OfflineSigner } from "@cosmjs/proto-signing"
import { Tendermint37Client } from "@cosmjs/tendermint-rpc"
import { NibiSigningCosmWasmClient } from "../core/signingcosmwasmclient"
import { NibiruTxClient } from "./txClient"

const signer = {
  getAccounts: async () => [],
} as unknown as OfflineSigner

class TestTxClient extends NibiruTxClient {
  static make() {
    return new TestTxClient(
      {} as Tendermint37Client,
      signer,
      {},
      {} as NibiSigningCosmWasmClient
    )
  }
}

describe("NibiruTxClient offline", () => {
  afterEach(() => {
    jest.useRealTimers()
    jest.restoreAllMocks()
  })

  test("connectWithSigner applies Nibiru defaults", async () => {
    const tm = {}
    jest
      .spyOn(Tendermint37Client, "connect")
      .mockResolvedValue(tm as Tendermint37Client)
    jest
      .spyOn(NibiSigningCosmWasmClient, "connectWithSigner")
      .mockResolvedValue({} as NibiSigningCosmWasmClient)

    const client = await NibiruTxClient.connectWithSigner(
      "http://127.0.0.1:26657",
      signer
    )

    expect(Tendermint37Client.connect).toHaveBeenCalledWith(
      "http://127.0.0.1:26657"
    )
    expect(NibiSigningCosmWasmClient.connectWithSigner).toHaveBeenCalledWith(
      "http://127.0.0.1:26657",
      signer,
      expect.objectContaining({
        accountParser: expect.any(Function),
      })
    )
    expect(client.wasmClient).toBeDefined()
    expect(client.nibiruExtensions.query.eth).toBeDefined()
    expect(client.nibiruExtensions.msg.sudoMsg).toBeDefined()
  })

  test("waitForHeight polls until the target height", async () => {
    jest.useFakeTimers()
    const client = TestTxClient.make()
    jest
      .spyOn(client, "getHeight")
      .mockResolvedValueOnce(1)
      .mockResolvedValue(5)

    const pending = client.waitForHeight(5)
    await jest.advanceTimersByTimeAsync(1_000)
    await pending

    expect(client.getHeight).toHaveBeenCalled()
  })

  test("waitForNextBlock polls until the height changes", async () => {
    jest.useFakeTimers()
    const client = TestTxClient.make()
    jest
      .spyOn(client, "getHeight")
      .mockResolvedValueOnce(4)
      .mockResolvedValueOnce(4)
      .mockResolvedValue(5)

    const pending = client.waitForNextBlock()
    await jest.advanceTimersByTimeAsync(1_000)
    await pending

    expect(client.getHeight).toHaveBeenCalled()
  })
})
