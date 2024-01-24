import fs from "fs"
import path from "path"
import { BigNumber } from "bignumber.js"
import { StableSwap } from "."

describe("stableswap tests", () => {
  test("stabletests", () => {
    const csv = fs
      .readFileSync(
        path.resolve(__dirname, path.join("mocks", "stabletests.csv"))
      )
      .toString()
    const rl = csv.substring(0, csv.length - 1).split("\n")
    rl.forEach((line) => {
      const regex =
        /"(\[[^"]+\])",(\d+),(\d+),(\d+),(\d+(\.\d+)?),(\d+(\.\d+)?)/
      const match = line.match(regex)
      if (!match) {
        console.error(new Error("Invalid line format"))
        return
      }

      const balances = JSON.parse(match[1]) as BigNumber[]
      const amplification = BigNumber(match[2])
      const send = parseFloat(match[3])
      const recv = parseFloat(match[4])
      const dx = BigNumber(match[5])
      const expectedDy = BigNumber(match[7])

      const curveModel = new StableSwap(amplification, balances, BigNumber(0))

      const dy = curveModel.exchange(send, recv, dx)
      expect(
        dy.minus(expectedDy).abs().isLessThanOrEqualTo(BigNumber(1))
      ).toEqual(true)
    })
  })

  test("Stableswap failure", () => {
    const balances = [BigNumber(0), BigNumber(0)]
    const amplification = BigNumber(0)
    const curveModel = new StableSwap(amplification, balances, BigNumber(0))

    expect(curveModel.exchange(0, 1, BigNumber(0))).toEqual(BigNumber(0))
  })
})
