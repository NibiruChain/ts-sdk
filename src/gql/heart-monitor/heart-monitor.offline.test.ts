import { fetch } from "cross-fetch"
import { createClient } from "graphql-ws"
import { WebSocket } from "ws"
import {
  HeartMonitor,
  defaultBybit,
  defaultEvm,
  defaultFeatureFlags,
  defaultGovDeposit,
  defaultGovProposal,
  defaultGovVote,
  defaultIbcChannelsResponse,
  defaultIbcTransfer,
  defaultInflationDistribution,
  defaultInflationInfo,
  defaultInflationReward,
  defaultOraclePrice,
  defaultToken,
  defaultUser,
  defaultUserContract,
} from ".."

jest.mock("cross-fetch", () => ({
  fetch: jest.fn(),
}))

const dispose = jest.fn().mockResolvedValue(undefined)
const iterate = jest.fn()

jest.mock("graphql-ws", () => ({
  createClient: jest.fn(() => ({
    dispose,
    iterate,
  })),
}))

const fetchMock = fetch as jest.Mock

describe("HeartMonitor offline", () => {
  const endpt = "http://gql.test/query"
  const wsEndpt = "ws://gql.test/query"

  beforeEach(() => {
    fetchMock.mockReset()
    fetchMock.mockResolvedValue({
      json: async () => ({ data: { ok: true } }),
    })
    dispose.mockClear()
    iterate.mockReset()
    ;(createClient as jest.Mock).mockClear()
  })

  test("opens a subscription client and closes it", async () => {
    const hm = new HeartMonitor(endpt, wsEndpt, WebSocket)
    expect(createClient).toHaveBeenCalledWith({
      url: wsEndpt,
      webSocketImpl: WebSocket,
    })

    iterate.mockReturnValue({ next: jest.fn() })
    const subscription = await hm.oraclePricesSubscription(
      { where: { pair: "ubtc:unusd" } },
      defaultOraclePrice
    )
    expect(subscription).toBeDefined()
    expect(iterate).toHaveBeenCalledWith({
      query: expect.stringContaining("oraclePrices"),
    })

    await hm.closeWebSocket()
    expect(dispose).toHaveBeenCalled()

    const withDefaultSocket = new HeartMonitor(endpt, wsEndpt)
    expect(createClient).toHaveBeenLastCalledWith({
      url: wsEndpt,
      webSocketImpl: WebSocket,
    })
    expect(withDefaultSocket.subscriptionClient).toBeDefined()
  })

  test("sends each query through the configured endpoint", async () => {
    const hm = new HeartMonitor(endpt)

    await hm.communityPool({ limit: 1 }, defaultToken)
    await hm.evm(defaultEvm)
    await hm.featureFlags(defaultFeatureFlags)
    await hm.governance(
      { govProposals: { limit: 1 } },
      {
        govDeposits: defaultGovDeposit,
        govProposals: defaultGovProposal,
        govVotes: defaultGovVote,
      }
    )
    await hm.ibc(
      { ibcTransfers: { limit: 1 } },
      {
        ibcChannels: defaultIbcChannelsResponse,
        ibcTransfers: defaultIbcTransfer,
      }
    )
    await hm.inflation(
      {},
      {
        distributions: defaultInflationDistribution,
        inflations: defaultInflationInfo,
        rewards: defaultInflationReward,
      }
    )
    await hm.marketing(
      { isTaskCompleted: { taskId: "task-1", userAddress: "nibi1abc" } },
      { isTaskCompleted: true }
    )
    await hm.oracle(
      { oraclePrices: { limit: 1 } },
      { oraclePrices: defaultOraclePrice }
    )
    await hm.proxies({ bybit: defaultBybit }, "cameron.nibi")
    await hm.staking(
      { validators: { limit: 1 } },
      { validators: { operator_address: "" } }
    )
    await hm.user({ where: { address: "nibi1abc" } }, defaultUser)
    await hm.users({ limit: 1 }, defaultUser)
    await hm.wasm(
      { userContracts: { limit: 1 } },
      { userContracts: defaultUserContract }
    )
    await hm.GQLQueryGqlBatchHandler(["communityPool { denom }"])

    expect(fetchMock).toHaveBeenCalledTimes(14)
    for (const call of fetchMock.mock.calls) {
      expect(call[0]).toBe(endpt)
      expect(JSON.parse(call[1].body as string).query).toEqual(
        expect.any(String)
      )
    }
  })
})
