import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  MarkPrices,
  MarkPricesOrder,
  QueryExt,
  QueryExtMarkPricesArgs,
} from "../gql/generated"

export interface GqlOutMarkPrices {
  markPrices?: QueryExt["markPrices"]
}

export const defaultMarkPricesObject: Partial<MarkPrices> = {
  block: 0,
  blockTs: "",
  pair: "",
  price: 0,
}

export const markPrices = async (
  args: QueryExtMarkPricesArgs,
  endpt: string
): Promise<GqlOutMarkPrices> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = MarkPricesOrder.BlockTs

  return doGqlQuery(
    gqlQuery(
      "markPrices",
      args,
      convertObjectToPropertiesString(defaultMarkPricesObject)
    ),
    endpt
  )
}
