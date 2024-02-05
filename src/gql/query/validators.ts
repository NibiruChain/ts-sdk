import {
  defaultValidator,
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQuery,
  GQLQueryGqlValidatorsArgs,
  GQLValidator,
  GQLValidatorOrder,
} from ".."

export interface GqlOutValidators {
  validators?: GQLQuery["validators"]
}

export const validatorsQueryString = (
  args: GQLQueryGqlValidatorsArgs,
  excludeParentObject: boolean,
  fields?: Partial<GQLValidator>
) => {
  if (!args.limit) args.limit = 100
  if (args.order_desc === undefined) args.order_desc = true
  if (!args.order_by) args.order_by = GQLValidatorOrder.GQLOperatorAddress

  return gqlQuery(
    "validators",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultValidator),
    excludeParentObject
  )
}

export const validators = async (
  args: GQLQueryGqlValidatorsArgs,
  endpt: string,
  fields?: Partial<GQLValidator>
): Promise<GqlOutValidators> =>
  doGqlQuery(validatorsQueryString(args, false, fields), endpt)
