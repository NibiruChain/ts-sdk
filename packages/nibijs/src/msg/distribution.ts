import { Registry } from "@cosmjs/proto-signing"
import * as pb from "@nibiruchain/protojs/dist/cosmos/distribution/v1beta1/tx"
import { MsgTypeUrls, TxMessage } from "./types"

export const distributionMsgTypeUrls: MsgTypeUrls = {
  MsgFundCommunityPool: `/${pb.protobufPackage}.MsgFundCommunityPool`,
  MsgSetWithdrawAddress: `/${pb.protobufPackage}.MsgSetWithdrawAddress`,
  MsgWithdrawDelegatorReward: `/${pb.protobufPackage}.MsgWithdrawDelegatorReward`,
  MsgWithdrawValidatorCommission: `/${pb.protobufPackage}.MsgWithdrawValidatorCommission`,
}

export function registerTypes(registry: Registry) {
  registry.register(
    distributionMsgTypeUrls.MsgFundCommunityPool,
    pb.MsgFundCommunityPool,
  )
  registry.register(
    distributionMsgTypeUrls.MsgSetWithdrawAddress,
    pb.MsgSetWithdrawAddress,
  )
  registry.register(
    distributionMsgTypeUrls.MsgWithdrawDelegatorReward,
    pb.MsgWithdrawDelegatorReward,
  )
  registry.register(
    distributionMsgTypeUrls.MsgWithdrawValidatorCommission,
    pb.MsgWithdrawValidatorCommission,
  )
  return registry
}

export class DistributionMsgs {
  /** MsgFundCommunityPool allows an account to directly fund the community pool. */
  static fundCommunityPool(msg: pb.MsgFundCommunityPool): TxMessage {
    return {
      typeUrl: distributionMsgTypeUrls.MsgFundCommunityPool,
      value: pb.MsgFundCommunityPool.fromPartial(msg),
    }
  }

  /** MsgSetWithdrawAddress sets the withdraw address for a delegator (or
   * validator self-delegation). */
  static setWithdrawAddress(msg: pb.MsgSetWithdrawAddress): TxMessage {
    return {
      typeUrl: distributionMsgTypeUrls.MsgSetWithdrawAddress,
      value: pb.MsgSetWithdrawAddress.fromPartial(msg),
    }
  }

  /** MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
   * from a single validator */
  static withdrawDelegatorReward(msg: pb.MsgWithdrawDelegatorReward): TxMessage {
    return {
      typeUrl: distributionMsgTypeUrls.MsgWithdrawDelegatorReward,
      value: pb.MsgWithdrawDelegatorReward.fromPartial(msg),
    }
  }

  /** MsgWithdrawValidatorCommission withdraws the full commission to the
   * validator address. */
  static withdrawValidatorCommission(
    msg: pb.MsgWithdrawValidatorCommission,
  ): TxMessage {
    return {
      typeUrl: distributionMsgTypeUrls.MsgWithdrawValidatorCommission,
      value: pb.MsgWithdrawValidatorCommission.fromPartial(msg),
    }
  }
}
