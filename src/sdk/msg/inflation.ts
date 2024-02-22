import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing"
import {
  MsgEditInflationParams,
  MsgToggleInflation,
} from "../../protojs/nibiru/inflation/v1/tx"
import { TxMessage } from ".."

const protobufPackage = "nibiru.inflation.v1"

export const INFLATION_MSG_TYPE_URLS = {
  MsgEditInflationParams: `/${protobufPackage}.MsgEditInflationParams`,
  MsgToggleInflation: `/${protobufPackage}.MsgToggleInflation`,
}

export const inflationTypes: ReadonlyArray<[string, GeneratedType]> = [
  [INFLATION_MSG_TYPE_URLS.MsgEditInflationParams, MsgEditInflationParams],
  [INFLATION_MSG_TYPE_URLS.MsgToggleInflation, MsgToggleInflation],
]

export interface MsgEditInflationParamsEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgEditInflationParams>
}

export const isMsgEditInflationParamsEncodeObject = (
  encodeObject: EncodeObject
) => encodeObject.typeUrl === INFLATION_MSG_TYPE_URLS.MsgEditInflationParams

export interface MsgToggleInflationEncodeObject extends EncodeObject {
  readonly typeUrl: string
  readonly value: Partial<MsgToggleInflation>
}

export const isMsgToggleInflationEncodeObject = (encodeObject: EncodeObject) =>
  encodeObject.typeUrl === INFLATION_MSG_TYPE_URLS.MsgToggleInflation

// ----------------------------------------------------------------------------

export class InflationMsgFactory {
  static editInflationParams(msg: MsgEditInflationParams): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgEditInflationParams`,
      value: MsgEditInflationParams.fromPartial(msg),
    }
  }

  static toggleInflation(msg: MsgToggleInflation): TxMessage {
    return {
      typeUrl: `/${protobufPackage}.MsgToggleInflation`,
      value: MsgToggleInflation.fromPartial(msg),
    }
  }
}
