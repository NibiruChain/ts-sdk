import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import * as utilsQuery from "@nibiruchain/protojs/dist/util/v1/query"

export interface UtilsExtension {
  readonly utils: Readonly<{
    moduleAccounts: () => Promise<utilsQuery.QueryModuleAccountsResponse>
  }>
}

export function setupUtilsExtension(base: QueryClient): UtilsExtension {
  const rpcClient = createProtobufRpcClient(base)
  const queryService = new utilsQuery.QueryClientImpl(rpcClient)

  return {
    utils: {
      moduleAccounts: async (): Promise<utilsQuery.QueryModuleAccountsResponse> => {
        const response = await queryService.ModuleAccounts({})
        return response
      },
    },
  }
}
