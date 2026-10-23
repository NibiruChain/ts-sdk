import { fetch } from "cross-fetch"
import {
  CustomChain,
  IncentivizedTestnet,
  Testnet,
  isRestEndptLive,
  queryChainIdWithRest,
} from "./chain"

jest.mock("cross-fetch", () => ({
  fetch: jest.fn(),
}))

const fetchMock = fetch as jest.Mock

const chain = Testnet(1)

describe("chain REST helpers", () => {
  beforeEach(() => {
    fetchMock.mockReset()
  })

  test("IncentivizedTestnet is the Testnet constructor", () => {
    expect(IncentivizedTestnet).toBe(Testnet)
  })

  test("keeps a zero chain number in the chain id", () => {
    const local = new CustomChain({
      prefix: "nibiru",
      shortName: "localnet",
      number: 0,
    })
    expect(local.chainId).toBe("nibiru-localnet-0")
    expect(local.endptTm).toBe("https://rpc.localnet-0.nibiru.fi")
  })

  test("queryChainIdWithRest reads the network from node info", async () => {
    fetchMock.mockResolvedValue({
      json: async () => ({
        default_node_info: { network: "nibiru-testnet-1" },
      }),
    })

    const result = await queryChainIdWithRest(chain)
    expect(result.isOk()).toBe(true)
    expect(result.ok).toBe("nibiru-testnet-1")
    expect(fetchMock).toHaveBeenCalledWith(
      `${chain.endptRest}/cosmos/base/tendermint/v1beta1/node_info`
    )
    await expect(isRestEndptLive(chain)).resolves.toBe(true)
  })

  test("queryChainIdWithRest returns an error when the endpoint fails", async () => {
    fetchMock.mockRejectedValue(new Error("offline"))

    const result = await queryChainIdWithRest(chain)
    expect(result.isErr()).toBe(true)
    expect(result.err?.message).toContain("offline")
    await expect(isRestEndptLive(chain)).resolves.toBe(false)
  })
})
