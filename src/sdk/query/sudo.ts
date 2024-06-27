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
  const queryService = new QueryClientImpl(createProtobufRpcClient(base))

  return {
    sudo: {
      querySudoers: async () =>
        queryService.QuerySudoers(QuerySudoersRequest.fromPartial({})),
    },
  }
}
