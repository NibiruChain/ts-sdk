import { gqlQuery } from "../utils"
import { doGqlQuery } from "../gql"
import {
  QueryExt,
  QueryExtDelegationsArgs,
  DelegationsOrder,
} from "../gql/generated"

export interface GqlOutDelegations {
  delegations: QueryExt["delegations"]
}

export enum BalanceOrderBy {
  block = "block",
  block_ts = "block_ts",
}

export const delegations = async (
  args: QueryExtDelegationsArgs,
  endpt: string
): Promise<GqlOutDelegations> => {
  if (!args.limit) args.limit = 100
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = DelegationsOrder.BlockTs

  return doGqlQuery(
    gqlQuery(
      "delegations",
      args,
      `block
       blockTs
       delegatorAddress
       validatorAddress
       shares
       balance {
         amount
         denom
       }`
    ),
    endpt
  )
}
