import {
  convertObjectToPropertiesString,
  doGqlQuery,
  gqlQuery,
  GQLQuery,
  GQLIbcgqlIbcTransfersArgs,
  GQLIbcChannelsResponse,
  GQLIbcTransfer,
  DeepPartial,
} from ".."

export type QueryIbcArgs = {
  ibcChannels?: undefined
  ibcTransfers?: GQLIbcgqlIbcTransfersArgs
}

export interface GqlOutIbc {
  ibc?: GQLQuery["ibc"]
}

export type IbcFields = DeepPartial<{
  ibcChannels?: DeepPartial<GQLIbcChannelsResponse>
  ibcTransfers?: DeepPartial<GQLIbcTransfer>
}>

export const ibcQueryString = (args: QueryIbcArgs, fields: IbcFields) => {
  const ibcQuery: string[] = []

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

  if (fields?.ibcChannels) {
    ibcQuery.push(
      gqlQuery(
        "ibcChannels",
        // No args
        {},
        convertObjectToPropertiesString(fields?.ibcChannels),
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
  fields: IbcFields
): Promise<GqlOutIbc> =>
  doGqlQuery(
    `{
      ${ibcQueryString(args, fields)}
    }`,
    endpt
  )
