import { defaultUnbondings } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  QueryUnbondingsArgs,
  Unbonding,
  UnbondingOrder,
} from "../gql/generated"

export interface GqlOutUnbondings {
  unbondings?: Query["unbondings"]
}

export const unbondingsQueryString = (
  args: QueryUnbondingsArgs,
  excludeParentObject: boolean,
  fields?: Partial<Unbonding>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = UnbondingOrder.CreationHeight

  return gqlQuery(
    "unbondings",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultUnbondings),
    excludeParentObject
  )
}

export const unbondings = async (
  args: QueryUnbondingsArgs,
  endpt: string,
  fields?: Partial<Unbonding>
): Promise<GqlOutUnbondings> =>
  doGqlQuery(unbondingsQueryString(args, false, fields), endpt)
