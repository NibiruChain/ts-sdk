import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  QueryExt,
  QueryExtUnbondingsArgs,
  Unbondings,
  UnbondingsOrder,
} from "../gql/generated"

export const defaultUnbondingsObject: Partial<Unbondings> = {
  block: "",
  blockTs: "",
  validatorAddress: "",
  delegatorAddress: "",
  creationHeight: "",
  completionTime: "",
  initialBalance: "",
  balance: "",
}

export interface GqlOutUnbondings {
  unbondings?: QueryExt["unbondings"]
}

export const unbondings = async (
  args: QueryExtUnbondingsArgs,
  endpt: string
): Promise<GqlOutUnbondings> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = UnbondingsOrder.Block

  return doGqlQuery(
    gqlQuery(
      "unbondings",
      args,
      convertObjectToPropertiesString(defaultUnbondingsObject)
    ),
    endpt
  )
}
