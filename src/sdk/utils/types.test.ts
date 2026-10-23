import { coin } from "@cosmjs/proto-signing"
import { assert, newCoinMapFromCoins } from "."

describe("types", () => {
  test("assert", () => {
    const result = assert(true)
    expect(result).toEqual(true)
  })

  test("assert reports a failed condition", () => {
    expect(assert(false)).toEqual("AssertionError")
    expect(assert(false, "missing denom")).toEqual(
      "AssertionError: missing denom"
    )
  })

  test("newCoinMapFromCoins maps denoms and ignores an empty list", () => {
    expect(newCoinMapFromCoins([])).toEqual({})

    const coins = newCoinMapFromCoins([
      coin(10, "unibi"),
      { amount: "42.42", denom: "uatom" },
    ])
    expect(coins.unibi.toString()).toBe("10")
    expect(coins.uatom.toString()).toBe("42.42")
  })
})
