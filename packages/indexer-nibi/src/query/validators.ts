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

export const validatorsQueryString = (
  args: QueryValidatorsArgs,
  excludeParentObject: boolean,
  fields?: Partial<Validator>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = ValidatorOrder.OperatorAddress

  return gqlQuery(
    "validators",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultValidatorsObject),
    excludeParentObject
  )
}

export const validators = async (
  args: QueryValidatorsArgs,
  endpt: string,
  fields?: Partial<Validator>
): Promise<GqlOutValidators> =>
  doGqlQuery(validatorsQueryString(args, false, fields), endpt)
