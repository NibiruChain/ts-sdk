import { defaultDelegations } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  QueryDelegationsArgs,
  DelegationOrder,
  Delegation,
} from "../gql/generated"

export interface GqlOutDelegations {
  delegations?: Query["delegations"]
}

export const delegationsQueryString = (
  args: QueryDelegationsArgs,
  excludeParentObject: boolean,
  fields?: Partial<Delegation>
) => {
  if (!args.limit) args.limit = 100
  if (!args.order_desc) args.order_desc = true
  if (!args.order_by) args.order_by = DelegationOrder.DelegatorAddress

  return gqlQuery(
    "delegations",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultDelegations),
    excludeParentObject
  )
}

export const delegations = async (
  args: QueryDelegationsArgs,
  endpt: string,
  fields?: Partial<Delegation>
): Promise<GqlOutDelegations> =>
  doGqlQuery(delegationsQueryString(args, false, fields), endpt)
