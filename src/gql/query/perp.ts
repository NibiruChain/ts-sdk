import {
  defaultPerpLeaderboard,
  defaultPerpMarket,
  defaultPerpPosition,
  defaultPerpPositionChanges,
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQuery,
  GQLPerpLeaderboard,
  GQLPerpMarket,
  GQLPerpPosition,
  GQLPerpPositionChange,
  GQLPerpGqlLeaderboardArgs,
  GQLPerpGqlMarketArgs,
  GQLPerpGqlMarketsArgs,
  GQLPerpGqlPositionArgs,
  GQLPerpGqlPositionsArgs,
  GQLPerpGqlPositionChangesArgs,
  DeepPartial,
} from ".."

export type QueryPerpArgs = {
  leaderboard?: GQLPerpGqlLeaderboardArgs
  market?: GQLPerpGqlMarketArgs
  markets?: GQLPerpGqlMarketsArgs
  position?: GQLPerpGqlPositionArgs
  positionChanges?: GQLPerpGqlPositionChangesArgs
  positions?: GQLPerpGqlPositionsArgs
}

export interface GqlOutPerp {
  GQLPerp?: GQLQuery["perp"]
}

export type GQLPerpFields = DeepPartial<{
  leaderboard?: DeepPartial<GQLPerpLeaderboard>
  market?: DeepPartial<GQLPerpMarket>
  markets?: DeepPartial<GQLPerpMarket>
  position?: DeepPartial<GQLPerpPosition>
  positionChanges?: DeepPartial<GQLPerpPositionChange>
  positions?: DeepPartial<GQLPerpPosition>
}>

export const GQLPerpQueryString = (
  args: QueryPerpArgs,
  fields?: GQLPerpFields
) => {
  const GQLPerpQuery: string[] = []

  if (fields?.leaderboard) {
    GQLPerpQuery.push(
      gqlQuery(
        "leaderboard",
        args.leaderboard ?? {},
        convertObjectToPropertiesString(fields.leaderboard),
        true
      )
    )
  }

  // Note: args.market must be defined
  if (args.market && fields?.market) {
    GQLPerpQuery.push(
      gqlQuery(
        "market",
        args.market,
        convertObjectToPropertiesString(fields.market),
        true
      )
    )
  }

  if (fields?.markets) {
    GQLPerpQuery.push(
      gqlQuery(
        "markets",
        args.markets ?? {},
        convertObjectToPropertiesString(fields.markets),
        true
      )
    )
  }

  // Note: args.position must be defined
  if (args.position && fields?.position) {
    GQLPerpQuery.push(
      gqlQuery(
        "position",
        args.position,
        convertObjectToPropertiesString(fields.position),
        true
      )
    )
  }

  // Note: args.positionChanges must be defined
  if (args.positionChanges && fields?.positionChanges) {
    GQLPerpQuery.push(
      gqlQuery(
        "positionChanges",
        args.positionChanges,
        convertObjectToPropertiesString(fields.positionChanges),
        true
      )
    )
  }

  if (fields?.positions) {
    GQLPerpQuery.push(
      gqlQuery(
        "positions",
        args.positions ?? {},
        convertObjectToPropertiesString(fields.positions),
        true
      )
    )
  }

  // Default Objects

  if (args.leaderboard && !fields?.leaderboard) {
    GQLPerpQuery.push(
      gqlQuery(
        "leaderboard",
        args.leaderboard,
        convertObjectToPropertiesString(defaultPerpLeaderboard),
        true
      )
    )
  }

  if (args.market && !fields?.market) {
    GQLPerpQuery.push(
      gqlQuery(
        "market",
        args.market,
        convertObjectToPropertiesString(defaultPerpMarket),
        true
      )
    )
  }

  if (args.markets && !fields?.markets) {
    GQLPerpQuery.push(
      gqlQuery(
        "markets",
        args.markets,
        convertObjectToPropertiesString(defaultPerpMarket),
        true
      )
    )
  }

  if (args.position && !fields?.position) {
    GQLPerpQuery.push(
      gqlQuery(
        "position",
        args.position,
        convertObjectToPropertiesString(defaultPerpPosition),
        true
      )
    )
  }

  if (args.positionChanges && !fields?.positionChanges) {
    GQLPerpQuery.push(
      gqlQuery(
        "positionChanges",
        args.positionChanges,
        convertObjectToPropertiesString(defaultPerpPositionChanges),
        true
      )
    )
  }

  if (args.positions && !fields?.positions) {
    GQLPerpQuery.push(
      gqlQuery(
        "positions",
        args.positions,
        convertObjectToPropertiesString(defaultPerpPosition),
        true
      )
    )
  }

  return `
      perp {
        ${GQLPerpQuery.join("\n")}
      }
    `
}

export const perp = async (
  args: QueryPerpArgs,
  endpt: string,
  fields?: GQLPerpFields
): Promise<GqlOutPerp> =>
  doGqlQuery(
    `{
      ${GQLPerpQueryString(args, fields)}
    }`,
    endpt
  )
