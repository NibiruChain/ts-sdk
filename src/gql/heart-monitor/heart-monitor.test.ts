import { WebSocket } from "ws"
import {
  HeartMonitor,
  GovernanceFields,
  IbcFields,
  OracleFields,
  QueryGovernanceArgs,
  QueryIbcArgs,
  QueryOracleArgs,
  communityPoolQueryString,
  QueryWasmArgs,
  GqlWasmFields,
  GqlOutCommunityPool,
  checkFields,
  cleanResponse,
  defaultDelegations,
  defaultDistributionCommission,
  defaultGovDeposit,
  defaultGovProposal,
  defaultGovVote,
  defaultIbcChannelsResponse,
  defaultIbcTransfer,
  defaultOracleEntry,
  defaultOraclePrice,
  defaultRedelegations,
  defaultToken,
  defaultUnbondings,
  defaultUser,
  defaultUserContract,
  defaultValidator,
  GQLDistributionCommission,
  GQLOraclePrice,
  GQLQueryGqlCommunityPoolArgs,
  GQLQueryGqlDistributionCommissionsArgs,
  GQLQueryGqlUsersArgs,
  GQLSubscriptionGqlOraclePricesArgs,
  GQLToken,
  GQLUser,
  InflationFields,
  QueryInflationArgs,
  defaultInflationInfo,
  defaultInflationDistribution,
  GQLFeatureFlags,
  defaultFeatureFlags,
  defaultProxy,
  GQLProxies,
  defaultInflationReward,
  featureFlagsQueryString,
  GqlOutFeatureFlags,
  GQLStakingFields,
  QueryStakingArgs,
  defaultStakingHistoryItem,
  GQLValidatorOrder,
  GQLQueryGqlUserArgs,
  GQLEvm,
  defaultEvm,
} from ".."

const nibiruUrl = "testnet-1"

const heartMonitor = new HeartMonitor(
  `https://hm-graphql.${nibiruUrl}.nibiru.fi/query`,
  `wss://hm-graphql.${nibiruUrl}.nibiru.fi/query`,
  WebSocket
)

afterAll(async () => {
  await heartMonitor.closeWebSocket()
})

describe("Heart Monitor constructor", () => {
  interface TestCase {
    name: string
    in?: string
    expected: string
  }

  const { defaultGqlEndpt } = new HeartMonitor()

  const tests: TestCase[] = [
    { name: "undefined", in: undefined, expected: defaultGqlEndpt },
    { name: "valid string", in: "abc123", expected: "abc123" },
  ]

  test.each(tests)("$name", (tc) => {
    const hm = new HeartMonitor(
      tc.in,
      `wss://hm-graphql.${nibiruUrl}.nibiru.fi/query`
    )
    expect(hm.gqlEndpt).toBe(tc.expected)
  })
})

const testCommunityPool = async (
  args: GQLQueryGqlCommunityPoolArgs,
  fields: GQLToken
) => {
  const resp = await heartMonitor.communityPool(args, fields)
  expect(resp).toHaveProperty("communityPool")

  if ((resp.communityPool?.length ?? 0) > 0) {
    const [communityPool] = resp.communityPool ?? []

    checkFields([communityPool], ["amount", "denom"])
  }
}

test("closeWebSocket - no dispose", async () => {
  const hm = new HeartMonitor(`https://hm-graphql.${nibiruUrl}.nibiru.fi/query`)
  await hm.closeWebSocket()
  expect(hm.subscriptionClient).toEqual(undefined)
})

test("communityPool", async () => {
  await testCommunityPool({}, defaultToken)
})

const testDistributionCommissions = async (
  args: GQLQueryGqlDistributionCommissionsArgs,
  fields: GQLDistributionCommission
) => {
  const resp = await heartMonitor.distributionCommissions(args, fields)
  expect(resp).toHaveProperty("distributionCommissions")

  if ((resp.distributionCommissions?.length ?? 0) > 0) {
    const [distributionCommissions] = resp.distributionCommissions ?? []

    checkFields([distributionCommissions], ["commission", "validator"])
  }
}

test("distributionCommissions", async () => {
  await testDistributionCommissions({ limit: 1 }, defaultDistributionCommission)
  await testDistributionCommissions({}, defaultDistributionCommission)
})

const testFeatureFlags = async (fields: GQLFeatureFlags) => {
  const resp = await heartMonitor.featureFlags(fields)
  expect(resp).toHaveProperty("featureFlags")

  if (resp.featureFlags) {
    const { featureFlags } = resp

    checkFields([featureFlags], ["gov", "oracle", "staking", "wasm"])
  }
}

test("featureFlags", async () => {
  await testFeatureFlags(defaultFeatureFlags)
})

const testGovernance = async (
  args: QueryGovernanceArgs,
  fields: GovernanceFields
) => {
  const resp = await heartMonitor.governance(args, fields)
  expect(resp).toHaveProperty("governance")

  if (resp.governance) {
    const { governance } = resp

    checkFields([governance], ["govDeposits", "govProposals", "govVotes"])
  }
}

test.skip("governance", async () => {
  await testGovernance(
    {
      govDeposits: {
        limit: 1,
      },
      govProposals: {
        limit: 1,
      },
      govVotes: {
        limit: 1,
      },
    },
    {
      govDeposits: defaultGovDeposit,
      govProposals: defaultGovProposal,
      govVotes: defaultGovVote,
    }
  )
  await testGovernance(
    {},
    {
      govDeposits: defaultGovDeposit,
      govProposals: defaultGovProposal,
      govVotes: defaultGovVote,
    }
  )
})

const testIbc = async (args: QueryIbcArgs, fields: IbcFields) => {
  const resp = await heartMonitor.ibc(args, fields)
  if (fields.ibcChannels || fields.ibcTransfers) {
    expect(resp).toHaveProperty("ibc")

    if (resp.ibc) {
      const { ibc } = resp

      checkFields(
        [ibc],
        [
          ...(args.ibcChannels ? ["ibcChannels"] : []),
          ...(args.ibcTransfers ? ["ibcTransfers"] : []),
        ]
      )
    }
  } else {
    expect((resp as unknown as { data: null }).data).toBe(null)
  }
}

test("ibc", async () => {
  await testIbc(
    {},
    {
      ibcChannels: defaultIbcChannelsResponse,
      ibcTransfers: defaultIbcTransfer,
    }
  )
  await testIbc(
    {
      ibcTransfers: {
        limit: 1,
      },
    },
    {
      ibcTransfers: defaultIbcTransfer,
    }
  )
  await testIbc(
    {
      ibcChannels: undefined,
    },
    {
      ibcChannels: defaultIbcChannelsResponse,
    }
  )
  await testIbc(
    {
      ibcChannels: undefined,
      ibcTransfers: {
        limit: 1,
      },
    },
    {}
  )
})

const testInflation = async (
  args: QueryInflationArgs,
  fields: InflationFields
) => {
  const resp = await heartMonitor.inflation(args, fields)
  expect(resp).toHaveProperty("inflation")

  if (resp.inflation) {
    const { inflation } = resp

    checkFields(
      [inflation],
      ["distributions", "inflations", ...(fields.rewards ? ["rewards"] : [])]
    )
  }
}

test("inflation", async () => {
  await testInflation(
    {},
    {
      inflations: defaultInflationInfo,
      distributions: defaultInflationDistribution,
      rewards: defaultInflationReward,
    }
  )

  await testInflation(
    { inflations: { limit: 1 }, distributions: { limit: 1 } },
    {
      inflations: defaultInflationInfo,
      distributions: defaultInflationDistribution,
      rewards: defaultInflationReward,
    }
  )
})

const testOracle = async (args: QueryOracleArgs, fields: OracleFields) => {
  const resp = await heartMonitor.oracle(args, fields)
  expect(resp).toHaveProperty("oracle")

  if (resp.oracle) {
    const { oracle } = resp

    checkFields([oracle], ["oraclePrices", "oracles"])
  }
}

test("oracle", async () => {
  await testOracle(
    {
      oraclePrices: {
        limit: 1,
      },
      oracles: {
        limit: 1,
      },
    },
    {
      oraclePrices: defaultOraclePrice,
      oracles: defaultOracleEntry,
    }
  )
  await testOracle(
    {},
    {
      oraclePrices: defaultOraclePrice,
      oracles: defaultOracleEntry,
    }
  )
})

test("oraclePricesSubscription undefined client", async () => {
  const hm = new HeartMonitor(`https://hm-graphql.${nibiruUrl}.nibiru.fi/query`)
  const resp = await hm.oraclePricesSubscription(
    {
      where: { pair: "ubtc:unusd" },
    },
    defaultOraclePrice
  )

  expect(resp).toBeUndefined()
})

const testOraclePricesSubscription = async (
  args: GQLSubscriptionGqlOraclePricesArgs,
  fields: GQLOraclePrice
) => {
  const resp = await heartMonitor.oraclePricesSubscription(args, fields)

  const event = await resp?.next()

  expect(event?.value.data).toHaveProperty("oraclePrices")

  if ((event?.value.data.oraclePrices.length ?? 0) > 0) {
    const [oraclePrices] = event?.value.data.oraclePrices ?? []

    checkFields([oraclePrices], ["block", "pair", "price"])
  }
}

test.skip("oraclePricesSubscription", async () => {
  await testOraclePricesSubscription(
    {
      where: { pair: "ubtc:unusd" },
    },
    defaultOraclePrice
  )
})

const testProxies = async (fields: GQLProxies) => {
  const resp = await heartMonitor.proxies(fields)
  expect(resp).toHaveProperty("proxies")

  if (resp.proxies) {
    const { proxies } = resp

    checkFields([proxies], ["bybit"])
  }
}

test("proxies", async () => {
  await testProxies(defaultProxy)
})

const testEvm = async (fields: GQLEvm) => {
  const resp = await heartMonitor.evm(fields)
  expect(resp).toHaveProperty("evm")

  if (resp.evm) {
    const { evm } = resp

    checkFields([evm], ["funTokens"])
  }
}

test("evm", async () => {
  await testEvm(defaultEvm)
})

test("queryBatchHandler", async () => {
  // TODO: Make a partial type that includes all of these
  const resp = await heartMonitor.GQLQueryGqlBatchHandler<{
    communityPool: GqlOutCommunityPool[]
    featureFlags: GqlOutFeatureFlags
  }>([
    communityPoolQueryString({}, true, defaultToken),
    featureFlagsQueryString(true, defaultFeatureFlags),
  ])

  expect(resp).toHaveProperty("communityPool")
  expect(resp).toHaveProperty("featureFlags")

  if ((resp.communityPool?.length ?? 0) > 0) {
    const [communityPool] = resp.communityPool ?? []

    checkFields([communityPool], ["amount", "denom"])
  }

  if (resp.featureFlags) {
    const { featureFlags } = resp

    checkFields([featureFlags], ["gov", "oracle", "staking", "wasm"])
  }
})

const testStaking = async (
  args: QueryStakingArgs,
  fields: GQLStakingFields
) => {
  const resp = await heartMonitor.staking(args, fields)
  expect(resp).toHaveProperty("staking")

  if (resp.staking) {
    const { staking } = resp

    checkFields(
      [staking],
      ["delegations", "history", "redelegations", "unbondings", "validators"]
    )
  }
}

test.skip("staking", async () => {
  await testStaking(
    {
      delegations: {
        limit: 10,
        order_desc: true,
      },
      history: {
        limit: 10,
        order_desc: true,
        where: {
          delegator: {
            like: "nibi",
          },
        },
      },
      redelegations: {
        limit: 10,
      },
      unbondings: {
        limit: 10,
      },
      validators: {
        limit: 10,
        order_by: GQLValidatorOrder.GQLTokens,
        order_desc: true,
      },
    },
    {
      delegations: defaultDelegations,
      redelegations: defaultRedelegations,
      unbondings: defaultUnbondings,
      validators: defaultValidator,
      history: defaultStakingHistoryItem,
    }
  )
  await testStaking(
    {},
    {
      delegations: defaultDelegations,
      redelegations: defaultRedelegations,
      unbondings: defaultUnbondings,
      validators: defaultValidator,
      history: defaultStakingHistoryItem,
    }
  )
})

const testWasm = async (args: QueryWasmArgs, fields: GqlWasmFields) => {
  const resp = await heartMonitor.wasm(args, fields)
  expect(resp).toHaveProperty("wasm")

  if (resp.wasm) {
    const { wasm } = resp

    checkFields([wasm], ["userContracts"])
  }
}

test("wasm", async () => {
  await testWasm(
    {
      userContracts: {
        limit: 1,
      },
    },
    {
      userContracts: defaultUserContract,
    }
  )

  await testWasm(
    {},
    {
      userContracts: defaultUserContract,
    }
  )
})

const testUser = async (args: GQLQueryGqlUserArgs, fields: GQLUser) => {
  const resp = await heartMonitor.user(args, fields)
  expect(resp).toHaveProperty("user")

  const fieldsToCheck = ["address", "balances", "created_block", "is_blocked"]
  fieldsToCheck.forEach((field: string) => {
    expect(resp.user).toHaveProperty(field)
  })
}

test("user", async () => {
  await testUser(
    {
      where: {
        address: "nibi14garegtvsx3zcku4esd30xd2pze7ck44ysxeg3",
      },
    },
    {
      ...defaultUser,
      is_blocked: true,
    }
  )
})

const testUsers = async (args: GQLQueryGqlUsersArgs, fields: GQLUser) => {
  const resp = await heartMonitor.users(args, fields)

  expect(resp).toHaveProperty("users")

  if ((resp.users?.length ?? 0) > 0) {
    const [users] = resp.users ?? []

    checkFields(
      [users],
      ["address", "balances", "all_balances", "created_block"]
    )
  }
}

test("users", async () => {
  await testUsers({}, defaultUser)
})

describe("gql cleanResponse", () => {
  test("should return the response data if rawResp is ok and contains data", async () => {
    const rawResp = {
      ok: true,
      json: () => Promise.resolve({ data: "response data" }),
    } as Response
    const result = await cleanResponse(rawResp)
    expect(result).toEqual("response data")
  })

  test("should return the response JSON if rawResp is ok and does not contain data", async () => {
    const rawResp = {
      ok: true,
      json: () => Promise.resolve({ key: "value" }),
    } as Response
    const result = await cleanResponse(rawResp)
    expect(result).toEqual({ key: "value" })
  })

  test("should return an error if rawResp is not ok", async () => {
    const error = { error: "Error message" }
    const rawResp = {
      ok: false,
      json: () => Promise.resolve(error),
    } as Response
    expect(await cleanResponse(rawResp)).toEqual(error)
  })

  test("should throw an error if unable to parse JSON", async () => {
    const rawResp = {
      ok: true,
      json: () => Promise.reject(new Error("invalid json")),
    } as Response
    expect(await cleanResponse(rawResp)).toEqual(undefined)
  })
})
