import {
  defaultTwitterUser,
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLMutation,
  GQLTwitterUser,
  GQLMarketingMutationGqlUpdateTwitterUserArgs,
  DeepPartial,
  GQLMarketingMutationGqlLinkAccountsArgs,
  GQLAccountLinksInfo,
  defaultAccountLinksInfo,
} from ".."

export type QueryMarketingMutationArgs = {
  updateTwitterUser?: GQLMarketingMutationGqlUpdateTwitterUserArgs
  linkAccounts?: GQLMarketingMutationGqlLinkAccountsArgs
}

export interface GqlOutMarketingMutation {
  marketing?: GQLMutation["marketing"]
}

export type GQLMarketingMutationFields = DeepPartial<{
  updateTwitterUser?: DeepPartial<GQLTwitterUser>
  linkAccounts?: DeepPartial<GQLAccountLinksInfo>
}>

export const marketingMutationString = (
  args: QueryMarketingMutationArgs,
  excludeParentObject: boolean,
  fields?: DeepPartial<GQLMarketingMutationFields>
) => {
  const GQLMarketingMutationQuery: string[] = []

  if (fields?.updateTwitterUser) {
    GQLMarketingMutationQuery.push(
      gqlQuery(
        "updateTwitterUser",
        args.updateTwitterUser ?? {},
        convertObjectToPropertiesString(fields.updateTwitterUser),
        true
      )
    )
  }

  if (fields?.linkAccounts) {
    GQLMarketingMutationQuery.push(
      gqlQuery(
        "linkAccounts",
        args.linkAccounts ?? {},
        convertObjectToPropertiesString(fields.linkAccounts),
        true
      )
    )
  }

  // Default Objects

  if (args.updateTwitterUser && !fields?.updateTwitterUser) {
    GQLMarketingMutationQuery.push(
      gqlQuery(
        "updateTwitterUser",
        args.updateTwitterUser,
        convertObjectToPropertiesString(defaultTwitterUser),
        true
      )
    )
  }

  if (args.linkAccounts && !fields?.linkAccounts) {
    GQLMarketingMutationQuery.push(
      gqlQuery(
        "linkAccounts",
        args.linkAccounts,
        convertObjectToPropertiesString(defaultAccountLinksInfo),
        true
      )
    )
  }

  return `mutation {
    marketing {

      ${GQLMarketingMutationQuery.join("\n")}
    }
  }`
}

export const marketingMutation = async (
  args: QueryMarketingMutationArgs,
  endpt: string,
  headers: HeadersInit,
  fields?: DeepPartial<GQLMarketingMutationFields>
): Promise<GqlOutMarketingMutation> =>
  doGqlQuery(marketingMutationString(args, true, fields), endpt, headers)
