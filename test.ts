import { EncodeObject } from "@cosmjs/proto-signing"
import {
  NibiruTxClient,
  NibiruQuerier,
  Chain,
  Testnet,
  newRandomWallet,
  newSignerFromMnemonic,
  MsgCreateDenom,
  MsgCreateDenomResponse,
} from "./src"

const main = async () => {
  const chain: Chain = Testnet() // Permanent testnet

  // ---------------- NibiruTxClient ----------------
  // let signer = await newRandomWallet() // Signer: randomly generated
  const signer = await newSignerFromMnemonic(
    "business wrong poverty again define paper recipe trade tissue left lawn result whale fiber farm version split network cereal swallow path finger payment risk"
  ) // Signer: in-practice
  const txClient = await NibiruTxClient.connectWithSigner(chain.endptTm, signer)

  const account = await signer.getAccounts() // from cosmos
  const signerAddress = account[0].address
  console.log(signerAddress)

  const tx = await txClient.nibiruExtensions.msg.tokenFactoryMsg.createDenom({
    sender: signerAddress,
    subdenom: "urex", // replace with your subdenom
  })
  console.log(tx)

  // const fee = "auto" // You can specify the fee if needed

  // const msgs: EncodeObject[] = [
  //   {
  //     typeUrl: "/nibiru.tokenfactory.v1.MsgCreateDenom",
  //     value: MsgCreateDenom.fromPartial({
  //       sender: signerAddress,
  //       subdenom: "urexx", // replace with your subdenom
  //     }),
  //   },
  // ]

  // const tx = await txClient.signAndBroadcast(signerAddress, msgs, fee)

  // console.log(tx)

  // const rtx = MsgCreateDenomResponse.decode(tx.msgResponses[0].value)
  // console.log(rtx)
}

main()
