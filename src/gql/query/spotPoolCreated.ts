import { defaultSpotPool } from "../utils/defaultObjects"
import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
} from "../utils/consts"
import {
  GQLQuery,
  GQLQueryGqlSpotPoolCreatedArgs,
  GQLSpotPoolCreated,
  GQLSpotPoolCreatedOrder,
} from "../utils/generated"

export interface GqlOutSpotPoolCreated {
  spotPoolCreated?: GQLQuery["spotPoolCreated"]
}

export const spotPoolCreatedQueryString = (
  args: GQLQueryGqlSpotPoolCreatedArgs,
  excludeParentObject: boolean,
  fields?: Partial<GQLSpotPoolCreated>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = GQLSpotPoolCreatedOrder.GQLPoolId

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
  args: GQLQueryGqlSpotPoolCreatedArgs,
  endpt: string,
  fields?: Partial<GQLSpotPoolCreated>
): Promise<GqlOutSpotPoolCreated> =>
  doGqlQuery(spotPoolCreatedQueryString(args, false, fields), endpt)
