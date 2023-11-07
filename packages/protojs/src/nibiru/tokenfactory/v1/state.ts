/* eslint-disable */
import Long from "long"
import _m0 from "protobufjs/minimal"

export const protobufPackage = "nibiru.tokenfactory.v1"

/**
 * DenomAuthorityMetadata specifies metadata foraddresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadata {
  /**
   * Admin: Bech32 address of the admin for the tokefactory denom. Can be empty
   * for no admin.
   */
  admin: string
}

/**
 * ModuleParams defines the parameters for the tokenfactory module.
 *
 * ### On Denom Creation Costs
 *
 * We'd like for fees to be paid by the user/signer of a ransaction, but in many
 * casess, token creation is abstracted away behind a smart contract. Setting a
 * nonzero `denom_creation_fee` would force each contract to handle collecting
 * and paying a fees for denom (factory/{contract-addr}/{subdenom}) creation on
 * behalf of the end user.
 *
 * For IBC token transfers, it's unclear who should pay the fee—the contract,
 * the relayer, or the original sender?
 * > "Charging fees will mess up composability, the same way Terra transfer tax
 *   caused all kinds of headaches for contract devs." - @ethanfrey
 *
 * ### Recommended Solution
 *
 * Have the end user (signer) pay fees directly in the form of higher gas costs.
 * This way, contracts won't need to handle collecting or paying fees. And for
 * IBC, the gas costs are already paid by the original sender and can be
 * estimated by the relayer. It's easier to tune gas costs to make spam
 * prohibitively expensive since there are per-transaction and per-block gas
 * limits.
 *
 * See https://github.com/CosmWasm/token-factory/issues/11 for the initial
 * discussion of the issue with @ethanfrey and @valardragon.
 */
export interface ModuleParams {
  /**
   * Adds gas consumption to the execution of `MsgCreateDenom` as a method of
   * spam prevention. Defaults to 10 NIBI.
   */
  denomCreationGasConsume: Long
}

/**
 * TFDenom is a token factory (TF) denom. The canonical representation is
 * "tf/{creator}/{subdenom}", its unique denomination in the x/bank module.
 */
export interface TFDenom {
  /** Creator: Bech32 address of the creator of the denom. */
  creator: string
  /**
   * Subdenom: Unique suffix of a token factory denom. A subdenom is specific
   * to a given creator. It is the name given during a token factory "Mint".
   */
  subdenom: string
}

/** GenesisState for the Token Factory module. */
export interface GenesisState {
  params?: ModuleParams
  factoryDenoms: GenesisDenom[]
}

/** GenesisDenom defines a tokenfactory denoms in the genesis state. */
export interface GenesisDenom {
  denom: string
  authorityMetadata?: DenomAuthorityMetadata
}

function createBaseDenomAuthorityMetadata(): DenomAuthorityMetadata {
  return { admin: "" }
}

export const DenomAuthorityMetadata = {
  encode(
    message: DenomAuthorityMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin)
    }
    return writer
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DenomAuthorityMetadata {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDenomAuthorityMetadata()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.admin = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): DenomAuthorityMetadata {
    return { admin: isSet(object.admin) ? String(object.admin) : "" }
  },

  toJSON(message: DenomAuthorityMetadata): unknown {
    const obj: any = {}
    message.admin !== undefined && (obj.admin = message.admin)
    return obj
  },

  create<I extends Exact<DeepPartial<DenomAuthorityMetadata>, I>>(
    base?: I
  ): DenomAuthorityMetadata {
    return DenomAuthorityMetadata.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<DenomAuthorityMetadata>, I>>(
    object: I
  ): DenomAuthorityMetadata {
    const message = createBaseDenomAuthorityMetadata()
    message.admin = object.admin ?? ""
    return message
  },
}

function createBaseModuleParams(): ModuleParams {
  return { denomCreationGasConsume: Long.UZERO }
}

export const ModuleParams = {
  encode(
    message: ModuleParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.denomCreationGasConsume.isZero()) {
      writer.uint32(8).uint64(message.denomCreationGasConsume)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleParams {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseModuleParams()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break
          }

          message.denomCreationGasConsume = reader.uint64() as Long
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): ModuleParams {
    return {
      denomCreationGasConsume: isSet(object.denomCreationGasConsume)
        ? Long.fromValue(object.denomCreationGasConsume)
        : Long.UZERO,
    }
  },

  toJSON(message: ModuleParams): unknown {
    const obj: any = {}
    message.denomCreationGasConsume !== undefined &&
      (obj.denomCreationGasConsume = (
        message.denomCreationGasConsume || Long.UZERO
      ).toString())
    return obj
  },

  create<I extends Exact<DeepPartial<ModuleParams>, I>>(
    base?: I
  ): ModuleParams {
    return ModuleParams.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<ModuleParams>, I>>(
    object: I
  ): ModuleParams {
    const message = createBaseModuleParams()
    message.denomCreationGasConsume =
      object.denomCreationGasConsume !== undefined &&
      object.denomCreationGasConsume !== null
        ? Long.fromValue(object.denomCreationGasConsume)
        : Long.UZERO
    return message
  },
}

function createBaseTFDenom(): TFDenom {
  return { creator: "", subdenom: "" }
}

export const TFDenom = {
  encode(
    message: TFDenom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator)
    }
    if (message.subdenom !== "") {
      writer.uint32(18).string(message.subdenom)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TFDenom {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseTFDenom()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.creator = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.subdenom = reader.string()
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): TFDenom {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      subdenom: isSet(object.subdenom) ? String(object.subdenom) : "",
    }
  },

  toJSON(message: TFDenom): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.subdenom !== undefined && (obj.subdenom = message.subdenom)
    return obj
  },

  create<I extends Exact<DeepPartial<TFDenom>, I>>(base?: I): TFDenom {
    return TFDenom.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<TFDenom>, I>>(object: I): TFDenom {
    const message = createBaseTFDenom()
    message.creator = object.creator ?? ""
    message.subdenom = object.subdenom ?? ""
    return message
  },
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, factoryDenoms: [] }
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      ModuleParams.encode(message.params, writer.uint32(10).fork()).ldelim()
    }
    for (const v of message.factoryDenoms) {
      GenesisDenom.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseGenesisState()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.params = ModuleParams.decode(reader, reader.uint32())
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.factoryDenoms.push(
            GenesisDenom.decode(reader, reader.uint32())
          )
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params)
        ? ModuleParams.fromJSON(object.params)
        : undefined,
      factoryDenoms: Array.isArray(object?.factoryDenoms)
        ? object.factoryDenoms.map((e: any) => GenesisDenom.fromJSON(e))
        : [],
    }
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    message.params !== undefined &&
      (obj.params = message.params
        ? ModuleParams.toJSON(message.params)
        : undefined)
    if (message.factoryDenoms) {
      obj.factoryDenoms = message.factoryDenoms.map((e) =>
        e ? GenesisDenom.toJSON(e) : undefined
      )
    } else {
      obj.factoryDenoms = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(
    base?: I
  ): GenesisState {
    return GenesisState.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState()
    message.params =
      object.params !== undefined && object.params !== null
        ? ModuleParams.fromPartial(object.params)
        : undefined
    message.factoryDenoms =
      object.factoryDenoms?.map((e) => GenesisDenom.fromPartial(e)) || []
    return message
  },
}

function createBaseGenesisDenom(): GenesisDenom {
  return { denom: "", authorityMetadata: undefined }
}

export const GenesisDenom = {
  encode(
    message: GenesisDenom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom)
    }
    if (message.authorityMetadata !== undefined) {
      DenomAuthorityMetadata.encode(
        message.authorityMetadata,
        writer.uint32(18).fork()
      ).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisDenom {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseGenesisDenom()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.denom = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.authorityMetadata = DenomAuthorityMetadata.decode(
            reader,
            reader.uint32()
          )
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): GenesisDenom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      authorityMetadata: isSet(object.authorityMetadata)
        ? DenomAuthorityMetadata.fromJSON(object.authorityMetadata)
        : undefined,
    }
  },

  toJSON(message: GenesisDenom): unknown {
    const obj: any = {}
    message.denom !== undefined && (obj.denom = message.denom)
    message.authorityMetadata !== undefined &&
      (obj.authorityMetadata = message.authorityMetadata
        ? DenomAuthorityMetadata.toJSON(message.authorityMetadata)
        : undefined)
    return obj
  },

  create<I extends Exact<DeepPartial<GenesisDenom>, I>>(
    base?: I
  ): GenesisDenom {
    return GenesisDenom.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<GenesisDenom>, I>>(
    object: I
  ): GenesisDenom {
    const message = createBaseGenesisDenom()
    message.denom = object.denom ?? ""
    message.authorityMetadata =
      object.authorityMetadata !== undefined &&
      object.authorityMetadata !== null
        ? DenomAuthorityMetadata.fromPartial(object.authorityMetadata)
        : undefined
    return message
  },
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined

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
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never
    }

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
