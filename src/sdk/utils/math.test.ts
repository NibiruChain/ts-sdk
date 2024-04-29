import BigNumber from "bignumber.js"
import { calculateEpochMintProvision, computeAPR, polynomial } from "./math"
import { Params } from "src/protojs/nibiru/inflation/v1/genesis"
import Long from "long"

const params = {
  inflationEnabled: true,
  polynomialFactors: [
    "-0.000147085524000000",
    "0.074291982762000000",
    "-18.867415611180000000",
    "3128.641926954698000000",
    "-334834.740631598223000000",
    "17827464.906540066004000000",
  ],
  inflationDistribution: {
    stakingRewards: "0.281250000000000000",
    communityPool: "0.354825000000000000",
    strategicReserves: "0.363925000000000000",
  },
  epochsPerPeriod: new Long(30),
  periodsPerYear: new Long(12),
  maxPeriod: new Long(96),
  hasInflationStarted: true,
}

describe("polynomial", () => {
  interface TestCase {
    name: string
    in: { factors: string[]; x: BigNumber }
    expected: BigNumber
    shouldFail?: boolean
  }

  const tests: TestCase[] = [
    {
      name: "zero",
      in: { factors: ["0"], x: BigNumber(0) },
      expected: BigNumber("0"),
    },
    {
      name: "real",
      in: {
        factors: params.polynomialFactors,
        x: BigNumber(0),
      },
      expected: BigNumber("17827464.906540066004000000"),
    },
    {
      name: "noarray",
      in: {
        factors: [],
        x: BigNumber(0),
      },
      expected: BigNumber("0"),
    },
  ]

  test.each(tests)("%o", (tt) => {
    let failed = false
    try {
      const res = polynomial(tt.in.factors, tt.in.x)
      expect(res.eq(tt.expected)).toBe(true)
    } catch (e) {
      if (!tt.shouldFail) {
        console.error(`Test ${tt.name} failed with error: ${e}`)
      }
      failed = true
    }
    expect(failed).toBe(!!tt.shouldFail)
  })
})

describe("calculateEpochMintProvision", () => {
  interface TestCase {
    name: string
    in: { params: Params; period: BigNumber }
    expected: BigNumber
    shouldFail?: boolean
  }

  const tests: TestCase[] = [
    {
      name: "real",
      in: {
        params,
        period: BigNumber(0),
      },
      expected: BigNumber("17827464.906540066004"),
    },
    {
      name: "zero",
      in: {
        params: {
          inflationEnabled: true,
          polynomialFactors: [],
          inflationDistribution: {
            stakingRewards: "0",
            communityPool: "0",
            strategicReserves: "0",
          },
          epochsPerPeriod: new Long(0),
          periodsPerYear: new Long(0),
          maxPeriod: new Long(0),
          hasInflationStarted: true,
        },
        period: BigNumber(0),
      },
      expected: BigNumber(0),
    },
  ]

  test.each(tests)("%o", (tt) => {
    let failed = false
    try {
      const res = calculateEpochMintProvision(tt.in.params, tt.in.period)
      expect(res.eq(tt.expected)).toBe(true)
    } catch (e) {
      if (!tt.shouldFail) {
        console.error(`Test ${tt.name} failed with error: ${e}`)
      }
      failed = true
    }
    expect(failed).toBe(!!tt.shouldFail)
  })
})

describe("computeAPR", () => {
  interface TestCase {
    name: string
    in: {
      myStake: number
      totalStaked: number
      params: Params
      period: number
    }
    expected: number
    shouldFail?: boolean
  }

  const tests: TestCase[] = [
    {
      name: "real",
      in: {
        myStake: 10,
        totalStaked: 10_000_000,
        params,
        period: 0,
      },
      expected: 6.016763389193883,
    },
    {
      name: "NaN",
      in: {
        myStake: 0,
        totalStaked: 0,
        params,
        period: 0,
      },
      expected: NaN,
    },
  ]

  test.each(tests)("%o", (tt) => {
    let failed = false
    try {
      const res = computeAPR(
        tt.in.myStake,
        tt.in.totalStaked,
        tt.in.params,
        tt.in.period
      )
      expect(res).toEqual(tt.expected)
    } catch (e) {
      if (!tt.shouldFail) {
        console.error(`Test ${tt.name} failed with error: ${e}`)
      }
      failed = true
    }
    expect(failed).toBe(!!tt.shouldFail)
  })
})
