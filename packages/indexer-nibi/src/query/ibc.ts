import { defaultIbcChannel, defaultIbcTransfer } from "../defaultObjects"
import { convertObjectToPropertiesString, doGqlQuery, gqlQuery } from "../gql"
import {
  Query,
  IbcIbcTransfersArgs,
  IbcChannelsResponse,
  IbcTransfer,
} from "../gql/generated"

export type QueryIbcArgs = {
  ibcChannels?: {}
  ibcTransfers?: IbcIbcTransfersArgs
}

export interface GqlOutIbc {
  ibc?: Query["ibc"]
}

export type IbcFields = Partial<{
  ibcChannels?: Partial<IbcChannelsResponse>
  ibcTransfers?: Partial<IbcTransfer>
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
        convertObjectToPropertiesString(defaultIbcChannel),
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
