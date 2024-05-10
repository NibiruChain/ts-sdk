import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQuery,
  GQLUserContract,
  GQLWasmGqlUserContractsArgs,
  DeepPartial,
} from ".."

export type QueryWasmArgs = {
  userContracts?: GQLWasmGqlUserContractsArgs
}

export interface GqlOutWasm {
  wasm?: GQLQuery["wasm"]
}

export type GqlWasmFields = DeepPartial<{
  userContracts?: DeepPartial<GQLUserContract>
}>

export const wasmQueryString = (args: QueryWasmArgs, fields: GqlWasmFields) => {
  const wasmQuery: string[] = []

  if (fields?.userContracts) {
    wasmQuery.push(
      gqlQuery(
        "userContracts",
        args.userContracts ?? {},
        convertObjectToPropertiesString(fields.userContracts),
        true
      )
    )
  }

  return `
        wasm {
          ${wasmQuery.join("\n")}
        }
      `
}

export const wasm = async (
  args: QueryWasmArgs,
  endpt: string,
  fields: GqlWasmFields
): Promise<GqlOutWasm> =>
  doGqlQuery(
    `{
      ${wasmQueryString(args, fields)}
    }`,
    endpt
  )
