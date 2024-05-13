import {
  DeepPartial,
  GQLDelegation,
  GQLQuery,
  GQLQueryGqlRedelegationsArgs,
  GQLQueryGqlUnbondingsArgs,
  GQLRedelegation,
  GQLStakingGqlDelegationsArgs,
  GQLStakingGqlHistoryArgs,
  GQLStakingGqlValidatorsArgs,
  GQLStakingHistoryItem,
  GQLUnbonding,
  GQLValidator,
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
} from "../utils"

export type QueryStakingArgs = {
  delegations?: GQLStakingGqlDelegationsArgs
  history?: GQLStakingGqlHistoryArgs
  redelegations?: GQLQueryGqlRedelegationsArgs
  unbondings?: GQLQueryGqlUnbondingsArgs
  validators?: GQLStakingGqlValidatorsArgs
}

export interface GqlOutStaking {
  staking?: GQLQuery["staking"]
}

export type GQLStakingFields = DeepPartial<{
  delegations?: DeepPartial<GQLDelegation>
  history?: DeepPartial<GQLStakingHistoryItem>
  redelegations?: DeepPartial<GQLRedelegation>
  unbondings?: DeepPartial<GQLUnbonding>
  validators?: DeepPartial<GQLValidator>
}>

export const GQLStakingQueryString = (
  args: QueryStakingArgs,
  fields?: GQLStakingFields
) => {
  const GQLStakingQuery: string[] = []

  if (fields?.delegations) {
    GQLStakingQuery.push(
      gqlQuery(
        "delegations",
        args.delegations ?? {},
        convertObjectToPropertiesString(fields.delegations),
        true
      )
    )
  }

  if (fields?.history) {
    GQLStakingQuery.push(
      gqlQuery(
        "history",
        args.history ?? {},
        convertObjectToPropertiesString(fields.history),
        true
      )
    )
  }

  if (fields?.redelegations) {
    GQLStakingQuery.push(
      gqlQuery(
        "redelegations",
        args.redelegations ?? {},
        convertObjectToPropertiesString(fields.redelegations),
        true
      )
    )
  }

  if (fields?.unbondings) {
    GQLStakingQuery.push(
      gqlQuery(
        "unbondings",
        args.unbondings ?? {},
        convertObjectToPropertiesString(fields.unbondings),
        true
      )
    )
  }

  if (fields?.validators) {
    GQLStakingQuery.push(
      gqlQuery(
        "validators",
        args.validators ?? {},
        convertObjectToPropertiesString(fields.validators),
        true
      )
    )
  }

  return `
      staking {
        ${GQLStakingQuery.join("\n")}
      }
    `
}

export const staking = async (
  args: QueryStakingArgs,
  endpt: string,
  fields?: GQLStakingFields
): Promise<GqlOutStaking> =>
  doGqlQuery(
    `{
      ${GQLStakingQueryString(args, fields)}
    }`,
    endpt
  )
