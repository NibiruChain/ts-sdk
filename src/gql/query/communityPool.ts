import {
  defaultToken,
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQueryGqlCommunityPoolArgs,
  GQLQuery,
  GQLToken,
} from ".."

export interface GqlOutCommunityPool {
  communityPool?: GQLQuery["communityPool"]
}

export const communityPoolQueryString = (
  args: GQLQueryGqlCommunityPoolArgs,
  excludeParentObject: boolean,
  fields?: Partial<GQLToken>
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
  fields?: Partial<GQLToken>
): Promise<GqlOutCommunityPool> =>
  doGqlQuery(communityPoolQueryString(args, false, fields), endpt)
