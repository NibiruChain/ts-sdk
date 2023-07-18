import { gqlQuery } from "../utils"
import { doGqlQuery } from "../gql"
import {
  MarkPricesOrder,
  QueryExt,
  QueryExtMarkPricesArgs,
} from "../gql/generated"

export interface GqlOutMarkPrice {
  markPrices: QueryExt["markPrices"]
}

export const markPrices = async (
  args: QueryExtMarkPricesArgs,
  endpt: string
): Promise<GqlOutMarkPrice> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = MarkPricesOrder.BlockTs

  return doGqlQuery(
    gqlQuery(
      "markPrices",
      args,
      `block
       blockTs
       pair
       price`
    ),
    endpt
  )
}
