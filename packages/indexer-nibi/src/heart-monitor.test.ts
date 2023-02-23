/* eslint-disable jest/no-conditional-expect */
import { CandlePeriod } from "./enum"
import { gqlEndptFromTmRpc, HeartMonitor } from "./heart-monitor"

const fromBlock = 1
const toBlock = 10
const lastN = 20
const pair = "ubtc:unusd"

const heartMonitor = new HeartMonitor()

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

/*

test("useQueryMarkPrices", async () => {
  const resp = await heartMonitor.useQueryMarkPrices({
    pair,
    fromBlock,
    toBlock,
  })
  console.info("useQueryMarkPrices: %o", resp)
  expect(resp).toHaveProperty("markPrices")

  if (resp.markPrices.length > 0) {
    const [markPrice] = resp.markPrices
    const props = ["pair", "price", "block"]
    props.forEach((prop: string) => {
      expect(markPrice).toHaveProperty(prop)
    })
  }
})

test("useQueryBlockMarkPrices", async () => {
  const resp = await heartMonitor.useQueryBlockMarkPrices({
    pair,
    fromBlock,
    toBlock,
  })
  console.info("useQueryBlockMarkPrices: %o", resp)
  expect(resp).toHaveProperty("blockMarkPrices")

  if (resp.blockMarkPrices.length > 0) {
    const [blockMarkPrice] = resp.blockMarkPrices
    const props = ["pair", "price", "block", "blockTimestamp"]
    props.forEach((prop: string) => {
      expect(blockMarkPrice).toHaveProperty(prop)
    })
  }
})

test("useQueryPosChange", async () => {
  const resp = await heartMonitor.useQueryPosChange({
    pair,
    fromBlock,
    toBlock,
  })
  console.info("useQueryPosChange: %o", resp)
  expect(resp).toHaveProperty("positions")

  if (resp.positions.length > 0) {
    const [posChange] = resp.positions
    const props = [
      "block",
      "blockTimestamp",
      "fundingPayment",
      "margin",
      "pair",
      "size",
    ]
    props.forEach((prop: string) => {
      expect(posChange).toHaveProperty(prop)
    })
  }
})

test("useQueryRecentTrades", async () => {
  const resp = await heartMonitor.useQueryRecentTrades({
    pair,
    lastN,
  })
  expect(resp).toHaveProperty("recentTrades")

  if (resp.recentTrades.length > 0) {
    const [posChange] = resp.recentTrades
    const props = [
      "block",
      "blockTimestamp",
      "fundingPayment",
      "margin",
      "pair",
      "size",
    ]
    props.forEach((prop: string) => {
      expect(posChange).toHaveProperty(prop)
    })
  }
})

*/
