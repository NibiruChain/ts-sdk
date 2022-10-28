import {
  SigningStargateClient,
  DeliverTxResponse,
  assertIsDeliverTxSuccess,
} from "@cosmjs/stargate"
import {
  Chain,
  Coin,
  CoinMap,
  isRestEndptLive,
  isRestEndptValid,
  newCoin,
  newCoinMapFromCoins,
  newCoins,
  queryChainIdWithRest,
  Testnet,
  useFaucet,
  WalletHD,
  assert,
} from "./chain"
import { newRandomWallet, newSignerFromMnemonic } from "./tx"
import { ISdk, newSdk } from "./sdk"
import { initQueryCmd, waitForBlockHeight, waitForNextBlock } from "./query/query"
import { Msg } from "./msg"

describe("chain connections", () => {
  const chain: Chain = Testnet

  test("testnet rpc", async () => {
    const sgClient = await SigningStargateClient.connect(chain.endptTm)
    const blockHeight = await sgClient.getHeight()
    expect(blockHeight).toBeDefined()
    expect(blockHeight).toBeGreaterThanOrEqual(0)
  })
  test("testnet lcd/rest", async () => {
    const [chainId, err] = await queryChainIdWithRest(chain)
    expect(chainId).toBeDefined()
    expect(chainId).toEqual(chain.chainId)
    expect(err).toBeUndefined()
  })
  test("testnet lcd/rest endpoint validation functions", async () => {
    await expect(isRestEndptLive(chain)).resolves.toBeTruthy()
    await expect(isRestEndptValid(chain)).resolves.toBeTruthy()
  })
  test("inactive chain validation cases", async () => {
    const inactiveChain: Chain = {
      endptTm: "",
      endptRest: "",
      chainId: "chain-id",
      chainName: "inactive-chain",
      feeDenom: "unibi",
    }
    const [chainId, err] = await queryChainIdWithRest(inactiveChain)
    expect(chainId).toBeUndefined()
    expect(err).toBeDefined()
    await expect(isRestEndptLive(inactiveChain)).resolves.toBeFalsy()
    await expect(isRestEndptValid(inactiveChain)).resolves.toBeFalsy()
  })
})

test("faucet utility works", async () => {
  const setupFaucetTest = async (): Promise<{
    toAddr: string
    blockHeight: number
    walletSdk: ISdk
  }> => {
    const wallet: WalletHD = await newRandomWallet()
    const [{ address: toAddr }] = await wallet.getAccounts()
    const walletSdk = await newSdk(Testnet, wallet)
    const valMnemonic = process.env.VALIDATOR_MNEMONIC
    expect(valMnemonic).toBeDefined()
    const signer = await newSignerFromMnemonic(valMnemonic!)
    const sdk = await newSdk(Testnet, signer)
    const [{ address: fromAddr }] = await signer.getAccounts()
    const tokens = newCoins(5, "unibi")
    const gasUsed = await sdk.tx.client.simulate(
      /* signerAddress */ fromAddr,
      /* messages */ [Msg.bank.Send(fromAddr, toAddr, tokens)],
      /* memo */ "example memo", // undefined,
    )
    expect(gasUsed).toBeGreaterThan(0)
    const gasLimit = gasUsed * 1.25
    const txResp: DeliverTxResponse = await sdk.tx
      .withFee(gasLimit)
      .sendTokens(toAddr, tokens)
    expect(txResp).not.toBeNull()
    assertIsDeliverTxSuccess(txResp)
    return { toAddr, blockHeight: txResp.height, walletSdk }
  }

  const {
    toAddr: address,
    blockHeight: setupBlockHeight,
    walletSdk,
  } = await setupFaucetTest()

  const chain = Testnet
  await waitForBlockHeight({ chain, height: setupBlockHeight + 1 })
  const queryCmd = await initQueryCmd(chain)
  await waitForNextBlock(chain)
  const balancesStart = newCoinMapFromCoins(
    await queryCmd.client.bank.allBalances(address),
  )
  if (balancesStart.unusd === undefined) {
    balancesStart.unusd = 0
  }
  if (balancesStart.unibi === undefined) {
    balancesStart.unibi = 0
  }
  await useFaucet(address)
  await waitForNextBlock(chain)
  await waitForNextBlock(chain)
  await waitForNextBlock(chain)

  const balances = newCoinMapFromCoins(await queryCmd.client.bank.allBalances(address))
  // Expect to receive 10 NIBI and 100_000 NUSD

  if (balances.unusd === undefined) {
    balances.unusd = 0
  }
  if (balances.unibi === undefined) {
    balances.unibi = 0
  }
  console.log(balances, balancesStart)
  expect(balances.unusd - balancesStart.unusd).toEqual(100_000 * 1_000_000)
  expect(balances.unibi - balancesStart.unibi).toEqual(10 * 1_000_000)

  // cleanup
  const cleanupResp: DeliverTxResponse = await walletSdk.tx.signAndBroadcast(
    Msg.bank.Send(
      address,
      "nibi10gm4kys9yyrlqpvj05vqvjwvje87gln8nsm8wa",
      newCoins(100_000 * 1_000_000, "unusd"),
    ),
    Msg.bank.Send(
      address,
      "nibi10gm4kys9yyrlqpvj05vqvjwvje87gln8nsm8wa",
      newCoins(9.9 * 1_000_000, "unibi"),
    ),
  )
  expect(cleanupResp).not.toBeNull()
  console.info("cleanupResp (txHash): %s", cleanupResp.rawLog)
  assertIsDeliverTxSuccess(cleanupResp)
}, 50_000) // 50 seconds

describe("chain/types", () => {
  const coinsIn: Coin[] = [
    newCoin(10, "unusd"),
    newCoin(50, "unibi"),
    { amount: "42.42", denom: "uatom" },
  ]
  test("coin map fns", () => {
    const coins: CoinMap = newCoinMapFromCoins(coinsIn)
    expect(coins).toHaveProperty("unusd", 10)
    expect(coins).toHaveProperty("unibi", 50)
    expect(coins).toHaveProperty("uatom", 42)
  })
})

test("custom assert fn", () => {
  expect(() => assert(false)).toThrow()
  const err = "useful error message"
  expect(() => assert(false, err)).toThrow(err)
})
