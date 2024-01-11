import { defaultDistributionCommission } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  GQLQuery,
  GQLQueryGqlDistributionCommissionsArgs,
  GQLDistributionCommissionOrder,
  GQLDistributionCommission,
} from "../gql/generated"

export interface GqlOutDistributionCommissions {
  distributionCommissions?: GQLQuery["distributionCommissions"]
}

export const distributionCommissionsQueryString = (
  args: GQLQueryGqlDistributionCommissionsArgs,
  excludeParentObject: boolean,
  fields?: Partial<GQLDistributionCommission>
) => {
  if (!args.limit) args.limit = 100
  if (!args.order_desc) args.order_desc = true
  if (!args.order_by)
    args.order_by = GQLDistributionCommissionOrder.GQLValidatorAddress

  return gqlQuery(
    "distributionCommissions",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultDistributionCommission),
    excludeParentObject
  )
}

export const distributionCommissions = async (
  args: GQLQueryGqlDistributionCommissionsArgs,
  endpt: string,
  fields?: Partial<GQLDistributionCommission>
): Promise<GqlOutDistributionCommissions> =>
  doGqlQuery(distributionCommissionsQueryString(args, false, fields), endpt)
