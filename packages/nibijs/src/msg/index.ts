import { BankMsgs } from "./bank"
import { DexMsgs } from "./dex"
import { PerpMsgs } from "./perp"

class MsgFactory {
  bank = BankMsgs

  dex = DexMsgs

  perp = PerpMsgs
}

export const Msg = new MsgFactory()

export * from "./types"
