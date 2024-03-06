import {
  convertObjectToPropertiesString,
  DeepPartial,
  defaultAccountLinksInfo,
  defaultLike,
  defaultTask,
  defaultTweet,
  defaultTwitterUser,
  doGqlQuery,
  GQLAccountLinksInfo,
  GQLLike,
  GQLMarketingQueryGqlAccountLinksInfoArgs,
  GQLMarketingQueryGqlLikesArgs,
  GQLMarketingQueryGqlTasksArgs,
  GQLMarketingQueryGqlTweetsArgs,
  GQLMarketingQueryGqlTwitterUserArgs,
  gqlQuery,
  GQLQuery,
  GQLTask,
  GQLTweet,
  GQLTwitterUser,
} from ".."

export type QueryMarketingArgs = {
  twitterUser?: GQLMarketingQueryGqlTwitterUserArgs
  tweets?: GQLMarketingQueryGqlTweetsArgs
  likes?: GQLMarketingQueryGqlLikesArgs
  tasks?: GQLMarketingQueryGqlTasksArgs
  accountLinksInfo?: GQLMarketingQueryGqlAccountLinksInfoArgs
}

export interface GqlOutMarketingQuery {
  marketing?: GQLQuery["marketing"]
}

export type MarketingFields = DeepPartial<{
  twitterUser?: DeepPartial<GQLTwitterUser>
  tweets?: DeepPartial<GQLTweet>
  likes?: DeepPartial<GQLLike>
  tasks?: DeepPartial<GQLTask>
  accountLinksInfo?: DeepPartial<GQLAccountLinksInfo>
  lastUpdatedTimestamp?: string
}>

export const marketingQueryString = (
  args: QueryMarketingArgs,
  fields?: MarketingFields
) => {
  const marketingQuery: string[] = []

  if (fields?.twitterUser) {
    marketingQuery.push(
      gqlQuery(
        "twitterUser",
        args.twitterUser ?? {},
        convertObjectToPropertiesString(fields.twitterUser),
        true
      )
    )
  }

  if (fields?.tweets) {
    marketingQuery.push(
      gqlQuery(
        "tweets",
        args.tweets ?? {},
        convertObjectToPropertiesString(fields.tweets),
        true
      )
    )
  }

  if (fields?.likes) {
    marketingQuery.push(
      gqlQuery(
        "likes",
        args.likes ?? {},
        convertObjectToPropertiesString(fields.likes),
        true
      )
    )
  }

  if (fields?.tasks) {
    marketingQuery.push(
      gqlQuery(
        "tasks",
        args.tasks ?? {},
        convertObjectToPropertiesString(fields.tasks),
        true
      )
    )
  }

  if (fields?.accountLinksInfo) {
    marketingQuery.push(
      gqlQuery(
        "accountLinksInfo",
        args.accountLinksInfo ?? {},
        convertObjectToPropertiesString(fields.accountLinksInfo),
        true
      )
    )
  }

  // Default Objects

  if (args.likes && !fields?.likes) {
    marketingQuery.push(
      gqlQuery(
        "likes",
        args.likes,
        convertObjectToPropertiesString(defaultLike),
        true
      )
    )
  }

  if (args.tasks && !fields?.tasks) {
    marketingQuery.push(
      gqlQuery(
        "tasks",
        args.tasks,
        convertObjectToPropertiesString(defaultTask),
        true
      )
    )
  }

  if (args.tweets && !fields?.tweets) {
    marketingQuery.push(
      gqlQuery(
        "tweets",
        args.tweets,
        convertObjectToPropertiesString(defaultTweet),
        true
      )
    )
  }

  if (args.twitterUser && !fields?.twitterUser) {
    marketingQuery.push(
      gqlQuery(
        "twitterUser",
        args.twitterUser,
        convertObjectToPropertiesString(defaultTwitterUser),
        true
      )
    )
  }

  if (args.accountLinksInfo && !fields?.accountLinksInfo) {
    marketingQuery.push(
      gqlQuery(
        "accountLinksInfo",
        args.accountLinksInfo,
        convertObjectToPropertiesString(defaultAccountLinksInfo),
        true
      )
    )
  }

  // Add lastUpdatedTimestamp if specified
  if (fields?.lastUpdatedTimestamp) {
    marketingQuery.push("lastUpdatedTimestamp")
  }

  return `
        marketing {
          ${marketingQuery.join("\n")}
        }
      `
}

export const marketingQuery = async (
  args: QueryMarketingArgs,
  endpt: string,
  fields?: MarketingFields
): Promise<GqlOutMarketingQuery> =>
  doGqlQuery(
    `{
        ${marketingQueryString(args, fields)}
      }`,
    endpt
  )
