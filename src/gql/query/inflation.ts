import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLInflationGqlInflationsArgs,
  GQLInflationGqlDistributionsArgs,
  GQLQuery,
  GQLInflationDistribution,
  GQLInflationInfo,
  defaultInflationDistribution,
  defaultInflationInfo,
} from ".."

export type QueryInflationArgs = {
  distributions?: GQLInflationGqlDistributionsArgs
  inflations?: GQLInflationGqlInflationsArgs
}

export interface GqlOutInflation {
  inflation?: GQLQuery["inflation"]
}

export type InflationFields = Partial<{
  distributions?: Partial<GQLInflationDistribution>
  inflations?: Partial<GQLInflationInfo>
}>

export const inflationQueryString = (
  args: QueryInflationArgs,
  fields?: InflationFields
) => {
  const inflationQuery: string[] = []

  if (fields?.distributions) {
    inflationQuery.push(
      gqlQuery(
        "distributions",
        args.distributions ?? {},
        convertObjectToPropertiesString(fields.distributions),
        true
      )
    )
  }

  if (fields?.inflations) {
    inflationQuery.push(
      gqlQuery(
        "inflations",
        args.inflations ?? {},
        convertObjectToPropertiesString(fields.inflations),
        true
      )
    )
  }

  // Default Objects

  if (args.distributions && !fields?.distributions) {
    inflationQuery.push(
      gqlQuery(
        "distributions",
        args.distributions,
        convertObjectToPropertiesString(defaultInflationDistribution),
        true
      )
    )
  }

  if (args.inflations && !fields?.inflations) {
    inflationQuery.push(
      gqlQuery(
        "inflations",
        args.inflations,
        convertObjectToPropertiesString(defaultInflationInfo),
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
  fields?: InflationFields
): Promise<GqlOutInflation> =>
  doGqlQuery(
    `{
        ${inflationQueryString(args, fields)}
      }`,
    endpt
  )
