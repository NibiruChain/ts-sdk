import {
  defaultTwitterUser,
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLUpdateTwitterUserInput,
  GQLMutation,
  GQLMarketingMutation,
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
  fields?: Partial<GQLMarketingMutation>
) =>
  gqlQuery(
    "marketing",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultTwitterUser),
    excludeParentObject,
    true
  )

export const marketingMutation = async (
  args: Partial<MutationMarketingArgs>,
  endpt: string,
  fields?: Partial<GQLMarketingMutation>
): Promise<GqlOutMarketingMutation> =>
  doGqlQuery(marketingMutationString(args, false, fields), endpt)
