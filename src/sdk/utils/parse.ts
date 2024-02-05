const PRECISION = 18 // number of decimal places
export const INT_MULT = 1_000_000

/**
 * toSdkDec converts the input float string to an sdk.Dec.
 * The maximum number of decimal places for an sdk.Dec is 18.
 * NOTE: An error is console loggedd if more decimal digits are
 * provided than the precision, 18.
 *
 * ref: Reimplementation of cosmos-sdk/types/decimal.go
 *
 * Valid inputs must come in the form:
 *   (-) integer digits (.) fractional digits
 * Examples of acceptable input include:
 *   -123.456
 *   456.7890
 *   345
 *   -456789
 *
 * CONTRACT - This function does not mutate the input str.
 *
 * @see fromSdkDec - The inverse of this function that converts an
 * sdk.Dec protobuf string into a number.
 *
 * @export
 * @param {string} dec
 * @returns {string} - Protobuf string for an sdk.Dec, which is
 * represented by its underlying "big.Int".
 */
export const toSdkDec = (dec: string): string => {
  /*
   * create a decimal from an input decimal.
   */
  let decStr = dec.toString()

  if (decStr.length === 0) {
    console.error(`Expected decimal string but got: ${decStr}`)
    return "0"
  }

  // first extract any negative symbol
  let neg = false
  if (decStr.startsWith("-")) {
    neg = true
    decStr = decStr.slice(/* start? */ 1)
  }

  if (decStr.length === 0) {
    console.error(`Expected decimal string but got: ${decStr}`)
    return "0"
  }

  const digitBlocks = decStr.split(".")
  let lenDigitBlock = 0
  let sdkDec = digitBlocks[0]

  if (digitBlocks.length === 2) {
    // has a decimal place
    lenDigitBlock = digitBlocks[1].length
    if (lenDigitBlock === 0 || sdkDec.length === 0) {
      console.error(`Expected decimal string but got: ${decStr}`)
      return "0"
    }
    sdkDec += digitBlocks[1]
  } else if (digitBlocks.length > 2) {
    console.error(`Invalid input has more than one decimal point: ${decStr}`)
    return "0"
  }

  if (lenDigitBlock > PRECISION) {
    console.error(
      `value "${decStr}" exceeds max precision by ${
        PRECISION - lenDigitBlock
      } decimal places: max precision is ${PRECISION}`
    )
    return "0"
  }

  // An sdk.Dec must take up 18 (PRECISION) digits.
  // Add some extra zeros to correct to the Precision factor
  const zerosToAdd = PRECISION - lenDigitBlock
  const zeros = "0".repeat(zerosToAdd)
  sdkDec += zeros

  if (Number.isNaN(parseInt(sdkDec, 10))) {
    console.error(`failed to set decimal string with base 10: ${sdkDec}`)
    return "0"
  }

  if (neg) {
    return `-${sdkDec}`
  }
  return sdkDec
}

/** fromSdkDec: Converts a string representation of the "sdk.Dec", a shorthand
 * name for the "cosmossdk.io/math".LegacyDec type in Golang. An Sdk Dec is a
 * decimal/float implemented by "big.Int" with 18 decimals of precision
 * an abstraction for 18 decimals of precision big.Int.
 *
 * Sdk Dec is a custom protobuf type encoded as a string.
 * NOTE: The string for the raw protobuf value is not the human-readable one
 * that can include decimal points and negative signs. It's actually a string
 * holding the underlying "big.Int" value from which the concrete Dec type is
 * created.
 *
 * This is why we implement the functions `fromSdkDec` and `toSdkDec`. When
 * 'TxMessages' include SdkDec types, they need the protobuf string form, not
 * the human-readbale Dec.
 * @see TxMessage // from sdk/src/tx
 * @see toSdkDec
 * */
export const fromSdkDec = (sdkDec: string): number => {
  if (!sdkDec) {
    return 0
  }

  if (sdkDec.indexOf(".") !== -1) {
    console.error(
      `expected a decimal string but got "${sdkDec}" containing '.'`
    )
    return 0
  }

  if (Number.isNaN(parseInt(sdkDec, 10))) {
    console.error(`failed to convert "${sdkDec}" to a number`)
    return 0
  }

  // Check if the sdkDec is negative.
  let neg = false
  if (sdkDec.startsWith("-")) {
    neg = true
    sdkDec = sdkDec.slice(1)
  }

  const inputSize = sdkDec.length
  let bzStr = ""
  // case 1, purely decimal
  if (inputSize <= PRECISION) {
    // 0. prefix
    bzStr = "0."

    // set relevant digits to 0
    bzStr += "0".repeat(PRECISION - inputSize)

    // set final digits
    bzStr += sdkDec
  } else {
    // inputSize + 1 to account for the decimal point that is being added
    const decPointPlace = inputSize - PRECISION

    bzStr = sdkDec.slice(0, decPointPlace) // pre-decimal digits (integer)
    bzStr += "." // decimal point
    bzStr += sdkDec.slice(decPointPlace) // post-decimal digits (fractional)
  }
  if (neg) {
    bzStr = `-${bzStr}`
  }

  return parseFloat(bzStr)
}

export const toSdkInt = (i: number) => Math.round(i).toString()

export const fromSdkInt = (intStr: string) => parseInt(intStr)
