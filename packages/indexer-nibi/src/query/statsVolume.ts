import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  QueryExt,
  QueryExtStatsVolumeArgs,
  StatsVolume,
  StatsVolumeOrder,
} from "../gql/generated"

export const defaultStatsVolumeObject: Partial<StatsVolume> = {
  period: 0,
  periodStartTs: "",
  volumePerp: 0,
  volumeSwap: 0,
  volumeTotal: 0,
  volumePerpCumulative: 0,
  volumeSwapCumulative: 0,
  volumeTotalCumulative: 0,
}

export interface GqlOutStatsVolume {
  statsVolume?: QueryExt["statsVolume"]
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
      convertObjectToPropertiesString(defaultStatsVolumeObject)
    ),
    endpt
  )
}
