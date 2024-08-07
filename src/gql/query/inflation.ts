import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLInflationGqlInflationsArgs,
  GQLInflationGqlDistributionsArgs,
  GQLQuery,
  GQLInflationDistribution,
  GQLInflationInfo,
  DeepPartial,
  GQLInflationRewards,
} from ".."

export type QueryInflationArgs = {
  distributions?: GQLInflationGqlDistributionsArgs
  inflations?: GQLInflationGqlInflationsArgs
}

export interface GqlOutInflation {
  inflation?: GQLQuery["inflation"]
}

export type InflationFields = DeepPartial<{
  distributions?: DeepPartial<GQLInflationDistribution>
  inflations?: DeepPartial<GQLInflationInfo>
  rewards?: DeepPartial<GQLInflationRewards>
}>

export const inflationQueryString = (
  args: QueryInflationArgs,
  fields: InflationFields
) => {
  const inflationQuery: string[] = []

  if (fields.distributions) {
    inflationQuery.push(
      gqlQuery(
        "distributions",
        args.distributions ?? {},
        convertObjectToPropertiesString(fields.distributions),
        true
      )
    )
  }

  if (fields.inflations) {
    inflationQuery.push(
      gqlQuery(
        "inflations",
        args.inflations ?? {},
        convertObjectToPropertiesString(fields.inflations),
        true
      )
    )
  }

  if (fields.rewards) {
    inflationQuery.push(
      gqlQuery(
        "rewards",
        {},
        convertObjectToPropertiesString(fields.rewards),
        true
      )
    )
  }

  return `
        inflation {
          ${inflationQuery.join("\n")}
        }
      `
}

export const inflation = async (
  args: QueryInflationArgs,
  endpt: string,
  fields: InflationFields
): Promise<GqlOutInflation> =>
  doGqlQuery(
    `{
        ${inflationQueryString(args, fields)}
      }`,
    endpt
  )
