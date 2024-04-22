import { AccountData, parseCoins } from "@cosmjs/proto-signing"
import { assertIsDeliverTxSuccess } from "@cosmjs/stargate"
import {
  NibiruQuerier,
  Localnet,
  TEST_MNEMONIC,
  newRandomWallet,
  newSignerFromMnemonic,
  NibiruTxClient,
} from ".."

describe("txClient", () => {
  test("connects", async () => {
    const txClient = await NibiruTxClient.connect(Localnet.endptTm)
    expect(txClient).toBeTruthy()
  })
})

describe("nibid tx bank send", () => {
  // TODO: Refactor for concurrency
  test.skip("send tokens from the devnet genesis validator to a random account", async () => {
    const signer = await newSignerFromMnemonic(TEST_MNEMONIC)
    const [{ address: fromAddr }]: readonly AccountData[] =
      await signer.getAccounts()
    expect(fromAddr).toBeDefined()

    const txClient = await NibiruTxClient.connectWithSigner(
      Localnet.endptTm,
      signer
    )

    const toWallet = await newRandomWallet()
    const [{ address: toAddr }] = await toWallet.getAccounts()

    const resp = await txClient.sendTokens(
      fromAddr,
      toAddr,
      parseCoins("1unibi"),
      400000
    )
    assertIsDeliverTxSuccess(resp)

    const querier = await NibiruQuerier.connect(Localnet.endptTm)
    const txQuery = await querier.getTxByHash(resp.transactionHash)
    expect(txQuery.isOk()).toBeTruthy()
  })
})
