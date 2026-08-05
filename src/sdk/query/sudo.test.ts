import { QueryClient } from "@cosmjs/stargate"
import * as query from "../../protojs/nibiru/sudo/v1/query"
import { setupSudoExtension } from "."

describe("setupSudoExtension", () => {
  const mockBaseQueryClient = {} as QueryClient

  jest.spyOn(query, "QueryClientImpl").mockReturnValue({
    QuerySudoers: jest
      .fn()
      .mockResolvedValue({ sudoers: ["Test Sudoer 1", "Test Sudoer 2"] }),
    QueryZeroGasActors: jest.fn().mockResolvedValue({
      actors: {
        senders: ["sender"],
        contracts: ["contract"],
        alwaysZeroGasContracts: ["always"],
      },
    }),
  } as unknown as query.QueryClientImpl)

  test("should setup sudo extension correctly", () => {
    const extension = setupSudoExtension(mockBaseQueryClient)

    expect(extension).toBeDefined()
    expect(extension.querySudoers).toBeInstanceOf(Function)
    expect(extension.queryZeroGasActors).toBeInstanceOf(Function)
  })

  describe("sudo.querySudoers", () => {
    test("should call QuerySudoersRequest and return the response", async () => {
      const querySudoersRequest = jest
        .spyOn(query.QuerySudoersRequest, "fromPartial")
        .mockReturnValue({} as query.QuerySudoersRequest)

      const extension = setupSudoExtension(mockBaseQueryClient)
      const result = await extension.querySudoers()

      expect(querySudoersRequest).toHaveBeenCalledWith({})
      expect(result).toEqual({ sudoers: ["Test Sudoer 1", "Test Sudoer 2"] })
    })
  })

  describe("sudo.queryZeroGasActors", () => {
    test("should call QueryZeroGasActorsRequest and return the response", async () => {
      const queryZeroGasActorsRequest = jest
        .spyOn(query.QueryZeroGasActorsRequest, "fromPartial")
        .mockReturnValue({} as query.QueryZeroGasActorsRequest)

      const extension = setupSudoExtension(mockBaseQueryClient)
      const result = await extension.queryZeroGasActors()

      expect(queryZeroGasActorsRequest).toHaveBeenCalledWith({})
      expect(result).toEqual({
        actors: {
          senders: ["sender"],
          contracts: ["contract"],
          alwaysZeroGasContracts: ["always"],
        },
      })
    })
  })
})
