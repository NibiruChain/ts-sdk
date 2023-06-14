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

/** GqlOutPerpLeaderboard: Output response for the PerpLeaderboard query  */
export interface GqlOutPerpLeaderboard {
  perpLeaderboard: PerpLeaderboard[]
}

export const perpLeaderboard = async (endpt: string): Promise<GqlOutPerpLeaderboard> =>
  doGqlQuery(
    `{
      perpLeaderboard {
        traderAddress
        percentagePnl
        rawPnl
        inputMargin
        lastUpdatedBlock
        lastUpdatedBlockTs
      }
    }`,
    endpt,
  )
