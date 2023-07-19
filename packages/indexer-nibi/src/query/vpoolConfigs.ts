import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  QueryExt,
  QueryExtVpoolConfigsArgs,
  VpoolConfigs,
  VpoolConfigsOrder,
} from "../gql/generated"

export const defaultVpoolConfigsObject: Partial<VpoolConfigs> = {
  block: "",
  blockTs: "",
  pair: "",
  tradeLimitRatio: 0,
  fluctuationLimitRatio: 0,
  maxOracleSpreadRatio: 0,
  maintenanceMarginRatio: 0,
  maxLeverage: 0,
}

export interface GqlOutVPoolConfigs {
  vpoolConfigs?: QueryExt["vpoolConfigs"]
}

export const vpoolConfigs = async (
  args: QueryExtVpoolConfigsArgs,
  endpt: string
): Promise<GqlOutVPoolConfigs> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = VpoolConfigsOrder.BlockTs

  return doGqlQuery(
    gqlQuery(
      "vpoolConfigs",
      args,
      convertObjectToPropertiesString(defaultVpoolConfigsObject)
    ),
    endpt
  )
}
