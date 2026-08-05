import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
  QueryClientImpl,
  QuerySudoersRequest,
  QuerySudoersResponse,
  QueryZeroGasActorsRequest,
  QueryZeroGasActorsResponse,
} from "../../protojs/nibiru/sudo/v1/query"

export interface SudoExtension {
  querySudoers: () => Promise<QuerySudoersResponse>
  queryZeroGasActors: () => Promise<QueryZeroGasActorsResponse>
}

export const setupSudoExtension = (base: QueryClient): SudoExtension => {
  const queryService = new QueryClientImpl(createProtobufRpcClient(base))

  return {
    querySudoers: async () =>
      queryService.QuerySudoers(QuerySudoersRequest.fromPartial({})),

    queryZeroGasActors: async () =>
      queryService.QueryZeroGasActors(
        QueryZeroGasActorsRequest.fromPartial({})
      ),
  }
}
