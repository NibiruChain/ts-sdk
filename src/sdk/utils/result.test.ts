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
    expect(result.isErr()).toBe(true)
    expect(result.isOk()).toBe(false)
    expect(result.err).toEqual(new Error(err))
  })

  test("ofSafeExec returns the function value", () => {
    const result = Result.ofSafeExec(() => 42)
    expect(result.isOk()).toBe(true)
    expect(result.ok).toBe(42)
    expect(result.err).toBeUndefined()
  })

  test("ofSafeExecAsync", async () => {
    const ok = await Result.ofSafeExecAsync(async () => "done")
    expect(ok.isOk()).toBe(true)
    expect(ok.ok).toBe("done")

    const failed = await Result.ofSafeExecAsync(async () => {
      throw err
    })
    expect(failed.isErr()).toBe(true)
    expect(failed.err).toEqual(new Error(err))
  })

  test("parseError", () => {
    const ResultMock = parseError(err)
    expect(ResultMock).toEqual(new Error(err))
  })

  test("parseError keeps Error instances", () => {
    const error = new Error("already typed")
    expect(parseError(error)).toBe(error)
  })

  test("Result treats a falsy ok value as success when there is no error", () => {
    const result = new Result<number>({ ok: 0 })
    expect(result.isOk()).toBe(true)
    expect(result.ok).toBe(0)
  })
})
