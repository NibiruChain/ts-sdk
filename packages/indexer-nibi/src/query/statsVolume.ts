import { gqlQuery } from "../utils"
import { doGqlQuery } from "../gql"
import {
  QueryExt,
  QueryExtStatsVolumeArgs,
  StatsVolumeOrder,
} from "../gql/generated"

export interface GqlOutStatsVolume {
  statsVolume: QueryExt["statsVolume"]
}

export const statsVolume = async (
  args: QueryExtStatsVolumeArgs,
  endpt: string
): Promise<GqlOutStatsVolume> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = StatsVolumeOrder.PeriodStartTs

  return doGqlQuery(
    gqlQuery(
      "statsVolume",
      args,
      `period
       periodStartTs
       volumePerp
       volumeSwap
       volumeTotal
       volumePerpCumulative
       volumeSwapCumulative
       volumeTotalCumulative`
    ),
    endpt
  )
}
