/* global BigInt */

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

  xp() {
    return this.totalTokenSupply.map(
      (x, i) => (BigInt(x) * this.tokenPrices[i]) / BigInt(10) ** BigInt(18),
    )
  }

  D() {
    let Dprev = BigInt(0)
    const xp = this.xp()
    const S = xp.reduce((a, b) => a + b, BigInt(0))
    let D = S
    const Ann = this.Amplification * this.totalTokensInPool ** this.totalTokensInPool
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

  y(fromIndex: number, toIndex: number, x: bigint) {
    const D = this.D()
    let xx = this.xp()
    xx[fromIndex] = x
    xx = xx.filter((_, idx) => idx !== toIndex)
    const Ann = this.Amplification * this.totalTokensInPool ** this.totalTokensInPool

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
      yVal = (yVal ** BigInt(2) + c) / (BigInt(2) * yVal + b)
    }
    return yVal
  }

  exchange(fromIndex: number, toIndex: number, dx: bigint) {
    const xp = this.xp()
    const x = xp[fromIndex] + dx
    const y = this.y(fromIndex, toIndex, x)
    const dy = xp[toIndex] - y
    const fee = (dy * this.fee) / BigInt(10) ** BigInt(10)

    if (dy <= 0) {
      throw new Error("Invalid exchange operation")
    }

    return dy - fee
  }
}
