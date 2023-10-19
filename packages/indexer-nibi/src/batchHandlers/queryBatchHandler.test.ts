import { queryBatchHandler } from "./queryBatchHandler"
import { communityPoolQueryString } from "../query/communityPool"
import { delegationsQueryString } from "../query"

const checkFields = (objects: any[], fields: any[]) => {
  objects.forEach((obj: any) => {
    fields.forEach((field: string | any[]) => {
      expect(obj).toHaveProperty(field)
    })
  })
}

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
