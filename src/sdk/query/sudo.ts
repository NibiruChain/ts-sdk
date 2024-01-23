import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
  QueryClientImpl,
  QuerySudoersRequest,
  QuerySudoersResponse,
} from "../../protojs/nibiru/sudo/v1/query"

export interface SudoExtension {
  readonly sudo: Readonly<{
    querySudoers: () => Promise<QuerySudoersResponse>
  }>
}

export const setupSudoExtension = (base: QueryClient): SudoExtension => {
  const rpcClient = createProtobufRpcClient(base)
  const queryService = new QueryClientImpl(rpcClient)

  return {
    sudo: {
      querySudoers: async () => {
        const req = QuerySudoersRequest.fromPartial({})
        const resp = await queryService.QuerySudoers(req)
        return resp
      },
    },
  }
}
