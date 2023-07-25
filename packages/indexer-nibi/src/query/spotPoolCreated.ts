import { defaultSpotPool } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  QuerySpotPoolCreatedArgs,
  SpotPoolCreated,
  SpotPoolCreatedOrder,
} from "../gql/generated"

export const defaultSpotPoolCreatedObject: SpotPoolCreated = defaultSpotPool

export interface GqlOutSpotPoolCreated {
  spotPoolCreated?: Query["spotPoolCreated"]
}

export const spotPoolCreated = async (
  args: QuerySpotPoolCreatedArgs,
  endpt: string
): Promise<GqlOutSpotPoolCreated> => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = SpotPoolCreatedOrder.PoolId

  return doGqlQuery(
    gqlQuery(
      "spotPoolCreated",
      args,
      convertObjectToPropertiesString(defaultSpotPoolCreatedObject)
    ),
    endpt
  )
}
