const PRECISION = 18 // number of decimal places
const INT_MULT = 1e6

// reimplementation of cosmos-sdk/types/decimal.go
export function toSdkDec(dec: string): string {
  /*
  create a decimal from an input decimal.
  valid must come in the form:
      (-) whole integers (.) decimal integers
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
    throw new Error(`Expected decimal string but got: ${decStr}`)
  }

  // first extract any negative symbol
  let neg = false
  if (decStr[0] === '-') {
    neg = true
    decStr = decStr.slice(1)
  }

  if (decStr.length === 0) {
    throw new Error(`Expected decimal string but got: ${decStr}`)
  }

  const strs = decStr.split('.')
  let lenDecs = 0
  let combinedStr = strs[0]

  if (strs.length === 2) {
    // has a decimal place
    lenDecs = strs[1].length
    if (lenDecs === 0 || combinedStr.length === 0) {
      throw new Error(`Expected decimal string but got: ${decStr}`)
    }
    combinedStr += strs[1]
  } else if (strs.length > 2) {
    throw new Error(`Expected decimal string but got: ${decStr}`)
  }

  if (lenDecs > PRECISION) {
    throw new Error(
      `value \${decStr}' exceeds max precision by ${
        PRECISION - lenDecs
      } decimal places: max precision ${PRECISION}`,
    )
  }

  // add some extra zero's to correct to the Precision factor
  const zerosToAdd = PRECISION - lenDecs
  const zeros = '0'.repeat(zerosToAdd)
  combinedStr += zeros

  if (Number.isNaN(parseInt(combinedStr, 10))) {
    throw new Error(`failed to set decimal string with base 10: ${combinedStr}`)
  }

  if (neg) {
    return `-${combinedStr}`
  }
  return combinedStr
}

export function fromSdkDec(dec: string): string {
  let decStr = dec
  if (!decStr) {
    return '0'
  }

  if (decStr.indexOf('.') !== -1) {
    throw new Error(
      `expected a decimal string but got ${decStr} containing '.'`,
    )
  }

  if (Number.isNaN(parseInt(decStr, 10))) {
    throw new Error(`failed to convert ${decStr} to a number`)
  }

  let neg = false
  if (decStr[0] === '-') {
    neg = true
    decStr = decStr.slice(1)
  }

  const inputSize = decStr.length
  let bzStr = ''
  // case 1, purely decimal
  if (inputSize <= PRECISION) {
    // 0. prefix
    bzStr = '0.'

    // set relevant digits to 0
    bzStr += '0'.repeat(PRECISION - inputSize)

    // set final digits
    bzStr += decStr
  } else {
    // inputSize + 1 to account for the decimal point that is being added
    const decPointPlace = inputSize - PRECISION

    bzStr = decStr.slice(0, decPointPlace) // pre-decimal digits
    bzStr += '.' // decimal point
    bzStr += decStr.slice(decPointPlace) // pre-decimal digits
  }
  if (neg) {
    bzStr = `-${bzStr}`
  }

  return bzStr
}

export function toSdkInt(i: string): string {
  return (+i * INT_MULT).toString()
}

export function fromSdkInt(intStr: string): string {
  return (parseFloat(intStr) / INT_MULT).toString()
}
