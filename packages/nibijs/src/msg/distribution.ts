import { Registry } from "@cosmjs/proto-signing"
import * as pb from "@nibiruchain/protojs/dist/cosmos/distribution/v1beta1/tx"
import { MsgTypeUrls, TxMessage } from "./types"

export const distributionMsgTypeUrls: MsgTypeUrls = {
  MsgFundCommunityPool: `/${pb.protobufPackage}.MsgFundCommunityPool`,
  MsgSetWithdrawAddress: `/${pb.protobufPackage}.MsgSetWithdrawAddress`,
  MsgWithdrawDelegatorReward: `/${pb.protobufPackage}.MsgWithdrawDelegatorReward`,
  MsgWithdrawValidatorCommission: `/${pb.protobufPackage}.MsgWithdrawValidatorCommission`,
}

const MsgTypes: { [key: string]: string } = {
  MsgFundCommunityPool: "MsgFundCommunityPool",
  MsgSetWithdrawAddress: "MsgSetWithdrawAddress",
  MsgWithdrawDelegatorReward: "MsgWithdrawDelegatorReward",
  MsgWithdrawValidatorCommission: "MsgWithdrawValidatorCommission",
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

function txMsgFromMsgName(args: { msgName: string; msg: any }): TxMessage {
  const { msgName, msg } = args
  return {
    typeUrl: distributionMsgTypeUrls[msgName],
    value: pb[msgName].fromPartial(msg),
  }
}

export class DistributionMsgs {
  /** MsgFundCommunityPool allows an account to directly fund the community pool. */
  static fundCommunityPool(msg: pb.MsgFundCommunityPool): TxMessage {
    const msgName = MsgTypes.MsgFundCommunityPool
    return txMsgFromMsgName({ msgName, msg })
  }

  /** MsgSetWithdrawAddress sets the withdraw address for a delegator (or
   * validator self-delegation). */
  static setWithdrawAddress(msg: pb.MsgSetWithdrawAddress): TxMessage {
    const msgName = MsgTypes.MsgSetWithdrawAddress
    return txMsgFromMsgName({ msgName, msg })
  }

  /** MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
   * from a single validator */
  static withdrawDelegatorReward(msg: pb.MsgWithdrawDelegatorReward): TxMessage {
    const msgName = MsgTypes.MsgWithdrawDelegatorReward
    return txMsgFromMsgName({ msgName, msg })
  }

  /** MsgWithdrawValidatorCommission withdraws the full commission to the
   * validator address. */
  static withdrawValidatorCommission(
    msg: pb.MsgWithdrawValidatorCommission,
  ): TxMessage {
    const msgName = MsgTypes.MsgWithdrawValidatorCommission
    return txMsgFromMsgName({ msgName, msg })
  }
}
