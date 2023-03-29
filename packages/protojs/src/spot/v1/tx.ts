/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Pool, PoolAsset, PoolParams } from "./pool";

export const protobufPackage = "nibiru.spot.v1";

export interface MsgCreatePool {
  creator: string;
  poolParams?: PoolParams;
  poolAssets: PoolAsset[];
}

export interface MsgCreatePoolResponse {
  poolId: Long;
}

/** Message to join a pool (identified by poolId) with a set of tokens to deposit. */
export interface MsgJoinPool {
  sender: string;
  poolId: Long;
  tokensIn: Coin[];
  useAllCoins: boolean;
}

/** Response when a user joins a pool. */
export interface MsgJoinPoolResponse {
  /** the final state of the pool after a join */
  pool?: Pool;
  /** sum of LP tokens minted from the join */
  numPoolSharesOut?: Coin;
  /** remaining tokens from attempting to join the pool */
  remainingCoins: Coin[];
}

export interface MsgExitPool {
  sender: string;
  poolId: Long;
  poolShares?: Coin;
}

export interface MsgExitPoolResponse {
  tokensOut: Coin[];
}

export interface MsgSwapAssets {
  sender: string;
  poolId: Long;
  tokenIn?: Coin;
  tokenOutDenom: string;
}

export interface MsgSwapAssetsResponse {
  tokenOut?: Coin;
}

function createBaseMsgCreatePool(): MsgCreatePool {
  return { creator: "", poolParams: undefined, poolAssets: [] };
}

export const MsgCreatePool = {
  encode(message: MsgCreatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.poolAssets) {
      PoolAsset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.poolParams = PoolParams.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolParams: isSet(object.poolParams) ? PoolParams.fromJSON(object.poolParams) : undefined,
      poolAssets: Array.isArray(object?.poolAssets) ? object.poolAssets.map((e: any) => PoolAsset.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgCreatePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolParams !== undefined &&
      (obj.poolParams = message.poolParams ? PoolParams.toJSON(message.poolParams) : undefined);
    if (message.poolAssets) {
      obj.poolAssets = message.poolAssets.map((e) => e ? PoolAsset.toJSON(e) : undefined);
    } else {
      obj.poolAssets = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreatePool>, I>>(base?: I): MsgCreatePool {
    return MsgCreatePool.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePool>, I>>(object: I): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.creator = object.creator ?? "";
    message.poolParams = (object.poolParams !== undefined && object.poolParams !== null)
      ? PoolParams.fromPartial(object.poolParams)
      : undefined;
    message.poolAssets = object.poolAssets?.map((e) => PoolAsset.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return { poolId: Long.UZERO };
}

export const MsgCreatePoolResponse = {
  encode(message: MsgCreatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePoolResponse {
    return { poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO };
  },

  toJSON(message: MsgCreatePoolResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreatePoolResponse>, I>>(base?: I): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePoolResponse>, I>>(object: I): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgJoinPool(): MsgJoinPool {
  return { sender: "", poolId: Long.UZERO, tokensIn: [], useAllCoins: false };
}

export const MsgJoinPool = {
  encode(message: MsgJoinPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.tokensIn) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.useAllCoins === true) {
      writer.uint32(32).bool(message.useAllCoins);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.tokensIn.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.useAllCoins = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgJoinPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokensIn: Array.isArray(object?.tokensIn) ? object.tokensIn.map((e: any) => Coin.fromJSON(e)) : [],
      useAllCoins: isSet(object.useAllCoins) ? Boolean(object.useAllCoins) : false,
    };
  },

  toJSON(message: MsgJoinPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.tokensIn) {
      obj.tokensIn = message.tokensIn.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokensIn = [];
    }
    message.useAllCoins !== undefined && (obj.useAllCoins = message.useAllCoins);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgJoinPool>, I>>(base?: I): MsgJoinPool {
    return MsgJoinPool.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgJoinPool>, I>>(object: I): MsgJoinPool {
    const message = createBaseMsgJoinPool();
    message.sender = object.sender ?? "";
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.tokensIn = object.tokensIn?.map((e) => Coin.fromPartial(e)) || [];
    message.useAllCoins = object.useAllCoins ?? false;
    return message;
  },
};

function createBaseMsgJoinPoolResponse(): MsgJoinPoolResponse {
  return { pool: undefined, numPoolSharesOut: undefined, remainingCoins: [] };
}

export const MsgJoinPoolResponse = {
  encode(message: MsgJoinPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    if (message.numPoolSharesOut !== undefined) {
      Coin.encode(message.numPoolSharesOut, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.remainingCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pool = Pool.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.numPoolSharesOut = Coin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.remainingCoins.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgJoinPoolResponse {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
      numPoolSharesOut: isSet(object.numPoolSharesOut) ? Coin.fromJSON(object.numPoolSharesOut) : undefined,
      remainingCoins: Array.isArray(object?.remainingCoins)
        ? object.remainingCoins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgJoinPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    message.numPoolSharesOut !== undefined &&
      (obj.numPoolSharesOut = message.numPoolSharesOut ? Coin.toJSON(message.numPoolSharesOut) : undefined);
    if (message.remainingCoins) {
      obj.remainingCoins = message.remainingCoins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.remainingCoins = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgJoinPoolResponse>, I>>(base?: I): MsgJoinPoolResponse {
    return MsgJoinPoolResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgJoinPoolResponse>, I>>(object: I): MsgJoinPoolResponse {
    const message = createBaseMsgJoinPoolResponse();
    message.pool = (object.pool !== undefined && object.pool !== null) ? Pool.fromPartial(object.pool) : undefined;
    message.numPoolSharesOut = (object.numPoolSharesOut !== undefined && object.numPoolSharesOut !== null)
      ? Coin.fromPartial(object.numPoolSharesOut)
      : undefined;
    message.remainingCoins = object.remainingCoins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgExitPool(): MsgExitPool {
  return { sender: "", poolId: Long.UZERO, poolShares: undefined };
}

export const MsgExitPool = {
  encode(message: MsgExitPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.poolShares !== undefined) {
      Coin.encode(message.poolShares, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitPool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.poolShares = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgExitPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      poolShares: isSet(object.poolShares) ? Coin.fromJSON(object.poolShares) : undefined,
    };
  },

  toJSON(message: MsgExitPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.poolShares !== undefined &&
      (obj.poolShares = message.poolShares ? Coin.toJSON(message.poolShares) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgExitPool>, I>>(base?: I): MsgExitPool {
    return MsgExitPool.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgExitPool>, I>>(object: I): MsgExitPool {
    const message = createBaseMsgExitPool();
    message.sender = object.sender ?? "";
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.poolShares = (object.poolShares !== undefined && object.poolShares !== null)
      ? Coin.fromPartial(object.poolShares)
      : undefined;
    return message;
  },
};

function createBaseMsgExitPoolResponse(): MsgExitPoolResponse {
  return { tokensOut: [] };
}

export const MsgExitPoolResponse = {
  encode(message: MsgExitPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokensOut) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitPoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag != 26) {
            break;
          }

          message.tokensOut.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgExitPoolResponse {
    return { tokensOut: Array.isArray(object?.tokensOut) ? object.tokensOut.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: MsgExitPoolResponse): unknown {
    const obj: any = {};
    if (message.tokensOut) {
      obj.tokensOut = message.tokensOut.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokensOut = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgExitPoolResponse>, I>>(base?: I): MsgExitPoolResponse {
    return MsgExitPoolResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgExitPoolResponse>, I>>(object: I): MsgExitPoolResponse {
    const message = createBaseMsgExitPoolResponse();
    message.tokensOut = object.tokensOut?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgSwapAssets(): MsgSwapAssets {
  return { sender: "", poolId: Long.UZERO, tokenIn: undefined, tokenOutDenom: "" };
}

export const MsgSwapAssets = {
  encode(message: MsgSwapAssets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(34).string(message.tokenOutDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapAssets {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapAssets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.tokenIn = Coin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.tokenOutDenom = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSwapAssets {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokenIn: isSet(object.tokenIn) ? Coin.fromJSON(object.tokenIn) : undefined,
      tokenOutDenom: isSet(object.tokenOutDenom) ? String(object.tokenOutDenom) : "",
    };
  },

  toJSON(message: MsgSwapAssets): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined);
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSwapAssets>, I>>(base?: I): MsgSwapAssets {
    return MsgSwapAssets.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapAssets>, I>>(object: I): MsgSwapAssets {
    const message = createBaseMsgSwapAssets();
    message.sender = object.sender ?? "";
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.tokenIn = (object.tokenIn !== undefined && object.tokenIn !== null)
      ? Coin.fromPartial(object.tokenIn)
      : undefined;
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  },
};

function createBaseMsgSwapAssetsResponse(): MsgSwapAssetsResponse {
  return { tokenOut: undefined };
}

export const MsgSwapAssetsResponse = {
  encode(message: MsgSwapAssetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag != 26) {
            break;
          }

          message.tokenOut = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSwapAssetsResponse {
    return { tokenOut: isSet(object.tokenOut) ? Coin.fromJSON(object.tokenOut) : undefined };
  },

  toJSON(message: MsgSwapAssetsResponse): unknown {
    const obj: any = {};
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSwapAssetsResponse>, I>>(base?: I): MsgSwapAssetsResponse {
    return MsgSwapAssetsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapAssetsResponse>, I>>(object: I): MsgSwapAssetsResponse {
    const message = createBaseMsgSwapAssetsResponse();
    message.tokenOut = (object.tokenOut !== undefined && object.tokenOut !== null)
      ? Coin.fromPartial(object.tokenOut)
      : undefined;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** Used to create a pool. */
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  /** Join a pool as a liquidity provider. */
  JoinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse>;
  /** Exit a pool position by returning LP shares */
  ExitPool(request: MsgExitPool): Promise<MsgExitPoolResponse>;
  /** Swap assets in a pool */
  SwapAssets(request: MsgSwapAssets): Promise<MsgSwapAssetsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "nibiru.spot.v1.Msg";
    this.rpc = rpc;
    this.CreatePool = this.CreatePool.bind(this);
    this.JoinPool = this.JoinPool.bind(this);
    this.ExitPool = this.ExitPool.bind(this);
    this.SwapAssets = this.SwapAssets.bind(this);
  }
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreatePool", data);
    return promise.then((data) => MsgCreatePoolResponse.decode(_m0.Reader.create(data)));
  }

  JoinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse> {
    const data = MsgJoinPool.encode(request).finish();
    const promise = this.rpc.request(this.service, "JoinPool", data);
    return promise.then((data) => MsgJoinPoolResponse.decode(_m0.Reader.create(data)));
  }

  ExitPool(request: MsgExitPool): Promise<MsgExitPoolResponse> {
    const data = MsgExitPool.encode(request).finish();
    const promise = this.rpc.request(this.service, "ExitPool", data);
    return promise.then((data) => MsgExitPoolResponse.decode(_m0.Reader.create(data)));
  }

  SwapAssets(request: MsgSwapAssets): Promise<MsgSwapAssetsResponse> {
    const data = MsgSwapAssets.encode(request).finish();
    const promise = this.rpc.request(this.service, "SwapAssets", data);
    return promise.then((data) => MsgSwapAssetsResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
