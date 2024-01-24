import { defaultToken } from "../utils/defaultObjects"
import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
} from "../utils/consts"
import {
  GQLQueryGqlCommunityPoolArgs,
  GQLQuery,
  GQLToken,
} from "../utils/generated"

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
