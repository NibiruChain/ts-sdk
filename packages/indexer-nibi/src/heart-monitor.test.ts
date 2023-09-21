import { HeartMonitor } from "./heart-monitor"
import { cleanResponse, gqlEndptFromTmRpc } from "./gql"
import {
  communityPoolQueryString,
  defaultPerpPositionsObject,
  delegationsQueryString,
} from "./query"
import {
  defaultMarkPriceCandlesObject,
  defaultPerpMarket,
} from "./defaultObjects"

const heartMonitor = new HeartMonitor({
  endptTm: "https://hm-graphql.itn-2.nibiru.fi",
})

describe("Heart Monitor constructor", () => {
  interface TestCase {
    name: string
    in?: string | { endptTm: string } | undefined
    expected: string
  }

  const { defaultGqlEndpt } = new HeartMonitor()

  const tests: TestCase[] = [
    { name: "undefined", in: undefined, expected: defaultGqlEndpt },
    { name: "valid string", in: "abc123", expected: "abc123" },
    {
      name: "chain",
      in: { endptTm: "https://rpc.itn-1.nibiru.fi" },
      expected: "https://hm-graphql.itn-1.nibiru.fi/graphql",
    },
    {
      name: "empty chain string",
      in: { endptTm: "" },
      expected: defaultGqlEndpt,
    },
    {
      name: "undefined as string",
      in: { endptTm: undefined as unknown as string },
      expected: defaultGqlEndpt,
    },
  ]

  test.each(tests)("$name", (tc) => {
    const hm = new HeartMonitor(tc.in)
    expect(hm.gqlEndpt).toBe(tc.expected)
  })
})

describe("gqlEndptFromTmRpc", () => {
  interface TestCase {
    in: string
    want: string | null
  }

  const tests: TestCase[] = [
    {
      in: "https://rpc.itn-2.nibiru.fi",
      want: "https://hm-graphql.itn-2.nibiru.fi/graphql",
    },
    {
      in: "----rpc.itn-1.-----",
      want: "https://hm-graphql.itn-1.nibiru.fi/graphql",
    },
    { in: "", want: null },
    { in: "rpctestnet-nodots", want: null },
    {
      in: "rpc.testnet-nodots",
      want: "https://hm-graphql.testnet-nodots.nibiru.fi/graphql",
    },
  ]

  test.each(tests)("%s", (tc: TestCase) => {
    const got = gqlEndptFromTmRpc(tc.in)
    expect(got).toBe(tc.want)
  })
})

test("communityPool", async () => {
  const resp = await heartMonitor.communityPool({})
  expect(resp).toHaveProperty("communityPool")

  if ((resp.communityPool?.length ?? 0) > 0) {
    const [communityPool] = resp.communityPool ?? []
    const fields = ["amount", "denom"]
    fields.forEach((field: string) => {
      expect(communityPool).toHaveProperty(field)
    })
  }
})

test("delegations", async () => {
  const resp = await heartMonitor.delegations({
    limit: 1,
  })
  expect(resp).toHaveProperty("delegations")

  if ((resp.delegations?.length ?? 0) > 0) {
    const [delegation] = resp.delegations ?? []
    const fields = ["amount", "delegator", "validator"]
    fields.forEach((field: string) => {
      expect(delegation).toHaveProperty(field)
    })
  }
})

test("distributionCommissions", async () => {
  const resp = await heartMonitor.distributionCommissions({
    limit: 1,
  })
  expect(resp).toHaveProperty("distributionCommissions")

  if ((resp.distributionCommissions?.length ?? 0) > 0) {
    const [distributionCommissions] = resp.distributionCommissions ?? []
    const fields = ["commission", "validator"]
    fields.forEach((field: string) => {
      expect(distributionCommissions).toHaveProperty(field)
    })
  }
})

test("governance", async () => {
  const resp = await heartMonitor.governance({
    govDeposits: {
      limit: 1,
    },
    govProposals: {
      limit: 1,
    },
    govVotes: {
      limit: 1,
    },
  })
  expect(resp).toHaveProperty("governance")

  if (resp.governance) {
    const { governance } = resp
    const fields = ["govDeposits", "govProposals", "govVotes"]
    fields.forEach((field: string) => {
      expect(governance).toHaveProperty(field)
    })
  }
})

test("markPriceCandles", async () => {
  const resp = await heartMonitor.markPriceCandles({
    limit: 1,
  })
  expect(resp).toHaveProperty("markPriceCandles")

  if ((resp.markPriceCandles?.length ?? 0) > 0) {
    const [markPriceCandle] = resp.markPriceCandles ?? []
    const fields = [
      "close",
      "high",
      "low",
      "open",
      "pair",
      "period",
      "periodStartTs",
    ]
    fields.forEach((field: string) => {
      expect(markPriceCandle).toHaveProperty(field)
    })
  }
})

test("markPriceCandlesSubscription", async () => {
  const hm = {
    markPriceCandlesSubscription: jest.fn().mockResolvedValue({
      next: async () => ({
        value: {
          data: {
            markPriceCandles: defaultMarkPriceCandlesObject,
          },
        },
      }),
    }),
  }

  const resp = await hm.markPriceCandlesSubscription({
    limit: 1,
  })

  const event = await resp.next()

  expect(event.value.data).toHaveProperty("markPriceCandles")

  if ((event.value.data.markPriceCandles.length ?? 0) > 0) {
    const [markPriceCandle] = event.value.data.markPriceCandles ?? []
    const fields = [
      "close",
      "high",
      "low",
      "open",
      "pair",
      "period",
      "periodStartTs",
    ]
    fields.forEach((field: string) => {
      expect(markPriceCandle).toHaveProperty(field)
    })
  }
})

test("perpLeaderboard", async () => {
  const resp = await heartMonitor.perpLeaderboard({
    limit: 1,
  })
  expect(resp).toHaveProperty("perpLeaderboard")

  if ((resp.perpLeaderboard?.length ?? 0) > 0) {
    const [perpLeaderboard] = resp.perpLeaderboard ?? []
    const fields = [
      "avg_pct_pnl",
      "input_margin",
      "raw_pnl",
      "raw_pnl_with_unrealized",
      "trader_address",
    ]
    fields.forEach((field: string) => {
      expect(perpLeaderboard).toHaveProperty(field)
    })
  }
})

test("perpMarket", async () => {
  const resp = await heartMonitor.perpMarket({ where: { pair: "" } })
  expect(resp).toHaveProperty("perpMarket")

  if (resp.perpMarket) {
    const { perpMarket } = resp
    const fields = [
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
    fields.forEach((field: string) => {
      expect(perpMarket).toHaveProperty(field)
    })
  }
})

test("perpMarketSubscription", async () => {
  const hm = {
    perpMarketSubscription: jest.fn().mockResolvedValue({
      next: async () => ({
        value: {
          data: {
            perpMarket: defaultPerpMarket,
          },
        },
      }),
    }),
  }

  const resp = await hm.perpMarketSubscription({
    where: { pair: "ubtc:unusd" },
  })

  const event = await resp.next()

  expect(event.value.data).toHaveProperty("perpMarket")
  if (event.value.data.perpMarket) {
    const { perpMarket } = event.value.data
    const fields = [
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
    fields.forEach((field: string) => {
      expect(perpMarket).toHaveProperty(field)
    })
  }
})

test("perpMarkets", async () => {
  const resp = await heartMonitor.perpMarkets({
    limit: 1,
  })
  expect(resp).toHaveProperty("perpMarkets")

  if (resp.perpMarkets) {
    const [perpMarkets] = resp.perpMarkets
    const fields = [
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
    fields.forEach((field: string) => {
      expect(perpMarkets).toHaveProperty(field)
    })
  }
})

test("perpPosition", async () => {
  const resp = await heartMonitor.perpPosition({
    where: {
      pair: "ubtc:unusd",
      trader_address: "nibi14garegtvsx3zcku4esd30xd2pze7ck44ysxeg3",
    },
  })
  expect(resp).toHaveProperty("perpPosition")

  if (resp.perpPosition) {
    const { perpPosition } = resp
    const fields = [
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
    fields.forEach((field: string) => {
      expect(perpPosition).toHaveProperty(field)
    })
  }
})

test("perpPositions", async () => {
  const resp = await heartMonitor.perpPositions({
    limit: 1,
  })
  expect(resp).toHaveProperty("perpPositions")

  if ((resp.perpPositions?.length ?? 0) > 0) {
    const [perpPositions] = resp.perpPositions ?? []
    const fields = [
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
    fields.forEach((field: string) => {
      expect(perpPositions).toHaveProperty(field)
    })
  }
})

test("perpPositionsSubscription", async () => {
  const hm = {
    perpPositionsSubscription: jest.fn().mockResolvedValue({
      next: async () => ({
        value: {
          data: {
            perpPositions: defaultPerpPositionsObject,
          },
        },
      }),
    }),
  }

  const resp = await hm.perpPositionsSubscription({
    where: {
      pair: "ubtc:unusd",
      trader_address: "nibi14garegtvsx3zcku4esd30xd2pze7ck44ysxeg3",
    },
  })

  const event = await resp.next()

  expect(event.value.data).toHaveProperty("perpPositions")
  if ((event.value.data.perpPositions.length ?? 0) > 0) {
    const [perpPositions] = event.value.data.perpPositions ?? []
    const fields = [
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
    fields.forEach((field: string) => {
      expect(perpPositions).toHaveProperty(field)
    })
  }
})

test("queryBatchHandler", async () => {
  const resp = await heartMonitor.queryBatchHandler([
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
    const fields = ["amount", "denom"]
    fields.forEach((field: string) => {
      expect(communityPool).toHaveProperty(field)
    })
  }

  if ((resp.delegations?.length ?? 0) > 0) {
    const [delegation] = resp.delegations ?? []
    const fields = ["amount", "delegator", "validator"]
    fields.forEach((field: string) => {
      expect(delegation).toHaveProperty(field)
    })
  }
})

test("redelegations", async () => {
  const resp = await heartMonitor.redelegations({
    limit: 1,
  })
  expect(resp).toHaveProperty("redelegations")

  if ((resp.redelegations?.length ?? 0) > 0) {
    const [redelegations] = resp.redelegations ?? []
    const fields = [
      "delegator",
      "source_validator",
      "destination_validator",
      "amount",
      "creation_block",
      "completion_time",
    ]
    fields.forEach((field: string) => {
      expect(redelegations).toHaveProperty(field)
    })
  }
})

test("spotLpPositions", async () => {
  const resp = await heartMonitor.spotLpPositions({
    limit: 1,
  })
  expect(resp).toHaveProperty("spotLpPositions")

  if ((resp.spotLpPositions?.length ?? 0) > 0) {
    const [spotLpPositions] = resp.spotLpPositions ?? []
    const fields = ["pool", "user", "pool_shares", "created_block"]
    fields.forEach((field: string) => {
      expect(spotLpPositions).toHaveProperty(field)
    })
  }
})

test("spotPoolCreated", async () => {
  const resp = await heartMonitor.spotPoolCreated({
    limit: 1,
  })
  expect(resp).toHaveProperty("spotPoolCreated")

  if ((resp.spotPoolCreated?.length ?? 0) > 0) {
    const [spotPoolCreated] = resp.spotPoolCreated ?? []
    const fields = ["user", "block", "pool", "pool_shares"]
    fields.forEach((field: string) => {
      expect(spotPoolCreated).toHaveProperty(field)
    })
  }
})

test("spotPoolExited", async () => {
  const resp = await heartMonitor.spotPoolExited({
    limit: 1,
  })
  expect(resp).toHaveProperty("spotPoolExited")

  if ((resp.spotPoolExited?.length ?? 0) > 0) {
    const [spotPoolExited] = resp.spotPoolExited ?? []
    const fields = ["user", "block", "pool", "pool_shares"]
    fields.forEach((field: string) => {
      expect(spotPoolExited).toHaveProperty(field)
    })
  }
})

test("spotPoolJoined", async () => {
  const resp = await heartMonitor.spotPoolJoined({
    limit: 1,
  })
  expect(resp).toHaveProperty("spotPoolJoined")

  if ((resp.spotPoolJoined?.length ?? 0) > 0) {
    const [spotPoolJoined] = resp.spotPoolJoined ?? []
    const fields = ["user", "block", "pool", "pool_shares"]
    fields.forEach((field: string) => {
      expect(spotPoolJoined).toHaveProperty(field)
    })
  }
})

test("spotPools", async () => {
  const resp = await heartMonitor.spotPools({
    limit: 1,
  })
  expect(resp).toHaveProperty("spotPools")

  if ((resp.spotPools?.length ?? 0) > 0) {
    const [spotPools] = resp.spotPools ?? []
    const fields = [
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
    fields.forEach((field: string) => {
      expect(spotPools).toHaveProperty(field)
    })
  }
})

test("spotPoolSwap", async () => {
  const resp = await heartMonitor.spotPoolSwap({
    limit: 1,
  })
  expect(resp).toHaveProperty("spotPoolSwap")

  if ((resp.spotPoolSwap?.length ?? 0) > 0) {
    const [spotPoolSwap] = resp.spotPoolSwap ?? []
    const fields = ["user", "block", "token_in", "token_out", "pool"]
    fields.forEach((field: string) => {
      expect(spotPoolSwap).toHaveProperty(field)
    })
  }
})

test("stats", async () => {
  const resp = await heartMonitor.stats({
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
  expect(resp).toHaveProperty("stats")

  if (resp.stats) {
    const { stats } = resp
    const fields = [
      "totals",
      "fees",
      "perpOpenInterest",
      "tvl",
      "perpPnl",
      "users",
      "volume",
    ]
    fields.forEach((field: string) => {
      expect(stats).toHaveProperty(field)
    })
  }
})

test("unbondings", async () => {
  const resp = await heartMonitor.unbondings({
    limit: 1,
  })
  expect(resp).toHaveProperty("unbondings")

  if ((resp.unbondings?.length ?? 0) > 0) {
    const [unbonding] = resp.unbondings ?? []
    const fields = [
      "delegator",
      "validator",
      "amount",
      "creation_block",
      "completion_time",
    ]
    fields.forEach((field: string) => {
      expect(unbonding).toHaveProperty(field)
    })
  }
})

test("users", async () => {
  const resp = await heartMonitor.users({
    limit: 1,
  })
  expect(resp).toHaveProperty("users")

  if ((resp.users?.length ?? 0) > 0) {
    const [users] = resp.users ?? []
    const fields = ["address", "balances", "created_block"]
    fields.forEach((field: string) => {
      expect(users).toHaveProperty(field)
    })
  }
})

test("validators", async () => {
  const resp = await heartMonitor.validators({
    limit: 1,
  })
  expect(resp).toHaveProperty("validators")

  if ((resp.validators?.length ?? 0) > 0) {
    const [validator] = resp.validators ?? []
    const fields = [
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
    fields.forEach((field: string) => {
      expect(validator).toHaveProperty(field)
    })
  }
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

  test("should throw an error if rawResp is not ok", async () => {
    const error = { error: "Error message" }
    const rawResp = {
      ok: false,
      json: () => Promise.resolve(error),
    } as Response
    await expect(cleanResponse(rawResp)).rejects.toThrowError(
      `${JSON.stringify(error)}`
    )
  })

  test("should throw an error if unable to parse JSON", async () => {
    const rawResp = {
      ok: true,
      json: () => Promise.reject(new Error("invalid json")),
    } as Response
    await expect(cleanResponse(rawResp)).rejects.toThrowError(``)
  })
})
