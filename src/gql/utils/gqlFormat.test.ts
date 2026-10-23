import { fetch } from "cross-fetch"
import {
  arg,
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  objToGql,
  queryBatchHandler,
} from "./consts"

jest.mock("cross-fetch", () => ({
  fetch: jest.fn(),
}))

const fetchMock = fetch as jest.Mock

describe("gql query formatting", () => {
  beforeEach(() => {
    fetchMock.mockReset()
    fetchMock.mockResolvedValue({
      json: async () => ({ data: { communityPool: [] } }),
    })
  })

  test("arg formats scalars, objects, and quoted strings", () => {
    expect(arg("limit", 10)).toBe("limit: 10")
    expect(arg("active", false)).toBe("active: false")
    expect(arg("name", "nibi", true)).toBe("name: nibi")
    expect(arg("domainName", "cam.nibi", false)).toBe('domainName: "cam.nibi"')
    expect(arg("filter", { id: 1 })).toBe(`filter: {
    id:1
  }`)
  })

  test("objToGql stringifies arrays and walks nested objects", () => {
    expect(objToGql({ tags: ["a", "b"], nested: { ok: true } })).toBe(`{
    tags:["a","b"], nested:{
    ok:true
  }
  }`)
  })

  test("convertObjectToPropertiesString walks objects, arrays, and scalars", () => {
    const properties = convertObjectToPropertiesString({
      label: true,
      empty: null,
      nested: { id: true },
      items: [{ name: true }],
    })

    expect(properties).toContain("label")
    expect(properties).toContain("empty")
    expect(properties).toContain("nested")
    expect(properties).toContain("id")
    expect(properties).toContain("items")
    expect(properties).toContain("name")
  })

  test("gqlQuery omits empty argument lists and quotes domain names", () => {
    expect(gqlQuery("featureFlags", {}, "gov", true)).not.toContain("(")

    const withArgs = gqlQuery(
      "users",
      {
        where: { address: "nibi1abc" },
        limit: 2,
        domainName: "cam.nibi",
      },
      "address"
    )

    expect(withArgs.startsWith("{")).toBe(true)
    expect(withArgs).toContain("where:")
    expect(withArgs).toContain("address:")
    expect(withArgs).toContain("limit: 2")
    expect(withArgs).toContain('domainName: "cam.nibi"')
  })

  test("doGqlQuery posts the document and merges headers", async () => {
    const result = await doGqlQuery<{ communityPool: unknown[] }>(
      "{ communityPool { denom } }",
      "http://gql.test/query",
      { Authorization: "Bearer token" }
    )

    expect(result).toEqual({ communityPool: [] })
    expect(fetchMock).toHaveBeenCalledWith("http://gql.test/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer token",
      },
      body: JSON.stringify({ query: "{ communityPool { denom } }" }),
    })
  })

  test("queryBatchHandler joins documents into one request", async () => {
    await queryBatchHandler(
      ["communityPool { denom }", "featureFlags { gov }"],
      "http://gql.test/query"
    )

    const body = JSON.parse(fetchMock.mock.calls[0][1].body as string) as {
      query: string
    }
    expect(body.query).toContain("communityPool { denom }")
    expect(body.query).toContain("featureFlags { gov }")
  })
})
