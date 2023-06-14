/* global BigInt */

import fs from "fs"
import path from "path"
import { StableSwap, bigIntExponentiation } from "../stableswap"

describe("stableswap tests", () => {
  test("stabletests", () => {
    const csv = fs
      .readFileSync(path.resolve(__dirname, path.join("mocks", "stabletests.csv")))
      .toString()
    const rl = csv.substring(0, csv.length - 1).split("\n")
    rl.forEach((line) => {
      const regex = /"(\[[^"]+\])",(\d+),(\d+),(\d+),(\d+(\.\d+)?),(\d+(\.\d+)?)/
      const match = line.match(regex)
      if (!match) {
        throw new Error("Invalid line format")
      }

      const balances = JSON.parse(match[1]) as bigint[]
      const amplification = parseFloat(match[2])
      const send = parseFloat(match[3])
      const recv = parseFloat(match[4])
      const dx = BigInt(match[5])
      const expectedDy = BigInt(match[7])

      const curveModel = new StableSwap(
        BigInt(amplification),
        balances,
        Array(balances.length).fill(bigIntExponentiation(BigInt(10), BigInt(18))),
        BigInt(0),
      )

      const dy = curveModel.exchange(send, recv, dx)
      expect(Math.abs(Number(dy - expectedDy))).toBeLessThanOrEqual(1)
    })
  })
})

describe("power", () => {
  interface TestCase {
    base: bigint
    exponent: bigint
    out: bigint
  }

  const testCases: TestCase[] = [
    {
      base: BigInt(0),
      exponent: BigInt(0),
      out: BigInt(1),
    },
    {
      base: BigInt(1),
      exponent: BigInt(0),
      out: BigInt(1),
    },
    {
      base: BigInt(-10),
      exponent: BigInt(0),
      out: BigInt(1),
    },
    {
      base: BigInt(0),
      exponent: BigInt(1),
      out: BigInt(0),
    },
    {
      base: BigInt(0),
      exponent: BigInt(-10),
      out: BigInt(1),
    },
    {
      base: BigInt(-10),
      exponent: BigInt(-10),
      out: BigInt(1),
    },
    {
      base: BigInt(-10),
      exponent: BigInt(10),
      out: BigInt(10000000000),
    },
    {
      base: BigInt(10),
      exponent: BigInt(-10),
      out: BigInt(1),
    },
    {
      base: BigInt(10),
      exponent: BigInt(100),
      out: BigInt(
        "10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      ),
    },
  ]

  test.each(testCases)("%o", (tc) => {
    const out = bigIntExponentiation(tc.base, tc.exponent)
    expect(out).toEqual(tc.out)
  })
})
