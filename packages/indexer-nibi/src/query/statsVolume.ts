import { StatsPeriod } from "../enum"
import { doGqlQuery, arg } from "../gql"

// ------------------------------------------------
// StatsVolume
// ------------------------------------------------

/**
 * StatsVolume: A single stats of volume data.
 */
export interface StatsVolume {
  period: number
  periodStartTs: string
  volumePerp: number
  volumeSwap: number
  volumeTotal: number
  volumePerpCumulative: number
  volumeSwapCumulative: number
  volumeTotalCumulative: number
}

/** GqlOutStatsVolume: Output response for the StatsVolume query  */
export interface GqlOutStatsVolume {
  statsVolume: StatsVolume[]
}

/** GqlInStatsVolume: Input arguments for the StatsVolume query  */
export interface GqlInStatsVolume {
  period: StatsPeriod
  limit: number
  startTs?: string
  endTs?: string
  orderBy?: StatsVolumeOrderBy | string
  orderDescending?: boolean // defaults to true
}

export enum StatsVolumeOrderBy {
  period = "period",
  period_start_ts = "period_start_ts",
}

export const statsVolume = async (
  args: GqlInStatsVolume,
  endpt: string
): Promise<GqlOutStatsVolume> => {
  if (args.orderDescending === undefined) args.orderDescending = true
  if (args.orderBy === undefined)
    args.orderBy = StatsVolumeOrderBy.period_start_ts

  const gqlQuery = ({
    period,
    startTs,
    endTs,
    limit,
    orderBy,
    orderDescending,
  }: GqlInStatsVolume): string => {
    const argWhere = (): string => {
      const whereConditions: string[] = []
      whereConditions.push(`periodEq: ${period}`)
      if (startTs) whereConditions.push(`periodStartTsGte: "${startTs}"`)
      if (endTs) whereConditions.push(`periodStartTsLt: "${endTs}"`)
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
        statsVolume(${queryArgs}) {
          period
          periodStartTs
          volumePerp
          volumeSwap
          volumeTotal
          volumePerpCumulative
          volumeSwapCumulative
          volumeTotalCumulative
        }
      }`
  }
  return doGqlQuery(gqlQuery(args), endpt)
}
