import { defaultMarkPriceCandlesObject } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  QueryMarkPriceCandlesArgs,
  Query,
  MarkPriceCandle,
} from "../gql/generated"

export interface GqlOutMarkPriceCandles {
  markPriceCandles?: Query["markPriceCandles"]
}

export const markPriceCandlesQueryString = (
  args: QueryMarkPriceCandlesArgs,
  excludeParentObject: boolean,
  fields?: Partial<MarkPriceCandle>
) =>
  gqlQuery(
    "markPriceCandles",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultMarkPriceCandlesObject),
    excludeParentObject
  )

export const markPriceCandles = async (
  args: QueryMarkPriceCandlesArgs,
  endpt: string,
  fields?: Partial<MarkPriceCandle>
): Promise<GqlOutMarkPriceCandles> =>
  doGqlQuery(markPriceCandlesQueryString(args, false, fields), endpt)
