/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Metadata } from "../../../cosmos/bank/v1beta1/bank";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { ModuleParams } from "./state";

/**
 * MsgCreateDenom: sdk.Msg that registers an a token factory denom.
 * A denom has the form "tf/[creatorAddr]/[subdenom]".
 *  - Denoms become unique x/bank tokens, so the creator-subdenom pair that
 *    defines a denom cannot be reused.
 *  - The resulting denom's admin is originally set to be the creator, but the
 *    admin can be changed later.
 */
export interface MsgCreateDenom {
  sender: string;
  /** subdenom can be up to 44 "alphanumeric" characters long. */
  subdenom: string;
}

/** MsgCreateDenomResponse is the return value of MsgCreateDenom */
export interface MsgCreateDenomResponse {
  /** NewTokenDenom: identifier for the newly created token factory denom. */
  newTokenDenom: string;
}

/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to change
 * admin of a denom to a new account
 */
export interface MsgChangeAdmin {
  sender: string;
  denom: string;
  newAdmin: string;
}

/** MsgChangeAdminResponse is the gRPC response for the MsgChangeAdmin TxMsg. */
export interface MsgChangeAdminResponse {
}

/** MsgUpdateModuleParams: sdk.Msg for updating the x/tokenfactory module params */
export interface MsgUpdateModuleParams {
  /** Authority: Address of the governance module account. */
  authority: string;
  params?: ModuleParams;
}

/**
 * MsgUpdateModuleParamsResponse is the gRPC response for the
 * MsgUpdateModuleParams TxMsg.
 */
export interface MsgUpdateModuleParamsResponse {
}

/** MsgMint: sdk.Msg (TxMsg) where an denom admin mints more of the token. */
export interface MsgMint {
  sender: string;
  /** coin: The denom identifier and amount to mint. */
  coin?: Coin;
  /**
   * mint_to_addr: An address to which tokens will be minted. If blank,
   * tokens are minted to the "sender".
   */
  mintTo: string;
}

export interface MsgMintResponse {
  mintTo: string;
}

/**
 * MsgBurn: sdk.Msg (TxMsg) where a denom admin burns some of the token.
 * The reason that the sender isn't automatically the "burn_from" address
 * is to support smart contracts (primary use case). In this situation, the
 * contract is the message signer and sender, while "burn_from" is based on the
 * contract logic.
 */
export interface MsgBurn {
  sender: string;
  /** coin: The denom identifier and amount to burn. */
  coin?: Coin;
  /** burn_from: The address from which tokens will be burned. */
  burnFrom: string;
}

export interface MsgBurnResponse {
}

/**
 * MsgSetDenomMetadata: sdk.Msg (TxMsg) enabling the denom admin to change its
 * bank metadata.
 */
export interface MsgSetDenomMetadata {
  sender: string;
  /**
   * Metadata: Official x/bank metadata for the denom. All token factory denoms
   * are standard, native assets. The "metadata.base" is the denom.
   */
  metadata?: Metadata;
}

export interface MsgSetDenomMetadataResponse {
}

/**
 * MsgSudoSetDenomMetadata: sdk.Msg (TxMsg) enabling Nibiru's "sudoers" to change
 * bank metadata.
 * [SUDO] Only callable by sudoers.
 *
 * Use Cases:
 *   - To define metadata for ICS20 assets brought
 *     over to the chain via IBC, as they don't have metadata by default.
 *   - To set metadata for Bank Coins created via the Token Factory
 *     module in case the admin forgets to do so. This is important because of
 *     the relationship Token Factory assets can have with ERC20s with the
 *     [FunToken Mechanism].
 *
 * [FunToken Mechanism]: https://nibiru.fi/docs/evm/funtoken.html
 */
export interface MsgSudoSetDenomMetadata {
  sender: string;
  /**
   * Metadata: Official x/bank metadata for the denom. The "metadata.base" is
   * the denom.
   */
  metadata?: Metadata;
}

export interface MsgSudoSetDenomMetadataResponse {
}

/** Burn a native token such as unibi */
export interface MsgBurnNative {
  sender: string;
  coin?: Coin;
}

export interface MsgBurnNativeResponse {
}

function createBaseMsgCreateDenom(): MsgCreateDenom {
  return { sender: "", subdenom: "" };
}

export const MsgCreateDenom = {
  encode(message: MsgCreateDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.subdenom !== "") {
      writer.uint32(18).string(message.subdenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subdenom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDenom {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      subdenom: isSet(object.subdenom) ? String(object.subdenom) : "",
    };
  },

  toJSON(message: MsgCreateDenom): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.subdenom !== undefined && (obj.subdenom = message.subdenom);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateDenom>, I>>(base?: I): MsgCreateDenom {
    return MsgCreateDenom.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDenom>, I>>(object: I): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    message.sender = object.sender ?? "";
    message.subdenom = object.subdenom ?? "";
    return message;
  },
};

function createBaseMsgCreateDenomResponse(): MsgCreateDenomResponse {
  return { newTokenDenom: "" };
}

export const MsgCreateDenomResponse = {
  encode(message: MsgCreateDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newTokenDenom !== "") {
      writer.uint32(10).string(message.newTokenDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenomResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newTokenDenom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDenomResponse {
    return { newTokenDenom: isSet(object.newTokenDenom) ? String(object.newTokenDenom) : "" };
  },

  toJSON(message: MsgCreateDenomResponse): unknown {
    const obj: any = {};
    message.newTokenDenom !== undefined && (obj.newTokenDenom = message.newTokenDenom);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateDenomResponse>, I>>(base?: I): MsgCreateDenomResponse {
    return MsgCreateDenomResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDenomResponse>, I>>(object: I): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    message.newTokenDenom = object.newTokenDenom ?? "";
    return message;
  },
};

function createBaseMsgChangeAdmin(): MsgChangeAdmin {
  return { sender: "", denom: "", newAdmin: "" };
}

export const MsgChangeAdmin = {
  encode(message: MsgChangeAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeAdmin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.newAdmin = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChangeAdmin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
    };
  },

  toJSON(message: MsgChangeAdmin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgChangeAdmin>, I>>(base?: I): MsgChangeAdmin {
    return MsgChangeAdmin.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgChangeAdmin>, I>>(object: I): MsgChangeAdmin {
    const message = createBaseMsgChangeAdmin();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
};

function createBaseMsgChangeAdminResponse(): MsgChangeAdminResponse {
  return {};
}

export const MsgChangeAdminResponse = {
  encode(_: MsgChangeAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeAdminResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgChangeAdminResponse {
    return {};
  },

  toJSON(_: MsgChangeAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgChangeAdminResponse>, I>>(base?: I): MsgChangeAdminResponse {
    return MsgChangeAdminResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgChangeAdminResponse>, I>>(_: I): MsgChangeAdminResponse {
    const message = createBaseMsgChangeAdminResponse();
    return message;
  },
};

function createBaseMsgUpdateModuleParams(): MsgUpdateModuleParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateModuleParams = {
  encode(message: MsgUpdateModuleParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      ModuleParams.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateModuleParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateModuleParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = ModuleParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateModuleParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? ModuleParams.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateModuleParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? ModuleParams.toJSON(message.params) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateModuleParams>, I>>(base?: I): MsgUpdateModuleParams {
    return MsgUpdateModuleParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateModuleParams>, I>>(object: I): MsgUpdateModuleParams {
    const message = createBaseMsgUpdateModuleParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? ModuleParams.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateModuleParamsResponse(): MsgUpdateModuleParamsResponse {
  return {};
}

export const MsgUpdateModuleParamsResponse = {
  encode(_: MsgUpdateModuleParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateModuleParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateModuleParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateModuleParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateModuleParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateModuleParamsResponse>, I>>(base?: I): MsgUpdateModuleParamsResponse {
    return MsgUpdateModuleParamsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateModuleParamsResponse>, I>>(_: I): MsgUpdateModuleParamsResponse {
    const message = createBaseMsgUpdateModuleParamsResponse();
    return message;
  },
};

function createBaseMsgMint(): MsgMint {
  return { sender: "", coin: undefined, mintTo: "" };
}

export const MsgMint = {
  encode(message: MsgMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    if (message.mintTo !== "") {
      writer.uint32(26).string(message.mintTo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mintTo = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgMint {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      mintTo: isSet(object.mintTo) ? String(object.mintTo) : "",
    };
  },

  toJSON(message: MsgMint): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.mintTo !== undefined && (obj.mintTo = message.mintTo);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgMint>, I>>(base?: I): MsgMint {
    return MsgMint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgMint>, I>>(object: I): MsgMint {
    const message = createBaseMsgMint();
    message.sender = object.sender ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    message.mintTo = object.mintTo ?? "";
    return message;
  },
};

function createBaseMsgMintResponse(): MsgMintResponse {
  return { mintTo: "" };
}

export const MsgMintResponse = {
  encode(message: MsgMintResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintTo !== "") {
      writer.uint32(10).string(message.mintTo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mintTo = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgMintResponse {
    return { mintTo: isSet(object.mintTo) ? String(object.mintTo) : "" };
  },

  toJSON(message: MsgMintResponse): unknown {
    const obj: any = {};
    message.mintTo !== undefined && (obj.mintTo = message.mintTo);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgMintResponse>, I>>(base?: I): MsgMintResponse {
    return MsgMintResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintResponse>, I>>(object: I): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    message.mintTo = object.mintTo ?? "";
    return message;
  },
};

function createBaseMsgBurn(): MsgBurn {
  return { sender: "", coin: undefined, burnFrom: "" };
}

export const MsgBurn = {
  encode(message: MsgBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    if (message.burnFrom !== "") {
      writer.uint32(26).string(message.burnFrom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.burnFrom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgBurn {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      burnFrom: isSet(object.burnFrom) ? String(object.burnFrom) : "",
    };
  },

  toJSON(message: MsgBurn): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.burnFrom !== undefined && (obj.burnFrom = message.burnFrom);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBurn>, I>>(base?: I): MsgBurn {
    return MsgBurn.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurn>, I>>(object: I): MsgBurn {
    const message = createBaseMsgBurn();
    message.sender = object.sender ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    message.burnFrom = object.burnFrom ?? "";
    return message;
  },
};

function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}

export const MsgBurnResponse = {
  encode(_: MsgBurnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgBurnResponse {
    return {};
  },

  toJSON(_: MsgBurnResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBurnResponse>, I>>(base?: I): MsgBurnResponse {
    return MsgBurnResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnResponse>, I>>(_: I): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
};

function createBaseMsgSetDenomMetadata(): MsgSetDenomMetadata {
  return { sender: "", metadata: undefined };
}

export const MsgSetDenomMetadata = {
  encode(message: MsgSetDenomMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDenomMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = Metadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetDenomMetadata {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: MsgSetDenomMetadata): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetDenomMetadata>, I>>(base?: I): MsgSetDenomMetadata {
    return MsgSetDenomMetadata.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetDenomMetadata>, I>>(object: I): MsgSetDenomMetadata {
    const message = createBaseMsgSetDenomMetadata();
    message.sender = object.sender ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Metadata.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

function createBaseMsgSetDenomMetadataResponse(): MsgSetDenomMetadataResponse {
  return {};
}

export const MsgSetDenomMetadataResponse = {
  encode(_: MsgSetDenomMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDenomMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSetDenomMetadataResponse {
    return {};
  },

  toJSON(_: MsgSetDenomMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetDenomMetadataResponse>, I>>(base?: I): MsgSetDenomMetadataResponse {
    return MsgSetDenomMetadataResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetDenomMetadataResponse>, I>>(_: I): MsgSetDenomMetadataResponse {
    const message = createBaseMsgSetDenomMetadataResponse();
    return message;
  },
};

function createBaseMsgSudoSetDenomMetadata(): MsgSudoSetDenomMetadata {
  return { sender: "", metadata: undefined };
}

export const MsgSudoSetDenomMetadata = {
  encode(message: MsgSudoSetDenomMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSudoSetDenomMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSudoSetDenomMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = Metadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSudoSetDenomMetadata {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: MsgSudoSetDenomMetadata): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSudoSetDenomMetadata>, I>>(base?: I): MsgSudoSetDenomMetadata {
    return MsgSudoSetDenomMetadata.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSudoSetDenomMetadata>, I>>(object: I): MsgSudoSetDenomMetadata {
    const message = createBaseMsgSudoSetDenomMetadata();
    message.sender = object.sender ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Metadata.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

function createBaseMsgSudoSetDenomMetadataResponse(): MsgSudoSetDenomMetadataResponse {
  return {};
}

export const MsgSudoSetDenomMetadataResponse = {
  encode(_: MsgSudoSetDenomMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSudoSetDenomMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSudoSetDenomMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSudoSetDenomMetadataResponse {
    return {};
  },

  toJSON(_: MsgSudoSetDenomMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSudoSetDenomMetadataResponse>, I>>(base?: I): MsgSudoSetDenomMetadataResponse {
    return MsgSudoSetDenomMetadataResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSudoSetDenomMetadataResponse>, I>>(_: I): MsgSudoSetDenomMetadataResponse {
    const message = createBaseMsgSudoSetDenomMetadataResponse();
    return message;
  },
};

function createBaseMsgBurnNative(): MsgBurnNative {
  return { sender: "", coin: undefined };
}

export const MsgBurnNative = {
  encode(message: MsgBurnNative, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNative {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnNative();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgBurnNative {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MsgBurnNative): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBurnNative>, I>>(base?: I): MsgBurnNative {
    return MsgBurnNative.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnNative>, I>>(object: I): MsgBurnNative {
    const message = createBaseMsgBurnNative();
    message.sender = object.sender ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
};

function createBaseMsgBurnNativeResponse(): MsgBurnNativeResponse {
  return {};
}

export const MsgBurnNativeResponse = {
  encode(_: MsgBurnNativeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNativeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnNativeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgBurnNativeResponse {
    return {};
  },

  toJSON(_: MsgBurnNativeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBurnNativeResponse>, I>>(base?: I): MsgBurnNativeResponse {
    return MsgBurnNativeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnNativeResponse>, I>>(_: I): MsgBurnNativeResponse {
    const message = createBaseMsgBurnNativeResponse();
    return message;
  },
};

/** Msg defines the gRPC Msg service for transactions. */
export interface Msg {
  /** CreateDenom: registers a token factory denom. */
  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
  ChangeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse>;
  /**
   * UpdateModuleParams: A governance operation for updating the x/tokenfactory
   * module parameters.
   */
  UpdateModuleParams(request: MsgUpdateModuleParams): Promise<MsgUpdateModuleParamsResponse>;
  Mint(request: MsgMint): Promise<MsgMintResponse>;
  Burn(request: MsgBurn): Promise<MsgBurnResponse>;
  SetDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse>;
  /**
   * SudoSetDenomMetadata: sdk.Msg (TxMsg) enabling Nibiru's "sudoers" to
   * change bank metadata. [SUDO] Only callable by sudoers.
   */
  SudoSetDenomMetadata(request: MsgSudoSetDenomMetadata): Promise<MsgSudoSetDenomMetadataResponse>;
  /** burns a native token such as unibi */
  BurnNative(request: MsgBurnNative): Promise<MsgBurnNativeResponse>;
}

export const MsgServiceName = "nibiru.tokenfactory.v1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.CreateDenom = this.CreateDenom.bind(this);
    this.ChangeAdmin = this.ChangeAdmin.bind(this);
    this.UpdateModuleParams = this.UpdateModuleParams.bind(this);
    this.Mint = this.Mint.bind(this);
    this.Burn = this.Burn.bind(this);
    this.SetDenomMetadata = this.SetDenomMetadata.bind(this);
    this.SudoSetDenomMetadata = this.SudoSetDenomMetadata.bind(this);
    this.BurnNative = this.BurnNative.bind(this);
  }
  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse> {
    const data = MsgCreateDenom.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateDenom", data);
    return promise.then((data) => MsgCreateDenomResponse.decode(_m0.Reader.create(data)));
  }

  ChangeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse> {
    const data = MsgChangeAdmin.encode(request).finish();
    const promise = this.rpc.request(this.service, "ChangeAdmin", data);
    return promise.then((data) => MsgChangeAdminResponse.decode(_m0.Reader.create(data)));
  }

  UpdateModuleParams(request: MsgUpdateModuleParams): Promise<MsgUpdateModuleParamsResponse> {
    const data = MsgUpdateModuleParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateModuleParams", data);
    return promise.then((data) => MsgUpdateModuleParamsResponse.decode(_m0.Reader.create(data)));
  }

  Mint(request: MsgMint): Promise<MsgMintResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request(this.service, "Mint", data);
    return promise.then((data) => MsgMintResponse.decode(_m0.Reader.create(data)));
  }

  Burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request(this.service, "Burn", data);
    return promise.then((data) => MsgBurnResponse.decode(_m0.Reader.create(data)));
  }

  SetDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse> {
    const data = MsgSetDenomMetadata.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetDenomMetadata", data);
    return promise.then((data) => MsgSetDenomMetadataResponse.decode(_m0.Reader.create(data)));
  }

  SudoSetDenomMetadata(request: MsgSudoSetDenomMetadata): Promise<MsgSudoSetDenomMetadataResponse> {
    const data = MsgSudoSetDenomMetadata.encode(request).finish();
    const promise = this.rpc.request(this.service, "SudoSetDenomMetadata", data);
    return promise.then((data) => MsgSudoSetDenomMetadataResponse.decode(_m0.Reader.create(data)));
  }

  BurnNative(request: MsgBurnNative): Promise<MsgBurnNativeResponse> {
    const data = MsgBurnNative.encode(request).finish();
    const promise = this.rpc.request(this.service, "BurnNative", data);
    return promise.then((data) => MsgBurnNativeResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
