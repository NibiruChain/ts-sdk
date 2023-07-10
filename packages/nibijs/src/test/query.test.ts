import { Block, coins } from "@cosmjs/stargate"
import Long from "long"
import fs from "fs"
import * as cf from "cross-fetch"
import { NibiruQueryClient } from "../query"
import {
  TEST_CHAIN,
  TEST_ADDRESS,
  validateBlock,
  validateBlockFromJsonRpc,
  TEST_MNEMONIC,
  assertExpectedError,
} from "./helpers"
import { newSignerFromMnemonic } from "../tx/signer"
import { NibiruSigningClient } from "../tx/signingClient"

declare global {
  interface Window {
    fetch: typeof cf.fetch
  }
}

window.fetch = cf.fetch

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
    const resp = await window.fetch(`${TEST_CHAIN.endptTm}/block`)
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
    const { params: moduleParams } =
      await queryClient.nibiruExtensions.oracle.params()
    expect(moduleParams).toBeDefined()
    expect(moduleParams!.whitelist.length).toBeGreaterThan(0)
  })

  test("query exchange rates", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const exhangeRateMap =
      await queryClient.nibiruExtensions.oracle.exchangeRates()
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
      const currentEpochResp =
        await queryClient.nibiruExtensions.epochs.currentEpoch({
          identifier: epochId,
        })
      expect(Long.isLong(currentEpochResp.currentEpoch)).toBeTruthy()
    },
    timeoutMs
  )
})

describe("x/staking module queries", () => {
  test("query bonded validators", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const infoResp = await queryClient.nibiruExtensions.staking.validators(
      "BOND_STATUS_BONDED"
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

describe("ibc module queries", () => {
  test("all channels", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const resp = await queryClient.nibiruExtensions.ibc.channel.allChannels()
    const { channels } = resp
    expect(channels).toBeDefined()
    const properties: string[] = [
      "state",
      "ordering",
      "connectionHops",
      "version",
      "portId",
      "channelId",
      "counterparty",
    ]
    channels.forEach((channel) => {
      properties.forEach((prop) => {
        expect(channel).toHaveProperty(prop)
      })
    })
  })
  test("all connections", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const resp =
      await queryClient.nibiruExtensions.ibc.connection.allConnections()
    const { connections } = resp
    expect(connections).toBeDefined()
    const properties: string[] = [
      "id",
      "clientId",
      "versions",
      "state",
      "delayPeriod",
      "counterparty",
    ]
    connections.forEach((connection) => {
      properties.forEach((prop) => {
        expect(connection).toHaveProperty(prop)
      })
    })
  })
  test("clients params", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const resp = await queryClient.nibiruExtensions.ibc.client.params()
    const { params } = resp
    expect(params).toBeDefined()
    const properties: string[] = ["allowedClients"]
    properties.forEach((prop) => {
      expect(params).toHaveProperty(prop)
    })
  })
  test("transfer params", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const resp = await queryClient.nibiruExtensions.ibc.transfer.params()
    const { params } = resp
    expect(params).toBeDefined()
    const properties: string[] = ["sendEnabled", "receiveEnabled"]
    properties.forEach((prop) => {
      expect(params).toHaveProperty(prop)
    })
  })
  test("verified channel", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const channel =
      await queryClient.nibiruExtensions.ibc.verified.channel.channel(
        "transfer",
        "channel-0"
      )
    const properties: string[] = [
      "state",
      "ordering",
      "counterparty",
      "connectionHops",
      "version",
    ]
    if (channel) {
      properties.forEach((prop) => {
        expect(channel).toHaveProperty(prop)
      })
    }
  })
})

describe("wasm", () => {
  let codeId: number = 0
  let contractAddress: string = ""

  test("deploy contract", async () => {
    // Load wasm binary
    const wasmBinary = fs.readFileSync("./packages/nibijs/wasm/cw20_base.wasm")
    // Deploy cw20 contract
    const signer = await newSignerFromMnemonic(TEST_MNEMONIC)
    const signingClient = await NibiruSigningClient.connectWithSigner(
      TEST_CHAIN.endptTm,
      signer
    )
    const [{ address: sender }] = await signer.getAccounts()
    const fee = {
      amount: coins(55_000, "unibi"),
      gas: "2200000",
    }

    const assertHappyPath = async () => {
      const uploadRes = await signingClient.wasmClient.upload(
        sender,
        wasmBinary,
        fee
      )
      codeId = uploadRes.codeId

      const initRes = await signingClient.wasmClient.instantiate(
        sender,
        codeId,
        {
          name: "Custom CW20 Token",
          symbol: "CWXX",
          decimals: 6,
          initial_balances: [],
        },
        "CW20",
        "auto"
      )
      contractAddress = initRes.contractAddress

      const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)

      testGetCode(queryClient)
      testGetAllContractState(queryClient, contractAddress)
    }

    try {
      await assertHappyPath()
    } catch (error) {
      const okErrors: string[] = ["account sequence mismatch"]
      assertExpectedError(error, okErrors)
    }
  })

  const testGetCode = async (queryClient: NibiruQueryClient) => {
    const respGetCode = await queryClient.nibiruExtensions.wasm.getCode(codeId)
    const { data } = respGetCode
    expect(data).toBeDefined()
  }

  const testGetAllContractState = async (
    queryClient: NibiruQueryClient,
    contractAddress: string
  ) => {
    const respContractState =
      await queryClient.nibiruExtensions.wasm.getAllContractState(
        contractAddress
      )
    const { models } = respContractState
    expect(models).toBeDefined()
  }
})

describe("auth", () => {
  test("account", async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)
    const res = await queryClient.nibiruExtensions.auth.account(TEST_ADDRESS)
    expect(res).toBeDefined()
  })
})
