import { BigNumber } from "bignumber.js"

BigNumber.set({ ROUNDING_MODE: BigNumber.ROUND_FLOOR })

/**
 * Swap contains the result of a swap
 *
 * @export
 * @class Swap
 * @property {BalancerPool} poolStart the pool before the swap
 * @property {BalancerPool} poolEnd the pool after the swap
 * @property {BigNumber} dxAmm the amount of x added to the pool
 * @property {BigNumber} dxUser the amount of x removed from the pool
 * @property {BigNumber} dyAmm the amount of y removed from the pool
 * @property {BigNumber} dyUser the amount of y added to the pool
 * @property {BigNumber} priceImpact the price impact of the swap
 */
export class Swap {
  public poolStart: BalancerPool
  public poolEnd: BalancerPool

  public dxAmm: BigNumber
  public dxUser: BigNumber
  public dyAmm: BigNumber
  public dyUser: BigNumber
  public priceImpact: BigNumber

  constructor(poolStart: BalancerPool, poolEnd: BalancerPool) {
    this.poolStart = poolStart
    this.poolEnd = poolEnd
    this.dxAmm = poolEnd.x.minus(poolStart.x)
    this.dyAmm = poolEnd.y.minus(poolStart.y)
    this.dxUser = this.dxAmm.negated()
    this.dyUser = this.dyAmm.negated()

    const startPrice = poolStart.spotPrice()
    const endPrice = poolEnd.spotPrice()
    this.priceImpact = endPrice.minus(startPrice).dividedBy(startPrice)
  }
}

/**
 * Balancer contains the logic for exchanging tokens in a traditional xy=k AMM pool
 *
 * Constructor:
 * @param {BigNumber} x
 * @param {BigNumber} y
 * @param {BigNumber} swapFee
 *
 * @export
 * @class BalancerPool
 * @property {BigNumber} x the amount of x in the pool
 * @property {BigNumber} y the amount of y in the pool
 * @property {BigNumber} swapFee the swap fee expressed as a ratio
 */
export class BalancerPool {
  public x: BigNumber
  public y: BigNumber
  public swapFee: BigNumber

  constructor(x: BigNumber, y: BigNumber, fee: BigNumber) {
    this.swapFee = fee
    this.x = x
    this.y = y
  }

  k() {
    return this.x.multipliedBy(this.y)
  }

  spotPrice() {
    return this.y.dividedBy(this.x)
  }

  /**
   * Calculates the result of adding x to the pool
   *
   * @param dxAmm the amount of x to add to the pool. Could be negative.
   * @returns a Swap object representing the result of the swap
   */
  swapX(dxAmm: BigNumber): Swap | undefined {
    if (!this.x.plus(dxAmm).isPositive()) return undefined

    let dxAmmEffective = dxAmm
    if (dxAmm.isPositive()) {
      dxAmmEffective = dxAmmEffective.multipliedBy(
        BigNumber(1).minus(this.swapFee)
      )
    }

    let dyAmmNeeded = this.k()
      .dividedBy(this.x.plus(dxAmmEffective))
      .minus(this.y)
    if (dxAmm.isNegative()) {
      // mutually exclusive from reducing dxAmmEffective
      dyAmmNeeded = dyAmmNeeded.dividedBy(BigNumber(1).minus(this.swapFee))
    }

    const poolEnd = new BalancerPool(
      this.x.plus(dxAmm),
      this.y.plus(dyAmmNeeded),
      this.swapFee
    )

    if (poolEnd.x.isLessThanOrEqualTo(0) || poolEnd.y.isLessThanOrEqualTo(0))
      return undefined

    return new Swap(this, poolEnd)
  }

  /**
   * Calculates the result of adding y to the pool
   *
   * @param dyAmm the amount of y to add to the pool. Could be negative.
   * @returns a Swap object representing the result of the swap
   */
  swapY(dyAmm: BigNumber): Swap | undefined {
    if (!this.y.plus(dyAmm).isPositive()) return undefined

    let dyAmmEffective = dyAmm
    if (dyAmm.isPositive()) {
      dyAmmEffective = dyAmmEffective.multipliedBy(
        BigNumber(1).minus(this.swapFee)
      )
    }

    let dxAmmNeeded = this.k()
      .dividedBy(this.y.plus(dyAmmEffective))
      .minus(this.x)
    if (dyAmm.isNegative()) {
      // mutually exclusive from reducing dyAmmEffective
      dxAmmNeeded = dxAmmNeeded.dividedBy(BigNumber(1).minus(this.swapFee))
    }

    const poolEnd = new BalancerPool(
      this.x.plus(dxAmmNeeded),
      this.y.plus(dyAmm),
      this.swapFee
    )

    if (poolEnd.x.isLessThanOrEqualTo(0) || poolEnd.y.isLessThanOrEqualTo(0))
      return undefined

    return new Swap(this, poolEnd)
  }
}
