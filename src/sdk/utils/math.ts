import BigNumber from "bignumber.js"
import { Params } from "src/protojs/nibiru/inflation/v1/genesis"
import { QueryEpochMintProvisionResponse } from "src/protojs/nibiru/inflation/v1/query"

/**
 * Computes the amount of staking inflation claimable via the
 * "cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward" transaction
 * message based on the inflation parameters (`Params`), current inflation
 * period, and the users percentage ownership of the total stake, or voting
 * power.
 *
 * @param params - Nibiru inflation module parameters, which specify the
 *    polynomial for the NIBI token emmissions.
 * @param epochMintProvision - EpochMintProvisionResponse from chain using txClient.
 * @param totalStaked - Total stake (unibi) of all stakers in in the network.
 * @param myStake - User's current stake.
 * @param addedStake - New stake to add to the user's current stake. This is
 *     used to compute a new annual percentage return after a staking tx.
 * */
export const computeStakingEmmisionPerPeriod = (
  params: Params,
  epochMintProvision: QueryEpochMintProvisionResponse,
  totalStaked: number,
  myStake: number,
  addedStake = 0
) => {
  const rewardForPeriod = BigNumber(
    epochMintProvision.epochMintProvision?.amount ?? 0
  ).times(params.inflationDistribution?.stakingRewards ?? 0)

  return BigNumber(myStake + addedStake)
    .div(totalStaked + addedStake)
    .times(rewardForPeriod)
    .toNumber()
}
