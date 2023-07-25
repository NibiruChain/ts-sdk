import { HeartMonitor } from "./heart-monitor"
import { cleanResponse, gqlEndptFromTmRpc } from "./gql"

const heartMonitor = new HeartMonitor({
  endptTm: "https://rpc.itn-1.nibiru.fi",
})

describe("Heart Monitor constructor", () => {
  interface TestCase {
    name: string
    in?: string | { endptTm: string } | undefined
    expected: string
  }

  const { defaultGqlEndpt } = new HeartMonitor()

  const tests: TestCase[] = [
    { name: "undefined", in: undefined, expected: defaultGqlEndpt },
    { name: "valid string", in: "abc123", expected: "abc123" },
    {
      name: "chain",
      in: { endptTm: "https://rpc.itn-1.nibiru.fi" },
      expected: "https://hm-graphql.itn-1.nibiru.fi/graphql",
    },
    {
      name: "empty chain string",
      in: { endptTm: "" },
      expected: defaultGqlEndpt,
    },
    {
      name: "undefined as string",
      in: { endptTm: undefined as unknown as string },
      expected: defaultGqlEndpt,
    },
  ]

  test.each(tests)("$name", (tc) => {
    const hm = new HeartMonitor(tc.in)
    expect(hm.gqlEndpt).toBe(tc.expected)
  })
})

describe("gqlEndptFromTmRpc", () => {
  interface TestCase {
    in: string
    want: string | null
  }

  const tests: TestCase[] = [
    {
      in: "https://rpc.devnet-2.nibiru.fi",
      want: "https://hm-graphql.devnet-2.nibiru.fi/graphql",
    },
    {
      in: "----rpc.itn-1.-----",
      want: "https://hm-graphql.itn-1.nibiru.fi/graphql",
    },
    { in: "", want: null },
    { in: "rpctestnet-nodots", want: null },
    {
      in: "rpc.testnet-nodots",
      want: "https://hm-graphql.testnet-nodots.nibiru.fi/graphql",
    },
  ]

  test.each(tests)("%s", (tc: TestCase) => {
    const got = gqlEndptFromTmRpc(tc.in)
    expect(got).toBe(tc.want)
  })
})

test("delegations", async () => {
  const resp = await heartMonitor.delegations({
    where: {
      delegator_address: "",
    },
  })
  expect(resp).toHaveProperty("delegations")

  if (resp.delegations!.length > 0) {
    const [delegation] = resp.delegations!
    const fields = [
      "block",
      "blockTs",
      "validatorAddress",
      "delegatorAddress",
      "shares",
      "balance",
    ]
    fields.forEach((field: string) => {
      expect(delegation).toHaveProperty(field)
    })
  }
})

test("unbondings", async () => {
  const resp = await heartMonitor.unbondings({
    where: {
      delegator_address: "",
    },
    limit: 3,
  })
  expect(resp).toHaveProperty("unbondings")

  if (resp.unbondings!.length > 0) {
    const [unbonding] = resp.unbondings!
    const fields = [
      "block",
      "blockTs",
      "validatorAddress",
      "delegatorAddress",
      "creationHeight",
      "completionTime",
      "initialBalance",
      "balance",
    ]
    fields.forEach((field: string) => {
      expect(unbonding).toHaveProperty(field)
    })
  }
})

test("validators", async () => {
  const resp = await heartMonitor.validators({
    where: {
      operator_address: "",
    },
    limit: 3,
  })
  expect(resp).toHaveProperty("validators")

  if (resp.validators!.length > 0) {
    const [validator] = resp.validators!
    const fields = [
      "block",
      "blockTs",
      "operatorAddress",
      "jailed",
      "statusBonded",
      "tokens",
      "delegatorShares",
      "description",
      "unbondingHeight",
      "unbondingTime",
      "commissionRates",
      "commissionUpdateTime",
    ]
    fields.forEach((field: string) => {
      expect(validator).toHaveProperty(field)
    })
  }
})

// test("perpLeaderboard", async () => {
//   const resp = await heartMonitor.perpLeaderboard()
//   expect(resp).toHaveProperty("perpLeaderboard")

//   if (resp.perpLeaderboard!.length > 0) {
//     const [config] = resp.perpLeaderboard!
//     const fields = ["traderAddress", "percentagePnl", "rawPnl", "inputMargin"]
//     fields.forEach((field: string) => {
//       expect(config).toHaveProperty(field)
//     })
//   }
// })

describe("gql cleanResponse", () => {
  test("should return the response data if rawResp is ok and contains data", async () => {
    const rawResp = {
      ok: true,
      json: () => Promise.resolve({ data: "response data" }),
    } as Response
    const result = await cleanResponse(rawResp)
    expect(result).toEqual("response data")
  })

  test("should return the response JSON if rawResp is ok and does not contain data", async () => {
    const rawResp = {
      ok: true,
      json: () => Promise.resolve({ key: "value" }),
    } as Response
    const result = await cleanResponse(rawResp)
    expect(result).toEqual({ key: "value" })
  })

  test("should throw an error if rawResp is not ok", async () => {
    const error = { error: "Error message" }
    const rawResp = {
      ok: false,
      json: () => Promise.resolve(error),
    } as Response
    await expect(cleanResponse(rawResp)).rejects.toThrowError(`${error}`)
  })

  test("should throw an error if unable to parse JSON", async () => {
    const rawResp = {
      ok: true,
      json: () => Promise.reject(new Error("invalid json")),
    } as Response
    await expect(cleanResponse(rawResp)).rejects.toThrowError(``)
  })
})
