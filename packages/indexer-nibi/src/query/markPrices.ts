import { doGqlQuery, arg } from "../gql"

// ------------------------------------------------
// MarkPrice
// ------------------------------------------------

/**
 * MarkPrice: A single mark price data.
 */
export interface MarkPrice {
  block: number
  blockTs: string
  pair: string
  price: number
}

/** GqlOutMarkPrice: Output response for the MarkPrice query  */
export interface GqlOutMarkPrice {
  markPrices: MarkPrice[]
}

/** GqlInMarkPrice: Input arguments for the MarkPrice query  */
export interface GqlInMarkPrice {
  pair: string
  limit: number
  block?: string
  startTs?: string
  endTs?: string
  orderBy?: MarkPriceOrderBy | string
  orderDescending?: boolean // defaults to true
}

export enum MarkPriceOrderBy {
  block = "block",
  block_ts = "block_ts",
  pair = "pair",
  price = "price",
}

export const markPrices = async (
  args: GqlInMarkPrice,
  endpt: string,
): Promise<GqlOutMarkPrice> => {
  if (args.orderDescending === undefined) args.orderDescending = true
  if (args.orderBy === undefined) args.orderBy = MarkPriceOrderBy.block_ts

  const gqlQuery = ({
    pair,
    block,
    startTs,
    endTs,
    limit,
    orderBy,
    orderDescending,
  }: GqlInMarkPrice): string => {
    const argWhere = (): string => {
      const whereConditions: string[] = []
      whereConditions.push(`pairEq: "${pair}"`)
      if (block) whereConditions.push(`blockEq: "${block}"`)
      if (startTs) whereConditions.push(`blockTsGte: "${startTs}"`)
      if (endTs) whereConditions.push(`blockTsLt: "${endTs}"`)
      const argWhereBody: string = whereConditions.join(", ")
      return `where: { ${argWhereBody} }`
    }

    const queryArgList: string[] = [
      argWhere(),
      arg("limit", limit),
      arg("order", orderBy),
      arg("orderDesc", orderDescending),
    ]
    const queryArgs: string = queryArgList.join(", ")
    return `{
        markPrices(${queryArgs}) {
          block
          blockTs
          pair
          price
        }
      }`
  }
  return doGqlQuery(gqlQuery(args), endpt)
}
