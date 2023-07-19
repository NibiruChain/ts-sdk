import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  MarkPriceCandles,
  MarkPriceCandlesOrder,
  QueryExt,
  QueryExtMarkPriceCandlesArgs,
} from "../gql/generated"

export const defaultMarkPriceCandlesObject: Partial<MarkPriceCandles> = {
  pair: "",
  open: 0,
  close: 0,
  low: 0,
  high: 0,
  period: 0,
  periodStartTs: "",
}

export interface GqlOutMarkPriceCandles {
  markPriceCandles?: QueryExt["markPriceCandles"]
}

export const markPriceCandles = async (
  args: QueryExtMarkPriceCandlesArgs,
  endpt: string
): Promise<GqlOutMarkPriceCandles> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = MarkPriceCandlesOrder.PeriodStartTs

  return doGqlQuery(
    gqlQuery(
      "markPriceCandles",
      args,
      convertObjectToPropertiesString(defaultMarkPriceCandlesObject)
    ),
    endpt
  )
}
