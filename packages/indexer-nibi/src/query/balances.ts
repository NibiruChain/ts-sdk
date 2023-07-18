import { gqlQuery } from "../utils"
import { doGqlQuery } from "../gql"
import { QueryExt, QueryExtBalancesArgs, BalancesOrder } from "../gql/generated"

export interface GqlOutBalances {
  balances: QueryExt["balances"]
}

export const balances = async (
  args: QueryExtBalancesArgs,
  endpt: string
): Promise<GqlOutBalances> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = BalancesOrder.BlockTs

  return doGqlQuery(
    gqlQuery(
      "balances",
      args,
      `block
       blockTs
       moduleName
       address
       balance {
         amount
         denom
       }`
    ),
    endpt
  )
}
