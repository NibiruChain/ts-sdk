import { defaultGovernance } from "../utils/defaultObjects"
import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
} from "../utils/consts"
import {
  GQLQuery,
  GQLGovernanceGqlGovDepositsArgs,
  GQLGovernanceGqlGovProposalsArgs,
  GQLGovernanceGqlGovVotesArgs,
  GQLGovDeposit,
  GQLGovProposal,
  GQLGovVote,
} from "../utils/generated"

export type QueryGovernanceArgs = {
  govDeposits?: GQLGovernanceGqlGovDepositsArgs
  govProposals?: GQLGovernanceGqlGovProposalsArgs
  govVotes?: GQLGovernanceGqlGovVotesArgs
}

export interface GqlOutGovernance {
  governance?: GQLQuery["governance"]
}

export type GovernanceFields = Partial<{
  govDeposits?: Partial<GQLGovDeposit>
  govProposals?: Partial<GQLGovProposal>
  govVotes?: Partial<GQLGovVote>
}>

export const governanceQueryString = (
  args: QueryGovernanceArgs,
  fields?: GovernanceFields
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

  // Default Objects

  if (args.govDeposits && !fields?.govDeposits) {
    governanceQuery.push(
      gqlQuery(
        "govDeposits",
        args.govDeposits,
        convertObjectToPropertiesString(defaultGovernance.govDeposits[0]),
        true
      )
    )
  }

  if (args.govProposals && !fields?.govProposals) {
    governanceQuery.push(
      gqlQuery(
        "govProposals",
        args.govProposals,
        convertObjectToPropertiesString(defaultGovernance.govProposals[0]),
        true
      )
    )
  }

  if (args.govVotes && !fields?.govVotes) {
    governanceQuery.push(
      gqlQuery(
        "govVotes",
        args.govVotes,
        convertObjectToPropertiesString(defaultGovernance.govVotes[0]),
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
  fields?: GovernanceFields
): Promise<GqlOutGovernance> =>
  doGqlQuery(
    `{
      ${governanceQueryString(args, fields)}
    }`,
    endpt
  )
