import {
  defaultGovDeposit,
  defaultGovProposal,
  defaultGovVote,
} from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  Governance,
  GovernanceGovDepositsArgs,
  GovernanceGovProposalsArgs,
  GovernanceGovVotesArgs,
} from "../gql/generated"

export type QueryGovernanceArgs = {
  govDeposits: GovernanceGovDepositsArgs
  govProposals: GovernanceGovProposalsArgs
  govVotes: GovernanceGovVotesArgs
}

export const defaultGovernanceObject: Governance = {
  govDeposits: [defaultGovDeposit],
  govProposals: [defaultGovProposal],
  govVotes: [defaultGovVote],
}

export interface GqlOutGovernance {
  governance?: Query["governance"]
}

export const governance = async (
  args: QueryGovernanceArgs,
  endpt: string,
  fields?: Partial<Governance>
): Promise<GqlOutGovernance> => {
  const goveranceQuery: string[] = []

  if (fields) {
    if (fields?.govDeposits) {
      goveranceQuery.push(
        gqlQuery(
          "govDeposits",
          args.govDeposits,
          convertObjectToPropertiesString(fields.govDeposits),
          true
        )
      )
    }

    if (fields?.govProposals) {
      goveranceQuery.push(
        gqlQuery(
          "govProposals",
          args.govProposals,
          convertObjectToPropertiesString(fields.govProposals),
          true
        )
      )
    }

    if (fields?.govVotes) {
      goveranceQuery.push(
        gqlQuery(
          "govVotes",
          args.govVotes,
          convertObjectToPropertiesString(fields.govVotes),
          true
        )
      )
    }
  } else {
    goveranceQuery.push(
      gqlQuery(
        "govDeposits",
        args.govDeposits,
        convertObjectToPropertiesString(defaultGovernanceObject.govDeposits),
        true
      )
    )

    goveranceQuery.push(
      gqlQuery(
        "govProposals",
        args.govProposals,
        convertObjectToPropertiesString(defaultGovernanceObject.govProposals),
        true
      )
    )

    goveranceQuery.push(
      gqlQuery(
        "govVotes",
        args.govVotes,
        convertObjectToPropertiesString(defaultGovernanceObject.govVotes),
        true
      )
    )
  }

  return doGqlQuery(
    `{
      governance {
          ${goveranceQuery.join("\n")}
      }
    }`,
    endpt
  )
}
