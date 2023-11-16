import { GraphQLSchema } from "graphql"

const loader = require("./codegen-loader")

describe("codegen-loader tests", () => {
  test("codegen-loader", async () => {
    const testResult = await loader()
    expect(testResult).toBeInstanceOf(GraphQLSchema)
  })
})
