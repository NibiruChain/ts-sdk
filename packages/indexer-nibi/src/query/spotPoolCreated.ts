import { defaultSpotPool } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  QuerySpotPoolCreatedArgs,
  SpotPoolCreated,
  SpotPoolCreatedOrder,
} from "../gql/generated"

export interface GqlOutSpotPoolCreated {
  spotPoolCreated?: Query["spotPoolCreated"]
}

export const spotPoolCreatedQueryString = (
  args: QuerySpotPoolCreatedArgs,
  excludeParentObject: boolean,
  fields?: Partial<SpotPoolCreated>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = SpotPoolCreatedOrder.PoolId

  return gqlQuery(
    "spotPoolCreated",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultSpotPool),
    excludeParentObject
  )
}

export const spotPoolCreated = async (
  args: QuerySpotPoolCreatedArgs,
  endpt: string,
  fields?: Partial<SpotPoolCreated>
): Promise<GqlOutSpotPoolCreated> =>
  doGqlQuery(spotPoolCreatedQueryString(args, false, fields), endpt)
