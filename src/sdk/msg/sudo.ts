import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import { GeneratedType } from "@cosmjs/proto-signing"
import {
  MsgChangeRoot,
  MsgChangeRootResponse,
  MsgClientImpl,
  MsgEditSudoers,
  MsgEditSudoersResponse,
  MsgEditZeroGasActors,
  MsgEditZeroGasActorsResponse,
  MsgServiceName,
} from "../../protojs/nibiru/sudo/v1/tx"

export const SUDO_MSG_TYPE_URLS = {
  MsgEditSudoers: `/${MsgServiceName}EditSudoers`,
  MsgChangeRoot: `/${MsgServiceName}ChangeRoot`,
  MsgEditZeroGasActors: `/${MsgServiceName}EditZeroGasActors`,
}

export const sudoTypes: ReadonlyArray<[string, GeneratedType]> = [
  [SUDO_MSG_TYPE_URLS.MsgEditSudoers, MsgEditSudoers],
  [SUDO_MSG_TYPE_URLS.MsgChangeRoot, MsgChangeRoot],
  [SUDO_MSG_TYPE_URLS.MsgEditZeroGasActors, MsgEditZeroGasActors],
]

export interface SudoMsgExtension {
  editSudoers: (body: MsgEditSudoers) => Promise<MsgEditSudoersResponse>
  changeRoot: (body: MsgChangeRoot) => Promise<MsgChangeRootResponse>
  editZeroGasActors: (
    body: MsgEditZeroGasActors
  ) => Promise<MsgEditZeroGasActorsResponse>
}

export const setupSudoMsgExtension = (base: QueryClient): SudoMsgExtension => {
  const queryService = new MsgClientImpl(createProtobufRpcClient(base))

  return {
    editSudoers: async (body: MsgEditSudoers) =>
      queryService.EditSudoers(MsgEditSudoers.fromPartial(body)),

    changeRoot: async (body: MsgChangeRoot) =>
      queryService.ChangeRoot(MsgChangeRoot.fromPartial(body)),

    editZeroGasActors: async (body: MsgEditZeroGasActors) =>
      queryService.EditZeroGasActors(MsgEditZeroGasActors.fromPartial(body)),
  }
}
