import { toSdkDec, fromSdkDec, toSdkInt, event2KeyValue } from "./parse"
import { IEventLog } from "./types"

describe("toSdkDec - float to sdk.Dec conversion", () => {
  interface TestCase {
    name: string
    in: string
    expected: string
    shouldFail?: boolean
  }

  const tests: TestCase[] = [
    { name: "empty string", in: "", expected: "", shouldFail: true },
    // valid numbers
    { name: "number 0", in: "0", expected: `0${"0".repeat(18)}` },
    { name: "number 10", in: "10", expected: `10${"0".repeat(18)}` },
    { name: "number 123", in: "123", expected: `123${"0".repeat(18)}` },
    { name: "neg. number 123", in: "-123", expected: `-123${"0".repeat(18)}` },
    // with fractional
    { name: "missing mantisse", in: "0.3", expected: `03${"0".repeat(17)}` },
    { name: "number 0.5", in: "0.5", expected: `05${"0".repeat(17)}` },
    { name: "number 13.235", in: "13.235", expected: `13235${"0".repeat(15)}` },
    {
      name: "neg. number 13.235",
      in: "-13.235",
      expected: `-13235${"0".repeat(15)}`,
    },
    {
      name: "number 1574.00005",
      in: "1574.00005",
      expected: `157400005${"0".repeat(13)}`,
    },
  ]

  test.each(tests)("%o", (tt) => {
    let failed = false
    try {
      const res = toSdkDec(tt.in)
      expect(res).toBe(tt.expected)
    } catch (e) {
      if (!tt.shouldFail) {
        console.error(`Test ${tt.name} failed with error: ${e}`)
      }
      failed = true
    }
    expect(failed).toBe(!!tt.shouldFail)
  })
})

describe("fromSdkDec - sdk.Dec to float conversion", () => {
  interface TestCase {
    name: string
    in: string | null | undefined
    shouldFail?: boolean
    expected?: string
  }

  const casesInvalidInput: TestCase[] = [
    { name: "number with '.'", in: ".3", shouldFail: true },
    { name: "number with '.'", in: "5.3", shouldFail: true },
    { name: "invalid number", in: "hello", shouldFail: true },
  ]
  const casesValidIntegerOnly: TestCase[] = [
    { name: "empty string", in: "", expected: "0" },
    { name: "empty string", in: null, expected: "0" },
    { name: "number 0", in: "0".repeat(5), expected: "0" },
    { name: "number 0", in: "0".repeat(22), expected: "0" },
    { name: "number 10", in: `10${"0".repeat(18)}`, expected: "10" },
    { name: "neg. number 10", in: `-10${"0".repeat(18)}`, expected: "-10" },
    { name: "number 123", in: `123${"0".repeat(18)}`, expected: "123" },
  ]
  const casesWithFractional: TestCase[] = [
    { name: "number 0.5", in: `05${"0".repeat(17)}`, expected: "0.5" },
    {
      name: "fractional only 0.00596",
      in: `596${"0".repeat(13)}`,
      expected: "0.00596",
    },
    { name: "number 13.5", in: `135${"0".repeat(17)}`, expected: "13.5" },
    {
      name: "neg. number 13.5",
      in: `-135${"0".repeat(17)}`,
      expected: "-13.5",
    },
    {
      name: "number 1574.00005",
      in: `157400005${"0".repeat(13)}`,
      expected: "1574.00005",
    },
  ]

  const tests: TestCase[] = casesInvalidInput.concat(
    casesValidIntegerOnly,
    casesWithFractional,
  )

  test.each(tests)("%o", (tt) => {
    let failed = false
    try {
      const res: number = fromSdkDec(tt.in as string)
      expect(res.toString()).toEqual(tt.expected)
    } catch (e) {
      if (!tt.shouldFail) {
        console.error(`Test ${tt.name} failed with error: ${e}`)
      }
      failed = true
    }
    expect(failed).toEqual(!!tt.shouldFail)
  })
})

describe("toSdkInt - int to sdk.Dec conversion", () => {
  interface TestCase {
    name: string
    in: number
    expected: string
    shouldFail?: boolean
  }

  const tests: TestCase[] = [
    { name: "zero", in: 0, expected: "0" },
    { name: "negative int", in: -42, expected: "-42" },
    { name: "positive int", in: 10, expected: "10" },
    { name: "positive dec, round down", in: 1.2345612345612345, expected: "1" },
    { name: "positive dec, round up", in: 1.6543216543216543, expected: "2" },
    { name: "failing case", in: Number.NaN, expected: "NaN" },
  ]

  test.each(tests)("%o", (tt) => {
    let failed: boolean = false
    try {
      const res = toSdkInt(tt.in)
      expect(res).toBe(tt.expected)
    } catch (e) {
      if (!tt.shouldFail) {
        console.error(`Test ${tt.name} failed with error: ${e}`)
      }
      failed = true
    }
    expect(failed).toBe(!!tt.shouldFail)
  })
})

test("event2KeyValue - event parsing", () => {
  const testCases: {
    eventLog: IEventLog
    out: { [key: string]: string }
  }[] = [
    {
      eventLog: {
        type: "nibiru.perp.v1.PositionChangedEvent",
        attributes: [
          { key: "bad_debt", value: "{denom:unusd,amount:0}" },
          { key: "block_height", value: "47774" },
          { key: "block_time_ms", value: "1666761164478" },
          { key: "exchanged_position_size", value: "0.000499999999999995" },
          { key: "funding_payment", value: "0.000000000000000000" },
          { key: "liquidation_penalty", value: "0.000000000000000000" },
          { key: "margin", value: "{denom:unusd,amount:10}" },
          { key: "mark_price", value: "20000.000000000400000000" },
          { key: "pair", value: "ubtc:unusd" },
          { key: "position_notional", value: "10.000000000000000000" },
          { key: "position_size", value: "0.000499999999999995" },
          { key: "realized_pnl", value: "0.000000000000000000" },
          {
            key: "trader_address",
            value: "nibi1zaavvzxez0elundtn32qnk9lkm8kmcsz44g7xl",
          },
          { key: "transaction_fee", value: "{denom:unusd,amount:0}" },
          { key: "unrealized_pnl_after", value: "0.000000000000000000" },
        ],
      },
      out: {
        bad_debt: "{denom:unusd,amount:0}",
        block_height: "47774",
        block_time_ms: "1666761164478",
        exchanged_position_size: "0.000499999999999995",
        funding_payment: "0.000000000000000000",
        liquidation_penalty: "0.000000000000000000",
        margin: "{denom:unusd,amount:10}",
        mark_price: "20000.000000000400000000",
        pair: "ubtc:unusd",
        position_notional: "10.000000000000000000",
        position_size: "0.000499999999999995",
        realized_pnl: "0.000000000000000000",
        trader_address: "nibi1zaavvzxez0elundtn32qnk9lkm8kmcsz44g7xl",
        transaction_fee: "{denom:unusd,amount:0}",
        unrealized_pnl_after: "0.000000000000000000",
      },
    },
  ]

  testCases.forEach((tc) => {
    expect(event2KeyValue(tc.eventLog)).toEqual(tc.out)
  })
})
