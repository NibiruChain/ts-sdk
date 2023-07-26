import { defaultToken } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  QueryCommunityPoolArgs,
  Query,
  CommunityPoolToken,
} from "../gql/generated"

export const defaultCommunityPoolObject: CommunityPoolToken = defaultToken

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
