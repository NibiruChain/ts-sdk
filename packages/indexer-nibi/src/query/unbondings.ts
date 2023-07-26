import {
  defaultBlock,
  defaultDelegator,
  defaultValidator,
} from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  QueryUnbondingsArgs,
  Unbonding,
  UnbondingOrder,
} from "../gql/generated"

export const defaultUnbondingsObject: Unbonding = {
  amount: 0,
  completion_time: "",
  creation_block: defaultBlock,
  delegator: defaultDelegator,
  validator: defaultValidator,
}

export interface GqlOutUnbondings {
  unbondings?: Query["unbondings"]
}

export const unbondings = async (
  args: QueryUnbondingsArgs,
  endpt: string
): Promise<GqlOutUnbondings> => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = UnbondingOrder.CreationHeight

  return doGqlQuery(
    gqlQuery(
      "unbondings",
      args,
      convertObjectToPropertiesString(defaultUnbondingsObject)
    ),
    endpt
  )
}
