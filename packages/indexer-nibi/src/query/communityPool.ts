import { defaultToken } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import { QueryCommunityPoolArgs, Query, FloatToken } from "../gql/generated"

export const defaultCommunityPoolObject: FloatToken = defaultToken

export interface GqlOutCommunityPool {
  communityPool?: Query["communityPool"]
}

export const communityPool = async (
  args: QueryCommunityPoolArgs,
  endpt: string
): Promise<GqlOutCommunityPool> =>
  doGqlQuery(
    gqlQuery(
      "communityPool",
      args,
      convertObjectToPropertiesString(defaultCommunityPoolObject)
    ),
    endpt
  )
