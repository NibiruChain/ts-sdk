import { doGqlQuery } from "../gql"
import { QueryExt, QueryExtPerpLeaderboardArgs } from "../gql/generated"

export interface GqlOutPerpLeaderboard {
  perpLeaderboard: QueryExt["perpLeaderboard"]
}

export const perpLeaderboard = async (
  endpt: string,
  args?: QueryExtPerpLeaderboardArgs
): Promise<GqlOutPerpLeaderboard> =>
  doGqlQuery(
    `{
      perpLeaderboard ${
        args?.traderAddress ? `(traderAddress: "${args.traderAddress}")` : ""
      } {
        traderAddress
        percentagePnl
        rawPnl
        inputMargin
      }
    }`,
    endpt
  )
