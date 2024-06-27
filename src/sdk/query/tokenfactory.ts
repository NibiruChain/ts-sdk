import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
  QueryClientImpl,
  QueryDenomInfoRequest,
  QueryDenomInfoResponse,
  QueryDenomsRequest,
  QueryDenomsResponse,
  QueryParamsRequest,
  QueryParamsResponse,
} from "../../protojs/nibiru/tokenfactory/v1/query"

export interface TokenFactoryExtension {
  readonly tokenFactory: Readonly<{
    denomInfo: (body: QueryDenomInfoRequest) => Promise<QueryDenomInfoResponse>
    denoms: (body: QueryDenomsRequest) => Promise<QueryDenomsResponse>
    params: (body: QueryParamsRequest) => Promise<QueryParamsResponse>
  }>
}

export const setupTokenFactoryExtension = (
  base: QueryClient
): TokenFactoryExtension => {
  const queryService = new QueryClientImpl(createProtobufRpcClient(base))

  return {
    tokenFactory: {
      denomInfo: async (body: QueryDenomInfoRequest) =>
        queryService.DenomInfo(QueryDenomInfoRequest.fromPartial(body)),

      denoms: async (body: QueryDenomsRequest) =>
        queryService.Denoms(QueryDenomsRequest.fromPartial(body)),

      params: async () =>
        queryService.Params(QueryParamsRequest.fromPartial({})),
    },
  }
}
