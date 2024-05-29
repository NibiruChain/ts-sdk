import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQuery,
  GQLQueryGqlUsersArgs,
  GQLUser,
  GQLUserOrder,
  DeepPartial,
} from ".."

export interface GqlOutUsers {
  users?: GQLQuery["users"]
}

export const usersQueryString = (
  args: GQLQueryGqlUsersArgs,
  excludeParentObject: boolean,
  fields: DeepPartial<GQLUser>
) => {
  if (!args.limit) args.limit = 100
  if (!args.order_desc) args.order_desc = true
  if (!args.order_by) args.order_by = GQLUserOrder.GQLCreatedBlock

  return gqlQuery(
    "users",
    args,
    convertObjectToPropertiesString(fields),
    excludeParentObject
  )
}

export const users = async (
  args: GQLQueryGqlUsersArgs,
  endpt: string,
  fields: DeepPartial<GQLUser>
): Promise<GqlOutUsers> =>
  doGqlQuery(usersQueryString(args, false, fields), endpt)
