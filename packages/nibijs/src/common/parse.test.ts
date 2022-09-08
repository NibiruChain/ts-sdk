import { toSdkDec, fromSdkDec } from "./parse"

interface TestCases {
  name: string
  in: string
  expected: string
  shouldFail?: boolean
}

describe("toSdkDec - float to sdk.Dec conversion", () => {
  const tests: TestCases[] = [
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

  it.each(tests)("%o", (tt) => {
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

  it.each(tests)("%o", (tt) => {
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
