import { QueryClient } from "@cosmjs/stargate"
import * as query from "../../protojs/eth/evm/v1/tx"
import { setupEthMsgExtension } from "."
import Long from "long"

describe("setupEthMsgExtension", () => {
  const mockBaseQueryClient = {} as QueryClient

  jest.spyOn(query, "MsgClientImpl").mockReturnValue({
    EthereumTx: jest.fn().mockResolvedValue({ test: "Test" }),
    UpdateParams: jest.fn().mockResolvedValue({
      test: "Test",
    }),
  } as unknown as query.MsgClientImpl)

  test("should setup extension correctly", () => {
    const extension = setupEthMsgExtension(mockBaseQueryClient)

    expect(extension).toBeDefined()
    expect(extension.ethereumTx).toBeInstanceOf(Function)
    expect(extension.updateParams).toBeInstanceOf(Function)
  })

  describe("ethereumTx", () => {
    test("should call MsgEthereumTx and return the response", async () => {
      const msgEthereumTx = jest
        .spyOn(query.MsgEthereumTx, "fromPartial")
        .mockReturnValue({} as query.MsgEthereumTx)

      const extension = setupEthMsgExtension(mockBaseQueryClient)
      const result = await extension.ethereumTx({
        data: { typeUrl: "", value: new Uint8Array() },
        size: 0,
        hash: "",
        from: "",
      })
      expect(msgEthereumTx).toHaveBeenCalledWith({
        data: { typeUrl: "", value: new Uint8Array() },
        size: 0,
        hash: "",
        from: "",
      })
      expect(result).toEqual({ test: "Test" })
    })
  })

  describe("updateParams", () => {
    test("should call MsgRegisterFeeShare and return the response", async () => {
      const msgUpdateParams = jest
        .spyOn(query.MsgUpdateParams, "fromPartial")
        .mockReturnValue({} as query.MsgUpdateParams)

      const extension = setupEthMsgExtension(mockBaseQueryClient)
      const result = await extension.updateParams({
        authority: "",
        params: {
          evmDenom: "",
          createFuntokenFee: "",
          enableCreate: true,
          enableCall: true,
          extraEips: [new Long(0)],
          allowUnprotectedTxs: true,
          activePrecompiles: [""],
          evmChannels: [""],
        },
      })
      expect(msgUpdateParams).toHaveBeenCalledWith({
        authority: "",
        params: {
          evmDenom: "",
          createFuntokenFee: "",
          enableCreate: true,
          enableCall: true,
          extraEips: [new Long(0)],
          allowUnprotectedTxs: true,
          activePrecompiles: [""],
          evmChannels: [""],
        },
      })
      expect(result).toEqual({ test: "Test" })
    })
  })
})
