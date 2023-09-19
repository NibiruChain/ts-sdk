import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  QueryPerpLeaderboardArgs,
  Query,
  PerpLeaderboard,
} from "../gql/generated"

export const defaultPerpLeaderboardObject: PerpLeaderboard = {
  avg_pct_pnl: 0,
  input_margin: 0,
  raw_pnl: 0,
  raw_pnl_with_unrealized: 0,
  trader_address: "",
}

export interface GqlOutPerpLeaderboard {
  perpLeaderboard?: Query["perpLeaderboard"]
}

export const perpLeaderboardQueryString = (
  args: QueryPerpLeaderboardArgs,
  excludeParentObject: boolean,
  fields?: Partial<PerpLeaderboard>
) =>
  gqlQuery(
    "perpLeaderboard",
    args,
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultPerpLeaderboardObject),
    excludeParentObject
  )

export const perpLeaderboard = async (
  args: QueryPerpLeaderboardArgs,
  endpt: string,
  fields?: Partial<PerpLeaderboard>
): Promise<GqlOutPerpLeaderboard> =>
  doGqlQuery(perpLeaderboardQueryString(args, false, fields), endpt)
