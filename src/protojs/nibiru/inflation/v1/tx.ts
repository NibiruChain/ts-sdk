/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { InflationDistribution } from "./inflation";

/** MsgToggleInflation defines a message to enable or disable inflation. */
export interface MsgToggleInflation {
  sender: string;
  enable: boolean;
}

export interface MsgEditInflationParams {
  sender: string;
  inflationEnabled: boolean;
  polynomialFactors: string[];
  inflationDistribution?: InflationDistribution;
  epochsPerPeriod: string;
  periodsPerYear: string;
  maxPeriod: string;
}

export interface MsgToggleInflationResponse {
}

export interface MsgEditInflationParamsResponse {
}

/** MsgBurn: allows burning of any token */
export interface MsgBurn {
  sender: string;
  coin?: Coin;
}

export interface MsgBurnResponse {
}

function createBaseMsgToggleInflation(): MsgToggleInflation {
  return { sender: "", enable: false };
}

export const MsgToggleInflation = {
  encode(message: MsgToggleInflation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.enable === true) {
      writer.uint32(16).bool(message.enable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleInflation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleInflation();
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
          if (tag !== 16) {
            break;
          }

          message.enable = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgToggleInflation {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      enable: isSet(object.enable) ? Boolean(object.enable) : false,
    };
  },

  toJSON(message: MsgToggleInflation): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.enable !== undefined && (obj.enable = message.enable);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgToggleInflation>, I>>(base?: I): MsgToggleInflation {
    return MsgToggleInflation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgToggleInflation>, I>>(object: I): MsgToggleInflation {
    const message = createBaseMsgToggleInflation();
    message.sender = object.sender ?? "";
    message.enable = object.enable ?? false;
    return message;
  },
};

function createBaseMsgEditInflationParams(): MsgEditInflationParams {
  return {
    sender: "",
    inflationEnabled: false,
    polynomialFactors: [],
    inflationDistribution: undefined,
    epochsPerPeriod: "",
    periodsPerYear: "",
    maxPeriod: "",
  };
}

export const MsgEditInflationParams = {
  encode(message: MsgEditInflationParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.inflationEnabled === true) {
      writer.uint32(16).bool(message.inflationEnabled);
    }
    for (const v of message.polynomialFactors) {
      writer.uint32(26).string(v!);
    }
    if (message.inflationDistribution !== undefined) {
      InflationDistribution.encode(message.inflationDistribution, writer.uint32(34).fork()).ldelim();
    }
    if (message.epochsPerPeriod !== "") {
      writer.uint32(42).string(message.epochsPerPeriod);
    }
    if (message.periodsPerYear !== "") {
      writer.uint32(50).string(message.periodsPerYear);
    }
    if (message.maxPeriod !== "") {
      writer.uint32(58).string(message.maxPeriod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditInflationParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditInflationParams();
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
          if (tag !== 16) {
            break;
          }

          message.inflationEnabled = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.polynomialFactors.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.inflationDistribution = InflationDistribution.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.epochsPerPeriod = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.periodsPerYear = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.maxPeriod = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgEditInflationParams {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      inflationEnabled: isSet(object.inflationEnabled) ? Boolean(object.inflationEnabled) : false,
      polynomialFactors: Array.isArray(object?.polynomialFactors)
        ? object.polynomialFactors.map((e: any) => String(e))
        : [],
      inflationDistribution: isSet(object.inflationDistribution)
        ? InflationDistribution.fromJSON(object.inflationDistribution)
        : undefined,
      epochsPerPeriod: isSet(object.epochsPerPeriod) ? String(object.epochsPerPeriod) : "",
      periodsPerYear: isSet(object.periodsPerYear) ? String(object.periodsPerYear) : "",
      maxPeriod: isSet(object.maxPeriod) ? String(object.maxPeriod) : "",
    };
  },

  toJSON(message: MsgEditInflationParams): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.inflationEnabled !== undefined && (obj.inflationEnabled = message.inflationEnabled);
    if (message.polynomialFactors) {
      obj.polynomialFactors = message.polynomialFactors.map((e) => e);
    } else {
      obj.polynomialFactors = [];
    }
    message.inflationDistribution !== undefined && (obj.inflationDistribution = message.inflationDistribution
      ? InflationDistribution.toJSON(message.inflationDistribution)
      : undefined);
    message.epochsPerPeriod !== undefined && (obj.epochsPerPeriod = message.epochsPerPeriod);
    message.periodsPerYear !== undefined && (obj.periodsPerYear = message.periodsPerYear);
    message.maxPeriod !== undefined && (obj.maxPeriod = message.maxPeriod);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEditInflationParams>, I>>(base?: I): MsgEditInflationParams {
    return MsgEditInflationParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditInflationParams>, I>>(object: I): MsgEditInflationParams {
    const message = createBaseMsgEditInflationParams();
    message.sender = object.sender ?? "";
    message.inflationEnabled = object.inflationEnabled ?? false;
    message.polynomialFactors = object.polynomialFactors?.map((e) => e) || [];
    message.inflationDistribution =
      (object.inflationDistribution !== undefined && object.inflationDistribution !== null)
        ? InflationDistribution.fromPartial(object.inflationDistribution)
        : undefined;
    message.epochsPerPeriod = object.epochsPerPeriod ?? "";
    message.periodsPerYear = object.periodsPerYear ?? "";
    message.maxPeriod = object.maxPeriod ?? "";
    return message;
  },
};

function createBaseMsgToggleInflationResponse(): MsgToggleInflationResponse {
  return {};
}

export const MsgToggleInflationResponse = {
  encode(_: MsgToggleInflationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleInflationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleInflationResponse();
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

  fromJSON(_: any): MsgToggleInflationResponse {
    return {};
  },

  toJSON(_: MsgToggleInflationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgToggleInflationResponse>, I>>(base?: I): MsgToggleInflationResponse {
    return MsgToggleInflationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgToggleInflationResponse>, I>>(_: I): MsgToggleInflationResponse {
    const message = createBaseMsgToggleInflationResponse();
    return message;
  },
};

function createBaseMsgEditInflationParamsResponse(): MsgEditInflationParamsResponse {
  return {};
}

export const MsgEditInflationParamsResponse = {
  encode(_: MsgEditInflationParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditInflationParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditInflationParamsResponse();
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

  fromJSON(_: any): MsgEditInflationParamsResponse {
    return {};
  },

  toJSON(_: MsgEditInflationParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEditInflationParamsResponse>, I>>(base?: I): MsgEditInflationParamsResponse {
    return MsgEditInflationParamsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditInflationParamsResponse>, I>>(_: I): MsgEditInflationParamsResponse {
    const message = createBaseMsgEditInflationParamsResponse();
    return message;
  },
};

function createBaseMsgBurn(): MsgBurn {
  return { sender: "", coin: undefined };
}

export const MsgBurn = {
  encode(message: MsgBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
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
    };
  },

  toJSON(message: MsgBurn): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBurn>, I>>(base?: I): MsgBurn {
    return MsgBurn.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurn>, I>>(object: I): MsgBurn {
    const message = createBaseMsgBurn();
    message.sender = object.sender ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
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

export interface Msg {
  /** ToggleInflation defines a method to enable or disable inflation. */
  ToggleInflation(request: MsgToggleInflation): Promise<MsgToggleInflationResponse>;
  /** EditInflationParams defines a method to edit the inflation params. */
  EditInflationParams(request: MsgEditInflationParams): Promise<MsgEditInflationParamsResponse>;
}

export const MsgServiceName = "nibiru.inflation.v1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.ToggleInflation = this.ToggleInflation.bind(this);
    this.EditInflationParams = this.EditInflationParams.bind(this);
  }
  ToggleInflation(request: MsgToggleInflation): Promise<MsgToggleInflationResponse> {
    const data = MsgToggleInflation.encode(request).finish();
    const promise = this.rpc.request(this.service, "ToggleInflation", data);
    return promise.then((data) => MsgToggleInflationResponse.decode(_m0.Reader.create(data)));
  }

  EditInflationParams(request: MsgEditInflationParams): Promise<MsgEditInflationParamsResponse> {
    const data = MsgEditInflationParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "EditInflationParams", data);
    return promise.then((data) => MsgEditInflationParamsResponse.decode(_m0.Reader.create(data)));
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
