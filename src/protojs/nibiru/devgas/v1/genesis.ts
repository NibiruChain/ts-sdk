/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { FeeShare } from "./devgas";

/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** params are the feeshare module parameters */
  params?: ModuleParams;
  /** FeeShare is a slice of active registered contracts for fee distribution */
  feeShare: FeeShare[];
}

/** ModuleParams defines the params for the devgas module */
export interface ModuleParams {
  /** enable_feeshare defines a parameter to enable the feeshare module */
  enableFeeShare: boolean;
  /**
   * developer_shares defines the proportion of the transaction fees to be
   * distributed to the registered contract owner
   */
  developerShares: string;
  /**
   * allowed_denoms defines the list of denoms that are allowed to be paid to
   * the contract withdraw addresses. If said denom is not in the list, the fees
   * will ONLY be sent to the community pool.
   * If this list is empty, all denoms are allowed.
   */
  allowedDenoms: string[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, feeShare: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      ModuleParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feeShare) {
      FeeShare.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = ModuleParams.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.feeShare.push(FeeShare.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? ModuleParams.fromJSON(object.params) : undefined,
      feeShare: Array.isArray(object?.feeShare) ? object.feeShare.map((e: any) => FeeShare.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? ModuleParams.toJSON(message.params) : undefined);
    if (message.feeShare) {
      obj.feeShare = message.feeShare.map((e) => e ? FeeShare.toJSON(e) : undefined);
    } else {
      obj.feeShare = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? ModuleParams.fromPartial(object.params)
      : undefined;
    message.feeShare = object.feeShare?.map((e) => FeeShare.fromPartial(e)) || [];
    return message;
  },
};

function createBaseModuleParams(): ModuleParams {
  return { enableFeeShare: false, developerShares: "", allowedDenoms: [] };
}

export const ModuleParams = {
  encode(message: ModuleParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableFeeShare === true) {
      writer.uint32(8).bool(message.enableFeeShare);
    }
    if (message.developerShares !== "") {
      writer.uint32(18).string(message.developerShares);
    }
    for (const v of message.allowedDenoms) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enableFeeShare = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.developerShares = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.allowedDenoms.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModuleParams {
    return {
      enableFeeShare: isSet(object.enableFeeShare) ? Boolean(object.enableFeeShare) : false,
      developerShares: isSet(object.developerShares) ? String(object.developerShares) : "",
      allowedDenoms: Array.isArray(object?.allowedDenoms) ? object.allowedDenoms.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ModuleParams): unknown {
    const obj: any = {};
    message.enableFeeShare !== undefined && (obj.enableFeeShare = message.enableFeeShare);
    message.developerShares !== undefined && (obj.developerShares = message.developerShares);
    if (message.allowedDenoms) {
      obj.allowedDenoms = message.allowedDenoms.map((e) => e);
    } else {
      obj.allowedDenoms = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ModuleParams>, I>>(base?: I): ModuleParams {
    return ModuleParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ModuleParams>, I>>(object: I): ModuleParams {
    const message = createBaseModuleParams();
    message.enableFeeShare = object.enableFeeShare ?? false;
    message.developerShares = object.developerShares ?? "";
    message.allowedDenoms = object.allowedDenoms?.map((e) => e) || [];
    return message;
  },
};

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
