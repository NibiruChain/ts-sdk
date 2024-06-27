import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {
  MsgChangeRoot,
  MsgChangeRootResponse,
  MsgClientImpl,
  MsgEditSudoers,
  MsgEditSudoersResponse,
} from "src/protojs/index.nibiru.sudo.v1"

export interface SudoMsgExtension {
  readonly sudoMsg: Readonly<{
    editSudoers: (body: MsgEditSudoers) => Promise<MsgEditSudoersResponse>
    changeRoot: (body: MsgChangeRoot) => Promise<MsgChangeRootResponse>
  }>
}

export const setupSudoMsgExtension = (base: QueryClient): SudoMsgExtension => {
  const queryService = new MsgClientImpl(createProtobufRpcClient(base))

  return {
    sudoMsg: {
      editSudoers: async (body: MsgEditSudoers) =>
        queryService.EditSudoers(MsgEditSudoers.fromPartial(body)),

      changeRoot: async (body: MsgChangeRoot) =>
        queryService.ChangeRoot(MsgChangeRoot.fromPartial(body)),
    },
  }
}
