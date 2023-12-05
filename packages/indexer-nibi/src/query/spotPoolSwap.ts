import { defaultSpotPoolSwap } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  QuerySpotPoolSwapArgs,
  SpotPoolSwap,
  SpotPoolSwapOrder,
} from "../gql/generated"

export interface GqlOutSpotPoolSwap {
  spotPoolSwap?: Query["spotPoolSwap"]
}

export const spotPoolSwapQueryString = (
  args: QuerySpotPoolSwapArgs,
  excludeParentObject: boolean,
  fields?: Partial<SpotPoolSwap>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = SpotPoolSwapOrder.Block

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
  args: QuerySpotPoolSwapArgs,
  endpt: string,
  fields?: Partial<SpotPoolSwap>
): Promise<GqlOutSpotPoolSwap> =>
  doGqlQuery(spotPoolSwapQueryString(args, false, fields), endpt)
