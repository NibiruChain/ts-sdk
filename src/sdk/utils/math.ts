import BigNumber from "bignumber.js"
import { Params } from "src/protojs/nibiru/inflation/v1/genesis"

/**
 * Evaluates a polynomial at a given point.
 *
 * @param factors - Coefficients of the polynomial in decreasing order
 *     (starting with the coefficient of the highest power of `x`).
 * @param x - Point at which to evaluate the polynomial.
 * @returns The value of the polynomial defined by factors evaluated at the
 *     point `x`. The polynomial value is the sum of each factor multiplied
 *     by its corresponding power of `x`.
 */
export const polynomial = (factors: string[], x: BigNumber) => {
  let result = BigNumber(0)
  for (let i = 0; i < factors.length; i++) {
    result = result.plus(
      BigNumber(factors[i]).times(x.pow(factors.length - i - 1))
    )
  }

  return result
}

/**
 * Calculates the minting provision for a specific epoch based on provided parameters.
 *
 * The function evaluates a polynomial (defined in the `params`) at a given
 * `period`. If the polynomial's value is negative, the epochs per period is zero, or the
 * period is greater than the maximum allowed period, the function returns zero.
 * Otherwise, it returns the calculated polynomial value.
 *
 * @param params - An object containing the polynomial factors, the number of
 *   epochs per period, and the maximum period.
 * @param period - The period for which to calculate the mint provision.
 * @returns - The mint provision for the specified period; returns zero under
 *   certain conditions.
 *
 * @see https://pkg.go.dev/github.com/NibiruChain/nibiru@v1.2.0/x/inflation
 */
export const calculateEpochMintProvision = (
  params: Params,
  period: BigNumber
) => {
  const polynomialValue = polynomial(params.polynomialFactors, period)

  return polynomialValue.lt(0) ||
    params.epochsPerPeriod.eq(0) ||
    period.gt(params.maxPeriod.toString())
    ? BigNumber(0)
    : polynomialValue
}

/**
 * Computes the amount of staking inflation claimable via the
 * "cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward" transaction
 * message based on the inflation parameters (`Params`), current inflation
 * period, and the users percentage ownership of the total stake, or voting
 * power.
 *
 * @param params - Nibiru inflation module parameters, which specify the
 *    polynomial for the NIBI token emmissions.
 * @param period - Current epoch of the inflation period.
 * @param totalStaked - Total stake (unibi) of all stakers in in the network.
 * @param myStake - User's current stake.
 * @param addedStake - New stake to add to the user's current stake. This is
 *     used to compute a new annual percentage return after a staking tx.
 * */
export const computeStakingEmmisionPerPeriod = (
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
