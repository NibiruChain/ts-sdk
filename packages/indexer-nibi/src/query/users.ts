import { defaultUser } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import { Query, QueryUsersArgs, User, UserOrder } from "../gql/generated"

export const defaultUserObject: User = defaultUser

export interface GqlOutUsers {
  users?: Query["users"]
}

export const usersQueryString = (
  args: QueryUsersArgs,
  excludeParentObject: boolean,
  fields?: Partial<User>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = UserOrder.CreatedBlock

  return gqlQuery(
    "users",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultUserObject),
    excludeParentObject
  )
}

export const users = async (
  args: QueryUsersArgs,
  endpt: string,
  fields?: Partial<User>
): Promise<GqlOutUsers> =>
  doGqlQuery(usersQueryString(args, false, fields), endpt)
