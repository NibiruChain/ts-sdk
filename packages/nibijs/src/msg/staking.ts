import { EncodeObject, GeneratedType, Registry } from "@cosmjs/proto-signing";
import * as pb from "@nibiruchain/protojs/dist/staking/v1/tx"
import { MsgTypeUrls, TxMessage } from "./types";

export const stakingMsgTypeUrls: MsgTypeUrls = {
  MsgBeginRedelegate: `/${pb.protobufPackage}.MsgBeginRedelegate`,
  MsgCreateValidator: `/${pb.protobufPackage}.MsgCreateValidator`,
  MsgDelegate: `/${pb.protobufPackage}.MsgDelegate`,
  MsgEditValidator: `/${pb.protobufPackage}.MsgEditValidator`,
  MsgUndelegate: `/${pb.protobufPackage}.MsgUndelegate`,
}

export function registerTypes(registry: Registry) {
  registry.register(stakingMsgTypeUrls.MsgRemoveMargin, pb.MsgBeginRedelegate)
  registry.register(stakingMsgTypeUrls.MsgAddMargin, pb.MsgCreateValidator)
  registry.register(stakingMsgTypeUrls.MsgLiquidate, pb.MsgDelegate)
  registry.register(stakingMsgTypeUrls.MsgOpenPosition, pb.MsgEditValidator)
  registry.register(stakingMsgTypeUrls.MsgClosePosition, pb.MsgUndelegate)
  return registry
}

export class StakingMsgs {
  static beginRedelegate(msg: pb.MsgBeginRedelegate): TxMessage {
    return {
      typeUrl: stakingMsgTypeUrls.MsgBeginRedelegate,
      value: pb.MsgBeginRedelegate.fromPartial(msg),
    }
  }

  static createValidator(msg: pb.MsgCreateValidator): TxMessage {
    return {
      typeUrl: stakingMsgTypeUrls.MsgCreateValidator,
      value: pb.MsgCreateValidator.fromPartial(msg),
    }
  }

  static delegate(msg: pb.MsgDelegate): TxMessage {
    return {
      typeUrl: stakingMsgTypeUrls.MsgDelegate,
      value: pb.MsgDelegate.fromPartial(msg),
    }
  }

  static editValidator(msg: pb.MsgEditValidator): TxMessage {
    return {
      typeUrl: stakingMsgTypeUrls.MsgEditValidator,
      value: pb.MsgEditValidator.fromPartial(msg),
    }
  }

  static undelegate(msg: pb.MsgUndelegate): TxMessage {
    return {
      typeUrl: stakingMsgTypeUrls.MsgUndelegate,
      value: pb.MsgUndelegate.fromPartial(msg),
    }
  }
}