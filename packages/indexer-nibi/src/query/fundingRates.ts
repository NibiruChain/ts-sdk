import { getWhereArgArr } from "../utils"
import { doGqlQuery, arg } from "../gql"
import {
  FundingRatesOrder,
  QueryExt,
  QueryExtFundingRatesArgs,
} from "../gql/generated"

export interface GqlOutFundingRate {
  fundingRates: QueryExt["fundingRates"]
}

export const fundingRates = async (
  args: QueryExtFundingRatesArgs,
  endpt: string
): Promise<GqlOutFundingRate> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = FundingRatesOrder.BlockTs

  const gqlQuery = ({
    where,
    limit,
    order,
    orderDesc,
  }: QueryExtFundingRatesArgs) => {
    const queryArgList = [
      getWhereArgArr(where),
      arg("limit", limit),
      arg("order", order),
      arg("orderDesc", orderDesc),
    ]
    const queryArgs = queryArgList.join(", ")
    return `{
        fundingRates(${queryArgs}) {
          block
          blockTs
          pair
          markPrice
          indexPrice
          latestFundingRate
          cumulativePremiumFraction
        }
      }`
  }
  return doGqlQuery(gqlQuery(args), endpt)
}
