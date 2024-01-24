import { defaultRedelegations } from "../utils/defaultObjects"
import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
} from "../utils/consts"
import {
  GQLQuery,
  GQLQueryGqlRedelegationsArgs,
  GQLRedelegation,
  GQLRedelegationOrder,
} from "../utils/generated"

export interface GqlOutRedelegations {
  redelegations?: GQLQuery["redelegations"]
}

export const redelegationsQueryString = (
  args: GQLQueryGqlRedelegationsArgs,
  excludeParentObject: boolean,
  fields?: Partial<GQLRedelegation>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = GQLRedelegationOrder.GQLCreationHeight

  return gqlQuery(
    "redelegations",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultRedelegations),
    excludeParentObject
  )
}

export const redelegations = async (
  args: GQLQueryGqlRedelegationsArgs,
  endpt: string,
  fields?: Partial<GQLRedelegation>
): Promise<GqlOutRedelegations> =>
  doGqlQuery(redelegationsQueryString(args, false, fields), endpt)
