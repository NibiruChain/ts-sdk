import {
  checkFields,
  queryBatchHandler,
  GqlOutCommunityPool,
  communityPoolQueryString,
  arg,
} from ".."

describe("queryBatchHandler tests", () => {
  test("queryBatchHandler", async () => {
    const resp = await queryBatchHandler<{
      communityPool: GqlOutCommunityPool[]
    }>(
      [communityPoolQueryString({}, true)],
      "https://hm-graphql.testnet-1.nibiru.fi/query"
    )

    expect(resp).toHaveProperty("communityPool")

    if (resp.communityPool?.length) {
      const [communityPool] = resp.communityPool
      const communityPoolFields = ["amount", "denom"]
      checkFields([communityPool], communityPoolFields)
    }
  })

  test("arg", async () => {
    const result = arg("mock", "mock", false)
    expect(result).toEqual(`mock: "mock"`)
  })
})
