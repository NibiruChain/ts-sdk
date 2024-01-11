import { defaultSpotPoolSwap } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  GQLQuery,
  GQLQueryGqlSpotPoolSwapArgs,
  GQLSpotPoolSwap,
  GQLSpotPoolSwapOrder,
} from "../gql/generated"

export interface GqlOutSpotPoolSwap {
  spotPoolSwap?: GQLQuery["spotPoolSwap"]
}

export const spotPoolSwapQueryString = (
  args: GQLQueryGqlSpotPoolSwapArgs,
  excludeParentObject: boolean,
  fields?: Partial<GQLSpotPoolSwap>
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
  fields?: Partial<GQLSpotPoolSwap>
): Promise<GqlOutSpotPoolSwap> =>
  doGqlQuery(spotPoolSwapQueryString(args, false, fields), endpt)
