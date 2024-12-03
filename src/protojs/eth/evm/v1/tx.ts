/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import { AccessTuple, FunToken, Log, Params } from "./evm";

/** Copyright (c) 2023-2024 Nibi, Inc. */

/** MsgEthereumTx encapsulates an Ethereum transaction as an SDK message. */
export interface MsgEthereumTx {
  /** data is inner transaction data of the Ethereum transaction */
  data?: Any;
  /** size is the encoded storage size of the transaction (DEPRECATED) */
  size: number;
  /** hash of the transaction in hex format */
  hash: string;
  /**
   * from is the ethereum signer address in hex format. This address value is checked
   * against the address derived from the signature (V, R, S) using the
   * secp256k1 elliptic curve
   */
  from: string;
}

/**
 * LegacyTx is the transaction data of regular Ethereum transactions.
 *
 * Note that setting "evm.Params.AllowUnprotectedTxs" to false will cause all
 * non-EIP155 signed transactions to fail, as they'll lack replay protection.
 *
 * LegacyTx is a custom implementation of "LegacyTx" from
 * "github.com/ethereum/go-ethereum/core/types".
 */
export interface LegacyTx {
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce: Long;
  /** gas_price defines the value for each gas unit */
  gasPrice: string;
  /** gas defines the gas limit defined for the transaction. */
  gas: Long;
  /** to is the hex formatted address of the recipient */
  to: string;
  /** value defines the unsigned integer value of the transaction amount. */
  value: string;
  /** data is the data payload bytes of the transaction. */
  data: Uint8Array;
  /**
   * v defines the recovery id as the "v" signature value from the elliptic curve
   * digital signatute algorithm (ECDSA). It indicates which of two possible
   * solutions should be used to reconstruct the public key from the signature.
   * In Ethereum, "v" takes the value 27 or 28 for transactions that are not
   * relay-protected.
   */
  v: Uint8Array;
  /**
   * r defines the x-coordinate of a point on the elliptic curve in the elliptic curve
   * digital signatute algorithm (ECDSA). It's crucial in ensuring uniqueness of
   * the signature.
   */
  r: Uint8Array;
  /**
   * s define the signature value derived from the private key, message hash, and
   * the value of "r". It ensures that the signature is tied to both the message
   * and the private key of the sender.
   */
  s: Uint8Array;
}

/**
 * AccessListTx is the data of EIP-2930 access list transactions.
 * It is a custom implementation of "AccessListTx" from
 * "github.com/ethereum/go-ethereum/core/types".
 */
export interface AccessListTx {
  /** chain_id of the destination EVM chain */
  chainId: string;
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce: Long;
  /** gas_price defines the value for each gas unit */
  gasPrice: string;
  /** gas defines the gas limit defined for the transaction. */
  gas: Long;
  /** to is the recipient address in hex format */
  to: string;
  /** value defines the unsigned integer value of the transaction amount. */
  value: string;
  /** data is the data payload bytes of the transaction. */
  data: Uint8Array;
  /** accesses is an array of access tuples */
  accesses: AccessTuple[];
  /**
   * v defines the recovery id and "v" signature value from the elliptic curve
   * digital signatute algorithm (ECDSA). It indicates which of two possible
   * solutions should be used to reconstruct the public key from the signature.
   * In Ethereum, "v" takes the value 27 or 28 for transactions that are not
   * relay-protected.
   */
  v: Uint8Array;
  /**
   * r defines the x-coordinate of a point on the elliptic curve in the elliptic curve
   * digital signatute algorithm (ECDSA). It's crucial in ensuring uniqueness of
   * the signature.
   */
  r: Uint8Array;
  /**
   * s define the signature value derived from the private key, message hash, and
   * the value of "r". It ensures that the signature is tied to both the message
   * and the private key of the sender.
   */
  s: Uint8Array;
}

/**
 * DynamicFeeTx is the data of EIP-1559 dynamic fee transactions. It is a custom
 * implementation of "DynamicFeeTx" from
 * "github.com/ethereum/go-ethereum/core/types".
 */
export interface DynamicFeeTx {
  /** chain_id of the destination EVM chain */
  chainId: string;
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce: Long;
  /** gas_tip_cap defines the max value for the gas tip */
  gasTipCap: string;
  /** gas_fee_cap defines the max value for the gas fee */
  gasFeeCap: string;
  /** gas defines the gas limit defined for the transaction. */
  gas: Long;
  /** to is the hex formatted address of the recipient */
  to: string;
  /** value defines the the transaction amount. */
  value: string;
  /** data is the data payload bytes of the transaction. */
  data: Uint8Array;
  /** accesses is an array of access tuples */
  accesses: AccessTuple[];
  /**
   * v defines the recovery id and "v" signature value from the elliptic curve
   * digital signatute algorithm (ECDSA). It indicates which of two possible
   * solutions should be used to reconstruct the public key from the signature.
   * In Ethereum, "v" takes the value 27 or 28 for transactions that are not
   * relay-protected.
   */
  v: Uint8Array;
  /**
   * r defines the x-coordinate of a point on the elliptic curve in the elliptic curve
   * digital signatute algorithm (ECDSA). It's crucial in ensuring uniqueness of
   * the signature.
   */
  r: Uint8Array;
  /**
   * s define the signature value derived from the private key, message hash, and
   * the value of "r". It ensures that the signature is tied to both the message
   * and the private key of the sender.
   */
  s: Uint8Array;
}

/** ExtensionOptionsEthereumTx is an extension option for ethereum transactions */
export interface ExtensionOptionsEthereumTx {
}

/** MsgEthereumTxResponse defines the Msg/EthereumTx response type. */
export interface MsgEthereumTxResponse {
  /**
   * hash of the ethereum transaction in hex format. This hash differs from the
   * Tendermint sha256 hash of the transaction bytes. See
   * https://github.com/tendermint/tendermint/issues/6539 for reference
   */
  hash: string;
  /**
   * logs contains the transaction hash and the proto-compatible ethereum
   * logs.
   */
  logs: Log[];
  /**
   * ret is the returned data from evm function (result or data supplied with revert
   * opcode)
   */
  ret: Uint8Array;
  /** vm_error is the error returned by vm execution */
  vmError: string;
  /** gas_used specifies how much gas was consumed by the transaction */
  gasUsed: Long;
}

/** MsgUpdateParams defines a Msg for updating the x/evm module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/evm parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params?: Params;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}

/**
 * MsgCreateFunToken: Arguments to create a "FunToken" mapping. Either the ERC20
 * contract address can be given to create the mapping to a Bank Coin, or the
 * denomination for a Bank Coin can be given to create the mapping to an ERC20.
 */
export interface MsgCreateFunToken {
  /** Hexadecimal address of the ERC20 token to which the `FunToken` maps */
  fromErc20: string;
  /** Coin denomination in the Bank Module. */
  fromBankDenom: string;
  /** Sender: Address for the signer of the transaction. */
  sender: string;
}

export interface MsgCreateFunTokenResponse {
  /** Fungible token mapping corresponding to ERC20 tokens. */
  funtokenMapping?: FunToken;
}

/** MsgConvertCoinToEvm: Arguments to send a Bank Coin to ERC-20 representation */
export interface MsgConvertCoinToEvm {
  /** Hexadecimal address of the ERC20 token to which the `FunToken` maps */
  toEthAddr: string;
  /** Sender: Address for the signer of the transaction. */
  sender: string;
  /** Bank Coin to get converted to ERC20 */
  bankCoin?: Coin;
}

export interface MsgConvertCoinToEvmResponse {
}

function createBaseMsgEthereumTx(): MsgEthereumTx {
  return { data: undefined, size: 0, hash: "", from: "" };
}

export const MsgEthereumTx = {
  encode(message: MsgEthereumTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.size !== 0) {
      writer.uint32(17).double(message.size);
    }
    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }
    if (message.from !== "") {
      writer.uint32(34).string(message.from);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEthereumTx {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEthereumTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = Any.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.size = reader.double();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hash = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.from = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgEthereumTx {
    return {
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
      size: isSet(object.size) ? Number(object.size) : 0,
      hash: isSet(object.hash) ? String(object.hash) : "",
      from: isSet(object.from) ? String(object.from) : "",
    };
  },

  toJSON(message: MsgEthereumTx): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    message.size !== undefined && (obj.size = message.size);
    message.hash !== undefined && (obj.hash = message.hash);
    message.from !== undefined && (obj.from = message.from);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEthereumTx>, I>>(base?: I): MsgEthereumTx {
    return MsgEthereumTx.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgEthereumTx>, I>>(object: I): MsgEthereumTx {
    const message = createBaseMsgEthereumTx();
    message.data = (object.data !== undefined && object.data !== null) ? Any.fromPartial(object.data) : undefined;
    message.size = object.size ?? 0;
    message.hash = object.hash ?? "";
    message.from = object.from ?? "";
    return message;
  },
};

function createBaseLegacyTx(): LegacyTx {
  return {
    nonce: Long.UZERO,
    gasPrice: "",
    gas: Long.UZERO,
    to: "",
    value: "",
    data: new Uint8Array(0),
    v: new Uint8Array(0),
    r: new Uint8Array(0),
    s: new Uint8Array(0),
  };
}

export const LegacyTx = {
  encode(message: LegacyTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.gasPrice !== "") {
      writer.uint32(18).string(message.gasPrice);
    }
    if (!message.gas.isZero()) {
      writer.uint32(24).uint64(message.gas);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    if (message.value !== "") {
      writer.uint32(42).string(message.value);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    if (message.v.length !== 0) {
      writer.uint32(58).bytes(message.v);
    }
    if (message.r.length !== 0) {
      writer.uint32(66).bytes(message.r);
    }
    if (message.s.length !== 0) {
      writer.uint32(74).bytes(message.s);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyTx {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gasPrice = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.gas = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.to = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.value = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.v = reader.bytes();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.r = reader.bytes();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.s = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LegacyTx {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      gasPrice: isSet(object.gasPrice) ? String(object.gasPrice) : "",
      gas: isSet(object.gas) ? Long.fromValue(object.gas) : Long.UZERO,
      to: isSet(object.to) ? String(object.to) : "",
      value: isSet(object.value) ? String(object.value) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      v: isSet(object.v) ? bytesFromBase64(object.v) : new Uint8Array(0),
      r: isSet(object.r) ? bytesFromBase64(object.r) : new Uint8Array(0),
      s: isSet(object.s) ? bytesFromBase64(object.s) : new Uint8Array(0),
    };
  },

  toJSON(message: LegacyTx): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.gasPrice !== undefined && (obj.gasPrice = message.gasPrice);
    message.gas !== undefined && (obj.gas = (message.gas || Long.UZERO).toString());
    message.to !== undefined && (obj.to = message.to);
    message.value !== undefined && (obj.value = message.value);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array(0)));
    message.v !== undefined && (obj.v = base64FromBytes(message.v !== undefined ? message.v : new Uint8Array(0)));
    message.r !== undefined && (obj.r = base64FromBytes(message.r !== undefined ? message.r : new Uint8Array(0)));
    message.s !== undefined && (obj.s = base64FromBytes(message.s !== undefined ? message.s : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<LegacyTx>, I>>(base?: I): LegacyTx {
    return LegacyTx.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LegacyTx>, I>>(object: I): LegacyTx {
    const message = createBaseLegacyTx();
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    message.gasPrice = object.gasPrice ?? "";
    message.gas = (object.gas !== undefined && object.gas !== null) ? Long.fromValue(object.gas) : Long.UZERO;
    message.to = object.to ?? "";
    message.value = object.value ?? "";
    message.data = object.data ?? new Uint8Array(0);
    message.v = object.v ?? new Uint8Array(0);
    message.r = object.r ?? new Uint8Array(0);
    message.s = object.s ?? new Uint8Array(0);
    return message;
  },
};

function createBaseAccessListTx(): AccessListTx {
  return {
    chainId: "",
    nonce: Long.UZERO,
    gasPrice: "",
    gas: Long.UZERO,
    to: "",
    value: "",
    data: new Uint8Array(0),
    accesses: [],
    v: new Uint8Array(0),
    r: new Uint8Array(0),
    s: new Uint8Array(0),
  };
}

export const AccessListTx = {
  encode(message: AccessListTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(16).uint64(message.nonce);
    }
    if (message.gasPrice !== "") {
      writer.uint32(26).string(message.gasPrice);
    }
    if (!message.gas.isZero()) {
      writer.uint32(32).uint64(message.gas);
    }
    if (message.to !== "") {
      writer.uint32(42).string(message.to);
    }
    if (message.value !== "") {
      writer.uint32(50).string(message.value);
    }
    if (message.data.length !== 0) {
      writer.uint32(58).bytes(message.data);
    }
    for (const v of message.accesses) {
      AccessTuple.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.v.length !== 0) {
      writer.uint32(74).bytes(message.v);
    }
    if (message.r.length !== 0) {
      writer.uint32(82).bytes(message.r);
    }
    if (message.s.length !== 0) {
      writer.uint32(90).bytes(message.s);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessListTx {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessListTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chainId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gasPrice = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.gas = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.to = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.value = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.accesses.push(AccessTuple.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.v = reader.bytes();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.r = reader.bytes();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.s = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccessListTx {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      gasPrice: isSet(object.gasPrice) ? String(object.gasPrice) : "",
      gas: isSet(object.gas) ? Long.fromValue(object.gas) : Long.UZERO,
      to: isSet(object.to) ? String(object.to) : "",
      value: isSet(object.value) ? String(object.value) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      accesses: Array.isArray(object?.accesses) ? object.accesses.map((e: any) => AccessTuple.fromJSON(e)) : [],
      v: isSet(object.v) ? bytesFromBase64(object.v) : new Uint8Array(0),
      r: isSet(object.r) ? bytesFromBase64(object.r) : new Uint8Array(0),
      s: isSet(object.s) ? bytesFromBase64(object.s) : new Uint8Array(0),
    };
  },

  toJSON(message: AccessListTx): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.gasPrice !== undefined && (obj.gasPrice = message.gasPrice);
    message.gas !== undefined && (obj.gas = (message.gas || Long.UZERO).toString());
    message.to !== undefined && (obj.to = message.to);
    message.value !== undefined && (obj.value = message.value);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array(0)));
    if (message.accesses) {
      obj.accesses = message.accesses.map((e) => e ? AccessTuple.toJSON(e) : undefined);
    } else {
      obj.accesses = [];
    }
    message.v !== undefined && (obj.v = base64FromBytes(message.v !== undefined ? message.v : new Uint8Array(0)));
    message.r !== undefined && (obj.r = base64FromBytes(message.r !== undefined ? message.r : new Uint8Array(0)));
    message.s !== undefined && (obj.s = base64FromBytes(message.s !== undefined ? message.s : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<AccessListTx>, I>>(base?: I): AccessListTx {
    return AccessListTx.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AccessListTx>, I>>(object: I): AccessListTx {
    const message = createBaseAccessListTx();
    message.chainId = object.chainId ?? "";
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    message.gasPrice = object.gasPrice ?? "";
    message.gas = (object.gas !== undefined && object.gas !== null) ? Long.fromValue(object.gas) : Long.UZERO;
    message.to = object.to ?? "";
    message.value = object.value ?? "";
    message.data = object.data ?? new Uint8Array(0);
    message.accesses = object.accesses?.map((e) => AccessTuple.fromPartial(e)) || [];
    message.v = object.v ?? new Uint8Array(0);
    message.r = object.r ?? new Uint8Array(0);
    message.s = object.s ?? new Uint8Array(0);
    return message;
  },
};

function createBaseDynamicFeeTx(): DynamicFeeTx {
  return {
    chainId: "",
    nonce: Long.UZERO,
    gasTipCap: "",
    gasFeeCap: "",
    gas: Long.UZERO,
    to: "",
    value: "",
    data: new Uint8Array(0),
    accesses: [],
    v: new Uint8Array(0),
    r: new Uint8Array(0),
    s: new Uint8Array(0),
  };
}

export const DynamicFeeTx = {
  encode(message: DynamicFeeTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(16).uint64(message.nonce);
    }
    if (message.gasTipCap !== "") {
      writer.uint32(26).string(message.gasTipCap);
    }
    if (message.gasFeeCap !== "") {
      writer.uint32(34).string(message.gasFeeCap);
    }
    if (!message.gas.isZero()) {
      writer.uint32(40).uint64(message.gas);
    }
    if (message.to !== "") {
      writer.uint32(50).string(message.to);
    }
    if (message.value !== "") {
      writer.uint32(58).string(message.value);
    }
    if (message.data.length !== 0) {
      writer.uint32(66).bytes(message.data);
    }
    for (const v of message.accesses) {
      AccessTuple.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.v.length !== 0) {
      writer.uint32(82).bytes(message.v);
    }
    if (message.r.length !== 0) {
      writer.uint32(90).bytes(message.r);
    }
    if (message.s.length !== 0) {
      writer.uint32(98).bytes(message.s);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DynamicFeeTx {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDynamicFeeTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chainId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gasTipCap = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.gasFeeCap = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.gas = reader.uint64() as Long;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.to = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.value = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.accesses.push(AccessTuple.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.v = reader.bytes();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.r = reader.bytes();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.s = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DynamicFeeTx {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      gasTipCap: isSet(object.gasTipCap) ? String(object.gasTipCap) : "",
      gasFeeCap: isSet(object.gasFeeCap) ? String(object.gasFeeCap) : "",
      gas: isSet(object.gas) ? Long.fromValue(object.gas) : Long.UZERO,
      to: isSet(object.to) ? String(object.to) : "",
      value: isSet(object.value) ? String(object.value) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      accesses: Array.isArray(object?.accesses) ? object.accesses.map((e: any) => AccessTuple.fromJSON(e)) : [],
      v: isSet(object.v) ? bytesFromBase64(object.v) : new Uint8Array(0),
      r: isSet(object.r) ? bytesFromBase64(object.r) : new Uint8Array(0),
      s: isSet(object.s) ? bytesFromBase64(object.s) : new Uint8Array(0),
    };
  },

  toJSON(message: DynamicFeeTx): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.gasTipCap !== undefined && (obj.gasTipCap = message.gasTipCap);
    message.gasFeeCap !== undefined && (obj.gasFeeCap = message.gasFeeCap);
    message.gas !== undefined && (obj.gas = (message.gas || Long.UZERO).toString());
    message.to !== undefined && (obj.to = message.to);
    message.value !== undefined && (obj.value = message.value);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array(0)));
    if (message.accesses) {
      obj.accesses = message.accesses.map((e) => e ? AccessTuple.toJSON(e) : undefined);
    } else {
      obj.accesses = [];
    }
    message.v !== undefined && (obj.v = base64FromBytes(message.v !== undefined ? message.v : new Uint8Array(0)));
    message.r !== undefined && (obj.r = base64FromBytes(message.r !== undefined ? message.r : new Uint8Array(0)));
    message.s !== undefined && (obj.s = base64FromBytes(message.s !== undefined ? message.s : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<DynamicFeeTx>, I>>(base?: I): DynamicFeeTx {
    return DynamicFeeTx.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DynamicFeeTx>, I>>(object: I): DynamicFeeTx {
    const message = createBaseDynamicFeeTx();
    message.chainId = object.chainId ?? "";
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    message.gasTipCap = object.gasTipCap ?? "";
    message.gasFeeCap = object.gasFeeCap ?? "";
    message.gas = (object.gas !== undefined && object.gas !== null) ? Long.fromValue(object.gas) : Long.UZERO;
    message.to = object.to ?? "";
    message.value = object.value ?? "";
    message.data = object.data ?? new Uint8Array(0);
    message.accesses = object.accesses?.map((e) => AccessTuple.fromPartial(e)) || [];
    message.v = object.v ?? new Uint8Array(0);
    message.r = object.r ?? new Uint8Array(0);
    message.s = object.s ?? new Uint8Array(0);
    return message;
  },
};

function createBaseExtensionOptionsEthereumTx(): ExtensionOptionsEthereumTx {
  return {};
}

export const ExtensionOptionsEthereumTx = {
  encode(_: ExtensionOptionsEthereumTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionOptionsEthereumTx {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionOptionsEthereumTx();
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

  fromJSON(_: any): ExtensionOptionsEthereumTx {
    return {};
  },

  toJSON(_: ExtensionOptionsEthereumTx): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ExtensionOptionsEthereumTx>, I>>(base?: I): ExtensionOptionsEthereumTx {
    return ExtensionOptionsEthereumTx.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExtensionOptionsEthereumTx>, I>>(_: I): ExtensionOptionsEthereumTx {
    const message = createBaseExtensionOptionsEthereumTx();
    return message;
  },
};

function createBaseMsgEthereumTxResponse(): MsgEthereumTxResponse {
  return { hash: "", logs: [], ret: new Uint8Array(0), vmError: "", gasUsed: Long.UZERO };
}

export const MsgEthereumTxResponse = {
  encode(message: MsgEthereumTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.ret.length !== 0) {
      writer.uint32(26).bytes(message.ret);
    }
    if (message.vmError !== "") {
      writer.uint32(34).string(message.vmError);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(40).uint64(message.gasUsed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEthereumTxResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEthereumTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hash = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.logs.push(Log.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ret = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.vmError = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.gasUsed = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgEthereumTxResponse {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => Log.fromJSON(e)) : [],
      ret: isSet(object.ret) ? bytesFromBase64(object.ret) : new Uint8Array(0),
      vmError: isSet(object.vmError) ? String(object.vmError) : "",
      gasUsed: isSet(object.gasUsed) ? Long.fromValue(object.gasUsed) : Long.UZERO,
    };
  },

  toJSON(message: MsgEthereumTxResponse): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    if (message.logs) {
      obj.logs = message.logs.map((e) => e ? Log.toJSON(e) : undefined);
    } else {
      obj.logs = [];
    }
    message.ret !== undefined &&
      (obj.ret = base64FromBytes(message.ret !== undefined ? message.ret : new Uint8Array(0)));
    message.vmError !== undefined && (obj.vmError = message.vmError);
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEthereumTxResponse>, I>>(base?: I): MsgEthereumTxResponse {
    return MsgEthereumTxResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgEthereumTxResponse>, I>>(object: I): MsgEthereumTxResponse {
    const message = createBaseMsgEthereumTxResponse();
    message.hash = object.hash ?? "";
    message.logs = object.logs?.map((e) => Log.fromPartial(e)) || [];
    message.ret = object.ret ?? new Uint8Array(0);
    message.vmError = object.vmError ?? "";
    message.gasUsed = (object.gasUsed !== undefined && object.gasUsed !== null)
      ? Long.fromValue(object.gasUsed)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
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

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgCreateFunToken(): MsgCreateFunToken {
  return { fromErc20: "", fromBankDenom: "", sender: "" };
}

export const MsgCreateFunToken = {
  encode(message: MsgCreateFunToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromErc20 !== "") {
      writer.uint32(10).string(message.fromErc20);
    }
    if (message.fromBankDenom !== "") {
      writer.uint32(18).string(message.fromBankDenom);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFunToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFunToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fromErc20 = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fromBankDenom = reader.string();
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

  fromJSON(object: any): MsgCreateFunToken {
    return {
      fromErc20: isSet(object.fromErc20) ? String(object.fromErc20) : "",
      fromBankDenom: isSet(object.fromBankDenom) ? String(object.fromBankDenom) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgCreateFunToken): unknown {
    const obj: any = {};
    message.fromErc20 !== undefined && (obj.fromErc20 = message.fromErc20);
    message.fromBankDenom !== undefined && (obj.fromBankDenom = message.fromBankDenom);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateFunToken>, I>>(base?: I): MsgCreateFunToken {
    return MsgCreateFunToken.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateFunToken>, I>>(object: I): MsgCreateFunToken {
    const message = createBaseMsgCreateFunToken();
    message.fromErc20 = object.fromErc20 ?? "";
    message.fromBankDenom = object.fromBankDenom ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgCreateFunTokenResponse(): MsgCreateFunTokenResponse {
  return { funtokenMapping: undefined };
}

export const MsgCreateFunTokenResponse = {
  encode(message: MsgCreateFunTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.funtokenMapping !== undefined) {
      FunToken.encode(message.funtokenMapping, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFunTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFunTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.funtokenMapping = FunToken.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateFunTokenResponse {
    return { funtokenMapping: isSet(object.funtokenMapping) ? FunToken.fromJSON(object.funtokenMapping) : undefined };
  },

  toJSON(message: MsgCreateFunTokenResponse): unknown {
    const obj: any = {};
    message.funtokenMapping !== undefined &&
      (obj.funtokenMapping = message.funtokenMapping ? FunToken.toJSON(message.funtokenMapping) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateFunTokenResponse>, I>>(base?: I): MsgCreateFunTokenResponse {
    return MsgCreateFunTokenResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateFunTokenResponse>, I>>(object: I): MsgCreateFunTokenResponse {
    const message = createBaseMsgCreateFunTokenResponse();
    message.funtokenMapping = (object.funtokenMapping !== undefined && object.funtokenMapping !== null)
      ? FunToken.fromPartial(object.funtokenMapping)
      : undefined;
    return message;
  },
};

function createBaseMsgConvertCoinToEvm(): MsgConvertCoinToEvm {
  return { toEthAddr: "", sender: "", bankCoin: undefined };
}

export const MsgConvertCoinToEvm = {
  encode(message: MsgConvertCoinToEvm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.toEthAddr !== "") {
      writer.uint32(10).string(message.toEthAddr);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.bankCoin !== undefined) {
      Coin.encode(message.bankCoin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertCoinToEvm {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCoinToEvm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.toEthAddr = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bankCoin = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgConvertCoinToEvm {
    return {
      toEthAddr: isSet(object.toEthAddr) ? String(object.toEthAddr) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      bankCoin: isSet(object.bankCoin) ? Coin.fromJSON(object.bankCoin) : undefined,
    };
  },

  toJSON(message: MsgConvertCoinToEvm): unknown {
    const obj: any = {};
    message.toEthAddr !== undefined && (obj.toEthAddr = message.toEthAddr);
    message.sender !== undefined && (obj.sender = message.sender);
    message.bankCoin !== undefined && (obj.bankCoin = message.bankCoin ? Coin.toJSON(message.bankCoin) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgConvertCoinToEvm>, I>>(base?: I): MsgConvertCoinToEvm {
    return MsgConvertCoinToEvm.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgConvertCoinToEvm>, I>>(object: I): MsgConvertCoinToEvm {
    const message = createBaseMsgConvertCoinToEvm();
    message.toEthAddr = object.toEthAddr ?? "";
    message.sender = object.sender ?? "";
    message.bankCoin = (object.bankCoin !== undefined && object.bankCoin !== null)
      ? Coin.fromPartial(object.bankCoin)
      : undefined;
    return message;
  },
};

function createBaseMsgConvertCoinToEvmResponse(): MsgConvertCoinToEvmResponse {
  return {};
}

export const MsgConvertCoinToEvmResponse = {
  encode(_: MsgConvertCoinToEvmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertCoinToEvmResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCoinToEvmResponse();
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

  fromJSON(_: any): MsgConvertCoinToEvmResponse {
    return {};
  },

  toJSON(_: MsgConvertCoinToEvmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgConvertCoinToEvmResponse>, I>>(base?: I): MsgConvertCoinToEvmResponse {
    return MsgConvertCoinToEvmResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgConvertCoinToEvmResponse>, I>>(_: I): MsgConvertCoinToEvmResponse {
    const message = createBaseMsgConvertCoinToEvmResponse();
    return message;
  },
};

/** Msg defines the evm Msg service. */
export interface Msg {
  /** EthereumTx defines a method submitting Ethereum transactions. */
  EthereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse>;
  /**
   * UpdateParams defined a governance operation for updating the x/evm module
   * parameters. The authority is hard-coded to the x/gov module account
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * CreateFunToken: Create a "FunToken" mapping. Either the ERC20 contract
   * address can be given to create the mapping to a Bank Coin, or the
   * denomination for a Bank Coin can be given to create the mapping to an ERC20.
   */
  CreateFunToken(request: MsgCreateFunToken): Promise<MsgCreateFunTokenResponse>;
  /**
   * ConvertCoinToEvm: Sends a coin with a valid "FunToken" mapping to the
   * given recipient address ("to_eth_addr") in the corresponding ERC20
   * representation.
   */
  ConvertCoinToEvm(request: MsgConvertCoinToEvm): Promise<MsgConvertCoinToEvmResponse>;
}

export const MsgServiceName = "eth.evm.v1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.EthereumTx = this.EthereumTx.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateFunToken = this.CreateFunToken.bind(this);
    this.ConvertCoinToEvm = this.ConvertCoinToEvm.bind(this);
  }
  EthereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse> {
    const data = MsgEthereumTx.encode(request).finish();
    const promise = this.rpc.request(this.service, "EthereumTx", data);
    return promise.then((data) => MsgEthereumTxResponse.decode(_m0.Reader.create(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  CreateFunToken(request: MsgCreateFunToken): Promise<MsgCreateFunTokenResponse> {
    const data = MsgCreateFunToken.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateFunToken", data);
    return promise.then((data) => MsgCreateFunTokenResponse.decode(_m0.Reader.create(data)));
  }

  ConvertCoinToEvm(request: MsgConvertCoinToEvm): Promise<MsgConvertCoinToEvmResponse> {
    const data = MsgConvertCoinToEvm.encode(request).finish();
    const promise = this.rpc.request(this.service, "ConvertCoinToEvm", data);
    return promise.then((data) => MsgConvertCoinToEvmResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
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
