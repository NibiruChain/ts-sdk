import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQuery,
  GQLFeatureFlags,
  defaultFeatureFlags,
} from ".."

export interface GqlOutFeatureFlags {
  featureFlags?: GQLQuery["featureFlags"]
}

export const featureFlagsQueryString = (
  excludeParentObject: boolean,
  fields?: Partial<GQLFeatureFlags>
) => {
  return gqlQuery(
    "featureFlags",
    {},
    fields
      ? convertObjectToPropertiesString(fields)
      : convertObjectToPropertiesString(defaultFeatureFlags),
    excludeParentObject
  )
}

export const featureFlags = async (
  endpt: string,
  fields?: Partial<GQLFeatureFlags>
): Promise<GqlOutFeatureFlags> =>
  doGqlQuery(featureFlagsQueryString(false, fields), endpt)
