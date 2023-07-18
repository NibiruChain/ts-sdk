import { gqlQuery } from "../utils"
import { doGqlQuery } from "../gql"
import {
  QueryExt,
  QueryExtValidatorsArgs,
  ValidatorsOrder,
} from "../gql/generated"

export interface GqlOutValidator {
  validators: QueryExt["validators"]
}

export const validators = async (
  args: QueryExtValidatorsArgs,
  endpt: string
): Promise<GqlOutValidator> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = ValidatorsOrder.Block

  return doGqlQuery(
    gqlQuery(
      "validators",
      args,
      `block
       blockTs
       operatorAddress
       jailed
       statusBonded
       tokens
       delegatorShares
       description
       unbondingHeight
       unbondingTime
       commissionRates
       commissionUpdateTime`
    ),
    endpt
  )
}
