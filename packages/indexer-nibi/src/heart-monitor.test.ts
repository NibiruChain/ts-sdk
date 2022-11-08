import {
  useQueryBlockMarkPrices,
  useQueryMarkPrices,
  useQueryPosChange,
} from "./heart-monitor"

const fromBlock = 10_000
const toBlock = 10_009
const pair = "ubtc:unusd"

test("useQueryMarkPrices", async () => {
  const resp = await useQueryMarkPrices({
    pair,
    fromBlock,
    toBlock,
  })
  expect(resp).toHaveProperty("markPrices")
  const [markPrice] = resp.markPrices

  const props = ["pair", "price", "block"]
  props.forEach((prop: string) => {
    expect(markPrice).toHaveProperty(prop)
  })
  console.info("useQueryMarkPrices: %o", resp)
})

test("useQueryBlockMarkPrices", async () => {
  const resp = await useQueryBlockMarkPrices({
    pair,
    fromBlock,
    toBlock,
  })
  expect(resp).toHaveProperty("blockMarkPrices")
  const [blockMarkPrice] = resp.blockMarkPrices

  const props = ["pair", "price", "block", "blockTimestamp"]
  props.forEach((prop: string) => {
    expect(blockMarkPrice).toHaveProperty(prop)
  })
  console.info("useQueryBlockMarkPrices: %o", resp)
})

test("useQueryPosChange", async () => {
  const resp = await useQueryPosChange({
    pair,
    fromBlock,
    toBlock,
  })
  expect(resp).toHaveProperty("positions")
  const [posChange] = resp.positions

  const props = ["block", "blockTimestamp", "fundingPayment", "margin", "pair", "size"]
  props.forEach((prop: string) => {
    expect(posChange).toHaveProperty(prop)
  })
  console.info("useQueryPosChange: %o", resp)
})
