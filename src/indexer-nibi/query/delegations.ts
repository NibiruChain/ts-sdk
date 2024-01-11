import { defaultDelegations } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  GQLQuery,
  GQLQueryGqlDelegationsArgs,
  GQLDelegationOrder,
  GQLDelegation,
} from "../gql/generated"

export interface GqlOutDelegations {
  delegations?: GQLQuery["delegations"]
}

export const delegationsQueryString = (
  args: GQLQueryGqlDelegationsArgs,
  excludeParentObject: boolean,
  fields?: Partial<GQLDelegation>
) => {
  if (!args.limit) args.limit = 100
  if (!args.order_desc) args.order_desc = true
  if (!args.order_by) args.order_by = GQLDelegationOrder.GQLDelegatorAddress

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
  args: GQLQueryGqlDelegationsArgs,
  endpt: string,
  fields?: Partial<GQLDelegation>
): Promise<GqlOutDelegations> =>
  doGqlQuery(delegationsQueryString(args, false, fields), endpt)
