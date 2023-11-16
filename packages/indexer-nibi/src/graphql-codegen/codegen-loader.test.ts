import { GraphQLSchema } from "graphql"

const loader = require("./codegen-loader")

describe("codegen-loader tests", () => {
  jest.setTimeout(30000)
  test("codegen-loader", async () => {
    const testResult = await loader()
    expect(testResult).toBeInstanceOf(GraphQLSchema)
  })
})
