import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQueryGqlCommunityPoolArgs,
  GQLQuery,
  GQLToken,
  DeepPartial,
  GQLCommunityPoolOrder,
} from ".."

export interface GqlOutCommunityPool {
  communityPool?: GQLQuery["communityPool"]
}

export const communityPoolQueryString = (
  args: GQLQueryGqlCommunityPoolArgs,
  excludeParentObject: boolean,
  fields: DeepPartial<GQLToken>
) => {
  if (!args.limit) args.limit = 100
  if (!args.order_desc) args.order_desc = true
  if (!args.order_by) args.order_by = GQLCommunityPoolOrder.GQLDenom

  return gqlQuery(
    "communityPool",
    args,
    convertObjectToPropertiesString(fields),
    excludeParentObject
  )
}

export const communityPool = async (
  args: GQLQueryGqlCommunityPoolArgs,
  endpt: string,
  fields: DeepPartial<GQLToken>
): Promise<GqlOutCommunityPool> =>
  doGqlQuery(communityPoolQueryString(args, false, fields), endpt)
