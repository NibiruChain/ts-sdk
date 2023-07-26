import { defaultDelegator, defaultValidator } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  QueryDelegationsArgs,
  DelegationOrder,
  Delegation,
} from "../gql/generated"

export const defaultDelegationsObject: Delegation = {
  amount: 0,
  delegator: defaultDelegator,
  validator: defaultValidator,
}

export interface GqlOutDelegations {
  delegations?: Query["delegations"]
}

export const delegations = async (
  args: QueryDelegationsArgs,
  endpt: string
): Promise<GqlOutDelegations> => {
  if (!args.limit) args.limit = 100
  if (!args.order_desc) args.order_desc = true
  if (!args.order_by) args.order_by = DelegationOrder.DelegatorAddress

  return doGqlQuery(
    gqlQuery(
      "delegations",
      args,
      convertObjectToPropertiesString(defaultDelegationsObject)
    ),
    endpt
  )
}
