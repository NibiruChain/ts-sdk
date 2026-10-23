import { changeQueryName } from "./codegen"

describe("codegen-loader tests", () => {
  test("changeQueryName", () => {
    expect(changeQueryName("query name")).toEqual("GQLQueryName")
    expect(changeQueryName("oracle-prices")).toEqual("GQLOraclePrices")
  })
})
