import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQuery,
  DeepPartial,
  GQLEvm,
} from ".."

export interface GqlOutEvm {
  evm?: GQLQuery["evm"]
}

export const evmQueryString = (
  excludeParentObject: boolean,
  fields: DeepPartial<GQLEvm>
) =>
  gqlQuery(
    "evm",
    {},
    convertObjectToPropertiesString(fields),
    excludeParentObject
  )

export const evm = async (
  endpt: string,
  fields: DeepPartial<GQLEvm>
): Promise<GqlOutEvm> => doGqlQuery(evmQueryString(false, fields), endpt)
