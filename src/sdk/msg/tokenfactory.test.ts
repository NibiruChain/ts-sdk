import { QueryClient } from "@cosmjs/stargate"
import * as query from "../../protojs/nibiru/tokenfactory/v1/tx"
import { setupTokenFactoryMsgExtension } from "."
import Long from "long"

describe("setupEthMsgExtension", () => {
  const mockBaseQueryClient = {} as QueryClient

  jest.spyOn(query, "MsgClientImpl").mockReturnValue({
    CreateDenom: jest.fn().mockResolvedValue({ test: "Test" }),
    ChangeAdmin: jest.fn().mockResolvedValue({
      test: "Test",
    }),
    UpdateModuleParams: jest.fn().mockResolvedValue({
      test: "Test",
    }),
    Mint: jest.fn().mockResolvedValue({
      test: "Test",
    }),
    Burn: jest.fn().mockResolvedValue({
      test: "Test",
    }),
    SetDenomMetadata: jest.fn().mockResolvedValue({
      test: "Test",
    }),
    BurnNative: jest.fn().mockResolvedValue({
      test: "Test",
    }),
  } as unknown as query.MsgClientImpl)

  test("should setup extension correctly", () => {
    const extension = setupTokenFactoryMsgExtension(mockBaseQueryClient)

    expect(extension).toBeDefined()
    expect(extension.createDenom).toBeInstanceOf(Function)
    expect(extension.changeAdmin).toBeInstanceOf(Function)
    expect(extension.updateModuleParams).toBeInstanceOf(Function)
    expect(extension.mint).toBeInstanceOf(Function)
    expect(extension.burn).toBeInstanceOf(Function)
    expect(extension.setDenomMetadata).toBeInstanceOf(Function)
    expect(extension.burnNative).toBeInstanceOf(Function)
  })

  describe("createDenom", () => {
    test("should call MsgCreateDenom and return the response", async () => {
      const msgCreateDenom = jest
        .spyOn(query.MsgCreateDenom, "fromPartial")
        .mockReturnValue({} as query.MsgCreateDenom)

      const extension = setupTokenFactoryMsgExtension(mockBaseQueryClient)
      const result = await extension.createDenom({
        sender: "",
        subdenom: "",
      })
      expect(msgCreateDenom).toHaveBeenCalledWith({
        sender: "",
        subdenom: "",
      })
      expect(result).toEqual({ test: "Test" })
    })
  })

  describe("changeAdmin", () => {
    test("should call MsgChangeAdmin and return the response", async () => {
      const msgChangeAdmin = jest
        .spyOn(query.MsgChangeAdmin, "fromPartial")
        .mockReturnValue({} as query.MsgChangeAdmin)

      const extension = setupTokenFactoryMsgExtension(mockBaseQueryClient)
      const result = await extension.changeAdmin({
        sender: "",
        denom: "",
        newAdmin: "",
      })
      expect(msgChangeAdmin).toHaveBeenCalledWith({
        sender: "",
        denom: "",
        newAdmin: "",
      })
      expect(result).toEqual({ test: "Test" })
    })
  })

  describe("updateModuleParams", () => {
    test("should call MsgUpdateModuleParams and return the response", async () => {
      const msgUpdateModuleParams = jest
        .spyOn(query.MsgUpdateModuleParams, "fromPartial")
        .mockReturnValue({} as query.MsgUpdateModuleParams)

      const extension = setupTokenFactoryMsgExtension(mockBaseQueryClient)
      const result = await extension.updateModuleParams({
        authority: "",
        params: {
          denomCreationGasConsume: new Long(0),
        },
      })
      expect(msgUpdateModuleParams).toHaveBeenCalledWith({
        authority: "",
        params: {
          denomCreationGasConsume: new Long(0),
        },
      })
      expect(result).toEqual({ test: "Test" })
    })
  })

  describe("mint", () => {
    test("should call MsgMint and return the response", async () => {
      const msgMint = jest
        .spyOn(query.MsgMint, "fromPartial")
        .mockReturnValue({} as query.MsgMint)

      const extension = setupTokenFactoryMsgExtension(mockBaseQueryClient)
      const result = await extension.mint({
        sender: "",
        coin: { denom: "", amount: "" },
        mintTo: "",
      })
      expect(msgMint).toHaveBeenCalledWith({
        sender: "",
        coin: { denom: "", amount: "" },
        mintTo: "",
      })
      expect(result).toEqual({ test: "Test" })
    })
  })

  describe("burn", () => {
    test("should call MsgBurn and return the response", async () => {
      const msgBurn = jest
        .spyOn(query.MsgBurn, "fromPartial")
        .mockReturnValue({} as query.MsgBurn)

      const extension = setupTokenFactoryMsgExtension(mockBaseQueryClient)
      const result = await extension.burn({
        sender: "",
        coin: { denom: "", amount: "" },
        burnFrom: "",
      })
      expect(msgBurn).toHaveBeenCalledWith({
        sender: "",
        coin: { denom: "", amount: "" },
        burnFrom: "",
      })
      expect(result).toEqual({ test: "Test" })
    })
  })

  describe("setDenomMetadata", () => {
    test("should call MsgSetDenomMetadata and return the response", async () => {
      const msgSetDenomMetadata = jest
        .spyOn(query.MsgSetDenomMetadata, "fromPartial")
        .mockReturnValue({} as query.MsgSetDenomMetadata)

      const extension = setupTokenFactoryMsgExtension(mockBaseQueryClient)
      const result = await extension.setDenomMetadata({
        sender: "",
        metadata: {
          description: "",
          denomUnits: [{ denom: "", exponent: 0, aliases: [""] }],
          base: "",
          display: "",
          name: "",
          symbol: "",
          uri: "",
          uriHash: "",
        },
      })
      expect(msgSetDenomMetadata).toHaveBeenCalledWith({
        sender: "",
        metadata: {
          description: "",
          denomUnits: [{ denom: "", exponent: 0, aliases: [""] }],
          base: "",
          display: "",
          name: "",
          symbol: "",
          uri: "",
          uriHash: "",
        },
      })
      expect(result).toEqual({ test: "Test" })
    })
  })

  describe("burnNative", () => {
    test("should call MsgBurnNative and return the response", async () => {
      const msgBurnNative = jest
        .spyOn(query.MsgBurnNative, "fromPartial")
        .mockReturnValue({} as query.MsgBurnNative)

      const extension = setupTokenFactoryMsgExtension(mockBaseQueryClient)
      const result = await extension.burnNative({
        sender: "",
        coin: { denom: "", amount: "" },
      })
      expect(msgBurnNative).toHaveBeenCalledWith({
        sender: "",
        coin: { denom: "", amount: "" },
      })
      expect(result).toEqual({ test: "Test" })
    })
  })
})
