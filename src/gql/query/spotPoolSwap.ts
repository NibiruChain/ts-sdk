import {
  defaultSpotPoolSwap,
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQuery,
  GQLQueryGqlSpotPoolSwapArgs,
  GQLSpotPoolSwap,
  GQLSpotPoolSwapOrder,
  DeepPartial,
} from ".."

export interface GqlOutSpotPoolSwap {
  spotPoolSwap?: GQLQuery["spotPoolSwap"]
}

export const spotPoolSwapQueryString = (
  args: GQLQueryGqlSpotPoolSwapArgs,
  excludeParentObject: boolean,
  fields?: DeepPartial<GQLSpotPoolSwap>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = GQLSpotPoolSwapOrder.GQLBlock

  return gqlQuery(
    "spotPoolSwap",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultSpotPoolSwap),
    excludeParentObject
  )
}

export const spotPoolSwap = async (
  args: GQLQueryGqlSpotPoolSwapArgs,
  endpt: string,
  fields?: DeepPartial<GQLSpotPoolSwap>
): Promise<GqlOutSpotPoolSwap> =>
  doGqlQuery(spotPoolSwapQueryString(args, false, fields), endpt)
