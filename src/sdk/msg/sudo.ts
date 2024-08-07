import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
  MsgChangeRoot,
  MsgChangeRootResponse,
  MsgClientImpl,
  MsgEditSudoers,
  MsgEditSudoersResponse,
} from "../../protojs/nibiru/sudo/v1/tx"

export interface SudoMsgExtension {
  editSudoers: (body: MsgEditSudoers) => Promise<MsgEditSudoersResponse>
  changeRoot: (body: MsgChangeRoot) => Promise<MsgChangeRootResponse>
}

export const setupSudoMsgExtension = (base: QueryClient): SudoMsgExtension => {
  const queryService = new MsgClientImpl(createProtobufRpcClient(base))

  return {
    editSudoers: async (body: MsgEditSudoers) =>
      queryService.EditSudoers(MsgEditSudoers.fromPartial(body)),

    changeRoot: async (body: MsgChangeRoot) =>
      queryService.ChangeRoot(MsgChangeRoot.fromPartial(body)),
  }
}
