import {
  defaultRedelegations,
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQuery,
  GQLQueryGqlRedelegationsArgs,
  GQLRedelegation,
  GQLRedelegationOrder,
  DeepPartial,
} from ".."

export interface GqlOutRedelegations {
  redelegations?: GQLQuery["redelegations"]
}

export const redelegationsQueryString = (
  args: GQLQueryGqlRedelegationsArgs,
  excludeParentObject: boolean,
  fields?: DeepPartial<GQLRedelegation>
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
  fields?: DeepPartial<GQLRedelegation>
): Promise<GqlOutRedelegations> =>
  doGqlQuery(redelegationsQueryString(args, false, fields), endpt)
