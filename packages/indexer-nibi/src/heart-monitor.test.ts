import {
  useQueryBlockMarkPrices,
  useQueryMarkPrices,
  useQueryPosChange,
} from "./heart-monitor"

// const fromBlock = 10_000
// const toBlock = 10_009
const fromBlock = 10
const toBlock = 15
const pair = "ubtc:unusd"

test("useQueryMarkPrices", async () => {
  console.log(
    "DEBUG useQueryMarkPrices: %o",
    await useQueryMarkPrices({
      pair,
      fromBlock,
      toBlock,
    }),
  )
})

test("useQueryBlockMarkPrices", async () => {
  console.log(
    "DEBUG useQueryBlockMarkPrices: %o",
    await useQueryBlockMarkPrices({
      pair,
      fromBlock,
      toBlock,
    }),
  )
})

test("useQueryPosChange", async () => {
  console.log(
    "DEBUG useQueryPosChange: %o",
    await useQueryPosChange({
      pair,
      fromBlock,
      toBlock,
    }),
  )
})
