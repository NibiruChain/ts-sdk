// throw new Error()
// this.time = unixTs as UTCTimestamp

/**
 * A function for strongly typing errors. The errors given in
 * catch blocks are not typed by default. This means they may not
 * have the message and name attributes.
 *
 * @example
 * ```js
 * try { functionThatThrowsError() }
 * catch (err) {
 *   if (!instanceOfError(err)) {throw err};
 *   alert(err.message)
 * }
 * ```
 * @export
 * @param {*} obj
 * @returns {obj is Error}
 */
export const instanceOfError = (obj: any): obj is Error =>
  ["message", "name"].every((attr) => attr in obj)

export class ErrorTxSimulation extends Error {
  constructor(message: string, stack?: string) {
    super(message)
    this.name = "ErrorTxSimulation"
    this.stack = stack ?? undefined
  }
}

export class ErrorTxBroadcast extends Error {
  constructor(message: string, stack?: string) {
    super(message)
    this.name = "ErrorTxBroadcast"
    this.stack = stack ?? undefined
  }
}

export const PerpErrors: { [key: string]: string } = {
  positionNotFound: "collections: not found: 'nibiru.perp.v1.Position'",
  badDebt: "bad debt",
  underwaterPosition: "underwater position",
}

/**
 * Makes sure one of the errors in 'errs' is contained in 'err'. If none of the
 * given exceptions are raised, it returns false.
 *
 * @param {string[]} errs
 * @param {Error} err
 */
export const raises = (errs: string[], err: Error) =>
  errs.some((e) => err.message.includes(e))
