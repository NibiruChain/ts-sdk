import { defaultUserContract } from "../utils/defaultObjects"
import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
} from "../utils/consts"
import {
  GQLQuery,
  GQLUserContract,
  GQLWasmGqlUserContractsArgs,
} from "../utils/generated"

export type QueryWasmArgs = {
  userContracts?: GQLWasmGqlUserContractsArgs
}

export interface GqlOutWasm {
  wasm?: GQLQuery["wasm"]
}

export type GqlWasmFields = Partial<{
  userContracts?: Partial<GQLUserContract>
}>

export const wasmQueryString = (
  args: QueryWasmArgs,
  fields?: GqlWasmFields
) => {
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

  // Default Objects

  if (args.userContracts && !fields?.userContracts) {
    wasmQuery.push(
      gqlQuery(
        "userContracts",
        args.userContracts,
        convertObjectToPropertiesString(defaultUserContract),
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
  fields?: GqlWasmFields
): Promise<GqlOutWasm> =>
  doGqlQuery(
    `{
        ${wasmQueryString(args, fields)}
      }`,
    endpt
  )
