import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  QueryMarkPriceCandlesArgs,
  Query,
  MarkPriceCandle,
} from "../gql/generated"

export const defaultMarkPriceCandlesObject: MarkPriceCandle = {
  close: 0,
  high: 0,
  low: 0,
  open: 0,
  pair: "",
  period: 0,
  periodStartTs: "",
}

export interface GqlOutMarkPriceCandles {
  markPriceCandles?: Query["markPriceCandles"]
}

export const markPriceCandles = async (
  args: QueryMarkPriceCandlesArgs,
  endpt: string,
  fields?: Partial<MarkPriceCandle>
): Promise<GqlOutMarkPriceCandles> =>
  doGqlQuery(
    gqlQuery(
      "markPriceCandles",
      args,
      fields
        ? convertObjectToPropertiesString(fields)
        : convertObjectToPropertiesString(defaultMarkPriceCandlesObject)
    ),
    endpt
  )
