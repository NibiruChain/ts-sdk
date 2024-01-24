import { GraphQLSchema } from "graphql"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const loader = require("./codegen-loader")

describe("codegen-loader tests", () => {
  test("codegen-loader", async () => {
    const testResult = await loader()
    expect(testResult).toBeInstanceOf(GraphQLSchema)
  })
})
