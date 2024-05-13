import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQuery,
  DeepPartial,
  GQLProxies,
} from ".."

export interface GqlOutProxies {
  proxies?: GQLQuery["proxies"]
}

export const proxiesQueryString = (
  excludeParentObject: boolean,
  fields: DeepPartial<GQLProxies>
) =>
  gqlQuery(
    "proxies",
    {},
    convertObjectToPropertiesString(fields),
    excludeParentObject
  )

export const proxies = async (
  endpt: string,
  fields: DeepPartial<GQLProxies>
): Promise<GqlOutProxies> =>
  doGqlQuery(proxiesQueryString(false, fields), endpt)
