import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
  MsgServiceName,
  MsgCreateDenom,
  MsgClientImpl,
  MsgCreateDenomResponse,
  MsgChangeAdmin,
  MsgChangeAdminResponse,
  MsgUpdateModuleParams,
  MsgUpdateModuleParamsResponse,
  MsgBurn,
  MsgBurnResponse,
  MsgMint,
  MsgMintResponse,
  MsgSetDenomMetadata,
  MsgSetDenomMetadataResponse,
  MsgBurnNative,
  MsgBurnNativeResponse,
} from "../../protojs/nibiru/tokenfactory/v1/tx"
import { GeneratedType } from "@cosmjs/proto-signing"

export const TOKENFACTORY_MSG_TYPE_URLS = {
  MsgCreateDenom: `/${MsgServiceName}CreateDenom`,
  MsgChangeAdmin: `/${MsgServiceName}ChangeAdmin`,
  MsgUpdateModuleParams: `/${MsgServiceName}UpdateModuleParams`,
  MsgMint: `/${MsgServiceName}Mint`,
  MsgBurns: `/${MsgServiceName}Burns`,
  MsgSetDenomMetadata: `/${MsgServiceName}SetDenomMetadata`,
  MsgBurnNative: `/${MsgServiceName}BurnNative`,
}

export const tokenfactoryTypes: ReadonlyArray<[string, GeneratedType]> = [
  [TOKENFACTORY_MSG_TYPE_URLS.MsgCreateDenom, MsgCreateDenom],
  [TOKENFACTORY_MSG_TYPE_URLS.MsgChangeAdmin, MsgChangeAdmin],
  [TOKENFACTORY_MSG_TYPE_URLS.MsgUpdateModuleParams, MsgUpdateModuleParams],
  [TOKENFACTORY_MSG_TYPE_URLS.MsgMint, MsgMint],
  [TOKENFACTORY_MSG_TYPE_URLS.MsgBurns, MsgBurn],
  [TOKENFACTORY_MSG_TYPE_URLS.MsgSetDenomMetadata, MsgSetDenomMetadata],
  [TOKENFACTORY_MSG_TYPE_URLS.MsgBurnNative, MsgBurnNative],
]

export interface TokenFactoryMsgExtension {
  createDenom: (body: MsgCreateDenom) => Promise<MsgCreateDenomResponse>
  changeAdmin: (body: MsgChangeAdmin) => Promise<MsgChangeAdminResponse>
  updateModuleParams: (
    body: MsgUpdateModuleParams
  ) => Promise<MsgUpdateModuleParamsResponse>
  mint: (body: MsgMint) => Promise<MsgMintResponse>
  burn: (body: MsgBurn) => Promise<MsgBurnResponse>
  setDenomMetadata: (
    body: MsgSetDenomMetadata
  ) => Promise<MsgSetDenomMetadataResponse>
  burnNative: (body: MsgBurnNative) => Promise<MsgBurnNativeResponse>
}

export const setupTokenFactoryMsgExtension = (
  base: QueryClient
): TokenFactoryMsgExtension => {
  const queryService = new MsgClientImpl(createProtobufRpcClient(base))

  return {
    createDenom: async (body: MsgCreateDenom) =>
      queryService.CreateDenom(MsgCreateDenom.fromPartial(body)),

    changeAdmin: async (body: MsgChangeAdmin) =>
      queryService.ChangeAdmin(MsgChangeAdmin.fromPartial(body)),

    updateModuleParams: async (body: MsgUpdateModuleParams) =>
      queryService.UpdateModuleParams(MsgUpdateModuleParams.fromPartial(body)),

    mint: async (body: MsgMint) => queryService.Mint(MsgMint.fromPartial(body)),

    burn: async (body: MsgBurn) => queryService.Burn(MsgBurn.fromPartial(body)),

    setDenomMetadata: async (body: MsgSetDenomMetadata) =>
      queryService.SetDenomMetadata(MsgSetDenomMetadata.fromPartial(body)),

    burnNative: async (body: MsgBurnNative) =>
      queryService.BurnNative(MsgBurnNative.fromPartial(body)),
  }
}

export {
  MsgCreateDenom,
  MsgClientImpl,
  MsgCreateDenomResponse,
  MsgChangeAdmin,
  MsgChangeAdminResponse,
  MsgUpdateModuleParams,
  MsgUpdateModuleParamsResponse,
  MsgBurn,
  MsgBurnResponse,
  MsgMint,
  MsgMintResponse,
  MsgSetDenomMetadata,
  MsgSetDenomMetadataResponse,
  MsgBurnNative,
  MsgBurnNativeResponse,
}
