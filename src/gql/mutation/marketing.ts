import {
  defaultTwitterUser,
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLMutation,
  GQLTwitterUser,
  GQLMarketingMutationGqlUpdateTwitterUserArgs,
} from ".."

export interface GqlOutMarketingMutation {
  marketing?: GQLMutation["marketing"]
}

export const marketingMutationString = (
  args: Partial<GQLMarketingMutationGqlUpdateTwitterUserArgs>,
  excludeParentObject: boolean,
  fields?: Partial<GQLTwitterUser>
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
  args: Partial<GQLMarketingMutationGqlUpdateTwitterUserArgs>,
  endpt: string,
  headers: HeadersInit,
  fields?: Partial<GQLTwitterUser>
): Promise<GqlOutMarketingMutation> =>
  doGqlQuery(marketingMutationString(args, true, fields), endpt, headers)
