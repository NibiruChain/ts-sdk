import { computeStakingEmissionPerPeriod } from "./math"
import { Params } from "src/protojs/nibiru/inflation/v1/genesis"
import Long from "long"
import { QueryEpochMintProvisionResponse } from "src/protojs/nibiru/inflation/v1/query"

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

describe("computeStakingEmissionPerPeriod", () => {
  interface TestCase {
    name: string
    in: {
      myStake: number
      totalStaked: number
      params: Params
      epochMintProvision: QueryEpochMintProvisionResponse
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
        epochMintProvision: QueryEpochMintProvisionResponse.fromPartial({
          epochMintProvision: { amount: "17827464.906540066004" },
        }),
      },
      expected: 5.013974504964393,
    },
    {
      name: "real - no stake",
      in: {
        myStake: 0,
        totalStaked: 10_000_000,
        params,
        epochMintProvision: QueryEpochMintProvisionResponse.fromPartial({
          epochMintProvision: { amount: "17827464.906540066004" },
        }),
      },
      expected: 0,
    },
    {
      name: "NaN",
      in: {
        myStake: 0,
        totalStaked: 0,
        params,
        epochMintProvision: QueryEpochMintProvisionResponse.fromPartial({
          epochMintProvision: { amount: "0" },
        }),
      },
      expected: NaN,
    },
  ]

  test.each(tests)("%o", (tt) => {
    let failed = false
    try {
      const res = computeStakingEmissionPerPeriod(
        tt.in.params,
        tt.in.epochMintProvision,
        tt.in.totalStaked,
        tt.in.myStake
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
