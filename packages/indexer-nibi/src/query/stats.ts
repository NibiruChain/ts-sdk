import {
  defaultStatsFees,
  defaultPerpOpenInterest,
  defaultPerpPnl,
  defaultTotals,
  defaultTvl,
  defaultUsers,
  defaultVolume,
} from "../defaultObjects"
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
  fees?: StatsFeesArgs
  perpOpenInterest?: StatsPerpOpenInterestArgs
  perpPnl?: StatsPerpPnlArgs
  totals?: StatsTotalsArgs
  tvl?: StatsTvlArgs
  users?: StatsUsersArgs
  volume?: StatsVolumeArgs
}

export interface GqlOutStats {
  stats?: Query["stats"]
}

export type StatsFields = Partial<{
  fees?: Partial<StatsFees>
  perpOpenInterest?: Partial<StatsPerpOpenInterest>
  perpPnl?: Partial<StatsPerpPnl>
  totals?: Partial<StatsTotals>
  tvl?: Partial<StatsTvl>
  users?: Partial<StatsUsers>
  volume?: Partial<StatsVolume>
}>

export const statsQueryString = (
  args: QueryStatsArgs,
  fields?: StatsFields
) => {
  const statsQuery: string[] = []

  if (fields?.fees) {
    statsQuery.push(
      gqlQuery(
        "fees",
        args.fees ?? {},
        convertObjectToPropertiesString(fields.fees),
        true
      )
    )
  }

  if (fields?.perpOpenInterest) {
    statsQuery.push(
      gqlQuery(
        "perpOpenInterest",
        args.perpOpenInterest ?? {},
        convertObjectToPropertiesString(fields.perpOpenInterest),
        true
      )
    )
  }

  if (fields?.perpPnl) {
    statsQuery.push(
      gqlQuery(
        "perpPnl",
        args.perpPnl ?? {},
        convertObjectToPropertiesString(fields.perpPnl),
        true
      )
    )
  }

  if (fields?.totals) {
    statsQuery.push(
      gqlQuery(
        "totals",
        args.totals ?? {},
        convertObjectToPropertiesString(fields.totals),
        true
      )
    )
  }

  if (fields?.tvl) {
    statsQuery.push(
      gqlQuery(
        "tvl",
        args.tvl ?? {},
        convertObjectToPropertiesString(fields.tvl),
        true
      )
    )
  }

  if (fields?.users) {
    statsQuery.push(
      gqlQuery(
        "users",
        args.users ?? {},
        convertObjectToPropertiesString(fields.users),
        true
      )
    )
  }

  if (fields?.volume) {
    statsQuery.push(
      gqlQuery(
        "volume",
        args.volume ?? {},
        convertObjectToPropertiesString(fields.volume),
        true
      )
    )
  }

  // Default Objects

  if (args.fees && !fields?.fees) {
    statsQuery.push(
      gqlQuery(
        "fees",
        args.fees,
        convertObjectToPropertiesString(defaultStatsFees),
        true
      )
    )
  }

  if (args.perpOpenInterest && !fields?.perpOpenInterest) {
    statsQuery.push(
      gqlQuery(
        "perpOpenInterest",
        args.perpOpenInterest,
        convertObjectToPropertiesString(defaultPerpOpenInterest),
        true
      )
    )
  }

  if (args.perpPnl && !fields?.perpPnl) {
    statsQuery.push(
      gqlQuery(
        "perpPnl",
        args.perpPnl,
        convertObjectToPropertiesString(defaultPerpPnl),
        true
      )
    )
  }

  if (args.totals && !fields?.totals) {
    statsQuery.push(
      gqlQuery(
        "totals",
        args.totals,
        convertObjectToPropertiesString(defaultTotals),
        true
      )
    )
  }

  if (args.tvl && !fields?.tvl) {
    statsQuery.push(
      gqlQuery(
        "tvl",
        args.tvl,
        convertObjectToPropertiesString(defaultTvl),
        true
      )
    )
  }

  if (args.users && !fields?.users) {
    statsQuery.push(
      gqlQuery(
        "users",
        args.users,
        convertObjectToPropertiesString(defaultUsers),
        true
      )
    )
  }

  if (args.volume && !fields?.volume) {
    statsQuery.push(
      gqlQuery(
        "volume",
        args.volume,
        convertObjectToPropertiesString(defaultVolume),
        true
      )
    )
  }

  return `
      stats {
        ${statsQuery.join("\n")}
      }
    `
}

export const stats = async (
  args: QueryStatsArgs,
  endpt: string,
  fields?: StatsFields
): Promise<GqlOutStats> =>
  doGqlQuery(
    `{
      ${statsQueryString(args, fields)}
    }`,
    endpt
  )
