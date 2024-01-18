import { defaultMarkPriceCandles } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  GQLQueryGqlMarkPriceCandlesArgs,
  GQLQuery,
  GQLMarkPriceCandle,
} from "../gql/generated"

export interface GqlOutMarkPriceCandles {
  markPriceCandles?: GQLQuery["markPriceCandles"]
}

export const markPriceCandlesQueryString = (
  args: GQLQueryGqlMarkPriceCandlesArgs,
  excludeParentObject: boolean,
  fields?: Partial<GQLMarkPriceCandle>
) =>
  gqlQuery(
    "markPriceCandles",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultMarkPriceCandles),
    excludeParentObject
  )

export const markPriceCandles = async (
  args: GQLQueryGqlMarkPriceCandlesArgs,
  endpt: string,
  fields?: Partial<GQLMarkPriceCandle>
): Promise<GqlOutMarkPriceCandles> =>
  doGqlQuery(markPriceCandlesQueryString(args, false, fields), endpt)
