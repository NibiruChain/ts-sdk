/* eslint-disable jest/no-conditional-expect */
import { CandleStickPeriod } from "./constant"
import { HeartMonitor } from "./heart-monitor"

const fromBlock = 1
const toBlock = 10
const lastN = 20
const pair = "ubtc:unusd"

const heartMonitor = new HeartMonitor()

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

test("useMarkPriceCandleSticks", async () => {
  const nowTimestamp = Date.now()
  const endDate = new Date(nowTimestamp)
  const startDate = new Date(nowTimestamp - 1000 * 7 * 24 * 60 * 60)
  const resp = await heartMonitor.useMarkPriceCandleSticks({
    pair,
    period: CandleStickPeriod.MIN_5,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
  })
  expect(resp).toHaveProperty("markPriceCandlesticks")

  if (resp.markPriceCandlesticks.length > 0) {
    const [posChange] = resp.markPriceCandlesticks
    const props = ["pair", "open", "close", "high", "low", "period", "periodStart"]
    props.forEach((prop: string) => {
      expect(posChange).toHaveProperty(prop)
    })
  }
})
