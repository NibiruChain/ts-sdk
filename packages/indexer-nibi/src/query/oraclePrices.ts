import { doGqlQuery, arg } from "../gql"

// ------------------------------------------------
// OraclePrice
// ------------------------------------------------

/**
 * OraclePrice: A single oracle price data.
 */
export interface OraclePrice {
  block: number
  blockTs: string
  pair: string
  price: number
}

/** GqlOutOraclePrice: Output response for the OraclePrice query  */
export interface GqlOutOraclePrice {
  oraclePrices: OraclePrice[]
}

/** GqlInOraclePrice: Input arguments for the OraclePrice query  */
export interface GqlInOraclePrice {
  pair: string
  limit: number
  block?: string
  startTs?: string
  endTs?: string
  orderBy?: OraclePriceOrderBy | string
  orderDescending?: boolean // defaults to true
}

export enum OraclePriceOrderBy {
  block = "block",
  block_ts = "block_ts",
}

export const oraclePrices = async (
  args: GqlInOraclePrice,
  endpt: string
): Promise<GqlOutOraclePrice> => {
  if (args.orderDescending === undefined) args.orderDescending = true
  if (args.orderBy === undefined) args.orderBy = OraclePriceOrderBy.block_ts

  const gqlQuery = ({
    pair,
    block,
    startTs,
    endTs,
    limit,
    orderBy,
    orderDescending,
  }: GqlInOraclePrice): string => {
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
        oraclePrices(${queryArgs}) {
          block
          blockTs
          pair
          price
        }
      }`
  }
  return doGqlQuery(gqlQuery(args), endpt)
}
