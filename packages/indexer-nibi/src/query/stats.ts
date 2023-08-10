import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  StatsFeesArgs,
  StatsFees,
  StatsPerpOpenInterest,
  StatsPerpPnl,
  StatsTotals,
  StatsTvl,
  StatsUsers,
  StatsVolume,
  StatsPerpOpenInterestArgs,
  StatsPerpPnlArgs,
  StatsTotalsArgs,
  StatsTvlArgs,
  StatsUsersArgs,
  StatsVolumeArgs,
} from "../gql/generated"

export type QueryStatsArgs = {
  fees: StatsFeesArgs
  perpOpenInterest: StatsPerpOpenInterestArgs
  perpPnl: StatsPerpPnlArgs
  totals: StatsTotalsArgs
  tvl: StatsTvlArgs
  users: StatsUsersArgs
  volume: StatsVolumeArgs
}

export const defaultStatsFeesObject: StatsFees = {
  feesLiquidations: 0,
  feesLiquidationsCumulative: 0,
  feesPerp: 0,
  feesPerpCumulative: 0,
  feesSwap: 0,
  feesSwapCumulative: 0,
  feesTotal: 0,
  feesTotalCumulative: 0,
  period: 0,
  periodStartTs: "",
}
export const defaultPerpOpenInterestObject: StatsPerpOpenInterest = {
  openInterestLong: 0,
  openInterestShort: 0,
  openInterestTotal: 0,
  period: 0,
  periodStartTs: "",
}

export const defaultPerpPnlObject: StatsPerpPnl = {
  loss: 0,
  lossCumulative: 0,
  netPnl: 0,
  netPnlCumulative: 0,
  period: 0,
  periodStartTs: "",
  profit: 0,
  profitCumulative: 0,
}

export const defaultTotalsObject: StatsTotals = {
  period: 0,
  periodStartTs: 0,
  totalPerp: 0,
  totalFeesPerp: 0,
  totalFeesLiquidations: 0,
  totalOpenInterest: 0,
  totalSwap: 0,
  totalTvl: 0,
}

export const defaultTvlObject: StatsTvl = {
  period: 0,
  periodStartTs: "",
  tvlPerp: 0,
  tvlStablecoin: 0,
  tvlStaking: 0,
  tvlSwap: 0,
  tvlTotal: 0,
}

export const defaultUsersObject: StatsUsers = {
  newUsersLp: 0,
  newUsersLpCumulative: 0,
  newUsersPerp: 0,
  newUsersPerpCumulative: 0,
  newUsersSwap: 0,
  newUsersSwapCumulative: 0,
  newUsersTotal: 0,
  newUsersTotalCumulative: 0,
  period: 0,
  periodStartTs: "",
  userActionsPerp: 0,
  uniqueUsersLp: 0,
  uniqueUsersPerp: 0,
  uniqueUsersSwap: 0,
  uniqueUsersTotal: 0,
  userActionsLp: 0,
  userActionsSwap: 0,
  userActionsTotal: 0,
}

export const defaultVolumeObject: StatsVolume = {
  volumePerp: 0,
  volumePerpCumulative: 0,
  volumeSwap: 0,
  volumeSwapCumulative: 0,
  volumeTotal: 0,
  volumeTotalCumulative: 0,
  period: 0,
  periodStartTs: "",
}

export interface GqlOutStats {
  stats?: Query["stats"]
}

export const stats = async (
  args: QueryStatsArgs,
  endpt: string
): Promise<GqlOutStats> => {
  const statsQuery = [
    gqlQuery(
      "fees",
      args.fees,
      convertObjectToPropertiesString(defaultStatsFeesObject),
      true
    ),
    gqlQuery(
      "perpOpenInterest",
      args.perpOpenInterest,
      convertObjectToPropertiesString(defaultPerpOpenInterestObject),
      true
    ),
    gqlQuery(
      "perpPnl",
      args.perpPnl,
      convertObjectToPropertiesString(defaultPerpPnlObject),
      true
    ),
    gqlQuery(
      "totals",
      args.totals,
      convertObjectToPropertiesString(defaultTotalsObject),
      true
    ),
    gqlQuery(
      "tvl",
      args.tvl,
      convertObjectToPropertiesString(defaultTvlObject),
      true
    ),
    gqlQuery(
      "users",
      args.users,
      convertObjectToPropertiesString(defaultUsersObject),
      true
    ),
    gqlQuery(
      "volume",
      args.volume,
      convertObjectToPropertiesString(defaultVolumeObject),
      true
    ),
  ]

  return doGqlQuery(
    `{
      stats {
        ${statsQuery.join("\n")}
      }
    }`,
    endpt
  )
}
