import { defaultPool } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  GQLQueryGqlSpotPoolsArgs,
  GQLQuery,
  GQLSpotPool,
  GQLSpotPoolOrder,
} from "../gql/generated"

export interface GqlOutSpotPools {
  spotPools?: GQLQuery["spotPools"]
}

export const spotPoolsQueryString = (
  args: GQLQueryGqlSpotPoolsArgs,
  excludeParentObject: boolean,
  fields?: Partial<GQLSpotPool>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = GQLSpotPoolOrder.GQLPoolId

  return gqlQuery(
    "spotPools",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultPool),
    excludeParentObject
  )
}

export const spotPools = async (
  args: GQLQueryGqlSpotPoolsArgs,
  endpt: string,
  fields?: Partial<GQLSpotPool>
): Promise<GqlOutSpotPools> =>
  doGqlQuery(spotPoolsQueryString(args, false, fields), endpt)
