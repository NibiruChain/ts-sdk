import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  QueryExt,
  QueryExtValidatorsArgs,
  Validators,
  ValidatorsOrder,
} from "../gql/generated"

export const defaultValidatorsObject: Partial<Validators> = {
  block: 0,
  blockTs: "",
  operatorAddress: "",
  jailed: false,
  statusBonded: false,
  tokens: 0,
  delegatorShares: 0,
  description: "",
  unbondingHeight: 0,
  unbondingTime: "",
  commissionRates: "",
  commissionUpdateTime: "",
}

export interface GqlOutValidators {
  validators?: QueryExt["validators"]
}

export const validators = async (
  args: QueryExtValidatorsArgs,
  endpt: string
): Promise<GqlOutValidators> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = ValidatorsOrder.Block

  return doGqlQuery(
    gqlQuery(
      "validators",
      args,
      convertObjectToPropertiesString(defaultValidatorsObject)
    ),
    endpt
  )
}
