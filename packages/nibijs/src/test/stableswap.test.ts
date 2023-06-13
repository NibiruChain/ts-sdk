/* global BigInt */

import fs from "fs"
import path from "path"
import { StableSwap } from "../stableswap"

test("stableswap tests", () => {
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
      Array(balances.length).fill(BigInt(10) ** BigInt(18)),
      BigInt(0),
    )

    const dy = curveModel.exchange(send, recv, dx)
    expect(Math.abs(Number(dy - expectedDy))).toBeLessThanOrEqual(1)
  })
})
