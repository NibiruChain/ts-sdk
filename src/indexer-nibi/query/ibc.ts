import {
  defaultIbcChannelsResponse,
  defaultIbcTransfer,
} from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  GQLQuery,
  GQLIbcgqlIbcTransfersArgs,
  GQLIbcChannelsResponse,
  GQLIbcTransfer,
} from "../gql/generated"

export type QueryIbcArgs = {
  ibcChannels?: {}
  ibcTransfers?: GQLIbcgqlIbcTransfersArgs
}

export interface GqlOutIbc {
  ibc?: GQLQuery["ibc"]
}

export type IbcFields = Partial<{
  ibcChannels?: Partial<GQLIbcChannelsResponse>
  ibcTransfers?: Partial<GQLIbcTransfer>
}>

export const ibcQueryString = (args: QueryIbcArgs, fields?: IbcFields) => {
  const ibcQuery: string[] = []

  if (fields?.ibcChannels) {
    ibcQuery.push(
      gqlQuery(
        "ibcChannels",
        args.ibcChannels ?? {},
        convertObjectToPropertiesString(fields.ibcChannels),
        true
      )
    )
  }

  if (fields?.ibcTransfers) {
    ibcQuery.push(
      gqlQuery(
        "ibcTransfers",
        args.ibcTransfers ?? {},
        convertObjectToPropertiesString(fields.ibcTransfers),
        true
      )
    )
  }

  // Default Objects

  if (!fields?.ibcChannels) {
    ibcQuery.push(
      gqlQuery(
        "ibcChannels",
        args.ibcChannels ?? {},
        convertObjectToPropertiesString(defaultIbcChannelsResponse),
        true
      )
    )
  }

  if (args.ibcTransfers && !fields?.ibcTransfers) {
    ibcQuery.push(
      gqlQuery(
        "ibcTransfers",
        args.ibcTransfers,
        convertObjectToPropertiesString(defaultIbcTransfer),
        true
      )
    )
  }

  return `
      ibc {
          ${ibcQuery.join("\n")}
      }
    `
}

export const ibc = async (
  args: QueryIbcArgs,
  endpt: string,
  fields?: IbcFields
): Promise<GqlOutIbc> =>
  doGqlQuery(
    `{
      ${ibcQueryString(args, fields)}
    }`,
    endpt
  )
