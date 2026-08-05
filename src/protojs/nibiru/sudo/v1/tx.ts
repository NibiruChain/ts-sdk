/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ZeroGasActors } from "./state";

/** MsgEditSudoers: Msg to update the "Sudoers" state. */
export interface MsgEditSudoers {
  /**
   * Action: identifier for the type of edit that will take place. Using this
   * action field prevents us from needing to create several similar message
   * types.
   */
  action: string;
  /** Contracts: An input payload. */
  contracts: string[];
  /** Sender: Address for the signer of the transaction. */
  sender: string;
}

/** MsgEditSudoersResponse indicates the successful execution of MsgEditSudeors. */
export interface MsgEditSudoersResponse {
}

/** MsgChangeRoot: Msg to update the "Sudoers" state. */
export interface MsgChangeRoot {
  /** Sender: Address for the signer of the transaction. */
  sender: string;
  /** NewRoot: New root address. */
  newRoot: string;
}

/** MsgChangeRootResponse indicates the successful execution of MsgChangeRoot. */
export interface MsgChangeRootResponse {
}

/** MsgEditZeroGasActors: Tx msg to update the "ZeroGasActors" state. */
export interface MsgEditZeroGasActors {
  /**
   * Actors that can execute zero gas transactions against a set of
   * smart contracts.
   */
  actors?: ZeroGasActors;
  /** Sender: Nibiru Bech32 Address for the signer of the transaction. */
  sender: string;
}

/**
 * MsgEditZeroGasActorsResponse indicates the successful execution of
 * MsgEditZeroGasActors.
 */
export interface MsgEditZeroGasActorsResponse {
}

function createBaseMsgEditSudoers(): MsgEditSudoers {
  return { action: "", contracts: [], sender: "" };
}

export const MsgEditSudoers = {
  encode(message: MsgEditSudoers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== "") {
      writer.uint32(10).string(message.action);
    }
    for (const v of message.contracts) {
      writer.uint32(18).string(v!);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditSudoers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditSudoers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.action = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contracts.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sender = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgEditSudoers {
    return {
      action: isSet(object.action) ? String(object.action) : "",
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => String(e)) : [],
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgEditSudoers): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action);
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => e);
    } else {
      obj.contracts = [];
    }
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEditSudoers>, I>>(base?: I): MsgEditSudoers {
    return MsgEditSudoers.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditSudoers>, I>>(object: I): MsgEditSudoers {
    const message = createBaseMsgEditSudoers();
    message.action = object.action ?? "";
    message.contracts = object.contracts?.map((e) => e) || [];
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgEditSudoersResponse(): MsgEditSudoersResponse {
  return {};
}

export const MsgEditSudoersResponse = {
  encode(_: MsgEditSudoersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditSudoersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditSudoersResponse();
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

  fromJSON(_: any): MsgEditSudoersResponse {
    return {};
  },

  toJSON(_: MsgEditSudoersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEditSudoersResponse>, I>>(base?: I): MsgEditSudoersResponse {
    return MsgEditSudoersResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditSudoersResponse>, I>>(_: I): MsgEditSudoersResponse {
    const message = createBaseMsgEditSudoersResponse();
    return message;
  },
};

function createBaseMsgChangeRoot(): MsgChangeRoot {
  return { sender: "", newRoot: "" };
}

export const MsgChangeRoot = {
  encode(message: MsgChangeRoot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.newRoot !== "") {
      writer.uint32(18).string(message.newRoot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeRoot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeRoot();
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

          message.newRoot = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChangeRoot {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      newRoot: isSet(object.newRoot) ? String(object.newRoot) : "",
    };
  },

  toJSON(message: MsgChangeRoot): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.newRoot !== undefined && (obj.newRoot = message.newRoot);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgChangeRoot>, I>>(base?: I): MsgChangeRoot {
    return MsgChangeRoot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgChangeRoot>, I>>(object: I): MsgChangeRoot {
    const message = createBaseMsgChangeRoot();
    message.sender = object.sender ?? "";
    message.newRoot = object.newRoot ?? "";
    return message;
  },
};

function createBaseMsgChangeRootResponse(): MsgChangeRootResponse {
  return {};
}

export const MsgChangeRootResponse = {
  encode(_: MsgChangeRootResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeRootResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeRootResponse();
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

  fromJSON(_: any): MsgChangeRootResponse {
    return {};
  },

  toJSON(_: MsgChangeRootResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgChangeRootResponse>, I>>(base?: I): MsgChangeRootResponse {
    return MsgChangeRootResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgChangeRootResponse>, I>>(_: I): MsgChangeRootResponse {
    const message = createBaseMsgChangeRootResponse();
    return message;
  },
};

function createBaseMsgEditZeroGasActors(): MsgEditZeroGasActors {
  return { actors: undefined, sender: "" };
}

export const MsgEditZeroGasActors = {
  encode(message: MsgEditZeroGasActors, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actors !== undefined) {
      ZeroGasActors.encode(message.actors, writer.uint32(10).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditZeroGasActors {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditZeroGasActors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.actors = ZeroGasActors.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sender = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgEditZeroGasActors {
    return {
      actors: isSet(object.actors) ? ZeroGasActors.fromJSON(object.actors) : undefined,
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgEditZeroGasActors): unknown {
    const obj: any = {};
    message.actors !== undefined && (obj.actors = message.actors ? ZeroGasActors.toJSON(message.actors) : undefined);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEditZeroGasActors>, I>>(base?: I): MsgEditZeroGasActors {
    return MsgEditZeroGasActors.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditZeroGasActors>, I>>(object: I): MsgEditZeroGasActors {
    const message = createBaseMsgEditZeroGasActors();
    message.actors = (object.actors !== undefined && object.actors !== null)
      ? ZeroGasActors.fromPartial(object.actors)
      : undefined;
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgEditZeroGasActorsResponse(): MsgEditZeroGasActorsResponse {
  return {};
}

export const MsgEditZeroGasActorsResponse = {
  encode(_: MsgEditZeroGasActorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditZeroGasActorsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditZeroGasActorsResponse();
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

  fromJSON(_: any): MsgEditZeroGasActorsResponse {
    return {};
  },

  toJSON(_: MsgEditZeroGasActorsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEditZeroGasActorsResponse>, I>>(base?: I): MsgEditZeroGasActorsResponse {
    return MsgEditZeroGasActorsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditZeroGasActorsResponse>, I>>(_: I): MsgEditZeroGasActorsResponse {
    const message = createBaseMsgEditZeroGasActorsResponse();
    return message;
  },
};

/**
 * Msg defines the x/sudo module's Msg service. Protobuf `Msg` services are
 * called from `BaseApp` instances during `DeliverTx`. The `Msg` service will be
 * responsible for processing `sdk.Msg` requests.
 */
export interface Msg {
  /** EditSudoers updates the "Sudoers" state */
  EditSudoers(request: MsgEditSudoers): Promise<MsgEditSudoersResponse>;
  ChangeRoot(request: MsgChangeRoot): Promise<MsgChangeRootResponse>;
  /**
   * EditZeroGasActors updates the "ZeroGasActors" state. Zero gas actors are
   * a set of accounts that can execute zero gas transactions against a
   * whitelisted  set of smart contracts.
   */
  EditZeroGasActors(request: MsgEditZeroGasActors): Promise<MsgEditZeroGasActorsResponse>;
}

export const MsgServiceName = "nibiru.sudo.v1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.EditSudoers = this.EditSudoers.bind(this);
    this.ChangeRoot = this.ChangeRoot.bind(this);
    this.EditZeroGasActors = this.EditZeroGasActors.bind(this);
  }
  EditSudoers(request: MsgEditSudoers): Promise<MsgEditSudoersResponse> {
    const data = MsgEditSudoers.encode(request).finish();
    const promise = this.rpc.request(this.service, "EditSudoers", data);
    return promise.then((data) => MsgEditSudoersResponse.decode(_m0.Reader.create(data)));
  }

  ChangeRoot(request: MsgChangeRoot): Promise<MsgChangeRootResponse> {
    const data = MsgChangeRoot.encode(request).finish();
    const promise = this.rpc.request(this.service, "ChangeRoot", data);
    return promise.then((data) => MsgChangeRootResponse.decode(_m0.Reader.create(data)));
  }

  EditZeroGasActors(request: MsgEditZeroGasActors): Promise<MsgEditZeroGasActorsResponse> {
    const data = MsgEditZeroGasActors.encode(request).finish();
    const promise = this.rpc.request(this.service, "EditZeroGasActors", data);
    return promise.then((data) => MsgEditZeroGasActorsResponse.decode(_m0.Reader.create(data)));
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
