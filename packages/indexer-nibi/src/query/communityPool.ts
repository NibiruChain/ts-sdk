import { defaultToken } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import { QueryCommunityPoolArgs, Query, Token } from "../gql/generated"

export interface GqlOutCommunityPool {
  communityPool?: Query["communityPool"]
}

export const communityPoolQueryString = (
  args: QueryCommunityPoolArgs,
  excludeParentObject: boolean,
  fields?: Partial<Token>
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
  args: QueryCommunityPoolArgs,
  endpt: string,
  fields?: Partial<Token>
): Promise<GqlOutCommunityPool> =>
  doGqlQuery(communityPoolQueryString(args, false, fields), endpt)
