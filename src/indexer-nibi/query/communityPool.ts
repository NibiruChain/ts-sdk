import { defaultToken } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  GQLQueryGqlCommunityPoolArgs,
  GQLQuery,
  GQLToken,
} from "../gql/generated"

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
