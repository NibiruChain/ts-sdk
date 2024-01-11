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
  GQLQuery,
  GQLStatsGqlFeesArgs,
  GQLStatsFees,
  GQLStatsPerpOpenInterest,
  GQLStatsPerpPnl,
  GQLStatsTotals,
  GQLStatsTvl,
  GQLStatsUsers,
  GQLStatsVolume,
  GQLStatsGqlPerpOpenInterestArgs,
  GQLStatsGqlPerpPnlArgs,
  GQLStatsGqlTotalsArgs,
  GQLStatsGqlTvlArgs,
  GQLStatsGqlUsersArgs,
  GQLStatsGqlVolumeArgs,
} from "../gql/generated"

export type QueryStatsArgs = {
  fees?: GQLStatsGqlFeesArgs
  perpOpenInterest?: GQLStatsGqlPerpOpenInterestArgs
  perpPnl?: GQLStatsGqlPerpPnlArgs
  totals?: GQLStatsGqlTotalsArgs
  tvl?: GQLStatsGqlTvlArgs
  users?: GQLStatsGqlUsersArgs
  volume?: GQLStatsGqlVolumeArgs
}

export interface GqlOutStats {
  GQLStats?: GQLQuery["stats"]
}

export type GQLStatsFields = Partial<{
  fees?: Partial<GQLStatsFees>
  perpOpenInterest?: Partial<GQLStatsPerpOpenInterest>
  perpPnl?: Partial<GQLStatsPerpPnl>
  totals?: Partial<GQLStatsTotals>
  tvl?: Partial<GQLStatsTvl>
  users?: Partial<GQLStatsUsers>
  volume?: Partial<GQLStatsVolume>
}>

export const GQLStatsQueryString = (
  args: QueryStatsArgs,
  fields?: GQLStatsFields
) => {
  const GQLStatsQuery: string[] = []

  if (fields?.fees) {
    GQLStatsQuery.push(
      gqlQuery(
        "fees",
        args.fees ?? {},
        convertObjectToPropertiesString(fields.fees),
        true
      )
    )
  }

  if (fields?.perpOpenInterest) {
    GQLStatsQuery.push(
      gqlQuery(
        "perpOpenInterest",
        args.perpOpenInterest ?? {},
        convertObjectToPropertiesString(fields.perpOpenInterest),
        true
      )
    )
  }

  if (fields?.perpPnl) {
    GQLStatsQuery.push(
      gqlQuery(
        "perpPnl",
        args.perpPnl ?? {},
        convertObjectToPropertiesString(fields.perpPnl),
        true
      )
    )
  }

  if (fields?.totals) {
    GQLStatsQuery.push(
      gqlQuery(
        "totals",
        args.totals ?? {},
        convertObjectToPropertiesString(fields.totals),
        true
      )
    )
  }

  if (fields?.tvl) {
    GQLStatsQuery.push(
      gqlQuery(
        "tvl",
        args.tvl ?? {},
        convertObjectToPropertiesString(fields.tvl),
        true
      )
    )
  }

  if (fields?.users) {
    GQLStatsQuery.push(
      gqlQuery(
        "users",
        args.users ?? {},
        convertObjectToPropertiesString(fields.users),
        true
      )
    )
  }

  if (fields?.volume) {
    GQLStatsQuery.push(
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
    GQLStatsQuery.push(
      gqlQuery(
        "fees",
        args.fees,
        convertObjectToPropertiesString(defaultStatsFees),
        true
      )
    )
  }

  if (args.perpOpenInterest && !fields?.perpOpenInterest) {
    GQLStatsQuery.push(
      gqlQuery(
        "perpOpenInterest",
        args.perpOpenInterest,
        convertObjectToPropertiesString(defaultPerpOpenInterest),
        true
      )
    )
  }

  if (args.perpPnl && !fields?.perpPnl) {
    GQLStatsQuery.push(
      gqlQuery(
        "perpPnl",
        args.perpPnl,
        convertObjectToPropertiesString(defaultPerpPnl),
        true
      )
    )
  }

  if (args.totals && !fields?.totals) {
    GQLStatsQuery.push(
      gqlQuery(
        "totals",
        args.totals,
        convertObjectToPropertiesString(defaultTotals),
        true
      )
    )
  }

  if (args.tvl && !fields?.tvl) {
    GQLStatsQuery.push(
      gqlQuery(
        "tvl",
        args.tvl,
        convertObjectToPropertiesString(defaultTvl),
        true
      )
    )
  }

  if (args.users && !fields?.users) {
    GQLStatsQuery.push(
      gqlQuery(
        "users",
        args.users,
        convertObjectToPropertiesString(defaultUsers),
        true
      )
    )
  }

  if (args.volume && !fields?.volume) {
    GQLStatsQuery.push(
      gqlQuery(
        "volume",
        args.volume,
        convertObjectToPropertiesString(defaultVolume),
        true
      )
    )
  }

  return `
      GQLStats {
        ${GQLStatsQuery.join("\n")}
      }
    `
}

export const stats = async (
  args: QueryStatsArgs,
  endpt: string,
  fields?: GQLStatsFields
): Promise<GqlOutStats> =>
  doGqlQuery(
    `{
      ${GQLStatsQueryString(args, fields)}
    }`,
    endpt
  )
