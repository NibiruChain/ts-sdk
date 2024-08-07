import { QueryClient } from "@cosmjs/stargate"
import * as query from "../../protojs/nibiru/devgas/v1/tx"
import { setupDevgasMsgExtension } from "."

describe("setupDevgasMsgExtension", () => {
  const mockBaseQueryClient = {} as QueryClient

  jest.spyOn(query, "MsgClientImpl").mockReturnValue({
    RegisterFeeShare: jest.fn().mockResolvedValue({ test: "Test" }),
    UpdateFeeShare: jest.fn().mockResolvedValue({
      test: "Test",
    }),
    CancelFeeShare: jest.fn().mockResolvedValue({
      test: "Test",
    }),
    UpdateParams: jest.fn().mockResolvedValue({
      test: "Test",
    }),
  } as unknown as query.MsgClientImpl)

  test("should setup extension correctly", () => {
    const extension = setupDevgasMsgExtension(mockBaseQueryClient)

    expect(extension).toBeDefined()
    expect(extension.registerFeeShare).toBeInstanceOf(Function)
    expect(extension.updateFeeShare).toBeInstanceOf(Function)
    expect(extension.cancelFeeShare).toBeInstanceOf(Function)
    expect(extension.updateParams).toBeInstanceOf(Function)
  })

  describe("registerFeeShare", () => {
    test("should call MsgRegisterFeeShare and return the response", async () => {
      const msgRegisterFeeShare = jest
        .spyOn(query.MsgRegisterFeeShare, "fromPartial")
        .mockReturnValue({} as query.MsgRegisterFeeShare)

      const extension = setupDevgasMsgExtension(mockBaseQueryClient)
      const result = await extension.registerFeeShare({
        contractAddress: "",
        deployerAddress: "",
        withdrawerAddress: "",
      })
      expect(msgRegisterFeeShare).toHaveBeenCalledWith({
        contractAddress: "",
        deployerAddress: "",
        withdrawerAddress: "",
      })
      expect(result).toEqual({ test: "Test" })
    })
  })

  describe("updateFeeShare", () => {
    test("should call MsgRegisterFeeShare and return the response", async () => {
      const msgUpdateFeeShare = jest
        .spyOn(query.MsgUpdateFeeShare, "fromPartial")
        .mockReturnValue({} as query.MsgUpdateFeeShare)

      const extension = setupDevgasMsgExtension(mockBaseQueryClient)
      const result = await extension.updateFeeShare({
        contractAddress: "",
        deployerAddress: "",
        withdrawerAddress: "",
      })
      expect(msgUpdateFeeShare).toHaveBeenCalledWith({
        contractAddress: "",
        deployerAddress: "",
        withdrawerAddress: "",
      })
      expect(result).toEqual({ test: "Test" })
    })
  })

  describe("cancelFeeShare", () => {
    test("should call MsgRegisterFeeShare and return the response", async () => {
      const msgCancelFeeShare = jest
        .spyOn(query.MsgCancelFeeShare, "fromPartial")
        .mockReturnValue({} as query.MsgCancelFeeShare)

      const extension = setupDevgasMsgExtension(mockBaseQueryClient)
      const result = await extension.cancelFeeShare({
        contractAddress: "",
        deployerAddress: "",
      })
      expect(msgCancelFeeShare).toHaveBeenCalledWith({
        contractAddress: "",
        deployerAddress: "",
      })
      expect(result).toEqual({ test: "Test" })
    })
  })

  describe("updateParams", () => {
    test("should call MsgRegisterFeeShare and return the response", async () => {
      const msgUpdateParams = jest
        .spyOn(query.MsgUpdateParams, "fromPartial")
        .mockReturnValue({} as query.MsgUpdateParams)

      const extension = setupDevgasMsgExtension(mockBaseQueryClient)
      const result = await extension.updateParams({
        authority: "",
        params: {
          enableFeeShare: true,
          developerShares: "",
          allowedDenoms: [""],
        },
      })
      expect(msgUpdateParams).toHaveBeenCalledWith({
        authority: "",
        params: {
          enableFeeShare: true,
          developerShares: "",
          allowedDenoms: [""],
        },
      })
      expect(result).toEqual({ test: "Test" })
    })
  })
})
