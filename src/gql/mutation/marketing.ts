import {
  defaultTwitterUser,
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLUpdateTwitterUserInput,
  GQLMutation,
  GQLTwitterUser,
} from ".."

export type MutationMarketingArgs = {
  updateTwitterUser: GQLUpdateTwitterUserInput
}

export interface GqlOutMarketingMutation {
  marketing?: GQLMutation["marketing"]
}

export const marketingMutationString = (
  args: Partial<MutationMarketingArgs>,
  excludeParentObject: boolean,
  fields?: Partial<GQLTwitterUser>
) =>
  `{
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
  args: Partial<MutationMarketingArgs>,
  endpt: string,
  authorizationHeader: HeadersInit,
  fields?: Partial<GQLTwitterUser>
): Promise<GqlOutMarketingMutation> =>
  doGqlQuery(
    marketingMutationString(args, true, fields),
    endpt,
    authorizationHeader,
    true
  )
