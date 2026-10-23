import { customAminoConverters } from "./customamino"

describe("customAminoConverters", () => {
  const typeUrl = "/eth.evm.v1.MsgConvertCoinToEvm"
  const proto = {
    toEthAddr: "0x0000000000000000000000000000000000000800",
    sender: "nibi1zaavvzxez0elundtn32qnk9lkm8kmcsz44g7xl",
    bankCoin: { denom: "unibi", amount: "1000" },
  }
  const amino = {
    to_eth_addr: proto.toEthAddr,
    sender: proto.sender,
    bank_coin: { denom: "unibi", amount: "1000" },
  }

  test("converts MsgConvertCoinToEvm to and from Amino JSON", () => {
    const converter = customAminoConverters[typeUrl]
    expect(converter.aminoType).toBe("eth/MsgConvertCoinToEvm")
    expect(converter.toAmino(proto)).toEqual(amino)
    expect(converter.fromAmino(amino)).toEqual(proto)
  })
})
