import { defaultValidator } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  QueryValidatorsArgs,
  Validator,
  ValidatorOrder,
} from "../gql/generated"

export const defaultValidatorsObject: Validator = defaultValidator

export interface GqlOutValidators {
  validators?: Query["validators"]
}

export const validators = async (
  args: QueryValidatorsArgs,
  endpt: string
): Promise<GqlOutValidators> => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = ValidatorOrder.OperatorAddress

  return doGqlQuery(
    gqlQuery(
      "validators",
      args,
      convertObjectToPropertiesString(defaultValidatorsObject)
    ),
    endpt
  )
}
