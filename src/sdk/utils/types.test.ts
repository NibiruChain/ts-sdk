import { assert } from "."

describe("types", () => {
  test("assert", () => {
    const result = assert(true)
    expect(result).toEqual(true)
  })
})
