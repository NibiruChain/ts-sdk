import { defaultGovernance } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  GovernanceGovDepositsArgs,
  GovernanceGovProposalsArgs,
  GovernanceGovVotesArgs,
  GovDeposit,
  GovProposal,
  GovVote,
} from "../gql/generated"

export type QueryGovernanceArgs = {
  govDeposits?: GovernanceGovDepositsArgs
  govProposals?: GovernanceGovProposalsArgs
  govVotes?: GovernanceGovVotesArgs
}

export interface GqlOutGovernance {
  governance?: Query["governance"]
}

export type GovernanceFields = Partial<{
  govDeposits?: Partial<GovDeposit>
  govProposals?: Partial<GovProposal>
  govVotes?: Partial<GovVote>
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
