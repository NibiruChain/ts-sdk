const PRECISION = 18 // number of decimal places
export const INT_MULT = 1_000_000

/**
 * toSdkDec converts the input float string to an sdk.Dec.
 * The maximum number of decimal places for an sdk.Dec is 18.
 * NOTE: An error is thrown if more decimal digits are provided than the
 * precision, 18.
 *
 * ref: Reimplementation of cosmos-sdk/types/decimal.go
 *
 * @export
 * @param {string} dec
 * @returns {string}
 */
export const toSdkDec = (dec: string) => {
  /*
  create a decimal from an input decimal.
  valid must come in the form:
      (-) integer digits (.) fractional digits
  examples of acceptable input include:
      -123.456
      456.7890
      345
      -456789

  NOTE - An error will return if more decimal places
  are provided in the string than the constant Precision.

  CONTRACT - This function does not mutate the input str.
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
      `value \${decStr}' exceeds max precision by ${
        PRECISION - lenDigitBlock
      } decimal places: max precision ${PRECISION}`
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

export const fromSdkDec = (sdkDec: string) => {
  if (!sdkDec) {
    return 0
  }

  if (sdkDec.indexOf(".") !== -1) {
    console.error(`expected a decimal string but got ${sdkDec} containing '.'`)
    return 0
  }

  if (Number.isNaN(parseInt(sdkDec, 10))) {
    console.error(`failed to convert ${sdkDec} to a number`)
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
