/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { AMM, Market, Position } from "./state";

export const protobufPackage = "nibiru.perp.v2";

export interface QueryPositionsRequest {
  trader: string;
}

export interface QueryPositionsResponse {
  positions: QueryPositionResponse[];
}

/**
 * QueryPositionRequest is the request type for the position of the x/perp
 * module account.
 */
export interface QueryPositionRequest {
  pair: string;
  trader: string;
}

export interface QueryPositionResponse {
  /** The position as it exists in the blockchain state */
  position?: Position;
  /**
   * The position's current notional value, if it were to be entirely closed (in
   * margin units).
   */
  positionNotional: string;
  /** The position's unrealized PnL. */
  unrealizedPnl: string;
  /** margin ratio of the position based on the spot price */
  marginRatio: string;
}

export interface QueryModuleAccountsRequest {
}

export interface QueryModuleAccountsResponse {
  accounts: AccountWithBalance[];
}

export interface AccountWithBalance {
  name: string;
  address: string;
  balance: Coin[];
}

export interface AmmMarket {
  market?: Market;
  amm?: AMM;
}

export interface QueryMarketsRequest {
}

export interface QueryMarketsResponse {
  ammMarkets: AmmMarket[];
}

function createBaseQueryPositionsRequest(): QueryPositionsRequest {
  return { trader: "" };
}

export const QueryPositionsRequest = {
  encode(message: QueryPositionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trader !== "") {
      writer.uint32(10).string(message.trader);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPositionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trader = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPositionsRequest {
    return { trader: isSet(object.trader) ? String(object.trader) : "" };
  },

  toJSON(message: QueryPositionsRequest): unknown {
    const obj: any = {};
    message.trader !== undefined && (obj.trader = message.trader);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPositionsRequest>, I>>(base?: I): QueryPositionsRequest {
    return QueryPositionsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryPositionsRequest>, I>>(object: I): QueryPositionsRequest {
    const message = createBaseQueryPositionsRequest();
    message.trader = object.trader ?? "";
    return message;
  },
};

function createBaseQueryPositionsResponse(): QueryPositionsResponse {
  return { positions: [] };
}

export const QueryPositionsResponse = {
  encode(message: QueryPositionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.positions) {
      QueryPositionResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.positions.push(QueryPositionResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPositionsResponse {
    return {
      positions: Array.isArray(object?.positions)
        ? object.positions.map((e: any) => QueryPositionResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryPositionsResponse): unknown {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map((e) => e ? QueryPositionResponse.toJSON(e) : undefined);
    } else {
      obj.positions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPositionsResponse>, I>>(base?: I): QueryPositionsResponse {
    return QueryPositionsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryPositionsResponse>, I>>(object: I): QueryPositionsResponse {
    const message = createBaseQueryPositionsResponse();
    message.positions = object.positions?.map((e) => QueryPositionResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryPositionRequest(): QueryPositionRequest {
  return { pair: "", trader: "" };
}

export const QueryPositionRequest = {
  encode(message: QueryPositionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.trader !== "") {
      writer.uint32(18).string(message.trader);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPositionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pair = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.trader = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPositionRequest {
    return {
      pair: isSet(object.pair) ? String(object.pair) : "",
      trader: isSet(object.trader) ? String(object.trader) : "",
    };
  },

  toJSON(message: QueryPositionRequest): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair);
    message.trader !== undefined && (obj.trader = message.trader);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPositionRequest>, I>>(base?: I): QueryPositionRequest {
    return QueryPositionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryPositionRequest>, I>>(object: I): QueryPositionRequest {
    const message = createBaseQueryPositionRequest();
    message.pair = object.pair ?? "";
    message.trader = object.trader ?? "";
    return message;
  },
};

function createBaseQueryPositionResponse(): QueryPositionResponse {
  return { position: undefined, positionNotional: "", unrealizedPnl: "", marginRatio: "" };
}

export const QueryPositionResponse = {
  encode(message: QueryPositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.positionNotional !== "") {
      writer.uint32(18).string(message.positionNotional);
    }
    if (message.unrealizedPnl !== "") {
      writer.uint32(26).string(message.unrealizedPnl);
    }
    if (message.marginRatio !== "") {
      writer.uint32(34).string(message.marginRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.position = Position.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.positionNotional = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.unrealizedPnl = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.marginRatio = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPositionResponse {
    return {
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
      positionNotional: isSet(object.positionNotional) ? String(object.positionNotional) : "",
      unrealizedPnl: isSet(object.unrealizedPnl) ? String(object.unrealizedPnl) : "",
      marginRatio: isSet(object.marginRatio) ? String(object.marginRatio) : "",
    };
  },

  toJSON(message: QueryPositionResponse): unknown {
    const obj: any = {};
    message.position !== undefined && (obj.position = message.position ? Position.toJSON(message.position) : undefined);
    message.positionNotional !== undefined && (obj.positionNotional = message.positionNotional);
    message.unrealizedPnl !== undefined && (obj.unrealizedPnl = message.unrealizedPnl);
    message.marginRatio !== undefined && (obj.marginRatio = message.marginRatio);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPositionResponse>, I>>(base?: I): QueryPositionResponse {
    return QueryPositionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryPositionResponse>, I>>(object: I): QueryPositionResponse {
    const message = createBaseQueryPositionResponse();
    message.position = (object.position !== undefined && object.position !== null)
      ? Position.fromPartial(object.position)
      : undefined;
    message.positionNotional = object.positionNotional ?? "";
    message.unrealizedPnl = object.unrealizedPnl ?? "";
    message.marginRatio = object.marginRatio ?? "";
    return message;
  },
};

function createBaseQueryModuleAccountsRequest(): QueryModuleAccountsRequest {
  return {};
}

export const QueryModuleAccountsRequest = {
  encode(_: QueryModuleAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsRequest();
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

  fromJSON(_: any): QueryModuleAccountsRequest {
    return {};
  },

  toJSON(_: QueryModuleAccountsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryModuleAccountsRequest>, I>>(base?: I): QueryModuleAccountsRequest {
    return QueryModuleAccountsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryModuleAccountsRequest>, I>>(_: I): QueryModuleAccountsRequest {
    const message = createBaseQueryModuleAccountsRequest();
    return message;
  },
};

function createBaseQueryModuleAccountsResponse(): QueryModuleAccountsResponse {
  return { accounts: [] };
}

export const QueryModuleAccountsResponse = {
  encode(message: QueryModuleAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      AccountWithBalance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accounts.push(AccountWithBalance.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryModuleAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => AccountWithBalance.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryModuleAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => e ? AccountWithBalance.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryModuleAccountsResponse>, I>>(base?: I): QueryModuleAccountsResponse {
    return QueryModuleAccountsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryModuleAccountsResponse>, I>>(object: I): QueryModuleAccountsResponse {
    const message = createBaseQueryModuleAccountsResponse();
    message.accounts = object.accounts?.map((e) => AccountWithBalance.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAccountWithBalance(): AccountWithBalance {
  return { name: "", address: "", balance: [] };
}

export const AccountWithBalance = {
  encode(message: AccountWithBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    for (const v of message.balance) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountWithBalance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountWithBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.balance.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccountWithBalance {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      address: isSet(object.address) ? String(object.address) : "",
      balance: Array.isArray(object?.balance) ? object.balance.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: AccountWithBalance): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.address !== undefined && (obj.address = message.address);
    if (message.balance) {
      obj.balance = message.balance.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.balance = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountWithBalance>, I>>(base?: I): AccountWithBalance {
    return AccountWithBalance.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AccountWithBalance>, I>>(object: I): AccountWithBalance {
    const message = createBaseAccountWithBalance();
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    message.balance = object.balance?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAmmMarket(): AmmMarket {
  return { market: undefined, amm: undefined };
}

export const AmmMarket = {
  encode(message: AmmMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== undefined) {
      Market.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    if (message.amm !== undefined) {
      AMM.encode(message.amm, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AmmMarket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAmmMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.market = Market.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amm = AMM.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AmmMarket {
    return {
      market: isSet(object.market) ? Market.fromJSON(object.market) : undefined,
      amm: isSet(object.amm) ? AMM.fromJSON(object.amm) : undefined,
    };
  },

  toJSON(message: AmmMarket): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market ? Market.toJSON(message.market) : undefined);
    message.amm !== undefined && (obj.amm = message.amm ? AMM.toJSON(message.amm) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AmmMarket>, I>>(base?: I): AmmMarket {
    return AmmMarket.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AmmMarket>, I>>(object: I): AmmMarket {
    const message = createBaseAmmMarket();
    message.market = (object.market !== undefined && object.market !== null)
      ? Market.fromPartial(object.market)
      : undefined;
    message.amm = (object.amm !== undefined && object.amm !== null) ? AMM.fromPartial(object.amm) : undefined;
    return message;
  },
};

function createBaseQueryMarketsRequest(): QueryMarketsRequest {
  return {};
}

export const QueryMarketsRequest = {
  encode(_: QueryMarketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketsRequest();
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

  fromJSON(_: any): QueryMarketsRequest {
    return {};
  },

  toJSON(_: QueryMarketsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryMarketsRequest>, I>>(base?: I): QueryMarketsRequest {
    return QueryMarketsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryMarketsRequest>, I>>(_: I): QueryMarketsRequest {
    const message = createBaseQueryMarketsRequest();
    return message;
  },
};

function createBaseQueryMarketsResponse(): QueryMarketsResponse {
  return { ammMarkets: [] };
}

export const QueryMarketsResponse = {
  encode(message: QueryMarketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ammMarkets) {
      AmmMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ammMarkets.push(AmmMarket.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryMarketsResponse {
    return {
      ammMarkets: Array.isArray(object?.ammMarkets) ? object.ammMarkets.map((e: any) => AmmMarket.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryMarketsResponse): unknown {
    const obj: any = {};
    if (message.ammMarkets) {
      obj.ammMarkets = message.ammMarkets.map((e) => e ? AmmMarket.toJSON(e) : undefined);
    } else {
      obj.ammMarkets = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryMarketsResponse>, I>>(base?: I): QueryMarketsResponse {
    return QueryMarketsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryMarketsResponse>, I>>(object: I): QueryMarketsResponse {
    const message = createBaseQueryMarketsResponse();
    message.ammMarkets = object.ammMarkets?.map((e) => AmmMarket.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  QueryPosition(request: QueryPositionRequest): Promise<QueryPositionResponse>;
  QueryPositions(request: QueryPositionsRequest): Promise<QueryPositionsResponse>;
  /** Queries the reserve assets in a given pool, identified by a token pair. */
  ModuleAccounts(request: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
  QueryMarkets(request: QueryMarketsRequest): Promise<QueryMarketsResponse>;
}

export const QueryServiceName = "nibiru.perp.v2.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.QueryPosition = this.QueryPosition.bind(this);
    this.QueryPositions = this.QueryPositions.bind(this);
    this.ModuleAccounts = this.ModuleAccounts.bind(this);
    this.QueryMarkets = this.QueryMarkets.bind(this);
  }
  QueryPosition(request: QueryPositionRequest): Promise<QueryPositionResponse> {
    const data = QueryPositionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryPosition", data);
    return promise.then((data) => QueryPositionResponse.decode(_m0.Reader.create(data)));
  }

  QueryPositions(request: QueryPositionsRequest): Promise<QueryPositionsResponse> {
    const data = QueryPositionsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryPositions", data);
    return promise.then((data) => QueryPositionsResponse.decode(_m0.Reader.create(data)));
  }

  ModuleAccounts(request: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse> {
    const data = QueryModuleAccountsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ModuleAccounts", data);
    return promise.then((data) => QueryModuleAccountsResponse.decode(_m0.Reader.create(data)));
  }

  QueryMarkets(request: QueryMarketsRequest): Promise<QueryMarketsResponse> {
    const data = QueryMarketsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryMarkets", data);
    return promise.then((data) => QueryMarketsResponse.decode(_m0.Reader.create(data)));
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
