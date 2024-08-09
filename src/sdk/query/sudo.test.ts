import { QueryClient } from "@cosmjs/stargate"
import * as query from "../../protojs/nibiru/sudo/v1/query"
import { setupSudoExtension } from "."

describe("setupSudoExtension", () => {
  const mockBaseQueryClient = {} as QueryClient

  jest.spyOn(query, "QueryClientImpl").mockReturnValue({
    QuerySudoers: jest
      .fn()
      .mockResolvedValue({ sudoers: ["Test Sudoer 1", "Test Sudoer 2"] }),
  } as unknown as query.QueryClientImpl)

  test("should setup sudo extension correctly", () => {
    const extension = setupSudoExtension(mockBaseQueryClient)

    expect(extension).toBeDefined()
    expect(extension.querySudoers).toBeInstanceOf(Function)
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
})
