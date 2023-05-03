import { doGqlQuery, arg } from "../gql"

// ------------------------------------------------
// Position
// ------------------------------------------------

/**
 * Position: A single position data.
 */
export interface Position {
  pair: string
  block: number
  blockTs: string
  trader: string
  size: number
  margin: number
  openNotional: number
  positionNotional: number
  unrealizedPnl: number
  marginRatioMark: number
  marginRatioIndex: number
  openBlock: number
}

/** GqlOutPosition: Output response for the Position query  */
export interface GqlOutPosition {
  positions: Position[]
}

/** GqlInPosition: Input arguments for the Position query  */
export interface GqlInPosition {
  pair: string
  limit: number
  startTs?: string
  endTs?: string
  trader?: string
  orderBy?: PositionOrderBy | string
  orderDescending?: boolean // defaults to true
}

export enum PositionOrderBy {
  block = "block",
  block_ts = "block_ts",
}

export const positions = async (
  args: GqlInPosition,
  endpt: string,
): Promise<GqlOutPosition> => {
  if (args.orderDescending === undefined) args.orderDescending = true
  if (args.orderBy === undefined) args.orderBy = PositionOrderBy.block

  const gqlQuery = ({
    pair,
    trader,
    startTs,
    endTs,
    limit,
    orderBy,
    orderDescending,
  }: GqlInPosition): string => {
    const argWhere = (): string => {
      const whereConditions: string[] = []
      whereConditions.push(`pairEq: "${pair}"`)
      if (trader) whereConditions.push(`traderEq: "${trader}"`)
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
        positions(${queryArgs}) {
          block
          blockTs
          pair
          trader
          size
          margin
          openNotional
          positionNotional
          unrealizedPnl
          marginRatioMark
          marginRatioIndex
          openBlock
        }
      }`
  }
  return doGqlQuery(gqlQuery(args), endpt)
}
