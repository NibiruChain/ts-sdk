import { BankMsgs } from "./bank"
import { SpotMsgs } from "./spot"
import { PerpMsgs } from "./perp"
import { StakingMsgs } from "./staking"

export class MsgFactory {
  bank = BankMsgs

  spot = SpotMsgs

  perp = PerpMsgs

  staking = StakingMsgs
}

export const Msg = new MsgFactory()

export * from "./types"
