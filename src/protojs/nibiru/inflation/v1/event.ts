/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

/**
 * EventInflationDistribution: Emitted when NIBI tokens are minted on the
 * network based on Nibiru's inflation schedule.
 */
export interface EventInflationDistribution {
  stakingRewards?: Coin;
  strategicReserve?: Coin;
  communityPool?: Coin;
}

function createBaseEventInflationDistribution(): EventInflationDistribution {
  return { stakingRewards: undefined, strategicReserve: undefined, communityPool: undefined };
}

export const EventInflationDistribution = {
  encode(message: EventInflationDistribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakingRewards !== undefined) {
      Coin.encode(message.stakingRewards, writer.uint32(10).fork()).ldelim();
    }
    if (message.strategicReserve !== undefined) {
      Coin.encode(message.strategicReserve, writer.uint32(18).fork()).ldelim();
    }
    if (message.communityPool !== undefined) {
      Coin.encode(message.communityPool, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventInflationDistribution {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInflationDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stakingRewards = Coin.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strategicReserve = Coin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.communityPool = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventInflationDistribution {
    return {
      stakingRewards: isSet(object.stakingRewards) ? Coin.fromJSON(object.stakingRewards) : undefined,
      strategicReserve: isSet(object.strategicReserve) ? Coin.fromJSON(object.strategicReserve) : undefined,
      communityPool: isSet(object.communityPool) ? Coin.fromJSON(object.communityPool) : undefined,
    };
  },

  toJSON(message: EventInflationDistribution): unknown {
    const obj: any = {};
    message.stakingRewards !== undefined &&
      (obj.stakingRewards = message.stakingRewards ? Coin.toJSON(message.stakingRewards) : undefined);
    message.strategicReserve !== undefined &&
      (obj.strategicReserve = message.strategicReserve ? Coin.toJSON(message.strategicReserve) : undefined);
    message.communityPool !== undefined &&
      (obj.communityPool = message.communityPool ? Coin.toJSON(message.communityPool) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<EventInflationDistribution>, I>>(base?: I): EventInflationDistribution {
    return EventInflationDistribution.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventInflationDistribution>, I>>(object: I): EventInflationDistribution {
    const message = createBaseEventInflationDistribution();
    message.stakingRewards = (object.stakingRewards !== undefined && object.stakingRewards !== null)
      ? Coin.fromPartial(object.stakingRewards)
      : undefined;
    message.strategicReserve = (object.strategicReserve !== undefined && object.strategicReserve !== null)
      ? Coin.fromPartial(object.strategicReserve)
      : undefined;
    message.communityPool = (object.communityPool !== undefined && object.communityPool !== null)
      ? Coin.fromPartial(object.communityPool)
      : undefined;
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
