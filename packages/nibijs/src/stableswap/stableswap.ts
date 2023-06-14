/* global BigInt */

/**
 * bigIntExponentiation() takes a base bigint and an exponent bigint and does math similiar to `**` in JS
 * BigInt does not support `**` until ES7
 *
 * @param {bigint} base
 * @param {bigint} exponent
 */
export const bigIntExponentiation = (base: bigint, exponent: bigint) => {
  let result = BigInt(1)

  while (exponent > BigInt(0)) {
    if (exponent % BigInt(2) === BigInt(1)) {
      result *= base
    }
    base *= base
    exponent /= BigInt(2)
  }

  return result
}

/**
 * StableSwap contains the logic for exchanging tokens
 *
 * Based on: https://github.com/NibiruChain/nibiru/blob/master/contrib/scripts/testing/stableswap_model.py
 *
 * Constructor:
 * @param {bigint} Amplification
 * @param {bigint[]} totalTokenSupply
 * @param {bigint[]} tokenPrices
 * @param {bigint} fee
 *
 * @export
 * @class StableSwap
 */
export class StableSwap {
  public Amplification: bigint
  public totalTokenSupply: bigint[]
  public totalTokensInPool: bigint
  public tokenPrices: bigint[]
  public fee: bigint

  constructor(
    Amplification: bigint,
    totalTokenSupply: bigint[],
    tokenPrices: bigint[],
    fee: bigint,
  ) {
    this.Amplification = Amplification
    this.totalTokenSupply = totalTokenSupply
    this.totalTokensInPool = BigInt(totalTokenSupply.length)
    this.tokenPrices = tokenPrices
    this.fee = fee
  }

  /**
   * xp() gives an array of total token cap per token
   *
   * @memberof StableSwap
   */
  xp() {
    return this.totalTokenSupply.map(
      (x, i) =>
        (BigInt(x) * this.tokenPrices[i]) /
        bigIntExponentiation(BigInt(10), BigInt(18)),
    )
  }

  /**
   * D()
   *
   * D invariant calculation in non-overflowing integer operations iteratively
   * A * sum(x_i) * n**n + D = A * D * n**n + D**(n+1) / (n**n * prod(x_i))
   *
   *
   * @memberof StableSwap
   */
  D() {
    let Dprev = BigInt(0)
    const xp = this.xp()
    const S = xp.reduce((a, b) => a + b, BigInt(0))
    let D = S
    const Ann =
      this.Amplification *
      bigIntExponentiation(this.totalTokensInPool, this.totalTokensInPool)
    while (Math.abs(Number((D - Dprev).toString())) > 1) {
      let D_P = D
      for (const x of xp) {
        D_P = (D_P * D) / (this.totalTokensInPool * x)
      }
      Dprev = D
      D =
        ((Ann * S + D_P * this.totalTokensInPool) * D) /
        ((Ann - BigInt(1)) * D + (this.totalTokensInPool + BigInt(1)) * D_P)
    }
    return D
  }

  /**
   * y()
   *
   * Calculate x[j] if one makes x[i] = x
   *
   * Done by solving quadratic equation iteratively.
   *  x_1**2 + x1 * (sum' - (A*n**n - 1) * D / (A * n**n)) = D ** (n+1)/(n ** (2 * n) * prod' * A)
   *  x_1**2 + b*x_1 = c
   *
   *  x_1 = (x_1**2 + c) / (2*x_1 + b)
   *
   * @param {number} fromIndex
   * @param {number} toIndex
   * @param {bigint} x
   * @memberof StableSwap
   */
  y(fromIndex: number, toIndex: number, x: bigint) {
    const D = this.D()
    let xx = this.xp()
    xx[fromIndex] = x
    xx = xx.filter((_, idx) => idx !== toIndex)
    const Ann =
      this.Amplification *
      bigIntExponentiation(this.totalTokensInPool, this.totalTokensInPool)

    let c = D
    for (const y of xx) {
      c = (c * D) / (y * this.totalTokensInPool)
    }
    c = (c * D) / (this.totalTokensInPool * Ann)
    const b = xx.reduce((a, b) => a + b, BigInt(0)) + D / Ann - D
    let yPrev = BigInt(0)
    let yVal = D

    while (Math.abs(Number(yVal - yPrev)) > 1) {
      yPrev = yVal
      yVal = (bigIntExponentiation(yVal, BigInt(2)) + c) / (BigInt(2) * yVal + b)
    }
    return yVal
  }

  /**
   * exchange() runs a theorhetical Curve StableSwap model to determine impact on token price/impact
   *
   * @param {number} fromIndex
   * @param {number} toIndex
   * @param {bigint} dx
   * @memberof StableSwap
   */
  exchange(fromIndex: number, toIndex: number, dx: bigint) {
    const xp = this.xp()
    const x = xp[fromIndex] + dx
    const y = this.y(fromIndex, toIndex, x)
    const dy = xp[toIndex] - y
    const fee = (dy * this.fee) / bigIntExponentiation(BigInt(10), BigInt(10))

    if (dy <= 0) {
      throw new Error("Invalid exchange operation")
    }

    return dy - fee
  }
}
