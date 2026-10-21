import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate"
import { Tendermint37Client } from "@cosmjs/tendermint-rpc"
import { NibiruQuerier } from "./query"

class TestQuerier extends NibiruQuerier {
  static make(tm: Partial<Tendermint37Client> = {}) {
    return new TestQuerier(tm as Tendermint37Client, {}, {} as CosmWasmClient)
  }
}

const flushTimers = () => jest.advanceTimersByTimeAsync(1_000)

describe("NibiruQuerier offline", () => {
  afterEach(() => {
    jest.useRealTimers()
    jest.restoreAllMocks()
  })

  test("connect wires the tendermint and wasm clients", async () => {
    const tm = { tx: jest.fn() }
    jest
      .spyOn(Tendermint37Client, "connect")
      .mockResolvedValue(tm as unknown as Tendermint37Client)
    jest
      .spyOn(CosmWasmClient, "connect")
      .mockResolvedValue({} as CosmWasmClient)

    const querier = await NibiruQuerier.connect("http://127.0.0.1:26657")

    expect(Tendermint37Client.connect).toHaveBeenCalledWith(
      "http://127.0.0.1:26657"
    )
    expect(CosmWasmClient.connect).toHaveBeenCalledWith(
      "http://127.0.0.1:26657"
    )
    expect(querier.tm).toBe(tm)
    expect(querier.wasmClient).toBeDefined()
    expect(querier.nibiruExtensions.query.oracle).toBeDefined()
    expect(querier.nibiruExtensions.msg.ethMsg).toBeDefined()
  })

  test("waitForHeight polls until the chain catches up", async () => {
    jest.useFakeTimers()
    const querier = TestQuerier.make()
    const getHeight = jest
      .spyOn(querier, "getHeight")
      .mockResolvedValueOnce(1)
      .mockResolvedValueOnce(2)
      .mockResolvedValue(4)

    const pending = querier.waitForHeight(4)
    await flushTimers()
    await pending

    expect(getHeight.mock.calls.length).toBeGreaterThanOrEqual(3)
  })

  test("waitForHeight resolves immediately when the chain is already there", async () => {
    jest.useFakeTimers()
    const setTimeoutSpy = jest.spyOn(global, "setTimeout")
    const querier = TestQuerier.make()
    jest.spyOn(querier, "getHeight").mockResolvedValue(10)

    await querier.waitForHeight(10)

    expect(setTimeoutSpy).not.toHaveBeenCalled()
  })

  test("waitForNextBlock waits until the height increases", async () => {
    jest.useFakeTimers()
    const querier = TestQuerier.make()
    jest
      .spyOn(querier, "getHeight")
      .mockResolvedValueOnce(7)
      .mockResolvedValueOnce(7)
      .mockResolvedValue(8)

    const pending = querier.waitForNextBlock()
    await flushTimers()
    await pending

    expect(querier.getHeight).toHaveBeenCalled()
  })

  test("getTxByHash queries by decoded bytes and reports bad hashes", async () => {
    const tx = jest.fn().mockResolvedValue({ height: 3 })
    const querier = TestQuerier.make({ tx } as Partial<Tendermint37Client>)

    const ok = await querier.getTxByHash("0A0B")
    expect(ok.isOk()).toBe(true)
    expect(ok.ok).toEqual({ height: 3 })
    expect(tx).toHaveBeenCalledWith({ hash: Uint8Array.from([10, 11]) })

    tx.mockRejectedValueOnce(new Error("not found"))
    const missing = await querier.getTxByHash("0C0D")
    expect(missing.isErr()).toBe(true)
    expect(missing.err?.message).toContain("not found")

    const invalid = await querier.getTxByHash("abc")
    expect(invalid.isErr()).toBe(true)
    expect(invalid.err?.message).toContain("even length")
  })

  test("getTxByHashBytes forwards the hash", async () => {
    const hash = Uint8Array.from([1, 2, 3, 4])
    const tx = jest.fn().mockResolvedValue({ height: 1 })
    const querier = TestQuerier.make({ tx } as Partial<Tendermint37Client>)

    const ok = await querier.getTxByHashBytes(hash)
    expect(ok.isOk()).toBe(true)
    expect(tx).toHaveBeenCalledWith({ hash })

    tx.mockRejectedValueOnce(new Error("rpc failed"))
    const failed = await querier.getTxByHashBytes(hash)
    expect(failed.isErr()).toBe(true)
  })
})
