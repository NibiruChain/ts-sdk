import {
  checkFields,
  queryBatchHandler,
  GqlOutCommunityPool,
  communityPoolQueryString,
  GqlOutDelegations,
  delegationsQueryString,
} from ".."

describe("queryBatchHandler tests", () => {
  test("queryBatchHandler", async () => {
    const resp = await queryBatchHandler<{
      communityPool: GqlOutCommunityPool[]
      delegations: GqlOutDelegations[]
    }>(
      [
        communityPoolQueryString({}, true),
        delegationsQueryString(
          {
            limit: 1,
          },
          true
        ),
      ],
      "https://hm-graphql.testnet-1.nibiru.fi/query"
    )

    expect(resp).toHaveProperty("communityPool")
    expect(resp).toHaveProperty("delegations")

    if (resp.communityPool?.length) {
      const [communityPool] = resp.communityPool
      const communityPoolFields = ["amount", "denom"]
      checkFields([communityPool], communityPoolFields)
    }

    if (resp.delegations?.length) {
      const [delegation] = resp.delegations
      const delegationFields = ["amount", "delegator", "validator"]
      checkFields([delegation], delegationFields)
    }
  })
})
