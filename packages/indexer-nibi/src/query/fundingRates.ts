import { doGqlQuery, gqlQuery, convertObjectToPropertiesString } from "../gql"
import {
  FundingRates,
  FundingRatesOrder,
  QueryExt,
  QueryExtFundingRatesArgs,
} from "../gql/generated"

export const defaultFundingRatesObject: Partial<FundingRates> = {
  block: 0,
  blockTs: "",
  pair: "",
  markPrice: 0,
  indexPrice: 0,
  latestFundingRate: 0,
  cumulativePremiumFraction: 0,
}

export interface GqlOutFundingRates {
  fundingRates?: QueryExt["fundingRates"]
}

export const fundingRates = async (
  args: QueryExtFundingRatesArgs,
  endpt: string
): Promise<GqlOutFundingRates> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = FundingRatesOrder.BlockTs

  return doGqlQuery(
    gqlQuery(
      "fundingRates",
      args,
      convertObjectToPropertiesString(defaultFundingRatesObject)
    ),
    endpt
  )
}
