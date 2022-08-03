/* eslint-disable */
import { Duration } from '../../google/protobuf/duration'
import { PageRequest, PageResponse } from '../../cosmos/base/query/v1beta1/pagination'
import { Timestamp } from '../../google/protobuf/timestamp'
import Long from 'long'
import { Coin } from '../../cosmos/base/v1beta1/coin'
import _m0 from 'protobufjs/minimal'

export const protobufPackage = 'nibiru.incentivization.v1'

/** MsgCreateIncentivizationProgram is the request needed for the CreateIncentivizationProgram RPC. */
export interface MsgCreateIncentivizationProgram {
  /** sender defines the sender of the msg that needs to be signed. */
  sender: string
  /** lp_denom defines the liquidity pool denom that we want to incentivize. */
  lpDenom: string
  /**
   * min_lockup_duration defines the minimum lockup duration
   * required on the lp_denom to get the incentivization.
   */
  minLockupDuration?: Duration
  /** start_time identifies when the incentivization starts. */
  startTime?: Date
  /**
   * epochs defines the number of epochs the incentivization
   * program will last.
   */
  epochs: Long
  /**
   * initial_funds defines the initial funds to bootstrap the incentivization program's escrow.
   * This is optional.
   */
  initialFunds: Coin[]
}

/** MsgCreateIncentivizationProgramResponse is the response returned by the CreateIncentivizationProgram RPC. */
export interface MsgCreateIncentivizationProgramResponse {
  /** program_id defines the incentivization program unique identifier. */
  programId: Long
}

/** MsgFundIncentivizationProgram is the request for the FundIncentivizationProgram RPC. */
export interface MsgFundIncentivizationProgram {
  /** sender is the sender of the requests */
  sender: string
  /** id marks the incentivization program id. */
  id: Long
  /** funds is the amount of money sender deposits in the program funding escrow. */
  funds: Coin[]
}

export interface MsgFundIncentivizationProgramResponse {}

/** IncentivizationProgram defines how an incentivization program looks like. */
export interface IncentivizationProgram {
  /** id defines the unique uint64 id of the program */
  id: Long
  /**
   * escrow_address defines the escrow module account address
   * for the incentivization program.
   */
  escrowAddress: string
  /**
   * remaining_epochs defines the number of epochs left before the incentivization
   * program can be considered finalized.
   */
  remainingEpochs: Long
  /** lp_denom defines the liquidity pool denom that is being incentivized. */
  lpDenom: string
  /**
   * min_lockup_duration defines the minimum lp_denom lockup period
   * required to get the epochs' rewards.
   */
  minLockupDuration?: Duration
  /** start_time defines the incentivization program start time. */
  startTime?: Date
}

export interface GenesisState {
  incentivizationPrograms: IncentivizationProgram[]
}

export interface QueryIncentivizationProgramRequest {
  id: Long
}

export interface QueryIncentivizationProgramResponse {
  incentivizationProgram?: IncentivizationProgram
}

export interface QueryIncentivizationProgramsRequest {
  pagination?: PageRequest
}

export interface QueryIncentivizationProgramsResponse {
  incentivizationPrograms: IncentivizationProgram[]
  pagination?: PageResponse
}

function createBaseMsgCreateIncentivizationProgram(): MsgCreateIncentivizationProgram {
  return {
    sender: '',
    lpDenom: '',
    minLockupDuration: undefined,
    startTime: undefined,
    epochs: Long.ZERO,
    initialFunds: [],
  }
}

export const MsgCreateIncentivizationProgram = {
  encode(message: MsgCreateIncentivizationProgram, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender)
    }
    if (message.lpDenom !== '') {
      writer.uint32(18).string(message.lpDenom)
    }
    if (message.minLockupDuration !== undefined) {
      Duration.encode(message.minLockupDuration, writer.uint32(26).fork()).ldelim()
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim()
    }
    if (!message.epochs.isZero()) {
      writer.uint32(40).int64(message.epochs)
    }
    for (const v of message.initialFunds) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIncentivizationProgram {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgCreateIncentivizationProgram()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string()
          break
        case 2:
          message.lpDenom = reader.string()
          break
        case 3:
          message.minLockupDuration = Duration.decode(reader, reader.uint32())
          break
        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()))
          break
        case 5:
          message.epochs = reader.int64() as Long
          break
        case 7:
          message.initialFunds.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateIncentivizationProgram {
    return {
      sender: isSet(object.sender) ? String(object.sender) : '',
      lpDenom: isSet(object.lpDenom) ? String(object.lpDenom) : '',
      minLockupDuration: isSet(object.minLockupDuration) ? Duration.fromJSON(object.minLockupDuration) : undefined,
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      epochs: isSet(object.epochs) ? Long.fromValue(object.epochs) : Long.ZERO,
      initialFunds: Array.isArray(object?.initialFunds) ? object.initialFunds.map((e: any) => Coin.fromJSON(e)) : [],
    }
  },

  toJSON(message: MsgCreateIncentivizationProgram): unknown {
    const obj: any = {}
    message.sender !== undefined && (obj.sender = message.sender)
    message.lpDenom !== undefined && (obj.lpDenom = message.lpDenom)
    message.minLockupDuration !== undefined &&
      (obj.minLockupDuration = message.minLockupDuration ? Duration.toJSON(message.minLockupDuration) : undefined)
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString())
    message.epochs !== undefined && (obj.epochs = (message.epochs || Long.ZERO).toString())
    if (message.initialFunds) {
      obj.initialFunds = message.initialFunds.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.initialFunds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateIncentivizationProgram>, I>>(
    object: I,
  ): MsgCreateIncentivizationProgram {
    const message = createBaseMsgCreateIncentivizationProgram()
    message.sender = object.sender ?? ''
    message.lpDenom = object.lpDenom ?? ''
    message.minLockupDuration =
      object.minLockupDuration !== undefined && object.minLockupDuration !== null
        ? Duration.fromPartial(object.minLockupDuration)
        : undefined
    message.startTime = object.startTime ?? undefined
    message.epochs = object.epochs !== undefined && object.epochs !== null ? Long.fromValue(object.epochs) : Long.ZERO
    message.initialFunds = object.initialFunds?.map((e) => Coin.fromPartial(e)) || []
    return message
  },
}

function createBaseMsgCreateIncentivizationProgramResponse(): MsgCreateIncentivizationProgramResponse {
  return { programId: Long.UZERO }
}

export const MsgCreateIncentivizationProgramResponse = {
  encode(message: MsgCreateIncentivizationProgramResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.programId.isZero()) {
      writer.uint32(8).uint64(message.programId)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIncentivizationProgramResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgCreateIncentivizationProgramResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.programId = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateIncentivizationProgramResponse {
    return {
      programId: isSet(object.programId) ? Long.fromValue(object.programId) : Long.UZERO,
    }
  },

  toJSON(message: MsgCreateIncentivizationProgramResponse): unknown {
    const obj: any = {}
    message.programId !== undefined && (obj.programId = (message.programId || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateIncentivizationProgramResponse>, I>>(
    object: I,
  ): MsgCreateIncentivizationProgramResponse {
    const message = createBaseMsgCreateIncentivizationProgramResponse()
    message.programId =
      object.programId !== undefined && object.programId !== null ? Long.fromValue(object.programId) : Long.UZERO
    return message
  },
}

function createBaseMsgFundIncentivizationProgram(): MsgFundIncentivizationProgram {
  return { sender: '', id: Long.UZERO, funds: [] }
}

export const MsgFundIncentivizationProgram = {
  encode(message: MsgFundIncentivizationProgram, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender)
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id)
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundIncentivizationProgram {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgFundIncentivizationProgram()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string()
          break
        case 2:
          message.id = reader.uint64() as Long
          break
        case 3:
          message.funds.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgFundIncentivizationProgram {
    return {
      sender: isSet(object.sender) ? String(object.sender) : '',
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
    }
  },

  toJSON(message: MsgFundIncentivizationProgram): unknown {
    const obj: any = {}
    message.sender !== undefined && (obj.sender = message.sender)
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    if (message.funds) {
      obj.funds = message.funds.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.funds = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgFundIncentivizationProgram>, I>>(
    object: I,
  ): MsgFundIncentivizationProgram {
    const message = createBaseMsgFundIncentivizationProgram()
    message.sender = object.sender ?? ''
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO
    message.funds = object.funds?.map((e) => Coin.fromPartial(e)) || []
    return message
  },
}

function createBaseMsgFundIncentivizationProgramResponse(): MsgFundIncentivizationProgramResponse {
  return {}
}

export const MsgFundIncentivizationProgramResponse = {
  encode(_: MsgFundIncentivizationProgramResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundIncentivizationProgramResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseMsgFundIncentivizationProgramResponse()
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

  fromJSON(_: any): MsgFundIncentivizationProgramResponse {
    return {}
  },

  toJSON(_: MsgFundIncentivizationProgramResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<MsgFundIncentivizationProgramResponse>, I>>(
    _: I,
  ): MsgFundIncentivizationProgramResponse {
    const message = createBaseMsgFundIncentivizationProgramResponse()
    return message
  },
}

function createBaseIncentivizationProgram(): IncentivizationProgram {
  return {
    id: Long.UZERO,
    escrowAddress: '',
    remainingEpochs: Long.ZERO,
    lpDenom: '',
    minLockupDuration: undefined,
    startTime: undefined,
  }
}

export const IncentivizationProgram = {
  encode(message: IncentivizationProgram, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id)
    }
    if (message.escrowAddress !== '') {
      writer.uint32(18).string(message.escrowAddress)
    }
    if (!message.remainingEpochs.isZero()) {
      writer.uint32(24).int64(message.remainingEpochs)
    }
    if (message.lpDenom !== '') {
      writer.uint32(34).string(message.lpDenom)
    }
    if (message.minLockupDuration !== undefined) {
      Duration.encode(message.minLockupDuration, writer.uint32(42).fork()).ldelim()
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(50).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IncentivizationProgram {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseIncentivizationProgram()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long
          break
        case 2:
          message.escrowAddress = reader.string()
          break
        case 3:
          message.remainingEpochs = reader.int64() as Long
          break
        case 4:
          message.lpDenom = reader.string()
          break
        case 5:
          message.minLockupDuration = Duration.decode(reader, reader.uint32())
          break
        case 6:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): IncentivizationProgram {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      escrowAddress: isSet(object.escrowAddress) ? String(object.escrowAddress) : '',
      remainingEpochs: isSet(object.remainingEpochs) ? Long.fromValue(object.remainingEpochs) : Long.ZERO,
      lpDenom: isSet(object.lpDenom) ? String(object.lpDenom) : '',
      minLockupDuration: isSet(object.minLockupDuration) ? Duration.fromJSON(object.minLockupDuration) : undefined,
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
    }
  },

  toJSON(message: IncentivizationProgram): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    message.escrowAddress !== undefined && (obj.escrowAddress = message.escrowAddress)
    message.remainingEpochs !== undefined && (obj.remainingEpochs = (message.remainingEpochs || Long.ZERO).toString())
    message.lpDenom !== undefined && (obj.lpDenom = message.lpDenom)
    message.minLockupDuration !== undefined &&
      (obj.minLockupDuration = message.minLockupDuration ? Duration.toJSON(message.minLockupDuration) : undefined)
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<IncentivizationProgram>, I>>(object: I): IncentivizationProgram {
    const message = createBaseIncentivizationProgram()
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO
    message.escrowAddress = object.escrowAddress ?? ''
    message.remainingEpochs =
      object.remainingEpochs !== undefined && object.remainingEpochs !== null
        ? Long.fromValue(object.remainingEpochs)
        : Long.ZERO
    message.lpDenom = object.lpDenom ?? ''
    message.minLockupDuration =
      object.minLockupDuration !== undefined && object.minLockupDuration !== null
        ? Duration.fromPartial(object.minLockupDuration)
        : undefined
    message.startTime = object.startTime ?? undefined
    return message
  },
}

function createBaseGenesisState(): GenesisState {
  return { incentivizationPrograms: [] }
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.incentivizationPrograms) {
      IncentivizationProgram.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseGenesisState()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.incentivizationPrograms.push(IncentivizationProgram.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    return {
      incentivizationPrograms: Array.isArray(object?.incentivizationPrograms)
        ? object.incentivizationPrograms.map((e: any) => IncentivizationProgram.fromJSON(e))
        : [],
    }
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.incentivizationPrograms) {
      obj.incentivizationPrograms = message.incentivizationPrograms.map((e) =>
        e ? IncentivizationProgram.toJSON(e) : undefined,
      )
    } else {
      obj.incentivizationPrograms = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState()
    message.incentivizationPrograms =
      object.incentivizationPrograms?.map((e) => IncentivizationProgram.fromPartial(e)) || []
    return message
  },
}

function createBaseQueryIncentivizationProgramRequest(): QueryIncentivizationProgramRequest {
  return { id: Long.UZERO }
}

export const QueryIncentivizationProgramRequest = {
  encode(message: QueryIncentivizationProgramRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizationProgramRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryIncentivizationProgramRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryIncentivizationProgramRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    }
  },

  toJSON(message: QueryIncentivizationProgramRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString())
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryIncentivizationProgramRequest>, I>>(
    object: I,
  ): QueryIncentivizationProgramRequest {
    const message = createBaseQueryIncentivizationProgramRequest()
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO
    return message
  },
}

function createBaseQueryIncentivizationProgramResponse(): QueryIncentivizationProgramResponse {
  return { incentivizationProgram: undefined }
}

export const QueryIncentivizationProgramResponse = {
  encode(message: QueryIncentivizationProgramResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.incentivizationProgram !== undefined) {
      IncentivizationProgram.encode(message.incentivizationProgram, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizationProgramResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryIncentivizationProgramResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.incentivizationProgram = IncentivizationProgram.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryIncentivizationProgramResponse {
    return {
      incentivizationProgram: isSet(object.incentivizationProgram)
        ? IncentivizationProgram.fromJSON(object.incentivizationProgram)
        : undefined,
    }
  },

  toJSON(message: QueryIncentivizationProgramResponse): unknown {
    const obj: any = {}
    message.incentivizationProgram !== undefined &&
      (obj.incentivizationProgram = message.incentivizationProgram
        ? IncentivizationProgram.toJSON(message.incentivizationProgram)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryIncentivizationProgramResponse>, I>>(
    object: I,
  ): QueryIncentivizationProgramResponse {
    const message = createBaseQueryIncentivizationProgramResponse()
    message.incentivizationProgram =
      object.incentivizationProgram !== undefined && object.incentivizationProgram !== null
        ? IncentivizationProgram.fromPartial(object.incentivizationProgram)
        : undefined
    return message
  },
}

function createBaseQueryIncentivizationProgramsRequest(): QueryIncentivizationProgramsRequest {
  return { pagination: undefined }
}

export const QueryIncentivizationProgramsRequest = {
  encode(message: QueryIncentivizationProgramsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizationProgramsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryIncentivizationProgramsRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryIncentivizationProgramsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    }
  },

  toJSON(message: QueryIncentivizationProgramsRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryIncentivizationProgramsRequest>, I>>(
    object: I,
  ): QueryIncentivizationProgramsRequest {
    const message = createBaseQueryIncentivizationProgramsRequest()
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined
    return message
  },
}

function createBaseQueryIncentivizationProgramsResponse(): QueryIncentivizationProgramsResponse {
  return { incentivizationPrograms: [], pagination: undefined }
}

export const QueryIncentivizationProgramsResponse = {
  encode(message: QueryIncentivizationProgramsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.incentivizationPrograms) {
      IncentivizationProgram.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizationProgramsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseQueryIncentivizationProgramsResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.incentivizationPrograms.push(IncentivizationProgram.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryIncentivizationProgramsResponse {
    return {
      incentivizationPrograms: Array.isArray(object?.incentivizationPrograms)
        ? object.incentivizationPrograms.map((e: any) => IncentivizationProgram.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    }
  },

  toJSON(message: QueryIncentivizationProgramsResponse): unknown {
    const obj: any = {}
    if (message.incentivizationPrograms) {
      obj.incentivizationPrograms = message.incentivizationPrograms.map((e) =>
        e ? IncentivizationProgram.toJSON(e) : undefined,
      )
    } else {
      obj.incentivizationPrograms = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<QueryIncentivizationProgramsResponse>, I>>(
    object: I,
  ): QueryIncentivizationProgramsResponse {
    const message = createBaseQueryIncentivizationProgramsResponse()
    message.incentivizationPrograms =
      object.incentivizationPrograms?.map((e) => IncentivizationProgram.fromPartial(e)) || []
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined
    return message
  },
}

export interface Msg {
  /** CreateIncentivizationProgram allows an entity to create an incentivization program for a liquidity pool. */
  CreateIncentivizationProgram(
    request: MsgCreateIncentivizationProgram,
  ): Promise<MsgCreateIncentivizationProgramResponse>
  /** FundIncentivizationProgram allows an entity to fund an already existing incentivization program with more coins. */
  FundIncentivizationProgram(request: MsgFundIncentivizationProgram): Promise<MsgFundIncentivizationProgramResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.CreateIncentivizationProgram = this.CreateIncentivizationProgram.bind(this)
    this.FundIncentivizationProgram = this.FundIncentivizationProgram.bind(this)
  }
  CreateIncentivizationProgram(
    request: MsgCreateIncentivizationProgram,
  ): Promise<MsgCreateIncentivizationProgramResponse> {
    const data = MsgCreateIncentivizationProgram.encode(request).finish()
    const promise = this.rpc.request('nibiru.incentivization.v1.Msg', 'CreateIncentivizationProgram', data)
    return promise.then((data) => MsgCreateIncentivizationProgramResponse.decode(new _m0.Reader(data)))
  }

  FundIncentivizationProgram(request: MsgFundIncentivizationProgram): Promise<MsgFundIncentivizationProgramResponse> {
    const data = MsgFundIncentivizationProgram.encode(request).finish()
    const promise = this.rpc.request('nibiru.incentivization.v1.Msg', 'FundIncentivizationProgram', data)
    return promise.then((data) => MsgFundIncentivizationProgramResponse.decode(new _m0.Reader(data)))
  }
}

export interface Query {
  IncentivizationProgram(request: QueryIncentivizationProgramRequest): Promise<QueryIncentivizationProgramResponse>
  IncentivizationPrograms(request: QueryIncentivizationProgramsRequest): Promise<QueryIncentivizationProgramsResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.IncentivizationProgram = this.IncentivizationProgram.bind(this)
    this.IncentivizationPrograms = this.IncentivizationPrograms.bind(this)
  }
  IncentivizationProgram(request: QueryIncentivizationProgramRequest): Promise<QueryIncentivizationProgramResponse> {
    const data = QueryIncentivizationProgramRequest.encode(request).finish()
    const promise = this.rpc.request('nibiru.incentivization.v1.Query', 'IncentivizationProgram', data)
    return promise.then((data) => QueryIncentivizationProgramResponse.decode(new _m0.Reader(data)))
  }

  IncentivizationPrograms(request: QueryIncentivizationProgramsRequest): Promise<QueryIncentivizationProgramsResponse> {
    const data = QueryIncentivizationProgramsRequest.encode(request).finish()
    const promise = this.rpc.request('nibiru.incentivization.v1.Query', 'IncentivizationPrograms', data)
    return promise.then((data) => QueryIncentivizationProgramsResponse.decode(new _m0.Reader(data)))
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000)
  const nanos = (date.getTime() % 1_000) * 1_000_000
  return { seconds, nanos }
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000
  millis += t.nanos / 1_000_000
  return new Date(millis)
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o
  } else if (typeof o === 'string') {
    return new Date(o)
  } else {
    return fromTimestamp(Timestamp.fromJSON(o))
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number)
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
