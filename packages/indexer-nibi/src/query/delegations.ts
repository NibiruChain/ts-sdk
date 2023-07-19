import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  QueryExt,
  QueryExtDelegationsArgs,
  DelegationsOrder,
  Delegations,
} from "../gql/generated"

export const defaultDelegationsObject: Partial<Delegations> = {
  block: "",
  blockTs: "",
  delegatorAddress: "",
  validatorAddress: "",
  shares: 0,
  balance: {
    amount: 0,
    denom: "",
  },
}

export interface GqlOutDelegations {
  delegations?: QueryExt["delegations"]
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
      convertObjectToPropertiesString(defaultDelegationsObject)
    ),
    endpt
  )
}
