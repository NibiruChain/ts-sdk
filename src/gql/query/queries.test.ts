import { fetch } from "cross-fetch"
import {
  GQLCommunityPoolOrder,
  GQLUserOrder,
  GQLValidatorOrder,
  defaultBybit,
  defaultDelegations,
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
  defaultProxy,
  defaultRedelegations,
  defaultStakingHistoryItem,
  defaultToken,
  defaultUnbondings,
  defaultUser,
  defaultUserContract,
  defaultValidator,
} from "../utils"
import { communityPool, communityPoolQueryString } from "./communityPool"
import { evm, evmQueryString } from "./evm"
import { featureFlags, featureFlagsQueryString } from "./featureFlags"
import { governance, governanceQueryString } from "./governance"
import { ibc, ibcQueryString } from "./ibc"
import { inflation, inflationQueryString } from "./inflation"
import { marketing, marketingQueryString } from "./marketing"
import { oracle, oracleQueryString } from "./oracle"
import { proxies, proxiesQueryString } from "./proxies"
import { GQLStakingQueryString, staking } from "./staking"
import { user, userQueryString } from "./user"
import { users, usersQueryString } from "./users"
import { wasm, wasmQueryString } from "./wasm"
import {
  oraclePricesSubscription,
  oraclePricesSubscriptionQueryString,
} from "../subscription/oraclePricesSubscription"

jest.mock("cross-fetch", () => ({
  fetch: jest.fn(),
}))

const fetchMock = fetch as jest.Mock
const endpt = "http://gql.test/query"

const postedQuery = () =>
  (
    JSON.parse(fetchMock.mock.calls.at(-1)?.[1].body as string) as {
      query: string
    }
  ).query

describe("graphql query documents", () => {
  beforeEach(() => {
    fetchMock.mockReset()
    fetchMock.mockResolvedValue({
      json: async () => ({ data: { ok: true } }),
    })
  })

  test("communityPool fills missing list arguments and preserves explicit ones", async () => {
    const defaults = {}
    const defaultQuery = communityPoolQueryString(defaults, true, defaultToken)
    expect(defaults).toEqual({
      limit: 100,
      order_desc: true,
      order_by: GQLCommunityPoolOrder.GQLDenom,
    })
    expect(defaultQuery).toContain("limit: 100")
    expect(defaultQuery).toContain("order_by: denom")

    const explicit = {
      limit: 5,
      order_desc: true,
      order_by: GQLCommunityPoolOrder.GQLDenom,
    }
    communityPoolQueryString(explicit, false, defaultToken)
    expect(explicit.limit).toBe(5)

    await communityPool({ limit: 1 }, endpt, defaultToken)
    expect(postedQuery()).toContain("communityPool")
    expect(postedQuery()).toContain("denom")
  })

  test("users fills missing list arguments", () => {
    const args = {}
    const query = usersQueryString(args, false, defaultUser)
    expect(args).toEqual({
      limit: 100,
      order_desc: true,
      order_by: GQLUserOrder.GQLCreatedBlock,
    })
    expect(query).toContain("users")
    expect(query).toContain("order_by: created_block")
  })

  test("user, evm, and featureFlags wrap a single field selection", async () => {
    expect(
      userQueryString({ where: { address: "nibi1abc" } }, true, defaultUser)
    ).toContain("user")
    expect(evmQueryString(true, defaultEvm)).toContain("funTokens")
    expect(featureFlagsQueryString(true, defaultFeatureFlags)).toContain("gov")

    await user({ where: { address: "nibi1abc" } }, endpt, defaultUser)
    await evm(endpt, defaultEvm)
    await featureFlags(endpt, defaultFeatureFlags)
    await users({}, endpt, defaultUser)
    expect(fetchMock).toHaveBeenCalledTimes(4)
  })

  test("governance includes only the requested collections", async () => {
    expect(governanceQueryString({}, {})).not.toContain("govProposals")

    const query = governanceQueryString(
      {},
      { govProposals: defaultGovProposal }
    )
    expect(query).toContain("govProposals")
    expect(query).not.toContain("govVotes")

    const full = governanceQueryString(
      {
        govDeposits: { limit: 1 },
        govProposals: { limit: 1 },
        govVotes: { limit: 1 },
      },
      {
        govDeposits: defaultGovDeposit,
        govProposals: defaultGovProposal,
        govVotes: defaultGovVote,
      }
    )
    expect(full).toContain("govDeposits")
    expect(full).toContain("govVotes")

    await governance({}, endpt, { govProposals: defaultGovProposal })
    expect(postedQuery()).toContain("governance")
  })

  test("staking includes history filters and each collection", async () => {
    const empty = GQLStakingQueryString({}, {})
    expect(empty).not.toContain("delegations")
    expect(
      GQLStakingQueryString(
        {},
        {
          delegations: defaultDelegations,
          history: defaultStakingHistoryItem,
          redelegations: defaultRedelegations,
          unbondings: defaultUnbondings,
          validators: defaultValidator,
        }
      )
    ).toContain("delegations")

    const query = GQLStakingQueryString(
      {
        delegations: { limit: 10 },
        history: {
          limit: 10,
          where: { delegator: { like: "nibi" } },
        },
        redelegations: { limit: 10 },
        unbondings: { limit: 10 },
        validators: { limit: 10, order_by: GQLValidatorOrder.GQLTokens },
      },
      {
        delegations: defaultDelegations,
        history: defaultStakingHistoryItem,
        redelegations: defaultRedelegations,
        unbondings: defaultUnbondings,
        validators: defaultValidator,
      }
    )

    expect(query).toContain("where:")
    expect(query).toContain("delegations")
    expect(query).toContain("history")
    expect(query).toContain("validators")

    await staking(
      { validators: { limit: 1, order_by: GQLValidatorOrder.GQLTokens } },
      endpt,
      { validators: defaultValidator }
    )
    expect(postedQuery()).toContain("staking")
    expect(postedQuery()).toContain("order_by: tokens")
  })

  test("inflation, oracle, wasm, and ibc omit unrequested fields", async () => {
    expect(inflationQueryString({}, {})).not.toContain("distributions")
    expect(
      inflationQueryString(
        {},
        {
          distributions: defaultInflationDistribution,
          inflations: defaultInflationInfo,
          rewards: defaultInflationReward,
        }
      )
    ).toContain("stakingRewards")
    expect(
      inflationQueryString(
        { distributions: { limit: 1 }, inflations: { limit: 1 } },
        {
          distributions: defaultInflationDistribution,
          inflations: defaultInflationInfo,
          rewards: defaultInflationReward,
        }
      )
    ).toContain("rewards")

    expect(oracleQueryString({}, {})).not.toContain("oraclePrices")
    expect(
      oracleQueryString({}, { oraclePrices: defaultOraclePrice })
    ).toContain("pair")
    expect(
      oracleQueryString(
        { oraclePrices: { limit: 1 } },
        { oraclePrices: defaultOraclePrice }
      )
    ).toContain("oraclePrices")

    expect(wasmQueryString({}, {})).not.toContain("userContracts")
    expect(
      wasmQueryString({}, { userContracts: defaultUserContract })
    ).toContain("contractAddress")
    expect(
      wasmQueryString(
        { userContracts: { limit: 1 } },
        { userContracts: defaultUserContract }
      )
    ).toContain("userContracts")

    expect(ibcQueryString({}, { ibcTransfers: defaultIbcTransfer })).toContain(
      "ibcTransfers"
    )
    const ibcQuery = ibcQueryString(
      { ibcTransfers: { limit: 1 } },
      {
        ibcTransfers: defaultIbcTransfer,
        ibcChannels: defaultIbcChannelsResponse,
      }
    )
    expect(ibcQuery).toContain("ibcTransfers")
    expect(ibcQuery).toContain("ibcChannels")

    await inflation({}, endpt, { rewards: defaultInflationReward })
    await oracle({}, endpt, { oraclePrices: defaultOraclePrice })
    await wasm({}, endpt, {})
    await ibc({}, endpt, { ibcChannels: defaultIbcChannelsResponse })
    expect(fetchMock.mock.calls.length).toBeGreaterThanOrEqual(4)
  })

  test("marketing and proxies encode their arguments", async () => {
    expect(marketingQueryString({}, {})).not.toContain("isTaskCompleted")
    const marketingQuery = marketingQueryString(
      { isTaskCompleted: { taskId: "task-1", userAddress: "nibi1abc" } },
      { isTaskCompleted: true }
    )
    expect(marketingQuery).toContain('taskId: "task-1"')
    expect(marketingQuery).toContain('userAddress: "nibi1abc"')

    expect(marketingQueryString({}, { isTaskCompleted: true })).toContain(
      "isTaskCompleted"
    )

    const proxiesQuery = proxiesQueryString(defaultProxy, "cameron.nibi")
    expect(proxiesQuery).toContain("bybit")
    expect(proxiesQuery).toContain('domainName: "cameron.nibi"')
    expect(proxiesQueryString({}, undefined)).not.toContain("bybit")

    await marketing(
      { isTaskCompleted: { taskId: "task-1", userAddress: "nibi1abc" } },
      endpt,
      { isTaskCompleted: true }
    )
    await proxies(endpt, { bybit: defaultBybit })
    expect(postedQuery()).toContain("proxies")
  })

  test("oracle price subscriptions build a document and iterate a client", async () => {
    const query = oraclePricesSubscriptionQueryString(
      { where: { pair: "ubtc:unusd" } },
      defaultOraclePrice
    )
    expect(query).toContain("where:")
    expect(query).toContain("pair")

    expect(
      await oraclePricesSubscription(
        { where: { pair: "ubtc:unusd" } },
        defaultOraclePrice
      )
    ).toBeUndefined()

    const iterator = { next: jest.fn() }
    const client = { iterate: jest.fn().mockReturnValue(iterator) }
    const result = await oraclePricesSubscription(
      { where: { pair: "ubtc:unusd" } },
      defaultOraclePrice,
      client as unknown as Parameters<typeof oraclePricesSubscription>[2]
    )
    expect(result).toBe(iterator)
    expect(client.iterate).toHaveBeenCalledWith({
      query: expect.stringContaining("subscription"),
    })
  })
})
