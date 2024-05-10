import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQuery,
  GQLQueryGqlDistributionCommissionsArgs,
  GQLDistributionCommissionOrder,
  GQLDistributionCommission,
  DeepPartial,
} from ".."

export interface GqlOutDistributionCommissions {
  distributionCommissions?: GQLQuery["distributionCommissions"]
}

export const distributionCommissionsQueryString = (
  args: GQLQueryGqlDistributionCommissionsArgs,
  excludeParentObject: boolean,
  fields: DeepPartial<GQLDistributionCommission>
) => {
  if (!args.limit) args.limit = 100
  if (!args.order_desc) args.order_desc = true
  if (!args.order_by)
    args.order_by = GQLDistributionCommissionOrder.GQLValidatorAddress

  return gqlQuery(
    "distributionCommissions",
    args,
    convertObjectToPropertiesString(fields),
    excludeParentObject
  )
}

export const distributionCommissions = async (
  args: GQLQueryGqlDistributionCommissionsArgs,
  endpt: string,
  fields: DeepPartial<GQLDistributionCommission>
): Promise<GqlOutDistributionCommissions> =>
  doGqlQuery(distributionCommissionsQueryString(args, false, fields), endpt)
