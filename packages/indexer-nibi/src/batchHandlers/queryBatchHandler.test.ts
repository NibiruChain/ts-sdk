import { queryBatchHandler } from "./queryBatchHandler"
import { communityPoolQueryString } from "../query/communityPool"
import { delegationsQueryString } from "../query"

describe("queryBatchHandler tests", () => {
  test("queryBatchHandler", async () => {
    const resp = await queryBatchHandler(
      [
        communityPoolQueryString({}, true),
        delegationsQueryString(
          {
            limit: 1,
          },
          true
        ),
      ],
      "https://hm-graphql.itn-3.nibiru.fi/query"
    )

    expect(resp).toHaveProperty("communityPool")
    expect(resp).toHaveProperty("delegations")

    if ((resp.communityPool?.length ?? 0) > 0) {
      const [communityPool] = resp.communityPool ?? []
      const fields = ["amount", "denom"]
      fields.forEach((field: string) => {
        expect(communityPool).toHaveProperty(field)
      })
    }

    if ((resp.delegations?.length ?? 0) > 0) {
      const [delegation] = resp.delegations ?? []
      const fields = ["amount", "delegator", "validator"]
      fields.forEach((field: string) => {
        expect(delegation).toHaveProperty(field)
      })
    }
  })
})
