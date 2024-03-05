import {
  defaultIbcChannelsResponse,
  defaultIbcTransfer,
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

export const ibcQueryString = (args: QueryIbcArgs, fields?: IbcFields) => {
  const ibcQuery: string[] = []

  // TODO: Currently hidden due to lack of arg output from graphql shcema
  // At the moment this code does nothing as fields.ibcChannels will never be non-nullish
  // Leaving code here in case the schema ever changes

  // if (fields?.ibcChannels) {
  //   ibcQuery.push(
  //     gqlQuery(
  //       "ibcChannels",
  //       args.ibcChannels ?? {},
  //       convertObjectToPropertiesString(fields.ibcChannels),
  //       true
  //     )
  //   )
  // }

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
        // args.ibcChannels ?? {},
        {},
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
