import {
  defaultBlock,
  defaultPool,
  defaultToken,
  defaultUser,
} from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  QuerySpotPoolSwapArgs,
  SpotPoolSwap,
  SpotPoolSwapOrder,
} from "../gql/generated"

export const defaultSpotPoolSwapObject: SpotPoolSwap = {
  block: defaultBlock,
  pool: defaultPool,
  token_in: defaultToken,
  token_out: defaultToken,
  user: defaultUser,
}

export interface GqlOutSpotPoolSwap {
  spotPoolSwap?: Query["spotPoolSwap"]
}

export const spotPoolSwap = async (
  args: QuerySpotPoolSwapArgs,
  endpt: string
): Promise<GqlOutSpotPoolSwap> => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = SpotPoolSwapOrder.Block

  return doGqlQuery(
    gqlQuery(
      "spotPoolSwap",
      args,
      convertObjectToPropertiesString(defaultSpotPoolSwapObject)
    ),
    endpt
  )
}
