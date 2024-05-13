import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQuery,
  GQLGovernanceGqlGovDepositsArgs,
  GQLGovernanceGqlGovProposalsArgs,
  GQLGovernanceGqlGovVotesArgs,
  GQLGovDeposit,
  GQLGovProposal,
  GQLGovVote,
  DeepPartial,
} from ".."

export type QueryGovernanceArgs = {
  govDeposits?: GQLGovernanceGqlGovDepositsArgs
  govProposals?: GQLGovernanceGqlGovProposalsArgs
  govVotes?: GQLGovernanceGqlGovVotesArgs
}

export interface GqlOutGovernance {
  governance?: GQLQuery["governance"]
}

export type GovernanceFields = DeepPartial<{
  govDeposits?: DeepPartial<GQLGovDeposit>
  govProposals?: DeepPartial<GQLGovProposal>
  govVotes?: DeepPartial<GQLGovVote>
}>

export const governanceQueryString = (
  args: QueryGovernanceArgs,
  fields: GovernanceFields
) => {
  const governanceQuery: string[] = []

  if (fields?.govDeposits) {
    governanceQuery.push(
      gqlQuery(
        "govDeposits",
        args.govDeposits ?? {},
        convertObjectToPropertiesString(fields.govDeposits),
        true
      )
    )
  }

  if (fields?.govProposals) {
    governanceQuery.push(
      gqlQuery(
        "govProposals",
        args.govProposals ?? {},
        convertObjectToPropertiesString(fields.govProposals),
        true
      )
    )
  }

  if (fields?.govVotes) {
    governanceQuery.push(
      gqlQuery(
        "govVotes",
        args.govVotes ?? {},
        convertObjectToPropertiesString(fields.govVotes),
        true
      )
    )
  }

  return `
      governance {
          ${governanceQuery.join("\n")}
      }
    `
}

export const governance = async (
  args: QueryGovernanceArgs,
  endpt: string,
  fields: GovernanceFields
): Promise<GqlOutGovernance> =>
  doGqlQuery(
    `{
      ${governanceQueryString(args, fields)}
    }`,
    endpt
  )
