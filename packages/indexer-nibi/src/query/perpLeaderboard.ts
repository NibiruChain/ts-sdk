import { doGqlQuery } from "../gql"

// ------------------------------------------------
// PerpLeaderboard
// ------------------------------------------------

/**
 * PerpLeaderboard: Get Perp Leaderboard data
 */
export interface PerpLeaderboard {
  traderAddress: string
  percentagePnl: number
  rawPnl: number
  inputMargin: number
  lastUpdatedBlock: number
  lastUpdatedBlockTs: Date
}
/** GqlInPerpLeaderboard: Optional input arguments for the PerpLeaderboard query  */
export interface GqlInPerpLeaderboard {
  address: string
}

/** GqlOutPerpLeaderboard: Output response for the PerpLeaderboard query  */
export interface GqlOutPerpLeaderboard {
  perpLeaderboard: PerpLeaderboard[]
}

export const perpLeaderboard = async (
  endpt: string,
  args?: GqlInPerpLeaderboard,
): Promise<GqlOutPerpLeaderboard> =>
  doGqlQuery(
    `{
      perpLeaderboard ${args?.address ? `(traderAddress: "${args.address}")` : ""} {
        traderAddress
        percentagePnl
        rawPnl
        inputMargin
      }
    }`,
    endpt,
  )
