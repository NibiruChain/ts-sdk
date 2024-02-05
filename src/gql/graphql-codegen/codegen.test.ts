import { changeQueryName } from "./codegen"

describe("codegen-loader tests", () => {
  test("changeQueryName", () => {
    const testResult = changeQueryName("query name")
    expect(testResult).toEqual("GQLQueryName")
  })
})
