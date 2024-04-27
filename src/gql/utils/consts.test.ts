import {
  checkFields,
  queryBatchHandler,
  GqlOutCommunityPool,
  communityPoolQueryString,
  arg,
  GQLDelegation,
  GQLStakingQueryString,
} from ".."

describe("queryBatchHandler tests", () => {
  test("queryBatchHandler", async () => {
    const resp = await queryBatchHandler<{
      communityPool: GqlOutCommunityPool[]
      staking: {
        delegations: GQLDelegation[]
      }
    }>(
      [
        communityPoolQueryString({}, true),
        GQLStakingQueryString(
          { delegations: { limit: 1 } },
          {
            delegations: {
              delegator: { address: "" },
              amount: 0,
            },
          }
        ),
      ],
      "https://hm-graphql.testnet-1.nibiru.fi/query"
    )

    expect(resp).toHaveProperty("communityPool")
    expect(resp.staking).toHaveProperty("delegations")

    if (resp.communityPool?.length) {
      const [communityPool] = resp.communityPool
      const communityPoolFields = ["amount", "denom"]
      checkFields([communityPool], communityPoolFields)
    }
    if (resp.staking.delegations?.length) {
      const [delegation] = resp.staking.delegations
      checkFields([delegation], ["amount", "delegator"])
    }
  })

  test("arg", async () => {
    const result = arg("mock", "mock", false)
    expect(result).toEqual(`mock: "mock"`)
  })
})
