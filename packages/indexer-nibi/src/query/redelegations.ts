import { defaultRedelegations } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  QueryRedelegationsArgs,
  Redelegation,
  RedelegationOrder,
} from "../gql/generated"

export interface GqlOutRedelegations {
  redelegations?: Query["redelegations"]
}

export const redelegationsQueryString = (
  args: QueryRedelegationsArgs,
  excludeParentObject: boolean,
  fields?: Partial<Redelegation>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = RedelegationOrder.CreationHeight

  return gqlQuery(
    "redelegations",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultRedelegations),
    excludeParentObject
  )
}

export const redelegations = async (
  args: QueryRedelegationsArgs,
  endpt: string,
  fields?: Partial<Redelegation>
): Promise<GqlOutRedelegations> =>
  doGqlQuery(redelegationsQueryString(args, false, fields), endpt)
