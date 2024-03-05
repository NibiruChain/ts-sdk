import {
  defaultTwitterUser,
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLMutation,
  GQLTwitterUser,
  GQLMarketingMutationGqlUpdateTwitterUserArgs,
  DeepPartial,
} from ".."

export interface GqlOutMarketingMutation {
  marketing?: GQLMutation["marketing"]
}

export const marketingMutationString = (
  args: GQLMarketingMutationGqlUpdateTwitterUserArgs,
  excludeParentObject: boolean,
  fields?: DeepPartial<GQLTwitterUser>
) =>
  `mutation {
    marketing {
      ${gqlQuery(
        "updateTwitterUser",
        args,
        fields
          ? convertObjectToPropertiesString(fields)
          : convertObjectToPropertiesString(defaultTwitterUser),
        excludeParentObject
      )}
    }
  }`

export const marketingMutation = async (
  args: GQLMarketingMutationGqlUpdateTwitterUserArgs,
  endpt: string,
  headers: HeadersInit,
  fields?: DeepPartial<GQLTwitterUser>
): Promise<GqlOutMarketingMutation> =>
  doGqlQuery(marketingMutationString(args, true, fields), endpt, headers)
