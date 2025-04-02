import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQuery,
  GQLUser,
  DeepPartial,
  GQLQueryGqlUserArgs,
} from ".."

export interface GqlOutUser {
  user?: GQLQuery["user"]
}

export const userQueryString = (
  args: GQLQueryGqlUserArgs,
  excludeParentObject: boolean,
  fields: DeepPartial<GQLUser>
) =>
  gqlQuery(
    "user",
    args,
    convertObjectToPropertiesString(fields),
    excludeParentObject
  )

export const user = async (
  args: GQLQueryGqlUserArgs,
  endpt: string,
  fields: DeepPartial<GQLUser>
): Promise<GqlOutUser> =>
  doGqlQuery(userQueryString(args, false, fields), endpt)
