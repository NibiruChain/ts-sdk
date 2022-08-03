/* eslint-disable */
import { Params } from './params'
import { Coin } from '../cosmos/base/v1beta1/coin'
import Long from 'long'
import _m0 from 'protobufjs/minimal'

export const protobufPackage = 'nibiru.stablecoin.v1'

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params
}

/**
 * QueryModuleAccountBalances is the request type for the balance of the
 * x/stablecoin module account.
 */
export interface QueryModuleAccountBalances {}

export interface QueryModuleAccountBalancesResponse {
  /** ModuleAccountBalances is the balance of all coins in the x/stablecoin module. */
  moduleAccountBalances: Coin[]
}

/**
 * QueryCirculatingSupplies is the request type for the circulating supply of
 * both NIBI and NUSD.
 */
export interface QueryCirculatingSupplies {}

export interface QueryCirculatingSuppliesResponse {
  nibi?: Coin
  nusd?: Coin
}

/** QueryGovToMintStable is the request type for the Query/GovToMintStable RPC method */
export interface QueryGovToMintStable {
  collateral?: Coin
}

/** QueryGovToMintStableResponse is the response type for 'QueryGovToMintStable' */
export interface QueryGovToMintStableResponse {
  gov?: Coin
}

export interface LiquidityRatioInfo {
  liquidityRatio: string
  upperBand: string
  lowerBand: string
}

export interface QueryLiquidityRatioInfoRequest {}

export interface QueryLiquidityRatioInfoResponse {
  info?: LiquidityRatioInfo
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {}
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryParamsRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): QueryParamsRequest {
    return {}
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest()
    return message
  },
}

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined }
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryParamsResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    }
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {}
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse()
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined
    return message
  },
}

function createBaseQueryModuleAccountBalances(): QueryModuleAccountBalances {
  return {}
}

export const QueryModuleAccountBalances = {
  encode(_: QueryModuleAccountBalances, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountBalances {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryModuleAccountBalances()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): QueryModuleAccountBalances {
    return {}
  },

  toJSON(_: QueryModuleAccountBalances): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryModuleAccountBalances>, I>>(_: I): QueryModuleAccountBalances {
    const message = createBaseQueryModuleAccountBalances()
    return message
  },
}

function createBaseQueryModuleAccountBalancesResponse(): QueryModuleAccountBalancesResponse {
  return { moduleAccountBalances: [] }
}

export const QueryModuleAccountBalancesResponse = {
  encode(message: QueryModuleAccountBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.moduleAccountBalances) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryModuleAccountBalancesResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.moduleAccountBalances.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryModuleAccountBalancesResponse {
    return {
      moduleAccountBalances: Array.isArray(object?.moduleAccountBalances)
        ? object.moduleAccountBalances.map((e: any) => Coin.fromJSON(e))
        : [],
    }
  },

  toJSON(message: QueryModuleAccountBalancesResponse): unknown {
    const obj: any = {}
    if (message.moduleAccountBalances) {
      obj.moduleAccountBalances = message.moduleAccountBalances.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.moduleAccountBalances = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryModuleAccountBalancesResponse>, I>>(
    object: I,
  ): QueryModuleAccountBalancesResponse {
    const message = createBaseQueryModuleAccountBalancesResponse()
    message.moduleAccountBalances = object.moduleAccountBalances?.map((e) => Coin.fromPartial(e)) || []
    return message
  },
}

function createBaseQueryCirculatingSupplies(): QueryCirculatingSupplies {
  return {}
}

export const QueryCirculatingSupplies = {
  encode(_: QueryCirculatingSupplies, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCirculatingSupplies {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryCirculatingSupplies()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): QueryCirculatingSupplies {
    return {}
  },

  toJSON(_: QueryCirculatingSupplies): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryCirculatingSupplies>, I>>(_: I): QueryCirculatingSupplies {
    const message = createBaseQueryCirculatingSupplies()
    return message
  },
}

function createBaseQueryCirculatingSuppliesResponse(): QueryCirculatingSuppliesResponse {
  return { nibi: undefined, nusd: undefined }
}

export const QueryCirculatingSuppliesResponse = {
  encode(message: QueryCirculatingSuppliesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nibi !== undefined) {
      Coin.encode(message.nibi, writer.uint32(10).fork()).ldelim()
    }
    if (message.nusd !== undefined) {
      Coin.encode(message.nusd, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCirculatingSuppliesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryCirculatingSuppliesResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.nibi = Coin.decode(reader, reader.uint32())
          break
        case 2:
          message.nusd = Coin.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryCirculatingSuppliesResponse {
    return {
      nibi: isSet(object.nibi) ? Coin.fromJSON(object.nibi) : undefined,
      nusd: isSet(object.nusd) ? Coin.fromJSON(object.nusd) : undefined,
    }
  },

  toJSON(message: QueryCirculatingSuppliesResponse): unknown {
    const obj: any = {}
    message.nibi !== undefined && (obj.nibi = message.nibi ? Coin.toJSON(message.nibi) : undefined)
    message.nusd !== undefined && (obj.nusd = message.nusd ? Coin.toJSON(message.nusd) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryCirculatingSuppliesResponse>, I>>(
    object: I,
  ): QueryCirculatingSuppliesResponse {
    const message = createBaseQueryCirculatingSuppliesResponse()
    message.nibi = object.nibi !== undefined && object.nibi !== null ? Coin.fromPartial(object.nibi) : undefined
    message.nusd = object.nusd !== undefined && object.nusd !== null ? Coin.fromPartial(object.nusd) : undefined
    return message
  },
}

function createBaseQueryGovToMintStable(): QueryGovToMintStable {
  return { collateral: undefined }
}

export const QueryGovToMintStable = {
  encode(message: QueryGovToMintStable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGovToMintStable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryGovToMintStable()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.collateral = Coin.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGovToMintStable {
    return {
      collateral: isSet(object.collateral) ? Coin.fromJSON(object.collateral) : undefined,
    }
  },

  toJSON(message: QueryGovToMintStable): unknown {
    const obj: any = {}
    message.collateral !== undefined &&
      (obj.collateral = message.collateral ? Coin.toJSON(message.collateral) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryGovToMintStable>, I>>(object: I): QueryGovToMintStable {
    const message = createBaseQueryGovToMintStable()
    message.collateral =
      object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined
    return message
  },
}

function createBaseQueryGovToMintStableResponse(): QueryGovToMintStableResponse {
  return { gov: undefined }
}

export const QueryGovToMintStableResponse = {
  encode(message: QueryGovToMintStableResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gov !== undefined) {
      Coin.encode(message.gov, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGovToMintStableResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryGovToMintStableResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.gov = Coin.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGovToMintStableResponse {
    return {
      gov: isSet(object.gov) ? Coin.fromJSON(object.gov) : undefined,
    }
  },

  toJSON(message: QueryGovToMintStableResponse): unknown {
    const obj: any = {}
    message.gov !== undefined && (obj.gov = message.gov ? Coin.toJSON(message.gov) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryGovToMintStableResponse>, I>>(object: I): QueryGovToMintStableResponse {
    const message = createBaseQueryGovToMintStableResponse()
    message.gov = object.gov !== undefined && object.gov !== null ? Coin.fromPartial(object.gov) : undefined
    return message
  },
}

function createBaseLiquidityRatioInfo(): LiquidityRatioInfo {
  return { liquidityRatio: '', upperBand: '', lowerBand: '' }
}

export const LiquidityRatioInfo = {
  encode(message: LiquidityRatioInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidityRatio !== '') {
      writer.uint32(10).string(message.liquidityRatio)
    }
    if (message.upperBand !== '') {
      writer.uint32(18).string(message.upperBand)
    }
    if (message.lowerBand !== '') {
      writer.uint32(26).string(message.lowerBand)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityRatioInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseLiquidityRatioInfo()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.liquidityRatio = reader.string()
          break
        case 2:
          message.upperBand = reader.string()
          break
        case 3:
          message.lowerBand = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): LiquidityRatioInfo {
    return {
      liquidityRatio: isSet(object.liquidityRatio) ? String(object.liquidityRatio) : '',
      upperBand: isSet(object.upperBand) ? String(object.upperBand) : '',
      lowerBand: isSet(object.lowerBand) ? String(object.lowerBand) : '',
    }
  },

  toJSON(message: LiquidityRatioInfo): unknown {
    const obj: any = {}
    message.liquidityRatio !== undefined && (obj.liquidityRatio = message.liquidityRatio)
    message.upperBand !== undefined && (obj.upperBand = message.upperBand)
    message.lowerBand !== undefined && (obj.lowerBand = message.lowerBand)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<LiquidityRatioInfo>, I>>(object: I): LiquidityRatioInfo {
    const message = createBaseLiquidityRatioInfo()
    message.liquidityRatio = object.liquidityRatio ?? ''
    message.upperBand = object.upperBand ?? ''
    message.lowerBand = object.lowerBand ?? ''
    return message
  },
}

function createBaseQueryLiquidityRatioInfoRequest(): QueryLiquidityRatioInfoRequest {
  return {}
}

export const QueryLiquidityRatioInfoRequest = {
  encode(_: QueryLiquidityRatioInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityRatioInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryLiquidityRatioInfoRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): QueryLiquidityRatioInfoRequest {
    return {}
  },

  toJSON(_: QueryLiquidityRatioInfoRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryLiquidityRatioInfoRequest>, I>>(_: I): QueryLiquidityRatioInfoRequest {
    const message = createBaseQueryLiquidityRatioInfoRequest()
    return message
  },
}

function createBaseQueryLiquidityRatioInfoResponse(): QueryLiquidityRatioInfoResponse {
  return { info: undefined }
}

export const QueryLiquidityRatioInfoResponse = {
  encode(message: QueryLiquidityRatioInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== undefined) {
      LiquidityRatioInfo.encode(message.info, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityRatioInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryLiquidityRatioInfoResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.info = LiquidityRatioInfo.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryLiquidityRatioInfoResponse {
    return {
      info: isSet(object.info) ? LiquidityRatioInfo.fromJSON(object.info) : undefined,
    }
  },

  toJSON(message: QueryLiquidityRatioInfoResponse): unknown {
    const obj: any = {}
    message.info !== undefined && (obj.info = message.info ? LiquidityRatioInfo.toJSON(message.info) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryLiquidityRatioInfoResponse>, I>>(
    object: I,
  ): QueryLiquidityRatioInfoResponse {
    const message = createBaseQueryLiquidityRatioInfoResponse()
    message.info =
      object.info !== undefined && object.info !== null ? LiquidityRatioInfo.fromPartial(object.info) : undefined
    return message
  },
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the x/stablecoin module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>
  /** ModuleAccountBalances queries the account balance of x/stablecoin. */
  ModuleAccountBalances(request: QueryModuleAccountBalances): Promise<QueryModuleAccountBalancesResponse>
  CirculatingSupplies(request: QueryCirculatingSupplies): Promise<QueryCirculatingSuppliesResponse>
  LiquidityRatioInfo(request: QueryLiquidityRatioInfoRequest): Promise<QueryLiquidityRatioInfoResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.Params = this.Params.bind(this)
    this.ModuleAccountBalances = this.ModuleAccountBalances.bind(this)
    this.CirculatingSupplies = this.CirculatingSupplies.bind(this)
    this.LiquidityRatioInfo = this.LiquidityRatioInfo.bind(this)
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish()
    const promise = this.rpc.request('nibiru.stablecoin.v1.Query', 'Params', data)
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)))
  }

  ModuleAccountBalances(request: QueryModuleAccountBalances): Promise<QueryModuleAccountBalancesResponse> {
    const data = QueryModuleAccountBalances.encode(request).finish()
    const promise = this.rpc.request('nibiru.stablecoin.v1.Query', 'ModuleAccountBalances', data)
    return promise.then((data) => QueryModuleAccountBalancesResponse.decode(new _m0.Reader(data)))
  }

  CirculatingSupplies(request: QueryCirculatingSupplies): Promise<QueryCirculatingSuppliesResponse> {
    const data = QueryCirculatingSupplies.encode(request).finish()
    const promise = this.rpc.request('nibiru.stablecoin.v1.Query', 'CirculatingSupplies', data)
    return promise.then((data) => QueryCirculatingSuppliesResponse.decode(new _m0.Reader(data)))
  }

  LiquidityRatioInfo(request: QueryLiquidityRatioInfoRequest): Promise<QueryLiquidityRatioInfoResponse> {
    const data = QueryLiquidityRatioInfoRequest.encode(request).finish()
    const promise = this.rpc.request('nibiru.stablecoin.v1.Query', 'LiquidityRatioInfo', data)
    return promise.then((data) => QueryLiquidityRatioInfoResponse.decode(new _m0.Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
