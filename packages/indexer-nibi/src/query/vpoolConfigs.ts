import { gqlQuery } from "../utils"
import { doGqlQuery } from "../gql"
import {
  QueryExt,
  QueryExtVpoolConfigsArgs,
  VpoolConfigsOrder,
} from "../gql/generated"

export interface GqlOutVPoolConfig {
  vpoolConfigs: QueryExt["vpoolConfigs"]
}

export const vpoolConfigs = async (
  args: QueryExtVpoolConfigsArgs,
  endpt: string
): Promise<GqlOutVPoolConfig> => {
  if (!args.orderDesc) args.orderDesc = true
  if (!args.order) args.order = VpoolConfigsOrder.BlockTs

  return doGqlQuery(
    gqlQuery(
      "vpoolConfigs",
      args,
      `block
       blockTs
       pair
       tradeLimitRatio
       fluctuationLimitRatio
       maxOracleSpreadRatio
       maintenanceMarginRatio
       maxLeverage`
    ),
    endpt
  )
}
