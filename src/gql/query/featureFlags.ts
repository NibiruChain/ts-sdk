import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQuery,
  GQLFeatureFlags,
  DeepPartial,
} from ".."

export interface GqlOutFeatureFlags {
  featureFlags?: GQLQuery["featureFlags"]
}

export const featureFlagsQueryString = (
  excludeParentObject: boolean,
  fields: DeepPartial<GQLFeatureFlags>
) =>
  gqlQuery(
    "featureFlags",
    {},
    convertObjectToPropertiesString(fields),
    excludeParentObject
  )

export const featureFlags = async (
  endpt: string,
  fields: DeepPartial<GQLFeatureFlags>
): Promise<GqlOutFeatureFlags> =>
  doGqlQuery(featureFlagsQueryString(false, fields), endpt)
