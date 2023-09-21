import { defaultToken, defaultValidator } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  QueryDistributionCommissionsArgs,
  DistributionCommissionOrder,
  DistributionCommission,
} from "../gql/generated"

export const defaultDistributionCommissionObject: DistributionCommission = {
  commission: [defaultToken],
  validator: defaultValidator,
}

export interface GqlOutDistributionCommissions {
  distributionCommissions?: Query["distributionCommissions"]
}

export const distributionCommissionsQueryString = (
  args: QueryDistributionCommissionsArgs,
  excludeParentObject: boolean,
  fields?: Partial<DistributionCommission>
) => {
  if (!args.limit) args.limit = 100
  if (!args.order_desc) args.order_desc = true
  if (!args.order_by)
    args.order_by = DistributionCommissionOrder.ValidatorAddress

  return gqlQuery(
    "distributionCommissions",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultDistributionCommissionObject),
    excludeParentObject
  )
}

export const distributionCommissions = async (
  args: QueryDistributionCommissionsArgs,
  endpt: string,
  fields?: Partial<DistributionCommission>
): Promise<GqlOutDistributionCommissions> =>
  doGqlQuery(distributionCommissionsQueryString(args, false, fields), endpt)
