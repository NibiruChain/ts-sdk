import {
  defaultToken,
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQueryGqlCommunityPoolArgs,
  GQLQuery,
  GQLToken,
  DeepPartial,
} from ".."

export interface GqlOutCommunityPool {
  communityPool?: GQLQuery["communityPool"]
}

export const communityPoolQueryString = (
  args: GQLQueryGqlCommunityPoolArgs,
  excludeParentObject: boolean,
  fields?: DeepPartial<GQLToken>
) =>
  gqlQuery(
    "communityPool",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultToken),
    excludeParentObject
  )

export const communityPool = async (
  args: GQLQueryGqlCommunityPoolArgs,
  endpt: string,
  fields?: DeepPartial<GQLToken>
): Promise<GqlOutCommunityPool> =>
  doGqlQuery(communityPoolQueryString(args, false, fields), endpt)
