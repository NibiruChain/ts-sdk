/* eslint-disable jest/no-conditional-expect */
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
  console.info("useQueryRecentTrades: %o", resp)
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
