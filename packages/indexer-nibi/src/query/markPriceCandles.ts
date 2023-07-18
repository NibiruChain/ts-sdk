import { gqlQuery } from "../utils"
import { doGqlQuery } from "../gql"
import {
  MarkPriceCandlesOrder,
  QueryExt,
  QueryExtMarkPriceCandlesArgs,
} from "../gql/generated"

export interface GqlOutMarkPriceCandle {
  markPriceCandles: QueryExt["markPriceCandles"]
}

export const markPriceCandles = async (
  args: QueryExtMarkPriceCandlesArgs,
  endpt: string
): Promise<GqlOutMarkPriceCandle> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = MarkPriceCandlesOrder.PeriodStartTs

  return doGqlQuery(
    gqlQuery(
      "markPriceCandles",
      args,
      `pair
       open
       close
       low
       high
       period
       periodStartTs`
    ),
    endpt
  )
}
