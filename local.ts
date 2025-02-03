import { EncodeObject } from "@cosmjs/proto-signing"
import { StdFee } from "@cosmjs/stargate"
import { NibiruTxClient, Chain, newSignerFromMnemonic, Localnet } from "./src"
import {
  MsgConvertCoinToEvm,
  MsgCreateFunToken,
} from "./src/protojs/eth/evm/v1/tx"

const DEFAULT_FEE: StdFee = {
  gas: "900000000",
  amount: [{ amount: "12000000", denom: "unibi" }],
}

const executeTransaction = async (
  signerAddress: string,
  msgs: EncodeObject[],
  txClient: NibiruTxClient,
  create?: boolean
) => {
  try {
    const tx = await txClient.signAndBroadcast(signerAddress, msgs, DEFAULT_FEE)
    console.log(
      "Transaction Result:",
      create ? tx.events?.[12]?.attributes?.[1].value : tx.rawLog
    )
  } catch (error) {
    console.error("Transaction failed:", error)
  }
}

const createFunToken = async (
  signerAddress: string,
  denom: string,
  txClient: NibiruTxClient
) => {
  const msg: EncodeObject = {
    typeUrl: "/eth.evm.v1.MsgCreateFunToken",
    value: MsgCreateFunToken.fromPartial({
      sender: signerAddress,
      fromBankDenom: denom,
    }),
  }
  await executeTransaction(signerAddress, [msg], txClient, true)
}

const convertCoinToEvm = async (
  signerAddress: string,
  denom: string,
  txClient: NibiruTxClient
) => {
  const msg: EncodeObject = {
    typeUrl: "/eth.evm.v1.MsgConvertCoinToEvm",
    value: MsgConvertCoinToEvm.fromPartial({
      toEthAddr: "0x59005464D636ECd97Da8F15adFD36B16808f66F0",
      sender: signerAddress,
      bankCoin: { denom, amount: "1000" },
    }),
  }
  await executeTransaction(signerAddress, [msg], txClient)
}

const queryFunToken = async (denom: string, txClient: NibiruTxClient) => {
  try {
    const response = await txClient.nibiruExtensions.query.eth.funTokenMapping({
      token: denom,
    })
    console.log("Fun Token:", response.funToken)
  } catch (error) {
    console.error("Query failed:", error)
  }
}

const main = async () => {
  const chain: Chain = Localnet
  const mnemonic =
    "guard cream sadness conduct invite crumble clock pudding hole grit liar hotel maid produce squeeze return argue turtle know drive eight casino maze host"

  const signer = await newSignerFromMnemonic(mnemonic)
  const txClient = await NibiruTxClient.connectWithSigner(chain.endptTm, signer)
  const signerAddress = (await signer.getAccounts())[0].address

  const denom = "tf/nibi1zaavvzxez0elundtn32qnk9lkm8kmcsz44g7xl/urexx"

  // await createFunToken(signerAddress, denom, txClient)
  await queryFunToken(denom, txClient)
  await convertCoinToEvm(signerAddress, denom, txClient)
}

main()
