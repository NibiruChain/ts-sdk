import { Result, parseError } from "."

describe("result", () => {
  const err = "Error"

  test("Result", () => {
    const ResultMock = new Result({ ok: true })
    expect(ResultMock).toBeInstanceOf(Result)
  })

  test("Result - console error", () => {
    const consoleErrorMock = jest
      .spyOn(console, "error")
      .mockImplementation((str: string) => str)

    new Result({ ok: true, err })

    expect(consoleErrorMock).toHaveBeenCalledWith(
      "ResultError: ok and error states must not be defined simultaneously"
    )
  })

  test("ofSafeExec", () => {
    const result = Result.ofSafeExec(() => {
      throw err
    })
    expect(result.err).toEqual(new Error(err))
  })

  test("parseError", () => {
    const ResultMock = parseError(err)
    expect(ResultMock).toEqual(new Error(err))
  })
})
