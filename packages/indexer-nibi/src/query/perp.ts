import {
  defaultPerpLeaderboard,
  defaultPerpMarket,
  defaultPerpPosition,
  defaultPerpPositionChanges,
} from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  PerpLeaderboard,
  PerpMarket,
  PerpPosition,
  PerpPositionChange,
  PerpLeaderboardArgs,
  PerpMarketArgs,
  PerpMarketsArgs,
  PerpPositionArgs,
  PerpPositionsArgs,
  PerpPositionChangesArgs,
} from "../gql/generated"

export type QueryPerpArgs = {
  leaderboard?: PerpLeaderboardArgs
  market?: PerpMarketArgs
  markets?: PerpMarketsArgs
  position?: PerpPositionArgs
  positionChanges?: PerpPositionChangesArgs
  positions?: PerpPositionsArgs
}

export interface GqlOutPerp {
  perp?: Query["perp"]
}

export type PerpFields = Partial<{
  leaderboard?: Partial<PerpLeaderboard>
  market?: Partial<PerpMarket>
  markets?: Partial<PerpMarket>
  position?: Partial<PerpPosition>
  positionChanges?: Partial<PerpPositionChange>
  positions?: Partial<PerpPosition>
}>

export const perpQueryString = (args: QueryPerpArgs, fields?: PerpFields) => {
  const perpQuery: string[] = []

  if (fields?.leaderboard) {
    perpQuery.push(
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
    perpQuery.push(
      gqlQuery(
        "market",
        args.market,
        convertObjectToPropertiesString(fields.market),
        true
      )
    )
  }

  if (fields?.markets) {
    perpQuery.push(
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
    perpQuery.push(
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
    perpQuery.push(
      gqlQuery(
        "positionChanges",
        args.positionChanges,
        convertObjectToPropertiesString(fields.positionChanges),
        true
      )
    )
  }

  if (fields?.positions) {
    perpQuery.push(
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
    perpQuery.push(
      gqlQuery(
        "leaderboard",
        args.leaderboard,
        convertObjectToPropertiesString(defaultPerpLeaderboard),
        true
      )
    )
  }

  if (args.market && !fields?.market) {
    perpQuery.push(
      gqlQuery(
        "market",
        args.market,
        convertObjectToPropertiesString(defaultPerpMarket),
        true
      )
    )
  }

  if (args.markets && !fields?.markets) {
    perpQuery.push(
      gqlQuery(
        "markets",
        args.markets,
        convertObjectToPropertiesString(defaultPerpMarket),
        true
      )
    )
  }

  if (args.position && !fields?.position) {
    perpQuery.push(
      gqlQuery(
        "position",
        args.position,
        convertObjectToPropertiesString(defaultPerpPosition),
        true
      )
    )
  }

  if (args.positionChanges && !fields?.positionChanges) {
    perpQuery.push(
      gqlQuery(
        "positionChanges",
        args.positionChanges,
        convertObjectToPropertiesString(defaultPerpPositionChanges),
        true
      )
    )
  }

  if (args.positions && !fields?.positions) {
    perpQuery.push(
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
        ${perpQuery.join("\n")}
      }
    `
}

export const perp = async (
  args: QueryPerpArgs,
  endpt: string,
  fields?: PerpFields
): Promise<GqlOutPerp> =>
  doGqlQuery(
    `{
      ${perpQueryString(args, fields)}
    }`,
    endpt
  )
