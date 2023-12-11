/** Poor-man's Result type from Rust.
 *
 * The Result type forces you to explicitly handle erros in contrast to allowing
 * errors to propagate up the call stack implicitly. Handling potential errors
 * explicitly leads to more robust and reliable code.
 *
 * Ref: <a href="https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html#propagating-errors">Propagating Errors - Rust Book</a>.
 *
 * @example
 * // ---------------------------------------
 * // Most common use-case: Result.ofSafeExec
 * // ---------------------------------------
 * res = Result.ofSafeExec(somethingDangerous) // without args
 *
 * // with args
 * res = Result.ofSafeExec(() => somethingDangerous(arg0, arg1))
 *
 * @example
 * // ---------------------------------------
 * // Direct constructor
 * // ---------------------------------------
 * let res = new Result({ ok: "Operation successful!" })
 * if (res.isOk()) {
 *   happyPath(res.ok)
 * } else {
 *   handleGracefully(res.err!) // throws impossible based on constructor args
 * }
 *
 * */
export class Result<T> {
  ok: T | undefined
  err: Error | undefined
  constructor({ ok, err }: { ok?: T; err?: unknown }) {
    this.ok = ok
    this.err = err ? parseError(err) : undefined

    const undefinedArgsCount =
      +(this.ok !== undefined) + +(this.err !== undefined)
    if (undefinedArgsCount === 0) {
      throw new Error(
        "ResultError: ok and error states cannot be defined simultaneously"
      )
    }
  }

  isErr = (): boolean => this.err !== undefined
  isOk = (): boolean => !this.isErr()

  /** Constructor for "Result" using the return value of the input function. */
  static ofSafeExec = <Y>(fn: () => Y): Result<Y> => {
    try {
      return new Result({ ok: fn() })
    } catch (err) {
      return new Result({ err })
    }
  }

  /** Constructor for "Result" using the return value of the input async function.
   * @example
   * const result = Result.ofSafeExecAsync(async () => someAsyncFunc(args))
   * */
  static ofSafeExecAsync = async <Y>(
    fn: () => Promise<Y>
  ): Promise<Result<Y>> => {
    try {
      return new Result({ ok: await fn() })
    } catch (err) {
      return new Result({ err })
    }
  }
}

/** parseError: Guarantees runtime strong error typing since this isn't
 * guaranteed in JS by default. The error that comes out of a try-catch may not
 * have type "Error" since it's perfectly valid to throw strings or `undefined`.
 * */
export const parseError = (err: unknown): Error => {
  let outErr: Error
  if (err instanceof Error) {
    outErr = err
  } else {
    const errMsg: string = `${err}`
    outErr = new Error(errMsg)
  }
  return outErr
}
