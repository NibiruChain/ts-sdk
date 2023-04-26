/* eslint-disable jest/no-conditional-expect */
import { HeartMonitor } from "./heart-monitor"
import { CandlePeriod, StatsPeriod } from "./enum"
import { gqlEndptFromTmRpc } from "./gql"

const fromBlock = 1
const toBlock = 10
const lastN = 20
const pair = "ubtc:unusd"

const heartMonitor = new HeartMonitor({ endptTm: "https://rpc.itn-1.nibiru.fi" })

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
      name: "invalid string",
      in: undefined,
      expected: "https://hm-graphql.devnet-2.nibiru.fi/graphql",
    },
    {
      name: "chain",
      in: { endptTm: "https://rpc.itn-1.nibiru.fi" },
      expected: "https://hm-graphql.itn-1.nibiru.fi/graphql",
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
      in: "https://rpc.devnet-2.nibiru.fi",
      want: "https://hm-graphql.devnet-2.nibiru.fi/graphql",
    },
    { in: "----rpc.itn-1.-----", want: "https://hm-graphql.itn-1.nibiru.fi/graphql" },
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

test("markPriceCandles", async () => {
  const nowTimestamp = Date.now()
  const endDate = new Date(nowTimestamp)
  const startDate = new Date(nowTimestamp - 1000 * 7 * 24 * 60 * 60)
  const resp = await heartMonitor.markPriceCandles({
    pair,
    period: CandlePeriod.MIN_5,
    limit: 3,
    startTs: startDate.toISOString(),
    endTs: endDate.toISOString(),
  })
  expect(resp).toHaveProperty("markPriceCandles")

  if (resp.markPriceCandles.length > 0) {
    const [candle] = resp.markPriceCandles
    const fields = ["pair", "open", "close", "high", "low", "period", "periodStartTs"]
    fields.forEach((field: string) => {
      expect(candle).toHaveProperty(field)
    })
  }
})

test("markPrices", async () => {
  const nowTimestamp = Date.now()
  const endDate = new Date(nowTimestamp)
  const startDate = new Date(nowTimestamp - 1000 * 7 * 24 * 60 * 60)
  const resp = await heartMonitor.markPrices({
    pair,
    limit: 3,
    startTs: startDate.toISOString(),
    endTs: endDate.toISOString(),
  })
  expect(resp).toHaveProperty("markPrices")

  if (resp.markPrices.length > 0) {
    const [price] = resp.markPrices
    const fields = ["pair", "block", "blockTs", "price"]
    fields.forEach((field: string) => {
      expect(price).toHaveProperty(field)
    })
  }
})

test("liquidations", async () => {
  const nowTimestamp = Date.now()
  const endDate = new Date(nowTimestamp)
  const startDate = new Date(nowTimestamp - 1000 * 30 * 24 * 60 * 60)
  const resp = await heartMonitor.liquidations({
    pair,
    limit: 3,
    startTs: startDate.toISOString(),
    endTs: endDate.toISOString(),
  })
  expect(resp).toHaveProperty("liquidations")

  if (resp.liquidations.length > 0) {
    const [liquidation] = resp.liquidations
    const fields = [
      "block",
      "blockTs",
      "traderAddress",
      "pair",
      "liquidatorAddress",
      "exchangedQuoteAmount",
      "exchangedPositionSize",
      "feeToLiquidator",
      "feeToEcosystemFund",
      "badDebt",
    ]
    fields.forEach((field: string) => {
      expect(liquidation).toHaveProperty(field)
    })
  }
})

test("fundingRates", async () => {
  const nowTimestamp = Date.now()
  const endDate = new Date(nowTimestamp)
  const startDate = new Date(nowTimestamp - 1000 * 30 * 24 * 60 * 60)
  const resp = await heartMonitor.fundingRates({
    pair,
    limit: 3,
    startTs: startDate.toISOString(),
    endTs: endDate.toISOString(),
  })
  expect(resp).toHaveProperty("fundingRates")

  if (resp.fundingRates.length > 0) {
    const [fundingRate] = resp.fundingRates
    const fields = [
      "block",
      "blockTs",
      "pair",
      "markPrice",
      "indexPrice",
      "latestFundingRate",
      "cumulativePremiumFraction",
    ]
    fields.forEach((field: string) => {
      expect(fundingRate).toHaveProperty(field)
    })
  }
})

test("transfers", async () => {
  const nowTimestamp = Date.now()
  const endDate = new Date(nowTimestamp)
  const startDate = new Date(nowTimestamp - 1000 * 7 * 24 * 60 * 60)
  const resp = await heartMonitor.transfers({
    limit: 3,
    startTs: startDate.toISOString(),
    endTs: endDate.toISOString(),
  })
  expect(resp).toHaveProperty("transfers")

  if (resp.transfers.length > 0) {
    const [transfer] = resp.transfers
    const fields = ["block", "blockTs", "recipient", "sender", "amount"]
    fields.forEach((field: string) => {
      expect(transfer).toHaveProperty(field)
    })
  }
})

test("oraclePrices", async () => {
  const nowTimestamp = Date.now()
  const endDate = new Date(nowTimestamp)
  const startDate = new Date(nowTimestamp - 1000 * 7 * 24 * 60 * 60)
  const resp = await heartMonitor.oraclePrices({
    pair,
    limit: 3,
    startTs: startDate.toISOString(),
    endTs: endDate.toISOString(),
  })
  expect(resp).toHaveProperty("oraclePrices")

  if (resp.oraclePrices.length > 0) {
    const [price] = resp.oraclePrices
    const fields = ["pair", "block", "blockTs", "price"]
    fields.forEach((field: string) => {
      expect(price).toHaveProperty(field)
    })
  }
})

test("positions", async () => {
  const nowTimestamp = Date.now()
  const endDate = new Date(nowTimestamp)
  const startDate = new Date(nowTimestamp - 1000 * 7 * 24 * 60 * 60)
  const resp = await heartMonitor.positions({
    pair,
    limit: 3,
    startTs: startDate.toISOString(),
    endTs: endDate.toISOString(),
  })
  expect(resp).toHaveProperty("positions")

  if (resp.positions.length > 0) {
    const [position] = resp.positions
    const fields = [
      "pair",
      "block",
      "blockTs",
      "trader",
      "size",
      "margin",
      "openNotional",
      "positionNotional",
      "unrealizedPnl",
      "marginRatioMark",
      "marginRatioIndex",
      "openBlock",
    ]
    fields.forEach((field: string) => {
      expect(position).toHaveProperty(field)
    })
  }
})

test("positionChanges", async () => {
  const nowTimestamp = Date.now()
  const endDate = new Date(nowTimestamp)
  const startDate = new Date(nowTimestamp - 1000 * 7 * 24 * 60 * 60)
  const resp = await heartMonitor.positionChanges({
    pair,
    limit: 3,
    startTs: startDate.toISOString(),
    endTs: endDate.toISOString(),
  })
  expect(resp).toHaveProperty("positionChanges")

  if (resp.positionChanges.length > 0) {
    const [change] = resp.positionChanges
    const fields = [
      "pair",
      "block",
      "blockTs",
      "traderAddress",
      "margin",
      "markPrice",
      "positionSize",
      "exchangedSize",
      "positionNotional",
      "exchangedNotional",
      "fundingPayment",
      "transactionFee",
      "unrealizedPnlAfter",
      "realizedPnl",
      "badDebt",
    ]
    fields.forEach((field: string) => {
      expect(change).toHaveProperty(field)
    })
  }
})

test("unbondings", async () => {
  const nowTimestamp = Date.now()
  const endDate = new Date(nowTimestamp)
  const startDate = new Date(nowTimestamp - 1000 * 7 * 24 * 60 * 60)
  const resp = await heartMonitor.unbondings({
    limit: 3,
    startTs: startDate.toISOString(),
    endTs: endDate.toISOString(),
  })
  expect(resp).toHaveProperty("unbondings")

  if (resp.unbondings.length > 0) {
    const [unbonding] = resp.unbondings
    const fields = [
      "block",
      "blockTs",
      "validatorAddress",
      "delegatorAddress",
      "creationHeight",
      "completionTime",
      "initialBalance",
      "balance",
    ]
    fields.forEach((field: string) => {
      expect(unbonding).toHaveProperty(field)
    })
  }
})

test("statsVolume", async () => {
  const nowTimestamp = Date.now()
  const endDate = new Date(nowTimestamp)
  const startDate = new Date(nowTimestamp - 1000 * 7 * 24 * 60 * 60)
  const resp = await heartMonitor.statsVolume({
    limit: 3,
    period: StatsPeriod.HOUR_1,
    startTs: startDate.toISOString(),
    endTs: endDate.toISOString(),
  })
  expect(resp).toHaveProperty("statsVolume")

  if (resp.statsVolume.length > 0) {
    const [statVolume] = resp.statsVolume
    const fields = [
      "period",
      "periodStartTs",
      "volumePerp",
      "volumeSwap",
      "volumeTotal",
      "volumePerpCumulative",
      "volumeSwapCumulative",
      "volumeTotalCumulative",
    ]
    fields.forEach((field: string) => {
      expect(statVolume).toHaveProperty(field)
    })
  }
})

test("validators", async () => {
  const nowTimestamp = Date.now()
  const endDate = new Date(nowTimestamp)
  const startDate = new Date(nowTimestamp - 1000 * 7 * 24 * 60 * 60)
  const resp = await heartMonitor.validators({
    limit: 3,
    startTs: startDate.toISOString(),
    endTs: endDate.toISOString(),
  })
  expect(resp).toHaveProperty("validators")

  if (resp.validators.length > 0) {
    const [validator] = resp.validators
    const fields = [
      "block",
      "blockTs",
      "operatorAddress",
      "jailed",
      "statusBonded",
      "tokens",
      "delegatorShares",
      "description",
      "unbondingHeight",
      "unbondingTime",
      "commissionRates",
      "commissionUpdateTime",
    ]
    fields.forEach((field: string) => {
      expect(validator).toHaveProperty(field)
    })
  }
})

test("delegations", async () => {
  const nowTimestamp = Date.now()
  const endDate = new Date(nowTimestamp)
  const startDate = new Date(nowTimestamp - 1000 * 7 * 24 * 60 * 60)
  const resp = await heartMonitor.delegations({
    startTs: startDate.toISOString(),
    endTs: endDate.toISOString(),
  })
  expect(resp).toHaveProperty("delegations")

  if (resp.delegations.length > 0) {
    const [delegation] = resp.delegations
    const fields = [
      "block",
      "blockTs",
      "validatorAddress",
      "delegatorAddress",
      "shares",
      "balance",
    ]
    fields.forEach((field: string) => {
      expect(delegation).toHaveProperty(field)
    })
  }
})

test("staking pool", async () => {
  const nowTimestamp = Date.now()
  const endDate = new Date(nowTimestamp)
  const startDate = new Date(nowTimestamp - 1000 * 7 * 24 * 60 * 60)
  const resp = await heartMonitor.stakingPool({
    startTs: startDate.toISOString(),
    endTs: endDate.toISOString(),
  })
  expect(resp).toHaveProperty("stakingPool")

  if (resp.stakingPool.length > 0) {
    const [stakingPool] = resp.stakingPool
    const fields = ["block", "blockTs", "bondedTokens", "notBondedTokens"]
    fields.forEach((field: string) => {
      expect(stakingPool).toHaveProperty(field)
    })
  }
})

test("balances", async () => {
  const nowTimestamp = Date.now()
  const endDate = new Date(nowTimestamp)
  const startDate = new Date(nowTimestamp - 1000 * 7 * 24 * 60 * 60)
  const resp = await heartMonitor.balances({
    limit: 3,
    startTs: startDate.toISOString(),
    endTs: endDate.toISOString(),
  })
  expect(resp).toHaveProperty("balances")

  if (resp.balances.length > 0) {
    const [balance] = resp.balances
    const fields = ["block", "blockTs", "moduleName", "address", "balance"]
    fields.forEach((field: string) => {
      expect(balance).toHaveProperty(field)
    })
  }
})

test("vpoolConfigs", async () => {
  const nowTimestamp = Date.now()
  const endDate = new Date(nowTimestamp)
  const startDate = new Date(nowTimestamp - 1000 * 7 * 24 * 60 * 60)
  const resp = await heartMonitor.vpoolConfigs({
    pair,
    limit: 3,
    startTs: startDate.toISOString(),
    endTs: endDate.toISOString(),
  })
  expect(resp).toHaveProperty("vpoolConfigs")

  if (resp.vpoolConfigs.length > 0) {
    const [config] = resp.vpoolConfigs
    const fields = [
      "block",
      "blockTs",
      "pair",
      "tradeLimitRatio",
      "fluctuationLimitRatio",
      "maxOracleSpreadRatio",
      "maintenanceMarginRatio",
      "maxLeverage",
    ]
    fields.forEach((field: string) => {
      expect(config).toHaveProperty(field)
    })
  }
})

test("ammPools", async () => {
  const nowTimestamp = Date.now()
  const endDate = new Date(nowTimestamp)
  const startDate = new Date(nowTimestamp - 1000 * 7 * 24 * 60 * 60)
  const resp = await heartMonitor.ammPools({
    limit: 3,
    startTs: startDate.toISOString(),
    endTs: endDate.toISOString(),
  })
  expect(resp).toHaveProperty("ammPools")

  if (resp.ammPools.length > 0) {
    const [config] = resp.ammPools
    const fields = [
      "block",
      "blockTs",
      "poolId",
      "address",
      "swapFee",
      "exitFee",
      "amplification",
      "poolType",
      "assets",
      "totalWeight",
      "totalShares",
    ]
    fields.forEach((field: string) => {
      expect(config).toHaveProperty(field)
    })
  }
})

test("ammTotalLiquidity", async () => {
  const nowTimestamp = Date.now()
  const endDate = new Date(nowTimestamp)
  const startDate = new Date(nowTimestamp - 1000 * 7 * 24 * 60 * 60)
  const resp = await heartMonitor.ammTotalLiquidity({
    limit: 3,
    startTs: startDate.toISOString(),
    endTs: endDate.toISOString(),
  })
  expect(resp).toHaveProperty("ammTotalLiquidity")

  if (resp.ammTotalLiquidity.length > 0) {
    const [config] = resp.ammTotalLiquidity
    const fields = ["block", "blockTs", "liquidity"]
    fields.forEach((field: string) => {
      expect(config).toHaveProperty(field)
    })
  }
})
