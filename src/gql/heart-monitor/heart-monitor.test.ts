import { WebSocket } from "ws"
import {
  HeartMonitor,
  GovernanceFields,
  IbcFields,
  OracleFields,
  GQLPerpFields,
  QueryGovernanceArgs,
  QueryIbcArgs,
  QueryOracleArgs,
  QueryPerpArgs,
  QueryStatsArgs,
  GQLStatsFields,
  communityPoolQueryString,
  delegationsQueryString,
  QueryWasmArgs,
  GqlWasmFields,
  GqlOutCommunityPool,
  GqlOutDelegations,
  checkFields,
  cleanResponse,
  defaultDelegations,
  defaultDistributionCommission,
  defaultGovDeposit,
  defaultGovProposal,
  defaultGovVote,
  defaultIbcChannelsResponse,
  defaultIbcTransfer,
  defaultMarkPriceCandles,
  defaultOracleEntry,
  defaultOraclePrice,
  defaultPerpLeaderboard,
  defaultPerpMarket,
  defaultPerpOpenInterest,
  defaultPerpPnl,
  defaultPerpPosition,
  defaultPerpPositionChanges,
  defaultPool,
  defaultRedelegations,
  defaultSpotLpPosition,
  defaultSpotPool,
  defaultSpotPoolSwap,
  defaultStatsFees,
  defaultToken,
  defaultTotals,
  defaultTvl,
  defaultUnbondings,
  defaultUser,
  defaultUserContract,
  defaultUsers,
  defaultValidator,
  defaultVolume,
  GQLDelegation,
  GQLDistributionCommission,
  GQLGovDepositsOrder,
  GQLMarkPriceCandle,
  GQLOraclePrice,
  GQLPerpMarket,
  GQLPerpPosition,
  GQLQueryGqlCommunityPoolArgs,
  GQLQueryGqlDelegationsArgs,
  GQLQueryGqlDistributionCommissionsArgs,
  GQLQueryGqlMarkPriceCandlesArgs,
  GQLQueryGqlRedelegationsArgs,
  GQLQueryGqlSpotLpPositionsArgs,
  GQLQueryGqlSpotPoolCreatedArgs,
  GQLQueryGqlSpotPoolExitedArgs,
  GQLQueryGqlSpotPoolJoinedArgs,
  GQLQueryGqlSpotPoolSwapArgs,
  GQLQueryGqlSpotPoolsArgs,
  GQLQueryGqlUnbondingsArgs,
  GQLQueryGqlUsersArgs,
  GQLQueryGqlValidatorsArgs,
  GQLRedelegation,
  GQLSpotLpPosition,
  GQLSpotPool,
  GQLSpotPoolCreated,
  GQLSpotPoolExited,
  GQLSpotPoolJoined,
  GQLSpotPoolSwap,
  GQLSubscriptionGqlMarkPriceCandlesArgs,
  GQLSubscriptionGqlOraclePricesArgs,
  GQLSubscriptionGqlPerpMarketArgs,
  GQLSubscriptionGqlPerpPositionsArgs,
  GQLToken,
  GQLUnbonding,
  GQLUser,
  GQLValidator,
  InflationFields,
  QueryInflationArgs,
  defaultInflationInfo,
  defaultInflationDistribution,
  GQLFeatureFlags,
  defaultFeatureFlags,
  defaultTwitterUser,
  defaultTweet,
  defaultLike,
  defaultTask,
  QueryMarketingArgs,
  MarketingFields,
  QueryMarketingMutationArgs,
  GQLMarketingMutationFields,
  defaultAccountLinksInfo,
  defaultProxy,
  GQLProxies,
  defaultInflationReward,
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
  fields?: GQLToken
) => {
  const resp = await heartMonitor.communityPool(args, fields)
  expect(resp).toHaveProperty("communityPool")

  if ((resp.communityPool?.length ?? 0) > 0) {
    const [communityPool] = resp.communityPool ?? []

    checkFields([communityPool], ["amount", "denom"])
  }
}

test("communityPool", async () => {
  await testCommunityPool({ limit: 1 })
  await testCommunityPool({}, defaultToken)
})

const testDelegations = async (
  args: GQLQueryGqlDelegationsArgs,
  fields?: GQLDelegation
) => {
  const resp = await heartMonitor.delegations(args, fields)
  expect(resp).toHaveProperty("delegations")

  if ((resp.delegations?.length ?? 0) > 0) {
    const [delegation] = resp.delegations ?? []

    checkFields([delegation], ["amount", "delegator", "validator"])
  }
}

test("delegations", async () => {
  await testDelegations({ limit: 1 })
  await testDelegations({}, defaultDelegations)
})

const testDistributionCommissions = async (
  args: GQLQueryGqlDistributionCommissionsArgs,
  fields?: GQLDistributionCommission
) => {
  const resp = await heartMonitor.distributionCommissions(args, fields)
  expect(resp).toHaveProperty("distributionCommissions")

  if ((resp.distributionCommissions?.length ?? 0) > 0) {
    const [distributionCommissions] = resp.distributionCommissions ?? []

    checkFields([distributionCommissions], ["commission", "validator"])
  }
}

test("distributionCommissions", async () => {
  await testDistributionCommissions({ limit: 1 })
  await testDistributionCommissions({}, defaultDistributionCommission)
})

const testFeatureFlags = async (fields?: GQLFeatureFlags) => {
  const resp = await heartMonitor.featureFlags(fields)
  expect(resp).toHaveProperty("featureFlags")

  if (resp.featureFlags) {
    const { featureFlags } = resp

    checkFields(
      [featureFlags],
      ["gov", "oracle", "perp", "spot", "staking", "wasm"]
    )
  }
}

test("featureFlags", async () => {
  await testFeatureFlags(defaultFeatureFlags)
  await testFeatureFlags()
})

const testGovernance = async (
  args: QueryGovernanceArgs,
  fields?: GovernanceFields
) => {
  const resp = await heartMonitor.governance(args, fields)
  expect(resp).toHaveProperty("governance")

  if (resp.governance) {
    const { governance } = resp

    checkFields([governance], ["govDeposits", "govProposals", "govVotes"])
  }
}

test("governance", async () => {
  await testGovernance({
    govDeposits: {
      limit: 1,
      // Covers order and orderDesc, replaced by order_by and order_desc
      order: GQLGovDepositsOrder.GQLBlock,
      orderDesc: true,
    },
    govProposals: {
      limit: 1,
    },
    govVotes: {
      limit: 1,
    },
  })
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

const testIbc = async (args: QueryIbcArgs, fields?: IbcFields) => {
  const resp = await heartMonitor.ibc(args, fields)
  expect(resp).toHaveProperty("ibc")

  if (resp.ibc) {
    const { ibc } = resp

    checkFields(
      [ibc],
      [...(args.ibcChannels ? ["ibcChannels"] : []), "ibcTransfers"]
    )
  }
}

test("ibc", async () => {
  await testIbc({
    ibcTransfers: {
      limit: 1,
    },
  })
  await testIbc({
    ibcChannels: undefined,
    ibcTransfers: {
      limit: 1,
    },
  })
  await testIbc(
    {
      ibcChannels: undefined,
      ibcTransfers: {
        limit: 1,
      },
    },
    {
      ibcChannels: defaultIbcChannelsResponse,
      ibcTransfers: defaultIbcTransfer,
    }
  )
  await testIbc(
    {},
    {
      ibcChannels: defaultIbcChannelsResponse,
      ibcTransfers: defaultIbcTransfer,
    }
  )
})

const testInflation = async (
  args: QueryInflationArgs,
  fields?: InflationFields
) => {
  const resp = await heartMonitor.inflation(args, fields)
  expect(resp).toHaveProperty("inflation")

  if (resp.inflation) {
    const { inflation } = resp

    checkFields(
      [inflation],
      ["distributions", "inflations", ...(fields?.rewards ? ["rewards"] : [])]
    )
  }
}

test("inflation", async () => {
  await testInflation({
    inflations: {
      limit: 1,
    },
    distributions: {
      limit: 1,
    },
  })
  await testInflation(
    {},
    {
      inflations: defaultInflationInfo,
      distributions: defaultInflationDistribution,
      rewards: defaultInflationReward,
    }
  )
})

const testOracle = async (args: QueryOracleArgs, fields?: OracleFields) => {
  const resp = await heartMonitor.oracle(args, fields)
  expect(resp).toHaveProperty("oracle")

  if (resp.oracle) {
    const { oracle } = resp

    checkFields([oracle], ["oraclePrices", "oracles"])
  }
}

const testMarkPriceCandles = async (
  args: GQLQueryGqlMarkPriceCandlesArgs,
  fields?: GQLMarkPriceCandle
) => {
  const resp = await heartMonitor.markPriceCandles(args, fields)
  expect(resp).toHaveProperty("markPriceCandles")

  if ((resp.markPriceCandles?.length ?? 0) > 0) {
    const [markPriceCandle] = resp.markPriceCandles ?? []

    checkFields(
      [markPriceCandle],
      ["close", "high", "low", "open", "pair", "period", "periodStartTs"]
    )
  }
}

test("markPriceCandles", async () => {
  await testMarkPriceCandles({ limit: 1 })
  await testMarkPriceCandles({}, defaultMarkPriceCandles)
})

test("markPriceCandlesSubscription undefined client", async () => {
  const hm = new HeartMonitor(`https://hm-graphql.${nibiruUrl}.nibiru.fi/query`)
  const resp = await hm.markPriceCandlesSubscription({
    where: {
      pairEq: "ubtc:unusd",
      periodEq: 100000000,
    },
    limit: 1,
  })

  expect(resp).toBeUndefined()
})

const testMarkPriceCandlesSubscription = async (
  args: GQLSubscriptionGqlMarkPriceCandlesArgs,
  fields?: GQLMarkPriceCandle
) => {
  const resp = await heartMonitor.markPriceCandlesSubscription(args, fields)

  const event = await resp?.next()

  expect(event?.value.data).toHaveProperty("markPriceCandles")

  if ((event?.value.data.markPriceCandles.length ?? 0) > 0) {
    const [markPriceCandle] = event?.value.data.markPriceCandles ?? []

    checkFields(
      [markPriceCandle],
      ["close", "high", "low", "open", "pair", "period", "periodStartTs"]
    )
  }
}

test("markPriceCandlesSubscription", async () => {
  await testMarkPriceCandlesSubscription({
    limit: 1,
    where: {
      pairEq: "ubtc:unusd",
      periodEq: 100000000,
    },
  })
  await testMarkPriceCandlesSubscription(
    {
      limit: 1,
      where: {
        pairEq: "ubtc:unusd",
        periodEq: 100000000,
      },
    },
    defaultMarkPriceCandles
  )
})

const testMarketingMutation = async (
  args: QueryMarketingMutationArgs,
  fields?: GQLMarketingMutationFields
) => {
  const resp = await heartMonitor.marketingMutation(args, {}, fields)
  expect(resp).toHaveProperty("marketing")

  if (resp.marketing) {
    const { marketing } = resp

    checkFields([marketing], ["updateTwitterUser", "linkAccounts"])
  }
}

// Create JIT JWT for this test
test.skip("marketingMutation", async () => {
  await testMarketingMutation({
    updateTwitterUser: {
      input: {
        userId: "800528778854182912",
        nibiAddress: "nibi1p6luzkxeufy29reymgjqnl5mv6a6gae07cphed",
        displayName: "WildFyre",
        username: "wildfyreapp",
      },
    },
    linkAccounts: {
      input: {
        nibiAddress: "nibi1p6luzkxeufy29reymgjqnl5mv6a6gae07cphed",
        twitterUser: {
          displayName: "WildFyre",
          username: "wildfyreapp",
        },
      },
    },
  })
})

const testMarketingQuery = async (
  args: QueryMarketingArgs,
  fields?: MarketingFields
) => {
  const resp = await heartMonitor.marketingQuery(args, fields)
  expect(resp).toHaveProperty("marketing")

  if (resp.marketing) {
    const { marketing } = resp

    checkFields(
      [marketing],
      [
        "likes",
        "retweets",
        "tasks",
        "tweets",
        "twitterUser",
        "accountLinksInfo",
        "lastUpdatedTimestamp",
      ]
    )
  }
}

// TODO: Re-enable
test.skip("marketingQuery", async () => {
  await testMarketingQuery({
    twitterUser: {
      where: { id: "1516130689028087815" },
    },
    tweets: {
      where: { userId: "1516130689028087815" },
    },
    likes: {
      where: { userId: "1516130689028087815" },
    },
    accountLinksInfo: {
      where: {
        nibiAddress: "nibi1p6luzkxeufy29reymgjqnl5mv6a6gae07cphed",
        twitterId: "800528778854182912",
      },
    },
  })
  await testMarketingQuery(
    {
      twitterUser: {
        where: { id: "" },
      },
      tweets: {
        where: { userId: "" },
      },
      likes: {
        where: { userId: "" },
      },
      accountLinksInfo: {
        where: {
          nibiAddress: "",
          twitterId: "",
        },
      },
    },
    {
      accountLinksInfo: defaultAccountLinksInfo,
      twitterUser: defaultTwitterUser,
      tweets: defaultTweet,
      likes: defaultLike,
      tasks: defaultTask,
      lastUpdatedTimestamp: "",
    }
  )
  await testMarketingQuery(
    {},
    {
      accountLinksInfo: defaultAccountLinksInfo,
      twitterUser: defaultTwitterUser,
      tweets: defaultTweet,
      likes: defaultLike,
      tasks: defaultTask,
      lastUpdatedTimestamp: "",
    }
  )
})

test("oracle", async () => {
  await testOracle({
    oraclePrices: {
      limit: 1,
      // Covers non-(limit, where, order, orderDesc)
      offset: 1,
    },
    oracles: {
      limit: 1,
    },
  })
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
  const resp = await hm.oraclePricesSubscription({
    where: { pair: "ubtc:unusd" },
  })

  expect(resp).toBeUndefined()
})

const testOraclePricesSubscription = async (
  args: GQLSubscriptionGqlOraclePricesArgs,
  fields?: GQLOraclePrice
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
  await testOraclePricesSubscription({
    where: { pair: "ubtc:unusd" },
  })
  await testOraclePricesSubscription(
    {
      where: { pair: "ubtc:unusd" },
    },
    defaultOraclePrice
  )
})

const testPerp = async (args: QueryPerpArgs, fields?: GQLPerpFields) => {
  const resp = await heartMonitor.perp(args, fields)
  expect(resp).toHaveProperty("perp")

  if (resp.GQLPerp) {
    const { GQLPerp } = resp

    checkFields(
      [GQLPerp],
      [
        "leaderboard",
        "market",
        "markets",
        "position",
        "positionChanges",
        "positions",
      ]
    )
  }
}

test("perp", async () => {
  await testPerp({
    leaderboard: {
      limit: 1,
    },
    market: {
      where: {
        pair: "ubtc:unusd",
      },
    },
    markets: {
      limit: 1,
    },
    position: {
      where: {
        pair: "ubtc:unusd",
        trader_address: "nibi1judn9xtel563nmq0ghpvmkqvyd5wnkm30mvkk3",
      },
    },
    positions: {
      limit: 1,
    },
    positionChanges: {
      limit: 1,
      where: { traderAddressEq: "nibi1judn9xtel563nmq0ghpvmkqvyd5wnkm30mvkk3" },
    },
  })

  await testPerp(
    {
      leaderboard: {
        limit: 1,
      },
      market: {
        where: {
          pair: "ubtc:unusd",
        },
      },
      markets: {
        limit: 1,
      },
      position: {
        where: {
          pair: "ubtc:unusd",
          trader_address: "nibi1judn9xtel563nmq0ghpvmkqvyd5wnkm30mvkk3",
        },
      },
      positions: {
        limit: 1,
      },
      positionChanges: {
        limit: 1,
        where: {
          traderAddressEq: "nibi1judn9xtel563nmq0ghpvmkqvyd5wnkm30mvkk3",
        },
      },
    },
    {
      leaderboard: defaultPerpLeaderboard,
      market: defaultPerpMarket,
      markets: defaultPerpMarket,
      position: defaultPerpPosition,
      positions: defaultPerpPosition,
      positionChanges: defaultPerpPositionChanges,
    }
  )

  // Note: This is because market and position do not exist
  const resp = await heartMonitor.perp(
    {},
    {
      leaderboard: defaultPerpLeaderboard,
      markets: defaultPerpMarket,
      positions: defaultPerpPosition,
    }
  )
  expect(resp).toHaveProperty("perp")

  if (resp.GQLPerp) {
    const { GQLPerp } = resp

    checkFields([GQLPerp], ["leaderboard", "markets", "positions"])
  }
})

test("perpMarketSubscription undefined client", async () => {
  const hm = new HeartMonitor(`https://hm-graphql.${nibiruUrl}.nibiru.fi/query`)
  const resp = await hm.perpMarketSubscription({
    where: { pair: "ubtc:unusd" },
  })

  expect(resp).toBeUndefined()
})

const testPerpMarketSubscription = async (
  args: GQLSubscriptionGqlPerpMarketArgs,
  fields?: GQLPerpMarket
) => {
  const resp = await heartMonitor.perpMarketSubscription(args, fields)

  const event = await resp?.next()

  expect(event?.value.data).toHaveProperty("perpMarket")
  if (event?.value.data.perpMarket) {
    const { perpMarket } = event.value.data

    checkFields(
      [perpMarket],
      [
        "pair",
        "enabled",
        "maintenance_margin_ratio",
        "max_leverage",
        "latest_cumulative_premium_fraction",
        "exchange_fee_ratio",
        "ecosystem_fund_fee_ratio",
        "max_funding_rate",
        "liquidation_fee_ratio",
        "partial_liquidation_ratio",
        "funding_rate_epoch_id",
        "twap_lookback_window",
        "prepaid_bad_debt",
        "base_reserve",
        "quote_reserve",
        "sqrt_depth",
        "price_multiplier",
        "total_long",
        "total_short",
        "mark_price",
        "mark_price_twap",
        "index_price_twap",
        "is_deleted",
      ]
    )
  }
}

test.skip("perpMarketSubscription", async () => {
  await testPerpMarketSubscription({
    where: { pair: "ubtc:unusd" },
  })

  await testPerpMarketSubscription(
    {
      where: { pair: "ubtc:unusd" },
    },
    defaultPerpMarket
  )
})

test("perpPositionsSubscription undefined client", async () => {
  const hm = new HeartMonitor(`https://hm-graphql.${nibiruUrl}.nibiru.fi/query`)
  const resp = await hm.perpPositionsSubscription({
    where: {
      pair: "ubtc:unusd",
      trader_address: "nibi14garegtvsx3zcku4esd30xd2pze7ck44ysxeg3",
    },
  })

  expect(resp).toBeUndefined()
})

const testPerpPositionsSubscription = async (
  args: GQLSubscriptionGqlPerpPositionsArgs,
  fields?: GQLPerpPosition
) => {
  const resp = await heartMonitor.perpPositionsSubscription(args, fields)

  const event = await resp?.next()

  expect(event?.value.data).toHaveProperty("perpPositions")
  if ((event?.value.data.perpPositions.length ?? 0) > 0) {
    const [perpPositions] = event?.value.data.perpPositions ?? []

    checkFields(
      [perpPositions],
      [
        "pair",
        "trader_address",
        "size",
        "margin",
        "open_notional",
        "position_notional",
        "latest_cumulative_premium_fraction",
        "unrealized_pnl",
        "unrealized_funding_payment",
        "margin_ratio",
        "bad_debt",
        "last_updated_block",
      ]
    )
  }
}

test("perpPositionsSubscription", async () => {
  await testPerpPositionsSubscription({
    where: {
      pair: "ubtc:unusd",
      trader_address: "nibi14garegtvsx3zcku4esd30xd2pze7ck44ysxeg3",
    },
  })

  await testPerpPositionsSubscription(
    {
      where: {
        pair: "ubtc:unusd",
        trader_address: "nibi14garegtvsx3zcku4esd30xd2pze7ck44ysxeg3",
      },
    },
    defaultPerpPosition
  )
})

const testProxies = async (fields?: GQLProxies) => {
  const resp = await heartMonitor.proxies(fields)
  expect(resp).toHaveProperty("proxies")

  if (resp.proxies) {
    const { proxies } = resp

    checkFields([proxies], ["bybit"])
  }
}

test("proxies", async () => {
  await testProxies(defaultProxy)
  await testProxies()
})

test("queryBatchHandler", async () => {
  // TODO: Make a partial type that includes all of these
  const resp = await heartMonitor.GQLQueryGqlBatchHandler<{
    communityPool: GqlOutCommunityPool[]
    delegations: GqlOutDelegations[]
  }>([
    communityPoolQueryString({}, true),
    delegationsQueryString(
      {
        limit: 1,
      },
      true
    ),
  ])

  expect(resp).toHaveProperty("communityPool")
  expect(resp).toHaveProperty("delegations")

  if ((resp.communityPool?.length ?? 0) > 0) {
    const [communityPool] = resp.communityPool ?? []

    checkFields([communityPool], ["amount", "denom"])
  }

  if ((resp.delegations?.length ?? 0) > 0) {
    const [delegation] = resp.delegations ?? []

    checkFields([delegation], ["amount", "delegator", "validator"])
  }
})

const testRedelegations = async (
  args: GQLQueryGqlRedelegationsArgs,
  fields?: GQLRedelegation
) => {
  const resp = await heartMonitor.redelegations(args, fields)
  expect(resp).toHaveProperty("redelegations")

  if ((resp.redelegations?.length ?? 0) > 0) {
    const [redelegations] = resp.redelegations ?? []

    checkFields(
      [redelegations],
      [
        "delegator",
        "source_validator",
        "destination_validator",
        "amount",
        "creation_block",
        "completion_time",
      ]
    )
  }
}

test("redelegations", async () => {
  await testRedelegations({
    limit: 1,
  })
  await testRedelegations({}, defaultRedelegations)
})

const testSpotLpPositions = async (
  args: GQLQueryGqlSpotLpPositionsArgs,
  fields?: GQLSpotLpPosition
) => {
  const resp = await heartMonitor.spotLpPositions(args, fields)
  expect(resp).toHaveProperty("spotLpPositions")

  if ((resp.spotLpPositions?.length ?? 0) > 0) {
    const [spotLpPositions] = resp.spotLpPositions ?? []

    checkFields(
      [spotLpPositions],
      ["pool", "user", "pool_shares", "created_block"]
    )
  }
}

test("spotLpPositions", async () => {
  await testSpotLpPositions({
    limit: 1,
  })
  await testSpotLpPositions({}, defaultSpotLpPosition)
})

const testSpotPoolCreated = async (
  args: GQLQueryGqlSpotPoolCreatedArgs,
  fields?: GQLSpotPoolCreated
) => {
  const resp = await heartMonitor.spotPoolCreated(args, fields)
  expect(resp).toHaveProperty("spotPoolCreated")

  if ((resp.spotPoolCreated?.length ?? 0) > 0) {
    const [spotPoolCreated] = resp.spotPoolCreated ?? []

    checkFields([spotPoolCreated], ["user", "block", "pool", "pool_shares"])
  }
}

test("spotPoolCreated", async () => {
  await testSpotPoolCreated({
    limit: 1,
  })
  await testSpotPoolCreated({}, defaultSpotPool)
})

const testSpotPoolExited = async (
  args: GQLQueryGqlSpotPoolExitedArgs,
  fields?: GQLSpotPoolExited
) => {
  const resp = await heartMonitor.spotPoolExited(args, fields)
  expect(resp).toHaveProperty("spotPoolExited")

  if ((resp.spotPoolExited?.length ?? 0) > 0) {
    const [spotPoolExited] = resp.spotPoolExited ?? []

    checkFields([spotPoolExited], ["user", "block", "pool", "pool_shares"])
  }
}

test("spotPoolExited", async () => {
  await testSpotPoolExited({
    limit: 1,
  })
  await testSpotPoolExited({}, defaultSpotPool)
})

const testSpotPoolJoined = async (
  args: GQLQueryGqlSpotPoolJoinedArgs,
  fields?: GQLSpotPoolJoined
) => {
  const resp = await heartMonitor.spotPoolJoined(args, fields)
  expect(resp).toHaveProperty("spotPoolJoined")

  if ((resp.spotPoolJoined?.length ?? 0) > 0) {
    const [spotPoolJoined] = resp.spotPoolJoined ?? []

    checkFields([spotPoolJoined], ["user", "block", "pool", "pool_shares"])
  }
}

test("spotPoolJoined", async () => {
  await testSpotPoolJoined({
    limit: 1,
  })
  await testSpotPoolJoined({}, defaultSpotPool)
})

const testSpotPools = async (
  args: GQLQueryGqlSpotPoolsArgs,
  fields?: GQLSpotPool
) => {
  const resp = await heartMonitor.spotPools(args, fields)
  expect(resp).toHaveProperty("spotPools")

  if ((resp.spotPools?.length ?? 0) > 0) {
    const [spotPools] = resp.spotPools ?? []

    checkFields(
      [spotPools],
      [
        "pool_id",
        "pool_type",
        "swap_fee",
        "exit_fee",
        "amplification",
        "tokens",
        "weights",
        "total_weight",
        "total_shares",
        "created_block",
      ]
    )
  }
}

test("spotPools", async () => {
  await testSpotPools({
    limit: 1,
  })
  await testSpotPools({}, defaultPool)
})

const testSpotPoolSwap = async (
  args: GQLQueryGqlSpotPoolSwapArgs,
  fields?: GQLSpotPoolSwap
) => {
  const resp = await heartMonitor.spotPoolSwap(args, fields)
  expect(resp).toHaveProperty("spotPoolSwap")

  if ((resp.spotPoolSwap?.length ?? 0) > 0) {
    const [spotPoolSwap] = resp.spotPoolSwap ?? []

    checkFields(
      [spotPoolSwap],
      ["user", "block", "token_in", "token_out", "pool"]
    )
  }
}

test("spotPoolSwap", async () => {
  await testSpotPoolSwap({ limit: 1 })
  await testSpotPoolSwap({}, defaultSpotPoolSwap)
})

const testStats = async (args: QueryStatsArgs, fields?: GQLStatsFields) => {
  const resp = await heartMonitor.stats(args, fields)
  expect(resp).toHaveProperty("stats")

  if (resp.GQLStats) {
    const { GQLStats } = resp

    checkFields(
      [GQLStats],
      [
        "totals",
        "fees",
        "perpOpenInterest",
        "tvl",
        "perpPnl",
        "users",
        "volume",
      ]
    )
  }
}

test("stats", async () => {
  await testStats({
    totals: {
      limit: 1,
    },
    fees: {
      limit: 1,
    },
    perpOpenInterest: {
      limit: 1,
    },
    tvl: {
      limit: 1,
    },
    perpPnl: {
      limit: 1,
    },
    users: {
      limit: 1,
    },
    volume: {
      limit: 1,
    },
  })
  await testStats(
    {
      totals: {
        limit: 1,
      },
      fees: {
        limit: 1,
      },
      perpOpenInterest: {
        limit: 1,
      },
      tvl: {
        limit: 1,
      },
      perpPnl: {
        limit: 1,
      },
      users: {
        limit: 1,
      },
      volume: {
        limit: 1,
      },
    },
    {
      totals: defaultTotals,
      fees: defaultStatsFees,
      perpOpenInterest: defaultPerpOpenInterest,
      tvl: defaultTvl,
      perpPnl: defaultPerpPnl,
      users: defaultUsers,
      volume: defaultVolume,
    }
  )
  await testStats(
    {},
    {
      totals: defaultTotals,
      fees: defaultStatsFees,
      perpOpenInterest: defaultPerpOpenInterest,
      tvl: defaultTvl,
      perpPnl: defaultPerpPnl,
      users: defaultUsers,
      volume: defaultVolume,
    }
  )
})

const testWasm = async (args: QueryWasmArgs, fields?: GqlWasmFields) => {
  const resp = await heartMonitor.wasm(args, fields)
  expect(resp).toHaveProperty("wasm")

  if (resp.wasm) {
    const { wasm } = resp

    checkFields([wasm], ["userContracts"])
  }
}

test("wasm", async () => {
  await testWasm({
    userContracts: {
      where: {
        contractAddress: { like: "123" },
        userAddress: { eq: "456" },
      },
      limit: 1,
    },
  })

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

const testUnbondings = async (
  args: GQLQueryGqlUnbondingsArgs,
  fields?: GQLUnbonding
) => {
  const resp = await heartMonitor.unbondings(args, fields)
  expect(resp).toHaveProperty("unbondings")

  if ((resp.unbondings?.length ?? 0) > 0) {
    const [unbonding] = resp.unbondings ?? []

    checkFields(
      [unbonding],
      ["delegator", "validator", "amount", "creation_block", "completion_time"]
    )
  }
}

test("unbondings", async () => {
  await testUnbondings({ limit: 1 })
  await testUnbondings({}, defaultUnbondings)
})

const testUsers = async (args: GQLQueryGqlUsersArgs, fields?: GQLUser) => {
  const resp = await heartMonitor.users(args, fields)

  expect(resp).toHaveProperty("users")

  if ((resp.users?.length ?? 0) > 0) {
    const [users] = resp.users ?? []

    checkFields([users], ["address", "balances", "created_block"])
  }
}

test("users", async () => {
  await testUsers({ limit: 1 })
  await testUsers({}, defaultUser)
})

const testValidators = async (
  args: GQLQueryGqlValidatorsArgs,
  fields?: GQLValidator
) => {
  const resp = await heartMonitor.validators(args, fields)
  expect(resp).toHaveProperty("validators")

  if ((resp.validators?.length ?? 0) > 0) {
    const [validator] = resp.validators ?? []

    checkFields(
      [validator],
      [
        "commission_rates",
        "commission_update_time",
        "delegator_shares",
        "description",
        "jailed",
        "min_self_delegation",
        "operator_address",
        "status",
        "tokens",
        "unbonding_block",
        "unbonding_time",
      ]
    )
  }
}
test("validators", async () => {
  await testValidators({
    limit: 1,
  })
  await testValidators({}, defaultValidator)
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
