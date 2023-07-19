import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  QueryExt,
  QueryExtBalancesArgs,
  BalancesOrder,
  Balances,
} from "../gql/generated"

export const defaultBalancesObject: Partial<Balances> = {
  block: 0,
  blockTs: "",
  moduleName: "",
  address: "",
  balance: [
    {
      amount: 0,
      denom: "",
    },
  ],
}

export interface GqlOutBalances {
  balances?: QueryExt["balances"]
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
      convertObjectToPropertiesString(defaultBalancesObject)
    ),
    endpt
  )
}
