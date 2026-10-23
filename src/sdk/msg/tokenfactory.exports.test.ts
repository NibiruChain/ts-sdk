import * as proto from "../../protojs/nibiru/tokenfactory/v1/tx"
import {
  MsgBurn,
  MsgBurnNative,
  MsgBurnNativeResponse,
  MsgBurnResponse,
  MsgChangeAdmin,
  MsgChangeAdminResponse,
  MsgClientImpl,
  MsgCreateDenom,
  MsgCreateDenomResponse,
  MsgMint,
  MsgMintResponse,
  MsgSetDenomMetadata,
  MsgSetDenomMetadataResponse,
  MsgUpdateModuleParams,
  MsgUpdateModuleParamsResponse,
} from "./tokenfactory"

describe("tokenfactory re-exports", () => {
  test("exposes the tokenfactory protobuf message types", () => {
    expect(MsgCreateDenom).toBe(proto.MsgCreateDenom)
    expect(MsgCreateDenomResponse).toBe(proto.MsgCreateDenomResponse)
    expect(MsgChangeAdmin).toBe(proto.MsgChangeAdmin)
    expect(MsgChangeAdminResponse).toBe(proto.MsgChangeAdminResponse)
    expect(MsgUpdateModuleParams).toBe(proto.MsgUpdateModuleParams)
    expect(MsgUpdateModuleParamsResponse).toBe(
      proto.MsgUpdateModuleParamsResponse
    )
    expect(MsgMint).toBe(proto.MsgMint)
    expect(MsgMintResponse).toBe(proto.MsgMintResponse)
    expect(MsgBurn).toBe(proto.MsgBurn)
    expect(MsgBurnResponse).toBe(proto.MsgBurnResponse)
    expect(MsgSetDenomMetadata).toBe(proto.MsgSetDenomMetadata)
    expect(MsgSetDenomMetadataResponse).toBe(proto.MsgSetDenomMetadataResponse)
    expect(MsgBurnNative).toBe(proto.MsgBurnNative)
    expect(MsgBurnNativeResponse).toBe(proto.MsgBurnNativeResponse)
    expect(MsgClientImpl).toBe(proto.MsgClientImpl)
  })
})
