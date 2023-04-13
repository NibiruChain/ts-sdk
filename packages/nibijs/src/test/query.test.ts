import { Block } from "@cosmjs/stargate"
import fetch from "cross-fetch"
import Long from "long"
import { instanceOfError } from "../chain/error"
import { NibiruQueryClient } from "../query"
import {
  TEST_CHAIN,
  TEST_ADDRESS,
  validateBlock,
  validateBlockFromJsonRpc,
} from "./helpers"

interface BlockResp {
  result: { block: any }
}

describe("connections", () => {
  test("query command is able to fetch latest block", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const blockResp: Block = await queryClient.getBlock()
    validateBlock(blockResp, TEST_CHAIN)
  })

  test("tendermint rpc url returns block with GET", async () => {
    const resp = await fetch(`${TEST_CHAIN.endptTm}/block`)
    const respJson = (await resp.json()) as BlockResp
    expect(respJson.result, `respJson: ${respJson}`).toHaveProperty("block")
    const blockJson = respJson.result.block
    validateBlockFromJsonRpc(blockJson)
  })
})

describe("x/bank queries", () => {
  test("query bank balance", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const balances = await queryClient.getAllBalances(TEST_ADDRESS)

    expect(balances.length).toBeGreaterThan(0)
    const amount: number = +balances[0].amount
    expect(amount).toBeGreaterThan(0)
    expect(balances[0].denom).not.toBe("")

    const balanceDenoms: string[] = balances.map((coin) => coin.denom)
    expect(balanceDenoms).toContain("unibi")
  })
})

describe("x/spot queries", () => {
  test("query spot params", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const { params } = await queryClient.nibiruExtensions.spot.params()
    const fields: string[] = [
      "poolCreationFee",
      "startingPoolNumber",
      "whitelistedAsset",
    ]
    for (const field of fields) {
      expect(params).toHaveProperty(field)
    }
    expect(params?.whitelistedAsset.length).toBeGreaterThan(0)
    expect(params?.whitelistedAsset[0]).not.toBe("")
  })
})

describe("x/vpool queries", () => {
  const timeoutMs = 8_000
  test(
    "query all pools",
    async () => {
      const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
      const queryResp = await queryClient.nibiruExtensions.vpool.allPools()
      expect(queryResp.pools.length).toBeGreaterThan(0)
      expect(queryResp.prices).toHaveLength(queryResp.pools.length)
    },
    timeoutMs,
  )

  test(
    "nibid query vpool prices",
    async () => {
      const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
      const { priceInQuoteDenom: basePrice } =
        await queryClient.nibiruExtensions.vpool.basePrice({
          pair: "ubtc:unusd",
          goLong: true,
          baseAssetAmount: 1_000,
        })
      expect(basePrice.length).toBeGreaterThan(0)
      expect(parseFloat(basePrice)).toBeGreaterThan(0)
    },
    timeoutMs,
  )
})

describe("x/perp queries", () => {
  test("perp params - client.perp.params", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const { params } = await queryClient.nibiruExtensions.perp.params()
    expect(params).not.toBeNull()
    const fields: string[] = [
      "stopped",
      "feePoolFeeRatio",
      "liquidationFeeRatio",
      "partialLiquidationRatio",
      "ecosystemFundFeeRatio",
      "twapLookbackWindow",
    ]
    for (const field of fields) {
      expect(params).toHaveProperty(field)
    }
  })

  test("nibid query perp funding-rates", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)

    const assertExpectedError = (err: unknown) => {
      let errMsg: string
      if (instanceOfError(err)) {
        errMsg = err.message
      } else {
        errMsg = `${err}`
      }
      expect(errMsg.includes("failed to fetch twap index price")).toBeTruthy()
    }

    try {
      const args = { pair: "ubtc:unusd" }
      const premiumFractions = await queryClient.nibiruExtensions.perp.premiumFractions(
        args,
      )
      expect(premiumFractions).not.toBeNull()
    } catch (error) {
      assertExpectedError(error)
    }
  })

  test("nibid query perp metrics", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const { metrics } = await queryClient.nibiruExtensions.perp.metrics({
      pair: "ubtc:unusd",
    })
    expect(metrics).not.toBeNull()
    const metricsAttrs = ["volumeQuote", "volumeBase", "netSize", "pair"]
    metricsAttrs.forEach((attr) => {
      expect(metrics).toHaveProperty(attr)
    })
  })
})

describe("x/oracle queries", () => {
  test("query active oracles", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const { actives } = await queryClient.nibiruExtensions.oracle.actives()
    if (actives.length > 0) {
      const pair = actives[0]
      expect(pair).toContain(":")
    }
  })

  test("query oracle params", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const { params: moduleParams } = await queryClient.nibiruExtensions.oracle.params()
    expect(moduleParams).toBeDefined()
    expect(moduleParams!.whitelist.length).toBeGreaterThan(0)
  })

  test("query exchange rates", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const exhangeRateMap = await queryClient.nibiruExtensions.oracle.exchangeRates()
    if (Object.keys(exhangeRateMap).length > 0) {
      for (const pair in exhangeRateMap) {
        const exchangeRate = exhangeRateMap[pair]
        expect(exchangeRate).toBeDefined()
        expect(exchangeRate).toBeGreaterThan(0)
        break
      }
    }
  })
})

describe("x/epochs queries", () => {
  const timeoutMs = 8_000

  test(
    "query epochs info and current epoch",
    async () => {
      const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
      const infoResp = await queryClient.nibiruExtensions.epochs.epochsInfo()
      expect(infoResp).toHaveProperty("epochs")
      expect(infoResp.epochs.length).toBeGreaterThan(0)

      const epochId = infoResp.epochs[0].identifier
      const currentEpochResp = await queryClient.nibiruExtensions.epochs.currentEpoch({
        identifier: epochId,
      })
      expect(Long.isLong(currentEpochResp.currentEpoch)).toBeTruthy()
    },
    timeoutMs,
  )
})

describe("x/staking module queries", () => {
  test("query bonded validators", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const infoResp = await queryClient.nibiruExtensions.staking.validators(
      "BOND_STATUS_BONDED",
    )
    expect(infoResp).toHaveProperty("validators")
    expect(infoResp.validators.length).toBeGreaterThan(0)
  })
})

describe("distribution module queries", () => {
  test("distribution params", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const resp = await queryClient.nibiruExtensions.distribution.params()
    const { params } = resp
    expect(params).toBeDefined()
    const properties: string[] = [
      "communityTax",
      "baseProposerReward",
      "bonusProposerReward",
      "withdrawAddrEnabled",
    ]
    properties.forEach((prop) => {
      expect(params).toHaveProperty(prop)
    })
  })
})

describe("gov module queries", () => {
  test("gov params", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const resp = await queryClient.nibiruExtensions.gov.params("voting")
    const { votingParams } = resp
    expect(votingParams).toBeDefined()
    const properties: string[] = ["votingPeriod"]
    properties.forEach((prop) => {
      expect(votingParams).toHaveProperty(prop)
    })
  })
})

describe("utils module queries", () => {
  test("module accounts", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const resp = await queryClient.nibiruExtensions.utils.moduleAccounts()
    const { accounts } = resp
    expect(accounts).toBeDefined()
    expect(accounts.length).toBeGreaterThan(0)
    const properties: string[] = ["name", "address", "balance"]
    properties.forEach((prop) => {
      expect(accounts[0]).toHaveProperty(prop)
    })
  })
})
