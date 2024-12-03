/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

/**
 * ABCI event emitted when a deployer registers a contract to receive fee
 * sharing payouts, specifying the deployer, contract, and withdrawer addresses.
 */
export interface EventRegisterDevGas {
  /**
   * deployer is the addess of the account that registered the smart contract to
   * receive dev gas royalties.
   */
  deployer: string;
  /**
   * Address of the smart contract. This identifies the specific contract
   * that will receive fee sharing payouts.
   */
  contract: string;
  /**
   * The address that will receive the fee sharing payouts for the registered
   * contract. This could be the deployer address or a separate withdrawer
   * address specified.
   */
  withdrawer: string;
}

/**
 * ABCI event emitted when a deployer cancels fee sharing for a contract,
 * specifying the deployer and contract addresses.
 */
export interface EventCancelDevGas {
  /**
   * deployer is the addess of the account that registered the smart contract to
   * receive dev gas royalties.
   */
  deployer: string;
  /**
   * Address of the smart contract. This identifies the specific contract
   * that will receive fee sharing payouts.
   */
  contract: string;
}

/**
 * ABCI event emitted when a deployer updates the fee sharing registration for a
 * contract, specifying updated deployer, contract, and/or withdrawer addresses.
 */
export interface EventUpdateDevGas {
  /**
   * deployer is the addess of the account that registered the smart contract to
   * receive dev gas royalties.
   */
  deployer: string;
  /**
   * Address of the smart contract. This identifies the specific contract
   * that will receive fee sharing payouts.
   */
  contract: string;
  /**
   * The address that will receive the fee sharing payouts for the registered
   * contract. This could be the deployer address or a separate withdrawer
   * address specified.
   */
  withdrawer: string;
}

/**
 * ABCI event emitted when fee sharing payouts are made, containing details on
 * the payouts in JSON format.
 */
export interface EventPayoutDevGas {
  payouts: string;
}

function createBaseEventRegisterDevGas(): EventRegisterDevGas {
  return { deployer: "", contract: "", withdrawer: "" };
}

export const EventRegisterDevGas = {
  encode(message: EventRegisterDevGas, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deployer !== "") {
      writer.uint32(10).string(message.deployer);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.withdrawer !== "") {
      writer.uint32(26).string(message.withdrawer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRegisterDevGas {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRegisterDevGas();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deployer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contract = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.withdrawer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventRegisterDevGas {
    return {
      deployer: isSet(object.deployer) ? String(object.deployer) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      withdrawer: isSet(object.withdrawer) ? String(object.withdrawer) : "",
    };
  },

  toJSON(message: EventRegisterDevGas): unknown {
    const obj: any = {};
    message.deployer !== undefined && (obj.deployer = message.deployer);
    message.contract !== undefined && (obj.contract = message.contract);
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventRegisterDevGas>, I>>(base?: I): EventRegisterDevGas {
    return EventRegisterDevGas.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventRegisterDevGas>, I>>(object: I): EventRegisterDevGas {
    const message = createBaseEventRegisterDevGas();
    message.deployer = object.deployer ?? "";
    message.contract = object.contract ?? "";
    message.withdrawer = object.withdrawer ?? "";
    return message;
  },
};

function createBaseEventCancelDevGas(): EventCancelDevGas {
  return { deployer: "", contract: "" };
}

export const EventCancelDevGas = {
  encode(message: EventCancelDevGas, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deployer !== "") {
      writer.uint32(10).string(message.deployer);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelDevGas {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelDevGas();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deployer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contract = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventCancelDevGas {
    return {
      deployer: isSet(object.deployer) ? String(object.deployer) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
    };
  },

  toJSON(message: EventCancelDevGas): unknown {
    const obj: any = {};
    message.deployer !== undefined && (obj.deployer = message.deployer);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventCancelDevGas>, I>>(base?: I): EventCancelDevGas {
    return EventCancelDevGas.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventCancelDevGas>, I>>(object: I): EventCancelDevGas {
    const message = createBaseEventCancelDevGas();
    message.deployer = object.deployer ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
};

function createBaseEventUpdateDevGas(): EventUpdateDevGas {
  return { deployer: "", contract: "", withdrawer: "" };
}

export const EventUpdateDevGas = {
  encode(message: EventUpdateDevGas, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deployer !== "") {
      writer.uint32(10).string(message.deployer);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.withdrawer !== "") {
      writer.uint32(26).string(message.withdrawer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateDevGas {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateDevGas();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deployer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contract = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.withdrawer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventUpdateDevGas {
    return {
      deployer: isSet(object.deployer) ? String(object.deployer) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      withdrawer: isSet(object.withdrawer) ? String(object.withdrawer) : "",
    };
  },

  toJSON(message: EventUpdateDevGas): unknown {
    const obj: any = {};
    message.deployer !== undefined && (obj.deployer = message.deployer);
    message.contract !== undefined && (obj.contract = message.contract);
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventUpdateDevGas>, I>>(base?: I): EventUpdateDevGas {
    return EventUpdateDevGas.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateDevGas>, I>>(object: I): EventUpdateDevGas {
    const message = createBaseEventUpdateDevGas();
    message.deployer = object.deployer ?? "";
    message.contract = object.contract ?? "";
    message.withdrawer = object.withdrawer ?? "";
    return message;
  },
};

function createBaseEventPayoutDevGas(): EventPayoutDevGas {
  return { payouts: "" };
}

export const EventPayoutDevGas = {
  encode(message: EventPayoutDevGas, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payouts !== "") {
      writer.uint32(10).string(message.payouts);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPayoutDevGas {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPayoutDevGas();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payouts = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventPayoutDevGas {
    return { payouts: isSet(object.payouts) ? String(object.payouts) : "" };
  },

  toJSON(message: EventPayoutDevGas): unknown {
    const obj: any = {};
    message.payouts !== undefined && (obj.payouts = message.payouts);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventPayoutDevGas>, I>>(base?: I): EventPayoutDevGas {
    return EventPayoutDevGas.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventPayoutDevGas>, I>>(object: I): EventPayoutDevGas {
    const message = createBaseEventPayoutDevGas();
    message.payouts = object.payouts ?? "";
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
