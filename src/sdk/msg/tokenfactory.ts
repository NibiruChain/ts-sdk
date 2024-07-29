import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
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
