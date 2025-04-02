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
  fields: DeepPartial<GQLProxies>,
  domainName?: string
) => {
  const proxiesQuery: string[] = []

  if (fields.bybit) {
    proxiesQuery.push(
      gqlQuery("bybit", {}, convertObjectToPropertiesString(fields.bybit), true)
    )
  }

  if (fields.unstoppableDomains) {
    proxiesQuery.push(
      gqlQuery(
        "unstoppableDomains",
        { domainName },
        convertObjectToPropertiesString(fields.unstoppableDomains),
        true
      )
    )
  }

  return `{
    proxies {
      ${proxiesQuery.join("\n")}
    }
  }`
}

export const proxies = async (
  endpt: string,
  fields: DeepPartial<GQLProxies>,
  domainName?: string
): Promise<GqlOutProxies> =>
  doGqlQuery(proxiesQueryString(fields, domainName), endpt)
