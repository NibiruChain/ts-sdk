import { gqlQuery } from "../utils"
import { doGqlQuery } from "../gql"
import {
  QueryExt,
  QueryExtUnbondingsArgs,
  UnbondingsOrder,
} from "../gql/generated"

export interface GqlOutUnbondings {
  unbondings: QueryExt["unbondings"]
}

export const unbondings = async (
  args: QueryExtUnbondingsArgs,
  endpt: string
): Promise<GqlOutUnbondings> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = UnbondingsOrder.Block

  return doGqlQuery(
    gqlQuery(
      "unbondings",
      args,
      `block
      blockTs
      validatorAddress
      delegatorAddress
      creationHeight
      completionTime
      initialBalance
      balance`
    ),
    endpt
  )
}
