import { BankMsgs } from "./bank"
import { DexMsgs } from "./dex"
import { PerpMsgs } from "./perp"
import { StakingMsgs } from "./staking"

export class MsgFactory {
  bank = BankMsgs

  dex = DexMsgs

  perp = PerpMsgs

  staking = StakingMsgs
}

export const Msg = new MsgFactory()

export * from "./types"
