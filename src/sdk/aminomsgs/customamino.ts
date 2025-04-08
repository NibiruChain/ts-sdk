import { AminoConverter } from "@cosmjs/stargate"

/**
 * MsgConvertCoinToEvm defines the structure of the Protobuf message
 * used to convert a Cosmos coin to its EVM representation.
 */
interface MsgConvertCoinToEvm {
  /** The target Ethereum address that will receive the converted tokens */
  toEthAddr: string

  /** The Cosmos sender address initiating the conversion */
  sender: string

  /** The bank coin object containing the denom and amount to convert */
  bankCoin: {
    denom: string
    amount: string
  }
}

/**
 * Amino-encoded version of MsgConvertCoinToEvm.
 * Uses snake_case field names as required by the Amino standard.
 */
interface AminoMsgConvertCoinToEvm {
  /** The Ethereum address in snake_case format */
  to_eth_addr: string

  /** The Cosmos sender address */
  sender: string

  /** The coin to be converted, in Amino format */
  bank_coin: {
    denom: string
    amount: string
  }
}

/**
 * AminoConverters used by the AminoTypes class to serialize/deserialize
 * MsgConvertCoinToEvm messages to/from Amino-compatible JSON format.
 */
export const customAminoConverters: Record<string, AminoConverter> = {
  "/eth.evm.v1.MsgConvertCoinToEvm": {
    /**
     * Identifier for this Amino message type.
     * This must match the type used by legacy clients or signing tools.
     */
    aminoType: "eth/MsgConvertCoinToEvm",

    /**
     * Converts a Protobuf MsgConvertCoinToEvm into its Amino-encoded representation.
     * @param msg - The Protobuf message object
     * @returns The Amino-encoded JSON representation
     */
    toAmino: (msg: MsgConvertCoinToEvm): AminoMsgConvertCoinToEvm => ({
      to_eth_addr: msg.toEthAddr,
      sender: msg.sender,
      bank_coin: {
        denom: msg.bankCoin.denom,
        amount: msg.bankCoin.amount,
      },
    }),

    /**
     * Converts an Amino-encoded MsgConvertCoinToEvm into its Protobuf representation.
     * @param amino - The Amino JSON object
     * @returns The Protobuf-style message object
     */
    fromAmino: (amino: AminoMsgConvertCoinToEvm): MsgConvertCoinToEvm => ({
      toEthAddr: amino.to_eth_addr,
      sender: amino.sender,
      bankCoin: {
        denom: amino.bank_coin.denom,
        amount: amino.bank_coin.amount,
      },
    }),
  },
}
