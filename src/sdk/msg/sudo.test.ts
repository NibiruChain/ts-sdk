import { QueryClient } from "@cosmjs/stargate"
import * as query from "../../protojs/nibiru/sudo/v1/tx"
import { setupSudoMsgExtension } from "."

describe("setupSudoMsgExtension", () => {
  const mockBaseQueryClient = {} as QueryClient

  jest.spyOn(query, "MsgClientImpl").mockReturnValue({
    EditSudoers: jest.fn().mockResolvedValue({ test: "Test" }),
    ChangeRoot: jest.fn().mockResolvedValue({
      test: "Test",
    }),
    EditZeroGasActors: jest.fn().mockResolvedValue({
      test: "Test",
    }),
  } as unknown as query.MsgClientImpl)

  test("should setup extension correctly", () => {
    const extension = setupSudoMsgExtension(mockBaseQueryClient)

    expect(extension).toBeDefined()
    expect(extension.editSudoers).toBeInstanceOf(Function)
    expect(extension.changeRoot).toBeInstanceOf(Function)
    expect(extension.editZeroGasActors).toBeInstanceOf(Function)
  })

  describe("editSudoers", () => {
    test("should call MsgEditSudoers and return the response", async () => {
      const msgEditSudoers = jest
        .spyOn(query.MsgEditSudoers, "fromPartial")
        .mockReturnValue({} as query.MsgEditSudoers)

      const extension = setupSudoMsgExtension(mockBaseQueryClient)
      const result = await extension.editSudoers({
        sender: "",
        action: "",
        contracts: [""],
      })
      expect(msgEditSudoers).toHaveBeenCalledWith({
        sender: "",
        action: "",
        contracts: [""],
      })
      expect(result).toEqual({ test: "Test" })
    })
  })

  describe("changeRoot", () => {
    test("should call MsgChangeRoot and return the response", async () => {
      const msgChangeRoot = jest
        .spyOn(query.MsgChangeRoot, "fromPartial")
        .mockReturnValue({} as query.MsgChangeRoot)

      const extension = setupSudoMsgExtension(mockBaseQueryClient)
      const result = await extension.changeRoot({
        sender: "",
        newRoot: "",
      })
      expect(msgChangeRoot).toHaveBeenCalledWith({
        sender: "",
        newRoot: "",
      })
      expect(result).toEqual({ test: "Test" })
    })
  })

  describe("editZeroGasActors", () => {
    test("should call MsgEditZeroGasActors and return the response", async () => {
      const msgEditZeroGasActors = jest
        .spyOn(query.MsgEditZeroGasActors, "fromPartial")
        .mockReturnValue({} as query.MsgEditZeroGasActors)

      const extension = setupSudoMsgExtension(mockBaseQueryClient)
      const result = await extension.editZeroGasActors({
        sender: "",
        actors: {
          senders: [""],
          contracts: [""],
          alwaysZeroGasContracts: [""],
        },
      })
      expect(msgEditZeroGasActors).toHaveBeenCalledWith({
        sender: "",
        actors: {
          senders: [""],
          contracts: [""],
          alwaysZeroGasContracts: [""],
        },
      })
      expect(result).toEqual({ test: "Test" })
    })
  })
})
