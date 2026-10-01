import { AccountData, parseCoins } from "@cosmjs/proto-signing"
import { assertIsDeliverTxSuccess, DeliverTxResponse } from "@cosmjs/stargate"
import {
  NibiruQuerier,
  Localnet,
  TEST_MNEMONIC,
  newRandomWallet,
  newSignerFromMnemonic,
  NibiruTxClient,
  ERR,
  parseError,
} from ".."

describe("txClient", () => {
  test("connects", async () => {
    const txClient = await NibiruTxClient.connect(Localnet.endptTm)
    expect(txClient).toBeTruthy()
  })
})

describe("nibid tx bank send", () => {
  test("send tokens from the devnet genesis validator to a random account", async () => {
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

    // Parallel Jest workers share the genesis validator account. Retry when
    // another test advances the sequence between sign and broadcast.
    const resp = await sendTokensWithSequenceRetry(
      txClient,
      fromAddr,
      toAddr,
      parseCoins("1unibi"),
      400000
    )

    const querier = await NibiruQuerier.connect(Localnet.endptTm)
    const txQuery = await querier.getTxByHash(resp.transactionHash)
    expect(txQuery.isOk()).toBeTruthy()
  })
})

async function sendTokensWithSequenceRetry(
  txClient: NibiruTxClient,
  fromAddr: string,
  toAddr: string,
  amount: ReturnType<typeof parseCoins>,
  fee: number,
  maxAttempts = 5
): Promise<DeliverTxResponse> {
  let lastError: unknown
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const resp = await txClient.sendTokens(fromAddr, toAddr, amount, fee)
      assertIsDeliverTxSuccess(resp)
      return resp
    } catch (error) {
      lastError = error
      const isSequenceMismatch = parseError(error).message.includes(
        ERR.sequence
      )
      if (!isSequenceMismatch || attempt === maxAttempts) {
        throw error
      }
      await txClient.waitForNextBlock()
    }
  }
  throw lastError
}
