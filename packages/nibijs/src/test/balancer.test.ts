import { BigNumber } from "bignumber.js"
import { BalancerPool, Swap } from "../balancer"

describe("balancer tests", () => {
  test("add x", () => {
    const balancerPool = new BalancerPool(
      BigNumber(100),
      BigNumber(100),
      BigNumber(0.5) // 50% fee
    )

    expect(balancerPool.swapX(BigNumber(50))).toEqual({
      poolStart: {
        x: BigNumber(100),
        y: BigNumber(100),
        swapFee: BigNumber(0.5),
      },
      poolEnd: {
        x: BigNumber(150),
        y: BigNumber(80),
        swapFee: BigNumber(0.5),
      },
      dxAmm: BigNumber(50),
      dxUser: BigNumber(-50),
      dyAmm: BigNumber(-20),
      dyUser: BigNumber(20),
      priceImpact: BigNumber("-0.46666666666666666667"),
    } as Swap)
  })

  test("remove x", () => {
    const balancerPool = new BalancerPool(
      BigNumber(100),
      BigNumber(100),
      BigNumber(0.5) // 50% fee
    )

    expect(balancerPool.swapX(BigNumber(-50))).toEqual({
      poolStart: {
        x: BigNumber(100),
        y: BigNumber(100),
        swapFee: BigNumber(0.5),
      },
      poolEnd: {
        x: BigNumber(50),
        y: BigNumber(300), // the user needs to deposit 200 y to get 50 x because of the swap fee
        swapFee: BigNumber(0.5),
      },
      dxAmm: BigNumber(-50),
      dxUser: BigNumber(50),
      dyAmm: BigNumber(200),
      dyUser: BigNumber(-200),
      priceImpact: BigNumber(5),
    } as Swap)
  })

  test("add y", () => {
    const balancerPool = new BalancerPool(
      BigNumber(100),
      BigNumber(100),
      BigNumber(0.5) // 50% fee
    )

    expect(balancerPool.swapY(BigNumber(50))).toEqual({
      poolStart: {
        x: BigNumber(100),
        y: BigNumber(100),
        swapFee: BigNumber(0.5),
      },
      poolEnd: {
        x: BigNumber(80),
        y: BigNumber(150),
        swapFee: BigNumber(0.5),
      },
      dxAmm: BigNumber(-20),
      dxUser: BigNumber(20),
      dyAmm: BigNumber(50),
      dyUser: BigNumber(-50),
      priceImpact: BigNumber(0.875),
    } as Swap)
  })

  test("remove y", () => {
    const balancerPool = new BalancerPool(
      BigNumber(100),
      BigNumber(100),
      BigNumber(0.5) // 50% fee
    )

    expect(balancerPool.swapY(BigNumber(-50))).toEqual({
      poolStart: {
        x: BigNumber(100),
        y: BigNumber(100),
        swapFee: BigNumber(0.5),
      },
      poolEnd: {
        x: BigNumber(300), // the user needs to deposit 200 x to get 50 y because of the swap fee
        y: BigNumber(50),
        swapFee: BigNumber(0.5),
      },
      dxAmm: BigNumber(200),
      dxUser: BigNumber(-200),
      dyAmm: BigNumber(-50),
      dyUser: BigNumber(50),
      priceImpact: BigNumber("-0.83333333333333333334"),
    } as Swap)
  })

  test("swapX returns undefined if not positive", () => {
    const balancerPool = new BalancerPool(
      BigNumber(-100),
      BigNumber(100),
      BigNumber(0.5) // 50% fee
    )

    expect(balancerPool.swapX(BigNumber(-1))).toBeUndefined()
  })

  test("swapX returns undefined if poolEnd x and y are zero", () => {
    const balancerPool = new BalancerPool(
      BigNumber(0),
      BigNumber(0),
      BigNumber(0.5) // 50% fee
    )

    expect(balancerPool.swapX(BigNumber(0))).toBeUndefined()
  })

  test("swapY returns undefined if not positive", () => {
    const balancerPool = new BalancerPool(
      BigNumber(100),
      BigNumber(-100),
      BigNumber(0.5) // 50% fee
    )

    expect(balancerPool.swapY(BigNumber(-1))).toBeUndefined()
  })

  test("swapY returns undefined if poolEnd x and y are zero", () => {
    const balancerPool = new BalancerPool(
      BigNumber(0),
      BigNumber(0),
      BigNumber(0.5) // 50% fee
    )

    expect(balancerPool.swapY(BigNumber(0))).toBeUndefined()
  })
})
