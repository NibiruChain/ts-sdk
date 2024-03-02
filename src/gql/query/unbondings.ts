import {
  defaultUnbondings,
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQuery,
  GQLQueryGqlUnbondingsArgs,
  GQLUnbonding,
  GQLUnbondingOrder,
  DeepPartial,
} from ".."

export interface GqlOutUnbondings {
  unbondings?: GQLQuery["unbondings"]
}

export const unbondingsQueryString = (
  args: GQLQueryGqlUnbondingsArgs,
  excludeParentObject: boolean,
  fields?: DeepPartial<GQLUnbonding>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = GQLUnbondingOrder.GQLCreationHeight

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
  args: GQLQueryGqlUnbondingsArgs,
  endpt: string,
  fields?: DeepPartial<GQLUnbonding>
): Promise<GqlOutUnbondings> =>
  doGqlQuery(unbondingsQueryString(args, false, fields), endpt)
