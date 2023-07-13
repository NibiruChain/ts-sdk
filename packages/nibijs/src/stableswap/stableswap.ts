import { BigNumber } from "bignumber.js"

BigNumber.set({ ROUNDING_MODE: BigNumber.ROUND_FLOOR })

/**
 * StableSwap contains the logic for exchanging tokens
 *
 * Based on: https://github.com/NibiruChain/nibiru/blob/master/contrib/scripts/testing/stableswap_model.py
 *
 * Constructor:
 * @param {BigNumber} Amplification
 * @param {BigNumber[]} totalTokenSupply
 * @param {BigNumber[]} tokenPrices
 * @param {BigNumber} fee
 *
 * @export
 * @class StableSwap
 */
export class StableSwap {
  public Amplification: BigNumber
  public totalTokenSupply: BigNumber[]
  public totalTokensInPool: BigNumber
  public fee: BigNumber

  constructor(
    Amplification: BigNumber,
    totalTokenSupply: BigNumber[],
    fee: BigNumber
  ) {
    this.Amplification = Amplification
    this.totalTokenSupply = totalTokenSupply
    this.totalTokensInPool = BigNumber(totalTokenSupply.length)
    this.fee = fee
  }

  /**
   * xp() gives an array of total tokens
   *
   * @memberof StableSwap
   */
  xp() {
    return this.totalTokenSupply.map((x) => BigNumber(x))
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
    let Dprev = BigNumber(0)
    const xp = this.xp()
    const S = xp.reduce((a, b) => a.plus(b), BigNumber(0))
    let D = S

    const Ann = this.Amplification.multipliedBy(
      this.totalTokensInPool.exponentiatedBy(this.totalTokensInPool)
    )

    while (D.minus(Dprev).abs().isGreaterThan(BigNumber(1))) {
      let D_P = D

      for (const x of xp) {
        D_P = D_P.multipliedBy(D).dividedBy(
          this.totalTokensInPool.multipliedBy(x)
        )
      }

      Dprev = D

      D = Ann.multipliedBy(S)
        .plus(D_P.multipliedBy(this.totalTokensInPool))
        .multipliedBy(D)
        .dividedBy(
          Ann.minus(BigNumber(1))
            .multipliedBy(D)
            .plus(this.totalTokensInPool.plus(BigNumber(1)).multipliedBy(D_P))
        )
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
   * @param {BigNumber} x
   * @memberof StableSwap
   */
  y(fromIndex: number, toIndex: number, x: BigNumber) {
    const D = this.D()
    let xx = this.xp()
    xx[fromIndex] = x
    xx = xx.filter((_, idx) => idx !== toIndex)
    const Ann = this.Amplification.multipliedBy(
      this.totalTokensInPool.exponentiatedBy(this.totalTokensInPool)
    )

    let c = D
    for (const y of xx) {
      c = c.multipliedBy(D).dividedBy(y.multipliedBy(this.totalTokensInPool))
    }
    c = c.multipliedBy(D).dividedBy(this.totalTokensInPool.multipliedBy(Ann))
    const b = xx
      .reduce((a, b) => a.plus(b), BigNumber(0))
      .plus(D.dividedBy(Ann))
      .minus(D)
    let yPrev = BigNumber(0)
    let yVal = D

    while (yVal.minus(yPrev).abs().isGreaterThan(BigNumber(1))) {
      yPrev = yVal
      yVal = yVal
        .exponentiatedBy(BigNumber(2))
        .plus(c)
        .dividedBy(BigNumber(2).multipliedBy(yVal).plus(b))
    }
    return yVal
  }

  /**
   * exchange() runs a theorhetical Curve StableSwap model to determine impact on token price
   *
   * @param {number} fromIndex
   * @param {number} toIndex
   * @param {BigNumber} dx
   * @memberof StableSwap
   */
  exchange(fromIndex: number, toIndex: number, dx: BigNumber) {
    const xp = this.xp()
    const x = xp[fromIndex].plus(dx)
    const y = this.y(fromIndex, toIndex, x)
    const dy = xp[toIndex].minus(y)
    const fee = dy
      .multipliedBy(this.fee)
      .dividedBy(BigNumber(10).exponentiatedBy(BigNumber(10)))

    if (dy.isLessThanOrEqualTo(BigNumber(0))) {
      throw new Error("Invalid exchange operation")
    }

    return dy.minus(fee)
  }
}
