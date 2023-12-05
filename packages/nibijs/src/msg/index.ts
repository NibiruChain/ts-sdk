import { PerpMsgFactory } from "./perp"
import { SpotMsgFactory } from "./spot"

export class MsgFactory {
  spot = SpotMsgFactory
  perp = PerpMsgFactory
}

export const Msg = new MsgFactory()

export * from "./encode-types"
export * from "./perp"
export * from "./spot"
