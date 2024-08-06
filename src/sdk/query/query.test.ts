import fs from "fs"
import { Block, coins, QueryClient } from "@cosmjs/stargate"
import Long from "long"
import { fetch } from "cross-fetch"
import {
  NibiruQuerier,
  Localnet,
  TEST_ADDRESS,
  assertValidBlock,
  assertValidBlockFromJsonRpc,
  TEST_MNEMONIC,
  assertExpectedError,
  newSignerFromMnemonic,
  NibiruTxClient,
  setupNibiruExtension,
  setupDevgasExtension,
  setupDevgasMsgExtension,
  setupEpochsExtension,
  setupEthExtension,
  setupEthMsgExtension,
  setupInflationExtension,
  setupInflationMsgExtension,
  setupOracleExtension,
  setupOracleMsgExtension,
  setupSudoExtension,
  setupSudoMsgExtension,
  setupTokenFactoryExtension,
  setupTokenFactoryMsgExtension,
} from ".."

interface BlockResp {
  result: { block: { [key: string]: unknown } }
}

describe("connections", () => {
  test("query command is able to fetch latest block", async () => {
    const querier = await NibiruQuerier.connect(Localnet.endptTm)
    const blockResp: Block = await querier.getBlock()
    assertValidBlock(blockResp, Localnet)
  })

  test("tendermint rpc url returns block with GET", async () => {
    const resp = await fetch(`${Localnet.endptTm}/block`)
    const respJson = (await resp.json()) as BlockResp
    expect(respJson.result).toHaveProperty("block")
    const blockJson = respJson.result.block
    assertValidBlockFromJsonRpc(blockJson)
  })
})

describe("x/bank queries", () => {
  test("query bank balance", async () => {
    const querier = await NibiruQuerier.connect(Localnet.endptTm)
    const balances = await querier.getAllBalances(TEST_ADDRESS)

    expect(balances.length).toBeGreaterThan(0)
    const amount: number = +balances[0].amount
    expect(amount).toBeGreaterThan(0)
    expect(balances[0].denom).not.toBe("")

    const balanceDenoms: string[] = balances.map((coin) => coin.denom)
    expect(balanceDenoms).toContain("unibi")
  })
})

describe("x/oracle queries", () => {
  test("query active oracles", async () => {
    const querier = await NibiruQuerier.connect(Localnet.endptTm)
    const { actives } = await querier.nibiruExtensions.query.oracle.actives()
    if (actives.length > 0) {
      const pair = actives[0]
      expect(pair).toContain(":")
    }
  })

  test("query oracle params", async () => {
    const querier = await NibiruQuerier.connect(Localnet.endptTm)
    const { params: moduleParams } =
      await querier.nibiruExtensions.query.oracle.params()
    expect(moduleParams).toBeDefined()
    expect(moduleParams?.whitelist.length).toBeGreaterThan(0)
  })

  test("query exchange rates", async () => {
    const querier = await NibiruQuerier.connect(Localnet.endptTm)
    const exhangeRateMap =
      await querier.nibiruExtensions.query.oracle.exchangeRates()
    if (Object.keys(exhangeRateMap).length > 0) {
      for (const pair in exhangeRateMap.exchangeRates) {
        expect(pair).toBeDefined()
        expect(pair).toEqual(0)
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
      const querier = await NibiruQuerier.connect(Localnet.endptTm)
      const infoResp = await querier.nibiruExtensions.query.epochs.epochsInfos()
      expect(infoResp).toHaveProperty("epochs")
      expect(infoResp.epochs.length).toBeGreaterThan(0)

      const epochId = infoResp.epochs[0].identifier
      const currentEpochResp =
        await querier.nibiruExtensions.query.epochs.currentEpoch({
          identifier: epochId,
        })
      expect(Long.isLong(currentEpochResp.currentEpoch)).toBeTruthy()
    },
    timeoutMs
  )
})

describe("x/staking module queries", () => {
  test("query bonded validators", async () => {
    const querier = await NibiruQuerier.connect(Localnet.endptTm)
    const infoResp = await querier.nibiruExtensions.staking.validators(
      "BOND_STATUS_BONDED"
    )
    expect(infoResp).toHaveProperty("validators")
    expect(infoResp.validators.length).toBeGreaterThan(0)
  })
})

describe("distribution module queries", () => {
  test("distribution params", async () => {
    const querier = await NibiruQuerier.connect(Localnet.endptTm)
    const resp = await querier.nibiruExtensions.distribution.params()
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
    const querier = await NibiruQuerier.connect(Localnet.endptTm)
    const resp = await querier.nibiruExtensions.gov.params("voting")
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
    const querier = await NibiruQuerier.connect(Localnet.endptTm)
    const resp = await querier.nibiruExtensions.ibc.channel.allChannels()
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
    const querier = await NibiruQuerier.connect(Localnet.endptTm)
    const resp = await querier.nibiruExtensions.ibc.connection.allConnections()
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
    const querier = await NibiruQuerier.connect(Localnet.endptTm)
    const resp = await querier.nibiruExtensions.ibc.client.params()
    const { params } = resp
    expect(params).toBeDefined()
    const properties: string[] = ["allowedClients"]
    properties.forEach((prop) => {
      expect(params).toHaveProperty(prop)
    })
  })
  test("transfer params", async () => {
    const querier = await NibiruQuerier.connect(Localnet.endptTm)
    const resp = await querier.nibiruExtensions.ibc.transfer.params()
    const { params } = resp
    expect(params).toBeDefined()
    const properties: string[] = ["sendEnabled", "receiveEnabled"]
    properties.forEach((prop) => {
      expect(params).toHaveProperty(prop)
    })
  })
  test("verified channel", async () => {
    const querier = await NibiruQuerier.connect(Localnet.endptTm)
    const channel = await querier.nibiruExtensions.ibc.verified.channel.channel(
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
  let codeId = 0
  let contractAddress = ""

  test("deploy contract", async () => {
    // Load wasm binary
    const wasmBinary = fs.readFileSync("./src/sdk/wasm/cw20_base.wasm")
    // Deploy cw20 contract
    const signer = await newSignerFromMnemonic(TEST_MNEMONIC)
    const txClient = await NibiruTxClient.connectWithSigner(
      Localnet.endptTm,
      signer
    )
    const [{ address: sender }] = await signer.getAccounts()
    const fee = {
      amount: coins(55_000, "unibi"),
      gas: "2200000",
    }

    const assertHappyPath = async () => {
      const uploadRes = await txClient.wasmClient.upload(
        sender,
        wasmBinary,
        fee
      )
      codeId = uploadRes.codeId

      const initRes = await txClient.wasmClient.instantiate(
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

      const querier = await NibiruQuerier.connect(Localnet.endptTm)

      testGetCode(querier)
      testGetAllContractState(querier, contractAddress)
    }

    try {
      await assertHappyPath()
    } catch (error) {
      console.log(error)
      const okErrors: string[] = ["account sequence mismatch"]
      assertExpectedError(error, okErrors)
    }
  })

  const testGetCode = async (querier: NibiruQuerier) => {
    const respGetCode = await querier.nibiruExtensions.wasm.getCode(codeId)
    const { data } = respGetCode
    expect(data).toBeDefined()
  }

  const testGetAllContractState = async (
    querier: NibiruQuerier,
    contractAddress: string
  ) => {
    const respContractState =
      await querier.nibiruExtensions.wasm.getAllContractState(contractAddress)
    const { models } = respContractState
    expect(models).toBeDefined()
  }
})

describe("auth", () => {
  test("account", async () => {
    const querier = await NibiruQuerier.connect(Localnet.endptTm)
    const res = await querier.nibiruExtensions.auth.account(TEST_ADDRESS)
    expect(res).toBeDefined()
  })
})

describe("NibiruQuerier", () => {
  test("waitForHeight", async () => {
    jest.useFakeTimers()
    const setTimeoutSpy = jest.spyOn(global, "setTimeout")
    const querier = await NibiruQuerier.connect(Localnet.endptTm)

    await querier.waitForHeight((await querier.getHeight()) - 1)

    expect(setTimeoutSpy).not.toHaveBeenCalled()
  })

  // test("waitForNextBlock", async () => {
  //   const setTimeoutSpy = jest.spyOn(global, "setTimeout")
  //   const querier = await NibiruQuerier.connect(Localnet.endptTm)

  //   await querier.waitForNextBlock()

  //   expect(setTimeoutSpy).toHaveBeenCalled()
  // })

  test("getTxByHash - tx doesn't exist", async () => {
    const querier = await NibiruQuerier.connect(Localnet.endptTm)

    const result = await querier.getTxByHash(
      "7A919F2CC9A51B139444F7D8E84A46EEF307E839C6CA914C1A1C594FEF5C1562"
    )

    expect(result.isErr()).toEqual(true)
  })

  test("getTxByHash - wrong hash", async () => {
    const querier = await NibiruQuerier.connect(Localnet.endptTm)

    const result = await querier.getTxByHash("mock")

    expect(result.ok).toEqual(undefined)
  })

  test("getTxByHash", async () => {
    const querier = await NibiruQuerier.connect(Localnet.endptTm)

    const result = await querier.getTxByHashBytes(
      Uint8Array.from([
        193, 113, 231, 87, 170, 14, 237, 180, 87, 3, 220, 115, 58, 146, 22, 42,
        36, 19, 202, 26, 207, 206, 143, 187, 169, 18, 160, 185, 240, 17, 34,
        193,
      ])
    )

    expect(result.isErr()).toEqual(true)
  })

  test("setupNibiruExtension ", async () => {
    const mockBaseQueryClient = {} as QueryClient
    const extension = setupNibiruExtension(mockBaseQueryClient)

    expect(extension.msg).toBeTruthy()
    expect(extension.query).toBeTruthy()
  })
})
