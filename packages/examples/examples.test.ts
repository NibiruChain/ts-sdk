/* eslint-disable no-promise-executor-return */
import {
  // mnemonic: For the account that will sign the transaction
  NibiruSigningClient,
  NibiruQueryClient,
  newSignerFromMnemonic,
  Msg,
  TxMessage,
  toSdkInt,
  parseEventLogs,
  newRandomWallet,
  Localnet,
  Chain,
} from "@nibiruchain/nibijs"
import { StdFee, coin } from "@cosmjs/amino"
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing"
import { TEST_ADDRESS, TEST_MNEMONIC } from "@nibiruchain/nibijs/dist/testutil"
import esMain from "es-main"

// -----------------------------------------------
// ------------------- HELPERS -------------------
// -----------------------------------------------

/** CHAIN: Nibiru Network for all usage examples */
const CHAIN: Chain = Localnet

// Using singletons for more consisency on runs with the live network.
let _SIGNER: DirectSecp256k1HdWallet | null
let _SIGNING_CLIENT: NibiruSigningClient | null

const getSigner = async (): Promise<DirectSecp256k1HdWallet> => {
  if (!_SIGNER) {
    // For the account that will sign the transaction
    _SIGNER = await newSignerFromMnemonic(TEST_MNEMONIC)
  }
  return _SIGNER
}

const getSigningClient = async (): Promise<NibiruSigningClient> => {
  if (!_SIGNING_CLIENT) {
    const signer = await getSigner()
    _SIGNING_CLIENT = await NibiruSigningClient.connectWithSigner(
      CHAIN.endptTm,
      signer
    )
  }
  return _SIGNING_CLIENT
}

/** hereDoc: Creates an approximate "here-document", a formatted version of
 * the text including newlines but removing the whitespace prefix from each one.
 *
 * Modeled after the behavior of MakeNowJust/heredoc:
 * @see https://github.com/MakeNowJust/heredoc
 *
 * Here documents are a concept from bash scripting.
 * @see https://tldp.org/LDP/abs/html/here-docs.html
 * */
const hereDoc = (text: string): string =>
  text
    // Split the string into lines
    .split("\n")
    // Remove leading whitespace from each line
    .map((line) => line.replace(/^\s+/, ""))
    // Join the lines back together
    .join("\n")

/** Logs an example-specific success message.
 * @example
 * logExampleName("example 03")
 * */
const logExampleName = (exampleName: string): void => {
  console.log(`✅ Successfully completed "${exampleName}"`)
}

/** sleep: Time out for a given number of milliseconds. */
const sleep = async (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms))

// -----------------------------------------------
// ------------------- EXAMPLES ------------------
// -----------------------------------------------

/** Example: Creating a new wallet */
export const exampleNewWallet = async () => {
  // Create a new Nibiru wallet
  const wallet = await newRandomWallet()
  const [{ address }] = await wallet.getAccounts()

  // Save the mnemonic somewhere to re-use the account
  console.log("mnemonic: ", wallet.mnemonic)
  console.log("address: ", address)
}

/** Example: Query client */
export const exampleQueries = async () => {
  const queryClient = await NibiruQueryClient.connect(CHAIN.endptTm)

  // Query a block
  const blockHeight = 1
  const block = await queryClient.getBlock(blockHeight)
  console.log("block: %o", block)

  // Query all markets
  const allMarkets = await queryClient.nibiruExtensions.perp.markets()
  console.log("allMarkets: %o", allMarkets)

  // You can use your address instead here.
  const address = TEST_ADDRESS
  const allBalances = await queryClient.getAllBalances(address)
  console.log("allBalances: %o", allBalances)
}

/** Example: Broadcasting Tx messages */
const exampleTxMsgs = async () => {
  await sleep(420) // For account sequence issues
  // Replace with real one
  const mnemonic: string = TEST_MNEMONIC
  const signer = await newSignerFromMnemonic(mnemonic!)
  signer.getAccounts()
  const signingClient = await NibiruSigningClient.connectWithSigner(
    CHAIN.endptTm,
    signer
  )
  const [{ address: fromAddr }] = await signer.getAccounts()

  // ------------------------------------
  // Construct tx msgs
  // ------------------------------------
  const pair = "ubtc:unusd"
  const msgs: TxMessage[] = [
    Msg.perp.openPosition({
      sender: fromAddr,
      pair,
      quoteAssetAmount: 10,
      leverage: 1,
      goLong: true,
      baseAssetAmountLimit: 0,
    }),
    Msg.perp.addMargin({
      sender: fromAddr,
      pair,
      margin: coin("20", "unusd"),
    }),
    Msg.perp.removeMargin({
      sender: fromAddr,
      pair,
      margin: coin("5", "unusd"),
    }),
    // final margin value of 10 (open) + 20 (add) - 5 (remove) = 25
  ]

  // ------------------------------------
  // Broadcast tx
  // ------------------------------------
  const txFee: StdFee = {
    // amount: Desired fees to be spent for gas. The transaction doesn't work
    // if this value is set too low or uses the wrong coin denominations.
    amount: [coin(100_000, "unibi")],
    // gas: Gas limit. The maximum amount of gas units that can be used for the
    // tx signature to still be considered valid.
    gas: toSdkInt(1_000_000),
  }
  const txResp = await signingClient.signAndBroadcast(fromAddr, msgs, txFee)
  const { transactionHash, gasUsed, gasWanted } = txResp
  const events = parseEventLogs(txResp)
  console.log("txResp (partial): %o", { transactionHash, gasUsed, gasWanted })
  console.log("events: %o", events)
}

/** Example: Send Funds */
const exampleSendFunds = async () => {
  console.log(
    hereDoc(`Running example: ${exampleSendFunds.name}...
    This example broadcasts a transaction to send 5 unibi from the test account
    (${TEST_ADDRESS}). The funds are sent to a random address.`)
  )
  await sleep(420) // For account sequence issues

  // toAddr: bech32 address (prefixed with nibi) of the receiving party
  const [{ address: randAddr }] = await (await newRandomWallet()).getAccounts()
  const toAddr: string = process.argv[2] ?? randAddr

  const signer = await getSigner()
  const signingClient = await getSigningClient()
  const [{ address: fromAddr }] = await signer.getAccounts()

  const txResp = await signingClient.sendTokens(
    fromAddr,
    toAddr,
    [{ denom: "unibi", amount: toSdkInt(5) }],
    "auto"
  )
  const { transactionHash, gasUsed, gasWanted, code } = txResp
  const events = parseEventLogs(txResp)
  console.log("txResp (partial): %o", {
    transactionHash,
    gasUsed,
    gasWanted,
    code,
  })
  console.log("events: %o", events)
}

// -----------------------------------------------
// -------------------  MAIN  --------------------
// -----------------------------------------------

// Runs as a script if the file is called directly.
// eslint-disable-next-line no-undef
let module: NodeModule | undefined
console.info("INFO %o", {
  "esMain(import.meta)": esMain(import.meta),
  module,
})
if ((module && require.main === module) || esMain(import.meta)) {
  const examples = [
    exampleNewWallet,
    exampleQueries,
    exampleSendFunds,
    exampleTxMsgs,
  ]
  examples.forEach((exampleFunc) =>
    exampleFunc()
      .then(() => {
        logExampleName(exampleFunc.name)
      })
      .catch((err) => {
        if (!`${err}`.includes("account sequence mismatch")) {
          throw err
        }
        logExampleName(exampleFunc.name)
      })
  )
}
