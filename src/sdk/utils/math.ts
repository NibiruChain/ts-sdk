import BigNumber from "bignumber.js"
import { Params } from "src/protojs/nibiru/inflation/v1/genesis"

export const polynomial = (factors: string[], x: BigNumber) => {
  let result = BigNumber(0)
  for (let i = 0; i < factors.length; i++) {
    result = result.plus(
      BigNumber(factors[i]).times(x.pow(factors.length - i - 1))
    )
  }

  return result
}

export const calculateEpochMintProvision = (
  params: Params,
  period: BigNumber
) => {
  // Calculate the value of the polynomial at x
  const polynomialValue = polynomial(params.polynomialFactors, period)

  return polynomialValue.lt(0) ||
    params.epochsPerPeriod.eq(0) ||
    period.gt(params.maxPeriod.toString())
    ? BigNumber(0)
    : polynomialValue
}

export const computeMonthlyAPR = (
  params: Params,
  period: number,
  totalStaked: number,
  myStake: number,
  addedStake = 0
) => {
  const rewardForPeriod = calculateEpochMintProvision(
    params,
    BigNumber(period)
  ).times(params.inflationDistribution?.stakingRewards ?? 0)

  return BigNumber(myStake + addedStake)
    .div(totalStaked + addedStake)
    .times(rewardForPeriod)
    .toNumber()
}
